import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H5 } from "@0xbuidlerhq/ui/system/base/typography";

const ShopDescription = () => {
	return (
		<Box className="p-2">
			<H5 className="text-muted-foreground tracking-[-1.25px]">
				<span className="text-brand">Welcome to the shop !</span> Here you can purchase essential
				items to support your dinosaur’s journey. From food and equipment to rare artifacts, the
				shop offers everything needed to grow stronger, survive longer, and prepare for the
				challenges ahead. <span className="text-brand">Spend your emeralds wisely.</span>
			</H5>
		</Box>
	);
};

export { ShopDescription };
