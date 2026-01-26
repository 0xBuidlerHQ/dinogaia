import { useReadJobsRegistryJob } from "@0xbuidlerhq/dinogaia.contracts";

type useJobProps = {
	jobId: bigint;
};
const useJob = (props: useJobProps) => {
	const { jobId } = props;

	const job = useReadJobsRegistryJob({ args: [jobId] });
	return { job };
};

const JobsRegistry = {
	useJob,
};

export { JobsRegistry };
