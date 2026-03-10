"use client";

import {
	caveModuleAbi,
	caveModuleAddress,
	itemsSet0Address,
	useWriteDinoAccountExecuteBatch,
} from "@0xbuidlerhq/dinogaia.contracts";
import type { SubgraphTypes } from "@0xbuidlerhq/dinogaia.subgraph";
import { Relays } from "@config/relay";
import { useWeb3 } from "@providers/web3";
import { useStore } from "@stores/useStore";
import { encodeFunctionData } from "viem";

const Relay = Relays.consumeCaveItem;

type useConsumeItemProps = {
	item?: SubgraphTypes.Item;
	amount?: number;
};
const FALLBACK_CHAIN_ID = Number(Object.keys(itemsSet0Address)[0]);

const useConsumeItem = (props: useConsumeItemProps = {}) => {
	const { chain } = useWeb3();
	const { activeDinoAccount, activeDinoId } = useStore();
	const sendCalls = useWriteDinoAccountExecuteBatch({});
	const relay = Relay.useRelay();

	const chainId = chain?.id ?? FALLBACK_CHAIN_ID;
	const caveModuleTarget =
		caveModuleAddress[chainId as keyof typeof caveModuleAddress] ??
		caveModuleAddress[FALLBACK_CHAIN_ID as keyof typeof caveModuleAddress];
	const itemsSetAddress =
		itemsSet0Address[chainId as keyof typeof itemsSet0Address] ??
		itemsSet0Address[FALLBACK_CHAIN_ID as keyof typeof itemsSet0Address];

	const execute = () => {
		const item = props.item;
		const amount = 1;

		if (!item || !activeDinoAccount) {
			return;
		}

		if (amount <= 0) {
			return;
		}
		console.log("cii");

		const calldata = encodeFunctionData({
			abi: caveModuleAbi,
			functionName: "useConsumable",
			args: [BigInt(activeDinoId), itemsSetAddress, item.itemId, BigInt(amount)],
		});

		const relaySteps = [
			Relay.createRelayStep({
				id: "consume-cave-item",
				fn: async () => {
					try {
						await sendCalls.writeContractAsync({
							address: activeDinoAccount,
							args: [
								[
									{
										target: caveModuleTarget,
										data: calldata,
										value: 0n,
									},
								],
							],
						});

						return Relay.StepSuccess({});
					} catch (error) {
						console.error(error);
						throw Relay.StepError({});
					}
				},
			}),
		];

		relay.initialize(relaySteps);
		relay.start();
	};

	return { execute, sendCalls };
};

export { useConsumeItem };
