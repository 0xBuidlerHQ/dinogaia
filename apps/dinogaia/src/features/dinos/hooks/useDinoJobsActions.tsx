import {
	useWriteDinoJobsClaimSalary,
	useWriteDinoJobsSetJob,
} from "@0xbuidlerhq/dinogaia.contracts";

const useDinoJobsActions = () => {
	const { writeContractAsync: claimSalary } = useWriteDinoJobsClaimSalary();
	const { writeContractAsync: setJob } = useWriteDinoJobsSetJob();

	return { claimSalary, setJob };
};

export { useDinoJobsActions };
