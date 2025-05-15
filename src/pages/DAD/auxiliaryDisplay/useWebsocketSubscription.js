import { useEffect } from "react";
import websocket from "../../../services/Websocket";

export const useWebsocketSubscription = (topic, callback) => {
  useEffect(() => {
    websocket.subscribe(topic, callback);
    return () => {
      websocket.unsubscribe(topic, callback);
    };
  }, [topic]);
};
