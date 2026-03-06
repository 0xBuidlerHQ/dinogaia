import { createRelay } from "@0xbuidlerhq/relay";

const buyShopItem = createRelay<{}, {}, {}>("relay-buyShopItem");
const claimSalary = createRelay<{}, {}, {}>("relay-claimSalary");

const Relays = {
	buyShopItem,
	claimSalary,
};

export { Relays };
