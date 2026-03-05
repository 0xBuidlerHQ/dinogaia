"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { withAuth } from "@components/AuthComponent";
import { JobView } from "@features/jobs/Job";
import { useDinogaia } from "@providers/dinogaia";

const Page = () => {
	const { jobs } = useDinogaia();

	return (
		<Box>
			<JobView jobs={jobs} />
		</Box>
	);
};

export default withAuth(Page);
