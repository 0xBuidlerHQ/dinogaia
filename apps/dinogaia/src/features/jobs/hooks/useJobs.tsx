import { useDinogaia } from "@providers/dinogaia";

const useJobs = () => {
	const { jobs, currentDino } = useDinogaia();

	return { jobs, currentDino };
};

export { useJobs };
