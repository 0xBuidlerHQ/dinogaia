"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Container } from "@0xbuidlerhq/ui/system/base/container";
import { H1, H1_7, H4, H5, H6 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { withAuth } from "@components/AuthComponent";
import ProgressBar from "@components/ProgressBar";
import { useDinogaia } from "@providers/dinogaia";
import {
	IconBow,
	IconBuildingStore,
	IconCampfire,
	IconFountain,
	IconMeat,
	IconShare,
} from "@tabler/icons-react";
import type React from "react";
import type { PropsWithChildren } from "react";
import { type DinoAge, timestampToAge } from "../../utils";

type DinoStatsProps = {
	name: string;
	age: DinoAge;
	species: string;
	vitals: {
		life: number;
		lifeMax: number;
		magic: number;
		magicMax: number;
	};

	state: {
		alive: boolean;
		hunger: boolean;
		thirsty: boolean;
		sick: boolean;
	};

	characteristics: {
		force: number;
		endurance: number;
		agility: number;
		intelligence: number;
	};
};

type StatItemProps = PropsWithChildren & {
	title: string;
	addon?: React.ReactElement;
};
const StatItem = (props: StatItemProps) => {
	return (
		<Box className="h-full flex flex-col gap-4 p-4 group hover:bg-olive-600/50 border border-transparent hover:border hover:border-[#a3e635]/25">
			<Box className="flex items-center gap-1 text-muted-foreground">
				<H6 className="mr-0.5 group-hover:mr-px transition-all duration-300 tracking-[-2px] group-hover:text-[#a3e635]">
					{"//"}
				</H6>

				<H6 className="uppercase font-black transition-all duration-300 group-hover:text-[#a3e635] tracking-tighter">
					{props.title}
				</H6>

				<Box className="grow" />

				{props.addon}
			</Box>

			<Box>{props.children}</Box>
		</Box>
	);
};

type QuickActionProps = {
	label: string;
	icon: React.ReactElement;
};
const QuickAction = (props: QuickActionProps) => {
	return (
		<ButtonBase>
			<Box className="h-8 px-2 border-accent border flex gap-2 items-center justify-center rounded-xs bg-muted hover:bg-accent/50">
				<H6 className="uppercase font-montserrat tracking-tighter font-bold">{props.label}</H6>

				{props.icon}
			</Box>
		</ButtonBase>
	);
};

const DinoStats = (props: DinoStatsProps) => {
	return (
		<Box className="grid grid-cols-12 items-stretch *:border-l *:border-muted *:border-b border-t border-muted">
			<Box className="col-span-6">
				<StatItem title="Name">
					<H1 className="text-[#a3e635]">{props.name}</H1>
				</StatItem>
			</Box>

			<Box className="col-span-6">
				<StatItem title="Age">
					<H1>
						{props.age.days}d/{props.age.hours}h/{props.age.minutes}m
					</H1>
				</StatItem>
			</Box>

			<Box className="col-span-6">
				<StatItem
					title="Job"
					addon={
						<Box className="text-[#a3e635] tracking-tighter">
							<H6>100 Emerald /day</H6>
						</Box>
					}
				>
					<H1>Umemployed</H1>
				</StatItem>
			</Box>

			<Box className="col-span-6">
				<StatItem title="Species">
					<H1>{props.species}</H1>
				</StatItem>
			</Box>

			{/* <Box className="col-span-12">
				<StatItem title="Vitals">
					<Box className="flex flex-col gap-2">
						
					</Box>
				</StatItem>
			</Box> */}

			<Box className="col-span-12">
				<StatItem title="Quick Actions">
					<Box className="flex flex-wrap gap-2">
						<QuickAction label="Eat" icon={<IconMeat className="size-4" />} />
						<QuickAction label="Drink" icon={<IconFountain className="size-4" />} />
						<QuickAction label="Hunt" icon={<IconBow className="size-4" />} />
						<QuickAction label="Job" icon={<IconBuildingStore className="size-4" />} />
						<QuickAction label="Camp" icon={<IconCampfire className="size-4" />} />
					</Box>
				</StatItem>
			</Box>

			<Box className="col-span-12">
				<StatItem title="Status">
					<Box className="flex gap-2 *:bg-accent">
						<Box>{props.state.hunger ? "Your Dino is hungry" : "Your dino is full"}</Box>
						<Box>{props.state.thirsty ? "Your Dino is thirsty" : "Your dino is ok"}</Box>
						<Box>{props.state.sick ? "Your dino is sick" : "Your dino is ok"}</Box>{" "}
					</Box>
				</StatItem>
			</Box>

			<Box className="col-span-12">
				<StatItem title="Characteristics">
					<Box className="flex flex-col gap-2">
						<ProgressBar
							value={props.vitals.life}
							max={props.vitals.lifeMax}
							label="Life"
							colors={{
								track: "#11182766",
								fill: "linear-gradient(90deg, #16a34a 0%, #16a34a 50%, #16a34a 100%)",
							}}
						/>

						<ProgressBar
							value={props.vitals.magic}
							max={props.vitals.magicMax}
							label="Magic"
							colors={{
								track: "#11182766",
								fill: "linear-gradient(90deg, #3b82f6 0%, #3b82f6 50%, #3b82f6 100%)",
							}}
						/>

						<Box className="h-[1px] bg-muted my-4" />

						<ProgressBar
							value={props.characteristics.force}
							max={100}
							label="Force"
							colors={{
								track: "#11182766",
								fill: "linear-gradient(90deg, #f97316 0%, #f97316 50%, #f97316 100%)",
							}}
						/>

						<ProgressBar
							value={props.characteristics.endurance}
							max={100}
							label="Endurance"
							colors={{
								track: "#11182766",
								fill: "linear-gradient(90deg, #f97316 0%, #f97316 50%, #f97316 100%)",
							}}
						/>

						<ProgressBar
							value={props.characteristics.agility}
							max={100}
							label="Agility"
							colors={{
								track: "#11182766",
								fill: "linear-gradient(90deg, #f97316 0%, #f97316 50%, #f97316 100%)",
							}}
						/>

						<ProgressBar
							value={props.characteristics.intelligence}
							max={100}
							label="Intelligence"
							colors={{
								track: "#11182766",
								fill: "linear-gradient(90deg, #f97316 0%, #f97316 50%, #f97316 100%)",
							}}
						/>

						<Box className="h-[1px] bg-muted my-4" />

						<ProgressBar
							value={props.characteristics.intelligence}
							max={100}
							label="XP"
							colors={{
								track: "#11182766",
								fill: "linear-gradient(90deg, #a855f7 0%, #a855f7 50%, #a855f7 100%)",
							}}
						/>
					</Box>
				</StatItem>
			</Box>
		</Box>
	);
};

type InfoProps = {
	label: string;
	value: string;
};
const Info = (props: InfoProps) => {
	return (
		<Box className="flex gap-2 items-center">
			<H5 className="font-montserrat text-muted-foreground font-medium">{props.label}:</H5>
			<H5 className="font-mono">{props.value}</H5>
		</Box>
	);
};

const DinoScene = () => {
	return (
		<Box className="border-y border-muted h-full relative">
			<Box className="absolute top-0 right-0">
				<StatItem title="Level">
					<H1_7>1</H1_7>
				</StatItem>
			</Box>

			<Box className="absolute top-0 left-0">
				<StatItem
					title="Informations"
					addon={
						<ButtonBase>
							<Box className="bg-muted px-2 flex items-center gap-2">
								<IconShare className="size-4" />
								<H4 className="font-syne">Share</H4>
							</Box>
						</ButtonBase>
					}
				>
					<Box className="flex flex-col -space-y-0.5">
						<Info label="Name" value="Maxime" />
						<Info label="Clan" value="The Great Counsel" />
						<Info label="Born" value="Sun, Aug 21, 2004 at 04:56" />
						<Info label="Age" value="2000 days, 4 hours, 34 min" />
						<Info label="Weight" value="129Kg" />
						<Info label="Height" value="4m11" />
						<Info label="Points" value="233444" />
					</Box>
				</StatItem>
			</Box>
		</Box>
	);
};

const Page = () => {
	const { currentDino } = useDinogaia();

	return (
		<Container className="">
			<Box className="border-x border-muted">
				<Box className="grid grid-cols-12">
					<Box className="col-span-6">
						<DinoScene />
					</Box>

					<Box className="col-span-6">
						<DinoStats
							name={currentDino?.data?.genesis.name!}
							age={timestampToAge(currentDino?.data?.genesis.birthTimestamp ?? 0n)}
							species={currentDino?.data?.genesis.speciesId!}
							vitals={{
								life: Number(currentDino?.data?.stats.health ?? 0n),
								lifeMax: 100,
								magic: 100,
								magicMax: 100,
							}}
							state={{
								hunger: currentDino?.data?.status.hunger!,
								thirsty: currentDino?.data?.status.thirst!,
								sick: currentDino?.data?.status.alive!,
								alive: currentDino?.data?.status.alive!,
							}}
							characteristics={{
								force: currentDino?.data?.stats.force!,
								endurance: currentDino?.data?.stats.endurance!,
								agility: currentDino?.data?.stats.agility!,
								intelligence: currentDino?.data?.stats.intelligence!,
							}}
						/>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default withAuth(Page);
