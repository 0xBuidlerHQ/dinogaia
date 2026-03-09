import type { SubgraphTypes } from "@0xbuidlerhq/dinogaia.subgraph";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H1, H1_0, H2, H4, H5 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonDefault } from "@components/buttons/buttonDefault";
import { useJobsClaimSalary } from "@features/jobs/hooks/useJobsClaimSalary";
import { EthereumLogo } from "../../../assets/emerald";

type MyJobViewProps = {
	job?: SubgraphTypes.Job;
	hasAlreadyClaimedSalary?: boolean;
};
const MyJobView = (props: MyJobViewProps) => {
	const { execute, sendCalls } = useJobsClaimSalary();

	return (
		<Box className="p-2 flex flex-col gap-4">
			<Box>
				<H4 className="text-muted-foreground">Situation</H4>
			</Box>

			<Box className="flex items-center gap-4">
				<H1 className="font-black text-brand uppercase">{props.job?.name}</H1>

				<H1_0 className="">/</H1_0>

				<Box className="flex items-center gap-2">
					<Box className="flex items-center gap-0.5">
						<H2 className="leading-none relative top-0.5">{props.job?.dailyPay}</H2>
						<EthereumLogo className="size-4" />
					</Box>

					<H4 className="leading-none relative top-0.5">per day</H4>
				</Box>
			</Box>

			<Box>
				<H5 className="text-muted-foreground">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				</H5>
			</Box>

			<ButtonDefault onClick={execute} disabled={props.hasAlreadyClaimedSalary}>
				{(() => {
					if (props.hasAlreadyClaimedSalary) {
						return <H5>Claimed</H5>;
					}

					return <H5>Claim Salary</H5>;
				})()}
			</ButtonDefault>

			{sendCalls.isError ? "error" : ""}
		</Box>
	);
};

export { MyJobView };
