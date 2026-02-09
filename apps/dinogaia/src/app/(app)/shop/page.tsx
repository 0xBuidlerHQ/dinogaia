"use client";

import { ItemsSetBase } from "@0xbuidlerhq/dinogaia.contracts/types.user";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Container } from "@0xbuidlerhq/ui/system/base/container";
import { H3, H4 } from "@0xbuidlerhq/ui/system/base/typography";
import { useShop } from "@features/shop/useShop";

const Page = () => {
	const { items } = useShop();

	return (
		<Container>
			<Box className="grid grid-cols-12 gap-2">
				{items.data?.map((item) => {
					return (
						<Box key={item.metadata.name} className="col-span-2 border border-muted">
							<Box className="aspect-square h-full w-full">
								<Box className="flex flex-col h-full">
									<Box className="grow">
										<Box>la</Box>
									</Box>

									<Box className="h-20 border-t border-muted p-2">
										<Box className="flex">
											<Box className="grow flex flex-col">
												<Box>
													{item.itemType === ItemsSetBase.ItemBaseType.Consumable
														? "Consumable"
														: "other"}
												</Box>
												<H3 className="font-source-code-pro tracking-tighter">
													{item.metadata.name}
												</H3>
											</Box>

											<Box>
												<H4>{item.trading.price}</H4>
											</Box>
										</Box>
									</Box>
								</Box>
							</Box>
						</Box>
					);
				})}
			</Box>
		</Container>
	);
};

export default Page;
