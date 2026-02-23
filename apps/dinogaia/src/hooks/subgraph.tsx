"use client";

import { eq } from "@ponder/client";
import { usePonderQuery } from "@ponder/react";
import { schema } from "@providers/ponder";
import type { Address } from "viem";

/**
 * @dev useDinosOfOwner.
 */
type useDinosOfOwnerProps = {
	owner?: Address;
	isEnabled?: boolean;
};
const useDinosOfOwner = (props: useDinosOfOwnerProps) => {
	const owner = props.owner ? props.owner : "0x";

	const dinosOfOwner = usePonderQuery({
		queryFn: (db) => db.select().from(schema.dinos).where(eq(schema.dinos.owner, owner)),
		enabled: props.isEnabled,
		live: false,
	});

	return dinosOfOwner;
};

/**
 * @dev useJobs.
 */
type useJobsProps = {
	isEnabled?: boolean;
};
const useJobs = (props: useJobsProps) => {
	const jobs = usePonderQuery({
		queryFn: (db) => db.select().from(schema.jobs),
		enabled: props.isEnabled,
		live: false,
	});

	return jobs;
};

/**
 * @dev useSpecies.
 */
type useSpeciesProps = {
	isEnabled?: boolean;
};
const useSpecies = (props: useSpeciesProps) => {
	const species = usePonderQuery({
		queryFn: (db) => db.select().from(schema.species),
		enabled: props.isEnabled,
		live: false,
	});

	return species;
};

const SubgraphQueries = {
	useDinosOfOwner,
	useJobs,
	useSpecies,
};

export { SubgraphQueries };
