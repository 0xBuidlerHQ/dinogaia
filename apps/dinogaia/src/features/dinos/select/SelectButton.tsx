"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H4 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { SelectModal } from "@features/dinos/select/SelectModal";
import { useStore } from "@stores/useStore";

const SelectButton = () => {
	const { openSelectModal } = useStore();

	return (
		<Box className="bg-muted/50 px-2 py-[1px] border border-muted rounded">
			<ButtonBase onClick={openSelectModal}>
				<H4>Select</H4>
			</ButtonBase>

			<SelectModal />
		</Box>
	);
};

export { SelectButton };
