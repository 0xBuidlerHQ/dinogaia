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
				EmeraldERC20: "0xb2eFcdD92ead13bb93ECFA3d6077bCb62f4038Fe",

				JobsRegistry: "0x307E397B5ec8A75Bf5919828f7Af922ff7052987",
				SpeciesRegistry: "0x3e8336aF46d3fcC22598395e0867119Fbb9a502b",
				DinoManager: "0xB1637bAD3b1d0571A697E2cDDC8D1a7eDAbEEA72",

				SpeciesManager: "0x875611ef2f51d93DC4394EE1aFf9ab2c8A1a2a63",
				JobsManager: "0x7Cf6a597c8457C76687F63c97a0204b82d03fD42",
				DinoFactory: "0x1D3DdD53ce3c4cA2F2Ae1a89611f0CaB078824d2",
			},
		}),
	],
});
