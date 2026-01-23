import { useReadDinoAccountFactoryDinosOf } from "@0xbuidlerhq/dinogaia.contracts";
import type { Address } from "viem";

type Props = {
	owner: Address;
};

const useDinosByOwner = (props: Props) => {
	const { owner } = props;

	const { data: dinosOf } = useReadDinoAccountFactoryDinosOf({ args: [owner] });

	const dinos =
		dinosOf?.[0].map((_, idx) => ({
			dinoId: dinosOf[0][idx],
			dinoAccount: dinosOf[1][idx],
		})) ?? [];

	return { dinos };
};

export { useDinosByOwner };
