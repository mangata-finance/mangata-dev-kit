import { BN } from "@polkadot/util";
import { Keyring } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";

import {
  instance,
  createMangataToken,
  createToken,
  createUser,
  getExtrinsicData
} from "./init";
import { Batch } from "../types/utility";
import { CreatePool, MultiswapSellAsset } from "../types/xyk";

let testUser: KeyringPair;
let sudoUser: KeyringPair;
let firstTokenId: string | undefined;
let secondTokenId: string | undefined;

beforeEach(async () => {
  const keyring = new Keyring({ type: "sr25519" });
  testUser = createUser(keyring);
  sudoUser = createUser(keyring, "//Alice");

  const nonce = await instance.query.getNonce(sudoUser.address);

  const argsBatchAll: Batch = {
    account: sudoUser,
    calls: [
      await createToken(
        instance,
        testUser.address,
        new BN("1000000000000000000000000")
      ),
      await createToken(
        instance,
        testUser.address,
        new BN("1000000000000000000000000")
      ),
      await createMangataToken(
        instance,
        testUser.address,
        new BN("10000000000000000000000000")
      )
    ],
    txOptions: { nonce }
  };

  const data = await instance.batchAll(argsBatchAll);
  const searchTerms = ["tokens", "Created", testUser.address];
  const extrinsicData = getExtrinsicData({ data, searchTerms });
  firstTokenId = extrinsicData[0].eventData[0].data.toString();
  secondTokenId = extrinsicData[1].eventData[0].data.toString();
});

it("should sell asset", async () => {
  const argsPool: CreatePool = {
    account: testUser,
    firstTokenId: firstTokenId!,
    secondTokenId: secondTokenId!,
    firstTokenAmount: new BN(50000),
    secondTokenAmount: new BN(25000),
    txOptions: {
      extrinsicStatus: (data) => {
        const searchTerms = ["xyk", "PoolCreated", testUser.address];
        const extrinsicData = getExtrinsicData({ data, searchTerms });
        return expect(extrinsicData[0].method).toEqual("PoolCreated");
      }
    }
  };
  await instance.xyk.createPool(argsPool);

  await instance.rpc.waitForNewBlock(2);

  const argsMultiSellAsset: MultiswapSellAsset = {
    account: testUser,
    tokenIds: [firstTokenId!, secondTokenId!],
    amount: new BN(10000),
    minAmountOut: new BN(100),
    txOptions: {
      extrinsicStatus: (data) => {
        const searchTerms = ["xyk", "AssetsSwapped", testUser.address];
        const extrinsicData = getExtrinsicData({ data, searchTerms });
        return expect(extrinsicData[0].method).toEqual("AssetsSwapped");
      }
    }
  };
  await instance.xyk.multiswapSellAsset(argsMultiSellAsset);
});
