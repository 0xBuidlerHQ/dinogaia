"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H4 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { useWeb3 } from "@config/providers/web3";

const Connect = () => {
	const { connect } = useWeb3();

	return (
		<ButtonBase onClick={connect}>
			<H4>Connect</H4>
		</ButtonBase>
	);
};

const Connected = () => {
	const { eoa, disconnect } = useWeb3();

	return (
		<ButtonBase onClick={disconnect}>
			<H4>{eoa.address}</H4>
		</ButtonBase>
	);
};

const ConnectButton = () => {
	const { isConnected } = useWeb3();

	return <Box>{isConnected ? <Connected /> : <Connect />}</Box>;
};

export { ConnectButton };
