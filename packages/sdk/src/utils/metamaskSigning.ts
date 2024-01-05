import { ApiPromise } from '@polkadot/api';
import { Registry } from '@polkadot/types-codec/types';
import { u8aToHex, hexToU8a } from '@polkadot/util';
import { isNumber, objectSpread } from '@polkadot/util';
import { blake2AsU8a, encodeAddress } from '@polkadot/util-crypto';
import type { Header, Index } from '@polkadot/types/interfaces';
import { SubmittableExtrinsic } from '@polkadot/api/types';
import type { SignatureOptions, IExtrinsicEra } from '@polkadot/types/types';
import type { SDKProvider } from '@metamask/sdk';
import { GenericExtrinsicPayloadV4 } from '@polkadot/types';
import { Call } from '@polkadot/types/interfaces';
import type { HexString } from '@polkadot/util/types';

interface SigningResult {
    header: Header | null;
    mortalLength: number;
    nonce: Index;
}

export interface SignTypedData_v4 {
	dotAddress: string;
	payload: GenericExtrinsicPayloadV4;
	signature: HexString | null;
}

function makeEraOptions(api: ApiPromise, registry: Registry, partialOptions: Partial<SignatureOptions>, signingInfo: SigningResult) {
	const { header, mortalLength, nonce } = signingInfo;

	if (!header) {
	  if (partialOptions.era && !partialOptions.blockHash) {
		throw new Error('Expected blockHash to be passed alongside non-immortal era options');
	  }
	  if (isNumber(partialOptions.era)) {
		// since we have no header, it is immortal, remove any option overrides
		// so we only supply the genesisHash and no era to the construction
		delete partialOptions.era;
		delete partialOptions.blockHash;
	  }
	  return makeSignOptions(api, partialOptions, { nonce });
	}
	return makeSignOptions(api, partialOptions, {
	  blockHash: header.hash,
	  era: registry.createTypeUnsafe('ExtrinsicEra', [
		{
		  current: header.number,
		  period: partialOptions.era || mortalLength,
		},
	  ]) as IExtrinsicEra,
	  nonce,
	});
  }
  
function makeSignOptions(api: ApiPromise, partialOptions: Partial<SignatureOptions>, extras: Partial<SignatureOptions>): SignatureOptions {

	return objectSpread(
	  { blockHash: api.genesisHash, genesisHash: api.genesisHash },
	  partialOptions,
	  extras,
	  {
		runtimeVersion: api.runtimeVersion,
		signedExtensions: api.registry.signedExtensions,
		version: undefined, 
	  },
	);
  }
  
  export async function signTypedData_v4(api: ApiPromise, tx: SubmittableExtrinsic<"promise">, provider: SDKProvider): Promise<SignTypedData_v4> {
	const ethAddress = provider.selectedAddress;
	const dotAddress = encodeAddress(blake2AsU8a(hexToU8a(ethAddress)), 42); 
	const options: Partial<SignatureOptions> = {};  

	const signingInfo = await api.derive.tx.signingInfo(dotAddress, options.nonce, options.era);
	const eraOptions = makeEraOptions(api, api.registry, options, signingInfo);
	const payload = tx.inner.signature.createPayload(tx.method as Call, eraOptions);
	const raw_payload = payload.toU8a({ method: true });
  
	const result = await api.rpc.metamask.get_eip712_sign_data(tx.toHex().slice(2));
	const data = JSON.parse(result.toString());
	data.message.tx = u8aToHex(raw_payload).slice(2);
  
	const signature = await provider.request<HexString>({
		method: 'eth_signTypedData_v4',
		params: [ethAddress, JSON.stringify(data)],
	});

	return {
		dotAddress,
		payload,
		signature: signature || null
	}
  }
  