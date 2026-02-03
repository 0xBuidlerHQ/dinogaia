"use client";

import {
	useReadDinoFactoryGetDinosOfOwner,
	useWriteDinoFactoryMint,
} from "@0xbuidlerhq/dinogaia.contracts";
import { useWeb3 } from "@config/providers/web3";

/**
 * @dev
 */
const useMint = () => {
	const mint = useWriteDinoFactoryMint({});

	return { mint };
};

/**
 * @dev
 */
const useDinoFactory = () => {
	const { eoa } = useWeb3();

	const dinosOfOwner = useReadDinoFactoryGetDinosOfOwner({ args: [eoa.address!] });

	return { dinosOfOwner };
};

type Dino = NonNullable<ReturnType<typeof useDinoFactory>["dinosOfOwner"]["data"]>[number];

const DinoFactory = {
	useMint,
	useDinoFactory,
};

export { DinoFactory, type Dino };
