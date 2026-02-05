import { useWriteDinoFactoryMint } from "@0xbuidlerhq/dinogaia.contracts";

/**
 * @dev
 */
const useMint = () => {
	const mint = useWriteDinoFactoryMint({});

	return { mint };
};

export { useMint };
