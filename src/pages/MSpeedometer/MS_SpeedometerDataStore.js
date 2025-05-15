import { create } from "zustand";
import { MEMOTEL_TOPICS } from "./MS_Topics";
import websocket from "../../services/Websocket";

export const useMemotelWebSocketStore = create((set) => ({
  MEMOTEL_DATA:null,
  subscriptions: {},

  updateMemotelData: (topic, payload) => {
    set((state) => {
      switch (topic) {
        case MEMOTEL_TOPICS.MEMOTELDATA:
          return { ...state, MEMOTEL_DATA: payload };
        default:
          return state;
      }
    });
  },

  sendData: (topic, payload) => {
    websocket.publish(topic, payload);
  },

  connectMemotelWebSocket: (topicsWithParams) => {
    const unsubscribeFns = {};

    topicsWithParams.forEach(({ topic, data }) => {
      const callback = (event) => {

        useMemotelWebSocketStore.getState().updateMemotelData(topic, event);
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

  unsubscribeMemotelWebSocket: () => {
    const { subscriptions } = useMemotelWebSocketStore.getState();
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