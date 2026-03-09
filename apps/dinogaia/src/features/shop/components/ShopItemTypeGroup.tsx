import type { SubgraphTypes } from "@0xbuidlerhq/dinogaia.subgraph";
import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H1_0, H1_2 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { Collapsible } from "@components/layout/Collapsible";
import { ShopItem } from "@features/shop/components/ShopItem";
import React from "react";

type ShopItemTypeGroupProps = {
	itemTypeLabel: string;
	items: SubgraphTypes.Item[];
};
const ShopItemTypeGroup = (props: ShopItemTypeGroupProps) => {
	const [open, setOpen] = React.useState(true);

	return (
		<Box className="flex flex-col gap-4">
			<Box className="flex justify-between items-center">
				<H1_0 className="font-black text-brand">{props.itemTypeLabel}</H1_0>

				<ButtonBase onClick={() => setOpen(!open)}>
					<H1_2 className={cn("text-brand rotate-90 transition-all mr-1", open && "-rotate-45")}>
						{">"}
					</H1_2>
				</ButtonBase>
			</Box>

			<Collapsible open={open}>
				<Box className="grid grid-cols-12 gap-2">
					{props.items.map((item) => (
						<Box key={item.name} className="col-span-4">
							<ShopItem item={item} />
						</Box>
					))}
				</Box>
			</Collapsible>
		</Box>
	);
};

export { ShopItemTypeGroup, type ShopItemTypeGroupProps };
