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
		title: "Dino",
		href: PAGES.app.homepage,
		icon: navigation.dino,
	},
	{
		title: "Cave",
		href: PAGES.app.cave,
		icon: navigation.cave,
	},
	{
		title: "Shop",
		href: PAGES.app.shop,
		icon: navigation.shop,
	},
	{
		title: "Jobs",
		href: PAGES.app.jobs,
		icon: navigation.jobs,
	},
	{
		title: "Hunt",
		href: PAGES.app.hunt,
		icon: navigation.hunt,
		disabled: true,
	},
	{
		title: "Fight",
		href: PAGES.app.fight,
		icon: navigation.fight,
		disabled: true,
	},
	{
		title: "Quests",
		href: PAGES.app.quests,
		icon: navigation.quest,
		disabled: true,
	},
	{
		title: "Casino",
		href: PAGES.app.casino,
		icon: navigation.casino,
		disabled: true,
	},
	{
		title: "Ranking",
		href: PAGES.app.ranking,
		icon: navigation.ranking,
		disabled: true,
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
						const isCurrentPage = item.href === "/app" ? path === "/app" : path.includes(item.href);

						return (
							<ButtonBase
								key={item.href}
								href={item.href}
								disabled={item.disabled}
								className={cn(
									"group h-full flex border-r border-muted hover:bg-brand/2 px-2 gap-2 items-center border-b border-b-transparent transition-all",
									isCurrentPage && "border-b-brand bg-brand/5 hover:bg-brand/5",
								)}
							>
								<Box className="h-full flex items-center">
									<H5
										className={cn(
											"font-tronica-mono group-hover:font-black group-hover:text-brand transition-all whitespace-nowrap",
											isCurrentPage && "text-brand font-black",
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
