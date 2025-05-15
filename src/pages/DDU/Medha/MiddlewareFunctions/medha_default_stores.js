import { create } from "zustand";

export const useLocoStatusStore = create((set) => ({
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
  ],  // Initial state
  //   ex to set      setCurrentData([{ id: 5, label: "NEW LOCO" }]); // Updating store

  locodata: [
    { id: 1, lable: "LOCO" },
    { id: 2, lable: "LOCO" },
    { id: 3, lable: "LOCO" },
    { id: 4, lable: "LOCO" },
  ],
  
  setCurrentData: (newData) => set({ currentData: newData }),
  
  setLocoData: (newData) => set({ locodata: newData }),
}));

export const useLocoBrowseStore = create((set) => ({
  mVDBMLoco: [
    {
      id: 1,
      trainNumber: 31427
    }
  ],

  mVDBMLocoSS: [
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
  visible: {},
  currentVDBML: {},
  setcurrentVDBML: (payload) => set({ currentVDBML: payload }),
  setcurrentSSvisible: (payload) => set({ visible: payload }),
  setmVDBMLoco:(payload) => set({mVDBMLoco:payload}),
  setmVDBMLocoSS:(payload) => set({mVDBMLocoSS:payload})
}));

export const settingInformationstore = create((set) => ({
  settingInformation: {
    driverId: '',
    trainNumber: '',
    trainLoad: '',
    sectionName: '',
    date: '',
    time: '',
    locoType: '',
    shedName: '',
    password: '',
    locoType: '',
    shedName: '',
    locoNumber: ''
  },

  setInformation: (payload) => set((state) => ({
    settingInformation: { ...state.settingInformation, ...payload }
  }))
}));

export const dateEntryStore = create((set) => ({
  datetimevalues: {
    day: "00",
    month: "00",
    year: "00",
    hour: "00",
    minute: "00",
    second: "00",
  },
  segments: ["day", "month", "year", "hour", "minute", "second"],
  activeIndex: 0,
  setValues: (payload) => set((state) => ({
    datetimevalues: { ...state.datetimevalues, ...payload }
  })),
  setactiveIndex: (payload) => set({ activeIndex: payload }),

}))

export const IsolateStore = create((set) => ({
  IsolateConditions: {
    reverserNeutral: true,
    mchIdle: true,
    locospeedzero: true,
    pantoDown: true
  },
  TractionMotors: [
    {
      id: 1,
      lable: 'TRACTION MOTOR1',
      status: 'CUTIN'
    },
    {
      id: 2,
      lable: 'TRACTION MOTOR2',
      status: 'CUTIN'
    },
    {
      id: 3,
      lable: 'TRACTION MOTOR3',
      status: 'CUTIN'

    },
    {
      id: 4,
      lable: 'TRACTION MOTOR4',
      status: 'CUTIN'

    },
    {
      id: 5,
      lable: 'TRACTION MOTOR5',
      status: 'CUTIN'

    },
    {
      id: 6,
      lable: 'TRACTION MOTOR6',
      status: 'CUTIN'

    }
  ],
  LineConverters: [
    {
      id: 1,
      lable: 'BOGIE1 - LINE CONV 1',
      status: 'CUTIN'
    },
    {
      id: 2,
      lable: 'BOGIE1 - LINE CONV 2',
      status: 'CUTIN'
    },
    {
      id: 3,
      lable: 'BOGIE2 - LINE CONV 1',
      status: 'CUTIN'

    },
    {
      id: 4,
      lable: 'BOGIE2 - LINE CONV 2',
      status: 'CUTIN'

    }
  ],
  AuxConverters:[
    {
      id: 1,
      lable: 'AUXILIARY CONVERTER1',
      status: 'CUTIN'
    },
    {
      id: 2,
      lable: 'AUXILIARY CONVERTER1',
      status: 'CUTIN'
    },
    {
      id: 3,
      lable: 'AUXILIARY CONVERTER3',
      status: 'CUTIN'

    },
  ],
  selected: null,
  isolateErrors: [],
  setIsolateErrors: (payload) => set({ isolateErrors: payload }),
  setSelected: (payload) => set({ selected: payload }),
  toggleMotorStatus: (id) =>
    set((state) => ({
      TractionMotors: state.TractionMotors.map(motor =>
        motor.id === id
          ? { ...motor, status: motor.status === 'CUTIN' ? 'CUTOUT' : 'CUTIN' }
          : motor
      )
    })),


  toggleConverterStatus: (id) =>
    set((state) => ({
      LineConverters: state.LineConverters.map(converter =>
        converter.id === id
          ? { ...converter, status: converter.status === 'CUTIN' ? 'CUTOUT' : 'CUTIN' }
          : converter
      )
    })),

    toggleAuxStatus: (id) =>
      set((state) => ({
        AuxConverters: state.AuxConverters.map(converter =>
          converter.id === id
            ? { ...converter, status: converter.status === 'CUTIN' ? 'CUTOUT' : 'CUTIN' }
            : converter
        )
      })),
  


}))

export const PageScrool = create((set)=>({
    pageScrool:0,
    setPageScrool: (payload) => set({ pageScrool: payload }),
  }))

export const SelfTest = create((set)=>({
   selfTestConditions:{
    locoSpeedZero:true,
    reverserIdle:true
   },
   selfTestErrors:[],
   dotChannels:[
      {
        id:1,
        name:'WSLIPAMP1>',
        status:''
      },
      {
        id:2,
        name:'WSLIPAMP2>',
        status:''
      },
      {
        id:3,
        name:'WSLIPAMP3>',
        status:''
      },
      {
        id:4,
        name:'WSLIPAMP4>',
        status:''
      },
      {
        id:5,
        name:'WSLIPAMP5>',
        status:''
      },
      {
        id:6,
        name:'WSLIPAMP6>',
        status:''
      },
      {
        id:7,
        name:'WSLIPAMP7>',
        status:''
      },
      {
        id:8,
        name:'WSLIPAMP8>',
        status:''
      },
      {
        id:9,
        name:'WSLIPAMP9>',
        status:''
      },
      {
        id:10,
        name:'WSLIPAMP10>',
        status:''
      },

   ],
   selectedChannel:1,
   meterValue:1,
   testsection:'output',
   testcurrentId:1,
   LcoutPutTest:[
    {
      id:1,
      test:'PRE-CONT>',
      status:'OFF'
    },
    {
      id:2,
      test:'LINE-CONT>',
      status:'OFF'
    },
    {
      id:3,
      test:'HFILT-CONT>',
      status:'OFF'
    },
    {
      id:4,
      test:'HFILT-ADP-CONT>',
      status:'OFF'
    },
    {
      id:5,
      test:'HFILT-DIS-CONT>',
      status:'OFF'
    }
   ],
   feedBackStatusTest:[
    {
      id:1,
      test:'PRE-CONT-NO<',
      status:'OFF'
    },
    {
      id:2,
      test:'LINE-CONT-NO<',
      status:'OFF'
    },
    {
      id:3,
      test:'HFILT-FBK<',
      status:'OFF'
    },
    {
      id:4,
      test:'HFILT-ADP-FBK<',
      status:'OFF'
    },
    {
      id:5,
      test:'HFILT-DIS-FBK<',
      status:'OFF'
    },
    {
      id:6,
      test:'PRE-CONT-NC<',
      status:'OFF'
    },
    {
      id:7,
      test:'LINE-CONT-NC<',
      status:'OFF'
    }

   ],
   AcfeedBackStatusTest:[
    {
      id:1,
      test:'54/4<',
      status:'OFF'
    },
    {
      id:2,
      test:'54/5<',
      status:'OFF'
    },
   ],
   AcoutPutTest:[
    {
      id:1,
      test:'54/4>',
      status:'OFF'
    },
    {
      id:2,
      test:'54/5>',
      status:'OFF'
    },
   ],
   setSelfTestErrors: (payload) => set({ selfTestErrors: payload }),
   setSelectedChannel: (payload) => set({ selectedChannel: payload }),
   setMeterValue: (payload) => set({ meterValue: payload }),
   updateDotChannelStatus: ({ id, status }) =>
    set((state) => ({
      dotChannels: state.dotChannels.map((channel) =>
        channel.id === id ? { ...channel, status } : channel
      ),
    })),
    settestcurrentId: (payload) => set({ testcurrentId: payload }),
    setTestsection: (payload) => set({ testsection: payload }),
    updateOutPutStatus: ({ id, status }) =>
      
      set((state) => ({
        LcoutPutTest: state.LcoutPutTest.map((test) =>
          test.id === id ? { ...test, status } : test
        ),
      })),
    updateFeedbackStatus: ({ id, status }) =>
        set((state) => ({
          feedBackStatusTest: state.feedBackStatusTest.map((test) =>
            test.id === id ? { ...test, status } : test
          ),
      })),


      updateACOutPutStatus: ({ id, status }) =>
      
        set((state) => ({
          AcoutPutTest: state.AcoutPutTest.map((test) =>
            test.id === id ? { ...test, status } : test
          ),
        })),
      updateACFeedbackStatus: ({ id, status }) =>
          set((state) => ({
            AcfeedBackStatusTest: state.AcfeedBackStatusTest.map((test) =>
              test.id === id ? { ...test, status } : test
            ),
        })),

}))

// const {selfTestConditions} = SelfTest()
