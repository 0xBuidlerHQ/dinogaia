import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	transpilePackages: [
		//
		"@0xbuidlerhq/dinogaia.contracts",
		"@0xbuidlerhq/ui",
	],
};

export default nextConfig;
