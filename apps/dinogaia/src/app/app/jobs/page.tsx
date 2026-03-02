"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { withAuth } from "@components/AuthComponent";
import { JobItem } from "@features/jobs/JobItem";
import { useJobs } from "@features/jobs/useJobs";

const Page = () => {
	const { jobs } = useJobs();

	return (
		<Box className="grid grid-cols-12 gap-2">
			{jobs.data?.map((job) => {
				return (
					<Box key={job.name} className="col-span-3">
						<JobItem job={job} />
					</Box>
				);
			})}
		</Box>
	);
};

export default withAuth(Page);
