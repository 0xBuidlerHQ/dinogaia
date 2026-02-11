"use client";

import type { ItemsSetBase } from "@0xbuidlerhq/dinogaia.contracts/types.user";
import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H3, H4, H7 } from "@0xbuidlerhq/ui/system/base/typography";
import { images, items, rarities } from "../../assets/assets";
import { EthereumLogo } from "../../assets/emerald";

type Props = {
	item: ItemsSetBase.ItemBase;
};

const ItemType = (props: Props) => {
	const { item } = props;

	const itemType = items[item.itemType];

	return (
		<Box
			className={cn(itemType.backgroundColor, itemType.borderColor, "border px-1 py-[1px] w-fit ")}
		>
			<H7 className={itemType.color}>{itemType?.name}</H7>
		</Box>
	);
};

const ItemRarity = (props: Props) => {
	const { item } = props;

	const itemRarity = rarities[item.rarity];

	return (
		<Box
			className={cn(
				itemRarity.backgroundColor,
				itemRarity.borderColor,
				"border px-1 py-[1px] w-fit ",
			)}
		>
			<H7 className={itemRarity.color}>{itemRarity?.name}</H7>
		</Box>
	);
};

const ItemImage = (props: Props) => {
	const { item } = props;

	const image = images[item.metadata.name];

	return (
		<Box className="h-full w-full">
			<img src={image} alt={item.metadata.name} className="block h-full w-full object-contain" />
		</Box>
	);
};

const ShopItem = (props: Props) => {
	const { item } = props;

	return (
		<Box key={item.metadata.name} className="border border-muted">
			<Box className="aspect-square h-full w-full">
				<Box className="flex flex-col h-full">
					<Box className="grow relative min-h-0">
						<Box className="h-full w-full">
							<ItemImage item={item} />
						</Box>
					</Box>

					<Box className="h-20 border-t border-muted p-2 flex flex-col gap-2">
						<Box className="flex gap-1">
							<ItemRarity item={item} />
							<ItemType item={item} />
						</Box>

						<Box className="flex">
							<Box className="grow flex flex-col">
								<H3 className="font-source-code-pro tracking-tighter">{item.metadata.name}</H3>
							</Box>

							<Box className="flex gap-2 items-center">
								<H4>{item.trading.price}</H4>
								<EthereumLogo className="size-4" />
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export { ShopItem };
