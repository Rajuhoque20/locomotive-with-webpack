import { create } from "zustand";
export const useDADGraphStore = create((set) => ({
  selectedOptions: [
    "coupler_force",
    "total_traction_force",
    "total_braking_force",
    "energy_consumption",
  ],
  graphData: [[], [], [], []],
  setSelectedOptions: (option, pos) =>
    set((state) => {
      const updatedData = state.selectedOptions?.map((item, index) => {
        if (index === pos) {
          if (option) {
            return option;
          }
        }
        return item;
      });
      return { selectedOptions: updatedData };
    }),
  setGraphData: (data, pos) =>
    set((state) => {
      const updatedData = state.graphData?.map((item, index) => {
        if (index === pos) {
          if (data) {
            return data;
          }
        }
        return item;
      });
      return { graphData: updatedData };
    }),
}));
