"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Header as LayoutHeader } from "@0xbuidlerhq/ui/system/layouts/header";
import { Header as HeaderPrimitive } from "@components/layout/header/header";
import { Navigation } from "@components/layout/header/navigation";
import { SubHeader } from "@components/layout/header/subheader";

const Header = () => {
	return (
		<Box className="flex flex-col">
			<LayoutHeader className="border-b border-muted bg-accent/10">
				<Box className="h-4 border-x border-muted" />
			</LayoutHeader>

			<Box>
				<HeaderPrimitive />
			</Box>

			<LayoutHeader className="border-b border-t border-muted bg-accent/10">
				<Box className="h-1 border-x border-muted" />
			</LayoutHeader>

			<Box>
				<Navigation />
			</Box>

			<LayoutHeader className="border-b border-t border-muted bg-accent/10">
				<Box className="h-1 border-x border-muted" />
			</LayoutHeader>

			<Box>
				<SubHeader />
			</Box>

			<LayoutHeader className="border-b border-t border-muted bg-accent/10">
				<Box className="h-1 border-x border-muted" />
			</LayoutHeader>
		</Box>
	);
};

export { Header };
