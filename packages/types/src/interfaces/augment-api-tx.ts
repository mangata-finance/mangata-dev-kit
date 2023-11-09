// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Data } from '@polkadot/types';
import type { Bytes, Compact, Option, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, MultiAddress, Perbill, Permill } from '@polkadot/types/interfaces/runtime';
import type { CommonRuntimeConfigPalletProxyProxyType, CumulusPrimitivesParachainInherentParachainInherentData, MangataRococoRuntimeOriginCaller, MangataRococoRuntimeSessionKeys, MangataTypesAssetsCustomMetadata, MangataTypesMultipurposeLiquidityActivateKind, MangataTypesMultipurposeLiquidityBondKind, OrmlTraitsAssetRegistryAssetMetadata, PalletIdentityBitFlags, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletIssuanceTgeInfo, PalletVestingMangataVestingInfo, ParachainStakingMetadataUpdateAction, ParachainStakingPairedOrLiquidityToken, SpRuntimeMultiSignature, SpWeightsWeightV2Weight, StagingXcmV3MultiLocation, StagingXcmV3WeightLimit, StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiAssets, StagingXcmVersionedMultiLocation, StagingXcmVersionedXcm } from '@polkadot/types/lookup';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    assetRegistry: {
      /**
       * See [`Pallet::register_asset`].
       **/
      registerAsset: AugmentedSubmittable<(metadata: OrmlTraitsAssetRegistryAssetMetadata | { decimals?: any; name?: any; symbol?: any; existentialDeposit?: any; location?: any; additional?: any } | string | Uint8Array, assetId: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [OrmlTraitsAssetRegistryAssetMetadata, Option<u32>]>;
      /**
       * See [`Pallet::update_asset`].
       **/
      updateAsset: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, decimals: Option<u32> | null | Uint8Array | u32 | AnyNumber, name: Option<Bytes> | null | Uint8Array | Bytes | string, symbol: Option<Bytes> | null | Uint8Array | Bytes | string, existentialDeposit: Option<u128> | null | Uint8Array | u128 | AnyNumber, location: Option<Option<StagingXcmVersionedMultiLocation>> | null | Uint8Array | Option<StagingXcmVersionedMultiLocation> | StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string, additional: Option<MangataTypesAssetsCustomMetadata> | null | Uint8Array | MangataTypesAssetsCustomMetadata | { xcm?: any; xyk?: any } | string) => SubmittableExtrinsic<ApiType>, [u32, Option<u32>, Option<Bytes>, Option<Bytes>, Option<u128>, Option<Option<StagingXcmVersionedMultiLocation>>, Option<MangataTypesAssetsCustomMetadata>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    bootstrap: {
      /**
       * See [`Pallet::cancel_bootstrap`].
       **/
      cancelBootstrap: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::claim_and_activate_liquidity_tokens`].
       **/
      claimAndActivateLiquidityTokens: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::claim_liquidity_tokens`].
       **/
      claimLiquidityTokens: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::claim_liquidity_tokens_for_account`].
       **/
      claimLiquidityTokensForAccount: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array, activateRewards: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, bool]>;
      /**
       * See [`Pallet::finalize`].
       **/
      finalize: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::pre_finalize`].
       **/
      preFinalize: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::provision`].
       **/
      provision: AugmentedSubmittable<(tokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * See [`Pallet::schedule_bootstrap`].
       **/
      scheduleBootstrap: AugmentedSubmittable<(firstTokenId: u32 | AnyNumber | Uint8Array, secondTokenId: u32 | AnyNumber | Uint8Array, idoStart: u32 | AnyNumber | Uint8Array, whitelistPhaseLength: Option<u32> | null | Uint8Array | u32 | AnyNumber, publicPhaseLength: u32 | AnyNumber | Uint8Array, maxFirstToSecondRatio: Option<ITuple<[u128, u128]>> | null | Uint8Array | ITuple<[u128, u128]> | [u128 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array], promoteBootstrapPool: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, Option<u32>, u32, Option<ITuple<[u128, u128]>>, bool]>;
      /**
       * See [`Pallet::update_promote_bootstrap_pool`].
       **/
      updatePromoteBootstrapPool: AugmentedSubmittable<(promoteBootstrapPool: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * See [`Pallet::whitelist_accounts`].
       **/
      whitelistAccounts: AugmentedSubmittable<(accounts: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    council: {
      /**
       * See [`Pallet::close`].
       **/
      close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]>;
      /**
       * See [`Pallet::disapprove_proposal`].
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::execute`].
       **/
      execute: AugmentedSubmittable<(proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
      /**
       * See [`Pallet::propose`].
       **/
      propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
      /**
       * See [`Pallet::set_members`].
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    crowdloan: {
      /**
       * See [`Pallet::associate_native_identity`].
       **/
      associateNativeIdentity: AugmentedSubmittable<(rewardAccount: AccountId32 | string | Uint8Array, relayAccount: AccountId32 | string | Uint8Array, proof: SpRuntimeMultiSignature | { Ed25519: any } | { Sr25519: any } | { Ecdsa: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32, SpRuntimeMultiSignature]>;
      /**
       * See [`Pallet::change_association_with_relay_keys`].
       **/
      changeAssociationWithRelayKeys: AugmentedSubmittable<(rewardAccount: AccountId32 | string | Uint8Array, previousAccount: AccountId32 | string | Uint8Array, proofs: Vec<ITuple<[AccountId32, SpRuntimeMultiSignature]>> | ([AccountId32 | string | Uint8Array, SpRuntimeMultiSignature | { Ed25519: any } | { Sr25519: any } | { Ecdsa: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32, Vec<ITuple<[AccountId32, SpRuntimeMultiSignature]>>]>;
      /**
       * See [`Pallet::claim`].
       **/
      claim: AugmentedSubmittable<(crowdloanId: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * See [`Pallet::complete_initialization`].
       **/
      completeInitialization: AugmentedSubmittable<(leaseStartBlock: u32 | AnyNumber | Uint8Array, leaseEndingBlock: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::initialize_reward_vec`].
       **/
      initializeRewardVec: AugmentedSubmittable<(rewards: Vec<ITuple<[AccountId32, Option<AccountId32>, u128]>> | ([AccountId32 | string | Uint8Array, Option<AccountId32> | null | Uint8Array | AccountId32 | string, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, Option<AccountId32>, u128]>>]>;
      /**
       * See [`Pallet::set_crowdloan_allocation`].
       **/
      setCrowdloanAllocation: AugmentedSubmittable<(crowdloanAllocationAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::update_reward_address`].
       **/
      updateRewardAddress: AugmentedSubmittable<(newRewardAccount: AccountId32 | string | Uint8Array, crowdloanId: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [AccountId32, Option<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    cumulusXcm: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    dmpQueue: {
      /**
       * See [`Pallet::service_overweight`].
       **/
      serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    feeLock: {
      /**
       * See [`Pallet::unlock_fee`].
       **/
      unlockFee: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::update_fee_lock_metadata`].
       **/
      updateFeeLockMetadata: AugmentedSubmittable<(periodLength: Option<u32> | null | Uint8Array | u32 | AnyNumber, feeLockAmount: Option<u128> | null | Uint8Array | u128 | AnyNumber, swapValueThreshold: Option<u128> | null | Uint8Array | u128 | AnyNumber, shouldBeWhitelisted: Option<Vec<ITuple<[u32, bool]>>> | null | Uint8Array | Vec<ITuple<[u32, bool]>> | ([u32 | AnyNumber | Uint8Array, bool | boolean | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Option<u32>, Option<u128>, Option<u128>, Option<Vec<ITuple<[u32, bool]>>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    identity: {
      /**
       * See [`Pallet::add_registrar`].
       **/
      addRegistrar: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::add_sub`].
       **/
      addSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
      /**
       * See [`Pallet::cancel_request`].
       **/
      cancelRequest: AugmentedSubmittable<(regIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::clear_identity`].
       **/
      clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::kill_identity`].
       **/
      killIdentity: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::provide_judgement`].
       **/
      provideJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, judgement: PalletIdentityJudgement | { Unknown: any } | { FeePaid: any } | { Reasonable: any } | { KnownGood: any } | { OutOfDate: any } | { LowQuality: any } | { Erroneous: any } | string | Uint8Array, identity: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, PalletIdentityJudgement, H256]>;
      /**
       * See [`Pallet::quit_sub`].
       **/
      quitSub: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::remove_sub`].
       **/
      removeSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::rename_sub`].
       **/
      renameSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
      /**
       * See [`Pallet::request_judgement`].
       **/
      requestJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, maxFee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * See [`Pallet::set_account_id`].
       **/
      setAccountId: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * See [`Pallet::set_fee`].
       **/
      setFee: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * See [`Pallet::set_fields`].
       **/
      setFields: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fields: PalletIdentityBitFlags) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletIdentityBitFlags]>;
      /**
       * See [`Pallet::set_identity`].
       **/
      setIdentity: AugmentedSubmittable<(info: PalletIdentityIdentityInfo | { additional?: any; display?: any; legal?: any; web?: any; riot?: any; email?: any; pgpFingerprint?: any; image?: any; twitter?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletIdentityIdentityInfo]>;
      /**
       * See [`Pallet::set_subs`].
       **/
      setSubs: AugmentedSubmittable<(subs: Vec<ITuple<[AccountId32, Data]>> | ([AccountId32 | string | Uint8Array, Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, Data]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    issuance: {
      /**
       * See [`Pallet::execute_tge`].
       **/
      executeTge: AugmentedSubmittable<(tgeInfos: Vec<PalletIssuanceTgeInfo> | (PalletIssuanceTgeInfo | { who?: any; amount?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletIssuanceTgeInfo>]>;
      /**
       * See [`Pallet::finalize_tge`].
       **/
      finalizeTge: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::init_issuance_config`].
       **/
      initIssuanceConfig: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    maintenance: {
      /**
       * See [`Pallet::switch_maintenance_mode_off`].
       **/
      switchMaintenanceModeOff: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::switch_maintenance_mode_on`].
       **/
      switchMaintenanceModeOn: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::switch_upgradability_in_maintenance_mode_off`].
       **/
      switchUpgradabilityInMaintenanceModeOff: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::switch_upgradability_in_maintenance_mode_on`].
       **/
      switchUpgradabilityInMaintenanceModeOn: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multiPurposeLiquidity: {
      /**
       * See [`Pallet::reserve_vesting_liquidity_tokens`].
       **/
      reserveVestingLiquidityTokens: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, liquidityTokenAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * See [`Pallet::reserve_vesting_liquidity_tokens_by_vesting_index`].
       **/
      reserveVestingLiquidityTokensByVestingIndex: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, liquidityTokenVestingIndex: u32 | AnyNumber | Uint8Array, liquidityTokenUnlockSomeAmountOrAll: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u32, u32, Option<u128>]>;
      /**
       * See [`Pallet::reserve_vesting_native_tokens_by_vesting_index`].
       **/
      reserveVestingNativeTokensByVestingIndex: AugmentedSubmittable<(liquidityTokenVestingIndex: u32 | AnyNumber | Uint8Array, liquidityTokenUnlockSomeAmountOrAll: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u32, Option<u128>]>;
      /**
       * See [`Pallet::unreserve_and_relock_instance`].
       **/
      unreserveAndRelockInstance: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, relockInstanceIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    ormlXcm: {
      /**
       * See [`Pallet::send_as_sovereign`].
       **/
      sendAsSovereign: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, message: StagingXcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedXcm]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainInfo: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainStaking: {
      /**
       * See [`Pallet::add_staking_liquidity_token`].
       **/
      addStakingLiquidityToken: AugmentedSubmittable<(pairedOrLiquidityToken: ParachainStakingPairedOrLiquidityToken | { Paired: any } | { Liquidity: any } | string | Uint8Array, currentLiquidityTokens: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParachainStakingPairedOrLiquidityToken, u32]>;
      /**
       * See [`Pallet::aggregator_update_metadata`].
       **/
      aggregatorUpdateMetadata: AugmentedSubmittable<(collatorCandidates: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], action: ParachainStakingMetadataUpdateAction | 'ExtendApprovedCollators' | 'RemoveApprovedCollators' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, ParachainStakingMetadataUpdateAction]>;
      /**
       * See [`Pallet::cancel_candidate_bond_request`].
       **/
      cancelCandidateBondRequest: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::cancel_delegation_request`].
       **/
      cancelDelegationRequest: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::cancel_leave_candidates`].
       **/
      cancelLeaveCandidates: AugmentedSubmittable<(candidateCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::cancel_leave_delegators`].
       **/
      cancelLeaveDelegators: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::delegate`].
       **/
      delegate: AugmentedSubmittable<(collator: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityBondKind | 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves' | number, candidateDelegationCount: u32 | AnyNumber | Uint8Array, delegationCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128, Option<MangataTypesMultipurposeLiquidityBondKind>, u32, u32]>;
      /**
       * See [`Pallet::execute_candidate_bond_request`].
       **/
      executeCandidateBondRequest: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityBondKind | 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves' | number) => SubmittableExtrinsic<ApiType>, [AccountId32, Option<MangataTypesMultipurposeLiquidityBondKind>]>;
      /**
       * See [`Pallet::execute_delegation_request`].
       **/
      executeDelegationRequest: AugmentedSubmittable<(delegator: AccountId32 | string | Uint8Array, candidate: AccountId32 | string | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityBondKind | 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves' | number) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32, Option<MangataTypesMultipurposeLiquidityBondKind>]>;
      /**
       * See [`Pallet::execute_leave_candidates`].
       **/
      executeLeaveCandidates: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, candidateDelegationCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * See [`Pallet::execute_leave_delegators`].
       **/
      executeLeaveDelegators: AugmentedSubmittable<(delegator: AccountId32 | string | Uint8Array, delegationCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * See [`Pallet::go_offline`].
       **/
      goOffline: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::go_online`].
       **/
      goOnline: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::join_candidates`].
       **/
      joinCandidates: AugmentedSubmittable<(bond: u128 | AnyNumber | Uint8Array, liquidityToken: u32 | AnyNumber | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityBondKind | 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves' | number, candidateCount: u32 | AnyNumber | Uint8Array, liquidityTokenCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32, Option<MangataTypesMultipurposeLiquidityBondKind>, u32, u32]>;
      /**
       * See [`Pallet::payout_collator_rewards`].
       **/
      payoutCollatorRewards: AugmentedSubmittable<(collator: AccountId32 | string | Uint8Array, numberOfSesisons: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [AccountId32, Option<u32>]>;
      /**
       * See [`Pallet::payout_delegator_reward`].
       **/
      payoutDelegatorReward: AugmentedSubmittable<(round: u32 | AnyNumber | Uint8Array, collator: AccountId32 | string | Uint8Array, delegator: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, AccountId32, AccountId32]>;
      /**
       * See [`Pallet::remove_staking_liquidity_token`].
       **/
      removeStakingLiquidityToken: AugmentedSubmittable<(pairedOrLiquidityToken: ParachainStakingPairedOrLiquidityToken | { Paired: any } | { Liquidity: any } | string | Uint8Array, currentLiquidityTokens: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParachainStakingPairedOrLiquidityToken, u32]>;
      /**
       * See [`Pallet::schedule_candidate_bond_less`].
       **/
      scheduleCandidateBondLess: AugmentedSubmittable<(less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::schedule_candidate_bond_more`].
       **/
      scheduleCandidateBondMore: AugmentedSubmittable<(more: u128 | AnyNumber | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityBondKind | 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves' | number) => SubmittableExtrinsic<ApiType>, [u128, Option<MangataTypesMultipurposeLiquidityBondKind>]>;
      /**
       * See [`Pallet::schedule_delegator_bond_less`].
       **/
      scheduleDelegatorBondLess: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128]>;
      /**
       * See [`Pallet::schedule_delegator_bond_more`].
       **/
      scheduleDelegatorBondMore: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, more: u128 | AnyNumber | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityBondKind | 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves' | number) => SubmittableExtrinsic<ApiType>, [AccountId32, u128, Option<MangataTypesMultipurposeLiquidityBondKind>]>;
      /**
       * See [`Pallet::schedule_leave_candidates`].
       **/
      scheduleLeaveCandidates: AugmentedSubmittable<(candidateCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::schedule_leave_delegators`].
       **/
      scheduleLeaveDelegators: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::schedule_revoke_delegation`].
       **/
      scheduleRevokeDelegation: AugmentedSubmittable<(collator: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::set_collator_commission`].
       **/
      setCollatorCommission: AugmentedSubmittable<(updated: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
      /**
       * See [`Pallet::set_total_selected`].
       **/
      setTotalSelected: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::update_candidate_aggregator`].
       **/
      updateCandidateAggregator: AugmentedSubmittable<(maybeAggregator: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [Option<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainSystem: {
      /**
       * See [`Pallet::authorize_upgrade`].
       **/
      authorizeUpgrade: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array, checkVersion: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, bool]>;
      /**
       * See [`Pallet::enact_authorized_upgrade`].
       **/
      enactAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_validation_data`].
       **/
      setValidationData: AugmentedSubmittable<(data: CumulusPrimitivesParachainInherentParachainInherentData | { validationData?: any; relayChainState?: any; downwardMessages?: any; horizontalMessages?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CumulusPrimitivesParachainInherentParachainInherentData]>;
      /**
       * See [`Pallet::sudo_send_upward_message`].
       **/
      sudoSendUpwardMessage: AugmentedSubmittable<(message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    polkadotXcm: {
      /**
       * See [`Pallet::execute`].
       **/
      execute: AugmentedSubmittable<(message: StagingXcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedXcm, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::force_default_xcm_version`].
       **/
      forceDefaultXcmVersion: AugmentedSubmittable<(maybeXcmVersion: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * See [`Pallet::force_subscribe_version_notify`].
       **/
      forceSubscribeVersionNotify: AugmentedSubmittable<(location: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation]>;
      /**
       * See [`Pallet::force_suspension`].
       **/
      forceSuspension: AugmentedSubmittable<(suspended: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * See [`Pallet::force_unsubscribe_version_notify`].
       **/
      forceUnsubscribeVersionNotify: AugmentedSubmittable<(location: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation]>;
      /**
       * See [`Pallet::force_xcm_version`].
       **/
      forceXcmVersion: AugmentedSubmittable<(location: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, version: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV3MultiLocation, u32]>;
      /**
       * See [`Pallet::limited_reserve_transfer_assets`].
       **/
      limitedReserveTransferAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::limited_teleport_assets`].
       **/
      limitedTeleportAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::reserve_transfer_assets`].
       **/
      reserveTransferAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32]>;
      /**
       * See [`Pallet::send`].
       **/
      send: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, message: StagingXcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedXcm]>;
      /**
       * See [`Pallet::teleport_assets`].
       **/
      teleportAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    proofOfStake: {
      /**
       * See [`Pallet::activate_liquidity`].
       **/
      activateLiquidity: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityActivateKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityActivateKind | 'AvailableBalance' | 'StakedUnactivatedReserves' | 'UnspentReserves' | number) => SubmittableExtrinsic<ApiType>, [u32, u128, Option<MangataTypesMultipurposeLiquidityActivateKind>]>;
      /**
       * See [`Pallet::claim_rewards_all`].
       **/
      claimRewardsAll: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::deactivate_liquidity`].
       **/
      deactivateLiquidity: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * See [`Pallet::update_pool_promotion`].
       **/
      updatePoolPromotion: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, liquidityMiningIssuanceWeight: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u8]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    proxy: {
      /**
       * See [`Pallet::add_proxy`].
       **/
      addProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: CommonRuntimeConfigPalletProxyProxyType | 'AutoCompound' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, CommonRuntimeConfigPalletProxyProxyType, u32]>;
      /**
       * See [`Pallet::announce`].
       **/
      announce: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * See [`Pallet::create_pure`].
       **/
      createPure: AugmentedSubmittable<(proxyType: CommonRuntimeConfigPalletProxyProxyType | 'AutoCompound' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CommonRuntimeConfigPalletProxyProxyType, u32, u16]>;
      /**
       * See [`Pallet::kill_pure`].
       **/
      killPure: AugmentedSubmittable<(spawner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: CommonRuntimeConfigPalletProxyProxyType | 'AutoCompound' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<u32> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, CommonRuntimeConfigPalletProxyProxyType, u16, Compact<u32>, Compact<u32>]>;
      /**
       * See [`Pallet::proxy`].
       **/
      proxy: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<CommonRuntimeConfigPalletProxyProxyType> | null | Uint8Array | CommonRuntimeConfigPalletProxyProxyType | 'AutoCompound' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Option<CommonRuntimeConfigPalletProxyProxyType>, Call]>;
      /**
       * See [`Pallet::proxy_announced`].
       **/
      proxyAnnounced: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<CommonRuntimeConfigPalletProxyProxyType> | null | Uint8Array | CommonRuntimeConfigPalletProxyProxyType | 'AutoCompound' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Option<CommonRuntimeConfigPalletProxyProxyType>, Call]>;
      /**
       * See [`Pallet::reject_announcement`].
       **/
      rejectAnnouncement: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * See [`Pallet::remove_announcement`].
       **/
      removeAnnouncement: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * See [`Pallet::remove_proxies`].
       **/
      removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::remove_proxy`].
       **/
      removeProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: CommonRuntimeConfigPalletProxyProxyType | 'AutoCompound' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, CommonRuntimeConfigPalletProxyProxyType, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    session: {
      /**
       * See [`Pallet::purge_keys`].
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::set_keys`].
       **/
      setKeys: AugmentedSubmittable<(keys: MangataRococoRuntimeSessionKeys | { aura?: any } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MangataRococoRuntimeSessionKeys, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    sudo: {
      /**
       * See [`Pallet::set_key`].
       **/
      setKey: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::sudo`].
       **/
      sudo: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * See [`Pallet::sudo_as`].
       **/
      sudoAs: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
      /**
       * See [`Pallet::sudo_unchecked_weight`].
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    sudoOrigin: {
      /**
       * See [`Pallet::sudo`].
       **/
      sudo: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * See [`Pallet::sudo_as`].
       **/
      sudoAs: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
      /**
       * See [`Pallet::sudo_unchecked_weight`].
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    system: {
      /**
       * See [`Pallet::enqueue_txs`].
       **/
      enqueueTxs: AugmentedSubmittable<(txs: Vec<ITuple<[Option<AccountId32>, Bytes]>> | ([Option<AccountId32> | null | Uint8Array | AccountId32 | string, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Option<AccountId32>, Bytes]>>]>;
      /**
       * See [`Pallet::kill_prefix`].
       **/
      killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
      /**
       * See [`Pallet::kill_storage`].
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
      /**
       * See [`Pallet::remark`].
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::remark_with_event`].
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_code`].
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_code_without_checks`].
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_heap_pages`].
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * See [`Pallet::set_storage`].
       **/
      setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    timestamp: {
      /**
       * See [`Pallet::set`].
       **/
      set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    tokens: {
      /**
       * See [`Pallet::create`].
       **/
      create: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::force_transfer`].
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, u32, Compact<u128>]>;
      /**
       * See [`Pallet::mint`].
       **/
      mint: AugmentedSubmittable<(currencyId: u32 | AnyNumber | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::set_balance`].
       **/
      setBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32, Compact<u128>]>;
      /**
       * See [`Pallet::transfer_all`].
       **/
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32, bool]>;
      /**
       * See [`Pallet::transfer_keep_alive`].
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    treasury: {
      /**
       * See [`Pallet::approve_proposal`].
       **/
      approveProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::propose_spend`].
       **/
      proposeSpend: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
      /**
       * See [`Pallet::reject_proposal`].
       **/
      rejectProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::remove_approval`].
       **/
      removeApproval: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::spend`].
       **/
      spend: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    utility: {
      /**
       * See [`Pallet::as_derivative`].
       **/
      asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
      /**
       * See [`Pallet::batch`].
       **/
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * See [`Pallet::batch_all`].
       **/
      batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * See [`Pallet::dispatch_as`].
       **/
      dispatchAs: AugmentedSubmittable<(asOrigin: MangataRococoRuntimeOriginCaller | { system: any } | { Void: any } | { PolkadotXcm: any } | { CumulusXcm: any } | { Council: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MangataRococoRuntimeOriginCaller, Call]>;
      /**
       * See [`Pallet::force_batch`].
       **/
      forceBatch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * See [`Pallet::with_weight`].
       **/
      withWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vesting: {
      /**
       * See [`Pallet::force_vested_transfer`].
       **/
      forceVestedTransfer: AugmentedSubmittable<(tokenId: u32 | AnyNumber | Uint8Array, source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: PalletVestingMangataVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, MultiAddress, PalletVestingMangataVestingInfo]>;
      /**
       * See [`Pallet::merge_schedules`].
       **/
      mergeSchedules: AugmentedSubmittable<(tokenId: u32 | AnyNumber | Uint8Array, schedule1Index: u32 | AnyNumber | Uint8Array, schedule2Index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32]>;
      /**
       * See [`Pallet::sudo_unlock_all_vesting_tokens`].
       **/
      sudoUnlockAllVestingTokens: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, tokenId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32]>;
      /**
       * See [`Pallet::vest`].
       **/
      vest: AugmentedSubmittable<(tokenId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::vest_other`].
       **/
      vestOther: AugmentedSubmittable<(tokenId: u32 | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xcmpQueue: {
      /**
       * See [`Pallet::resume_xcm_execution`].
       **/
      resumeXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::service_overweight`].
       **/
      serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::suspend_xcm_execution`].
       **/
      suspendXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::update_drop_threshold`].
       **/
      updateDropThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::update_resume_threshold`].
       **/
      updateResumeThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::update_suspend_threshold`].
       **/
      updateSuspendThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::update_threshold_weight`].
       **/
      updateThresholdWeight: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::update_weight_restrict_decay`].
       **/
      updateWeightRestrictDecay: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::update_xcmp_max_individual_weight`].
       **/
      updateXcmpMaxIndividualWeight: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xTokens: {
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(currencyId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multiasset`].
       **/
      transferMultiasset: AugmentedSubmittable<(asset: StagingXcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multiassets`].
       **/
      transferMultiassets: AugmentedSubmittable<(assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeItem: u32 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiAssets, u32, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multiasset_with_fee`].
       **/
      transferMultiassetWithFee: AugmentedSubmittable<(asset: StagingXcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, fee: StagingXcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multicurrencies`].
       **/
      transferMulticurrencies: AugmentedSubmittable<(currencies: Vec<ITuple<[u32, u128]>> | ([u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array])[], feeItem: u32 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[u32, u128]>>, u32, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_with_fee`].
       **/
      transferWithFee: AugmentedSubmittable<(currencyId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, fee: u128 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u128, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xyk: {
      /**
       * See [`Pallet::burn_liquidity`].
       **/
      burnLiquidity: AugmentedSubmittable<(firstAssetId: u32 | AnyNumber | Uint8Array, secondAssetId: u32 | AnyNumber | Uint8Array, liquidityAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
      /**
       * See [`Pallet::buy_asset`].
       **/
      buyAsset: AugmentedSubmittable<(soldAssetId: u32 | AnyNumber | Uint8Array, boughtAssetId: u32 | AnyNumber | Uint8Array, boughtAssetAmount: u128 | AnyNumber | Uint8Array, maxAmountIn: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      /**
       * See [`Pallet::compound_rewards`].
       **/
      compoundRewards: AugmentedSubmittable<(liquidityAssetId: u32 | AnyNumber | Uint8Array, amountPermille: Permill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Permill]>;
      /**
       * See [`Pallet::create_pool`].
       **/
      createPool: AugmentedSubmittable<(firstAssetId: u32 | AnyNumber | Uint8Array, firstAssetAmount: u128 | AnyNumber | Uint8Array, secondAssetId: u32 | AnyNumber | Uint8Array, secondAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u32, u128]>;
      /**
       * See [`Pallet::mint_liquidity`].
       **/
      mintLiquidity: AugmentedSubmittable<(firstAssetId: u32 | AnyNumber | Uint8Array, secondAssetId: u32 | AnyNumber | Uint8Array, firstAssetAmount: u128 | AnyNumber | Uint8Array, expectedSecondAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      /**
       * See [`Pallet::mint_liquidity_using_vesting_native_tokens`].
       **/
      mintLiquidityUsingVestingNativeTokens: AugmentedSubmittable<(vestingNativeAssetAmount: u128 | AnyNumber | Uint8Array, secondAssetId: u32 | AnyNumber | Uint8Array, expectedSecondAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32, u128]>;
      /**
       * See [`Pallet::mint_liquidity_using_vesting_native_tokens_by_vesting_index`].
       **/
      mintLiquidityUsingVestingNativeTokensByVestingIndex: AugmentedSubmittable<(nativeAssetVestingIndex: u32 | AnyNumber | Uint8Array, vestingNativeAssetUnlockSomeAmountOrAll: Option<u128> | null | Uint8Array | u128 | AnyNumber, secondAssetId: u32 | AnyNumber | Uint8Array, expectedSecondAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<u128>, u32, u128]>;
      /**
       * See [`Pallet::multiswap_buy_asset`].
       **/
      multiswapBuyAsset: AugmentedSubmittable<(swapTokenList: Vec<u32> | (u32 | AnyNumber | Uint8Array)[], boughtAssetAmount: u128 | AnyNumber | Uint8Array, maxAmountIn: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<u32>, u128, u128]>;
      /**
       * See [`Pallet::multiswap_sell_asset`].
       **/
      multiswapSellAsset: AugmentedSubmittable<(swapTokenList: Vec<u32> | (u32 | AnyNumber | Uint8Array)[], soldAssetAmount: u128 | AnyNumber | Uint8Array, minAmountOut: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<u32>, u128, u128]>;
      /**
       * See [`Pallet::provide_liquidity_with_conversion`].
       **/
      provideLiquidityWithConversion: AugmentedSubmittable<(liquidityAssetId: u32 | AnyNumber | Uint8Array, providedAssetId: u32 | AnyNumber | Uint8Array, providedAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
      /**
       * See [`Pallet::sell_asset`].
       **/
      sellAsset: AugmentedSubmittable<(soldAssetId: u32 | AnyNumber | Uint8Array, boughtAssetId: u32 | AnyNumber | Uint8Array, soldAssetAmount: u128 | AnyNumber | Uint8Array, minAmountOut: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  } // AugmentedSubmittables
} // declare module
