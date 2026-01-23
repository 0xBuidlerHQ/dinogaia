import { useWriteDinoAccountFactoryMintWithAccount } from "@0xbuidlerhq/dinogaia.contracts";

const useDinoFactoryActions = () => {
	const { writeContractAsync: mintDinoWithAccount } = useWriteDinoAccountFactoryMintWithAccount();

	return { mintDinoWithAccount };
};

export { useDinoFactoryActions };
