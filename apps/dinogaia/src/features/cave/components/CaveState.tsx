import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H4 } from "@0xbuidlerhq/ui/system/base/typography";
import { useCaveState } from "@features/cave/hooks/useCaveState";

const CaveState = () => {
	const { caveState } = useCaveState();

	return (
		<Box className="p-2">
			<Box className="flex flex-col gap-1">
				<H4>Cleanliness: {caveState?.cleanliness}</H4>
				<H4>Comfort: {caveState?.comfort}</H4>
				<H4>Hygiene: {caveState?.hygiene}</H4>
				<H4>Security: {caveState?.security}</H4>
			</Box>
		</Box>
	);
};

export { CaveState };
