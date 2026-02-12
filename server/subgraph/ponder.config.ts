import { dinoFactoryAbi, dinoFactoryAddress } from "@0xbuidlerhq/dinogaia.contracts";
import { createConfig } from "ponder";

export default createConfig({
	chains: {
		anvil: {
			id: 31337,
			rpc: process.env.PONDER_RPC_URL_1,
		},
	},
	contracts: {
		DinoFactory: {
			chain: "anvil",
			abi: dinoFactoryAbi,
			address: dinoFactoryAddress["31337"],
			startBlock: 42054212,
			filter: {
				event: "DinoCreated",
				args: {},
			},
		},
	},
});
