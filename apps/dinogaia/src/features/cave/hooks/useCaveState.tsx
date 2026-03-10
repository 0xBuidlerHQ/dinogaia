"use client";

import { useDinogaia } from "@providers/dinogaia";

const useCaveState = () => {
	const { currentDino } = useDinogaia();

	return { caveState: currentDino.caveState };
};

export { useCaveState };
