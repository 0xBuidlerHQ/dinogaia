import { useReadJobsRegistryGetAllJobs } from "@0xbuidlerhq/dinogaia.contracts";

const useJobs = () => {
	const jobs = useReadJobsRegistryGetAllJobs({});

	return { jobs };
};

export { useJobs };
