import create from "zustand";

export interface ZustandCounterState {
  value: number;
  increment: () => void;
}

const useZustandCounter = create<ZustandCounterState>((set) => ({
  value: 0,
  increment: () =>
    set((state: ZustandCounterState) => ({ value: state.value + 1 })),
}));

export default useZustandCounter;
