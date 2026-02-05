"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H4 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { MintModal } from "@features/dinos/mint/MintModal";
import { useStore } from "@stores/useStore";

const MintButton = () => {
	const { openMintModal } = useStore();

	return (
		<Box>
			<ButtonBase onClick={openMintModal}>
				<H4>Create +</H4>
			</ButtonBase>

			<MintModal />
		</Box>
	);
};

export { MintButton };
