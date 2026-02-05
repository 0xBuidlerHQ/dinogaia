"use client";

import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H1 } from "@0xbuidlerhq/ui/system/base/typography";
import { Header as HeaderPrimitive } from "@0xbuidlerhq/ui/system/layouts/header";
import { ConnectButton } from "@components/layout/header/connectButton";

/**
 * @dev Constants.
 */
const HEADER_HEIGHT = "h-[50px]";

const Header = () => {
	return (
		<HeaderPrimitive>
			<Box className={cn(HEADER_HEIGHT, "flex items-center border-x border-muted px-4")}>
				<Box className="flex flex-1">
					<H1>Dinogaia</H1>
				</Box>

				<Box className="flex-1 flex justify-end">
					<ConnectButton />
				</Box>
			</Box>
		</HeaderPrimitive>
	);
};

export { Header };
