"use client";

import { Container } from "@0xbuidlerhq/ui/system/base/container";
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
			return router.push(PAGES.myDino);
		}
	}, [ready, isConnected]);

	return (
		<Container>
			<ButtonBase onClick={connect}>
				<H4>Connect</H4>
			</ButtonBase>
		</Container>
	);
};

export default Page;
