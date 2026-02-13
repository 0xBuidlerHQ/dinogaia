import {
	dinoFactoryAbi,
	dinoFactoryAddress,
	dinoGenesisAbi,
	dinoGenesisAddress,
	dinoProfileAbi,
	dinoProfileAddress,
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
		 * @dev DinoGenesis.
		 */
		DinoGenesis: {
			chain: "anvil",
			abi: dinoGenesisAbi,
			address: dinoGenesisAddress[CHAIN_ID],
			startBlock: "latest",
		},

		/**
		 * @dev DinoProfile.
		 */
		DinoProfile: {
			chain: "anvil",
			abi: dinoProfileAbi,
			address: dinoProfileAddress[CHAIN_ID],
			startBlock: "latest",
		},
	},
});
