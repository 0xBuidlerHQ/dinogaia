import { onchainTable } from "ponder";

export const dino = onchainTable("dino", (t) => ({
	// Dino Account
	dinoId: t.bigint().primaryKey(),
	owner: t.hex(),
	account: t.hex(),

	// Dino Genesis
	_initialized: t.boolean(),
	name: t.text(),
	speciesId: t.bigint(),
	birthTimestamp: t.bigint(),

	// Dino Profile
	alive: t.boolean(),
	health: t.bigint(),
	hunger: t.boolean(),
	thirst: t.boolean(),
	weight: t.bigint(),
	level: t.bigint(),
	xp: t.bigint(),
}));
