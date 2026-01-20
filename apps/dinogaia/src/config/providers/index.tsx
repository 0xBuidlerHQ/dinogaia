import { BlockchainProvider } from "@config/providers/blockchain";
import { QueryProvider } from "@config/providers/query";
import { ThemeProvider } from "@config/providers/theme";
import { Web3Provider } from "@config/providers/web3";

import type { PropsWithChildren } from "react";

/**
 * @dev Layout Providers.
 */
const LayoutProviders = ({ children }: PropsWithChildren) => {
	return <ThemeProvider>{children}</ThemeProvider>;
};

/**
 * @dev Layout Providers.
 */
const LogicProviders = ({ children }: PropsWithChildren) => {
	return (
		<QueryProvider>
			<BlockchainProvider>
				<Web3Provider>{children}</Web3Provider>
			</BlockchainProvider>
		</QueryProvider>
	);
};

/**
 * @dev Providers.
 */
const Providers = ({ children }: PropsWithChildren) => {
	return (
		<LayoutProviders>
			<LogicProviders>{children}</LogicProviders>
		</LayoutProviders>
	);
};

export { Providers };
