import {
	jobsModuleAbi,
	jobsModuleAddress,
	useWriteDinoAccountExecuteBatch,
} from "@0xbuidlerhq/dinogaia.contracts";
import { Relays } from "@config/relay";
import { useStore } from "@stores/useStore";
import { encodeFunctionData } from "viem";

const Relay = Relays.claimSalary;

const useJobsClaimSalary = () => {
	const relay = Relay.useRelay();

	const { activeDinoAccount, activeDinoId } = useStore();

	const sendCalls = useWriteDinoAccountExecuteBatch({});

	const calldataClaimSalary = encodeFunctionData({
		abi: jobsModuleAbi,
		functionName: "claimSalary",
		args: [activeDinoId!],
	});

	const relaySteps = [
		Relay.createRelayStep({
			id: "claimSalary",
			fn: async () => {
				try {
					await sendCalls.writeContractAsync({
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

					return Relay.StepSuccess({});
				} catch (_) {
					throw Relay.StepError({});
				}
			},
		}),
	];

	const execute = () => {
		relay.initialize(relaySteps);
		relay.start();
	};

	return { execute, sendCalls };
};

export { useJobsClaimSalary };
