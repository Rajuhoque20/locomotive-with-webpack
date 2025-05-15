import { useEffect, useState } from "react";
import websocket from "../services/Websocket";
import { deepEqual } from "./utilityFunction";

export const useData=(topic)=>{
    const [data, setData]=useState();

    useEffect(()=>{
      const callback=(event)=>{
        if(!deepEqual(data, event))
        {
          setData(event);
        }
      }
      websocket.subscribe(topic, callback);
      return()=>{
        websocket.unsubscribeTopic(topic);
      }
    },[topic, data])

    return{
        data:data
    }
}