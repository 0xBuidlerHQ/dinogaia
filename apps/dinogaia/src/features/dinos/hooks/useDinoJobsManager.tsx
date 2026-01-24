import { useReadDinoJobsManagerJobOf } from "@0xbuidlerhq/dinogaia.contracts";

type useDinoJobProps = {
	dinoId: bigint;
};
const useDinoJob = (props: useDinoJobProps) => {
	const { dinoId } = props;

	const dinoJob = useReadDinoJobsManagerJobOf({ args: [dinoId] });
	return { dinoJob };
};

const DinoJobsManager = {
	useDinoJob,
};

export { DinoJobsManager };
