"use client";

import { jobsModuleAbi } from "@0xbuidlerhq/dinogaia.contracts";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Container } from "@0xbuidlerhq/ui/system/base/container";
import { H5 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { useDinoActions } from "@features/dinos/hooks/useDinoActions";
import { DinoFactory } from "@features/dinos/hooks/useDinoFactory";
import { JobsRegistry } from "@features/dinos/hooks/useDinoJobsRegistry";
import { EmeraldERC20 } from "@features/dinos/hooks/useEmeraldERC20";
import { jobsManager } from "@features/dinos/hooks/useJobsManager";
import { SpeciesRegistry } from "@features/dinos/hooks/useSpeciesRegistry";
import { type Address, encodeFunctionData } from "viem";
import { timestampToAgeInDays } from "../../utils";

type Props = {
	dinoId: bigint;
	dinoAccount: Address;
	dinoGenesisData: {
		name: string;
		speciesId: bigint;
		birthTimestamp: bigint;
	};
};

const MyDino = (props: Props) => {
	const { dinoId, dinoAccount, dinoGenesisData } = props;

	const { sendTxsFromDinoAccount } = useDinoActions({ dinoAccount });
	const { jobOf } = jobsManager.useJob({ dinoId });

	const { job } = JobsRegistry.useJob({ jobId: jobOf.data! });
	const { balanceOf } = EmeraldERC20.useEmeraldERC20({ dinoAccount: dinoAccount });

	const data = encodeFunctionData({
		abi: jobsModuleAbi,
		functionName: "claimSalary",
		args: [dinoId],
	});

	const { species } = SpeciesRegistry.useSpecies({ speciesId: dinoGenesisData.speciesId });

	return (
		<Box className="border border-accent p-2">
			<Box className="flex flex-col gap-4 w-60">
				<Box className="flex justify-between items-center">
					<H5 className="font-bold">{dinoGenesisData.name}</H5>
					<H5 className="font-bold">{timestampToAgeInDays(dinoGenesisData.birthTimestamp)}d</H5>
				</Box>

				<Box className="flex justify-between items-center">
					<H5>{species.data?.name}</H5>

					<H5>{String(balanceOf.data)}</H5>
				</Box>

				{/* <Box
					className="bg-amber-400"
					onClick={async () =>
						await sendTxsFromDinoAccount([
							{
								target: jobsModuleAddress["31337"],
								value: 0n,
								data: data,
							},
						])
					}
				>
					Claim Salary
				</Box> */}
			</Box>
		</Box>
	);
};

const MyDinos = () => {
	const { dinosOfOwner } = DinoFactory.useDinoFactory();

	return (
		<Box className="flex gap-2">
			{dinosOfOwner.data?.map((dino) => (
				<MyDino key={dino.dinoId} {...dino} />
			))}
		</Box>
	);
};

const MintButton = () => {
	const { mint } = DinoFactory.useMint();

	const { dinosOfOwner } = DinoFactory.useDinoFactory();

	return (
		<ButtonBase
			className="px-2 py-1 bg-white text-black"
			onClick={async () => {
				await mint.writeContractAsync({ args: [{ name: "Malomalimalu", speciesId: 0n }] });
				dinosOfOwner.refetch();
			}}
		>
			Mint
		</ButtonBase>
	);
};

const Page = () => {
	return (
		<Container className="pt-10">
			<Box>
				<MyDinos />
				<MintButton />
			</Box>
		</Container>
	);
};

export default Page;
