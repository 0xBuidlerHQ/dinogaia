import {
	useReadDinoFactoryGetDinosOfOwner,
	useReadEmeraldErc20BalanceOf,
	useReadJobsModuleJobOf,
	useReadJobsRegistryGetJob,
	useReadSpeciesRegistryGetAllSpecies,
} from "@0xbuidlerhq/dinogaia.contracts";
import { useWeb3 } from "@config/providers/web3";
import { useStore } from "@stores/useStore";

const useDino = () => {
	const { eoa } = useWeb3();

	const { activeDinoId } = useStore();

	const dinosOfOwner = useReadDinoFactoryGetDinosOfOwner({ args: [eoa.address!] });

	const dino = dinosOfOwner.data?.find((d) => d.dinoId === activeDinoId);
	const queryEnabled = !!dino;

	const dinoEmeraldBalance = useReadEmeraldErc20BalanceOf({
		args: [dino?.dinoAccount!],
		query: { enabled: queryEnabled },
	});

	const dinoJobId = useReadJobsModuleJobOf({
		args: [activeDinoId!],
		query: { enabled: queryEnabled },
	});

	const dinoJob = useReadJobsRegistryGetJob({
		args: [dinoJobId.data!],
		query: { enabled: queryEnabled },
	});

	const allDinoSpecies = useReadSpeciesRegistryGetAllSpecies({});
	const dinoSpecies = allDinoSpecies.data?.find(
		(_, index) => dino?.dinoGenesis.speciesId === BigInt(index),
	);

	return { dino, dinoSpecies, dinoEmeraldBalance, dinoJob };
};

export { useDino };
