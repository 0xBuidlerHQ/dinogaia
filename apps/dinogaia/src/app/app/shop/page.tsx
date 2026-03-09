"use client";

import { withAuth } from "@components/AuthComponent";
import { ShopPage } from "@features/shop/Page";

const Page = () => {
	return <ShopPage />;
};

export default withAuth(Page);
