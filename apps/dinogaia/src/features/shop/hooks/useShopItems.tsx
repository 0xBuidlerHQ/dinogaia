"use client";

import type { SubgraphTypes } from "@0xbuidlerhq/dinogaia.subgraph";
import { useDinogaia } from "@providers/dinogaia";

const useShopItems = () => {
	const { items } = useDinogaia();

	const itemsByItemType = (() => {
		const itemsByItemType: Partial<Record<SubgraphTypes.ItemType, SubgraphTypes.Item[]>> = {};

		items.forEach((item) => {
			if (!itemsByItemType[item.itemType]) {
				itemsByItemType[item.itemType] = [];
			}

			itemsByItemType[item.itemType]!.push(item);
		});

		return itemsByItemType;
	})();

	return { itemsByItemType };
};

export { useShopItems };
