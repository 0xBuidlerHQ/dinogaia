import { Dialog, DialogContent, DialogTitle } from "@0xbuidlerhq/ui/shadcn/components/dialog";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { useMint } from "@features/dinos/mint/useMint";
import { useDinogaia } from "@providers/dinogaia";
import { useStore } from "@stores/useStore";
import React from "react";

const MintModal = () => {
	const { mint } = useMint();

	const { q, species } = useDinogaia();

	const [dinoName, setDinoName] = React.useState("");
	const [speciesId, setSpeciesId] = React.useState(0n);

	const canMint = dinoName.length > 0 && Boolean(speciesId);

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
						{species?.map((spec) => {
							return (
								<label key={spec.speciesId} className="flex items-center gap-2 cursor-pointer">
									<input
										type="radio"
										value={spec.speciesId.toString()}
										checked={speciesId === spec.speciesId}
										onChange={() => setSpeciesId(spec.speciesId)}
									/>
									<span>{spec.name}</span>
								</label>
							);
						})}

						{!species?.length && <span className="text-sm text-gray-500">Loading species…</span>}
					</Box>
				</Box>

				<ButtonBase
					className="px-2 py-1 bg-white text-black"
					disabled={!canMint}
					onClick={async () => {
						await mint.writeContractAsync({
							args: [{ name: dinoName, speciesId: BigInt(speciesId) }],
						});
						q.qMyDinos.refetch();

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
