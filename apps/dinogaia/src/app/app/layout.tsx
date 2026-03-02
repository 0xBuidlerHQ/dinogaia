"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Container } from "@0xbuidlerhq/ui/system/base/container";
import { H1_7 } from "@0xbuidlerhq/ui/system/base/typography";
import { StatItem } from "@app/app/page";
import { QuickViewActions } from "@components/layout/header/quickViewActions";
import { DefaultScene } from "@features/3d/defaultScene";
import { useDinogaia } from "@providers/dinogaia";
import type { PropsWithChildren } from "react";

const DinoScene = () => {
	const { currentDino } = useDinogaia();

	return (
		<Box className="h-full relative">
			<Box className="absolute top-0 left-0 z-100 w-full">
				<QuickViewActions />

				<Box className="flex">
					<StatItem title="Level">
						<H1_7>{currentDino.data?.progress.level}</H1_7>
					</StatItem>
				</Box>
			</Box>

			<DefaultScene />
		</Box>
	);
};

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<Box className="min-h-screen">
			<Container className="h-full">
				<Box className="grid grid-cols-12 min-h-screen border-x border-muted">
					<Box className="col-span-7">
						<Box className="sticky top-0 h-screen">
							<DinoScene />
						</Box>
					</Box>

					<Box className="col-span-5 min-h-screen flex flex-col">
						<Box className="grow">{children}</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Layout;
