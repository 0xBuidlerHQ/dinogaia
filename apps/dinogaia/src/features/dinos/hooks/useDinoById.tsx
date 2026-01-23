import {
	useReadDinoFactoryAccountOf,
	useReadEmeraldErc20BalanceOf,
} from "@0xbuidlerhq/dinogaia.contracts";

type Props = {
	id: bigint;
};

const useDinoById = (props: Props) => {
	const { id } = props;

	const { data: account } = useReadDinoFactoryAccountOf({ args: [id] });
	const { data: emeraldBalance } = useReadEmeraldErc20BalanceOf({ args: [account!] });

	return { account, emeraldBalance };
};

export { useDinoById };
