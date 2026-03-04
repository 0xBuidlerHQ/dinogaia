"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { withAuth } from "@components/AuthComponent";
import { MintModal } from "@features/dinos/mint/MintModal";

const Page = () => {
	return (
		<Box>
			<MintModal />
		</Box>
	);
};

export default withAuth(Page);
