"use client";

import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Container } from "@0xbuidlerhq/ui/system/base/container";
import { H4 } from "@0xbuidlerhq/ui/system/base/typography";
import { schema } from "@config/providers/ponder";
import { usePonderQuery } from "@ponder/react";
import type { PropsWithChildren } from "react";

type StatsItemProps = PropsWithChildren & { title: string; className: string };
const StatsItem = (props: StatsItemProps) => {
	const { title, children, className } = props;

	return (
		<Box className={cn("flex flex-col gap-4", className)}>
			<H4>{title}</H4>
			<Box>{children}</Box>
		</Box>
	);
};

const StatsPage = () => {
	const { data } = usePonderQuery({
		queryFn: (db) => db.select().from(schema.dino),
	});

	return (
		<Container>
			<Box className="grid grid-cols-12">
				<StatsItem title="Dino" className="grid-cols-3">
					{data?.map((item) => (
						<Box key={item.dinoId}>{item.name}</Box>
					))}
				</StatsItem>
			</Box>
		</Container>
	);
};

export default StatsPage;
