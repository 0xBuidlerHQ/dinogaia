import { emeraldErc20Abi, emeraldErc20Address } from "@0xbuidlerhq/dinogaia.contracts";
import type { Address } from "viem";

type useReadContractsUtilsProps = {
	chainId: number;
	dinoAccount: Address;
};
const useReadContractsUtils = (props: useReadContractsUtilsProps) => {
	const balanceOf = {
		abi: emeraldErc20Abi,
		address: emeraldErc20Address[props.chainId],
		functionName: "balanceOf",
		args: [props.dinoAccount!],
	};

	return { balanceOf };
};

export { useReadContractsUtils };
