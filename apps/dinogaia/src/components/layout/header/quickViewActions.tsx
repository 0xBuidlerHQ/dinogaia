"use client";

import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H1_0, H3, H6 } from "@0xbuidlerhq/ui/system/base/typography";
import { Header as HeaderPrimitive } from "@0xbuidlerhq/ui/system/layouts/header";
import { useDinogaia } from "@providers/dinogaia";
import type { PropsWithChildren } from "react";
import { EthereumLogo } from "../../../assets/emerald";
import { timestampToAge } from "../../../utils";

const SUBHEADER_HEIGHT = "h-[60px]";

type QuickViewActionsItemProps = PropsWithChildren & {
	title: string;
	className?: string;
	classNameText?: string;
};
const QuickViewActionsItem = (props: QuickViewActionsItemProps) => {
	return (
		<Box className={cn("flex flex-col gap-1 px-2", props.className)}>
			<H6
				className={cn("font-tronica-mono font-medium text-muted-foreground", props.classNameText)}
			>
				{props.title}
			</H6>

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

	const Seperator = () => <Box className={cn("w-px bg-muted", SUBHEADER_HEIGHT)} />;

	return (
		<HeaderPrimitive className="bg-olive-600/50">
			<Box
				className={cn(
					"border-x border-muted flex justify-center items-center px-2 ",
					SUBHEADER_HEIGHT,
				)}
			>
				<Box className="flex items-center gap-4 w-full">
					<Box className="basis-1 grow flex gap-2 items-center">
						<QuickViewActionsItem title="Age">
							<H3 className="font-tronica-mono">
								{age.days}d/{age.hours}h/{age.minutes}m
							</H3>
						</QuickViewActionsItem>

						<Seperator />

						<QuickViewActionsItem title="Species">
							<H3 className="font-tronica-mono">{currentDino.data?.genesis.speciesId}</H3>
						</QuickViewActionsItem>

						<Seperator />

						<QuickViewActionsItem title="Height">
							<H3 className="font-tronica-mono">{currentDino.data?.progress.weight}cm</H3>
						</QuickViewActionsItem>

						<Seperator />

						<QuickViewActionsItem title="Weight">
							<H3 className="font-tronica-mono">{currentDino.data?.progress.weight}kg</H3>
						</QuickViewActionsItem>

						<Seperator />
					</Box>
					<Box className="flex gap-2 items-center">
						<Seperator />

						<QuickViewActionsItem title="Level">
							<H3 className="font-tronica-mono">{currentDino.data?.progress.level}</H3>
						</QuickViewActionsItem>

						<Seperator />

						<QuickViewActionsItem title="Name" className="px-2">
							<H3 className="font-tronica-mono text-[#a3e635]">{currentDino.data?.genesis.name}</H3>
						</QuickViewActionsItem>

						<Seperator />

						<QuickViewActionsItem title="Hp">
							<H3 className="font-tronica-mono">{currentDino.data?.stats.health}/100</H3>
						</QuickViewActionsItem>

						<Seperator />
					</Box>
					p
					<Box className="basis-1 grow flex items-center justify-end gap-2">
						<Box className="flex items-center gap-1">
							<H1_0 className="font-tronica-mono leading-none relative top-0.5">
								10000{currentDino.emeraldBalance}
							</H1_0>

							<EthereumLogo className="size-7" />
						</Box>
					</Box>
				</Box>
			</Box>
		</HeaderPrimitive>
	);
};

export { QuickViewActions };
