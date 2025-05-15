import { create } from "zustand";
import websocket from "../../../services/Websocket";
import { MEDHA_TOPICS } from "./websocketTopics";

export const useWebSocketStore = create((set) => ({
  COMMONVARIABLES_DATA: {},
  HOMESCREEN_DATA: {},
  LOCOSTATUS_DATA: [],
  LIFETIME_DATA: {},
  MONTHLY_DATA: {},
  TRACTIONMOTOR_DATA: {},
  TRIP_DATA: {},
  ACTIVE_FAULTS: [],
  INACTIVE_FAULTS: [],
  ENTIRE_FAULTS: [],
  INCHINGMODE_DATA: {},
  BROWSE_LOCOS: [],
  LOCO_SS: [],
  subscriptions: {},

  updateData: (topic, payload) => {
    set((state) => {
      switch (topic) {
        case MEDHA_TOPICS.COMMONVARIABLES:
          return { ...state, COMMONVARIABLES_DATA: payload };
        case MEDHA_TOPICS.HOMESCREEN:
          return { ...state, HOMESCREEN_DATA: payload };
        case MEDHA_TOPICS.LOCOSTATUS:
          return { ...state, LOCOSTATUS_DATA: payload };
        case MEDHA_TOPICS.LIFETIMEDATA:
          return { ...state, LIFETIME_DATA: payload };
        case MEDHA_TOPICS.MONTHLYDATA:
          return { ...state, MONTHLY_DATA: payload };
        case MEDHA_TOPICS.TRACTIONMOTOR:
          return { ...state, TRACTIONMOTOR_DATA: payload };
        case MEDHA_TOPICS.TRIPDATA:
          return { ...state, TRIP_DATA: payload };
        case MEDHA_TOPICS.ACTIVEFAULT:
          return { ...state, ACTIVE_FAULTS: payload };
        case MEDHA_TOPICS.INACTIVEFAULTS:
          return { ...state, INACTIVE_FAULTS: payload };
        case MEDHA_TOPICS.ENTIREFAULTS:
          return { ...state, ENTIRE_FAULTS: payload };
        case MEDHA_TOPICS.INCHINGMODE:
          return { ...state, INCHINGMODE_DATA: payload };
        case MEDHA_TOPICS.BROWSELOCOS:
          return { ...state, BROWSE_LOCOS: payload };
        case MEDHA_TOPICS.BROWSELOCOSSS:
          return { ...state, LOCO_SS: payload };
        default:
          return state;
      }
    });
  },

  sendData: (topic, payload) => {
    websocket.publish(topic, payload);
  },

  connectWebSocket: (topicsWithParams) => {
    const unsubscribeFns = {};

    topicsWithParams.forEach(({ topic, data }) => {
      const callback = (event) => {

        useWebSocketStore.getState().updateData(topic, event);
      };
        if(data){
          websocket.subscribe(topic, callback,data);
        }else{
          websocket.subscribe(topic, callback);

        }

    

      // Store unsubscribe function
      unsubscribeFns[topic] = () => websocket.unsubscribe(topic, data, callback);
    });

    set({ subscriptions: unsubscribeFns });
  },

  unsubscribeWebSocket: () => {
    const { subscriptions } = useWebSocketStore.getState();
    Object.values(subscriptions).forEach((unsubscribe) => unsubscribe());
    set({ subscriptions: {} }); // Clear subscriptions
  },

}));




// example to handle dataMetersMenus
// const connectWebSocket = useWebSocketStore((state) => state.connectWebSocket);
// const unsubscribeWebSocket = useWebSocketStore((state) => state.unsubscribeWebSocket);
// useEffect(() => {
//     connectWebSocket([
//       { topic: topics.COMMONVARIABLES, data: { userId: 123, type: "live" } },
//       { topic: topics.HOMESCREEN, data: { dashboard: "summary" } },
//       { topic: topics.LOCOSTATUS, data: { locoId: "LOCO_001" } },
//     ]);

//     return () => {
//       unsubscribeWebSocket(); // Unsubscribe from all topics
//     };
//   }, []);


// const sendData = useWebSocketStore((state) => state.sendData);

// const handleSendMessage = () => {
//   sendData(topics.COMMONVARIABLES, { key: "speed", value: 120 });
// };


// for to getData
//     const { data, data2, data3 } = useWebSocketStore((state) => ({
//         data: state.data,
//         data2: state.data2,
//         data3: state.data3,
//       }))


// COMMONVARIABLES:'BE/FE/MEDHA/COMMONVARIABLES',
// HOMESCREEN:'BE/FE/MEDHA/HOMESCREEN',
// LOCOSTATUS:'BE/FE/MEDHA/LOCOSTATUS',
// LIFETIMEDATA:'BE/FE/MEDHA/LIFETIMEDATA',
// MONTHLYDATA:'BE/FE/MEDHA/MONTHLYDATA',
// TRACTIONMOTOR:'BE/FE/MEDHA/TRACTIONMOTOR'