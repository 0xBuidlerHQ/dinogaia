"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Header as LayoutHeader } from "@0xbuidlerhq/ui/system/layouts/header";
import { Header as HeaderPrimitive } from "@components/layout/header/header";
import { Navigation } from "@components/layout/header/navigation";
import { SubHeader } from "@components/layout/header/subheader";

const Seperator = () => {
	return (
		<LayoutHeader className="border-b border-t border-muted bg-accent/10">
			<Box className="h-1 border-x border-muted" />
		</LayoutHeader>
	);
};

const Header = () => {
	return (
		<Box className="flex flex-col">
			<Box>
				<HeaderPrimitive />
			</Box>

			<Seperator />

			<Box>
				<Navigation />
			</Box>

			<Seperator />

			<Box>
				<SubHeader />
			</Box>

			<Seperator />
		</Box>
	);
};

export { Header };
