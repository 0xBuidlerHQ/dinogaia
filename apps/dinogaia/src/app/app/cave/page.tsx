"use client";

import { withAuth } from "@components/AuthComponent";
import { CavePage } from "@features/cave/Page";

const Page = () => {
	return <CavePage />;
};

export default withAuth(Page);
