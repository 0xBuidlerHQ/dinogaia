"use client";

import { createRelay } from "@0xbuidlerhq/relay";
import { toastPrimitive } from "@0xbuidlerhq/ui/shadcn/components/toaster";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H6 } from "@0xbuidlerhq/ui/system/base/typography";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import { IconX } from "@tabler/icons-react";
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

		const toastId = toastPrimitive.custom(
			(toastId) => (
				<StepPromiseToast
					relay={props.relay}
					toastId={toastId}
					stepIndex={activeRelayStepState.index}
				/>
			),
			{ duration: Infinity },
		);

		let successTimeout: ReturnType<typeof setTimeout> | null = null;

		const scheduleDismiss = () => {
			successTimeout = setTimeout(() => {
				toastPrimitive.dismiss(toastId);
				successTimeout = null;
			}, 2000);
		};

		activeRelayStepState.promise.then(
			() => {
				scheduleDismiss();
			},
			() => {
				// keep toast open when the relay step errors
			},
		);

		return () => {
			if (successTimeout) {
				clearTimeout(successTimeout);
			}
		};
	}, [activeRelayStepState?.promise, activeRelayStepState?.index]);

	return null;
};

const StepPromiseToast = (
	props: { stepIndex: number; toastId: string | number } & RelayComponentProps,
) => {
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
		<Box className="flex flex-col gap-1 rounded-xs border border-brand/25 bg-muted p-3 shadow-lg">
			<ButtonBase onClick={() => toastPrimitive.dismiss(props.toastId)}>
				<IconX />
			</ButtonBase>

			<Box className="flex items-center justify-between">
				<H6 className="text-brand tracking-tighter">
					{stepBase?.id ?? `Step ${props.stepIndex + 1}`}
				</H6>
				<Box className="text-[0.6rem] uppercase tracking-[0.3em] text-brand/80">
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
