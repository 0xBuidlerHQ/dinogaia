import { createRelay } from "@0xbuidlerhq/relay/useRelay";

const createConnectButton = () => {
	const { useRelay, createRelayStep, RelayStepSuccess, RelayStepError } = createRelay<{}, {}, {}>();

	return {
		useRelay,
		createRelayStep,
		RelayStepSuccess,
		RelayStepError,
	};
};

export { createConnectButton };
