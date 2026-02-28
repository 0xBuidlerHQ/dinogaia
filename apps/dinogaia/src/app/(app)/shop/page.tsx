"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Container } from "@0xbuidlerhq/ui/system/base/container";
import { withAuth } from "@components/AuthComponent";
import { ShopItem } from "@features/shop/ShopItem";
import { useShop } from "@features/shop/useShop";

const Page = () => {
	const { items } = useShop();

	return (
		<Container>
			<Box className="grid grid-cols-12 gap-2">
				{items.data?.map((item) => {
					if (!item.trading.sellable) return;

					return (
						<Box key={item.name} className="col-span-2">
							<ShopItem item={item} />
						</Box>
					);
				})}
			</Box>
		</Container>
	);
};

export default withAuth(Page);
