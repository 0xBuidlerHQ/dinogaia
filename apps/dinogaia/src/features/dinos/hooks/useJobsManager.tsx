import { useReadJobsManagerJobOf } from "@0xbuidlerhq/dinogaia.contracts";

type useDinoJobProps = {
	dinoId: bigint;
};
const useDinoJob = (props: useDinoJobProps) => {
	const { dinoId } = props;

	const dinoJob = useReadJobsManagerJobOf({ args: [dinoId] });
	return { dinoJob };
};

const jobsManager = {
	useDinoJob,
};

export { jobsManager };
