import { onchainTable } from "ponder";

const dinos = onchainTable("dinos", (t) => ({
	dinoId: t.bigint().primaryKey(),
	//
	owner: t.hex(),
	account: t.hex(),
}));

const species = onchainTable("species", (t) => ({
	speciesId: t.bigint().primaryKey(),
	//
	name: t.text(),
	stats_force: t.integer(),
	stats_endurance: t.integer(),
	stats_agility: t.integer(),
	stats_intelligence: t.integer(),
}));

const jobs = onchainTable("jobs", (t) => ({
	jobId: t.bigint().primaryKey(),
	//
	name: t.text(),
	dailyPay: t.bigint(),
	trainingCost: t.bigint(),
	requiredLevel: t.integer(),
}));

export { dinos, species, jobs };
