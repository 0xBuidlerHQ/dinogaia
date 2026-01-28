import {
	useReadDinoFactoryGetDino,
	useReadDinoFactoryGetDinosOfOwner,
	useWriteDinoFactoryMint,
} from "@0xbuidlerhq/dinogaia.contracts";
import type { Address } from "viem";

const useMint = () => {
	const mint = useWriteDinoFactoryMint({});

	return { mint };
};

type useGetDinoProps = {
	dinoId: bigint;
};
const useGetDino = (props: useGetDinoProps) => {
	const { dinoId } = props;

	const dino = useReadDinoFactoryGetDino({ args: [dinoId] });

	return { dino };
};

type useDinosOfOwnerProps = {
	owner: Address;
};
const useGetDinosOfOwner = (props: useDinosOfOwnerProps) => {
	const { owner } = props;

	const dinosOfOwner = useReadDinoFactoryGetDinosOfOwner({ args: [owner] });

	return { dinosOfOwner };
};

const DinoFactory = {
	useMint,
	useGetDino,
	useGetDinosOfOwner,
};

export { DinoFactory };
