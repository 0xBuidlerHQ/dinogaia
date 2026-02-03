import {
	caveModuleAbi,
	caveModuleAddress,
	useReadCaveModuleGetCave,
	useReadItemsSet0ItemIdsIndex,
} from "@0xbuidlerhq/dinogaia.contracts";
import type { Address } from "viem";
import { useReadContracts } from "wagmi";

type UseCaveProps = { dinoId: bigint };

const chain = "31337";
const caveAddress = caveModuleAddress[chain] as Address | undefined;

export const useCave = ({ dinoId }: UseCaveProps) => {
	const { data: cave, isLoading: loadingCave } = useReadCaveModuleGetCave({
		args: [dinoId],
		query: { enabled: Boolean(caveAddress) },
	});

	const { data: totalIds } = useReadItemsSet0ItemIdsIndex({});
	const count = typeof totalIds === "bigint" ? Number(totalIds) : 0;

	const eqContracts =
		caveAddress && count > 0
			? Array.from({ length: count }, (_, i) => ({
					address: caveAddress,
					abi: caveModuleAbi,
					functionName: "isEquipped",
					args: [dinoId, BigInt(i)],
				}))
			: [];

	const { data: eqData, isLoading: loadingEq } = useReadContracts({
		contracts: eqContracts,
		allowFailure: true,
	});

	const equipped = new Set<number>();
	if (eqData) {
		eqData.forEach((res, idx) => {
			if (res?.result === true) equipped.add(idx);
		});
	}

	return {
		cave,
		equipped,
		isLoading: loadingCave || loadingEq,
	};
};
