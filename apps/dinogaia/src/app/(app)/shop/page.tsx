"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Container } from "@0xbuidlerhq/ui/system/base/container";
import { ShopItem } from "@features/shop/ShopItem";
import { useShop } from "@features/shop/useShop";

const Page = () => {
	const { items } = useShop();

	return (
		<Container>
			<Box className="grid grid-cols-6 gap-2">
				{items.data?.map((item) => {
					return (
						<Box key={item.metadata.name} className="col-span-1">
							<ShopItem item={item} />
						</Box>
					);
				})}
			</Box>
		</Container>
	);
};

export default Page;
