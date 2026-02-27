"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Container } from "@0xbuidlerhq/ui/system/base/container";
import { AuthComponent } from "@components/AuthComponent";
import { ShopItem } from "@features/shop/ShopItem";
import { useShop } from "@features/shop/useShop";

const Page = () => {
	const { items } = useShop();

	return (
		<AuthComponent>
			<Container>
				<Box className="grid grid-cols-12 gap-2">
					{items.data?.map((item) => {
						if (!item.trading.sellable) return;

						return (
							<Box key={item.metadata.name} className="col-span-2">
								<ShopItem item={item} />
							</Box>
						);
					})}
				</Box>
			</Container>
		</AuthComponent>
	);
};

export default Page;
