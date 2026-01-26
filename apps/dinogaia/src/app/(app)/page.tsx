"use client";

import {
	jobsManagerAbi,
	jobsManagerAddress,
	useReadEmeraldErc20BalanceOf,
} from "@0xbuidlerhq/dinogaia.contracts";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Container } from "@0xbuidlerhq/ui/system/base/container";
import { H2, H3, H4 } from "@0xbuidlerhq/ui/system/base/typography";
import { useWeb3 } from "@config/providers/web3";
import { useDinoActions } from "@features/dinos/hooks/useDinoActions";
import { DinoFactory } from "@features/dinos/hooks/useDinoFactory";
import { JobsRegistry } from "@features/dinos/hooks/useDinoJobsRegistry";
import { DinoManager } from "@features/dinos/hooks/useDinoManager";
import { jobsManager } from "@features/dinos/hooks/useJobsManager";
import { type Address, encodeFunctionData } from "viem";

type Props = {
	dinoId: bigint;
	dinoAccount: Address;
};

const MyDino = (props: Props) => {
	const { dinoId, dinoAccount } = props;

	const { sendTxsFromDinoAccount } = useDinoActions({ dinoAccount });
	const { dinoJob } = jobsManager.useDinoJob({ dinoId });

	const { job } = JobsRegistry.useJob({ jobId: dinoJob.data! });
	const { data: balanceOf } = useReadEmeraldErc20BalanceOf({ args: [dinoAccount] });

	const data = encodeFunctionData({
		abi: jobsManagerAbi,
		functionName: "claimSalary",
		args: [dinoId],
	});

	return (
		<Box className="border p-2">
			<Box>
				<H2>DINO #{dinoId}</H2>
			</Box>

			<Box>
				<H3>Meta</H3>

				<H4>Account: {dinoAccount}</H4>
			</Box>

			<Box>
				<H3>JOB</H3>

				<H4>Name: {job.data?.name}</H4>
				<H4>Daily Salary: {job.data?.dailyPay}</H4>
			</Box>

			<Box>Emerald Balance: {String(balanceOf)}</Box>

			<Box
				className="bg-amber-400"
				onClick={async () =>
					await sendTxsFromDinoAccount([
						{
							target: jobsManagerAddress,
							value: 0n,
							data: data,
						},
					])
				}
			>
				Claim Salary
			</Box>
		</Box>
	);
};

const Page = () => {
	const { eoa } = useWeb3();

	const { dinosOf } = DinoManager.useDinosOf({ owner: eoa.address! });
	const { mint } = DinoFactory.useMint();

	return (
		<Container className="pt-10">
			<Box>
				<H2>My Dinos</H2>

				<Box>
					{dinosOf.data?.map((dino) => (
						<MyDino key={dino.dinoId} {...dino} />
					))}
				</Box>

				<Box>
					<Box className="bg-red-500" onClick={async () => await mint.writeContractAsync({})}>
						Mint
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default Page;
