import type { SubgraphTypes } from "@0xbuidlerhq/dinogaia.subgraph";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H4 } from "@0xbuidlerhq/ui/system/base/typography";
import { JobItem } from "@features/jobs/components/JobItem";

type JobsViewProps = {
	jobs: SubgraphTypes.Job[];
	dino: {
		currentJob: SubgraphTypes.Job;
		level: bigint;
		balance: bigint;
	};
};
const JobsView = (props: JobsViewProps) => {
	return (
		<Box className="flex flex-col gap-2 p-2">
			<Box>
				<H4 className="text-muted-foreground">Jobs</H4>
			</Box>

			<Box className="grid grid-cols-12 gap-2">
				{props.jobs?.map((job) => {
					return (
						<Box key={job.name} className="col-span-12">
							<JobItem job={job} dino={props.dino} />
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

export { JobsView };
