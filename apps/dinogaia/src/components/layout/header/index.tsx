"use client";

import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Header as LayoutHeader } from "@0xbuidlerhq/ui/system/layouts/header";
import { Head } from "@components/layout/header/head";
import { Navigation } from "@components/layout/header/navigation";
import { PAGES } from "@config/pages";
import { useWeb3 } from "@providers/web3";
import { usePathname } from "next/navigation";

const Seperator = () => {
	return (
		<LayoutHeader className="border-b border-t border-muted bg-accent/10">
			<Box className="h-1 border-x border-muted" />
		</LayoutHeader>
	);
};

/**
 * @dev Header component.
 */
const Header = () => {
	const { isConnected } = useWeb3();
	const pathname = usePathname();

	const isDiff = pathname !== PAGES.login;

	return (
		<Box className="flex flex-col">
			<Head />
			<Seperator />

			<Box
				className={cn(
					"pointer-events-none opacity-0 h-0",
					isDiff && isConnected && "pointer-events-auto opacity-100 h-full",
				)}
			>
				<Navigation />
				<Seperator />
			</Box>
		</Box>
	);
};

export { Header };
