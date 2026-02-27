import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type StoreState = {
	isLoaded: boolean;

	activeDinoId: bigint | undefined;
	setActiveDinoId: (id: bigint | undefined) => void;

	mintModal: boolean;
	openMintModal: () => void;
	closeMintModal: () => void;

	selectModal: boolean;
	openSelectModal: () => void;
	closeSelectModal: () => void;
};

export const useStore = create<StoreState>()(
	persist(
		(set) => ({
			isLoaded: false,

			activeDinoId: undefined,
			setActiveDinoId: (id) => set({ activeDinoId: id }),

			mintModal: false,
			openMintModal: () => set({ mintModal: true }),
			closeMintModal: () => set({ mintModal: false }),

			selectModal: false,
			openSelectModal: () => set({ selectModal: true }),
			closeSelectModal: () => set({ selectModal: false }),
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

type LoaderState = {
	isLoading: boolean;
	setIsLoading: (loading: boolean) => void;
};

const useLoader = create<LoaderState>()((set) => ({
	isLoading: true,
	setIsLoading: (isLoading) => set({ isLoading }),
}));

export { useLoader };
