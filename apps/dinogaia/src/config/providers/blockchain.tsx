"use client";

import type { PropsWithChildren } from "react";
import { cookieStorage, createConfig, createStorage, http, WagmiProvider } from "wagmi";
import { anvil, mainnet } from "wagmi/chains";
import { injected } from "wagmi/connectors";

const wagmiConfig = createConfig({
	chains: [mainnet, anvil],
	ssr: true,
	transports: {
		[mainnet.id]: http(),
		[anvil.id]: http(),
	},
	connectors: [injected()],
	storage: createStorage({
		storage: cookieStorage,
	}),
});

const BlockchainProvider = ({ children }: PropsWithChildren) => (
	<WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>
);

export { BlockchainProvider };
