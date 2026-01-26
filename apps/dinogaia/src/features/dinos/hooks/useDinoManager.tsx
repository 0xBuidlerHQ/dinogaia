import {
	useReadDinoManagerGetDino,
	useReadDinoManagerGetDinosOfOwner,
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

	const dino = useReadDinoManagerGetDino({ args: [dinoId] });
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

	const dinosOf = useReadDinoManagerGetDinosOfOwner({ args: [owner] });
	return { dinosOf };
};

const DinoManager = {
	useDino,
	useDinosOf,
};

export { DinoManager };
