"use client";

import type { Item } from "@0xbuidlerhq/dinogaia.subgraph";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H4, H5, H7 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { useBuyItem } from "@features/shop/useShop";
import { images } from "../../assets/assets";
import { EthereumLogo } from "../../assets/emerald";
import { ItemEffectKindNameByEnumId } from "../../utils";

type Props = {
	item: Item;
};

const ItemImage = (props: Props) => {
	const { item } = props;

	const image = images[item.name];

	return (
		<Box className="h-full w-full">
			<img src={image} alt={item.name} className="block h-full w-full object-contain" />
		</Box>
	);
};

const BuyShopItemButton = (props: Props) => {
	const { execute } = useBuyItem(props);

	return (
		<ButtonBase className="bg-accent/50 rounded px-2" onClick={execute}>
			<H5>Buy</H5>
		</ButtonBase>
	);
};

const ShopItem = (props: Props) => {
	const { item } = props;

	return (
		<Box key={item.name} className="border border-muted">
			<Box className="aspect-square h-full w-full">
				<Box className="flex flex-col h-full">
					<Box className="flex justify-between border-muted border-b p-1 bg-accent/25">
						<Box>
							<H5 className="capitalize text-white">{item.name}</H5>
						</Box>

						<BuyShopItemButton item={item} />
					</Box>

					<Box className="grow relative min-h-0">
						<Box className="h-full w-full">
							<ItemImage item={item} />
						</Box>
					</Box>

					<Box className="flex justify-between p-1">
						<Box className="-space-y-2">
							{item.effects.map((item) => {
								return (
									<Box key={item.kind} className="flex gap-1 text-muted-foreground p-1">
										<H7 className="">{ItemEffectKindNameByEnumId[item.kind]}:</H7>
										<H7 className="">{item.magnitude}</H7>
									</Box>
								);
							})}
						</Box>

						<Box className="flex items-end">
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
