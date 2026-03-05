import type { ItemsSet, SpeciesRegistry } from "@0xbuidlerhq/dinogaia.contracts/types.user";
import { jsonb, onchainTable } from "ponder";

const dinos = onchainTable("dinos", (t) => ({
	dinoId: t.bigint().primaryKey().notNull(),
	//
	owner: t.hex().notNull(),
	account: t.hex().notNull(),
}));
type Dino = typeof dinos.$inferSelect;

const species = onchainTable("species", (t) => ({
	speciesId: t.bigint().primaryKey().notNull(),
	//
	name: t.text().notNull(),
	//
	stats: jsonb("stats").$type<SpeciesRegistry.Stats>().notNull(),
}));
type Species = typeof species.$inferSelect;

const jobs = onchainTable("jobs", (t) => ({
	jobId: t.bigint().primaryKey().notNull(),
	//
	name: t.text().notNull(),
	//
	dailyPay: t.bigint().notNull(),
	trainingCost: t.bigint().notNull(),
	requiredLevel: t.integer().notNull(),
}));
type Job = typeof jobs.$inferSelect;

const items = onchainTable("items", (t) => ({
	itemId: t.bigint().primaryKey().notNull(),
	//
	name: t.text().notNull(),
	//
	rarity: jsonb("rarity").$type<ItemsSet.ItemRarity>().notNull(),
	itemType: jsonb("itemType").$type<ItemsSet.ItemType>().notNull(),
	trading: jsonb("trading").$type<ItemsSet.ItemTrading>().notNull(),
	usage: jsonb("usage").$type<ItemsSet.ItemUsage>().notNull(),
	requirements: jsonb("requirements").$type<ItemsSet.ItemRequirements>().notNull(),
	metadata: jsonb("metadata").$type<ItemsSet.ItemMetadata>().notNull(),
	effects: jsonb("effects").$type<ItemsSet.Effect[]>().notNull(),
}));
type Item = typeof items.$inferSelect;
type ItemRarity = Item["rarity"];
type ItemType = Item["itemType"];

export {
	dinos,
	species,
	jobs,
	items,
	type Item,
	type Dino,
	type Species,
	type Job,
	type ItemRarity,
	type ItemType,
};
