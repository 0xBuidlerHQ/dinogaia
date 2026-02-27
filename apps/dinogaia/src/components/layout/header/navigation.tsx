"use client";

import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H5 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { Header as HeaderPrimitive } from "@0xbuidlerhq/ui/system/layouts/header";
import { PAGES } from "@config/pages";
import { MintButton } from "@features/dinos/mint/MintButton";
import { SelectButton } from "@features/dinos/select/SelectButton";
import { usePathname } from "next/navigation";
import { navigation } from "../../../assets/assets";

/**
 * @dev Constants.
 */
const NAVIGATION_HEIGHT = "h-[40px]";

const pages = [
	{
		title: "My Dino",
		href: PAGES.myDino,
		icon: navigation.dino,
	},
	{
		title: "Cave",
		href: PAGES.cave,
		icon: navigation.cave,
	},
	{
		title: "Shop",
		href: PAGES.shop,
		icon: navigation.shop,
	},
	{
		title: "Jobs",
		href: PAGES.jobs,
		icon: navigation.jobs,
	},
	{
		title: "Hunt",
		href: PAGES.hunt,
		icon: navigation.hunt,
	},
	{
		title: "Fight",
		href: PAGES.fight,
		icon: navigation.fight,
	},
	{
		title: "Quests",
		href: PAGES.quests,
		icon: navigation.quest,
	},
	{
		title: "Casino",
		href: PAGES.casino,
		icon: navigation.casino,
	},
	{
		title: "Ranking",
		href: PAGES.ranking,
		icon: navigation.ranking,
	},
];

/**
 * @dev Navigation component.
 */
const Navigation = () => {
	const path = usePathname();

	return (
		<HeaderPrimitive>
			<Box className={cn("flex justify-between border-x border-muted", NAVIGATION_HEIGHT)}>
				<Box className="flex">
					{pages.map((item) => {
						const isCurrentPage = item.href === "/" ? path === "/" : path.includes(item.href);

						return (
							<ButtonBase
								key={item.href}
								href={item.href}
								className={cn(
									"group h-full flex border-r border-muted hover:bg-[#a3e635]/2 px-2 gap-2 items-center border-b border-b-transparent transition-all",
									isCurrentPage && "border-b-[#a3e635] bg-[#a3e635]/5 hover:bg-[#a3e635]/5",
								)}
							>
								<Box className="h-full flex items-center">
									<H5
										className={cn(
											"font-tronica-mono group-hover:font-black group-hover:text-[#a3e635] transition-all whitespace-nowrap",
											isCurrentPage && "text-[#a3e635] font-black",
										)}
									>
										{item.title}
									</H5>
								</Box>

								<img
									src={item.icon}
									alt=""
									className={cn(
										"aspect-square size-full grayscale-50 transition-all group-hover:grayscale-25",
										isCurrentPage && "grayscale-0",
									)}
								/>
							</ButtonBase>
						);
					})}
				</Box>

				<Box className="flex items-center">
					<MintButton />
					<SelectButton />
				</Box>
			</Box>
		</HeaderPrimitive>
	);
};

export { Navigation };
