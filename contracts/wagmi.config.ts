import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";

export default defineConfig({
	out: "package/index.tsx",
	plugins: [
		react(),
		foundry({
			project: ".",
			deployments: {
				DinoERC721: "0xEB0A6da62103824436EB069Dee29EbFD5f92387a",
				DinoRegistry: "0xDf8b09D5aea4f237A7c595fA229018B838cAC494",

				EmeraldERC20: "0xb2eFcdD92ead13bb93ECFA3d6077bCb62f4038Fe",
				DinoJobsRegistry: "0xaFeA7a2353f35eEDe5f43eAE22CCC845ED5bFEcA",
				DinoJobsManager: "0x2C39257edB7742735e3B81cBC60c6eB1f5DeE9Fe",
			},
		}),
	],
});
