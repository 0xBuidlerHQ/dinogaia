"use client";

import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H5 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { type Dino, DinoFactory } from "@features/dinos/hooks/useDinoFactory";
import { useStore } from "@stores/useStore";

const CreateDino = () => {
	return <Box>Create +</Box>;
};

const MyDino = (props: Dino) => {
	const { dinoId } = props;

	const { activeDinoId, setActiveDinoId } = useStore();

	return (
		<Box>
			<ButtonBase
				className={cn(activeDinoId === dinoId ? "bg-red-500" : "")}
				onClick={() => setActiveDinoId(dinoId)}
			>
				<H5>{props.dinoGenesis.name}</H5>
			</ButtonBase>
		</Box>
	);
};

const MyDinos = () => {
	const { dinosOfOwner } = DinoFactory.useDinoFactory();

	return (
		<Box className="flex gap-2">
			{dinosOfOwner.data?.map((dino) => (
				<Box key={dino.dinoId}>
					<MyDino {...dino} />
				</Box>
			))}

			<CreateDino />
		</Box>
	);
};

export { MyDinos };

// const MintButton = () => {
// 	const { mint } = DinoFactory.useMint();

// 	const { dinosOfOwner } = DinoFactory.useDinoFactory();
// 	const { allSpecies } = SpeciesRegistry.useAllSpecies();

// 	const [dinoName, setDinoName] = React.useState("");
// 	const [speciesId, setSpeciesId] = React.useState<bigint>(0n);

// 	React.useEffect(() => {
// 		if (
// 			allSpecies.data &&
// 			allSpecies.data.length > 0 &&
// 			speciesId >= BigInt(allSpecies.data.length)
// 		) {
// 			setSpeciesId(0n);
// 		}
// 	}, [allSpecies.data, speciesId]);

// 	const handleSpeciesChange = (id: number) => setSpeciesId(BigInt(id));

// 	const canMint = dinoName.length > 0 && (allSpecies.data?.length ?? 0) > 0;

// 	return (
// 		<Box>
// 			<Box className="flex flex-col gap-2">
// 				<input
// 					value={dinoName}
// 					onChange={(e) => setDinoName(e.target.value)}
// 					placeholder="Dino name"
// 				/>

// 				<Box className="flex flex-wrap gap-3">
// 					{allSpecies.data?.map((species, idx) => (
// 						<label key={idx} className="flex items-center gap-2 cursor-pointer">
// 							<input
// 								type="radio"
// 								name="species"
// 								checked={speciesId === BigInt(idx)}
// 								onChange={() => handleSpeciesChange(idx)}
// 							/>
// 							<span>{species.name}</span>
// 						</label>
// 					))}
// 					{!allSpecies.data?.length && (
// 						<span className="text-sm text-gray-500">Loading species…</span>
// 					)}
// 				</Box>
// 			</Box>

// 			<ButtonBase
// 				className="px-2 py-1 bg-white text-black"
// 				disabled={!canMint}
// 				onClick={async () => {
// 					await mint.writeContractAsync({ args: [{ name: dinoName, speciesId }] });
// 					dinosOfOwner.refetch();
// 				}}
// 			>
// 				Mint
// 			</ButtonBase>
// 		</Box>
// 	);
// };
