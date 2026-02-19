import {
	useReadEmeraldErc20BalanceOf,
	useReadJobsModuleJobOf,
	useReadJobsRegistryGetJob,
} from "@0xbuidlerhq/dinogaia.contracts";
import { schema } from "@config/providers/ponder";
import { useWeb3 } from "@config/providers/web3";
import { eq } from "@ponder/client";
import { usePonderQuery } from "@ponder/react";
import { useStore } from "@stores/useStore";

const useDinogaia = () => {
	const { eoa } = useWeb3();

	const { activeDinoId } = useStore();

	const enabled = !!eoa.address;

	const queryMyDinos = usePonderQuery({
		queryFn: (db) => db.select().from(schema.dino).where(eq(schema.dino.owner, eoa.address!)),
		enabled,
	});

	const dino = queryMyDinos.data?.find((d) => d.dinoId === activeDinoId);

	const dinoEmeraldBalance = useReadEmeraldErc20BalanceOf({
		args: [dino?.account!],
		query: { enabled },
	});

	const dinoJobId = useReadJobsModuleJobOf({
		args: [activeDinoId!],
		query: { enabled },
	});

	const dinoJob = useReadJobsRegistryGetJob({
		args: [dinoJobId.data!],
		query: { enabled },
	});

	return { dino, dinoEmeraldBalance, dinoJob };
};

export { useDinogaia };
