import { useReadJobsRegistryGetJob } from "@0xbuidlerhq/dinogaia.contracts";

type useJobProps = {
	jobId: bigint;
};
const useJob = (props: useJobProps) => {
	const { jobId } = props;

	const job = useReadJobsRegistryGetJob({ args: [jobId] });
	return { job };
};

const JobsRegistry = {
	useJob,
};

export { JobsRegistry };
