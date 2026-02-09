import { useReadShopModuleGetItems } from "@0xbuidlerhq/dinogaia.contracts";

const useShop = () => {
	const items = useReadShopModuleGetItems({});

	return { items };
};

export { useShop };
