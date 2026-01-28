import { useReadEmeraldErc20BalanceOf } from "@0xbuidlerhq/dinogaia.contracts";
import type { Address } from "viem";

type useEmeraldERC20Props = {
	dinoAccount: Address;
};
const useEmeraldERC20 = (props: useEmeraldERC20Props) => {
	const { dinoAccount } = props;

	const balanceOf = useReadEmeraldErc20BalanceOf({ args: [dinoAccount] });

	return { balanceOf };
};

const EmeraldERC20 = {
	useEmeraldERC20,
};

export { EmeraldERC20 };
