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

const ShopPage = () => {
	const { dinosOfOwner } = DinoFactory.useDinoFactory();
	const selectedDino = dinosOfOwner.data?.[0];
	const dinoAccount = selectedDino?.dinoAccount as Address | undefined;
	const dinoId = selectedDino?.dinoId;

	const { sendTxsFromDinoAccount } = useDinoActions({ dinoAccount: dinoAccount ?? ZERO_ADDRESS });

	const { data: totalIds } = useReadItemsSet0ItemIdsIndex({ address: itemSet });
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

	const { data: itemsData } = useReadContracts({
		contracts,
		allowFailure: true,
	});

	const items =
		itemsData?.map((res, idx) => {
			const meta = res?.result as any;
			return {
				id: BigInt(idx),
				name: meta?.metadata?.name ?? `item-${idx}`,
				price: meta?.trading?.price ? BigInt(meta.trading.price) : 0n,
			};
		}) ?? [];

	return (
		<Container className="pt-10">
			<H4 className="mb-4">Boutique</H4>
			{!selectedDino && <H6>Sélectionne ou crée un dino pour acheter.</H6>}
			<Box className="grid gap-3 md:grid-cols-2">
				{items.map((item) => (
					<Box key={item.id} className="border border-accent p-3 rounded">
						<Box className="flex justify-between">
							<H5 className="font-semibold">{item.name}</H5>
							<span>{item.price.toString()} EMRLD</span>
						</Box>
						<ButtonBase
							className="bg-white text-black mt-2"
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
											args: [dinoId, item.id, 1n],
										}),
									},
								]);
							}}
						>
							Acheter
						</ButtonBase>
					</Box>
				))}
			</Box>
		</Container>
	);
};

export default ShopPage;
