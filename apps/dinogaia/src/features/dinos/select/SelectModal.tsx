import { Dialog, DialogContent, DialogTitle } from "@0xbuidlerhq/ui/shadcn/components/dialog";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H4 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { DinoFactory } from "@features/dinos/hooks/useDinoFactory";
import { useStore } from "@stores/useStore";

const SelectModal = () => {
	const { dinosOfOwner } = DinoFactory.useDinoFactory();

	const { selectModal, closeSelectModal } = useStore();
	const { activeDinoId, setActiveDinoId } = useStore();

	const selectDino = (dinoId: bigint) => {
		if (activeDinoId === dinoId) return;

		setActiveDinoId(dinoId);
	};

	return (
		<Dialog open={selectModal} onOpenChange={closeSelectModal}>
			<DialogContent>
				<DialogTitle />

				<Box>
					{dinosOfOwner?.data?.map((item) => {
						const isDinoSelected = item.dinoId === activeDinoId;

						return (
							<Box key={item.dinoId}>
								<ButtonBase disabled={isDinoSelected} onClick={() => selectDino(item.dinoId)}>
									<Box className="flex justify-between">
										<H4>{item.dinoGenesis.name}</H4>
										<Box>{isDinoSelected && "Selected"}</Box>
									</Box>
								</ButtonBase>
							</Box>
						);
					})}
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export { SelectModal };
