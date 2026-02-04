"use client";

import {
	emeraldErc20Abi,
	emeraldErc20Address,
	itemsSet0Address,
	itemsSetBaseAbi,
	shopModuleAbi,
	shopModuleAddress,
	useReadItemsSet0ItemIdsIndex,
} from "@0xbuidlerhq/dinogaia.contracts";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Container } from "@0xbuidlerhq/ui/system/base/container";
import { H4, H5, H6 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { useDinoActions } from "@features/dinos/hooks/useDinoActions";
import { DinoFactory } from "@features/dinos/hooks/useDinoFactory";
import { type Address, encodeFunctionData } from "viem";
import { useReadContracts } from "wagmi";

const chain = "31337";
const itemSet = itemsSet0Address[chain] as Address;
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000" as Address;
const ITEM_TYPE_LABELS = [
	"Consumable",
	"Habitat",
	"Weapon",
	"Equipment",
	"Quest",
	"Resource",
	"Artifact",
	"Currency",
	"Container",
	"Key",
	"Blueprint",
	"Cosmetic",
];

const ShopPage = () => {
	const { dinosOfOwner } = DinoFactory.useDinoFactory();
	const selectedDino = dinosOfOwner.data?.[0];
	const dinoAccount = selectedDino?.dinoAccount as Address | undefined;
	const dinoId = selectedDino?.dinoId;

	const { sendTxsFromDinoAccount } = useDinoActions({ dinoAccount: dinoAccount ?? ZERO_ADDRESS });

	const { data: totalIds, isLoading: loadingIds } = useReadItemsSet0ItemIdsIndex({
		address: itemSet,
	});
	const count = typeof totalIds === "bigint" ? Number(totalIds) : 0;

	const contracts =
		count > 0
			? Array.from({ length: count }, (_, i) => ({
					address: itemSet,
					abi: itemsSetBaseAbi,
					functionName: "getItem",
					args: [BigInt(i)],
				}))
			: [];

	const { data: itemsData, isLoading: loadingItems } = useReadContracts({
		contracts,
		allowFailure: true,
	});

	const items =
		itemsData?.map((res, idx) => {
			const meta = res?.result as any;
			const price = meta?.trading?.price ?? 0n;
			return {
				id: BigInt(idx),
				name: meta?.metadata?.name ?? `item-${idx}`,
				price: typeof price === "bigint" ? price : BigInt(price ?? 0),
				itemType: typeof meta?.itemType === "number" ? meta.itemType : Number(meta?.itemType ?? 0),
				effects: meta?.effects ?? [],
			};
		}) ?? [];

	const isLoading = loadingIds || loadingItems;

	return (
		<Box className="relative overflow-hidden">
			<Box className="pointer-events-none absolute inset-0">
				<Box className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl animate-orbit" />
				<Box className="absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl animate-orbit-slow" />
				<Box className="absolute top-1/3 -left-24 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl animate-orbit" />
			</Box>

			<Container className="relative pt-12 pb-16">
				<Box className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
					<Box>
						<H4 className="text-3xl md:text-4xl font-semibold">The Merchant Wagon</H4>
						<H6 className="mt-3 text-sm opacity-70 max-w-xl">
							Trade emeralds for rare habitat gear, tools, and curios. Every purchase is routed
							through your dino account.
						</H6>
						<Box className="mt-6 flex flex-wrap gap-3">
							<Box className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs uppercase tracking-widest">
								Chain {chain}
							</Box>
							<Box className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs uppercase tracking-widest">
								Items {count}
							</Box>
							<Box className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs uppercase tracking-widest">
								{selectedDino ? "Account linked" : "No dino selected"}
							</Box>
						</Box>
					</Box>

					<Box className="rounded-2xl border border-accent/40 bg-background/60 p-5 backdrop-blur">
						<H5 className="font-semibold">Selected Dino</H5>
						{!selectedDino ? (
							<H6 className="mt-2 text-sm opacity-70">Select or mint a dino to buy items.</H6>
						) : (
							<Box className="mt-3 flex flex-col gap-2 text-sm">
								<Box className="flex justify-between">
									<span>Name</span>
									<span className="font-semibold">{selectedDino.dinoGenesis.name}</span>
								</Box>
								<Box className="flex justify-between">
									<span>Dino ID</span>
									<span className="font-semibold">{String(selectedDino.dinoId)}</span>
								</Box>
								<Box className="flex justify-between">
									<span>Account</span>
									<span className="font-semibold">{String(dinoAccount).slice(0, 6)}...</span>
								</Box>
							</Box>
						)}
					</Box>
				</Box>

				<Box className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
					{isLoading && (
						<Box className="col-span-full rounded-2xl border border-accent/40 bg-background/60 p-6 text-sm opacity-70">
							Loading the shop inventory...
						</Box>
					)}

					{!isLoading && items.length === 0 && (
						<Box className="col-span-full rounded-2xl border border-accent/40 bg-background/60 p-6 text-sm opacity-70">
							No items available yet.
						</Box>
					)}

					{items.map((item, index) => {
						const label = ITEM_TYPE_LABELS[item.itemType] ?? "Unknown";
						const effects =
							item.effects.length > 0
								? item.effects
										.map((eff: any) => `${String(eff.kind)}:${String(eff.magnitude)}`)
										.join(" · ")
								: "No effects";

						return (
							<Box
								key={item.id}
								className="group relative overflow-hidden rounded-2xl border border-accent/40 bg-background/70 p-5 backdrop-blur animate-rise"
								style={{ animationDelay: `${index * 80}ms` }}
							>
								<Box className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400/60 via-cyan-400/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
								<Box className="flex items-start justify-between">
									<H5 className="font-semibold">{item.name}</H5>
									<span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-1 text-[10px] uppercase tracking-widest">
										{label}
									</span>
								</Box>
								<Box className="mt-2 text-xs opacity-70">{effects}</Box>
								<Box className="mt-5 flex items-center justify-between">
									<span className="text-lg font-semibold">{item.price.toString()} EMRLD</span>
									<ButtonBase
										className="bg-white text-black"
										disabled={!dinoAccount}
										onClick={async () => {
											if (!dinoAccount || dinoId === undefined) return;
											await sendTxsFromDinoAccount([
												{
													target: emeraldErc20Address[chain],
													value: 0n,
													data: encodeFunctionData({
														abi: emeraldErc20Abi,
														functionName: "approve",
														args: [shopModuleAddress[chain] as Address, item.price],
													}),
												},
												{
													target: shopModuleAddress[chain] as Address,
													value: 0n,
													data: encodeFunctionData({
														abi: shopModuleAbi,
														functionName: "buy",
														args: [BigInt(dinoId), item.id, 1n],
													}),
												},
											]);
										}}
									>
										Buy
									</ButtonBase>
								</Box>
							</Box>
						);
					})}
				</Box>
			</Container>

			<style jsx>{`
				@keyframes orbit {
					0% {
						transform: translateX(-50%) translateY(0px);
					}
					50% {
						transform: translateX(-40%) translateY(20px);
					}
					100% {
						transform: translateX(-50%) translateY(0px);
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
					animation: orbit 14s ease-in-out infinite;
				}
				.animate-orbit-slow {
					animation: orbitSlow 18s ease-in-out infinite;
				}
				.animate-rise {
					animation: rise 0.5s ease-out both;
				}
			`}</style>
		</Box>
	);
};

export default ShopPage;
