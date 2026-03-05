"use client";

import type { Job } from "@0xbuidlerhq/dinogaia.subgraph";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H4 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { JobItem } from "@features/jobs/JobItem";
import { useClaimSalary } from "@features/jobs/useJobs";
import { useDinogaia } from "@providers/dinogaia";

const MyJob = () => {
	const { currentDino } = useDinogaia();

	const { execute, sendCalls } = useClaimSalary();

	return (
		<Box>
			<H4>{currentDino.job?.name}</H4>

			<ButtonBase onClick={execute}>
				<H4>Claim Salary</H4>
			</ButtonBase>

			{sendCalls.isError ? "error" : ""}
		</Box>
	);
};

type JobViewProps = {
	jobs: Job[];
};
const JobView = (props: JobViewProps) => {
	return (
		<Box>
			<MyJob />
			<Box className="grid grid-cols-12 gap-2 p-2">
				{props.jobs?.map((job) => {
					return (
						<Box key={job.name} className="col-span-4">
							<JobItem job={job} />
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

export { JobView };
