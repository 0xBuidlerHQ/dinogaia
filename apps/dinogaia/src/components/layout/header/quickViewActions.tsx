"use client";

import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H4, H5, H6, H7 } from "@0xbuidlerhq/ui/system/base/typography";
import { Header as HeaderPrimitive } from "@0xbuidlerhq/ui/system/layouts/header";
import { useDinogaia } from "@providers/dinogaia";
import type { PropsWithChildren } from "react";
import { timestampToAge } from "../../../utils";

const SUBHEADER_HEIGHT = "h-[40px]";

type QuickViewActionsItemProps = PropsWithChildren & {
	title: string;
};
const QuickViewActionsItem = (props: QuickViewActionsItemProps) => {
	return (
		<Box>
			<H7 className="font-tronica-mono text-muted-foreground">{props.title}</H7>

			{props.children}
		</Box>
	);
};

/**
 * @dev QuickViewActions component.
 */
const QuickViewActions = () => {
	const { currentDino } = useDinogaia();

	const age = timestampToAge(currentDino.data?.genesis.birthTimestamp!);

	return (
		<HeaderPrimitive>
			<Box
				className={cn(
					"border-x border-muted flex justify-center items-center px-2",
					SUBHEADER_HEIGHT,
				)}
			>
				<Box className="flex items-center gap-4 w-full">
					<Box className="basis-1 grow flex gap-2 items-center">
						<QuickViewActionsItem title="Age">
							<H5 className="font-tronica-mono">
								{age.days}d/{age.hours}h/{age.minutes}m
							</H5>
						</QuickViewActionsItem>

						<QuickViewActionsItem title="Species">
							<H6 className="font-tronica-mono">{currentDino.data?.genesis.speciesId}</H6>
						</QuickViewActionsItem>

						<QuickViewActionsItem title="Height">
							<H6 className="font-tronica-mono">{currentDino.data?.progress.weight}cm</H6>
						</QuickViewActionsItem>

						<QuickViewActionsItem title="Weight">
							<H6 className="font-tronica-mono">{currentDino.data?.progress.weight}kg</H6>
						</QuickViewActionsItem>
					</Box>

					<Box className="flex gap-2">
						<H4 className="uppercase">{currentDino.data?.progress.level}</H4>
						<H4 className="uppercase">{currentDino.data?.progress.level}</H4>
						<H4 className="uppercase">{currentDino.data?.genesis.name}</H4>
						<H4 className="uppercase">{currentDino.data?.progress.weight}</H4>
						<H4 className="uppercase">{currentDino.data?.progress.weight}</H4>
					</Box>

					<Box className="basis-1 grow flex items-center justify-center gap-2">
						hi
						{/* <MintButton />
						<SelectButton /> */}
					</Box>
				</Box>
			</Box>
		</HeaderPrimitive>
	);
};

export { QuickViewActions };
