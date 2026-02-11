import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H5 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { Header as HeaderPrimitive } from "@0xbuidlerhq/ui/system/layouts/header";
import { PAGES } from "@config/pages";

/**
 * @dev Constants.
 */
const NAVIGATION_HEIGHT = "h-[40px]";

const pages = [
	{
		title: "My Dino",
		href: PAGES.homepage,
	},
	{
		title: "Cave",
		href: PAGES.cave,
	},
	{
		title: "Shop",
		href: PAGES.shop,
	},
	{
		title: "Jobs",
		href: PAGES.jobs,
	},
];

const Navigation = () => {
	return (
		<HeaderPrimitive>
			<Box className={cn("flex border-x border-muted items-center", NAVIGATION_HEIGHT)}>
				{pages.map((item) => {
					return (
						<Box key={item.href} className="border-r border-muted h-full flex items-center px-4">
							<ButtonBase href={item.href}>
								<H5>{item.title}</H5>
							</ButtonBase>
						</Box>
					);
				})}
			</Box>
		</HeaderPrimitive>
	);
};

export { Navigation };
