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
import { H5, H6 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { useDinoActions } from "@features/dinos/hooks/useDinoActions";
import { type Dino, DinoFactory } from "@features/dinos/hooks/useDinoFactory";
import { JobsRegistry } from "@features/dinos/hooks/useDinoJobsRegistry";
import { EmeraldERC20 } from "@features/dinos/hooks/useEmeraldERC20";
import { jobsManager } from "@features/dinos/hooks/useJobsManager";
import { SpeciesRegistry } from "@features/dinos/hooks/useSpeciesRegistry";
import { useItems } from "@features/items/useItems";
import { useStore } from "@stores/useStore";
import React from "react";
import { encodeFunctionData } from "viem";
import { timestampToAge } from "../../utils";

const chain = "31337";

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
			<Box className="flex flex-col gap-4 w-60">
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

				<Box className="flex flex-col gap-1">
					<H6 className="font-semibold">Cave</H6>
					{/* <Box className="text-sm">Cleanliness: {cave?.cleanliness?.toString() ?? "—"} / 100</Box>
					<Box className="text-sm">Security: {cave?.security?.toString() ?? "—"}</Box>
					<Box className="text-sm">Hygiene: {cave?.hygiene?.toString() ?? "—"}</Box>
					<Box className="text-sm">Comfort: {cave?.comfort?.toString() ?? "—"}</Box> */}
					{/* {caveModuleAddress[chain] && (
						<ButtonBase
							className="bg-white text-black mt-1"
							onClick={async () => {
								await sendTxsFromDinoAccount([
									{
										target: caveModuleAddress[chain],
										value: 0n,
										data: encodeFunctionData({
											abi: caveModuleAbi,
											functionName: "clean",
											args: [BigInt(dinoId)],
										}),
									},
								]);
							}}
						>
							Nettoyer la grotte
						</ButtonBase>
					)} */}
				</Box>

				{/* {e.items.map((item) => {
					const isEq = equipped.has(Number(item.id));
					return (
						<Box key={item.id} className="border border-dim p-1">
							<Box className="flex justify-between">
								<span>{item.name}</span>
								<span>{String(item.balance)}</span>
							</Box>
							{caveModuleAddress[chain] && (
								<ButtonBase
									className="bg-white text-black mt-1"
									disabled={isEq}
									onClick={async () => {
										await sendTxsFromDinoAccount([
											{
												target: caveModuleAddress[chain],
												value: 0n,
												data: encodeFunctionData({
													abi: caveModuleAbi,
													functionName: "install",
													args: [BigInt(dinoId), item.id],
												}),
											},
										]);
									}}
								>
									{isEq ? "Équipé" : "Installer"}
								</ButtonBase>
							)}
						</Box>
					);
				})} */}

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

const MintButton = () => {
	const { mint } = DinoFactory.useMint();

	const { dinosOfOwner } = DinoFactory.useDinoFactory();
	const { allSpecies } = SpeciesRegistry.useAllSpecies();

	const [dinoName, setDinoName] = React.useState("");
	const [speciesId, setSpeciesId] = React.useState<bigint>(0n);

	React.useEffect(() => {
		if (
			allSpecies.data &&
			allSpecies.data.length > 0 &&
			speciesId >= BigInt(allSpecies.data.length)
		) {
			setSpeciesId(0n);
		}
	}, [allSpecies.data, speciesId]);

	const handleSpeciesChange = (id: number) => setSpeciesId(BigInt(id));

	const canMint = dinoName.length > 0 && (allSpecies.data?.length ?? 0) > 0;

	return (
		<Box>
			<Box className="flex flex-col gap-2">
				<input
					value={dinoName}
					onChange={(e) => setDinoName(e.target.value)}
					placeholder="Dino name"
				/>

				<Box className="flex flex-wrap gap-3">
					{allSpecies.data?.map((species, idx) => (
						<label key={idx} className="flex items-center gap-2 cursor-pointer">
							<input
								type="radio"
								name="species"
								checked={speciesId === BigInt(idx)}
								onChange={() => handleSpeciesChange(idx)}
							/>
							<span>{species.name}</span>
						</label>
					))}
					{!allSpecies.data?.length && (
						<span className="text-sm text-gray-500">Loading species…</span>
					)}
				</Box>
			</Box>

			<ButtonBase
				className="px-2 py-1 bg-white text-black"
				disabled={!canMint}
				onClick={async () => {
					await mint.writeContractAsync({ args: [{ name: dinoName, speciesId }] });
					dinosOfOwner.refetch();
				}}
			>
				Mint
			</ButtonBase>
		</Box>
	);
};

const Page = () => {
	const { dinosOfOwner } = DinoFactory.useDinoFactory();
	const { activeDinoId } = useStore();
	const activeDino = dinosOfOwner.data?.find((d) => d.dinoId === activeDinoId);

	return (
		<Container className="pt-10">
			<Box>
				{activeDino ? (
					<ActiveDino {...activeDino} />
				) : (
					<Box className="text-sm text-gray-500">Select a dino to view details.</Box>
				)}
				<MintButton />
			</Box>
		</Container>
	);
};

export default Page;
