import {
	useReadSpeciesRegistryGetAllSpecies,
	useReadSpeciesRegistryGetSpecies,
} from "@0xbuidlerhq/dinogaia.contracts";

type useSpeciesRegistryProps = {
	speciesId: bigint;
};
const useSpecies = (props: useSpeciesRegistryProps) => {
	const { speciesId } = props;

	const species = useReadSpeciesRegistryGetSpecies({ args: [speciesId] });
	return { species };
};

const useAllSpecies = () => {
	const allSpecies = useReadSpeciesRegistryGetAllSpecies();

	return { allSpecies };
};

const SpeciesRegistry = {
	useSpecies,
	useAllSpecies,
};

export { SpeciesRegistry };
