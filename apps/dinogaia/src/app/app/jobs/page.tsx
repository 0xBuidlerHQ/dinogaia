"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { withAuth } from "@components/AuthComponent";
import { JobItem } from "@features/jobs/JobItem";
import { useDinogaia } from "@providers/dinogaia";

const Page = () => {
	const { jobs } = useDinogaia();

	return (
		<Box className="grid grid-cols-12 gap-2 p-2">
			{jobs?.map((job) => {
				return (
					<Box key={job.name} className="col-span-4">
						<JobItem job={job} />
					</Box>
				);
			})}
		</Box>
	);
};

export default withAuth(Page);
