"use client";

import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Header as HeaderPrimitive } from "@0xbuidlerhq/ui/system/layouts/header";
import { MintButton } from "@features/dinos/mint/MintButton";
import { SelectButton } from "@features/dinos/select/SelectButton";
import { useDinogaia } from "@providers/dinogaia";

const SUBHEADER_HEIGHT = "h-[40px]";

/**
 * @dev QuickViewActions component.
 */
const QuickViewActions = () => {
	const { currentDino } = useDinogaia();

	return (
		<HeaderPrimitive>
			<Box
				className={cn(
					"border-x border-muted flex justify-between items-center px-4",
					SUBHEADER_HEIGHT,
				)}
			>
				<Box className="flex items-center gap-4">
					<Box className="flex gap-2">{currentDino.data?.genesis.name}</Box>
					<Box className="h-4 w-[1px] bg-accent" />
					<Box>{String(currentDino.emeraldBalance)} Emerald</Box>
					<Box className="h-4 w-[1px] bg-accent" />
					<Box>{String(currentDino.data?.progress.weight)} Kg</Box>
					<Box className="h-4 w-[1px] bg-accent" />
				</Box>

				<Box className="flex items-center justify-center gap-2">
					<MintButton />
					<SelectButton />
				</Box>
			</Box>
		</HeaderPrimitive>
	);
};

export { QuickViewActions };
