"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Container } from "@0xbuidlerhq/ui/system/base/container";
import { JobItem } from "@features/jobs/JobItem";
import { useJobs } from "@features/jobs/useJobs";

const Page = () => {
	const { jobs } = useJobs();

	return (
		<Container>
			<Box className="grid grid-cols-12 gap-2">
				{jobs.data?.map((job) => {
					return (
						<Box key={job.name} className="col-span-3">
							<JobItem job={job} />
						</Box>
					);
				})}
			</Box>
		</Container>
	);
};

export default Page;
