// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Result, Set, Struct, Text, U256, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, MultiAddress, Perbill, Permill } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: Null;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (6) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (7) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (20) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (22) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (25) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (27) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly isTxsEnqueued: boolean;
    readonly asTxsEnqueued: {
      readonly count: u64;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked' | 'TxsEnqueued';
  }

  /** @name FrameSupportDispatchDispatchInfo (28) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (29) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (30) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (31) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpArithmeticArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly isRootNotAllowed: boolean;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable' | 'RootNotAllowed';
  }

  /** @name SpRuntimeModuleError (32) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (33) */
  interface SpRuntimeTokenError extends Enum {
    readonly isFundsUnavailable: boolean;
    readonly isOnlyProvider: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly isCannotCreateHold: boolean;
    readonly isNotExpendable: boolean;
    readonly isBlocked: boolean;
    readonly type: 'FundsUnavailable' | 'OnlyProvider' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported' | 'CannotCreateHold' | 'NotExpendable' | 'Blocked';
  }

  /** @name SpArithmeticArithmeticError (34) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (35) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name CumulusPalletParachainSystemEvent (36) */
  interface CumulusPalletParachainSystemEvent extends Enum {
    readonly isValidationFunctionStored: boolean;
    readonly isValidationFunctionApplied: boolean;
    readonly asValidationFunctionApplied: {
      readonly relayChainBlockNum: u32;
    } & Struct;
    readonly isValidationFunctionDiscarded: boolean;
    readonly isUpgradeAuthorized: boolean;
    readonly asUpgradeAuthorized: {
      readonly codeHash: H256;
    } & Struct;
    readonly isDownwardMessagesReceived: boolean;
    readonly asDownwardMessagesReceived: {
      readonly count: u32;
    } & Struct;
    readonly isDownwardMessagesProcessed: boolean;
    readonly asDownwardMessagesProcessed: {
      readonly weightUsed: SpWeightsWeightV2Weight;
      readonly dmqHead: H256;
    } & Struct;
    readonly isUpwardMessageSent: boolean;
    readonly asUpwardMessageSent: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly type: 'ValidationFunctionStored' | 'ValidationFunctionApplied' | 'ValidationFunctionDiscarded' | 'UpgradeAuthorized' | 'DownwardMessagesReceived' | 'DownwardMessagesProcessed' | 'UpwardMessageSent';
  }

  /** @name PalletUtilityMangataEvent (38) */
  interface PalletUtilityMangataEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isBatchCompletedWithErrors: boolean;
    readonly isItemCompleted: boolean;
    readonly isItemFailed: boolean;
    readonly asItemFailed: {
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
  }

  /** @name PalletProxyEvent (40) */
  interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isPureCreated: boolean;
    readonly asPureCreated: {
      readonly pure: AccountId32;
      readonly who: AccountId32;
      readonly proxyType: CommonRuntimeConfigPalletProxyProxyType;
      readonly disambiguationIndex: u16;
    } & Struct;
    readonly isAnnounced: boolean;
    readonly asAnnounced: {
      readonly real: AccountId32;
      readonly proxy: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAdded: boolean;
    readonly asProxyAdded: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: CommonRuntimeConfigPalletProxyProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isProxyRemoved: boolean;
    readonly asProxyRemoved: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: CommonRuntimeConfigPalletProxyProxyType;
      readonly delay: u32;
    } & Struct;
    readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
  }

  /** @name CommonRuntimeConfigPalletProxyProxyType (41) */
  interface CommonRuntimeConfigPalletProxyProxyType extends Enum {
    readonly isAutoCompound: boolean;
    readonly type: 'AutoCompound';
  }

  /** @name PalletMaintenanceEvent (43) */
  interface PalletMaintenanceEvent extends Enum {
    readonly isMaintenanceModeSwitchedOn: boolean;
    readonly asMaintenanceModeSwitchedOn: AccountId32;
    readonly isMaintenanceModeSwitchedOff: boolean;
    readonly asMaintenanceModeSwitchedOff: AccountId32;
    readonly isUpgradabilityInMaintenanceModeSwitchedOn: boolean;
    readonly asUpgradabilityInMaintenanceModeSwitchedOn: AccountId32;
    readonly isUpgradabilityInMaintenanceModeSwitchedOff: boolean;
    readonly asUpgradabilityInMaintenanceModeSwitchedOff: AccountId32;
    readonly type: 'MaintenanceModeSwitchedOn' | 'MaintenanceModeSwitchedOff' | 'UpgradabilityInMaintenanceModeSwitchedOn' | 'UpgradabilityInMaintenanceModeSwitchedOff';
  }

  /** @name OrmlTokensModuleEvent (44) */
  interface OrmlTokensModuleEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly currencyId: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly status: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly free: u128;
      readonly reserved: u128;
    } & Struct;
    readonly isTotalIssuanceSet: boolean;
    readonly asTotalIssuanceSet: {
      readonly currencyId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly freeAmount: u128;
      readonly reservedAmount: u128;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isLockSet: boolean;
    readonly asLockSet: {
      readonly lockId: U8aFixed;
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isLockRemoved: boolean;
    readonly asLockRemoved: {
      readonly lockId: U8aFixed;
      readonly currencyId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isCreated: boolean;
    readonly asCreated: ITuple<[u32, AccountId32, u128]>;
    readonly isMinted: boolean;
    readonly asMinted: ITuple<[u32, AccountId32, u128]>;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly currencyId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly currencyId: u32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'BalanceSet' | 'TotalIssuanceSet' | 'Withdrawn' | 'Slashed' | 'Deposited' | 'LockSet' | 'LockRemoved' | 'Created' | 'Minted' | 'Locked' | 'Unlocked' | 'Issued' | 'Rescinded';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (46) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentMangataEvent (48) */
  interface PalletTransactionPaymentMangataEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletXykEvent (49) */
  interface PalletXykEvent extends Enum {
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: ITuple<[AccountId32, u32, u128, u32, u128]>;
    readonly isAssetsSwapped: boolean;
    readonly asAssetsSwapped: ITuple<[AccountId32, Vec<u32>, u128, u128]>;
    readonly isSellAssetFailedDueToSlippage: boolean;
    readonly asSellAssetFailedDueToSlippage: ITuple<[AccountId32, u32, u128, u32, u128, u128]>;
    readonly isBuyAssetFailedDueToSlippage: boolean;
    readonly asBuyAssetFailedDueToSlippage: ITuple<[AccountId32, u32, u128, u32, u128, u128]>;
    readonly isLiquidityMinted: boolean;
    readonly asLiquidityMinted: ITuple<[AccountId32, u32, u128, u32, u128, u32, u128]>;
    readonly isLiquidityBurned: boolean;
    readonly asLiquidityBurned: ITuple<[AccountId32, u32, u128, u32, u128, u32, u128]>;
    readonly isPoolPromotionUpdated: boolean;
    readonly asPoolPromotionUpdated: ITuple<[u32, Option<u8>]>;
    readonly isLiquidityActivated: boolean;
    readonly asLiquidityActivated: ITuple<[AccountId32, u32, u128]>;
    readonly isLiquidityDeactivated: boolean;
    readonly asLiquidityDeactivated: ITuple<[AccountId32, u32, u128]>;
    readonly isRewardsClaimed: boolean;
    readonly asRewardsClaimed: ITuple<[AccountId32, u32, u128]>;
    readonly isMultiSwapAssetFailedOnAtomicSwap: boolean;
    readonly asMultiSwapAssetFailedOnAtomicSwap: ITuple<[AccountId32, Vec<u32>, u128, SpRuntimeModuleError]>;
    readonly type: 'PoolCreated' | 'AssetsSwapped' | 'SellAssetFailedDueToSlippage' | 'BuyAssetFailedDueToSlippage' | 'LiquidityMinted' | 'LiquidityBurned' | 'PoolPromotionUpdated' | 'LiquidityActivated' | 'LiquidityDeactivated' | 'RewardsClaimed' | 'MultiSwapAssetFailedOnAtomicSwap';
  }

  /** @name PalletProofOfStakeEvent (52) */
  interface PalletProofOfStakeEvent extends Enum {
    readonly isPoolPromotionUpdated: boolean;
    readonly asPoolPromotionUpdated: ITuple<[u32, Option<u8>]>;
    readonly isLiquidityActivated: boolean;
    readonly asLiquidityActivated: ITuple<[AccountId32, u32, u128]>;
    readonly isLiquidityDeactivated: boolean;
    readonly asLiquidityDeactivated: ITuple<[AccountId32, u32, u128]>;
    readonly isRewardsClaimed: boolean;
    readonly asRewardsClaimed: ITuple<[AccountId32, u32, u128]>;
    readonly type: 'PoolPromotionUpdated' | 'LiquidityActivated' | 'LiquidityDeactivated' | 'RewardsClaimed';
  }

  /** @name PalletFeeLockEvent (53) */
  interface PalletFeeLockEvent extends Enum {
    readonly isFeeLockMetadataUpdated: boolean;
    readonly isFeeLockUnlocked: boolean;
    readonly asFeeLockUnlocked: ITuple<[AccountId32, u128]>;
    readonly isFeeLocked: boolean;
    readonly asFeeLocked: {
      readonly who: AccountId32;
      readonly lockAmount: u128;
      readonly totalLocked: u128;
    } & Struct;
    readonly type: 'FeeLockMetadataUpdated' | 'FeeLockUnlocked' | 'FeeLocked';
  }

  /** @name PalletVestingMangataEvent (54) */
  interface PalletVestingMangataEvent extends Enum {
    readonly isVestingUpdated: boolean;
    readonly asVestingUpdated: {
      readonly account: AccountId32;
      readonly tokenId: u32;
      readonly unvested: u128;
    } & Struct;
    readonly isVestingCompleted: boolean;
    readonly asVestingCompleted: {
      readonly account: AccountId32;
      readonly tokenId: u32;
    } & Struct;
    readonly type: 'VestingUpdated' | 'VestingCompleted';
  }

  /** @name PalletCrowdloanRewardsEvent (55) */
  interface PalletCrowdloanRewardsEvent extends Enum {
    readonly isInitialPaymentMade: boolean;
    readonly asInitialPaymentMade: ITuple<[AccountId32, u128]>;
    readonly isNativeIdentityAssociated: boolean;
    readonly asNativeIdentityAssociated: ITuple<[AccountId32, AccountId32, u128]>;
    readonly isRewardsPaid: boolean;
    readonly asRewardsPaid: ITuple<[AccountId32, u128]>;
    readonly isRewardAddressUpdated: boolean;
    readonly asRewardAddressUpdated: ITuple<[AccountId32, AccountId32]>;
    readonly isInitializedAlreadyInitializedAccount: boolean;
    readonly asInitializedAlreadyInitializedAccount: ITuple<[AccountId32, Option<AccountId32>, u128]>;
    readonly isInitializedAccountWithNotEnoughContribution: boolean;
    readonly asInitializedAccountWithNotEnoughContribution: ITuple<[AccountId32, Option<AccountId32>, u128]>;
    readonly type: 'InitialPaymentMade' | 'NativeIdentityAssociated' | 'RewardsPaid' | 'RewardAddressUpdated' | 'InitializedAlreadyInitializedAccount' | 'InitializedAccountWithNotEnoughContribution';
  }

  /** @name PalletIssuanceEvent (56) */
  interface PalletIssuanceEvent extends Enum {
    readonly isSessionIssuanceIssued: boolean;
    readonly asSessionIssuanceIssued: ITuple<[u32, u128, u128]>;
    readonly isSessionIssuanceRecorded: boolean;
    readonly asSessionIssuanceRecorded: ITuple<[u32, u128, u128]>;
    readonly isIssuanceConfigInitialized: boolean;
    readonly asIssuanceConfigInitialized: PalletIssuanceIssuanceInfo;
    readonly isTgeFinalized: boolean;
    readonly isTgeInstanceFailed: boolean;
    readonly asTgeInstanceFailed: PalletIssuanceTgeInfo;
    readonly isTgeInstanceSucceeded: boolean;
    readonly asTgeInstanceSucceeded: PalletIssuanceTgeInfo;
    readonly type: 'SessionIssuanceIssued' | 'SessionIssuanceRecorded' | 'IssuanceConfigInitialized' | 'TgeFinalized' | 'TgeInstanceFailed' | 'TgeInstanceSucceeded';
  }

  /** @name PalletIssuanceIssuanceInfo (57) */
  interface PalletIssuanceIssuanceInfo extends Struct {
    readonly cap: u128;
    readonly issuanceAtInit: u128;
    readonly linearIssuanceBlocks: u32;
    readonly liquidityMiningSplit: Perbill;
    readonly stakingSplit: Perbill;
    readonly totalCrowdloanAllocation: u128;
  }

  /** @name PalletIssuanceTgeInfo (59) */
  interface PalletIssuanceTgeInfo extends Struct {
    readonly who: AccountId32;
    readonly amount: u128;
  }

  /** @name PalletMultipurposeLiquidityEvent (60) */
  interface PalletMultipurposeLiquidityEvent extends Enum {
    readonly isVestingTokensReserved: boolean;
    readonly asVestingTokensReserved: ITuple<[AccountId32, u32, u128]>;
    readonly isTokensRelockedFromReserve: boolean;
    readonly asTokensRelockedFromReserve: ITuple<[AccountId32, u32, u128, u128]>;
    readonly type: 'VestingTokensReserved' | 'TokensRelockedFromReserve';
  }

  /** @name PalletBootstrapEvent (61) */
  interface PalletBootstrapEvent extends Enum {
    readonly isProvisioned: boolean;
    readonly asProvisioned: ITuple<[u32, u128]>;
    readonly isVestedProvisioned: boolean;
    readonly asVestedProvisioned: ITuple<[u32, u128]>;
    readonly isRewardsLiquidityAcitvationFailed: boolean;
    readonly asRewardsLiquidityAcitvationFailed: ITuple<[AccountId32, u32, u128]>;
    readonly isRewardsClaimed: boolean;
    readonly asRewardsClaimed: ITuple<[u32, u128]>;
    readonly isAccountsWhitelisted: boolean;
    readonly isBootstrapParitallyPreFinalized: boolean;
    readonly isBootstrapReadyToBeFinalized: boolean;
    readonly isBootstrapFinalized: boolean;
    readonly type: 'Provisioned' | 'VestedProvisioned' | 'RewardsLiquidityAcitvationFailed' | 'RewardsClaimed' | 'AccountsWhitelisted' | 'BootstrapParitallyPreFinalized' | 'BootstrapReadyToBeFinalized' | 'BootstrapFinalized';
  }

  /** @name ParachainStakingEvent (62) */
  interface ParachainStakingEvent extends Enum {
    readonly isNewRound: boolean;
    readonly asNewRound: ITuple<[u32, u32, u32, u128]>;
    readonly isJoinedCollatorCandidates: boolean;
    readonly asJoinedCollatorCandidates: ITuple<[AccountId32, u128, u128]>;
    readonly isCollatorChosen: boolean;
    readonly asCollatorChosen: ITuple<[u32, AccountId32, u128]>;
    readonly isCandidateBondMoreRequested: boolean;
    readonly asCandidateBondMoreRequested: ITuple<[AccountId32, u128, u32]>;
    readonly isCandidateBondLessRequested: boolean;
    readonly asCandidateBondLessRequested: ITuple<[AccountId32, u128, u32]>;
    readonly isCandidateBondedMore: boolean;
    readonly asCandidateBondedMore: ITuple<[AccountId32, u128, u128]>;
    readonly isCandidateBondedLess: boolean;
    readonly asCandidateBondedLess: ITuple<[AccountId32, u128, u128]>;
    readonly isCandidateWentOffline: boolean;
    readonly asCandidateWentOffline: ITuple<[u32, AccountId32]>;
    readonly isCandidateBackOnline: boolean;
    readonly asCandidateBackOnline: ITuple<[u32, AccountId32]>;
    readonly isCandidateScheduledExit: boolean;
    readonly asCandidateScheduledExit: ITuple<[u32, AccountId32, u32]>;
    readonly isCancelledCandidateExit: boolean;
    readonly asCancelledCandidateExit: AccountId32;
    readonly isCancelledCandidateBondChange: boolean;
    readonly asCancelledCandidateBondChange: ITuple<[AccountId32, ParachainStakingCandidateBondRequest]>;
    readonly isCandidateLeft: boolean;
    readonly asCandidateLeft: ITuple<[AccountId32, u128, u128]>;
    readonly isDelegationIncreaseScheduled: boolean;
    readonly asDelegationIncreaseScheduled: ITuple<[AccountId32, AccountId32, u128, u32]>;
    readonly isDelegationDecreaseScheduled: boolean;
    readonly asDelegationDecreaseScheduled: ITuple<[AccountId32, AccountId32, u128, u32]>;
    readonly isDelegationIncreased: boolean;
    readonly asDelegationIncreased: ITuple<[AccountId32, AccountId32, u128, bool]>;
    readonly isDelegationDecreased: boolean;
    readonly asDelegationDecreased: ITuple<[AccountId32, AccountId32, u128, bool]>;
    readonly isDelegatorExitScheduled: boolean;
    readonly asDelegatorExitScheduled: ITuple<[u32, AccountId32, u32]>;
    readonly isDelegationRevocationScheduled: boolean;
    readonly asDelegationRevocationScheduled: ITuple<[u32, AccountId32, AccountId32, u32]>;
    readonly isDelegatorLeft: boolean;
    readonly asDelegatorLeft: ITuple<[AccountId32, u128]>;
    readonly isDelegationRevoked: boolean;
    readonly asDelegationRevoked: ITuple<[AccountId32, AccountId32, u128]>;
    readonly isDelegatorExitCancelled: boolean;
    readonly asDelegatorExitCancelled: AccountId32;
    readonly isCancelledDelegationRequest: boolean;
    readonly asCancelledDelegationRequest: ITuple<[AccountId32, ParachainStakingDelegationRequest]>;
    readonly isDelegation: boolean;
    readonly asDelegation: ITuple<[AccountId32, u128, AccountId32, ParachainStakingDelegatorAdded]>;
    readonly isDelegatorLeftCandidate: boolean;
    readonly asDelegatorLeftCandidate: ITuple<[AccountId32, AccountId32, u128, u128]>;
    readonly isDelegatorDueReward: boolean;
    readonly asDelegatorDueReward: ITuple<[u32, AccountId32, AccountId32, u128]>;
    readonly isRewarded: boolean;
    readonly asRewarded: ITuple<[u32, AccountId32, u128]>;
    readonly isCollatorRewardsDistributed: boolean;
    readonly asCollatorRewardsDistributed: ITuple<[AccountId32, ParachainStakingPayoutRounds]>;
    readonly isStakeExpectationsSet: boolean;
    readonly asStakeExpectationsSet: ITuple<[u128, u128, u128]>;
    readonly isTotalSelectedSet: boolean;
    readonly asTotalSelectedSet: ITuple<[u32, u32]>;
    readonly isCollatorCommissionSet: boolean;
    readonly asCollatorCommissionSet: ITuple<[Perbill, Perbill]>;
    readonly isCandidateAggregatorUpdated: boolean;
    readonly asCandidateAggregatorUpdated: ITuple<[AccountId32, Option<AccountId32>]>;
    readonly isAggregatorMetadataUpdated: boolean;
    readonly asAggregatorMetadataUpdated: AccountId32;
    readonly type: 'NewRound' | 'JoinedCollatorCandidates' | 'CollatorChosen' | 'CandidateBondMoreRequested' | 'CandidateBondLessRequested' | 'CandidateBondedMore' | 'CandidateBondedLess' | 'CandidateWentOffline' | 'CandidateBackOnline' | 'CandidateScheduledExit' | 'CancelledCandidateExit' | 'CancelledCandidateBondChange' | 'CandidateLeft' | 'DelegationIncreaseScheduled' | 'DelegationDecreaseScheduled' | 'DelegationIncreased' | 'DelegationDecreased' | 'DelegatorExitScheduled' | 'DelegationRevocationScheduled' | 'DelegatorLeft' | 'DelegationRevoked' | 'DelegatorExitCancelled' | 'CancelledDelegationRequest' | 'Delegation' | 'DelegatorLeftCandidate' | 'DelegatorDueReward' | 'Rewarded' | 'CollatorRewardsDistributed' | 'StakeExpectationsSet' | 'TotalSelectedSet' | 'CollatorCommissionSet' | 'CandidateAggregatorUpdated' | 'AggregatorMetadataUpdated';
  }

  /** @name ParachainStakingCandidateBondRequest (63) */
  interface ParachainStakingCandidateBondRequest extends Struct {
    readonly amount: u128;
    readonly change: ParachainStakingCandidateBondChange;
    readonly whenExecutable: u32;
  }

  /** @name ParachainStakingCandidateBondChange (64) */
  interface ParachainStakingCandidateBondChange extends Enum {
    readonly isIncrease: boolean;
    readonly isDecrease: boolean;
    readonly type: 'Increase' | 'Decrease';
  }

  /** @name ParachainStakingDelegationRequest (65) */
  interface ParachainStakingDelegationRequest extends Struct {
    readonly collator: AccountId32;
    readonly amount: u128;
    readonly whenExecutable: u32;
    readonly action: ParachainStakingDelegationChange;
  }

  /** @name ParachainStakingDelegationChange (66) */
  interface ParachainStakingDelegationChange extends Enum {
    readonly isRevoke: boolean;
    readonly isIncrease: boolean;
    readonly isDecrease: boolean;
    readonly type: 'Revoke' | 'Increase' | 'Decrease';
  }

  /** @name ParachainStakingDelegatorAdded (67) */
  interface ParachainStakingDelegatorAdded extends Enum {
    readonly isAddedToTop: boolean;
    readonly asAddedToTop: {
      readonly newTotal: u128;
    } & Struct;
    readonly isAddedToBottom: boolean;
    readonly type: 'AddedToTop' | 'AddedToBottom';
  }

  /** @name ParachainStakingPayoutRounds (68) */
  interface ParachainStakingPayoutRounds extends Enum {
    readonly isAll: boolean;
    readonly isPartial: boolean;
    readonly asPartial: Vec<u32>;
    readonly type: 'All' | 'Partial';
  }

  /** @name PalletSessionEvent (69) */
  interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly type: 'NewSession';
  }

  /** @name CumulusPalletXcmpQueueEvent (70) */
  interface CumulusPalletXcmpQueueEvent extends Enum {
    readonly isSuccess: boolean;
    readonly asSuccess: {
      readonly messageHash: U8aFixed;
      readonly messageId: U8aFixed;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isFail: boolean;
    readonly asFail: {
      readonly messageHash: U8aFixed;
      readonly messageId: U8aFixed;
      readonly error: StagingXcmV3TraitsError;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isBadVersion: boolean;
    readonly asBadVersion: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly isBadFormat: boolean;
    readonly asBadFormat: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly isXcmpMessageSent: boolean;
    readonly asXcmpMessageSent: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly sender: u32;
      readonly sentAt: u32;
      readonly index: u64;
      readonly required: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: {
      readonly index: u64;
      readonly used: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Success' | 'Fail' | 'BadVersion' | 'BadFormat' | 'XcmpMessageSent' | 'OverweightEnqueued' | 'OverweightServiced';
  }

  /** @name StagingXcmV3TraitsError (71) */
  interface StagingXcmV3TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isLocationFull: boolean;
    readonly isLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isExpectationFalse: boolean;
    readonly isPalletNotFound: boolean;
    readonly isNameMismatch: boolean;
    readonly isVersionIncompatible: boolean;
    readonly isHoldingWouldOverflow: boolean;
    readonly isExportError: boolean;
    readonly isReanchorFailed: boolean;
    readonly isNoDeal: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockError: boolean;
    readonly isNoPermission: boolean;
    readonly isUnanchored: boolean;
    readonly isNotDepositable: boolean;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: SpWeightsWeightV2Weight;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly isExceedsStackLimit: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'LocationFull' | 'LocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'ExpectationFalse' | 'PalletNotFound' | 'NameMismatch' | 'VersionIncompatible' | 'HoldingWouldOverflow' | 'ExportError' | 'ReanchorFailed' | 'NoDeal' | 'FeesNotMet' | 'LockError' | 'NoPermission' | 'Unanchored' | 'NotDepositable' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable' | 'ExceedsStackLimit';
  }

  /** @name PalletXcmEvent (73) */
  interface PalletXcmEvent extends Enum {
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly outcome: StagingXcmV3TraitsOutcome;
    } & Struct;
    readonly isSent: boolean;
    readonly asSent: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly destination: StagingXcmV3MultiLocation;
      readonly message: StagingXcmV3Xcm;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isUnexpectedResponse: boolean;
    readonly asUnexpectedResponse: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isResponseReady: boolean;
    readonly asResponseReady: {
      readonly queryId: u64;
      readonly response: StagingXcmV3Response;
    } & Struct;
    readonly isNotified: boolean;
    readonly asNotified: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isNotifyOverweight: boolean;
    readonly asNotifyOverweight: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
      readonly actualWeight: SpWeightsWeightV2Weight;
      readonly maxBudgetedWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isNotifyDispatchError: boolean;
    readonly asNotifyDispatchError: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isNotifyDecodeFailed: boolean;
    readonly asNotifyDecodeFailed: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isInvalidResponder: boolean;
    readonly asInvalidResponder: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
      readonly expectedLocation: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly isInvalidResponderVersion: boolean;
    readonly asInvalidResponderVersion: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isResponseTaken: boolean;
    readonly asResponseTaken: {
      readonly queryId: u64;
    } & Struct;
    readonly isAssetsTrapped: boolean;
    readonly asAssetsTrapped: {
      readonly hash_: H256;
      readonly origin: StagingXcmV3MultiLocation;
      readonly assets: StagingXcmVersionedMultiAssets;
    } & Struct;
    readonly isVersionChangeNotified: boolean;
    readonly asVersionChangeNotified: {
      readonly destination: StagingXcmV3MultiLocation;
      readonly result: u32;
      readonly cost: StagingXcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isSupportedVersionChanged: boolean;
    readonly asSupportedVersionChanged: {
      readonly location: StagingXcmV3MultiLocation;
      readonly version: u32;
    } & Struct;
    readonly isNotifyTargetSendFail: boolean;
    readonly asNotifyTargetSendFail: {
      readonly location: StagingXcmV3MultiLocation;
      readonly queryId: u64;
      readonly error: StagingXcmV3TraitsError;
    } & Struct;
    readonly isNotifyTargetMigrationFail: boolean;
    readonly asNotifyTargetMigrationFail: {
      readonly location: StagingXcmVersionedMultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isInvalidQuerierVersion: boolean;
    readonly asInvalidQuerierVersion: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isInvalidQuerier: boolean;
    readonly asInvalidQuerier: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
      readonly expectedQuerier: StagingXcmV3MultiLocation;
      readonly maybeActualQuerier: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly isVersionNotifyStarted: boolean;
    readonly asVersionNotifyStarted: {
      readonly destination: StagingXcmV3MultiLocation;
      readonly cost: StagingXcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isVersionNotifyRequested: boolean;
    readonly asVersionNotifyRequested: {
      readonly destination: StagingXcmV3MultiLocation;
      readonly cost: StagingXcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isVersionNotifyUnrequested: boolean;
    readonly asVersionNotifyUnrequested: {
      readonly destination: StagingXcmV3MultiLocation;
      readonly cost: StagingXcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isFeesPaid: boolean;
    readonly asFeesPaid: {
      readonly paying: StagingXcmV3MultiLocation;
      readonly fees: StagingXcmV3MultiassetMultiAssets;
    } & Struct;
    readonly isAssetsClaimed: boolean;
    readonly asAssetsClaimed: {
      readonly hash_: H256;
      readonly origin: StagingXcmV3MultiLocation;
      readonly assets: StagingXcmVersionedMultiAssets;
    } & Struct;
    readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail' | 'InvalidQuerierVersion' | 'InvalidQuerier' | 'VersionNotifyStarted' | 'VersionNotifyRequested' | 'VersionNotifyUnrequested' | 'FeesPaid' | 'AssetsClaimed';
  }

  /** @name StagingXcmV3TraitsOutcome (74) */
  interface StagingXcmV3TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: SpWeightsWeightV2Weight;
    readonly isIncomplete: boolean;
    readonly asIncomplete: ITuple<[SpWeightsWeightV2Weight, StagingXcmV3TraitsError]>;
    readonly isError: boolean;
    readonly asError: StagingXcmV3TraitsError;
    readonly type: 'Complete' | 'Incomplete' | 'Error';
  }

  /** @name StagingXcmV3MultiLocation (75) */
  interface StagingXcmV3MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: StagingXcmV3Junctions;
  }

  /** @name StagingXcmV3Junctions (76) */
  interface StagingXcmV3Junctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: StagingXcmV3Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name StagingXcmV3Junction (77) */
  interface StagingXcmV3Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: Option<StagingXcmV3JunctionNetworkId>;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: Option<StagingXcmV3JunctionNetworkId>;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: Option<StagingXcmV3JunctionNetworkId>;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: {
      readonly length: u8;
      readonly data: U8aFixed;
    } & Struct;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: StagingXcmV3JunctionBodyId;
      readonly part: StagingXcmV3JunctionBodyPart;
    } & Struct;
    readonly isGlobalConsensus: boolean;
    readonly asGlobalConsensus: StagingXcmV3JunctionNetworkId;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
  }

  /** @name StagingXcmV3JunctionNetworkId (80) */
  interface StagingXcmV3JunctionNetworkId extends Enum {
    readonly isByGenesis: boolean;
    readonly asByGenesis: U8aFixed;
    readonly isByFork: boolean;
    readonly asByFork: {
      readonly blockNumber: u64;
      readonly blockHash: U8aFixed;
    } & Struct;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly isWestend: boolean;
    readonly isRococo: boolean;
    readonly isWococo: boolean;
    readonly isEthereum: boolean;
    readonly asEthereum: {
      readonly chainId: Compact<u64>;
    } & Struct;
    readonly isBitcoinCore: boolean;
    readonly isBitcoinCash: boolean;
    readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash';
  }

  /** @name StagingXcmV3JunctionBodyId (83) */
  interface StagingXcmV3JunctionBodyId extends Enum {
    readonly isUnit: boolean;
    readonly isMoniker: boolean;
    readonly asMoniker: U8aFixed;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Moniker' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name StagingXcmV3JunctionBodyPart (84) */
  interface StagingXcmV3JunctionBodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name StagingXcmV3Xcm (85) */
  interface StagingXcmV3Xcm extends Vec<StagingXcmV3Instruction> {}

  /** @name StagingXcmV3Instruction (87) */
  interface StagingXcmV3Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: StagingXcmV3MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: StagingXcmV3MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: StagingXcmV3MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: StagingXcmV3Response;
      readonly maxWeight: SpWeightsWeightV2Weight;
      readonly querier: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: StagingXcmV3MultiassetMultiAssets;
      readonly beneficiary: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: StagingXcmV3MultiassetMultiAssets;
      readonly dest: StagingXcmV3MultiLocation;
      readonly xcm: StagingXcmV3Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originKind: StagingXcmV2OriginKind;
      readonly requireWeightAtMost: SpWeightsWeightV2Weight;
      readonly call: StagingXcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: StagingXcmV3Junctions;
    readonly isReportError: boolean;
    readonly asReportError: StagingXcmV3QueryResponseInfo;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
      readonly beneficiary: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
      readonly dest: StagingXcmV3MultiLocation;
      readonly xcm: StagingXcmV3Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: StagingXcmV3MultiassetMultiAssetFilter;
      readonly want: StagingXcmV3MultiassetMultiAssets;
      readonly maximal: bool;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
      readonly reserve: StagingXcmV3MultiLocation;
      readonly xcm: StagingXcmV3Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
      readonly dest: StagingXcmV3MultiLocation;
      readonly xcm: StagingXcmV3Xcm;
    } & Struct;
    readonly isReportHolding: boolean;
    readonly asReportHolding: {
      readonly responseInfo: StagingXcmV3QueryResponseInfo;
      readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: StagingXcmV3MultiAsset;
      readonly weightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: StagingXcmV3Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: StagingXcmV3Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: StagingXcmV3MultiassetMultiAssets;
      readonly ticket: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly isBurnAsset: boolean;
    readonly asBurnAsset: StagingXcmV3MultiassetMultiAssets;
    readonly isExpectAsset: boolean;
    readonly asExpectAsset: StagingXcmV3MultiassetMultiAssets;
    readonly isExpectOrigin: boolean;
    readonly asExpectOrigin: Option<StagingXcmV3MultiLocation>;
    readonly isExpectError: boolean;
    readonly asExpectError: Option<ITuple<[u32, StagingXcmV3TraitsError]>>;
    readonly isExpectTransactStatus: boolean;
    readonly asExpectTransactStatus: StagingXcmV3MaybeErrorCode;
    readonly isQueryPallet: boolean;
    readonly asQueryPallet: {
      readonly moduleName: Bytes;
      readonly responseInfo: StagingXcmV3QueryResponseInfo;
    } & Struct;
    readonly isExpectPallet: boolean;
    readonly asExpectPallet: {
      readonly index: Compact<u32>;
      readonly name: Bytes;
      readonly moduleName: Bytes;
      readonly crateMajor: Compact<u32>;
      readonly minCrateMinor: Compact<u32>;
    } & Struct;
    readonly isReportTransactStatus: boolean;
    readonly asReportTransactStatus: StagingXcmV3QueryResponseInfo;
    readonly isClearTransactStatus: boolean;
    readonly isUniversalOrigin: boolean;
    readonly asUniversalOrigin: StagingXcmV3Junction;
    readonly isExportMessage: boolean;
    readonly asExportMessage: {
      readonly network: StagingXcmV3JunctionNetworkId;
      readonly destination: StagingXcmV3Junctions;
      readonly xcm: StagingXcmV3Xcm;
    } & Struct;
    readonly isLockAsset: boolean;
    readonly asLockAsset: {
      readonly asset: StagingXcmV3MultiAsset;
      readonly unlocker: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isUnlockAsset: boolean;
    readonly asUnlockAsset: {
      readonly asset: StagingXcmV3MultiAsset;
      readonly target: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isNoteUnlockable: boolean;
    readonly asNoteUnlockable: {
      readonly asset: StagingXcmV3MultiAsset;
      readonly owner: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isRequestUnlock: boolean;
    readonly asRequestUnlock: {
      readonly asset: StagingXcmV3MultiAsset;
      readonly locker: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isSetFeesMode: boolean;
    readonly asSetFeesMode: {
      readonly jitWithdraw: bool;
    } & Struct;
    readonly isSetTopic: boolean;
    readonly asSetTopic: U8aFixed;
    readonly isClearTopic: boolean;
    readonly isAliasOrigin: boolean;
    readonly asAliasOrigin: StagingXcmV3MultiLocation;
    readonly isUnpaidExecution: boolean;
    readonly asUnpaidExecution: {
      readonly weightLimit: StagingXcmV3WeightLimit;
      readonly checkOrigin: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
  }

  /** @name StagingXcmV3MultiassetMultiAssets (88) */
  interface StagingXcmV3MultiassetMultiAssets extends Vec<StagingXcmV3MultiAsset> {}

  /** @name StagingXcmV3MultiAsset (90) */
  interface StagingXcmV3MultiAsset extends Struct {
    readonly id: StagingXcmV3MultiassetAssetId;
    readonly fun: StagingXcmV3MultiassetFungibility;
  }

  /** @name StagingXcmV3MultiassetAssetId (91) */
  interface StagingXcmV3MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: StagingXcmV3MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: U8aFixed;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name StagingXcmV3MultiassetFungibility (92) */
  interface StagingXcmV3MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: StagingXcmV3MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV3MultiassetAssetInstance (93) */
  interface StagingXcmV3MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32';
  }

  /** @name StagingXcmV3Response (95) */
  interface StagingXcmV3Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: StagingXcmV3MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, StagingXcmV3TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly isPalletsInfo: boolean;
    readonly asPalletsInfo: Vec<StagingXcmV3PalletInfo>;
    readonly isDispatchResult: boolean;
    readonly asDispatchResult: StagingXcmV3MaybeErrorCode;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
  }

  /** @name StagingXcmV3PalletInfo (99) */
  interface StagingXcmV3PalletInfo extends Struct {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly major: Compact<u32>;
    readonly minor: Compact<u32>;
    readonly patch: Compact<u32>;
  }

  /** @name StagingXcmV3MaybeErrorCode (102) */
  interface StagingXcmV3MaybeErrorCode extends Enum {
    readonly isSuccess: boolean;
    readonly isError: boolean;
    readonly asError: Bytes;
    readonly isTruncatedError: boolean;
    readonly asTruncatedError: Bytes;
    readonly type: 'Success' | 'Error' | 'TruncatedError';
  }

  /** @name StagingXcmV2OriginKind (105) */
  interface StagingXcmV2OriginKind extends Enum {
    readonly isNative: boolean;
    readonly isSovereignAccount: boolean;
    readonly isSuperuser: boolean;
    readonly isXcm: boolean;
    readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
  }

  /** @name StagingXcmDoubleEncoded (106) */
  interface StagingXcmDoubleEncoded extends Struct {
    readonly encoded: Bytes;
  }

  /** @name StagingXcmV3QueryResponseInfo (107) */
  interface StagingXcmV3QueryResponseInfo extends Struct {
    readonly destination: StagingXcmV3MultiLocation;
    readonly queryId: Compact<u64>;
    readonly maxWeight: SpWeightsWeightV2Weight;
  }

  /** @name StagingXcmV3MultiassetMultiAssetFilter (108) */
  interface StagingXcmV3MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: StagingXcmV3MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: StagingXcmV3MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name StagingXcmV3MultiassetWildMultiAsset (109) */
  interface StagingXcmV3MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: StagingXcmV3MultiassetAssetId;
      readonly fun: StagingXcmV3MultiassetWildFungibility;
    } & Struct;
    readonly isAllCounted: boolean;
    readonly asAllCounted: Compact<u32>;
    readonly isAllOfCounted: boolean;
    readonly asAllOfCounted: {
      readonly id: StagingXcmV3MultiassetAssetId;
      readonly fun: StagingXcmV3MultiassetWildFungibility;
      readonly count: Compact<u32>;
    } & Struct;
    readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
  }

  /** @name StagingXcmV3MultiassetWildFungibility (110) */
  interface StagingXcmV3MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV3WeightLimit (111) */
  interface StagingXcmV3WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: SpWeightsWeightV2Weight;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name StagingXcmVersionedMultiAssets (112) */
  interface StagingXcmVersionedMultiAssets extends Enum {
    readonly isV2: boolean;
    readonly asV2: StagingXcmV2MultiassetMultiAssets;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3MultiassetMultiAssets;
    readonly type: 'V2' | 'V3';
  }

  /** @name StagingXcmV2MultiassetMultiAssets (113) */
  interface StagingXcmV2MultiassetMultiAssets extends Vec<StagingXcmV2MultiAsset> {}

  /** @name StagingXcmV2MultiAsset (115) */
  interface StagingXcmV2MultiAsset extends Struct {
    readonly id: StagingXcmV2MultiassetAssetId;
    readonly fun: StagingXcmV2MultiassetFungibility;
  }

  /** @name StagingXcmV2MultiassetAssetId (116) */
  interface StagingXcmV2MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: StagingXcmV2MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: Bytes;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name StagingXcmV2MultiLocation (117) */
  interface StagingXcmV2MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: StagingXcmV2MultilocationJunctions;
  }

  /** @name StagingXcmV2MultilocationJunctions (118) */
  interface StagingXcmV2MultilocationJunctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: StagingXcmV2Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name StagingXcmV2Junction (119) */
  interface StagingXcmV2Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: StagingXcmV2NetworkId;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: StagingXcmV2NetworkId;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: StagingXcmV2NetworkId;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: Bytes;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: StagingXcmV2BodyId;
      readonly part: StagingXcmV2BodyPart;
    } & Struct;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
  }

  /** @name StagingXcmV2NetworkId (120) */
  interface StagingXcmV2NetworkId extends Enum {
    readonly isAny: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
  }

  /** @name StagingXcmV2BodyId (122) */
  interface StagingXcmV2BodyId extends Enum {
    readonly isUnit: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name StagingXcmV2BodyPart (123) */
  interface StagingXcmV2BodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name StagingXcmV2MultiassetFungibility (124) */
  interface StagingXcmV2MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: StagingXcmV2MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV2MultiassetAssetInstance (125) */
  interface StagingXcmV2MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly isBlob: boolean;
    readonly asBlob: Bytes;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
  }

  /** @name StagingXcmVersionedMultiLocation (126) */
  interface StagingXcmVersionedMultiLocation extends Enum {
    readonly isV2: boolean;
    readonly asV2: StagingXcmV2MultiLocation;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3MultiLocation;
    readonly type: 'V2' | 'V3';
  }

  /** @name CumulusPalletXcmEvent (127) */
  interface CumulusPalletXcmEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: U8aFixed;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: U8aFixed;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: ITuple<[U8aFixed, StagingXcmV3TraitsOutcome]>;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
  }

  /** @name CumulusPalletDmpQueueEvent (128) */
  interface CumulusPalletDmpQueueEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: {
      readonly messageHash: U8aFixed;
      readonly messageId: U8aFixed;
      readonly outcome: StagingXcmV3TraitsOutcome;
    } & Struct;
    readonly isWeightExhausted: boolean;
    readonly asWeightExhausted: {
      readonly messageHash: U8aFixed;
      readonly messageId: U8aFixed;
      readonly remainingWeight: SpWeightsWeightV2Weight;
      readonly requiredWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly messageHash: U8aFixed;
      readonly messageId: U8aFixed;
      readonly overweightIndex: u64;
      readonly requiredWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: {
      readonly overweightIndex: u64;
      readonly weightUsed: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isMaxMessagesExhausted: boolean;
    readonly asMaxMessagesExhausted: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward' | 'WeightExhausted' | 'OverweightEnqueued' | 'OverweightServiced' | 'MaxMessagesExhausted';
  }

  /** @name OrmlXtokensModuleEvent (129) */
  interface OrmlXtokensModuleEvent extends Enum {
    readonly isTransferredMultiAssets: boolean;
    readonly asTransferredMultiAssets: {
      readonly sender: AccountId32;
      readonly assets: StagingXcmV3MultiassetMultiAssets;
      readonly fee: StagingXcmV3MultiAsset;
      readonly dest: StagingXcmV3MultiLocation;
    } & Struct;
    readonly type: 'TransferredMultiAssets';
  }

  /** @name OrmlUnknownTokensModuleEvent (130) */
  interface OrmlUnknownTokensModuleEvent extends Enum {
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly asset: StagingXcmV3MultiAsset;
      readonly who: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly asset: StagingXcmV3MultiAsset;
      readonly who: StagingXcmV3MultiLocation;
    } & Struct;
    readonly type: 'Deposited' | 'Withdrawn';
  }

  /** @name OrmlXcmModuleEvent (131) */
  interface OrmlXcmModuleEvent extends Enum {
    readonly isSent: boolean;
    readonly asSent: {
      readonly to: StagingXcmV3MultiLocation;
      readonly message: StagingXcmV3Xcm;
    } & Struct;
    readonly type: 'Sent';
  }

  /** @name OrmlAssetRegistryModuleEvent (132) */
  interface OrmlAssetRegistryModuleEvent extends Enum {
    readonly isRegisteredAsset: boolean;
    readonly asRegisteredAsset: {
      readonly assetId: u32;
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
    } & Struct;
    readonly isUpdatedAsset: boolean;
    readonly asUpdatedAsset: {
      readonly assetId: u32;
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
    } & Struct;
    readonly type: 'RegisteredAsset' | 'UpdatedAsset';
  }

  /** @name OrmlTraitsAssetRegistryAssetMetadata (133) */
  interface OrmlTraitsAssetRegistryAssetMetadata extends Struct {
    readonly decimals: u32;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly existentialDeposit: u128;
    readonly location: Option<StagingXcmVersionedMultiLocation>;
    readonly additional: MangataTypesAssetsCustomMetadata;
  }

  /** @name MangataTypesAssetsCustomMetadata (134) */
  interface MangataTypesAssetsCustomMetadata extends Struct {
    readonly xcm: Option<MangataTypesAssetsXcmMetadata>;
    readonly xyk: Option<MangataTypesAssetsXykMetadata>;
  }

  /** @name MangataTypesAssetsXcmMetadata (136) */
  interface MangataTypesAssetsXcmMetadata extends Struct {
    readonly feePerSecond: u128;
  }

  /** @name MangataTypesAssetsXykMetadata (138) */
  interface MangataTypesAssetsXykMetadata extends Struct {
    readonly operationsDisabled: bool;
  }

  /** @name PalletTreasuryEvent (141) */
  interface PalletTreasuryEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
    } & Struct;
    readonly isSpending: boolean;
    readonly asSpending: {
      readonly budgetRemaining: u128;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly proposalIndex: u32;
      readonly award: u128;
      readonly account: AccountId32;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly proposalIndex: u32;
      readonly slashed: u128;
    } & Struct;
    readonly isBurnt: boolean;
    readonly asBurnt: {
      readonly burntFunds: u128;
    } & Struct;
    readonly isRollover: boolean;
    readonly asRollover: {
      readonly rolloverBalance: u128;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly isSpendApproved: boolean;
    readonly asSpendApproved: {
      readonly proposalIndex: u32;
      readonly amount: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isUpdatedInactive: boolean;
    readonly asUpdatedInactive: {
      readonly reactivated: u128;
      readonly deactivated: u128;
    } & Struct;
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved' | 'UpdatedInactive';
  }

  /** @name PalletSudoMangataEvent (142) */
  interface PalletSudoMangataEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: {
      readonly oldSudoer: Option<AccountId32>;
    } & Struct;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
  }

  /** @name PalletSudoOriginEvent (143) */
  interface PalletSudoOriginEvent extends Enum {
    readonly isSuOriginDid: boolean;
    readonly asSuOriginDid: Result<Null, SpRuntimeDispatchError>;
    readonly isSuOriginDoAsDone: boolean;
    readonly asSuOriginDoAsDone: Result<Null, SpRuntimeDispatchError>;
    readonly type: 'SuOriginDid' | 'SuOriginDoAsDone';
  }

  /** @name PalletCollectiveMangataEvent (144) */
  interface PalletCollectiveMangataEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly account: AccountId32;
      readonly proposalIndex: u32;
      readonly proposalHash: H256;
      readonly threshold: u32;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly account: AccountId32;
      readonly proposalHash: H256;
      readonly voted: bool;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isDisapproved: boolean;
    readonly asDisapproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isClosed: boolean;
    readonly asClosed: {
      readonly proposalHash: H256;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isMembersChanged: boolean;
    readonly asMembersChanged: {
      readonly newMembers: Vec<AccountId32>;
    } & Struct;
    readonly isPrimeSet: boolean;
    readonly asPrimeSet: {
      readonly newPrime: Option<AccountId32>;
    } & Struct;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed' | 'MembersChanged' | 'PrimeSet';
  }

  /** @name PalletIdentityEvent (146) */
  interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: {
      readonly target: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32;
    } & Struct;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentityRemoved' | 'SubIdentityRevoked';
  }

  /** @name FrameSystemPhase (147) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (151) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (153) */
  interface FrameSystemCall extends Enum {
    readonly isEnqueueTxs: boolean;
    readonly asEnqueueTxs: {
      readonly txs: Vec<ITuple<[Option<AccountId32>, Bytes]>>;
    } & Struct;
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'EnqueueTxs' | 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (157) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (158) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (159) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (161) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (162) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (163) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (164) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (168) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly isStorageQueueFull: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered' | 'StorageQueueFull';
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentAncestor (170) */
  interface CumulusPalletParachainSystemUnincludedSegmentAncestor extends Struct {
    readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    readonly paraHeadHash: Option<H256>;
    readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV5UpgradeGoAhead>;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth (171) */
  interface CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth extends Struct {
    readonly umpMsgCount: u32;
    readonly umpTotalBytes: u32;
    readonly hrmpOutgoing: BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate (173) */
  interface CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate extends Struct {
    readonly msgCount: u32;
    readonly totalBytes: u32;
  }

  /** @name PolkadotPrimitivesV5UpgradeGoAhead (178) */
  interface PolkadotPrimitivesV5UpgradeGoAhead extends Enum {
    readonly isAbort: boolean;
    readonly isGoAhead: boolean;
    readonly type: 'Abort' | 'GoAhead';
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentSegmentTracker (179) */
  interface CumulusPalletParachainSystemUnincludedSegmentSegmentTracker extends Struct {
    readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    readonly hrmpWatermark: Option<u32>;
    readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV5UpgradeGoAhead>;
  }

  /** @name PolkadotPrimitivesV5PersistedValidationData (180) */
  interface PolkadotPrimitivesV5PersistedValidationData extends Struct {
    readonly parentHead: Bytes;
    readonly relayParentNumber: u32;
    readonly relayParentStorageRoot: H256;
    readonly maxPovSize: u32;
  }

  /** @name PolkadotPrimitivesV5UpgradeRestriction (183) */
  interface PolkadotPrimitivesV5UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name SpTrieStorageProof (184) */
  interface SpTrieStorageProof extends Struct {
    readonly trieNodes: BTreeSet<Bytes>;
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (186) */
  interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
    readonly dmqMqcHead: H256;
    readonly relayDispatchQueueRemainingCapacity: CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity;
    readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV5AbridgedHrmpChannel]>>;
    readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV5AbridgedHrmpChannel]>>;
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity (187) */
  interface CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity extends Struct {
    readonly remainingCount: u32;
    readonly remainingSize: u32;
  }

  /** @name PolkadotPrimitivesV5AbridgedHrmpChannel (190) */
  interface PolkadotPrimitivesV5AbridgedHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
  }

  /** @name PolkadotPrimitivesV5AbridgedHostConfiguration (191) */
  interface PolkadotPrimitivesV5AbridgedHostConfiguration extends Struct {
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
    readonly maxUpwardQueueCount: u32;
    readonly maxUpwardQueueSize: u32;
    readonly maxUpwardMessageSize: u32;
    readonly maxUpwardMessageNumPerCandidate: u32;
    readonly hrmpMaxMessageNumPerCandidate: u32;
    readonly validationUpgradeCooldown: u32;
    readonly validationUpgradeDelay: u32;
    readonly asyncBackingParams: PolkadotPrimitivesVstagingAsyncBackingParams;
  }

  /** @name PolkadotPrimitivesVstagingAsyncBackingParams (192) */
  interface PolkadotPrimitivesVstagingAsyncBackingParams extends Struct {
    readonly maxCandidateDepth: u32;
    readonly allowedAncestryLen: u32;
  }

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (198) */
  interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name CumulusPalletParachainSystemCodeUpgradeAuthorization (199) */
  interface CumulusPalletParachainSystemCodeUpgradeAuthorization extends Struct {
    readonly codeHash: H256;
    readonly checkVersion: bool;
  }

  /** @name CumulusPalletParachainSystemCall (200) */
  interface CumulusPalletParachainSystemCall extends Enum {
    readonly isSetValidationData: boolean;
    readonly asSetValidationData: {
      readonly data: CumulusPrimitivesParachainInherentParachainInherentData;
    } & Struct;
    readonly isSudoSendUpwardMessage: boolean;
    readonly asSudoSendUpwardMessage: {
      readonly message: Bytes;
    } & Struct;
    readonly isAuthorizeUpgrade: boolean;
    readonly asAuthorizeUpgrade: {
      readonly codeHash: H256;
      readonly checkVersion: bool;
    } & Struct;
    readonly isEnactAuthorizedUpgrade: boolean;
    readonly asEnactAuthorizedUpgrade: {
      readonly code: Bytes;
    } & Struct;
    readonly type: 'SetValidationData' | 'SudoSendUpwardMessage' | 'AuthorizeUpgrade' | 'EnactAuthorizedUpgrade';
  }

  /** @name CumulusPrimitivesParachainInherentParachainInherentData (201) */
  interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
    readonly validationData: PolkadotPrimitivesV5PersistedValidationData;
    readonly relayChainState: SpTrieStorageProof;
    readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
    readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (203) */
  interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (206) */
  interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name CumulusPalletParachainSystemError (209) */
  interface CumulusPalletParachainSystemError extends Enum {
    readonly isOverlappingUpgrades: boolean;
    readonly isProhibitedByPolkadot: boolean;
    readonly isTooBig: boolean;
    readonly isValidationDataNotAvailable: boolean;
    readonly isHostConfigurationNotAvailable: boolean;
    readonly isNotScheduled: boolean;
    readonly isNothingAuthorized: boolean;
    readonly isUnauthorized: boolean;
    readonly isUpgradeBlockedByMaintenanceMode: boolean;
    readonly type: 'OverlappingUpgrades' | 'ProhibitedByPolkadot' | 'TooBig' | 'ValidationDataNotAvailable' | 'HostConfigurationNotAvailable' | 'NotScheduled' | 'NothingAuthorized' | 'Unauthorized' | 'UpgradeBlockedByMaintenanceMode';
  }

  /** @name PalletTimestampCall (210) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name ParachainInfoCall (211) */
  type ParachainInfoCall = Null;

  /** @name PalletUtilityMangataCall (212) */
  interface PalletUtilityMangataCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: MangataRococoRuntimeOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isWithWeight: boolean;
    readonly asWithWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch' | 'WithWeight';
  }

  /** @name PalletProxyCall (215) */
  interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: MultiAddress;
      readonly forceProxyType: Option<CommonRuntimeConfigPalletProxyProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: CommonRuntimeConfigPalletProxyProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: CommonRuntimeConfigPalletProxyProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isCreatePure: boolean;
    readonly asCreatePure: {
      readonly proxyType: CommonRuntimeConfigPalletProxyProxyType;
      readonly delay: u32;
      readonly index: u16;
    } & Struct;
    readonly isKillPure: boolean;
    readonly asKillPure: {
      readonly spawner: MultiAddress;
      readonly proxyType: CommonRuntimeConfigPalletProxyProxyType;
      readonly index: u16;
      readonly height: Compact<u32>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: MultiAddress;
      readonly real: MultiAddress;
      readonly forceProxyType: Option<CommonRuntimeConfigPalletProxyProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'CreatePure' | 'KillPure' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
  }

  /** @name PalletMaintenanceCall (219) */
  interface PalletMaintenanceCall extends Enum {
    readonly isSwitchMaintenanceModeOn: boolean;
    readonly isSwitchMaintenanceModeOff: boolean;
    readonly isSwitchUpgradabilityInMaintenanceModeOn: boolean;
    readonly isSwitchUpgradabilityInMaintenanceModeOff: boolean;
    readonly type: 'SwitchMaintenanceModeOn' | 'SwitchMaintenanceModeOff' | 'SwitchUpgradabilityInMaintenanceModeOn' | 'SwitchUpgradabilityInMaintenanceModeOff';
  }

  /** @name OrmlTokensModuleCall (220) */
  interface OrmlTokensModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly currencyId: u32;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly currencyId: u32;
      readonly keepAlive: bool;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly currencyId: u32;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly currencyId: u32;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isSetBalance: boolean;
    readonly asSetBalance: {
      readonly who: MultiAddress;
      readonly currencyId: u32;
      readonly newFree: Compact<u128>;
      readonly newReserved: Compact<u128>;
    } & Struct;
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly who: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly currencyId: u32;
      readonly who: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly type: 'Transfer' | 'TransferAll' | 'TransferKeepAlive' | 'ForceTransfer' | 'SetBalance' | 'Create' | 'Mint';
  }

  /** @name PalletXykCall (221) */
  interface PalletXykCall extends Enum {
    readonly isCreatePool: boolean;
    readonly asCreatePool: {
      readonly firstAssetId: u32;
      readonly firstAssetAmount: u128;
      readonly secondAssetId: u32;
      readonly secondAssetAmount: u128;
    } & Struct;
    readonly isSellAsset: boolean;
    readonly asSellAsset: {
      readonly soldAssetId: u32;
      readonly boughtAssetId: u32;
      readonly soldAssetAmount: u128;
      readonly minAmountOut: u128;
    } & Struct;
    readonly isMultiswapSellAsset: boolean;
    readonly asMultiswapSellAsset: {
      readonly swapTokenList: Vec<u32>;
      readonly soldAssetAmount: u128;
      readonly minAmountOut: u128;
    } & Struct;
    readonly isBuyAsset: boolean;
    readonly asBuyAsset: {
      readonly soldAssetId: u32;
      readonly boughtAssetId: u32;
      readonly boughtAssetAmount: u128;
      readonly maxAmountIn: u128;
    } & Struct;
    readonly isMultiswapBuyAsset: boolean;
    readonly asMultiswapBuyAsset: {
      readonly swapTokenList: Vec<u32>;
      readonly boughtAssetAmount: u128;
      readonly maxAmountIn: u128;
    } & Struct;
    readonly isMintLiquidityUsingVestingNativeTokensByVestingIndex: boolean;
    readonly asMintLiquidityUsingVestingNativeTokensByVestingIndex: {
      readonly nativeAssetVestingIndex: u32;
      readonly vestingNativeAssetUnlockSomeAmountOrAll: Option<u128>;
      readonly secondAssetId: u32;
      readonly expectedSecondAssetAmount: u128;
    } & Struct;
    readonly isMintLiquidityUsingVestingNativeTokens: boolean;
    readonly asMintLiquidityUsingVestingNativeTokens: {
      readonly vestingNativeAssetAmount: u128;
      readonly secondAssetId: u32;
      readonly expectedSecondAssetAmount: u128;
    } & Struct;
    readonly isMintLiquidity: boolean;
    readonly asMintLiquidity: {
      readonly firstAssetId: u32;
      readonly secondAssetId: u32;
      readonly firstAssetAmount: u128;
      readonly expectedSecondAssetAmount: u128;
    } & Struct;
    readonly isCompoundRewards: boolean;
    readonly asCompoundRewards: {
      readonly liquidityAssetId: u32;
      readonly amountPermille: Permill;
    } & Struct;
    readonly isProvideLiquidityWithConversion: boolean;
    readonly asProvideLiquidityWithConversion: {
      readonly liquidityAssetId: u32;
      readonly providedAssetId: u32;
      readonly providedAssetAmount: u128;
    } & Struct;
    readonly isBurnLiquidity: boolean;
    readonly asBurnLiquidity: {
      readonly firstAssetId: u32;
      readonly secondAssetId: u32;
      readonly liquidityAssetAmount: u128;
    } & Struct;
    readonly type: 'CreatePool' | 'SellAsset' | 'MultiswapSellAsset' | 'BuyAsset' | 'MultiswapBuyAsset' | 'MintLiquidityUsingVestingNativeTokensByVestingIndex' | 'MintLiquidityUsingVestingNativeTokens' | 'MintLiquidity' | 'CompoundRewards' | 'ProvideLiquidityWithConversion' | 'BurnLiquidity';
  }

  /** @name PalletProofOfStakeCall (224) */
  interface PalletProofOfStakeCall extends Enum {
    readonly isClaimRewardsAll: boolean;
    readonly asClaimRewardsAll: {
      readonly liquidityTokenId: u32;
    } & Struct;
    readonly isUpdatePoolPromotion: boolean;
    readonly asUpdatePoolPromotion: {
      readonly liquidityTokenId: u32;
      readonly liquidityMiningIssuanceWeight: u8;
    } & Struct;
    readonly isActivateLiquidity: boolean;
    readonly asActivateLiquidity: {
      readonly liquidityTokenId: u32;
      readonly amount: u128;
      readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityActivateKind>;
    } & Struct;
    readonly isDeactivateLiquidity: boolean;
    readonly asDeactivateLiquidity: {
      readonly liquidityTokenId: u32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'ClaimRewardsAll' | 'UpdatePoolPromotion' | 'ActivateLiquidity' | 'DeactivateLiquidity';
  }

  /** @name MangataTypesMultipurposeLiquidityActivateKind (226) */
  interface MangataTypesMultipurposeLiquidityActivateKind extends Enum {
    readonly isAvailableBalance: boolean;
    readonly isStakedUnactivatedReserves: boolean;
    readonly isUnspentReserves: boolean;
    readonly type: 'AvailableBalance' | 'StakedUnactivatedReserves' | 'UnspentReserves';
  }

  /** @name PalletFeeLockCall (227) */
  interface PalletFeeLockCall extends Enum {
    readonly isUpdateFeeLockMetadata: boolean;
    readonly asUpdateFeeLockMetadata: {
      readonly periodLength: Option<u32>;
      readonly feeLockAmount: Option<u128>;
      readonly swapValueThreshold: Option<u128>;
      readonly shouldBeWhitelisted: Option<Vec<ITuple<[u32, bool]>>>;
    } & Struct;
    readonly isUnlockFee: boolean;
    readonly type: 'UpdateFeeLockMetadata' | 'UnlockFee';
  }

  /** @name PalletVestingMangataCall (231) */
  interface PalletVestingMangataCall extends Enum {
    readonly isVest: boolean;
    readonly asVest: {
      readonly tokenId: u32;
    } & Struct;
    readonly isVestOther: boolean;
    readonly asVestOther: {
      readonly tokenId: u32;
      readonly target: MultiAddress;
    } & Struct;
    readonly isForceVestedTransfer: boolean;
    readonly asForceVestedTransfer: {
      readonly tokenId: u32;
      readonly source: MultiAddress;
      readonly target: MultiAddress;
      readonly schedule: PalletVestingMangataVestingInfo;
    } & Struct;
    readonly isMergeSchedules: boolean;
    readonly asMergeSchedules: {
      readonly tokenId: u32;
      readonly schedule1Index: u32;
      readonly schedule2Index: u32;
    } & Struct;
    readonly isSudoUnlockAllVestingTokens: boolean;
    readonly asSudoUnlockAllVestingTokens: {
      readonly target: MultiAddress;
      readonly tokenId: u32;
    } & Struct;
    readonly type: 'Vest' | 'VestOther' | 'ForceVestedTransfer' | 'MergeSchedules' | 'SudoUnlockAllVestingTokens';
  }

  /** @name PalletVestingMangataVestingInfo (232) */
  interface PalletVestingMangataVestingInfo extends Struct {
    readonly locked: u128;
    readonly perBlock: u128;
    readonly startingBlock: u32;
  }

  /** @name PalletCrowdloanRewardsCall (233) */
  interface PalletCrowdloanRewardsCall extends Enum {
    readonly isAssociateNativeIdentity: boolean;
    readonly asAssociateNativeIdentity: {
      readonly rewardAccount: AccountId32;
      readonly relayAccount: AccountId32;
      readonly proof: SpRuntimeMultiSignature;
    } & Struct;
    readonly isChangeAssociationWithRelayKeys: boolean;
    readonly asChangeAssociationWithRelayKeys: {
      readonly rewardAccount: AccountId32;
      readonly previousAccount: AccountId32;
      readonly proofs: Vec<ITuple<[AccountId32, SpRuntimeMultiSignature]>>;
    } & Struct;
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly crowdloanId: Option<u32>;
    } & Struct;
    readonly isUpdateRewardAddress: boolean;
    readonly asUpdateRewardAddress: {
      readonly newRewardAccount: AccountId32;
      readonly crowdloanId: Option<u32>;
    } & Struct;
    readonly isCompleteInitialization: boolean;
    readonly asCompleteInitialization: {
      readonly leaseStartBlock: u32;
      readonly leaseEndingBlock: u32;
    } & Struct;
    readonly isSetCrowdloanAllocation: boolean;
    readonly asSetCrowdloanAllocation: {
      readonly crowdloanAllocationAmount: u128;
    } & Struct;
    readonly isInitializeRewardVec: boolean;
    readonly asInitializeRewardVec: {
      readonly rewards: Vec<ITuple<[AccountId32, Option<AccountId32>, u128]>>;
    } & Struct;
    readonly type: 'AssociateNativeIdentity' | 'ChangeAssociationWithRelayKeys' | 'Claim' | 'UpdateRewardAddress' | 'CompleteInitialization' | 'SetCrowdloanAllocation' | 'InitializeRewardVec';
  }

  /** @name SpRuntimeMultiSignature (234) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreEd25519Signature (235) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name SpCoreSr25519Signature (237) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (238) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name PalletIssuanceCall (244) */
  interface PalletIssuanceCall extends Enum {
    readonly isInitIssuanceConfig: boolean;
    readonly isFinalizeTge: boolean;
    readonly isExecuteTge: boolean;
    readonly asExecuteTge: {
      readonly tgeInfos: Vec<PalletIssuanceTgeInfo>;
    } & Struct;
    readonly type: 'InitIssuanceConfig' | 'FinalizeTge' | 'ExecuteTge';
  }

  /** @name PalletMultipurposeLiquidityCall (246) */
  interface PalletMultipurposeLiquidityCall extends Enum {
    readonly isReserveVestingLiquidityTokensByVestingIndex: boolean;
    readonly asReserveVestingLiquidityTokensByVestingIndex: {
      readonly liquidityTokenId: u32;
      readonly liquidityTokenVestingIndex: u32;
      readonly liquidityTokenUnlockSomeAmountOrAll: Option<u128>;
    } & Struct;
    readonly isReserveVestingNativeTokensByVestingIndex: boolean;
    readonly asReserveVestingNativeTokensByVestingIndex: {
      readonly liquidityTokenVestingIndex: u32;
      readonly liquidityTokenUnlockSomeAmountOrAll: Option<u128>;
    } & Struct;
    readonly isReserveVestingLiquidityTokens: boolean;
    readonly asReserveVestingLiquidityTokens: {
      readonly liquidityTokenId: u32;
      readonly liquidityTokenAmount: u128;
    } & Struct;
    readonly isUnreserveAndRelockInstance: boolean;
    readonly asUnreserveAndRelockInstance: {
      readonly liquidityTokenId: u32;
      readonly relockInstanceIndex: u32;
    } & Struct;
    readonly type: 'ReserveVestingLiquidityTokensByVestingIndex' | 'ReserveVestingNativeTokensByVestingIndex' | 'ReserveVestingLiquidityTokens' | 'UnreserveAndRelockInstance';
  }

  /** @name PalletBootstrapCall (247) */
  interface PalletBootstrapCall extends Enum {
    readonly isProvision: boolean;
    readonly asProvision: {
      readonly tokenId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isWhitelistAccounts: boolean;
    readonly asWhitelistAccounts: {
      readonly accounts: Vec<AccountId32>;
    } & Struct;
    readonly isScheduleBootstrap: boolean;
    readonly asScheduleBootstrap: {
      readonly firstTokenId: u32;
      readonly secondTokenId: u32;
      readonly idoStart: u32;
      readonly whitelistPhaseLength: Option<u32>;
      readonly publicPhaseLength: u32;
      readonly maxFirstToSecondRatio: Option<ITuple<[u128, u128]>>;
      readonly promoteBootstrapPool: bool;
    } & Struct;
    readonly isCancelBootstrap: boolean;
    readonly isUpdatePromoteBootstrapPool: boolean;
    readonly asUpdatePromoteBootstrapPool: {
      readonly promoteBootstrapPool: bool;
    } & Struct;
    readonly isClaimLiquidityTokens: boolean;
    readonly isClaimAndActivateLiquidityTokens: boolean;
    readonly isPreFinalize: boolean;
    readonly isFinalize: boolean;
    readonly isClaimLiquidityTokensForAccount: boolean;
    readonly asClaimLiquidityTokensForAccount: {
      readonly account: AccountId32;
      readonly activateRewards: bool;
    } & Struct;
    readonly type: 'Provision' | 'WhitelistAccounts' | 'ScheduleBootstrap' | 'CancelBootstrap' | 'UpdatePromoteBootstrapPool' | 'ClaimLiquidityTokens' | 'ClaimAndActivateLiquidityTokens' | 'PreFinalize' | 'Finalize' | 'ClaimLiquidityTokensForAccount';
  }

  /** @name ParachainStakingCall (250) */
  interface ParachainStakingCall extends Enum {
    readonly isSetTotalSelected: boolean;
    readonly asSetTotalSelected: {
      readonly new_: u32;
    } & Struct;
    readonly isSetCollatorCommission: boolean;
    readonly asSetCollatorCommission: {
      readonly new_: Perbill;
    } & Struct;
    readonly isJoinCandidates: boolean;
    readonly asJoinCandidates: {
      readonly bond: u128;
      readonly liquidityToken: u32;
      readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind>;
      readonly candidateCount: u32;
      readonly liquidityTokenCount: u32;
    } & Struct;
    readonly isScheduleLeaveCandidates: boolean;
    readonly asScheduleLeaveCandidates: {
      readonly candidateCount: u32;
    } & Struct;
    readonly isExecuteLeaveCandidates: boolean;
    readonly asExecuteLeaveCandidates: {
      readonly candidate: AccountId32;
      readonly candidateDelegationCount: u32;
    } & Struct;
    readonly isCancelLeaveCandidates: boolean;
    readonly asCancelLeaveCandidates: {
      readonly candidateCount: u32;
    } & Struct;
    readonly isGoOffline: boolean;
    readonly isGoOnline: boolean;
    readonly isScheduleCandidateBondMore: boolean;
    readonly asScheduleCandidateBondMore: {
      readonly more: u128;
      readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind>;
    } & Struct;
    readonly isScheduleCandidateBondLess: boolean;
    readonly asScheduleCandidateBondLess: {
      readonly less: u128;
    } & Struct;
    readonly isExecuteCandidateBondRequest: boolean;
    readonly asExecuteCandidateBondRequest: {
      readonly candidate: AccountId32;
      readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind>;
    } & Struct;
    readonly isCancelCandidateBondRequest: boolean;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly collator: AccountId32;
      readonly amount: u128;
      readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind>;
      readonly candidateDelegationCount: u32;
      readonly delegationCount: u32;
    } & Struct;
    readonly isScheduleLeaveDelegators: boolean;
    readonly isExecuteLeaveDelegators: boolean;
    readonly asExecuteLeaveDelegators: {
      readonly delegator: AccountId32;
      readonly delegationCount: u32;
    } & Struct;
    readonly isCancelLeaveDelegators: boolean;
    readonly isScheduleRevokeDelegation: boolean;
    readonly asScheduleRevokeDelegation: {
      readonly collator: AccountId32;
    } & Struct;
    readonly isScheduleDelegatorBondMore: boolean;
    readonly asScheduleDelegatorBondMore: {
      readonly candidate: AccountId32;
      readonly more: u128;
      readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind>;
    } & Struct;
    readonly isScheduleDelegatorBondLess: boolean;
    readonly asScheduleDelegatorBondLess: {
      readonly candidate: AccountId32;
      readonly less: u128;
    } & Struct;
    readonly isExecuteDelegationRequest: boolean;
    readonly asExecuteDelegationRequest: {
      readonly delegator: AccountId32;
      readonly candidate: AccountId32;
      readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind>;
    } & Struct;
    readonly isCancelDelegationRequest: boolean;
    readonly asCancelDelegationRequest: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isAddStakingLiquidityToken: boolean;
    readonly asAddStakingLiquidityToken: {
      readonly pairedOrLiquidityToken: ParachainStakingPairedOrLiquidityToken;
      readonly currentLiquidityTokens: u32;
    } & Struct;
    readonly isRemoveStakingLiquidityToken: boolean;
    readonly asRemoveStakingLiquidityToken: {
      readonly pairedOrLiquidityToken: ParachainStakingPairedOrLiquidityToken;
      readonly currentLiquidityTokens: u32;
    } & Struct;
    readonly isAggregatorUpdateMetadata: boolean;
    readonly asAggregatorUpdateMetadata: {
      readonly collatorCandidates: Vec<AccountId32>;
      readonly action: ParachainStakingMetadataUpdateAction;
    } & Struct;
    readonly isUpdateCandidateAggregator: boolean;
    readonly asUpdateCandidateAggregator: {
      readonly maybeAggregator: Option<AccountId32>;
    } & Struct;
    readonly isPayoutCollatorRewards: boolean;
    readonly asPayoutCollatorRewards: {
      readonly collator: AccountId32;
      readonly numberOfSesisons: Option<u32>;
    } & Struct;
    readonly isPayoutDelegatorReward: boolean;
    readonly asPayoutDelegatorReward: {
      readonly round: u32;
      readonly collator: AccountId32;
      readonly delegator: AccountId32;
    } & Struct;
    readonly type: 'SetTotalSelected' | 'SetCollatorCommission' | 'JoinCandidates' | 'ScheduleLeaveCandidates' | 'ExecuteLeaveCandidates' | 'CancelLeaveCandidates' | 'GoOffline' | 'GoOnline' | 'ScheduleCandidateBondMore' | 'ScheduleCandidateBondLess' | 'ExecuteCandidateBondRequest' | 'CancelCandidateBondRequest' | 'Delegate' | 'ScheduleLeaveDelegators' | 'ExecuteLeaveDelegators' | 'CancelLeaveDelegators' | 'ScheduleRevokeDelegation' | 'ScheduleDelegatorBondMore' | 'ScheduleDelegatorBondLess' | 'ExecuteDelegationRequest' | 'CancelDelegationRequest' | 'AddStakingLiquidityToken' | 'RemoveStakingLiquidityToken' | 'AggregatorUpdateMetadata' | 'UpdateCandidateAggregator' | 'PayoutCollatorRewards' | 'PayoutDelegatorReward';
  }

  /** @name MangataTypesMultipurposeLiquidityBondKind (252) */
  interface MangataTypesMultipurposeLiquidityBondKind extends Enum {
    readonly isAvailableBalance: boolean;
    readonly isActivatedUnstakedReserves: boolean;
    readonly isUnspentReserves: boolean;
    readonly type: 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves';
  }

  /** @name ParachainStakingPairedOrLiquidityToken (253) */
  interface ParachainStakingPairedOrLiquidityToken extends Enum {
    readonly isPaired: boolean;
    readonly asPaired: u32;
    readonly isLiquidity: boolean;
    readonly asLiquidity: u32;
    readonly type: 'Paired' | 'Liquidity';
  }

  /** @name ParachainStakingMetadataUpdateAction (254) */
  interface ParachainStakingMetadataUpdateAction extends Enum {
    readonly isExtendApprovedCollators: boolean;
    readonly isRemoveApprovedCollators: boolean;
    readonly type: 'ExtendApprovedCollators' | 'RemoveApprovedCollators';
  }

  /** @name PalletSessionCall (255) */
  interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: MangataRococoRuntimeSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name MangataRococoRuntimeSessionKeys (256) */
  interface MangataRococoRuntimeSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (257) */
  interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (258) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name CumulusPalletXcmpQueueCall (259) */
  interface CumulusPalletXcmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isSuspendXcmExecution: boolean;
    readonly isResumeXcmExecution: boolean;
    readonly isUpdateSuspendThreshold: boolean;
    readonly asUpdateSuspendThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateDropThreshold: boolean;
    readonly asUpdateDropThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateResumeThreshold: boolean;
    readonly asUpdateResumeThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateThresholdWeight: boolean;
    readonly asUpdateThresholdWeight: {
      readonly new_: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUpdateWeightRestrictDecay: boolean;
    readonly asUpdateWeightRestrictDecay: {
      readonly new_: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUpdateXcmpMaxIndividualWeight: boolean;
    readonly asUpdateXcmpMaxIndividualWeight: {
      readonly new_: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'ServiceOverweight' | 'SuspendXcmExecution' | 'ResumeXcmExecution' | 'UpdateSuspendThreshold' | 'UpdateDropThreshold' | 'UpdateResumeThreshold' | 'UpdateThresholdWeight' | 'UpdateWeightRestrictDecay' | 'UpdateXcmpMaxIndividualWeight';
  }

  /** @name PalletXcmCall (260) */
  interface PalletXcmCall extends Enum {
    readonly isSend: boolean;
    readonly asSend: {
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly message: StagingXcmVersionedXcm;
    } & Struct;
    readonly isTeleportAssets: boolean;
    readonly asTeleportAssets: {
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly beneficiary: StagingXcmVersionedMultiLocation;
      readonly assets: StagingXcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isReserveTransferAssets: boolean;
    readonly asReserveTransferAssets: {
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly beneficiary: StagingXcmVersionedMultiLocation;
      readonly assets: StagingXcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly message: StagingXcmVersionedXcm;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isForceXcmVersion: boolean;
    readonly asForceXcmVersion: {
      readonly location: StagingXcmV3MultiLocation;
      readonly version: u32;
    } & Struct;
    readonly isForceDefaultXcmVersion: boolean;
    readonly asForceDefaultXcmVersion: {
      readonly maybeXcmVersion: Option<u32>;
    } & Struct;
    readonly isForceSubscribeVersionNotify: boolean;
    readonly asForceSubscribeVersionNotify: {
      readonly location: StagingXcmVersionedMultiLocation;
    } & Struct;
    readonly isForceUnsubscribeVersionNotify: boolean;
    readonly asForceUnsubscribeVersionNotify: {
      readonly location: StagingXcmVersionedMultiLocation;
    } & Struct;
    readonly isLimitedReserveTransferAssets: boolean;
    readonly asLimitedReserveTransferAssets: {
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly beneficiary: StagingXcmVersionedMultiLocation;
      readonly assets: StagingXcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isLimitedTeleportAssets: boolean;
    readonly asLimitedTeleportAssets: {
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly beneficiary: StagingXcmVersionedMultiLocation;
      readonly assets: StagingXcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isForceSuspension: boolean;
    readonly asForceSuspension: {
      readonly suspended: bool;
    } & Struct;
    readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets' | 'ForceSuspension';
  }

  /** @name StagingXcmVersionedXcm (261) */
  interface StagingXcmVersionedXcm extends Enum {
    readonly isV2: boolean;
    readonly asV2: StagingXcmV2Xcm;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3Xcm;
    readonly type: 'V2' | 'V3';
  }

  /** @name StagingXcmV2Xcm (262) */
  interface StagingXcmV2Xcm extends Vec<StagingXcmV2Instruction> {}

  /** @name StagingXcmV2Instruction (264) */
  interface StagingXcmV2Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: StagingXcmV2MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: StagingXcmV2MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: StagingXcmV2MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: StagingXcmV2Response;
      readonly maxWeight: Compact<u64>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: StagingXcmV2MultiassetMultiAssets;
      readonly beneficiary: StagingXcmV2MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: StagingXcmV2MultiassetMultiAssets;
      readonly dest: StagingXcmV2MultiLocation;
      readonly xcm: StagingXcmV2Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: StagingXcmV2OriginKind;
      readonly requireWeightAtMost: Compact<u64>;
      readonly call: StagingXcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: StagingXcmV2MultilocationJunctions;
    readonly isReportError: boolean;
    readonly asReportError: {
      readonly queryId: Compact<u64>;
      readonly dest: StagingXcmV2MultiLocation;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly beneficiary: StagingXcmV2MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly dest: StagingXcmV2MultiLocation;
      readonly xcm: StagingXcmV2Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: StagingXcmV2MultiassetMultiAssetFilter;
      readonly receive: StagingXcmV2MultiassetMultiAssets;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
      readonly reserve: StagingXcmV2MultiLocation;
      readonly xcm: StagingXcmV2Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
      readonly dest: StagingXcmV2MultiLocation;
      readonly xcm: StagingXcmV2Xcm;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: StagingXcmV2MultiLocation;
      readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: StagingXcmV2MultiAsset;
      readonly weightLimit: StagingXcmV2WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: StagingXcmV2Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: StagingXcmV2Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: StagingXcmV2MultiassetMultiAssets;
      readonly ticket: StagingXcmV2MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion';
  }

  /** @name StagingXcmV2Response (265) */
  interface StagingXcmV2Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: StagingXcmV2MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, StagingXcmV2TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
  }

  /** @name StagingXcmV2TraitsError (268) */
  interface StagingXcmV2TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isMultiLocationFull: boolean;
    readonly isMultiLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: u64;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable';
  }

  /** @name StagingXcmV2MultiassetMultiAssetFilter (269) */
  interface StagingXcmV2MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: StagingXcmV2MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: StagingXcmV2MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name StagingXcmV2MultiassetWildMultiAsset (270) */
  interface StagingXcmV2MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: StagingXcmV2MultiassetAssetId;
      readonly fun: StagingXcmV2MultiassetWildFungibility;
    } & Struct;
    readonly type: 'All' | 'AllOf';
  }

  /** @name StagingXcmV2MultiassetWildFungibility (271) */
  interface StagingXcmV2MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV2WeightLimit (272) */
  interface StagingXcmV2WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: Compact<u64>;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name CumulusPalletXcmCall (281) */
  type CumulusPalletXcmCall = Null;

  /** @name CumulusPalletDmpQueueCall (282) */
  interface CumulusPalletDmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'ServiceOverweight';
  }

  /** @name OrmlXtokensModuleCall (283) */
  interface OrmlXtokensModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: u32;
      readonly amount: u128;
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly destWeightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiasset: boolean;
    readonly asTransferMultiasset: {
      readonly asset: StagingXcmVersionedMultiAsset;
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly destWeightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isTransferWithFee: boolean;
    readonly asTransferWithFee: {
      readonly currencyId: u32;
      readonly amount: u128;
      readonly fee: u128;
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly destWeightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiassetWithFee: boolean;
    readonly asTransferMultiassetWithFee: {
      readonly asset: StagingXcmVersionedMultiAsset;
      readonly fee: StagingXcmVersionedMultiAsset;
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly destWeightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isTransferMulticurrencies: boolean;
    readonly asTransferMulticurrencies: {
      readonly currencies: Vec<ITuple<[u32, u128]>>;
      readonly feeItem: u32;
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly destWeightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiassets: boolean;
    readonly asTransferMultiassets: {
      readonly assets: StagingXcmVersionedMultiAssets;
      readonly feeItem: u32;
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly destWeightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly type: 'Transfer' | 'TransferMultiasset' | 'TransferWithFee' | 'TransferMultiassetWithFee' | 'TransferMulticurrencies' | 'TransferMultiassets';
  }

  /** @name StagingXcmVersionedMultiAsset (284) */
  interface StagingXcmVersionedMultiAsset extends Enum {
    readonly isV2: boolean;
    readonly asV2: StagingXcmV2MultiAsset;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3MultiAsset;
    readonly type: 'V2' | 'V3';
  }

  /** @name OrmlXcmModuleCall (287) */
  interface OrmlXcmModuleCall extends Enum {
    readonly isSendAsSovereign: boolean;
    readonly asSendAsSovereign: {
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly message: StagingXcmVersionedXcm;
    } & Struct;
    readonly type: 'SendAsSovereign';
  }

  /** @name OrmlAssetRegistryModuleCall (288) */
  interface OrmlAssetRegistryModuleCall extends Enum {
    readonly isRegisterAsset: boolean;
    readonly asRegisterAsset: {
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
      readonly assetId: Option<u32>;
    } & Struct;
    readonly isUpdateAsset: boolean;
    readonly asUpdateAsset: {
      readonly assetId: u32;
      readonly decimals: Option<u32>;
      readonly name: Option<Bytes>;
      readonly symbol: Option<Bytes>;
      readonly existentialDeposit: Option<u128>;
      readonly location: Option<Option<StagingXcmVersionedMultiLocation>>;
      readonly additional: Option<MangataTypesAssetsCustomMetadata>;
    } & Struct;
    readonly type: 'RegisterAsset' | 'UpdateAsset';
  }

  /** @name PalletTreasuryCall (292) */
  interface PalletTreasuryCall extends Enum {
    readonly isProposeSpend: boolean;
    readonly asProposeSpend: {
      readonly value: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRejectProposal: boolean;
    readonly asRejectProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isApproveProposal: boolean;
    readonly asApproveProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpend: boolean;
    readonly asSpend: {
      readonly amount: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRemoveApproval: boolean;
    readonly asRemoveApproval: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'Spend' | 'RemoveApproval';
  }

  /** @name PalletSudoMangataCall (293) */
  interface PalletSudoMangataCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
  }

  /** @name PalletSudoOriginCall (294) */
  interface PalletSudoOriginCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SudoAs';
  }

  /** @name PalletCollectiveMangataCall (295) */
  interface PalletCollectiveMangataCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId32>;
      readonly prime: Option<AccountId32>;
      readonly oldCount: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: SpWeightsWeightV2Weight;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'DisapproveProposal' | 'Close';
  }

  /** @name PalletIdentityCall (296) */
  interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: MultiAddress;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PalletIdentityIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId32, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: PalletIdentityBitFlags;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: MultiAddress;
      readonly judgement: PalletIdentityJudgement;
      readonly identity: H256;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: MultiAddress;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub';
  }

  /** @name PalletIdentityIdentityInfo (297) */
  interface PalletIdentityIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityBitFlags (333) */
  interface PalletIdentityBitFlags extends Set {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
  }

  /** @name PalletIdentityIdentityField (334) */
  interface PalletIdentityIdentityField extends Enum {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
    readonly type: 'Display' | 'Legal' | 'Web' | 'Riot' | 'Email' | 'PgpFingerprint' | 'Image' | 'Twitter';
  }

  /** @name PalletIdentityJudgement (335) */
  interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
  }

  /** @name MangataRococoRuntimeOriginCaller (336) */
  interface MangataRococoRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmOrigin;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: CumulusPalletXcmOrigin;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveMangataRawOrigin;
    readonly type: 'System' | 'Void' | 'PolkadotXcm' | 'CumulusXcm' | 'Council';
  }

  /** @name FrameSupportDispatchRawOrigin (337) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletXcmOrigin (338) */
  interface PalletXcmOrigin extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: StagingXcmV3MultiLocation;
    readonly isResponse: boolean;
    readonly asResponse: StagingXcmV3MultiLocation;
    readonly type: 'Xcm' | 'Response';
  }

  /** @name CumulusPalletXcmOrigin (339) */
  interface CumulusPalletXcmOrigin extends Enum {
    readonly isRelay: boolean;
    readonly isSiblingParachain: boolean;
    readonly asSiblingParachain: u32;
    readonly type: 'Relay' | 'SiblingParachain';
  }

  /** @name PalletCollectiveMangataRawOrigin (340) */
  interface PalletCollectiveMangataRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name SpCoreVoid (341) */
  type SpCoreVoid = Null;

  /** @name PalletUtilityMangataError (342) */
  interface PalletUtilityMangataError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletProxyProxyDefinition (345) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: CommonRuntimeConfigPalletProxyProxyType;
    readonly delay: u32;
  }

  /** @name PalletProxyAnnouncement (349) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u32;
  }

  /** @name PalletProxyError (351) */
  interface PalletProxyError extends Enum {
    readonly isTooMany: boolean;
    readonly isNotFound: boolean;
    readonly isNotProxy: boolean;
    readonly isUnproxyable: boolean;
    readonly isDuplicate: boolean;
    readonly isNoPermission: boolean;
    readonly isUnannounced: boolean;
    readonly isNoSelfProxy: boolean;
    readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
  }

  /** @name PalletMaintenanceMaintenanceStatusInfo (352) */
  interface PalletMaintenanceMaintenanceStatusInfo extends Struct {
    readonly isMaintenance: bool;
    readonly isUpgradableInMaintenance: bool;
  }

  /** @name PalletMaintenanceError (353) */
  interface PalletMaintenanceError extends Enum {
    readonly isNotFoundationAccount: boolean;
    readonly isNotInMaintenanceMode: boolean;
    readonly isAlreadyInMaintenanceMode: boolean;
    readonly isAlreadyUpgradableInMaintenanceMode: boolean;
    readonly isAlreadyNotUpgradableInMaintenanceMode: boolean;
    readonly type: 'NotFoundationAccount' | 'NotInMaintenanceMode' | 'AlreadyInMaintenanceMode' | 'AlreadyUpgradableInMaintenanceMode' | 'AlreadyNotUpgradableInMaintenanceMode';
  }

  /** @name OrmlTokensBalanceLock (356) */
  interface OrmlTokensBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensAccountData (358) */
  interface OrmlTokensAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
  }

  /** @name OrmlTokensReserveData (360) */
  interface OrmlTokensReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensModuleError (362) */
  interface OrmlTokensModuleError extends Enum {
    readonly isBalanceTooLow: boolean;
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isMaxLocksExceeded: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isDeadAccount: boolean;
    readonly isTokenIdNotExists: boolean;
    readonly isTooManyReserves: boolean;
    readonly type: 'BalanceTooLow' | 'AmountIntoBalanceFailed' | 'LiquidityRestrictions' | 'MaxLocksExceeded' | 'KeepAlive' | 'ExistentialDeposit' | 'DeadAccount' | 'TokenIdNotExists' | 'TooManyReserves';
  }

  /** @name PalletTransactionPaymentMangataReleases (364) */
  interface PalletTransactionPaymentMangataReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PalletXykError (366) */
  interface PalletXykError extends Enum {
    readonly isPoolAlreadyExists: boolean;
    readonly isNotEnoughAssets: boolean;
    readonly isNoSuchPool: boolean;
    readonly isNoSuchLiquidityAsset: boolean;
    readonly isNotEnoughReserve: boolean;
    readonly isZeroAmount: boolean;
    readonly isInsufficientInputAmount: boolean;
    readonly isInsufficientOutputAmount: boolean;
    readonly isSameAsset: boolean;
    readonly isAssetAlreadyExists: boolean;
    readonly isAssetDoesNotExists: boolean;
    readonly isDivisionByZero: boolean;
    readonly isUnexpectedFailure: boolean;
    readonly isNotMangataLiquidityAsset: boolean;
    readonly isSecondAssetAmountExceededExpectations: boolean;
    readonly isMathOverflow: boolean;
    readonly isLiquidityTokenCreationFailed: boolean;
    readonly isNotEnoughRewardsEarned: boolean;
    readonly isNotAPromotedPool: boolean;
    readonly isPastTimeCalculation: boolean;
    readonly isPoolAlreadyPromoted: boolean;
    readonly isSoldAmountTooLow: boolean;
    readonly isFunctionNotAvailableForThisToken: boolean;
    readonly isDisallowedPool: boolean;
    readonly isLiquidityCheckpointMathError: boolean;
    readonly isCalculateRewardsMathError: boolean;
    readonly isCalculateCumulativeWorkMaxRatioMathError: boolean;
    readonly isCalculateRewardsAllMathError: boolean;
    readonly isNoRights: boolean;
    readonly isMultiswapShouldBeAtleastTwoHops: boolean;
    readonly isMultiBuyAssetCantHaveSamePoolAtomicSwaps: boolean;
    readonly isMultiSwapCantHaveSameTokenConsequetively: boolean;
    readonly isTradingBlockedByMaintenanceMode: boolean;
    readonly isPoolIsEmpty: boolean;
    readonly type: 'PoolAlreadyExists' | 'NotEnoughAssets' | 'NoSuchPool' | 'NoSuchLiquidityAsset' | 'NotEnoughReserve' | 'ZeroAmount' | 'InsufficientInputAmount' | 'InsufficientOutputAmount' | 'SameAsset' | 'AssetAlreadyExists' | 'AssetDoesNotExists' | 'DivisionByZero' | 'UnexpectedFailure' | 'NotMangataLiquidityAsset' | 'SecondAssetAmountExceededExpectations' | 'MathOverflow' | 'LiquidityTokenCreationFailed' | 'NotEnoughRewardsEarned' | 'NotAPromotedPool' | 'PastTimeCalculation' | 'PoolAlreadyPromoted' | 'SoldAmountTooLow' | 'FunctionNotAvailableForThisToken' | 'DisallowedPool' | 'LiquidityCheckpointMathError' | 'CalculateRewardsMathError' | 'CalculateCumulativeWorkMaxRatioMathError' | 'CalculateRewardsAllMathError' | 'NoRights' | 'MultiswapShouldBeAtleastTwoHops' | 'MultiBuyAssetCantHaveSamePoolAtomicSwaps' | 'MultiSwapCantHaveSameTokenConsequetively' | 'TradingBlockedByMaintenanceMode' | 'PoolIsEmpty';
  }

  /** @name PalletProofOfStakeRewardInfo (367) */
  interface PalletProofOfStakeRewardInfo extends Struct {
    readonly activatedAmount: u128;
    readonly rewardsNotYetClaimed: u128;
    readonly rewardsAlreadyClaimed: u128;
    readonly lastCheckpoint: u32;
    readonly poolRatioAtLastCheckpoint: U256;
    readonly missingAtLastCheckpoint: U256;
  }

  /** @name PalletProofOfStakePromotedPools (371) */
  interface PalletProofOfStakePromotedPools extends Struct {
    readonly weight: u8;
    readonly rewards: U256;
  }

  /** @name PalletProofOfStakeError (374) */
  interface PalletProofOfStakeError extends Enum {
    readonly isNotEnoughAssets: boolean;
    readonly isMathOverflow: boolean;
    readonly isNotEnoughRewardsEarned: boolean;
    readonly isNotAPromotedPool: boolean;
    readonly isPastTimeCalculation: boolean;
    readonly isLiquidityCheckpointMathError: boolean;
    readonly isCalculateRewardsMathError: boolean;
    readonly isMathError: boolean;
    readonly isCalculateRewardsAllMathError: boolean;
    readonly isMissingRewardsInfoError: boolean;
    readonly isDeprecatedExtrinsic: boolean;
    readonly type: 'NotEnoughAssets' | 'MathOverflow' | 'NotEnoughRewardsEarned' | 'NotAPromotedPool' | 'PastTimeCalculation' | 'LiquidityCheckpointMathError' | 'CalculateRewardsMathError' | 'MathError' | 'CalculateRewardsAllMathError' | 'MissingRewardsInfoError' | 'DeprecatedExtrinsic';
  }

  /** @name PalletFeeLockFeeLockMetadataInfo (375) */
  interface PalletFeeLockFeeLockMetadataInfo extends Struct {
    readonly periodLength: u32;
    readonly feeLockAmount: u128;
    readonly swapValueThreshold: u128;
    readonly whitelistedTokens: BTreeSet<u32>;
  }

  /** @name PalletFeeLockAccountFeeLockDataInfo (378) */
  interface PalletFeeLockAccountFeeLockDataInfo extends Struct {
    readonly totalFeeLockAmount: u128;
    readonly lastFeeLockBlock: u32;
  }

  /** @name PalletFeeLockError (379) */
  interface PalletFeeLockError extends Enum {
    readonly isFeeLocksIncorrectlyInitialzed: boolean;
    readonly isInvalidFeeLockMetadata: boolean;
    readonly isFeeLocksNotInitialized: boolean;
    readonly isNotFeeLocked: boolean;
    readonly isCantUnlockFeeYet: boolean;
    readonly isMaxCuratedTokensLimitExceeded: boolean;
    readonly isUnexpectedFailure: boolean;
    readonly type: 'FeeLocksIncorrectlyInitialzed' | 'InvalidFeeLockMetadata' | 'FeeLocksNotInitialized' | 'NotFeeLocked' | 'CantUnlockFeeYet' | 'MaxCuratedTokensLimitExceeded' | 'UnexpectedFailure';
  }

  /** @name PalletVestingMangataReleases (382) */
  interface PalletVestingMangataReleases extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly type: 'V0' | 'V1';
  }

  /** @name PalletVestingMangataError (383) */
  interface PalletVestingMangataError extends Enum {
    readonly isNotVesting: boolean;
    readonly isAtMaxVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isScheduleIndexOutOfBounds: boolean;
    readonly isInvalidScheduleParams: boolean;
    readonly isNoSuitableScheduleFound: boolean;
    readonly isSudoUnlockIsDisallowed: boolean;
    readonly isInvalidVestingIndex: boolean;
    readonly isMathError: boolean;
    readonly type: 'NotVesting' | 'AtMaxVestingSchedules' | 'AmountLow' | 'ScheduleIndexOutOfBounds' | 'InvalidScheduleParams' | 'NoSuitableScheduleFound' | 'SudoUnlockIsDisallowed' | 'InvalidVestingIndex' | 'MathError';
  }

  /** @name PalletCrowdloanRewardsRewardInfo (385) */
  interface PalletCrowdloanRewardsRewardInfo extends Struct {
    readonly totalReward: u128;
    readonly claimedReward: u128;
    readonly contributedRelayAddresses: Vec<AccountId32>;
  }

  /** @name PalletCrowdloanRewardsError (386) */
  interface PalletCrowdloanRewardsError extends Enum {
    readonly isAlreadyAssociated: boolean;
    readonly isBatchBeyondFundPot: boolean;
    readonly isFirstClaimAlreadyDone: boolean;
    readonly isRewardNotHighEnough: boolean;
    readonly isInvalidClaimSignature: boolean;
    readonly isInvalidFreeClaimSignature: boolean;
    readonly isNoAssociatedClaim: boolean;
    readonly isRewardsAlreadyClaimed: boolean;
    readonly isRewardVecAlreadyInitialized: boolean;
    readonly isRewardVecNotFullyInitializedYet: boolean;
    readonly isRewardsDoNotMatchFund: boolean;
    readonly isTooManyContributors: boolean;
    readonly isVestingPeriodNonValid: boolean;
    readonly isNonContributedAddressProvided: boolean;
    readonly isInsufficientNumberOfValidProofs: boolean;
    readonly isClaimingLessThanED: boolean;
    readonly isMathOverflow: boolean;
    readonly isPeriodNotSet: boolean;
    readonly isAllocationDoesNotMatch: boolean;
    readonly type: 'AlreadyAssociated' | 'BatchBeyondFundPot' | 'FirstClaimAlreadyDone' | 'RewardNotHighEnough' | 'InvalidClaimSignature' | 'InvalidFreeClaimSignature' | 'NoAssociatedClaim' | 'RewardsAlreadyClaimed' | 'RewardVecAlreadyInitialized' | 'RewardVecNotFullyInitializedYet' | 'RewardsDoNotMatchFund' | 'TooManyContributors' | 'VestingPeriodNonValid' | 'NonContributedAddressProvided' | 'InsufficientNumberOfValidProofs' | 'ClaimingLessThanED' | 'MathOverflow' | 'PeriodNotSet' | 'AllocationDoesNotMatch';
  }

  /** @name PalletIssuanceError (388) */
  interface PalletIssuanceError extends Enum {
    readonly isIssuanceConfigAlreadyInitialized: boolean;
    readonly isIssuanceConfigNotInitialized: boolean;
    readonly isTgeNotFinalized: boolean;
    readonly isTgeIsAlreadyFinalized: boolean;
    readonly isIssuanceConfigInvalid: boolean;
    readonly isMathError: boolean;
    readonly isUnknownPool: boolean;
    readonly type: 'IssuanceConfigAlreadyInitialized' | 'IssuanceConfigNotInitialized' | 'TgeNotFinalized' | 'TgeIsAlreadyFinalized' | 'IssuanceConfigInvalid' | 'MathError' | 'UnknownPool';
  }

  /** @name PalletMultipurposeLiquidityReserveStatusInfo (389) */
  interface PalletMultipurposeLiquidityReserveStatusInfo extends Struct {
    readonly stakedUnactivatedReserves: u128;
    readonly activatedUnstakedReserves: u128;
    readonly stakedAndActivatedReserves: u128;
    readonly unspentReserves: u128;
    readonly relockAmount: u128;
  }

  /** @name PalletMultipurposeLiquidityRelockStatusInfo (391) */
  interface PalletMultipurposeLiquidityRelockStatusInfo extends Struct {
    readonly amount: u128;
    readonly startingBlock: u32;
    readonly endingBlockAsBalance: u128;
  }

  /** @name PalletMultipurposeLiquidityError (393) */
  interface PalletMultipurposeLiquidityError extends Enum {
    readonly isNotALiquidityToken: boolean;
    readonly isRelockCountLimitExceeded: boolean;
    readonly isRelockInstanceIndexOOB: boolean;
    readonly isNotEnoughUnspentReserves: boolean;
    readonly isNotEnoughTokens: boolean;
    readonly isMathError: boolean;
    readonly type: 'NotALiquidityToken' | 'RelockCountLimitExceeded' | 'RelockInstanceIndexOOB' | 'NotEnoughUnspentReserves' | 'NotEnoughTokens' | 'MathError';
  }

  /** @name PalletBootstrapBootstrapPhase (395) */
  interface PalletBootstrapBootstrapPhase extends Enum {
    readonly isBeforeStart: boolean;
    readonly isWhitelist: boolean;
    readonly isPublic: boolean;
    readonly isFinished: boolean;
    readonly type: 'BeforeStart' | 'Whitelist' | 'Public' | 'Finished';
  }

  /** @name FrameSupportPalletId (398) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletBootstrapError (399) */
  interface PalletBootstrapError extends Enum {
    readonly isUnsupportedTokenId: boolean;
    readonly isNotEnoughAssets: boolean;
    readonly isNotEnoughVestedAssets: boolean;
    readonly isMathOverflow: boolean;
    readonly isUnauthorized: boolean;
    readonly isBootstrapStartInThePast: boolean;
    readonly isPhaseLengthCannotBeZero: boolean;
    readonly isAlreadyStarted: boolean;
    readonly isValuationRatio: boolean;
    readonly isFirstProvisionInSecondTokenId: boolean;
    readonly isPoolAlreadyExists: boolean;
    readonly isNotFinishedYet: boolean;
    readonly isNothingToClaim: boolean;
    readonly isWrongRatio: boolean;
    readonly isBootstrapNotReadyToBeFinished: boolean;
    readonly isSameToken: boolean;
    readonly isTokenIdDoesNotExists: boolean;
    readonly isTokensActivationFailed: boolean;
    readonly isBootstrapNotSchduled: boolean;
    readonly isBootstrapFinished: boolean;
    readonly isTooLateToUpdateBootstrap: boolean;
    readonly isProvisioningBlockedByMaintenanceMode: boolean;
    readonly isBootstrapMustBePreFinalized: boolean;
    readonly type: 'UnsupportedTokenId' | 'NotEnoughAssets' | 'NotEnoughVestedAssets' | 'MathOverflow' | 'Unauthorized' | 'BootstrapStartInThePast' | 'PhaseLengthCannotBeZero' | 'AlreadyStarted' | 'ValuationRatio' | 'FirstProvisionInSecondTokenId' | 'PoolAlreadyExists' | 'NotFinishedYet' | 'NothingToClaim' | 'WrongRatio' | 'BootstrapNotReadyToBeFinished' | 'SameToken' | 'TokenIdDoesNotExists' | 'TokensActivationFailed' | 'BootstrapNotSchduled' | 'BootstrapFinished' | 'TooLateToUpdateBootstrap' | 'ProvisioningBlockedByMaintenanceMode' | 'BootstrapMustBePreFinalized';
  }

  /** @name ParachainStakingRoundInfo (400) */
  interface ParachainStakingRoundInfo extends Struct {
    readonly current: u32;
    readonly first: u32;
    readonly length: u32;
  }

  /** @name ParachainStakingDelegator (401) */
  interface ParachainStakingDelegator extends Struct {
    readonly id: AccountId32;
    readonly delegations: ParachainStakingSetOrderedSetBond;
    readonly requests: ParachainStakingPendingDelegationRequests;
    readonly status: ParachainStakingDelegatorStatus;
  }

  /** @name ParachainStakingSetOrderedSetBond (402) */
  interface ParachainStakingSetOrderedSetBond extends Vec<ParachainStakingBond> {}

  /** @name ParachainStakingBond (403) */
  interface ParachainStakingBond extends Struct {
    readonly owner: AccountId32;
    readonly amount: u128;
    readonly liquidityToken: u32;
  }

  /** @name ParachainStakingPendingDelegationRequests (405) */
  interface ParachainStakingPendingDelegationRequests extends Struct {
    readonly requests: BTreeMap<AccountId32, ParachainStakingDelegationRequest>;
  }

  /** @name ParachainStakingDelegatorStatus (409) */
  interface ParachainStakingDelegatorStatus extends Enum {
    readonly isActive: boolean;
    readonly isLeaving: boolean;
    readonly asLeaving: u32;
    readonly type: 'Active' | 'Leaving';
  }

  /** @name ParachainStakingCollatorCandidate (410) */
  interface ParachainStakingCollatorCandidate extends Struct {
    readonly id: AccountId32;
    readonly bond: u128;
    readonly liquidityToken: u32;
    readonly delegators: ParachainStakingSetOrderedSetAccountId32;
    readonly topDelegations: Vec<ParachainStakingBond>;
    readonly bottomDelegations: Vec<ParachainStakingBond>;
    readonly totalCounted: u128;
    readonly totalBacking: u128;
    readonly request: Option<ParachainStakingCandidateBondRequest>;
    readonly state: ParachainStakingCollatorStatus;
  }

  /** @name ParachainStakingSetOrderedSetAccountId32 (411) */
  interface ParachainStakingSetOrderedSetAccountId32 extends Vec<AccountId32> {}

  /** @name ParachainStakingCollatorStatus (413) */
  interface ParachainStakingCollatorStatus extends Enum {
    readonly isActive: boolean;
    readonly isIdle: boolean;
    readonly isLeaving: boolean;
    readonly asLeaving: u32;
    readonly type: 'Active' | 'Idle' | 'Leaving';
  }

  /** @name ParachainStakingCollatorSnapshot (414) */
  interface ParachainStakingCollatorSnapshot extends Struct {
    readonly bond: u128;
    readonly delegations: Vec<ParachainStakingBond>;
    readonly total: u128;
    readonly liquidityToken: u32;
  }

  /** @name ParachainStakingAggregatorMetadataType (421) */
  interface ParachainStakingAggregatorMetadataType extends Struct {
    readonly tokenCollatorMap: BTreeMap<u32, AccountId32>;
    readonly approvedCandidates: BTreeSet<AccountId32>;
  }

  /** @name ParachainStakingRoundCollatorRewardInfoType (431) */
  interface ParachainStakingRoundCollatorRewardInfoType extends Struct {
    readonly collatorReward: u128;
    readonly delegatorRewards: BTreeMap<AccountId32, u128>;
  }

  /** @name ParachainStakingError (432) */
  interface ParachainStakingError extends Enum {
    readonly isDelegatorDNE: boolean;
    readonly isDelegatorDNEinTopNorBottom: boolean;
    readonly isDelegatorDNEInDelegatorSet: boolean;
    readonly isCandidateDNE: boolean;
    readonly isDelegationDNE: boolean;
    readonly isDelegatorExists: boolean;
    readonly isCandidateExists: boolean;
    readonly isCandidateBondBelowMin: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isDelegationBelowMin: boolean;
    readonly isAlreadyOffline: boolean;
    readonly isAlreadyActive: boolean;
    readonly isDelegatorAlreadyLeaving: boolean;
    readonly isDelegatorNotLeaving: boolean;
    readonly isDelegatorCannotLeaveYet: boolean;
    readonly isCannotDelegateIfLeaving: boolean;
    readonly isCandidateAlreadyLeaving: boolean;
    readonly isCandidateNotLeaving: boolean;
    readonly isCandidateCannotLeaveYet: boolean;
    readonly isCannotGoOnlineIfLeaving: boolean;
    readonly isExceedMaxDelegationsPerDelegator: boolean;
    readonly isAlreadyDelegatedCandidate: boolean;
    readonly isInvalidSchedule: boolean;
    readonly isCannotSetBelowMin: boolean;
    readonly isNoWritingSameValue: boolean;
    readonly isTooLowCandidateCountWeightHintJoinCandidates: boolean;
    readonly isTooLowCandidateCountWeightHintCancelLeaveCandidates: boolean;
    readonly isTooLowCandidateCountToLeaveCandidates: boolean;
    readonly isTooLowDelegationCountToDelegate: boolean;
    readonly isTooLowCandidateDelegationCountToDelegate: boolean;
    readonly isTooLowDelegationCountToLeaveDelegators: boolean;
    readonly isPendingCandidateRequestsDNE: boolean;
    readonly isPendingCandidateRequestAlreadyExists: boolean;
    readonly isPendingCandidateRequestNotDueYet: boolean;
    readonly isPendingDelegationRequestDNE: boolean;
    readonly isPendingDelegationRequestAlreadyExists: boolean;
    readonly isPendingDelegationRequestNotDueYet: boolean;
    readonly isStakingLiquidityTokenNotListed: boolean;
    readonly isTooLowCurrentStakingLiquidityTokensCount: boolean;
    readonly isStakingLiquidityTokenAlreadyListed: boolean;
    readonly isExceedMaxCollatorCandidates: boolean;
    readonly isExceedMaxTotalDelegatorsPerCandidate: boolean;
    readonly isCandidateNotAggregating: boolean;
    readonly isCandidateNotAggregatingUnderAggregator: boolean;
    readonly isCandidateAlreadyApprovedByAggregator: boolean;
    readonly isAggregatorExists: boolean;
    readonly isCollatorRoundRewardsDNE: boolean;
    readonly isDelegatorRewardsDNE: boolean;
    readonly isAggregatorDNE: boolean;
    readonly isTargettedAggregatorSameAsCurrent: boolean;
    readonly isCandidateNotApprovedByAggregator: boolean;
    readonly isAggregatorLiquidityTokenTaken: boolean;
    readonly isIncorrectRewardDelegatorCount: boolean;
    readonly isMathError: boolean;
    readonly type: 'DelegatorDNE' | 'DelegatorDNEinTopNorBottom' | 'DelegatorDNEInDelegatorSet' | 'CandidateDNE' | 'DelegationDNE' | 'DelegatorExists' | 'CandidateExists' | 'CandidateBondBelowMin' | 'InsufficientBalance' | 'DelegationBelowMin' | 'AlreadyOffline' | 'AlreadyActive' | 'DelegatorAlreadyLeaving' | 'DelegatorNotLeaving' | 'DelegatorCannotLeaveYet' | 'CannotDelegateIfLeaving' | 'CandidateAlreadyLeaving' | 'CandidateNotLeaving' | 'CandidateCannotLeaveYet' | 'CannotGoOnlineIfLeaving' | 'ExceedMaxDelegationsPerDelegator' | 'AlreadyDelegatedCandidate' | 'InvalidSchedule' | 'CannotSetBelowMin' | 'NoWritingSameValue' | 'TooLowCandidateCountWeightHintJoinCandidates' | 'TooLowCandidateCountWeightHintCancelLeaveCandidates' | 'TooLowCandidateCountToLeaveCandidates' | 'TooLowDelegationCountToDelegate' | 'TooLowCandidateDelegationCountToDelegate' | 'TooLowDelegationCountToLeaveDelegators' | 'PendingCandidateRequestsDNE' | 'PendingCandidateRequestAlreadyExists' | 'PendingCandidateRequestNotDueYet' | 'PendingDelegationRequestDNE' | 'PendingDelegationRequestAlreadyExists' | 'PendingDelegationRequestNotDueYet' | 'StakingLiquidityTokenNotListed' | 'TooLowCurrentStakingLiquidityTokensCount' | 'StakingLiquidityTokenAlreadyListed' | 'ExceedMaxCollatorCandidates' | 'ExceedMaxTotalDelegatorsPerCandidate' | 'CandidateNotAggregating' | 'CandidateNotAggregatingUnderAggregator' | 'CandidateAlreadyApprovedByAggregator' | 'AggregatorExists' | 'CollatorRoundRewardsDNE' | 'DelegatorRewardsDNE' | 'AggregatorDNE' | 'TargettedAggregatorSameAsCurrent' | 'CandidateNotApprovedByAggregator' | 'AggregatorLiquidityTokenTaken' | 'IncorrectRewardDelegatorCount' | 'MathError';
  }

  /** @name SpCoreCryptoKeyTypeId (436) */
  interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionError (437) */
  interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name CumulusPalletXcmpQueueInboundChannelDetails (443) */
  interface CumulusPalletXcmpQueueInboundChannelDetails extends Struct {
    readonly sender: u32;
    readonly state: CumulusPalletXcmpQueueInboundState;
    readonly messageMetadata: Vec<ITuple<[u32, PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat]>>;
  }

  /** @name CumulusPalletXcmpQueueInboundState (444) */
  interface CumulusPalletXcmpQueueInboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat (447) */
  interface PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat extends Enum {
    readonly isConcatenatedVersionedXcm: boolean;
    readonly isConcatenatedEncodedBlob: boolean;
    readonly isSignals: boolean;
    readonly type: 'ConcatenatedVersionedXcm' | 'ConcatenatedEncodedBlob' | 'Signals';
  }

  /** @name CumulusPalletXcmpQueueOutboundChannelDetails (450) */
  interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
    readonly recipient: u32;
    readonly state: CumulusPalletXcmpQueueOutboundState;
    readonly signalsExist: bool;
    readonly firstIndex: u16;
    readonly lastIndex: u16;
  }

  /** @name CumulusPalletXcmpQueueOutboundState (451) */
  interface CumulusPalletXcmpQueueOutboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name CumulusPalletXcmpQueueQueueConfigData (453) */
  interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
    readonly suspendThreshold: u32;
    readonly dropThreshold: u32;
    readonly resumeThreshold: u32;
    readonly thresholdWeight: SpWeightsWeightV2Weight;
    readonly weightRestrictDecay: SpWeightsWeightV2Weight;
    readonly xcmpMaxIndividualWeight: SpWeightsWeightV2Weight;
  }

  /** @name CumulusPalletXcmpQueueError (455) */
  interface CumulusPalletXcmpQueueError extends Enum {
    readonly isFailedToSend: boolean;
    readonly isBadXcmOrigin: boolean;
    readonly isBadXcm: boolean;
    readonly isBadOverweightIndex: boolean;
    readonly isWeightOverLimit: boolean;
    readonly isXcmMsgProcessingBlockedByMaintenanceMode: boolean;
    readonly type: 'FailedToSend' | 'BadXcmOrigin' | 'BadXcm' | 'BadOverweightIndex' | 'WeightOverLimit' | 'XcmMsgProcessingBlockedByMaintenanceMode';
  }

  /** @name PalletXcmQueryStatus (456) */
  interface PalletXcmQueryStatus extends Enum {
    readonly isPending: boolean;
    readonly asPending: {
      readonly responder: StagingXcmVersionedMultiLocation;
      readonly maybeMatchQuerier: Option<StagingXcmVersionedMultiLocation>;
      readonly maybeNotify: Option<ITuple<[u8, u8]>>;
      readonly timeout: u32;
    } & Struct;
    readonly isVersionNotifier: boolean;
    readonly asVersionNotifier: {
      readonly origin: StagingXcmVersionedMultiLocation;
      readonly isActive: bool;
    } & Struct;
    readonly isReady: boolean;
    readonly asReady: {
      readonly response: StagingXcmVersionedResponse;
      readonly at: u32;
    } & Struct;
    readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
  }

  /** @name StagingXcmVersionedResponse (459) */
  interface StagingXcmVersionedResponse extends Enum {
    readonly isV2: boolean;
    readonly asV2: StagingXcmV2Response;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3Response;
    readonly type: 'V2' | 'V3';
  }

  /** @name PalletXcmVersionMigrationStage (465) */
  interface PalletXcmVersionMigrationStage extends Enum {
    readonly isMigrateSupportedVersion: boolean;
    readonly isMigrateVersionNotifiers: boolean;
    readonly isNotifyCurrentTargets: boolean;
    readonly asNotifyCurrentTargets: Option<Bytes>;
    readonly isMigrateAndNotifyOldTargets: boolean;
    readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
  }

  /** @name StagingXcmVersionedAssetId (468) */
  interface StagingXcmVersionedAssetId extends Enum {
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3MultiassetAssetId;
    readonly type: 'V3';
  }

  /** @name PalletXcmRemoteLockedFungibleRecord (469) */
  interface PalletXcmRemoteLockedFungibleRecord extends Struct {
    readonly amount: u128;
    readonly owner: StagingXcmVersionedMultiLocation;
    readonly locker: StagingXcmVersionedMultiLocation;
    readonly consumers: Vec<ITuple<[Null, u128]>>;
  }

  /** @name PalletXcmError (476) */
  interface PalletXcmError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isFiltered: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isEmpty: boolean;
    readonly isCannotReanchor: boolean;
    readonly isTooManyAssets: boolean;
    readonly isInvalidOrigin: boolean;
    readonly isBadVersion: boolean;
    readonly isBadLocation: boolean;
    readonly isNoSubscription: boolean;
    readonly isAlreadySubscribed: boolean;
    readonly isInvalidAsset: boolean;
    readonly isLowBalance: boolean;
    readonly isTooManyLocks: boolean;
    readonly isAccountNotSovereign: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockNotFound: boolean;
    readonly isInUse: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed' | 'InvalidAsset' | 'LowBalance' | 'TooManyLocks' | 'AccountNotSovereign' | 'FeesNotMet' | 'LockNotFound' | 'InUse';
  }

  /** @name CumulusPalletXcmError (477) */
  type CumulusPalletXcmError = Null;

  /** @name CumulusPalletDmpQueueConfigData (478) */
  interface CumulusPalletDmpQueueConfigData extends Struct {
    readonly maxIndividual: SpWeightsWeightV2Weight;
  }

  /** @name CumulusPalletDmpQueuePageIndexData (479) */
  interface CumulusPalletDmpQueuePageIndexData extends Struct {
    readonly beginUsed: u32;
    readonly endUsed: u32;
    readonly overweightCount: u64;
  }

  /** @name CumulusPalletDmpQueueError (482) */
  interface CumulusPalletDmpQueueError extends Enum {
    readonly isUnknown: boolean;
    readonly isOverLimit: boolean;
    readonly isDmpMsgProcessingBlockedByMaintenanceMode: boolean;
    readonly type: 'Unknown' | 'OverLimit' | 'DmpMsgProcessingBlockedByMaintenanceMode';
  }

  /** @name OrmlXtokensModuleError (483) */
  interface OrmlXtokensModuleError extends Enum {
    readonly isAssetHasNoReserve: boolean;
    readonly isNotCrossChainTransfer: boolean;
    readonly isInvalidDest: boolean;
    readonly isNotCrossChainTransferableCurrency: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isXcmExecutionFailed: boolean;
    readonly isCannotReanchor: boolean;
    readonly isInvalidAncestry: boolean;
    readonly isInvalidAsset: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isBadVersion: boolean;
    readonly isDistinctReserveForAssetAndFee: boolean;
    readonly isZeroFee: boolean;
    readonly isZeroAmount: boolean;
    readonly isTooManyAssetsBeingSent: boolean;
    readonly isAssetIndexNonExistent: boolean;
    readonly isFeeNotEnough: boolean;
    readonly isNotSupportedMultiLocation: boolean;
    readonly isMinXcmFeeNotDefined: boolean;
    readonly type: 'AssetHasNoReserve' | 'NotCrossChainTransfer' | 'InvalidDest' | 'NotCrossChainTransferableCurrency' | 'UnweighableMessage' | 'XcmExecutionFailed' | 'CannotReanchor' | 'InvalidAncestry' | 'InvalidAsset' | 'DestinationNotInvertible' | 'BadVersion' | 'DistinctReserveForAssetAndFee' | 'ZeroFee' | 'ZeroAmount' | 'TooManyAssetsBeingSent' | 'AssetIndexNonExistent' | 'FeeNotEnough' | 'NotSupportedMultiLocation' | 'MinXcmFeeNotDefined';
  }

  /** @name OrmlUnknownTokensModuleError (486) */
  interface OrmlUnknownTokensModuleError extends Enum {
    readonly isBalanceTooLow: boolean;
    readonly isBalanceOverflow: boolean;
    readonly isUnhandledAsset: boolean;
    readonly type: 'BalanceTooLow' | 'BalanceOverflow' | 'UnhandledAsset';
  }

  /** @name OrmlXcmModuleError (487) */
  interface OrmlXcmModuleError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isBadVersion: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'BadVersion';
  }

  /** @name OrmlAssetRegistryModuleError (488) */
  interface OrmlAssetRegistryModuleError extends Enum {
    readonly isAssetNotFound: boolean;
    readonly isBadVersion: boolean;
    readonly isInvalidAssetId: boolean;
    readonly isConflictingLocation: boolean;
    readonly isConflictingAssetId: boolean;
    readonly isInvalidAssetString: boolean;
    readonly type: 'AssetNotFound' | 'BadVersion' | 'InvalidAssetId' | 'ConflictingLocation' | 'ConflictingAssetId' | 'InvalidAssetString';
  }

  /** @name PalletTreasuryProposal (489) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name PalletTreasuryError (491) */
  interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isProposalNotApproved: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved';
  }

  /** @name PalletSudoMangataError (492) */
  interface PalletSudoMangataError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name PalletSudoOriginError (493) */
  type PalletSudoOriginError = Null;

  /** @name PalletCollectiveMangataVotes (495) */
  interface PalletCollectiveMangataVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u32;
  }

  /** @name PalletCollectiveMangataError (496) */
  interface PalletCollectiveMangataError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooEarlyToCloseByNonFoundationAccount: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly isPrimeAccountNotMember: boolean;
    readonly isNotFoundationAccountOrRoot: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooEarlyToCloseByNonFoundationAccount' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength' | 'PrimeAccountNotMember' | 'NotFoundationAccountOrRoot';
  }

  /** @name PalletIdentityRegistration (497) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (505) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: PalletIdentityBitFlags;
  }

  /** @name PalletIdentityError (507) */
  interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyFields: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly isJudgementForDifferentIdentity: boolean;
    readonly isJudgementPaymentFailed: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyFields' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity' | 'JudgementPaymentFailed';
  }

  /** @name FrameSystemExtensionsCheckSpecVersion (510) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (511) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (512) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (515) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (516) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentMangataChargeTransactionPayment (517) */
  interface PalletTransactionPaymentMangataChargeTransactionPayment extends Compact<u128> {}

  /** @name MangataRococoRuntimeRuntime (518) */
  type MangataRococoRuntimeRuntime = Null;

} // declare module
