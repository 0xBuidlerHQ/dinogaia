import {
	emeraldErc20Abi,
	emeraldErc20Address,
	shopModuleAbi,
	shopModuleAddress,
	useWriteDinoAccountExecuteBatch,
} from "@0xbuidlerhq/dinogaia.contracts";
import type { Item } from "@0xbuidlerhq/dinogaia.subgraph";
import { Relays } from "@config/relay";
import { useStore } from "@stores/useStore";
import { encodeFunctionData } from "viem";

const Relay = Relays.buyShopItem;

type useBuyItemProps = {
	item: Item;
};
const useBuyItem = (props: useBuyItemProps) => {
	const relay = Relay.useRelay();

	const AMOUNT = 1n;
	const { activeDinoAccount, activeDinoId } = useStore();

	const sendCalls = useWriteDinoAccountExecuteBatch({});

	const calldataApproveErc20 = encodeFunctionData({
		abi: emeraldErc20Abi,
		functionName: "approve",
		args: [shopModuleAddress["31337"], AMOUNT],
	});

	const calldataBuyShopItem = encodeFunctionData({
		abi: shopModuleAbi,
		functionName: "buy",
		args: [activeDinoId!, props.item.itemId, AMOUNT],
	});

	const relaySteps = [
		Relay.createRelayStep({
			id: "approve-buy",
			fn: async () => {
				try {
					await sendCalls.mutateAsync({
						address: activeDinoAccount!,
						args: [
							[
								{
									target: emeraldErc20Address["31337"],
									data: calldataApproveErc20,
									value: 0n,
								},
								{
									target: shopModuleAddress["31337"],
									data: calldataBuyShopItem,
									value: 0n,
								},
							],
						],
					});

					return Relay.StepSuccess({});
				} catch (_) {
					throw Relay.StepError({});
				}
			},
		}),
	];

	const execute = () => {
		relay.initialize(relaySteps);
		relay.start();
	};

	return { execute, sendCalls };
};

export { useBuyItem };
