"use client";

import { Container } from "@0xbuidlerhq/ui/system/base/container";
import { H4 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { PAGES } from "@config/pages";
import { useRouter } from "@hooks/useRouter";
import { useDinogaia } from "@providers/dinogaia";
import { useWeb3 } from "@providers/web3";
import { useEffect } from "react";

const Page = () => {
	const { ready, isConnected, connect } = useWeb3();
	const router = useRouter();
	const { q, myDinos } = useDinogaia();

	useEffect(() => {
		if (ready && isConnected && q.qMyDinos.data) {
			if (myDinos.length > 0) return router.push(PAGES.app.homepage);
			return router.push(PAGES.app.new);
		}
	}, [ready, isConnected, q.qMyDinos.data]);

	return (
		<Container>
			<ButtonBase onClick={connect}>
				<H4>Connect</H4>
			</ButtonBase>
		</Container>
	);
};

export default Page;
