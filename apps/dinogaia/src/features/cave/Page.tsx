import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { CaveHeader } from "@features/cave/components/CaveHeader";
import { CaveState } from "@features/cave/components/CaveState";

const CavePage = () => {
	return (
		<Box>
			<CaveHeader />

			<CaveState />
		</Box>
	);
};

export { CavePage };
