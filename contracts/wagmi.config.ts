import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";

export default defineConfig({
	out: "package/index.tsx",
	plugins: [
		react(),
		foundry({
			project: ".",
			deployments: {
				DinoERC721: "0xAf06d3d9B12491b920B6a2d8c8c0c8c510939c35",
				DinoAccountFactory: "0x3E24afa67Cb7180f03bE42fdfAca3A8EAfc0dCa1",

				EmeraldERC20: "0xc4d1624AdD956428Cc257cA95229C80CF5Ed1aB0",
				DinoJobsKB: "0xba9B72049dB6F93F51C91CAF8F0817fb6D8fd4Ff",
				DinoJobs: "0x2420ca40667849dE80a3c4775F0E211D73D174dc",
			},
		}),
	],
});
