"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Header as HeaderPrimitive } from "@components/layout/header/header";
import { Navigation } from "@components/layout/header/navigation";
import { SubHeader } from "@components/layout/header/subheader";

const Header = () => {
	return (
		<Box className="flex flex-col gap-2">
			<Box>
				<HeaderPrimitive />
			</Box>

			<Box>
				<SubHeader />
			</Box>

			<Box>
				<Navigation />
			</Box>
		</Box>
	);
};

export { Header };
