import { create } from "zustand";



interface DemoCalState {
  currentCal: number;
  addition: (add: number) => void;
  substraction: (sub: number) => void;
  multiplication: (mul: number) => void;
  division: (div: number) => void;
  clear: () => void;
}

export const useDemoCal = create<DemoCalState>((set) => ({
  currentCal: 0,

  addition: (add) => {
    set((state) => ({ currentCal: state.currentCal + add }));
  },
  substraction: (sub) => {
    set((state) => ({ currentCal: state.currentCal - sub }));
  },
  multiplication: (mul) => {
    set((state) => ({ currentCal: state.currentCal * mul }));
  },
  division: (div) => {
    set((state) => ({ currentCal: state.currentCal / div }));
  },
  clear: () => {
    set({ currentCal: 0 });
  },
}));
