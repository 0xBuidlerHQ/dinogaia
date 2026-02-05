import { Dialog, DialogContent, DialogTitle } from "@0xbuidlerhq/ui/shadcn/components/dialog";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { DinoFactory } from "@features/dinos/hooks/useDinoFactory";
import { SpeciesRegistry } from "@features/dinos/hooks/useSpeciesRegistry";
import { useMint } from "@features/dinos/mint/useMint";
import { useStore } from "@stores/useStore";
import React from "react";

const MintModal = () => {
	const { mint } = useMint();

	const { dinosOfOwner } = DinoFactory.useDinoFactory();
	const { allSpecies } = SpeciesRegistry.useAllSpecies();

	const [dinoName, setDinoName] = React.useState("");
	const [speciesId, setSpeciesId] = React.useState<bigint>(0n);

	React.useEffect(() => {
		if (
			allSpecies.data &&
			allSpecies.data.length > 0 &&
			speciesId >= BigInt(allSpecies.data.length)
		) {
			setSpeciesId(0n);
		}
	}, [allSpecies.data, speciesId]);

	const handleSpeciesChange = (id: number) => setSpeciesId(BigInt(id));

	const canMint = dinoName.length > 0 && (allSpecies.data?.length ?? 0) > 0;

	const { mintModal, closeMintModal } = useStore();

	return (
		<Dialog open={mintModal} onOpenChange={closeMintModal}>
			<DialogContent>
				<DialogTitle />

				<Box className="flex flex-col gap-2">
					<input
						value={dinoName}
						onChange={(e) => setDinoName(e.target.value)}
						placeholder="Dino name"
					/>

					<Box className="flex flex-wrap gap-3">
						{allSpecies.data?.map((species, idx) => (
							<label key={idx} className="flex items-center gap-2 cursor-pointer">
								<input
									type="radio"
									name="species"
									checked={speciesId === BigInt(idx)}
									onChange={() => handleSpeciesChange(idx)}
								/>
								<span>{species.name}</span>
							</label>
						))}
						{!allSpecies.data?.length && (
							<span className="text-sm text-gray-500">Loading species…</span>
						)}
					</Box>
				</Box>

				<ButtonBase
					className="px-2 py-1 bg-white text-black"
					disabled={!canMint}
					onClick={async () => {
						await mint.writeContractAsync({ args: [{ name: dinoName, speciesId }] });
						dinosOfOwner.refetch();

						closeMintModal();
					}}
				>
					Mint
				</ButtonBase>
			</DialogContent>
		</Dialog>
	);
};

export { MintModal };
