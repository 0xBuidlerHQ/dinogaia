import { ponder } from "ponder:registry";
import schema from "ponder:schema";

/**
 * @dev DinoFactory:DinoCreated.
 */
ponder.on("DinoFactory:DinoCreated", async ({ event, context }) => {
	await context.db.insert(schema.dinos).values({
		id: event.id,
		dinoId: event.args.dinoContext.dinoId,
		//
		owner: event.args.owner,
		account: event.args.dinoContext.dinoAccount,
	});
});

/**
 * @dev SpeciesRegistry:SpeciesCreated.
 */
ponder.on("SpeciesRegistry:SpeciesCreated", async ({ event, context }) => {
	await context.db.insert(schema.species).values({
		id: event.id,
		speciesId: event.args.speciesId,
		//
		name: event.args.species.name,
		//
		stats: {
			force: event.args.species.stats.force,
			endurance: event.args.species.stats.endurance,
			agility: event.args.species.stats.agility,
			intelligence: event.args.species.stats.intelligence,
		},
	});
});

/**
 * @dev JobsRegistry:JobCreated.
 */
ponder.on("JobsRegistry:JobCreated", async ({ event, context }) => {
	await context.db.insert(schema.jobs).values({
		id: event.id,
		jobId: event.args.jobId,
		//
		name: event.args.job.name,
		dailyPay: event.args.job.dailyPay,
		trainingCost: event.args.job.trainingCost,
		requiredLevel: event.args.job.requiredLevel,
	});
});

/**
 * @dev ItemsSet0:ItemCreated.
 */
ponder.on("ItemsSet0:ItemCreated", async ({ event, context }) => {
	await context.db.insert(schema.items).values({
		id: event.id,
		itemId: event.args.id,
		//
		name: event.args.meta.name,
		//
		rarity: event.args.meta.rarity,
		itemType: event.args.meta.rarity,
		trading: event.args.meta.trading,
		usage: event.args.meta.usage,
		requirements: event.args.meta.requirements,
		metadata: event.args.meta.metadata,
		effects: [...event.args.meta.effects],
	});
});
