import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { ShopHeader } from "@features/shop/components/ShopHeader";
import { ShopView } from "@features/shop/components/ShopView";
import { useShopItems } from "@features/shop/hooks/useShopItems";

const ShopPage = () => {
	const { itemsByItemType } = useShopItems();

	return (
		<Box>
			<ShopHeader />

			<ShopView itemsByItemType={itemsByItemType} />
		</Box>
	);
};

export { ShopPage };
