import { ItemsSetBase } from "@0xbuidlerhq/dinogaia.contracts/types.user";
import airPurifier from "./src/air purifier.png";
import alarmSystem from "./src/alarm system.png";
import ancientMap from "./src/ancient map.png";
import apple from "./src/apple.png";
import bread from "./src/bread.png";
import bronzeSword from "./src/bronze sword.png";
import cheese from "./src/cheese.png";
import chicken from "./src/chicken.png";
import cozyBed from "./src/cozy bed.png";
import firstAidKit from "./src/first aid kit.png";
import healingHerb from "./src/healing herb.png";
import ironHelmet from "./src/iron helmet.png";
import leatherArmor from "./src/leather armor.png";
import longBow from "./src/long bow.png";
import royalSeal from "./src/royal seal.png";
import salmon from "./src/salmon.png";
import securityArtifact from "./src/security artifact.png";
import smallBandage from "./src/small bandage.png";
import travelBoots from "./src/travel boots.png";
import tuna from "./src/tuna.png";
import woodenDoor from "./src/wooden door.png";
import woodenSpear from "./src/wooden spear.png";

type ItemAssets = {
	name: string;
	color: string;
	backgroundColor: string;
	borderColor: string;
	icon?: string;
};

type RarityAssets = {
	name: string;
	color: string;
	backgroundColor: string;
	borderColor: string;
};

const ITEM_BASE_TYPES = [
	ItemsSetBase.ItemBaseType.Consumable,
	ItemsSetBase.ItemBaseType.Habitat,
	ItemsSetBase.ItemBaseType.Weapon,
	ItemsSetBase.ItemBaseType.Equipment,
	ItemsSetBase.ItemBaseType.Quest,
	ItemsSetBase.ItemBaseType.Resource,
	ItemsSetBase.ItemBaseType.Artifact,
	ItemsSetBase.ItemBaseType.Currency,
	ItemsSetBase.ItemBaseType.Container,
	ItemsSetBase.ItemBaseType.Key,
	ItemsSetBase.ItemBaseType.Blueprint,
	ItemsSetBase.ItemBaseType.Cosmetic,
] as const;
type ItemBaseType = (typeof ITEM_BASE_TYPES)[number];

const ITEM_BASE_RARITIES = [
	ItemsSetBase.ItemBaseRarity.Common,
	ItemsSetBase.ItemBaseRarity.Uncommon,
	ItemsSetBase.ItemBaseRarity.Rare,
	ItemsSetBase.ItemBaseRarity.Epic,
	ItemsSetBase.ItemBaseRarity.Legendary,
	ItemsSetBase.ItemBaseRarity.Mythic,
] as const;
type ItemBaseRarity = (typeof ITEM_BASE_RARITIES)[number];

const items: Record<ItemBaseType, ItemAssets> = {
	[ItemsSetBase.ItemBaseType.Artifact]: {
		name: "Artifact",
		color: "text-purple-400",
		backgroundColor: "bg-purple-500/15",
		borderColor: "border-purple-400/40",
	},
	[ItemsSetBase.ItemBaseType.Consumable]: {
		name: "Consumable",
		color: "text-emerald-400",
		backgroundColor: "bg-emerald-500/15",
		borderColor: "border-emerald-400/40",
	},
	[ItemsSetBase.ItemBaseType.Blueprint]: {
		name: "Blueprint",
		color: "text-sky-400",
		backgroundColor: "bg-sky-500/15",
		borderColor: "border-sky-400/40",
	},
	[ItemsSetBase.ItemBaseType.Container]: {
		name: "Container",
		color: "text-amber-400",
		backgroundColor: "bg-amber-500/15",
		borderColor: "border-amber-400/40",
	},
	[ItemsSetBase.ItemBaseType.Cosmetic]: {
		name: "Cosmetic",
		color: "text-pink-400",
		backgroundColor: "bg-pink-500/15",
		borderColor: "border-pink-400/40",
	},
	[ItemsSetBase.ItemBaseType.Currency]: {
		name: "Currency",
		color: "text-yellow-400",
		backgroundColor: "bg-yellow-500/15",
		borderColor: "border-yellow-400/40",
	},
	[ItemsSetBase.ItemBaseType.Equipment]: {
		name: "Equipment",
		color: "text-blue-400",
		backgroundColor: "bg-blue-500/15",
		borderColor: "border-blue-400/40",
	},
	[ItemsSetBase.ItemBaseType.Habitat]: {
		name: "Habitat",
		color: "text-lime-400",
		backgroundColor: "bg-lime-500/15",
		borderColor: "border-lime-400/40",
	},
	[ItemsSetBase.ItemBaseType.Key]: {
		name: "Key",
		color: "text-orange-400",
		backgroundColor: "bg-orange-500/15",
		borderColor: "border-orange-400/40",
	},
	[ItemsSetBase.ItemBaseType.Quest]: {
		name: "Quest",
		color: "text-rose-400",
		backgroundColor: "bg-rose-500/15",
		borderColor: "border-rose-400/40",
	},
	[ItemsSetBase.ItemBaseType.Resource]: {
		name: "Resource",
		color: "text-amber-700",
		backgroundColor: "bg-amber-700/15",
		borderColor: "border-amber-700/40",
	},
	[ItemsSetBase.ItemBaseType.Weapon]: {
		name: "Weapon",
		color: "text-red-400",
		backgroundColor: "bg-red-500/15",
		borderColor: "border-red-400/40",
	},
};

const rarities: Record<ItemBaseRarity, RarityAssets> = {
	[ItemsSetBase.ItemBaseRarity.Common]: {
		name: "Common",
		color: "text-slate-300",
		backgroundColor: "bg-slate-500/10",
		borderColor: "border-slate-300/40",
	},
	[ItemsSetBase.ItemBaseRarity.Uncommon]: {
		name: "Uncommon",
		color: "text-emerald-400",
		backgroundColor: "bg-emerald-500/15",
		borderColor: "border-emerald-400/40",
	},
	[ItemsSetBase.ItemBaseRarity.Rare]: {
		name: "Rare",
		color: "text-sky-400",
		backgroundColor: "bg-sky-500/15",
		borderColor: "border-sky-400/40",
	},
	[ItemsSetBase.ItemBaseRarity.Epic]: {
		name: "Epic",
		color: "text-violet-400",
		backgroundColor: "bg-violet-500/15",
		borderColor: "border-violet-400/40",
	},
	[ItemsSetBase.ItemBaseRarity.Legendary]: {
		name: "Legendary",
		color: "text-amber-400",
		backgroundColor: "bg-amber-500/15",
		borderColor: "border-amber-400/40",
	},
	[ItemsSetBase.ItemBaseRarity.Mythic]: {
		name: "Mythic",
		color: "text-fuchsia-400",
		backgroundColor: "bg-fuchsia-500/15",
		borderColor: "border-fuchsia-400/40",
	},
};

const images: Record<string, string> = {
	apple: apple.src,
	"alarm system": alarmSystem.src,
	bread: bread.src,
	cheese: cheese.src,
	chicken: chicken.src,
	"wooden door": woodenDoor.src,
	"first aid kit": firstAidKit.src,
	"healing herb": healingHerb.src,
	salmon: salmon.src,
	"small bandage": smallBandage.src,
	"air purifier": airPurifier.src,
	"cozy bed": cozyBed.src,
	tuna: tuna.src,
	"wooden spear": woodenSpear.src,
	"bronze sword": bronzeSword.src,
	"leather armor": leatherArmor.src,
	longbow: longBow.src,
	"iron helmet": ironHelmet.src,
	"ancient map": ancientMap.src,
	"travel boots": travelBoots.src,
	"security artifact": securityArtifact.src,
	"royal seal": royalSeal.src,
};

export { items, rarities, images };
