"use client";

import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H1_0, H3, H6 } from "@0xbuidlerhq/ui/system/base/typography";
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
		<Box className="border-b border-muted pr-2">
			<Box className="flex items-center gap-4 w-full">
				<Box className="flex gap-2 items-center">
					<QuickViewActionsItem title="Name" className="px-2">
						<H3 className="font-tronica-mono text-[#a3e635]">{currentDino.data?.genesis.name}</H3>
					</QuickViewActionsItem>

					<Seperator />

					{/* <QuickViewActionsItem title="Hp">
						<H3 className="font-tronica-mono">{currentDino.data?.stats.health}/100</H3>
					</QuickViewActionsItem>

					<Seperator /> */}
				</Box>

				<Box className="basis-1 grow flex items-center justify-end gap-2">
					<Seperator />

					<Box className="flex items-center gap-1 px-2">
						<H1_0 className="font-tronica-mono leading-none relative top-0.5">
							{currentDino.emeraldBalance}
						</H1_0>

						<EthereumLogo className="size-7" />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export { QuickViewActions };
