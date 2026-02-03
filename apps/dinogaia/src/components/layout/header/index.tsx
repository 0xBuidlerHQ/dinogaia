"use client";

import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Header as HeaderPrimitive } from "@0xbuidlerhq/ui/system/layouts/header";
import { ConnectButton } from "@components/layout/header/connectButton";
import { MyDinos } from "@components/layout/header/myDinos";
import { Navigation } from "@components/layout/header/navigation";

/**
 * @dev Constants.
 */
const HEADER_HEIGHT = "h-[60px]";

const Header = () => {
	return (
		<Box className="flex flex-col gap-2">
			<Box className="bg-muted">
				<HeaderPrimitive>
					<Box className={cn(HEADER_HEIGHT, "flex justify-between items-center")}>
						<Box>Dinogaia</Box>
						<Navigation />
						<ConnectButton />
					</Box>
				</HeaderPrimitive>
			</Box>

			<Box>
				<HeaderPrimitive>
					<MyDinos />
				</HeaderPrimitive>
			</Box>
		</Box>
	);
};

export { Header };
