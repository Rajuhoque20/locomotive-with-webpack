import { topics } from "../../constant/topic"
import websocket from "../../services/Websocket"

export const updateVIDData=(key, value)=>{
    console.log("key, value", key, value)
    websocket.publish(topics.MACHINE_ROOM_LAYOUT_PUBLISH,{[key]:value});
}