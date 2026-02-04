"use client";

import {
	caveModuleAbi,
	caveModuleAddress,
	itemsSet0Address,
	itemsSetBaseAbi,
} from "@0xbuidlerhq/dinogaia.contracts";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Container } from "@0xbuidlerhq/ui/system/base/container";
import { H4, H5, H6 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { useCave } from "@features/cave/useCave";
import { useDinoActions } from "@features/dinos/hooks/useDinoActions";
import { DinoFactory } from "@features/dinos/hooks/useDinoFactory";
import { useItems } from "@features/items/useItems";
import { type Address, encodeFunctionData } from "viem";
import { useReadContracts } from "wagmi";

const chain = "31337";
const caveAddress = caveModuleAddress[chain] as Address | undefined;
const itemsSet = itemsSet0Address[chain] as Address;
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000" as Address;
const HABITAT_TYPE = 1;

const CavePage = () => {
	const { dinosOfOwner } = DinoFactory.useDinoFactory();
	const selectedDino = dinosOfOwner.data?.[0];
	const dinoAccount = selectedDino?.dinoAccount as Address | undefined;
	const dinoId = selectedDino?.dinoId;
	const activeDinoId = typeof dinoId === "number" ? BigInt(dinoId) : 0n;

	const { sendTxsFromDinoAccount } = useDinoActions({ dinoAccount: dinoAccount ?? ZERO_ADDRESS });
	const { cave, equipped, isLoading: loadingCave } = useCave({ dinoId: activeDinoId });
	const { items: ownedItems, isLoading: loadingItems } = useItems({
		owner: dinoAccount ?? ZERO_ADDRESS,
	});

	const metaContracts =
		dinoAccount && ownedItems.length > 0
			? ownedItems.map((item) => ({
					address: itemsSet,
					abi: itemsSetBaseAbi,
					functionName: "getItem",
					args: [item.id],
				}))
			: [];

	const { data: metaData, isLoading: loadingMeta } = useReadContracts({
		contracts: metaContracts,
		allowFailure: true,
	});

	const inventory = ownedItems.map((item, idx) => {
		const meta = metaData?.[idx]?.result as any;
		const itemType =
			typeof meta?.itemType === "number" ? meta.itemType : Number(meta?.itemType ?? 0);
		return {
			...item,
			name: meta?.metadata?.name ?? item.name,
			itemType,
			effects: meta?.effects ?? [],
		};
	});

	const isLoading = loadingCave || loadingItems || loadingMeta;

	return (
		<Box className="relative overflow-hidden">
			<Box className="pointer-events-none absolute inset-0">
				<Box className="absolute -top-20 right-1/3 h-72 w-72 rounded-full bg-amber-300/15 blur-3xl animate-orbit" />
				<Box className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl animate-orbit-slow" />
			</Box>

			<Container className="relative pt-12 pb-16">
				<Box className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
					<Box>
						<H4 className="text-3xl md:text-4xl font-semibold">Cave Operations</H4>
						<H6 className="mt-3 text-sm opacity-70 max-w-xl">
							Install habitat gear and track your cave stats. Each item locks while it is installed.
						</H6>
					</Box>
					<Box className="rounded-2xl border border-accent/40 bg-background/70 p-5 backdrop-blur">
						<H5 className="font-semibold">Active Cave</H5>
						{!selectedDino ? (
							<H6 className="mt-2 text-sm opacity-70">Select or mint a dino to access its cave.</H6>
						) : (
							<Box className="mt-3 grid grid-cols-2 gap-3 text-sm">
								<Box className="rounded-xl border border-accent/20 p-3">
									<span className="text-xs opacity-70">Cleanliness</span>
									<div className="text-lg font-semibold">
										{cave?.cleanliness?.toString() ?? "—"}
									</div>
								</Box>
								<Box className="rounded-xl border border-accent/20 p-3">
									<span className="text-xs opacity-70">Security</span>
									<div className="text-lg font-semibold">{cave?.security?.toString() ?? "—"}</div>
								</Box>
								<Box className="rounded-xl border border-accent/20 p-3">
									<span className="text-xs opacity-70">Hygiene</span>
									<div className="text-lg font-semibold">{cave?.hygiene?.toString() ?? "—"}</div>
								</Box>
								<Box className="rounded-xl border border-accent/20 p-3">
									<span className="text-xs opacity-70">Comfort</span>
									<div className="text-lg font-semibold">{cave?.comfort?.toString() ?? "—"}</div>
								</Box>
							</Box>
						)}
					</Box>
				</Box>

				<Box className="mt-10 rounded-2xl border border-accent/40 bg-background/70 p-6 backdrop-blur">
					<H5 className="font-semibold">Habitat Inventory</H5>
					<H6 className="mt-2 text-sm opacity-70">Install or remove habitat items you own.</H6>

					{isLoading && (
						<Box className="mt-6 rounded-xl border border-accent/20 p-4 text-sm opacity-70">
							Loading cave inventory...
						</Box>
					)}

					{!isLoading && inventory.length === 0 && (
						<Box className="mt-6 rounded-xl border border-accent/20 p-4 text-sm opacity-70">
							No items in inventory yet.
						</Box>
					)}

					<Box className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
						{inventory.map((item, index) => {
							const isInstalled = equipped.has(Number(item.id));
							const canInstall = item.itemType === HABITAT_TYPE;
							const effects =
								item.effects.length > 0
									? item.effects
											.map((eff: any) => `${String(eff.kind)}:${String(eff.magnitude)}`)
											.join(" · ")
									: "No effects";

							return (
								<Box
									key={`${item.id.toString()}-${item.balance.toString()}`}
									className="group relative overflow-hidden rounded-2xl border border-accent/30 bg-background/60 p-5 animate-rise"
									style={{ animationDelay: `${index * 80}ms` }}
								>
									<Box className="flex items-start justify-between">
										<H6 className="font-semibold">{item.name}</H6>
										<span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-1 text-[10px] uppercase tracking-widest">
											{canInstall ? "Habitat" : "Other"}
										</span>
									</Box>
									<Box className="mt-2 text-xs opacity-70">{effects}</Box>
									<Box className="mt-4 flex items-center justify-between text-xs opacity-70">
										<span>Balance</span>
										<span>{item.balance.toString()}</span>
									</Box>
									<ButtonBase
										className="mt-4 w-full bg-white text-black"
										disabled={!selectedDino || !caveAddress || !canInstall}
										onClick={async () => {
											if (!selectedDino || !caveAddress) return;
											await sendTxsFromDinoAccount([
												{
													target: caveAddress,
													value: 0n,
													data: encodeFunctionData({
														abi: caveModuleAbi,
														functionName: "useHabitat",
														args: [activeDinoId, item.id, !isInstalled],
													}),
												},
											]);
										}}
									>
										{isInstalled ? "Remove" : "Install"}
									</ButtonBase>
								</Box>
							);
						})}
					</Box>
				</Box>
			</Container>

			<style jsx>{`
				@keyframes orbit {
					0% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(16px);
					}
					100% {
						transform: translateY(0px);
					}
				}
				@keyframes orbitSlow {
					0% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-18px);
					}
					100% {
						transform: translateY(0px);
					}
				}
				@keyframes rise {
					0% {
						opacity: 0;
						transform: translateY(14px);
					}
					100% {
						opacity: 1;
						transform: translateY(0px);
					}
				}
				.animate-orbit {
					animation: orbit 16s ease-in-out infinite;
				}
				.animate-orbit-slow {
					animation: orbitSlow 20s ease-in-out infinite;
				}
				.animate-rise {
					animation: rise 0.5s ease-out both;
				}
			`}</style>
		</Box>
	);
};

export default CavePage;
