import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { JobsHeader } from "@features/jobs/components/JobsHeader";
import { JobsView } from "@features/jobs/components/JobsView";
import { MyJobView } from "@features/jobs/components/MyJobView";
import { useJobs } from "@features/jobs/hooks/useJobs";
import { useMyJob } from "@features/jobs/hooks/useMyJob";

const JobsPage = () => {
	const { job, hasAlreadyClaimedSalary } = useMyJob();
	const { jobs, currentDino } = useJobs();

	return (
		<Box>
			<JobsHeader />

			<MyJobView job={job} hasAlreadyClaimedSalary={hasAlreadyClaimedSalary} />

			<Box className="w-full h-0.5 bg-muted" />

			<JobsView
				jobs={jobs}
				dino={{
					currentJob: job!,
					level: currentDino.data?.progress.level!,
					balance: currentDino.emeraldBalance!,
				}}
			/>
		</Box>
	);
};

export { JobsPage };
