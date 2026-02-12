import { onchainTable } from "ponder";

export const dinoCreatedEvent = onchainTable("dinoCreatedEvent", (t) => ({
	dinoId: t.bigint().primaryKey(),
	owner: t.hex(),
	account: t.hex(),
}));
