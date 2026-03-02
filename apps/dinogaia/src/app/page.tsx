"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H4 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { PAGES } from "@config/pages";
import { useWeb3 } from "@providers/web3";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
	const { ready, isConnected, connect } = useWeb3();
	const router = useRouter();

	useEffect(() => {
		if (ready && isConnected) {
			return router.push(PAGES.app.dino);
		}
	}, [ready, isConnected]);

	return (
		<Box className="h-full flex items-center justify-center border border-muted">
			<ButtonBase onClick={connect}>
				<H4>Connect</H4>
			</ButtonBase>
		</Box>
	);
};

export default Page;
