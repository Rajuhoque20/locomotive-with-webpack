import { create } from "zustand";
export const useDADStore = create((set) => ({
  screen: "main",
  setScreen: (val) => set((state) => ({ screen: val })),
}));
