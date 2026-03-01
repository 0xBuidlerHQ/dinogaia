"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H4 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { MintModal } from "@features/dinos/mint/MintModal";
import { useStore } from "@stores/useStore";

const MintButton = () => {
	const { openMintModal } = useStore();

	return (
		<Box className="bg-muted/50 px-2 py-px border border-muted rounded">
			<ButtonBase onClick={openMintModal}>
				<H4>New</H4>
			</ButtonBase>

			<MintModal />
		</Box>
	);
};

export { MintButton };
