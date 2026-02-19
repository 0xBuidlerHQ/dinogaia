"use client";

import { useWriteDinoFactoryMint } from "@0xbuidlerhq/dinogaia.contracts";

/**
 * @dev
 */
const useMint = () => {
	const mint = useWriteDinoFactoryMint({});

	return { mint };
};

const DinoFactory = {
	useMint,
};

export { DinoFactory };
