import { SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';
import { AnyTuple } from '@polkadot/types-codec/types';
import { GenericExtrinsic } from '@polkadot/types';
import { ApiPromise } from '@polkadot/api';
import { BN } from '@polkadot/util';

import {
  Account,
  ExtrinsicSubscriptionData,
  MangataEventData,
  MangataGenericEvent,
  TxOptions,
} from '../types/common';
import { getTxNonce } from './getTxNonce';
import { dbInstance } from './inMemoryDatabase';
import { truncatedString } from './truncatedString';
import { getTxError } from './getTxError';
import { logger } from './mangataLogger';
import { hexToU8a } from '@polkadot/util';
import { signTypedData_v4 } from './metamaskSigning';

const subscribeToExtrinsic = async (
  api: ApiPromise,
  tx: GenericExtrinsic<AnyTuple>,
  result: ExtrinsicSubscriptionData,
  extractedAccount: string,
  txOptions: Partial<TxOptions> | undefined,
  subscribed: boolean,
  resolve: (
    value: MangataGenericEvent[] | PromiseLike<MangataGenericEvent[]>
  ) => void,
  reject: (reason?: any) => void,
  unsub: () => void
) => {
  const { status } = result;

  logger.debug(
    `Tx[${tx.hash.toString()}]who: ${extractedAccount} nonce: ${tx.nonce.toString()} => ${
      status.type
    }(${status.value.toString()})`
  );
  
  txOptions?.statusCallback?.(result);

  if ((status.isInBlock || status.isFinalized) && !subscribed) {
    subscribed = true;
    let inclusionBlockHash;
    if (status.isInBlock) {
      inclusionBlockHash = status.asInBlock.toString();
    } else if (status.isFinalized) {
      inclusionBlockHash = status.asFinalized.toString();
    }
    const inclusionBlockHeader = await api.rpc.chain.getHeader(
      inclusionBlockHash
    );
    const inclusionBlockNr = inclusionBlockHeader.number.toBn();
    const executionBlockStartNr = inclusionBlockNr.addn(0);
    const executionBlockStopNr = inclusionBlockNr.addn(10);
    const executionBlockNr = executionBlockStartNr;

    const unsubscribeNewHeads = await api.rpc.chain.subscribeNewHeads(
      async (lastHeader) => {
        const lastBlockNumber = lastHeader.number.toBn();

        if (executionBlockNr.gt(executionBlockStopNr)) {
          unsubscribeNewHeads();
          reject(
            `Tx([${tx.hash.toString()}])
                  was not executed in blocks : ${executionBlockStartNr.toString()}..${executionBlockStopNr.toString()}`
          );
          const nonce = await api.rpc.system.accountNextIndex(extractedAccount);

          const currentNonce: BN = nonce.toBn();
          dbInstance.setNonce(extractedAccount, currentNonce);
          unsub();
          return;
        }

        if (lastBlockNumber.gte(executionBlockNr)) {
          const blockHash = await api.rpc.chain.getBlockHash(executionBlockNr);
          const blockHeader = await api.rpc.chain.getHeader(blockHash);
          const extinsics: GenericExtrinsic<AnyTuple>[] = (
            await api.rpc.chain.getBlock(blockHeader.hash)
          ).block.extrinsics;
          const apiAt = await api.at(blockHeader.hash);
          const events = await apiAt.query.system.events();

          executionBlockNr.iaddn(1);

          const index = extinsics.findIndex((extrinsic) => {
            return extrinsic.hash.toString() === tx.hash.toString();
          });

          if (index < 0) {
            logger.debug(
              `Tx([${tx.hash.toString()}]) not found in block ${executionBlockNr} $([${truncatedString(
                blockHash.toString()
              )}])`
            );
            return;
          } else {
            unsubscribeNewHeads();
            logger.debug(
              `Tx[${tx.hash.toString()}]who:${extractedAccount} nonce:${tx.nonce.toString()} => Executed(${blockHash.toString()})`
            );
          }

          const eventsTriggeredByTx: MangataGenericEvent[] = events
            .filter((currentBlockEvent) => {
              return (
                currentBlockEvent.phase.isApplyExtrinsic &&
                currentBlockEvent.phase.asApplyExtrinsic.toPrimitive() === index
              );
            })
            .map((eventRecord) => {
              const { event, phase } = eventRecord;
              const types = event.typeDef;
              const eventData: MangataEventData[] = event.data.map(
                (d: any, i: any) => {
                  return {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    lookupName: types[i].lookupName!,
                    data: d,
                  };
                }
              );

              return {
                event,
                phase,
                section: event.section,
                method: event.method,
                metaDocumentation: event.meta.docs.toString(),
                eventData,
                error: getTxError(api, event.method, eventData),
              } as MangataGenericEvent;
            });

          txOptions?.extrinsicStatus?.(eventsTriggeredByTx);
          resolve(eventsTriggeredByTx);
          unsub();
        }
      }
    );
  }
};

export const signTx = async (
  api: ApiPromise,
  tx: SubmittableExtrinsic<'promise'>,
  account: Account,
  txOptions?: Partial<TxOptions>
): Promise<MangataGenericEvent[]> => {
  /* eslint-disable no-async-promise-executor */
  return new Promise<MangataGenericEvent[]>(async (resolve, reject) => {
    const extractedAccount =
      typeof account === 'string' ? account : account.address;

    const subscribed = false; // TODO: do we need this?
    const nonce = await getTxNonce(api, extractedAccount, txOptions);

    logger.debug(
      `submitting Tx[${tx.hash.toString()}]who: ${extractedAccount} nonce: ${nonce.toString()} `
    );

    try {
      if (txOptions?.signer) {
        await tx.signAsync(account, { nonce, signer: txOptions?.signer });

        const unsub = await tx.send(async (result) => {
          subscribeToExtrinsic(
            api,
            tx,
            result,
            extractedAccount,
            txOptions,
            subscribed,
            resolve,
            reject,
            unsub
          );
          
          if (result?.isError) {
            reject(`Tx([${tx.hash.toString()}]) Transaction error`);
            const nonce = await api.rpc.system.accountNextIndex(extractedAccount);
            const currentNonce: BN = nonce.toBn();
            dbInstance.setNonce(extractedAccount, currentNonce);
          }
        });
      } else if (txOptions?.metamaskProvider) {
        const metamaskTx = api.createType(
          'Extrinsic',
          { method: tx.method },
          { version: tx.version }
        );
        const signRes = await signTypedData_v4(
          api,
          tx,
          txOptions?.metamaskProvider
        );

        if (!signRes) {
          reject('Metamask sign error');
          return;
        }

        const { dotAddress, payload, signature } = signRes;
        const created_signature = api.createType('MultiSignature', {
          Eth: hexToU8a(signature),
        });

        metamaskTx.addSignature(dotAddress, created_signature.toHex(), payload.toHex());

        
        const unsub = await api.rpc.author.submitAndWatchExtrinsic(
          metamaskTx,
          async (status) => {
            subscribeToExtrinsic(
              api,
              metamaskTx,
              { status },
              extractedAccount,
              txOptions,
              subscribed,
              resolve,
              reject,
              unsub
            );
          }
        );
      }
    } catch (error: any) {
      const nonce = await api.rpc.system.accountNextIndex(extractedAccount);
      const currentNonce: BN = nonce.toBn();
      dbInstance.setNonce(extractedAccount, currentNonce);

      reject({
        data:
          error.message ||
          error.description ||
          error.data?.toString() ||
          error.toString(),
      });
    }
  });
};
