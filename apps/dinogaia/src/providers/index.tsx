import { BlockchainProvider } from "@providers/blockchain";
import { DinogaiaProvider } from "@providers/dinogaia";
import { PonderProvider } from "@providers/ponder";
import { QueryProvider } from "@providers/query";
import { ThemeProvider } from "@providers/theme";
import { Web3Provider } from "@providers/web3";

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
		<PonderProvider>
			<QueryProvider>
				<BlockchainProvider>
					<Web3Provider>
						<DinogaiaProvider>{children}</DinogaiaProvider>
					</Web3Provider>
				</BlockchainProvider>
			</QueryProvider>
		</PonderProvider>
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
