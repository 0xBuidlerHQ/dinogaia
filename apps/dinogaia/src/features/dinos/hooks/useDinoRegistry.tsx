import {
	useReadDinoRegistryDino,
	useReadDinoRegistryDinosOf,
	useWriteDinoRegistryMint,
} from "@0xbuidlerhq/dinogaia.contracts";
import type { Address } from "viem";

/**
 * @dev
 */
type useDinoProps = {
	dinoId: bigint;
};

const useDino = (props: useDinoProps) => {
	const { dinoId } = props;

	const dino = useReadDinoRegistryDino({ args: [dinoId] });
	return { dino };
};

/**
 * @dev
 */
type useDinosOfProps = {
	owner: Address;
};
const useDinosOf = (props: useDinosOfProps) => {
	const { owner } = props;

	const dinosOf = useReadDinoRegistryDinosOf({ args: [owner] });
	return { dinosOf };
};

const useMint = () => {
	const mint = useWriteDinoRegistryMint({});

	return { mint };
};

const DinoRegistry = {
	useDino,
	useDinosOf,
	useMint,
};

export { DinoRegistry };
