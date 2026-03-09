import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H5 } from "@0xbuidlerhq/ui/system/base/typography";

const JobsDescription = () => {
	return (
		<Box className="p-2">
			<H5 className="text-muted-foreground tracking-[-1.25px]">
				<span className="text-brand">Welcome to the jobs board !</span> Here you can choose a
				profession for your dinosaur and earn a daily salary in emeralds. Each job also provides
				unique bonuses that can affect hunting, combat, trading, or other activities. Training for a
				job requires an investment, but higher professions unlock better rewards and powerful
				advantages.{" "}
				<span className="text-brand">Choose your career path wisely and climb the ladder.</span>
			</H5>
		</Box>
	);
};

export { JobsDescription };
