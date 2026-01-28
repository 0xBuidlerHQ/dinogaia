import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";

import deployments from "./deployments/deployments.json";

export default defineConfig({
	out: "package/index.tsx",
	plugins: [
		react(),
		foundry({
			project: ".",
			deployments: deployments as any,
		}),
	],
});
