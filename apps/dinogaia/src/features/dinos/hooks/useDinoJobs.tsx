import { useReadDinoJobsJobOf, useReadDinoJobsKbJobs } from "@0xbuidlerhq/dinogaia.contracts";

type Props = {
	dinoId: bigint;
};

const useDinoJobs = (props: Props) => {
	const { dinoId } = props;

	const { data: jobOfId } = useReadDinoJobsJobOf({ args: [dinoId] });
	const { data: jobOf } = useReadDinoJobsKbJobs({ args: [jobOfId!] });

	return { jobOf };
};

export { useDinoJobs };
