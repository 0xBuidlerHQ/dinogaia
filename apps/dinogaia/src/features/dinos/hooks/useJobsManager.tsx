import { useReadJobsModuleJobOf } from "@0xbuidlerhq/dinogaia.contracts";

type useDinoJobProps = {
	dinoId: bigint;
};
const useJob = (props: useDinoJobProps) => {
	const { dinoId } = props;

	const jobOf = useReadJobsModuleJobOf({ args: [dinoId] });

	return { jobOf };
};

const jobsManager = {
	useJob,
};

export { jobsManager };
