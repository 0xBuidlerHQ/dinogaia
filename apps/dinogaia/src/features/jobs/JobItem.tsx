"use client";

import type { JobsRegistry } from "@0xbuidlerhq/dinogaia.contracts/types.user";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H3, H4 } from "@0xbuidlerhq/ui/system/base/typography";
import { EthereumLogo } from "../../assets/emerald";

type Props = {
	job: JobsRegistry.Job;
};

const JobItem = (props: Props) => {
	const { job } = props;

	return (
		<Box key={job.name} className="border border-muted">
			<Box className="aspect-square h-full w-full">
				<Box className="flex flex-col h-full">
					<Box className="grow relative min-h-0">
						<Box className="absolute top-0 left-0 p-2">
							<H4>Daily pay: {job.dailyPay}</H4>
						</Box>

						<Box className="absolute top-0 right-0 p-2">
							<H4>Requiered Level: {job.requiredLevel}</H4>
						</Box>

						<Box className="h-full w-full">{/* <ItemImage item={item} /> */}</Box>
					</Box>

					<Box className="h-20 border-t border-muted p-2 flex flex-col gap-2">
						<Box className="flex">
							<Box className="grow flex flex-col">
								<H3 className="font-source-code-pro tracking-tighter">{job.name}</H3>
							</Box>

							<Box className="flex gap-2 items-center">
								<H4>{job.dailyPay}</H4>
								<EthereumLogo className="size-4" />
							</Box>
						</Box>

						<Box className="flex gap-1">
							<Box className="flex flex-col">
								<H4>Training Cost: {job.trainingCost}</H4>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export { JobItem };
