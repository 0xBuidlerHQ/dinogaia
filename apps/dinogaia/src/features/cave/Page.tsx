import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { CaveHeader } from "@features/cave/components/CaveHeader";
import { CaveItems } from "@features/cave/components/CaveItems";

const CavePage = () => {
	return (
		<Box>
			<CaveHeader />

			{/* <CaveState /> */}
			<CaveItems />
		</Box>
	);
};

export { CavePage };
