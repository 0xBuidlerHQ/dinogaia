import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H4 } from "@0xbuidlerhq/ui/system/base/typography";
import { ShopDescription } from "@features/shop/components/ShopDescription";

const CaveHeader = () => {
	return (
		<Box className="flex flex-col gap-2">
			<Box className="w-full h-0.5 bg-muted" />

			<H4>CAVE</H4>

			<Box className="w-full h-0.5 bg-muted" />

			<ShopDescription />

			<Box className="w-full h-0.5 bg-muted" />
		</Box>
	);
};

export { CaveHeader };
