import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";

export default defineConfig({
	out: "package/index.tsx",
	plugins: [
		react(),
		foundry({
			project: ".",
			deployments: {
				DinoERC721: "0xB703001F3b7866dB921e445Fc7598b968097369b",
				EmeraldERC20: "0x9A6255a3F40Ff2415567ba2db11d0C8C2071a096",

				JobsRegistry: "0xB257aa9A1d25bDC6A6eb4c49100EE887d8Fa5531",
				SpeciesRegistry: "0xc0e44eD52c0D68a2F7a6e26d705CE24F20731Be0",

				DinoGenesis: "0xb9FAaC8d305303eeF270C148aa8F385Cd5D810FF",

				DinoFactory: "0x5d4eb69003A0646645C8Ce214441d2851A6fE43a",

				JobsModule: "0xE50012DA43eF185FD9835D2A26c4F02C3A2689a3",
			},
		}),
	],
});
