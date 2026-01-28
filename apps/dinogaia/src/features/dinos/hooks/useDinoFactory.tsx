"use client";

import {
	useReadDinoFactoryGetDino,
	useReadDinoFactoryGetDinosOfOwner,
	useWriteDinoFactoryMint,
} from "@0xbuidlerhq/dinogaia.contracts";
import { useWeb3 } from "@config/providers/web3";
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

const useDinoFactory = () => {
	const { eoa } = useWeb3();

	const dinosOfOwner = useReadDinoFactoryGetDinosOfOwner({ args: [eoa.address!] });

	return { dinosOfOwner };
};

const DinoFactory = {
	useMint,
	useGetDino,
	useGetDinosOfOwner,
	useDinoFactory,
};

export { DinoFactory };
