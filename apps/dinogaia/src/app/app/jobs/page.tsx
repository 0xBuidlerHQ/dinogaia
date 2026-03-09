"use client";

import { withAuth } from "@components/AuthComponent";
import { JobsPage } from "@features/jobs/Page";

const Page = () => {
	return <JobsPage />;
};

export default withAuth(Page);
