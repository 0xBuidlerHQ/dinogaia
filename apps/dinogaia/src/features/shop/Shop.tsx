import type { Item, ItemType } from "@0xbuidlerhq/dinogaia.subgraph";
import { Separator } from "@0xbuidlerhq/ui/shadcn/components/separator";
import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H1_0, H1_2 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { Collapsible } from "@components/layout/Collapsible";
import { ShopItem } from "@features/shop/ShopItem";
import React, { Fragment } from "react";
import { ItemTypeNameByEnumId } from "../../utils";

type ShopItemTypeViewProps = {
	itemTypeLabel: string;
	items: Item[];
};
const ShopItemTypeView = (props: ShopItemTypeViewProps) => {
	const [open, setOpen] = React.useState(true);

	return (
		<Box className="p-2 flex flex-col gap-4">
			<Box className="flex justify-between items-center">
				<H1_0 className="font-black text-[#a3e635]">{props.itemTypeLabel}</H1_0>

				<ButtonBase onClick={() => setOpen(!open)}>
					<H1_2
						className={cn("text-[#a3e635] rotate-90 transition-all mr-1", open && "-rotate-45")}
					>
						{">"}
					</H1_2>
				</ButtonBase>
			</Box>

			<Collapsible open={open}>
				<Box className="grid grid-cols-12 gap-2">
					{props.items.map((item) => {
						return (
							<Box key={item.name} className="col-span-4">
								<ShopItem item={item} />
							</Box>
						);
					})}
				</Box>
			</Collapsible>
		</Box>
	);
};

type ShopViewProps = {
	items: Item[];
};
const ShopView = (props: ShopViewProps) => {
	const itemsByType = (() => {
		const itemsByType: Partial<Record<ItemType, Item[]>> = {};

		props.items.forEach((item) => {
			if (!itemsByType[item.itemType]) {
				itemsByType[item.itemType] = [];
			}

			itemsByType[item.itemType]!.push(item);
		});

		return itemsByType;
	})();

	const itemTypeEntries = Object.entries(itemsByType);

	return (
		<Box className="flex flex-col gap-4">
			{itemTypeEntries.map(([key, value], index) => {
				const isLastItem = index === itemTypeEntries.length - 1;

				return (
					<Fragment key={key}>
						<ShopItemTypeView itemTypeLabel={ItemTypeNameByEnumId[Number(key)]} items={value} />

						{!isLastItem && <Separator className="self-stretch" />}
					</Fragment>
				);
			})}
		</Box>
	);
};

export { ShopView };
