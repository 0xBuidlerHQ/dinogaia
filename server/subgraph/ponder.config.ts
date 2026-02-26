import {
	dinoFactoryAbi,
	dinoFactoryAddress,
	itemsSet0Abi,
	itemsSet0Address,
	jobsRegistryAbi,
	jobsRegistryAddress,
	speciesRegistryAbi,
	speciesRegistryAddress,
} from "@0xbuidlerhq/dinogaia.contracts";
import { createConfig } from "ponder";

const CHAIN_ID = "31337";

export default createConfig({
	chains: {
		anvil: {
			id: Number(CHAIN_ID),
			rpc: process.env.PONDER_RPC_URL_1,
		},
	},
	contracts: {
		/**
		 * @dev DinoFactory.
		 */
		DinoFactory: {
			chain: "anvil",
			abi: dinoFactoryAbi,
			address: dinoFactoryAddress[CHAIN_ID],
			startBlock: "latest",
			filter: {
				event: "DinoCreated",
				args: {},
			},
		},

		/**
		 * @dev JobsRegistry.
		 */
		JobsRegistry: {
			chain: "anvil",
			abi: jobsRegistryAbi,
			address: jobsRegistryAddress[CHAIN_ID],
			startBlock: "latest",
		},

		/**
		 * @dev SpeciesRegistry.
		 */
		SpeciesRegistry: {
			chain: "anvil",
			abi: speciesRegistryAbi,
			address: speciesRegistryAddress[CHAIN_ID],
			startBlock: "latest",
		},

		/**
		 * @dev ItemsSet0.
		 */
		ItemsSet0: {
			chain: "anvil",
			abi: itemsSet0Abi,
			address: itemsSet0Address[CHAIN_ID],
			startBlock: "latest",
		},
	},
});
