"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Header as HeaderPrimitive } from "@0xbuidlerhq/ui/system/layouts/header";
import { useWeb3 } from "@config/providers/web3";

const Header = () => {
	const { connect, eoa, chain } = useWeb3();

	return (
		<HeaderPrimitive>
			<Box className="flex justify-between">
				<Box onClick={connect}>Connect</Box>
				<Box>{eoa.address}</Box>
				<Box>{chain?.name}</Box>
			</Box>
		</HeaderPrimitive>
	);
};

export { Header };
``;
