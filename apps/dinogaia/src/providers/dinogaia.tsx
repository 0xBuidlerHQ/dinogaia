"use client";

import {
	useReadDinoGetDino,
	useReadEmeraldErc20BalanceOf,
	useReadJobsModuleHasClaimedToday,
	useReadJobsModuleJobOf,
} from "@0xbuidlerhq/dinogaia.contracts";
import { SubgraphQueries } from "@api/subgraph";
import { useWeb3 } from "@providers/web3";
import { useStore } from "@stores/useStore";
import React from "react";

/**
 * @dev useDinogaia hook.
 */
const useDinogaiaPrimitive = () => {
	const { eoa } = useWeb3();
	const { activeDinoId, setActiveDinoId, setActiveDinoAccount } = useStore();

	const enabled = !!eoa.address;

	/**
	 * @dev Global Subgraph Queries.
	 */
	const qJobs = SubgraphQueries.useJobs({});
	const jobs = qJobs.data || [];

	const qSpecies = SubgraphQueries.useSpecies({});
	const species = qSpecies.data || [];

	const qItems = SubgraphQueries.useItems({});
	const items = qItems.data || [];

	/**
	 * @dev Subgraph Queries.
	 */
	const qMyDinos = SubgraphQueries.useDinosOfOwner({
		owner: eoa.address,
	});
	const myDinos = qMyDinos.data || [];

	const currentDinoContext = (() => {
		if (myDinos) {
			if (activeDinoId !== undefined && myDinos.length > 0) {
				let dino = myDinos?.find((d) => d.dinoId === activeDinoId);
				if (dino) return dino;

				dino = myDinos[0];
				setActiveDinoId(dino.dinoId);
				setActiveDinoAccount(dino.account);
				return dino;
			}
		}
	})();

	/**
	 * @dev OnChain Queries.
	 */
	const dinoData = useReadDinoGetDino({
		args: [currentDinoContext?.dinoId!],
		query: { enabled },
	});

	const dinoEmeraldBalance = useReadEmeraldErc20BalanceOf({
		args: [currentDinoContext?.account!],
		query: { enabled },
	});

	const dinoJobId = useReadJobsModuleJobOf({
		args: [currentDinoContext?.dinoId!],
		query: { enabled },
	});

	const hasClaimedToday = useReadJobsModuleHasClaimedToday({
		args: [currentDinoContext?.dinoId!],
		query: { enabled },
	});

	const currentDino = {
		raw: dinoData.data,
		data: dinoData.data,
		job: jobs.find((item) => item.jobId === dinoJobId.data),
		hasClaimedToday: hasClaimedToday.data,
		species: species.find((item) => item.speciesId === dinoData.data?.genesis.speciesId),
		emeraldBalance: dinoEmeraldBalance.data,
	};

	return {
		currentDino,

		jobs,
		species,
		items,
		myDinos,
		//
		q: {
			qJobs,
			qSpecies,
			qMyDinos,
			qItems,
		},
	};
};

/**
 * @dev useDinogaia context.
 */
const DinogaiaContext = React.createContext<ReturnType<typeof useDinogaiaPrimitive> | undefined>(
	undefined,
);
const DinogaiaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const dinogaia = useDinogaiaPrimitive();

	return <DinogaiaContext.Provider value={dinogaia}>{children}</DinogaiaContext.Provider>;
};

/**
 * @dev useDinogaia context hook.
 */
const useDinogaia = () => {
	const context = React.useContext(DinogaiaContext);
	if (context === undefined) {
		throw new Error("useDinogaia must be used within a DinogaiaProvider");
	}
	return context;
};

export { DinogaiaProvider, useDinogaia };
