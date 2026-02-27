"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Container } from "@0xbuidlerhq/ui/system/base/container";
import { useWeb3 } from "@providers/web3";

const Page = () => {
	const { isDisconnected } = useWeb3();

	return (
		<Container>
			<Box>{!isDisconnected ? "app" : "connect"}</Box>
		</Container>
	);
};

export default Page;
