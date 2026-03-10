import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { useCaveItems } from "@features/cave/hooks/useCaveItems";

const CaveItems = () => {
	const { items } = useCaveItems();

	return (
		<Box>
			{items.map((item) => {
				return (
					<Box>
						{item.name}: {item.balance}
					</Box>
				);
			})}
		</Box>
	);
};

export { CaveItems };
