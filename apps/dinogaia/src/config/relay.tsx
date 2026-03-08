"use client";

import { createRelay } from "@0xbuidlerhq/relay";
import { toastPrimitive } from "@0xbuidlerhq/ui/shadcn/components/toaster";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H6 } from "@0xbuidlerhq/ui/system/base/typography";
import React, { type PropsWithChildren } from "react";

const buyShopItem = createRelay<{}, {}, {}>("relay-buyShopItem");
const claimSalary = createRelay<{}, {}, {}>("relay-claimSalary");

const Relays = {
	buyShopItem,
	claimSalary,
};

type RelayComponentProps = {
	relay: typeof buyShopItem | typeof claimSalary;
};
const RelayComponent = (props: RelayComponentProps) => {
	const { activeRelayStepState } = props.relay.useRelay();

	React.useEffect(() => {
		if (!activeRelayStepState?.promise) return;

		toastPrimitive.custom(() => (
			<StepPromiseToast relay={props.relay} stepIndex={activeRelayStepState.index} />
		));
	}, [activeRelayStepState?.promise]);

	return null;
};

const StepPromiseToast = (props: { stepIndex: number } & RelayComponentProps) => {
	const { stepsState, stepsBase } = props.relay.useRelay();
	const stepState = stepsState[props.stepIndex];
	const stepBase = stepsBase[props.stepIndex];

	if (!stepState) return null;

	const statusLabel: Record<string, string> = {
		idle: "Waiting",
		loading: "Processing",
		success: "Done",
		error: "Failed",
		disabled: "Disabled",
	};

	const details =
		stepState.status === "loading"
			? "Waiting for the relay to finish."
			: stepState.status === "success"
				? "Step completed successfully."
				: stepState.status === "error"
					? "There was an error in this step."
					: stepState.status === "idle"
						? "Queued for execution."
						: "Step is currently disabled.";

	return (
		<Box className="flex flex-col gap-1 rounded-xs border border-[#a3e635]/25 bg-muted p-3 shadow-lg">
			<Box className="flex items-center justify-between">
				<H6 className="text-[#a3e635] tracking-tighter">
					{stepBase?.id ?? `Step ${props.stepIndex + 1}`}
				</H6>
				<Box className="text-[0.6rem] uppercase tracking-[0.3em] text-[#a3e635]/80">
					{statusLabel[stepState.status] ?? stepState.status}
				</Box>
			</Box>
			<Box className="text-[0.85rem] text-muted-foreground">{details}</Box>
		</Box>
	);
};

const RelayProvider = (props: PropsWithChildren) => {
	return (
		<>
			<RelayComponent relay={Relays.buyShopItem} />
			<RelayComponent relay={Relays.claimSalary} />

			{props.children}
		</>
	);
};

export { Relays, RelayComponent, RelayProvider };
