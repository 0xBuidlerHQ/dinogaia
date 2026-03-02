"use client";

import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H1, H4 } from "@0xbuidlerhq/ui/system/base/typography";
import { withAuth } from "@components/AuthComponent";
import { count } from "@ponder/client";
import { usePonderQuery } from "@ponder/react";
import { schema } from "@providers/ponder";
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
	const { data: countResult } = usePonderQuery({
		queryFn: (db) => db.select({ total: count() }).from(schema.dinos),
	});
	const alpha = countResult?.[0].total;

	const { data: dinos } = usePonderQuery({
		queryFn: (db) => db.select().from(schema.dinos),
	});

	return (
		<Box className="grid grid-cols-12">
			<StatsItem title="Players" className="col-span-3">
				<H1>{alpha}</H1>

				<Box className="flex flex-col gap-2">
					{dinos?.map((item) => {
						return (
							<Box key={item.dinoId} className="bg-muted/50 p-2 border border-muted rounded">
								<H4>Name: {item.name}</H4>
								<H4>Level: {item.level}</H4>
							</Box>
						);
					})}
				</Box>
			</StatsItem>
		</Box>
	);
};

export default withAuth(StatsPage);
