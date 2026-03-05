import {
	emeraldErc20Abi,
	emeraldErc20Address,
	shopModuleAbi,
	shopModuleAddress,
	useReadShopModuleGetItems,
	useWriteDinoAccountExecuteBatch,
} from "@0xbuidlerhq/dinogaia.contracts";
import type { Item } from "@0xbuidlerhq/dinogaia.subgraph";
import { useStore } from "@stores/useStore";
import { encodeFunctionData } from "viem";

type useBuyItemProps = {
	item: Item;
};
const useBuyItem = (props: useBuyItemProps) => {
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

	const execute = () => {
		sendCalls.writeContract({
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
	};

	return { execute, sendCalls };
};

const useShop = () => {
	const items = useReadShopModuleGetItems({});

	return { items };
};

export { useShop, useBuyItem };
