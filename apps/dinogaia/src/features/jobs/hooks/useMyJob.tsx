import { useDinogaia } from "@providers/dinogaia";

const useMyJob = () => {
	const { currentDino } = useDinogaia();

	return { job: currentDino.job, hasAlreadyClaimedSalary: currentDino.hasClaimedToday };
};

export { useMyJob };
