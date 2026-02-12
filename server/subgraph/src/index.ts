import { ponder } from "ponder:registry";
import schema from "ponder:schema";

ponder.on("DinoFactory:DinoCreated", async ({ event, context }) => {
	await context.db.insert(schema.dinoCreatedEvent).values({
		id: event.id,
		//
		dinoId: event.args.dinoId,
		owner: event.args.owner,
		account: event.args.account,
	});
});
