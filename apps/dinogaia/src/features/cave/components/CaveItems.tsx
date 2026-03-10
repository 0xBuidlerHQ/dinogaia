"use client";

import type { SubgraphTypes } from "@0xbuidlerhq/dinogaia.subgraph";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { useCaveItems } from "@features/cave/hooks/useCaveItems";
import { useConsumeItem } from "@features/cave/hooks/useConsumeItem";

type CaveItemProps = {
	item: SubgraphTypes.Item & { balance: bigint };
};

const CaveConsumeButton = (props: { item: CaveItemProps["item"] }) => {
	const { execute } = useConsumeItem({ item: props.item });
	const disabled = props.item.balance <= 0n;

	return (
		<ButtonBase className="bg-accent/50 rounded px-2" disabled={disabled} onClick={() => execute()}>
			Consume
		</ButtonBase>
	);
};

const CaveItem = (props: CaveItemProps) => {
	return (
		<Box className="flex items-center justify-between border border-muted p-2">
			<Box>
				<Box className="text-lg capitalize text-white">{props.item.name}</Box>
				<Box className="text-sm text-muted-foreground">Owned: {props.item.balance}</Box>
			</Box>

			<CaveConsumeButton item={props.item} />
		</Box>
	);
};

const CaveItems = () => {
	const { items } = useCaveItems();

	return (
		<Box className="space-y-2">
			{items.map((item) => {
				return <CaveItem key={item.itemId} item={item} />;
			})}
		</Box>
	);
};

export { CaveItems };
