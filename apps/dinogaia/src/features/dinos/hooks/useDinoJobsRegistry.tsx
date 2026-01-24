import { useReadDinoJobsRegistryJob } from "@0xbuidlerhq/dinogaia.contracts";

type useJobProps = {
	jobId: bigint;
};
const useJob = (props: useJobProps) => {
	const { jobId } = props;

	const job = useReadDinoJobsRegistryJob({ args: [jobId] });
	return { job };
};

const DinoJobsRegistry = {
	useJob,
};

export { DinoJobsRegistry };
