import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type StoreState = {
	activeDinoId: bigint | null;
	setActiveDinoId: (id: bigint | null) => void;
};

export const useStore = create<StoreState>()(
	persist(
		(set) => ({
			activeDinoId: null,
			setActiveDinoId: (id) => set({ activeDinoId: id }),
		}),
		{
			name: "dinogaia-store",
			storage: createJSONStorage(() => localStorage, {
				replacer: (_key, value) => (typeof value === "bigint" ? `${value.toString()}n` : value),
				reviver: (_key, value) =>
					typeof value === "string" && /^\d+n$/.test(value) ? BigInt(value.slice(0, -1)) : value,
			}),
		},
	),
);
