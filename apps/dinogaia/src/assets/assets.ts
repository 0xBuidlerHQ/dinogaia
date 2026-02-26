import { ItemsSet } from "@0xbuidlerhq/dinogaia.contracts/types.user";
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
import casino from "./src/navigation/casino.png";
import cave from "./src/navigation/cave.png";
import dino from "./src/navigation/dino.png";
import fight from "./src/navigation/fight.png";
import hunt from "./src/navigation/hunt.png";
import jobs from "./src/navigation/jobs.png";
import quest from "./src/navigation/quest.png";
import ranking from "./src/navigation/ranking.png";
import shop from "./src/navigation/shop.png";
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
	ItemsSet.ItemType.Consumable,
	ItemsSet.ItemType.Habitat,
	ItemsSet.ItemType.Weapon,
	ItemsSet.ItemType.Equipment,
	ItemsSet.ItemType.Quest,
	ItemsSet.ItemType.Resource,
	ItemsSet.ItemType.Artifact,
	ItemsSet.ItemType.Currency,
	ItemsSet.ItemType.Container,
	ItemsSet.ItemType.Key,
	ItemsSet.ItemType.Blueprint,
	ItemsSet.ItemType.Cosmetic,
] as const;
type ItemType = (typeof ITEM_BASE_TYPES)[number];

const ITEM_BASE_RARITIES = [
	ItemsSet.ItemRarity.Common,
	ItemsSet.ItemRarity.Uncommon,
	ItemsSet.ItemRarity.Rare,
	ItemsSet.ItemRarity.Epic,
	ItemsSet.ItemRarity.Legendary,
	ItemsSet.ItemRarity.Mythic,
] as const;
type ItemRarity = (typeof ITEM_BASE_RARITIES)[number];

const items: Record<ItemType, ItemAssets> = {
	[ItemsSet.ItemType.Artifact]: {
		name: "Artifact",
		color: "text-purple-400",
		backgroundColor: "bg-purple-500/15",
		borderColor: "border-purple-400/40",
	},
	[ItemsSet.ItemType.Consumable]: {
		name: "Consumable",
		color: "text-emerald-400",
		backgroundColor: "bg-emerald-500/15",
		borderColor: "border-emerald-400/40",
	},
	[ItemsSet.ItemType.Blueprint]: {
		name: "Blueprint",
		color: "text-sky-400",
		backgroundColor: "bg-sky-500/15",
		borderColor: "border-sky-400/40",
	},
	[ItemsSet.ItemType.Container]: {
		name: "Container",
		color: "text-amber-400",
		backgroundColor: "bg-amber-500/15",
		borderColor: "border-amber-400/40",
	},
	[ItemsSet.ItemType.Cosmetic]: {
		name: "Cosmetic",
		color: "text-pink-400",
		backgroundColor: "bg-pink-500/15",
		borderColor: "border-pink-400/40",
	},
	[ItemsSet.ItemType.Currency]: {
		name: "Currency",
		color: "text-yellow-400",
		backgroundColor: "bg-yellow-500/15",
		borderColor: "border-yellow-400/40",
	},
	[ItemsSet.ItemType.Equipment]: {
		name: "Equipment",
		color: "text-blue-400",
		backgroundColor: "bg-blue-500/15",
		borderColor: "border-blue-400/40",
	},
	[ItemsSet.ItemType.Habitat]: {
		name: "Habitat",
		color: "text-lime-400",
		backgroundColor: "bg-lime-500/15",
		borderColor: "border-lime-400/40",
	},
	[ItemsSet.ItemType.Key]: {
		name: "Key",
		color: "text-orange-400",
		backgroundColor: "bg-orange-500/15",
		borderColor: "border-orange-400/40",
	},
	[ItemsSet.ItemType.Quest]: {
		name: "Quest",
		color: "text-rose-400",
		backgroundColor: "bg-rose-500/15",
		borderColor: "border-rose-400/40",
	},
	[ItemsSet.ItemType.Resource]: {
		name: "Resource",
		color: "text-amber-700",
		backgroundColor: "bg-amber-700/15",
		borderColor: "border-amber-700/40",
	},
	[ItemsSet.ItemType.Weapon]: {
		name: "Weapon",
		color: "text-red-400",
		backgroundColor: "bg-red-500/15",
		borderColor: "border-red-400/40",
	},
};

const rarities: Record<ItemRarity, RarityAssets> = {
	[ItemsSet.ItemRarity.Common]: {
		name: "Common",
		color: "text-slate-300",
		backgroundColor: "bg-slate-500/10",
		borderColor: "border-slate-300/40",
	},
	[ItemsSet.ItemRarity.Uncommon]: {
		name: "Uncommon",
		color: "text-emerald-400",
		backgroundColor: "bg-emerald-500/15",
		borderColor: "border-emerald-400/40",
	},
	[ItemsSet.ItemRarity.Rare]: {
		name: "Rare",
		color: "text-sky-400",
		backgroundColor: "bg-sky-500/15",
		borderColor: "border-sky-400/40",
	},
	[ItemsSet.ItemRarity.Epic]: {
		name: "Epic",
		color: "text-violet-400",
		backgroundColor: "bg-violet-500/15",
		borderColor: "border-violet-400/40",
	},
	[ItemsSet.ItemRarity.Legendary]: {
		name: "Legendary",
		color: "text-amber-400",
		backgroundColor: "bg-amber-500/15",
		borderColor: "border-amber-400/40",
	},
	[ItemsSet.ItemRarity.Mythic]: {
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
} as const;

const navigation = {
	cave: cave.src,
	shop: shop.src,
	hunt: hunt.src,
	fight: fight.src,
	quest: quest.src,
	casino: casino.src,
	jobs: jobs.src,
	dino: dino.src,
	ranking: ranking.src,
} as const satisfies Record<string, string>;

export { items, rarities, images, navigation };
