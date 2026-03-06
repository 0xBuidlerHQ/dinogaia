import { create } from "zustand";

/**
 * @dev A base stage in the pipeline process.
 * This represents a single stage, with an ID, a function to execute, and an optional disabled flag.
 * The generic `B` is for extra metadata, `S` is for success payload, and `E` is for error payload.
 */
type StageBase<B, S, _> = B & {
	id: string;
	fn: () => Promise<S>;
	disabled?: boolean | undefined;
};

/**
 * @dev Possible statuses a stage can have.
 */
type StageStatus = "idle" | "loading" | "success" | "error" | "disabled";

/**
 * @dev The state of a single stage with discriminated union based on status.
 */
type StageStateSuccess<S> = {
	index: number;
	status: "success";
	payload: S;
};

type StageStateError<E> = {
	index: number;
	status: "error";
	payload: E;
};

type StageStateOther = {
	index: number;
	status: "idle" | "loading" | "disabled";
	payload?: undefined;
};

type StageState<S, E> = StageStateSuccess<S> | StageStateError<E> | StageStateOther;

/**
 * @dev Cached state of a stage (used when restoring state later).
 * It is the same as StageState but without the index.
 */
type CachedStageStateSuccess<S> = Omit<StageStateSuccess<S>, "index">;

type CachedStageStateError<E> = Omit<StageStateError<E>, "index">;

type CachedStageStateOther = Omit<StageStateOther, "index">;

type CachedStageState<S, E> =
	| CachedStageStateSuccess<S>
	| CachedStageStateError<E>
	| CachedStageStateOther;

/**
 * @dev Configuration options for the pipeline.
 * - `name`: Identifier for the pipeline.
 * - `autoExecute`: Whether stages should automatically execute one after another.
 * - `executeOnNext`: Whether the next stage should be executed when moving to it.
 */
type PipelineConfig = {
	name: string;
	autoExecute?: boolean;
	executeOnNext?: boolean;
};

/**
 * @dev The full state of the pipeline, including stages, active stage, and configuration.
 */
type PipelineState<B, S, E> = {
	activeStage: number;
	baton: StageState<S, E>[];
	stages: StageBase<B, S, E>[];
	activeStageState: StageState<S, E> | undefined;
	activeStageBase: StageBase<B, S, E> | undefined;
	isRunning: boolean;
	isDone: boolean;
	isError: boolean;
	config: PipelineConfig;
};

/**
 * @dev Actions the pipeline can perform.
 */
type PipelineActions<B, S, E> = {
	executeStage: (stageIndex: number) => void;

	setActiveStage: (stage: number) => void;
	setBaton: (state: StageState<S, E>[]) => void;
	setStages: (state: StageBase<B, S, E>[]) => void;
	setIsRunning: (isRunning: boolean) => void;
	setIsDone: (isDone: boolean) => void;
	setIsError: (isError: boolean) => void;

	start: () => void;
	resume: () => void;
	retry: () => void;
	next: () => void;
	prev: () => void;
	reset: () => void;

	initialize: (stages: StageBase<B, S, E>[], newConfig?: PipelineConfig) => void;
	initializeFromCache: (
		cachedState: CachedStageState<S, E>[],
		stages: StageBase<B, S, E>[],
		newConfig?: PipelineConfig,
	) => void;
};

/**
 * @dev The complete Zustand store type that holds both state and actions.
 *
 * This defines the overall shape of the store, which includes both the
 * current state of the pipeline and the actions that manipulate it.
 *
 * The generics used are:
 * - `B`: Represents any extra metadata or data that is associated with a stage (can be an object type).
 * - `S`: Represents the success payload type when a stage completes successfully.
 * - `E`: Represents the error payload type when a stage fails.
 */
type PipelineStore<B, S, E> = PipelineState<B, S, E> & PipelineActions<B, S, E>;

/**
 * @dev Return type of createRelay, containing the store hook and stage creation helper.
 */
type RelayStoreReturn<B, S, E> = {
	usePipelineStore: () => PipelineStore<B, S, E>;
	createStage: (props: Omit<StageBase<B, S, E>, "index">) => StageBase<B, S, E>;

	ActionSuccess: (data: S) => S;
	ActionError: (data: E) => E;
};

/**
 * @dev Creates a Zustand store for managing a stage-driven pipeline.
 *
 * This function returns an object with:
 * - `usePipelineStore`: A Zustand hook for accessing pipeline state and actions
 * - `createStage`: A helper function to create properly typed stages for this specific store
 *
 * The generics used are:
 * - `B`: Represents any extra metadata or data that is associated with a stage.
 * - `S`: Represents the success payload type when a stage completes successfully.
 * - `E`: Represents the error payload type when a stage fails.
 */
const createRelay = <B, S, E>(): RelayStoreReturn<B, S, E> => {
	// Create the Zustand store
	const usePipelineStore = create<PipelineStore<B, S, E>>()((set, get) => ({
		activeStage: 0,
		baton: [],
		stages: [],
		activeStageState: undefined,
		activeStageBase: undefined,
		isRunning: false,
		isDone: false,
		isError: false,
		config: {
			name: "",
			autoExecute: true,
			executeOnNext: false,
		},

		// State setters
		setActiveStage: (stage) => {
			const state = get();
			set({
				activeStage: stage,
				activeStageState: state.baton[stage],
				activeStageBase: state.stages[stage],
			});
		},
		setBaton: (state) => {
			const currentState = get();
			set({
				baton: state,
				activeStageState: state[currentState.activeStage],
			});
		},
		setStages: (state) => {
			const currentState = get();
			set({
				stages: state,
				activeStageBase: state[currentState.activeStage],
			});
		},
		setIsRunning: (isRunning) => set({ isRunning }),
		setIsDone: (isDone) => set({ isDone }),
		setIsError: (isError) => set({ isError }),

		// Initialize function
		initialize: (stages, newConfig) => {
			const initialBaton: StageState<S, E>[] = stages.map((_, index) => ({
				index,
				status: "idle",
			}));

			const stageDefinitions: StageBase<B, S, E>[] = stages.map((item, index) => ({
				index,
				...item,
			}));

			set({
				baton: [...initialBaton],
				stages: [...stageDefinitions],
				config: { ...get().config, ...newConfig },
				activeStage: 0,
				activeStageState: initialBaton[0],
				activeStageBase: stageDefinitions[0],
				isRunning: false,
				isDone: false,
				isError: false,
			});
		},

		/**
		 * @dev Restores the pipeline using a cached baton.
		 * This allows resuming the relay mid-flight.
		 *
		 * - It merges saved progress (`cachedState`) with the new stage definitions (`stageDefinitions`).
		 * - Automatically determines the next stage to run based on success/error states.
		 * - Marks the pipeline as done if every stage already completed.
		 *
		 * @param cachedState - Previously saved baton data for each stage.
		 * @param stageDefinitions - The stage definitions that should be executed.
		 * @param newConfig - Optional configuration overrides.
		 */
		initializeFromCache: (
			cachedState: CachedStageState<S, E>[],
			stageDefinitions: StageBase<B, S, E>[],
			newConfig?: PipelineConfig,
		) => {
			const stages: StageBase<B, S, E>[] = stageDefinitions.map((item, index) => ({
				index,
				...item,
			}));

			let activeStage = 0;
			let isError = false;

			// Merge cached baton with the latest stage definitions
			const baton: StageState<S, E>[] = stages.map((_, index) => {
				const cachedStage = cachedState?.[index];

				if (cachedStage) {
					if (cachedStage.status === "success") activeStage = index + 1;
					if (cachedStage.status === "error") isError = true;

					return {
						...cachedStage,
						index,
					};
				}

				return {
					index,
					status: "idle",
				};
			});

			// Check if all stages are done
			const isDone = activeStage === stages.length;

			// Make sure we don't go out of bounds
			const safeActiveStage = Math.min(activeStage, stages.length - 1);

			set({
				baton: [...baton], // Set the restored baton
				stages: [...stages], // Set the stage definitions
				config: { ...get().config, ...newConfig }, // Merge config
				activeStage: safeActiveStage, // Resume from last completed stage
				activeStageState: baton[safeActiveStage], // Set active stage state
				activeStageBase: stages[safeActiveStage], // Set active stage definition
				isRunning: false, // Initially not running
				isDone: isDone, // Mark as done if all stages were completed
				isError: isError, // Mark as error if any stage had an issue
			});
		},

		/**
		 * @dev Executes a stage by running its function and updating the baton accordingly.
		 */
		executeStage: (stageIndex: number) => {
			console.log("Executing stage:", stageIndex);
			const state = get();
			const { stages, baton, config } = state;

			const stageDefinition = stages[stageIndex];
			const stageState = baton[stageIndex];

			if (!stageDefinition || !stageState) return;

			// Create a new loading state for the current stage
			const loadingState: StageState<S, E> = {
				index: stageIndex,
				status: "loading",
			};

			// Update baton to mark the stage as loading
			baton[stageIndex] = loadingState;

			// If the stage being executed is the active stage, update activeStageState too
			const updates: Partial<PipelineState<B, S, E>> = {
				baton: [...baton],
			};

			if (stageIndex === state.activeStage) {
				updates.activeStageState = loadingState;
			}

			set(updates);

			stageDefinition
				.fn()
				.then((data) => {
					// Create success state with properly typed payload
					const successState: StageStateSuccess<S> = {
						index: stageIndex,
						status: "success",
						payload: data,
					};

					baton[stageIndex] = successState;

					// Prepare updates
					const successUpdates: Partial<PipelineState<B, S, E>> = {
						baton: [...baton],
					};

					// If the stage being executed is the active stage, update activeStageState too
					if (stageIndex === state.activeStage) {
						successUpdates.activeStageState = successState;
					}

					set(successUpdates);

					if (stageIndex === stages.length - 1) {
						state.setIsRunning(false);
						state.setIsDone(true);
					} else if (config.autoExecute) {
						state.next();
					}
				})
				.catch((error) => {
					// Create error state with properly typed payload
					const errorState: StageStateError<E> = {
						index: stageIndex,
						status: "error",
						payload: error as E,
					};

					baton[stageIndex] = errorState;

					// Prepare updates
					const errorUpdates: Partial<PipelineState<B, S, E>> = {
						baton: [...baton],
					};

					// If the stage being executed is the active stage, update activeStageState too
					if (stageIndex === state.activeStage) {
						errorUpdates.activeStageState = errorState;
					}

					set(errorUpdates);
					state.setIsRunning(false);
					state.setIsError(true);
				});
		},

		/**
		 * @dev Starts executing the first stage of the pipeline.
		 * If there are stages to run, it marks the relay as running
		 * and executes the first stage (index 0).
		 */
		start: () => {
			const state = get();
			if (state.baton.length > 0) {
				state.setIsRunning(true); // Mark as running
				state.executeStage(0); // Start from the first stage
			}
		},

		/**
		 * @dev Resumes execution from the current active stage.
		 * If stages exist, it marks the relay as running and runs that stage.
		 */
		resume: () => {
			const state = get();
			if (state.baton.length > 0) {
				state.setIsRunning(true);
				state.executeStage(state.activeStage); // Resume from where we left off
			}
		},

		/**
		 * @dev Retries the current stage if it's not already running.
		 * If there was an error before, it resets the baton entry and retries.
		 */
		retry: () => {
			const state = get();

			if (!state.isRunning) {
				state.setIsError(false); // Clear any error
				state.setIsRunning(true); // Start running again
				state.executeStage(state.activeStage); // Retry current stage
			}
		},

		/**
		 * @dev Moves to the next stage in the sequence.
		 * If 'executeOnNext' is enabled in the config, it runs that stage immediately.
		 */
		next: () => {
			const state = get();
			const { activeStage, config } = state;

			if (config.executeOnNext) {
				state.executeStage(activeStage);
			}

			if (activeStage < state.baton.length - 1) {
				const nextStage = activeStage + 1;
				state.setActiveStage(nextStage);

				if (!config.executeOnNext) {
					state.executeStage(nextStage); // Automatically execute the next stage if allowed
				}
			}
		},

		/**
		 * @dev Moves to the previous stage in the sequence, if possible.
		 * Does not execute it automatically, just updates the active stage.
		 */
		prev: () => {
			const state = get();
			if (state.activeStage > 0) {
				state.setActiveStage(state.activeStage - 1);
			}
		},

		/**
		 * @dev Returns the current pipeline state.
		 * This allows external components to read the current progress.
		 */
		get: () => {
			const state = get();
			return state;
		},

		/**
		 * @dev Resets the pipeline to its initial state.
		 * Clears the baton, stage definitions, and status flags.
		 */
		reset: () => {
			const state = get();
			state.setBaton([]); // Clear the baton
			state.setStages([]); // Clear all stage definitions
			state.setActiveStage(0); // Reset to stage 0
			set({
				activeStageState: undefined,
				activeStageBase: undefined,
			});
			state.setIsRunning(false); // Mark as not running
			state.setIsDone(false); // Mark as not done
			state.setIsError(false); // Clear any error state
		},
	}));

	// Create a properly typed stage creation helper
	const createStage = (props: Omit<StageBase<B, S, E>, "index">) => props as StageBase<B, S, E>;

	const ActionSuccess = (data: S) => data;
	const ActionError = (data: E) => data;

	// Return the store hook and stage creation helper
	return {
		usePipelineStore,
		createStage,

		ActionSuccess,
		ActionError,
	};
};

export { createRelay };

// No longer need the standalone createStage function since
// each store instance returns its own typed createStage

export type {
	StageBase,
	StageState,
	StageStateSuccess,
	StageStateError,
	StageStateOther,
	StageStatus,
	PipelineConfig,
	PipelineStore,
	RelayStoreReturn,
	CachedStageState,
	CachedStageStateSuccess,
	CachedStageStateError,
	CachedStageStateOther,
};
