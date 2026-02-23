"use client";

import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H5 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { Header as HeaderPrimitive } from "@0xbuidlerhq/ui/system/layouts/header";
import { PAGES } from "@config/pages";
import { usePathname } from "next/navigation";

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
	{
		title: "Hunt",
		href: PAGES.hunt,
	},
	{
		title: "Casino",
		href: PAGES.casino,
	},
	{
		title: "Stats",
		href: PAGES.stats,
	},
];

/**
 * @dev Navigation component.
 */
const Navigation = () => {
	const path = usePathname();

	return (
		<HeaderPrimitive>
			<Box className={cn("flex border-x border-muted", NAVIGATION_HEIGHT)}>
				{pages.map((item) => {
					const isCurrentPage = item.href === "/" ? path === "/" : path.includes(item.href);

					return (
						<ButtonBase key={item.href} href={item.href} className="group h-full">
							<Box className="border-r border-muted h-full flex items-center px-4">
								<H5
									className={cn(
										"font-tronica-mono group-hover:font-black group-hover:text-[#a3e635] transition-all",
										isCurrentPage && "text-[#a3e635] font-black",
									)}
								>
									{item.title}
								</H5>
							</Box>
						</ButtonBase>
					);
				})}
			</Box>
		</HeaderPrimitive>
	);
};

export { Navigation };
