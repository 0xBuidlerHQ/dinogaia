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
import { H1, H4, H5, H6 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { useDinoActions } from "@features/dinos/hooks/useDinoActions";
import { type Dino, DinoFactory } from "@features/dinos/hooks/useDinoFactory";
import { JobsRegistry } from "@features/dinos/hooks/useDinoJobsRegistry";
import { EmeraldERC20 } from "@features/dinos/hooks/useEmeraldERC20";
import { jobsManager } from "@features/dinos/hooks/useJobsManager";
import { SpeciesRegistry } from "@features/dinos/hooks/useSpeciesRegistry";
import { useItems } from "@features/items/useItems";
import { useStore } from "@stores/useStore";
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

type StatItemProps = {
	title: string;
	content: string;
};
const StatItem = (props: StatItemProps) => {
	return (
		<Box className="flex flex-col gap-4">
			<H4 className="">{props.title}</H4>

			<Box>
				<H1>{props.content}</H1>
			</Box>
		</Box>
	);
};

const DinoStats = (props: DinoStatsProps) => {
	return (
		<Box className="border-l border-b border-muted grid grid-cols-12 items-stretch *:border-r *:border-muted *:border-t *:hover:bg-muted/50 *:p-4">
			<Box className="col-span-4">
				<StatItem title="Name" content={props.name} />
			</Box>

			<Box className="col-span-4">
				<StatItem
					title="Age"
					content={`${props.age.days}d/${props.age.hours}h/${props.age.minutes}m`}
				/>
			</Box>

			<Box className="col-span-4">
				<StatItem title="Race" content={props.species} />
			</Box>

			<Box className="col-span-4"></Box>

			<Box className="col-span-8">
				<Box>{props.state.hungry ? "Your Dino is hungry" : "Your dino is full"}</Box>
				<Box>{props.state.thirsty ? "Your Dino is thirsty" : "Your dino is ok"}</Box>
				<Box>{props.state.sick ? "Your dino is sick" : "Your dino is ok"}</Box>
			</Box>

			<Box className="col-span-12">
				<Box>Force: {props.characteristics.force}</Box>
				<Box>Endurance: {props.characteristics.endurance}</Box>
				<Box>Agility: {props.characteristics.agility}</Box>
				<Box>Intelligence: {props.characteristics.intelligence}</Box>
			</Box>
		</Box>
	);
};

const DinoScene = () => {
	return <Box className="border border-r-0 border-muted h-full">Scene</Box>;
};

const Page = () => {
	const { dinosOfOwner } = DinoFactory.useDinoFactory();
	const { activeDinoId } = useStore();
	const activeDino = dinosOfOwner.data?.find((d) => d.dinoId === activeDinoId);

	return (
		<Container className="pt-10">
			<Box className="grid grid-cols-12">
				<Box className="col-span-6">
					<DinoScene />
				</Box>

				<Box className="col-span-6">
					<DinoStats
						name={activeDino?.dinoGenesis.name}
						age={timestampToAge(activeDino?.dinoGenesis.birthTimestamp ?? 0n)}
						species="Pterodactyl"
						state={{
							hungry: true,
							thirsty: true,
							sick: true,
						}}
						characteristics={{
							force: 100,
							endurance: 100,
							agility: 100,
							intelligence: 100,
						}}
					/>
				</Box>
			</Box>
		</Container>
	);
};

export default Page;
