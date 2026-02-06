"use client";

import {
	caveModuleAbi,
	caveModuleAddress,
	emeraldErc20Abi,
	emeraldErc20Address,
	itemsSet0Abi,
	itemsSet0Address,
	jobsModuleAbi,
	jobsModuleAddress,
	shopModuleAbi,
	shopModuleAddress,
} from "@0xbuidlerhq/dinogaia.contracts";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Container } from "@0xbuidlerhq/ui/system/base/container";
import { H1, H1_8, H5, H6, H7 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import ProgressBar from "@components/ProgressBar";
import { useDinoActions } from "@features/dinos/hooks/useDinoActions";
import { type Dino, DinoFactory } from "@features/dinos/hooks/useDinoFactory";
import { JobsRegistry } from "@features/dinos/hooks/useDinoJobsRegistry";
import { EmeraldERC20 } from "@features/dinos/hooks/useEmeraldERC20";
import { jobsManager } from "@features/dinos/hooks/useJobsManager";
import { SpeciesRegistry } from "@features/dinos/hooks/useSpeciesRegistry";
import { useItems } from "@features/items/useItems";
import { useStore } from "@stores/useStore";
import {
	IconBow,
	IconBuildingStore,
	IconCampfire,
	IconFountain,
	IconMeat,
} from "@tabler/icons-react";
import type React from "react";
import type { PropsWithChildren } from "react";
import { encodeFunctionData } from "viem";
import { type DinoAge, timestampToAge } from "../../utils";

const ActiveDino = (props: Dino) => {
	const { dinoId, dinoAccount, dinoGenesis, dinoProfile } = props;

	const { sendTxsFromDinoAccount } = useDinoActions({ dinoAccount });
	const { jobOf } = jobsManager.useJob({ dinoId });

	const { job } = JobsRegistry.useJob({ jobId: jobOf.data! });
	const { balanceOf } = EmeraldERC20.useEmeraldERC20({ dinoAccount: dinoAccount });

	const { species } = SpeciesRegistry.useSpecies({ speciesId: dinoGenesis.speciesId });

	const e = useItems({ owner: dinoAccount });
	// const { cave, equipped } = useCave({ dinoId: BigInt(dinoId) });

	const a = timestampToAge(dinoGenesis.birthTimestamp);
	return (
		<Box className="border border-accent p-2">
			<Box className="flex flex-col gap-4">
				<Box className="flex justify-between items-center">
					<H5 className="font-bold">{dinoGenesis.name}</H5>

					<H6>{species.data?.name}</H6>
				</Box>

				<Box className="flex justify-between items-center">
					<H6 className="font-light">
						{a.days}d{a.hours}h{a.minutes}m
					</H6>

					<H6>{String(balanceOf.data)}</H6>
				</Box>

				<Box>
					<Box>Health: {String(dinoProfile.health)}</Box>
					<Box>Level: {String(dinoProfile.level)}</Box>
					<Box>Xp: {String(dinoProfile.xp)}</Box>
					<Box>Weight: {String(dinoProfile.weight)}</Box>
				</Box>

				<ButtonBase
					className="bg-white text-black"
					onClick={async () =>
						await sendTxsFromDinoAccount([
							{
								target: jobsModuleAddress["31337"],
								value: 0n,
								data: encodeFunctionData({
									abi: jobsModuleAbi,
									functionName: "claimSalary",
									args: [dinoId],
								}),
							},
						])
					}
				>
					<H5>Claim Salary</H5>
				</ButtonBase>

				<ButtonBase
					className="bg-white text-black"
					onClick={async () => {
						const chain = "31337";
						await sendTxsFromDinoAccount([
							{
								target: emeraldErc20Address[chain],
								value: 0n,
								data: encodeFunctionData({
									abi: emeraldErc20Abi,
									functionName: "approve",
									args: [shopModuleAddress[chain], 1n],
								}),
							},
							{
								target: shopModuleAddress[chain],
								value: 0n,
								data: encodeFunctionData({
									abi: shopModuleAbi,
									functionName: "buy",
									args: [dinoId, 0n, 1n],
								}),
							},
						]);
					}}
				>
					<H5>Buy From Shop</H5>
				</ButtonBase>

				<ButtonBase
					className="bg-white text-black"
					onClick={async () => {
						const chain = "31337";
						await sendTxsFromDinoAccount([
							{
								target: itemsSet0Address[chain],
								value: 0n,
								data: encodeFunctionData({
									abi: itemsSet0Abi,
									functionName: "approve",
									args: [caveModuleAddress[chain], 0n, 1n],
								}),
							},
							{
								target: caveModuleAddress[chain],
								value: 0n,
								data: encodeFunctionData({
									abi: caveModuleAbi,
									functionName: "useConsumable",
									args: [dinoId, itemsSet0Address[chain], 0n, 1n],
								}),
							},
						]);
					}}
				>
					<H5>Use Apple</H5>
				</ButtonBase>
			</Box>
		</Box>
	);
};

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
		hungry: boolean;
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
		<Box className="flex flex-col gap-4 p-4 group hover:bg-muted/50 border border-transparent hover:border hover:border-[#a3e635]/25">
			<Box className="flex items-center gap-1 group-hover:text-[#a3e635]">
				<H7 className="font-montserrat tracking-widest mr-[2px] group-hover:mr-[1px] transition-all duration-500">
					{"//"}
				</H7>
				<H6 className="font-montserrat uppercase font-extrabold tracking-tighter transition-all duration-500">
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
			<Box className="col-span-4">
				<StatItem title="Name">
					<H1>{props.name}</H1>
				</StatItem>
			</Box>

			<Box className="col-span-4">
				<StatItem title="Age">
					<H1>
						${props.age.days}d/${props.age.hours}h/${props.age.minutes}m
					</H1>
				</StatItem>
			</Box>

			<Box className="col-span-4">
				<StatItem title="Wallet">
					<H1>{100}</H1>
				</StatItem>
			</Box>

			<Box className="col-span-6">
				<StatItem
					title="Job"
					addon={
						<Box className="text-[#a3e635]">
							<H6>100 Emerald / day</H6>
						</Box>
					}
				>
					<H1>Umemployed</H1>
				</StatItem>
			</Box>

			<Box className="col-span-6">
				<StatItem title="Race">
					<H1>{props.species}</H1>
				</StatItem>
			</Box>

			<Box className="col-span-12">
				<StatItem title="Vitals">
					<Box className="flex flex-col gap-2">
						<ProgressBar
							value={props.vitals.life}
							max={props.vitals.lifeMax}
							label="Life"
							colors={{
								track: "rgba(17, 24, 39, 0.4)",
								fill: "linear-gradient(90deg, #ef4444 0%, #f97316 55%, #facc15 100%)",
								sheen:
									"linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.5) 45%, transparent 55%)",
							}}
						/>

						<ProgressBar
							value={props.vitals.magic}
							max={props.vitals.magicMax}
							label="Magic"
							colors={{
								track: "rgba(17, 24, 39, 0.4)",
								fill: "linear-gradient(90deg, #0ea5e9 0%, #38bdf8 55%, #22d3ee 100%)",
								sheen:
									"linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.5) 45%, transparent 55%)",
							}}
						/>
					</Box>
				</StatItem>
			</Box>

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
						<Box>{props.state.hungry ? "Your Dino is hungry" : "Your dino is full"}</Box>
						<Box>{props.state.thirsty ? "Your Dino is thirsty" : "Your dino is ok"}</Box>
						<Box>{props.state.sick ? "Your dino is sick" : "Your dino is ok"}</Box>{" "}
					</Box>
				</StatItem>
			</Box>

			<Box className="col-span-12">
				<StatItem title="Characteristics">
					<Box className="flex flex-col gap-2">
						<ProgressBar
							value={props.characteristics.force}
							max={100}
							label="Force"
							colors={{
								track: "rgba(17, 24, 39, 0.4)",
								fill: "linear-gradient(90deg, white 0%, white 50%, white 100%)",
								sheen:
									"linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.5) 45%, transparent 55%)",
							}}
						/>

						<ProgressBar
							value={props.characteristics.endurance}
							max={100}
							label="Endurance"
							colors={{
								track: "rgba(17, 24, 39, 0.4)",
								fill: "linear-gradient(90deg, white 0%, white 50%, white 100%)",
								sheen:
									"linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.5) 45%, transparent 55%)",
							}}
						/>

						<ProgressBar
							value={props.characteristics.agility}
							max={100}
							label="Agility"
							colors={{
								track: "rgba(17, 24, 39, 0.4)",
								fill: "linear-gradient(90deg, white 0%, white 50%, white 100%)",
								sheen:
									"linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.5) 45%, transparent 55%)",
							}}
						/>

						<ProgressBar
							value={props.characteristics.intelligence}
							max={100}
							label="Intelligence"
							colors={{
								track: "rgba(17, 24, 39, 0.4)",
								fill: "linear-gradient(90deg, white 0%, white 50%, white 100%)",
								sheen:
									"linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.5) 45%, transparent 55%)",
							}}
						/>
					</Box>
				</StatItem>
			</Box>
		</Box>
	);
};

const DinoScene = () => {
	return (
		<Box className="border-y border-muted h-full relative">
			<Box className="absolute top-0 left-0">
				<StatItem title="Level">
					<H1_8>1</H1_8>
				</StatItem>
			</Box>
		</Box>
	);
};

const Page = () => {
	const { dinosOfOwner } = DinoFactory.useDinoFactory();
	const { activeDinoId } = useStore();
	const activeDino = dinosOfOwner.data?.find((d) => d.dinoId === activeDinoId);

	return (
		<Container className="">
			<Box className="border-x border-muted">
				<Box className="grid grid-cols-12 pt-10">
					{/*  */}
					<Box className="col-span-6">
						<DinoScene />
					</Box>

					<Box className="col-span-6">
						<DinoStats
							name={activeDino?.dinoGenesis.name}
							age={timestampToAge(activeDino?.dinoGenesis.birthTimestamp ?? 0n)}
							species="Pterodactyl"
							vitals={{
								life: Number(activeDino?.dinoProfile.health ?? 0n),
								lifeMax: 100,
								magic: 0,
								magicMax: 100,
							}}
							state={{
								hungry: true,
								thirsty: true,
								sick: true,
							}}
							characteristics={{
								force: 10,
								endurance: 50,
								agility: 20,
								intelligence: 67,
							}}
						/>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default Page;
