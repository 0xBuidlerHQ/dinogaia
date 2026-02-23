"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Header as LayoutHeader } from "@0xbuidlerhq/ui/system/layouts/header";
import { Head } from "@components/layout/header/head";
import { Navigation } from "@components/layout/header/navigation";
import { QuickViewActions } from "@components/layout/header/quickViewActions";

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
	return (
		<Box className="flex flex-col">
			<Head />
			<Seperator />

			<Navigation />
			<Seperator />

			<QuickViewActions />
			<Seperator />
		</Box>
	);
};

export { Header };
