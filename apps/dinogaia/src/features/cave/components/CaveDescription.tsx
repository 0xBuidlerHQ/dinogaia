import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H5 } from "@0xbuidlerhq/ui/system/base/typography";

const ShopDescription = () => {
	return (
		<Box className="p-2">
			<H5 className="text-muted-foreground tracking-[-1.25px]">
				<span className="text-brand">
					Welcome to your cave, the home and safe haven of your dinosaur.
				</span>{" "}
				This is where you store your items, manage your resources, and keep your belongings
				protected from the outside world. Your cave represents your base of operations. A
				well-maintained cave helps keep your dinosaur safe, organized, and ready for whatever
				adventure, hunt, or battle comes next.
				<span className="text-brand">Guard it carefully, as everything you own rests here.</span>
			</H5>
		</Box>
	);
};

export { ShopDescription };
