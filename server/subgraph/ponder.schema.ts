import { jsonb, onchainTable } from "ponder";

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
	//
	stats: jsonb("stats").$type<{
		force?: number;
		endurance?: number;
		agility?: number;
		intelliger?: number;
	}>(),
}));

const jobs = onchainTable("jobs", (t) => ({
	jobId: t.bigint().primaryKey(),
	//
	name: t.text(),
	//
	dailyPay: t.bigint(),
	trainingCost: t.bigint(),
	requiredLevel: t.integer(),
}));

const items = onchainTable("items", (t) => ({
	itemId: t.bigint().primaryKey(),
	//
	name: t.text(),
	//
}));

export { dinos, species, jobs, items };
