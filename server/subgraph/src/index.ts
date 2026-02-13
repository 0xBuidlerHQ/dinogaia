import { ponder } from "ponder:registry";
import schema from "ponder:schema";

ponder.on("DinoFactory:DinoCreated", async ({ event, context }) => {
	const dinoGenesis = await context.client.readContract({
		abi: context.contracts.DinoGenesis.abi,
		address: context.contracts.DinoGenesis.address,
		functionName: "getGenesis",
		args: [event.args.dinoId],
	});

	const dinoProfile = await context.client.readContract({
		abi: context.contracts.DinoProfile.abi,
		address: context.contracts.DinoProfile.address,
		functionName: "getProfile",
		args: [event.args.dinoId],
	});

	await context.db.insert(schema.dino).values({
		id: event.id,
		//
		dinoId: event.args.dinoId,
		owner: event.args.owner,
		account: event.args.account,

		// Dino Genesis
		_initialized: dinoGenesis._initialized,
		name: dinoGenesis.name,
		speciesId: dinoGenesis.speciesId,
		birthTimestamp: dinoGenesis.birthTimestamp,

		// Dino Profile
		alive: dinoProfile.alive,
		health: dinoProfile.health,
		hunger: dinoProfile.hunger,
		thirst: dinoProfile.thirst,
		weight: dinoProfile.weight,
		level: dinoProfile.level,
		xp: dinoProfile.xp,
	});
});
