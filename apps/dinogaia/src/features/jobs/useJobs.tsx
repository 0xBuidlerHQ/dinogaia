import {
	jobsModuleAbi,
	jobsModuleAddress,
	useReadJobsRegistryGetAllJobs,
	useWriteDinoAccountExecuteBatch,
} from "@0xbuidlerhq/dinogaia.contracts";
import { useStore } from "@stores/useStore";
import { encodeFunctionData } from "viem";

const useClaimSalary = () => {
	const { activeDinoAccount, activeDinoId } = useStore();

	const sendCalls = useWriteDinoAccountExecuteBatch({});

	const calldataClaimSalary = encodeFunctionData({
		abi: jobsModuleAbi,
		functionName: "claimSalary",
		args: [activeDinoId!],
	});

	console.log(activeDinoAccount);
	console.log(activeDinoId);

	const execute = () => {
		sendCalls.writeContract({
			address: activeDinoAccount!,
			args: [
				[
					{
						target: jobsModuleAddress["31337"],
						data: calldataClaimSalary,
						value: 0n,
					},
				],
			],
		});
	};

	return { execute, sendCalls };
};

const useJobs = () => {
	const jobs = useReadJobsRegistryGetAllJobs({});

	return { jobs };
};

export { useJobs, useClaimSalary };
