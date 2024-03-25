// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Enum, Struct, U256, U8aFixed, Vec, bool, u128, u32 } from '@polkadot/types-codec';
import type { EcdsaSignature } from '@polkadot/types/interfaces/extrinsics';
import type { BlockNumber, Digest, H256, H512, Hash } from '@polkadot/types/interfaces/runtime';

/** @name CancelResolution */
export interface CancelResolution extends Struct {
  readonly requestId: RequestId;
  readonly l2RequestId: u128;
  readonly cancelJustified: bool;
  readonly blockHash: H256;
}

/** @name Deposit */
export interface Deposit extends Struct {
  readonly requestId: RequestId;
  readonly depositRecipient: U8aFixed;
  readonly tokenAddress: U8aFixed;
  readonly amount: U256;
  readonly blockHash: H256;
}

/** @name EthereumSignature */
export interface EthereumSignature extends EcdsaSignature {}

/** @name Header */
export interface Header extends Struct {
  readonly parentHash: Hash;
  readonly number: Compact<BlockNumber>;
  readonly stateRoot: Hash;
  readonly extrinsicsRoot: Hash;
  readonly digest: Digest;
  readonly seed: ShufflingSeed;
  readonly count: BlockNumber;
}

/** @name L1Update */
export interface L1Update extends Struct {
  readonly pendingDeposits: Vec<Deposit>;
  readonly pendingCancelResultions: Vec<CancelResolution>;
  readonly pendingWithdrawalResolutions: Vec<WithdrawalResolution>;
  readonly pendingL2UpdatesToRemove: Vec<L2UpdatesToRemove>;
}

/** @name L2UpdatesToRemove */
export interface L2UpdatesToRemove extends Struct {
  readonly requestId: RequestId;
  readonly l2UpdatesToRemove: Vec<u128>;
  readonly blockHash: H256;
}

/** @name Origin */
export interface Origin extends Enum {
  readonly isL1: boolean;
  readonly isL2: boolean;
  readonly type: 'L1' | 'L2';
}

/** @name RequestId */
export interface RequestId extends Struct {
  readonly origin: Origin;
  readonly id: u128;
}

/** @name RpcAssetMetadata */
export interface RpcAssetMetadata extends Struct {
  readonly tokenId: TokenId;
  readonly decimals: u32;
  readonly name: Bytes;
  readonly symbol: Bytes;
}

/** @name ShufflingSeed */
export interface ShufflingSeed extends Struct {
  readonly seed: H256;
  readonly proof: H512;
}

/** @name TokenId */
export interface TokenId extends u32 {}

/** @name WithdrawalResolution */
export interface WithdrawalResolution extends Struct {
  readonly requestId: RequestId;
  readonly l2RequestId: u128;
  readonly status: bool;
  readonly blockHash: H256;
}

export type PHANTOM_DEFAULT = 'default';
