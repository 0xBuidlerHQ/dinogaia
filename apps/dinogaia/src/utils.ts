import { ItemsSetBase } from "@0xbuidlerhq/dinogaia.contracts/types.user";

const timestampToAge = (timestamp: bigint) => {
	const now = BigInt(Math.floor(Date.now() / 1000));
	if (now <= timestamp) return { days: 0n, hours: 0n, minutes: 0n };

	const delta = now - timestamp;
	const day = 86_400n;
	const hour = 3_600n;
	const minute = 60n;

	const days = delta / day;
	const hours = (delta % day) / hour;
	const minutes = (delta % hour) / minute;

	return { days, hours, minutes };
};

type DinoAge = ReturnType<typeof timestampToAge>;

const itemBaseType = (item: ItemsSetBase.ItemBaseType) => {
	switch (item) {
		case ItemsSetBase.ItemBaseType.Artifact:
			return {
				name: "Artifact",
				color: "text-purple-400",
				backgroundColor: "bg-purple-500/15",
				borderColor: "border-purple-400/40",
			};
		case ItemsSetBase.ItemBaseType.Consumable:
			return {
				name: "Consumable",
				color: "text-emerald-400",
				backgroundColor: "bg-emerald-500/15",
				borderColor: "border-emerald-400/40",
			};
		case ItemsSetBase.ItemBaseType.Blueprint:
			return {
				name: "Blueprint",
				color: "text-sky-400",
				backgroundColor: "bg-sky-500/15",
				borderColor: "border-sky-400/40",
			};
		case ItemsSetBase.ItemBaseType.Container:
			return {
				name: "Container",
				color: "text-amber-400",
				backgroundColor: "bg-amber-500/15",
				borderColor: "border-amber-400/40",
			};
		case ItemsSetBase.ItemBaseType.Cosmetic:
			return {
				name: "Cosmetic",
				color: "text-pink-400",
				backgroundColor: "bg-pink-500/15",
				borderColor: "border-pink-400/40",
			};
		case ItemsSetBase.ItemBaseType.Currency:
			return {
				name: "Currency",
				color: "text-yellow-400",
				backgroundColor: "bg-yellow-500/15",
				borderColor: "border-yellow-400/40",
			};
		case ItemsSetBase.ItemBaseType.Equipment:
			return {
				name: "Equipment",
				color: "text-blue-400",
				backgroundColor: "bg-blue-500/15",
				borderColor: "border-blue-400/40",
			};
		case ItemsSetBase.ItemBaseType.Habitat:
			return {
				name: "Habitat",
				color: "text-lime-400",
				backgroundColor: "bg-lime-500/15",
				borderColor: "border-lime-400/40",
			};
		case ItemsSetBase.ItemBaseType.Key:
			return {
				name: "Key",
				color: "text-orange-400",
				backgroundColor: "bg-orange-500/15",
				borderColor: "border-orange-400/40",
			};
		case ItemsSetBase.ItemBaseType.Quest:
			return {
				name: "Quest",
				color: "text-rose-400",
				backgroundColor: "bg-rose-500/15",
				borderColor: "border-rose-400/40",
			};
		case ItemsSetBase.ItemBaseType.Resource:
			return {
				name: "Resource",
				color: "text-amber-700",
				backgroundColor: "bg-amber-700/15",
				borderColor: "border-amber-700/40",
			};
		case ItemsSetBase.ItemBaseType.Weapon:
			return {
				name: "Weapon",
				color: "text-red-400",
				backgroundColor: "bg-red-500/15",
				borderColor: "border-red-400/40",
			};
	}
};

export { timestampToAge, itemBaseType, type DinoAge };
