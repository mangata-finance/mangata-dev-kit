import { ApiPromise } from "@polkadot/api";
import { BN } from "@polkadot/util";
import { TokenId } from "../../types/common";
import { logger } from "../../utils/mangataLogger";

/**
 * @since 2.0.0
 */
export const isBuyAssetLockFree = async (
  instancePromise: Promise<ApiPromise>,
  tokenIds: TokenId[],
  amount: BN
) => {
  logger.info("isBuyAssetLockFree", {
    tokenIds,
    amount: amount.toString()
  });
  const api = await instancePromise;
  const result = await api.rpc.xyk.is_buy_asset_lock_free(
    tokenIds,
    amount
  );
  return result.toPrimitive() as boolean;
};
