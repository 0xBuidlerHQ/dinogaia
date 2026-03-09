import { Separator } from "@0xbuidlerhq/ui/shadcn/components/separator";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { ShopItemTypeGroup } from "@features/shop/components/ShopItemTypeGroup";
import type { useShopItems } from "@features/shop/hooks/useShopItems";
import { Fragment, useMemo } from "react";
import { ItemTypeNameByEnumId } from "../../../utils";

type ShopViewProps = {
	itemsByItemType: ReturnType<typeof useShopItems>["itemsByItemType"];
};
const ShopView = (props: ShopViewProps) => {
	const shopGroups = useMemo(() => {
		return Object.entries(props.itemsByItemType).map(([key, items]) => ({
			key,
			label: ItemTypeNameByEnumId[Number(key)] ?? key,
			items,
		}));
	}, [props.itemsByItemType]);

	const lastGroupIndex = shopGroups.length - 1;

	return (
		<Box className="flex flex-col gap-4 p-2">
			{shopGroups.map((group, index) => {
				const isLastGroup = index === lastGroupIndex;

				return (
					<Fragment key={group.key}>
						<ShopItemTypeGroup itemTypeLabel={group.label} items={group.items} />

						{!isLastGroup && <Separator className="self-stretch" />}
					</Fragment>
				);
			})}
		</Box>
	);
};

export { ShopView };
