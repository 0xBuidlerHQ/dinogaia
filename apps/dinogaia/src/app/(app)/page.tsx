"use client";

import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Container } from "@0xbuidlerhq/ui/system/base/container";
import { H2 } from "@0xbuidlerhq/ui/system/base/typography";
import { useWeb3 } from "@config/providers/web3";
import { useDinoFactoryActions } from "@features/dinos/hooks/useDinoFactoryActions";
import { useDinoJobs } from "@features/dinos/hooks/useDinoJobs";
import { useDinoJobsActions } from "@features/dinos/hooks/useDinoJobsActions";
import { useDinosByOwner } from "@features/dinos/hooks/useDinosByOwner";

const Page = () => {
	const { eoa } = useWeb3();

	const { dinos } = useDinosByOwner({ owner: eoa.address! });

	const { mintDinoWithAccount } = useDinoFactoryActions();

	const { jobOf } = useDinoJobs({ dinoId: dinos?.[0]?.dinoId });

	const { claimSalary, setJob } = useDinoJobsActions();

	return (
		<Container className="pt-10">
			<Box>
				<H2>My Dinos</H2>

				<Box>
					{dinos.map((dino) => {
						return (
							<Box key={dino.dinoId}>
								DinoId: {dino.dinoId}: {dino.dinoAccount}
							</Box>
						);
					})}
				</Box>
			</Box>

			<Box>{jobOf?.[0]}</Box>

			<Box className="bg-blue-400">
				<Box onClick={async () => await mintDinoWithAccount({})}>Mint</Box>
			</Box>

			<Box>
				<Box onClick={async () => await claimSalary()}></Box>
			</Box>
		</Container>
	);
};

export default Page;
