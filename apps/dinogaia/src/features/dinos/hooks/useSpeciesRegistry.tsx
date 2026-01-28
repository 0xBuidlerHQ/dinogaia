import { useReadSpeciesRegistryGetSpecies } from "@0xbuidlerhq/dinogaia.contracts";

type useSpeciesRegistryProps = {
	speciesId: bigint;
};
const useSpecies = (props: useSpeciesRegistryProps) => {
	const { speciesId } = props;

	const species = useReadSpeciesRegistryGetSpecies({ args: [speciesId] });
	return { species };
};

const SpeciesRegistry = {
	useSpecies,
};

export { SpeciesRegistry };
