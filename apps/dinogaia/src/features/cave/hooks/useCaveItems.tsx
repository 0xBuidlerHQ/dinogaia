"use client";

import { itemsSet0Abi, itemsSet0Address } from "@0xbuidlerhq/dinogaia.contracts";

import type { SubgraphTypes } from "@0xbuidlerhq/dinogaia.subgraph";
import { useDinogaia } from "@providers/dinogaia";
import { useWeb3 } from "@providers/web3";
import { useStore } from "@stores/useStore";
import { useMemo } from "react";
import { useReadContracts } from "wagmi";

type ItemWithBalance = SubgraphTypes.Item & { balance: bigint };

const FALLBACK_CHAIN_ID = Number(Object.keys(itemsSet0Address)[0]);

const useCaveItems = () => {
	const { items } = useDinogaia();
	const { chain } = useWeb3();
	const activeDinoAccount = useStore((state) => state.activeDinoAccount);

	const chainId = chain?.id ?? FALLBACK_CHAIN_ID;
	const contractAddress =
		itemsSet0Address[chainId as keyof typeof itemsSet0Address] ??
		itemsSet0Address[FALLBACK_CHAIN_ID as keyof typeof itemsSet0Address];

	const balanceCalls = useMemo(() => {
		if (!activeDinoAccount || items.length === 0 || !contractAddress) {
			return [];
		}

		return items.map((item) => ({
			abi: itemsSet0Abi,
			address: contractAddress,
			functionName: "balanceOf" as const,
			args: [activeDinoAccount, item.itemId],
			chainId,
		}));
	}, [activeDinoAccount, contractAddress, items, chainId]);

	const balancesQuery = useReadContracts({
		contracts: balanceCalls,
		enabled: balanceCalls.length > 0,
	});

	const itemsWithBalance = useMemo(() => {
		const results = balancesQuery.data;

		return items.map((item, index) => {
			const entry = results?.[index];
			const balance =
				entry && typeof entry === "object" && "status" in entry && entry.status === "success"
					? (entry as { result: bigint }).result
					: 0n;

			return {
				...item,
				balance,
			} as ItemWithBalance;
		});
	}, [balancesQuery.data, items]);

	return {
		items: itemsWithBalance,
		isLoading: balancesQuery.isLoading,
		isFetching: balancesQuery.isFetching,
		refetch: balancesQuery.refetch,
	};
};

export { useCaveItems };
