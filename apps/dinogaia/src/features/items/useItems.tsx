import { itemsSet0Address, itemsSetBaseAbi } from "@0xbuidlerhq/dinogaia.contracts";
import type { Address } from "viem";
import { useReadContract, useReadContracts } from "wagmi";

type useItemsProps = {
	owner: Address;
};
export const useItems = ({ owner }: useItemsProps) => {
	const itemSet = itemsSet0Address["31337"] as Address;

	const { data: totalIds, isLoading: loadingIds } = useReadContract({
		address: itemSet,
		abi: itemsSetBaseAbi,
		functionName: "itemIdsIndex",
	});

	const count = typeof totalIds === "bigint" ? Number(totalIds) : 0;

	const contracts =
		owner && count > 0
			? Array.from({ length: count }, (_, i) => {
					const id = BigInt(i);
					return [
						{
							address: itemSet,
							abi: itemsSetBaseAbi,
							functionName: "balanceOf",
							args: [owner, id],
						},
						{
							address: itemSet,
							abi: itemsSetBaseAbi,
							functionName: "name",
							args: [id],
						},
					];
				}).flat()
			: [];

	const { data: readResults, isLoading: loadingReads } = useReadContracts({
		contracts,
		allowFailure: true,
	});

	const items: { id: bigint; balance: bigint; name: string }[] = [];
	if (readResults) {
		for (let i = 0; i < count; i++) {
			const bal = readResults[i * 2]?.result as bigint | undefined;
			const name = (readResults[i * 2 + 1]?.result as string | undefined) ?? "";
			if (bal && bal > 0n) {
				items.push({ id: BigInt(i), balance: bal, name });
			}
		}
	}

	return { items, isLoading: loadingIds || loadingReads };
};

export const ItemsHooks = {
	useItems,
};
