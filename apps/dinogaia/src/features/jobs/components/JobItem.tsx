"use client";

import type { SubgraphTypes } from "@0xbuidlerhq/dinogaia.subgraph";
import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H4, H5, H6 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonDefault } from "@components/buttons/buttonDefault";
import { jobImages } from "../../../assets/assets";
import { EthereumLogo } from "../../../assets/emerald";

type Props = {
	job: SubgraphTypes.Job;
	dino: {
		currentJob: SubgraphTypes.Job;
		level: bigint;
		balance: bigint;
	};
};

const JobImage = (props: Props) => {
	const { job } = props;

	const image = jobImages[job.name];

	return (
		<Box className="h-full w-full">
			<img src={image} alt={job.name} className="block h-full w-full object-contain" />
		</Box>
	);
};

const JobItem = (props: Props) => {
	const { job } = props;

	const hasRequiredLevel = props.dino.level >= BigInt(job.requiredLevel);
	const hasEnoughEmerald = props.dino.balance >= job.trainingCost;

	return (
		<Box
			key={job.name}
			className={cn("border border-muted", !hasRequiredLevel && "opacity-25 pointer-events-none")}
		>
			<Box className="flex flex-col h-full">
				<Box className="grid grid-cols-12">
					<Box className="col-span-8 p-4 bg-background flex flex-col gap-4">
						<Box className="flex justify-between">
							<Box className="flex flex-col gap-0">
								<H4 className="uppercase text-brand font-black">{job.name}</H4>
							</Box>

							<Box>
								<Box className="flex gap-1 items-center bg-brand/5 text-brand border border-brand/15 px-2">
									<Box className="flex items-center">
										<H5 className="leading-0 mt-0.5">{job.dailyPay}</H5>
										<EthereumLogo className="size-4" />
									</Box>

									<H5 className="">per day</H5>
								</Box>
							</Box>
						</Box>

						<Box className="flex flex-col justify-between h-full">
							<H5 className="text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							</H5>

							<Box className="flex flex-col gap-2">
								<Box>
									<H6 className="text-muted-foreground rounded">
										Required Level: {job.requiredLevel}
									</H6>
								</Box>

								<Box className="flex">
									<ButtonDefault disabled={!hasEnoughEmerald}>
										<Box className="flex gap-2 items-center">
											<H5>Enroll</H5>

											<Box className="flex items-center gap-0.5">
												<H5 className="leading-0">{job.trainingCost}</H5>
												<EthereumLogo className="size-4 mb-0.5" />
											</Box>
										</Box>
									</ButtonDefault>
								</Box>
							</Box>
						</Box>
					</Box>

					<Box className="col-span-4 p-2">
						<JobImage {...props} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export { JobItem };
