"use client";

import {
	jobsModuleAbi,
	jobsModuleAddress,
	useReadEmeraldErc20BalanceOf,
} from "@0xbuidlerhq/dinogaia.contracts";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Container } from "@0xbuidlerhq/ui/system/base/container";
import { H2, H3, H4 } from "@0xbuidlerhq/ui/system/base/typography";
import { useWeb3 } from "@config/providers/web3";
import { useDinoActions } from "@features/dinos/hooks/useDinoActions";
import { DinoFactory } from "@features/dinos/hooks/useDinoFactory";
import { JobsRegistry } from "@features/dinos/hooks/useDinoJobsRegistry";
import { jobsManager } from "@features/dinos/hooks/useJobsManager";
import { type Address, encodeFunctionData } from "viem";

type Props = {
	dinoId: bigint;
	dinoAccount: Address;
	dinoGenesisData: {
		name: string;
		species: bigint;
	};
};

const MyDino = (props: Props) => {
	const { dinoId, dinoAccount, dinoGenesisData } = props;

	const { sendTxsFromDinoAccount } = useDinoActions({ dinoAccount });
	const { jobOf } = jobsManager.useJob({ dinoId });

	const { job } = JobsRegistry.useJob({ jobId: jobOf.data! });
	const { data: balanceOf } = useReadEmeraldErc20BalanceOf({ args: [dinoAccount] });

	const data = encodeFunctionData({
		abi: jobsModuleAbi,
		functionName: "claimSalary",
		args: [dinoId],
	});

	return (
		<Box className="border p-2">
			<Box className="flex flex-col gap-4">
				<Box>
					<H2>DINO #{dinoId}</H2>
				</Box>

				<Box>
					<H3 className="font-bold">Meta</H3>

					<H4>Account: {dinoAccount}</H4>
				</Box>

				<Box>
					<H3 className="font-bold">Genesis</H3>

					<H4>Name: {dinoGenesisData.name}</H4>
					<H4>Species: {dinoGenesisData.species}</H4>
				</Box>

				<Box>
					<H3 className="font-bold">JOB</H3>

					<H4>Name: {job.data?.name}</H4>
					<H4>Daily Salary: {job.data?.dailyPay}</H4>
				</Box>

				<Box>Emerald Balance: {String(balanceOf)}</Box>

				<Box
					className="bg-amber-400"
					onClick={async () =>
						await sendTxsFromDinoAccount([
							{
								target: jobsModuleAddress,
								value: 0n,
								data: data,
							},
						])
					}
				>
					Claim Salary
				</Box>
			</Box>
		</Box>
	);
};

const Page = () => {
	const { eoa } = useWeb3();

	const { dinosOfOwner } = DinoFactory.useGetDinosOfOwner({ owner: eoa.address! });
	const { mint } = DinoFactory.useMint();

	return (
		<Container className="pt-10">
			<Box>
				<H2>My Dinos</H2>

				<Box>
					{dinosOfOwner.data?.map((dino) => (
						<MyDino key={dino.dinoId} {...dino} />
					))}
				</Box>

				<Box>
					<Box
						className="bg-red-500"
						onClick={async () =>
							await mint.writeContractAsync({ args: [{ name: "My Dino", species: 0n }] })
						}
					>
						Mint
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default Page;
