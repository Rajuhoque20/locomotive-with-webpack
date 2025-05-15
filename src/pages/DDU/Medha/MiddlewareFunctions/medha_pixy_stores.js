import { create } from "zustand";

export const useLocoSSStore = create((set) => ({
  currentData: [
    { id: 1, subsystem: 'SS01 - MAIN POWER', status: 'HEALTHY' },
    { id: 2, subsystem: 'SS02 - AUXILIARY POWER', status: 'FAIL' },
    { id: 3, subsystem: 'SS03 - COOLING SYSTEM', status: 'HEALTHY' },
    { id: 4, subsystem: 'SS04 - BRAKING SYSTEM', status: 'NA' },
    { id: 5, subsystem: 'SS05 - PROPULSION', status: 'HEALTHY' },
    { id: 6, subsystem: 'SS06 - COMMUNICATIONS', status: 'HEALTHY' },
    { id: 7, subsystem: 'SS07 - CONTROL SYSTEM', status: 'FAIL' },
    { id: 8, subsystem: 'SS08 - SENSOR MODULE', status: 'HEALTHY' },
    { id: 9, subsystem: 'SS09 - EMERGENCY SYSTEM', status: 'NA' },
    { id: 10, subsystem: 'SS10 - MONITORING UNIT', status: 'HEALTHY' },
    { id: 11, subsystem: 'SS11 - ENERGY MANAGEMENT', status: 'FAIL' },
    { id: 12, subsystem: 'SS12 - CABIN SYSTEMS', status: 'HEALTHY' },
    { id: 13, subsystem: 'SS13 - NAVIGATION MODULE', status: 'HEALTHY' },
    { id: 14, subsystem: 'SS14 - LIGHTING SYSTEM', status: 'NA' },
    { id: 15, subsystem: 'SS15 - FIRE SAFETY', status: 'HEALTHY' },
    { id: 16, subsystem: 'SS16 - AIR CONDITIONING', status: 'FAIL' },
    { id: 17, subsystem: 'SS17 - DOOR CONTROL', status: 'HEALTHY' },
    { id: 18, subsystem: 'SS18 - PASSENGER DISPLAY', status: 'HEALTHY' },
    { id: 19, subsystem: 'SS19 - SECURITY SYSTEM', status: 'NA' },
  ],

  locoInfo: [
    { id: 1, lable: "LOCO", loconumber: '31427', status: '91' },
    { id: 2, lable: "LOCO", loconumber: '0000000', status: '99' },
  ],
  currentInfo: {},

  setCuurentInfo: (payload) => set({
    currentInfo: payload
  }),

  setCurrentLocoSSData: (newData) => set({ currentData: newData }),

  setLocoInfo: (newData) => set({ locoInfo: newData }),
}));

export const useVDBrowseMode = create((set) => ({

  browseLocos: [
    {
      id: 1,
      trainNumber: 31427,
      fault: 'FAULT',
      message: 'ISOLATION MESSAGE'
    },
    {
      id: 2,
      trainNumber: 31440,
      fault: 'FAULT',
      message: 'ISOLATION MESSAGE'
    }
  ],

  visible: {},
  currentBML: {},
  currentBMLLocoSS: [
    {
      id: 1,
      fc: 'F085',
      subsystem: 'SS07',
      message: 'AUX CONVERTER 2 AUXILARY CONVERTER 2 ISOLATED',
      status: 'SRIVING STILL POSSIBLE'
    },
    {
      id: 2,
      fc: 'F086',
      subsystem: 'SS08',
      message: 'AUX CONVERTER 4 AUXILARY CONVERTER 4 ISOLATED',
      status: 'SRIVING STILL POSSIBLE'
    }
  ],
  setVisibleInfo: (payload) => set({ visible: payload }),
  setcurrentBML: (payload) => set({ currentBML: payload }),
  setcurrentBMLLocoSS: (payload) => set({ currentBMLLocoSS: payload }),
  setbrowseLocos:(payload) => set({browseLocos:payload})
}));

export const useInchingMode = create((set) => ({
    inchingTestPayload:{
      speedzero:true,
      panraised:true,
      vcbclosed:true,
      ztelswclosed:true,
      throttleidle:true,
      reversermoved:true
    },
    setSpeed:0,
    actualSpeed:1,
    errors:[],
    setErrors: (payload) => set({ errors: payload }),
    setSetSpeed: (payload) => set({ setSpeed: payload }),
    setactualSpeed: (payload) => set({ actualSpeed: payload }),
}));
