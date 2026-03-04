"use client";

import type { ItemsSet } from "@0xbuidlerhq/dinogaia.contracts/types.user";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H4, H5, H7 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { images } from "../../assets/assets";
import { EthereumLogo } from "../../assets/emerald";
import { ItemEffectKindNameByEnumId } from "../../utils";

type Props = {
	item: ItemsSet.Item;
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

const ShopItem = (props: Props) => {
	const { item } = props;

	return (
		<Box key={item.name} className="border border-muted">
			<Box className="aspect-square h-full w-full">
				<Box className="flex flex-col h-full">
					<Box className="flex justify-between border-muted border-b p-1 bg-muted/25">
						<Box>
							<H5 className="capitalize text-white">{item.name}</H5>
						</Box>

						<ButtonBase className="bg-muted rounded px-2">
							<H5>Buy</H5>
						</ButtonBase>
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

// {/* <Box className="h-20 border-t border-muted p-2 flex flex-col gap-2">
// 						{/* <Box className="flex gap-1">
// 							<ItemRarity item={item} />
// 							<ItemType item={item} />
// 						</Box> */}

// 						<Box className="flex">
// 							<Box className="grow flex flex-col">
// 								<H4 className="font-source-code-pro tracking-tighter">{item.name}</H4>
// 							</Box>

//
// 						</Box>
// 					</Box> */}
