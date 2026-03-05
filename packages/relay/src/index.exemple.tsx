import {
	createConnectButtonStepper,
	type DefaultActionStepBase,
	type DefaultActionStepError,
	type DefaultActionStepSuccess,
} from "@0xbuidlerhq/relay/useConnectButtonActions";

type ConnectButtonActionsOptions = {
	ActionStepBase: DefaultActionStepBase;
	ActionStepSuccess: DefaultActionStepSuccess;
	ActionStepError: DefaultActionStepError;
};

const createConnectButton = <T extends ConnectButtonActionsOptions>() => {
	const {
		useStepperStore: useConnectButtonActions,
		createStep: createConnectButtonActionStep,
		ActionError,
		ActionSuccess,
	} = createConnectButtonStepper<
		T["ActionStepBase"],
		T["ActionStepSuccess"],
		T["ActionStepError"]
	>();

	return {
		useConnectButtonActions,
		createConnectButtonActionStep,
		ActionError,
		ActionSuccess,
	};
};

export { createConnectButton };
