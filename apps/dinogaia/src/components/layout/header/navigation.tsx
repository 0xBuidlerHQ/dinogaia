import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H5 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { PAGES } from "@config/pages";

const Navigation = () => {
	return (
		<Box className="flex gap-2">
			<ButtonBase href={PAGES.homepage}>
				<H5>Home</H5>
			</ButtonBase>

			<ButtonBase href={PAGES.cave}>
				<H5>Cave</H5>
			</ButtonBase>

			<ButtonBase href={PAGES.shop}>
				<H5>Shop</H5>
			</ButtonBase>
		</Box>
	);
};

export { Navigation };
