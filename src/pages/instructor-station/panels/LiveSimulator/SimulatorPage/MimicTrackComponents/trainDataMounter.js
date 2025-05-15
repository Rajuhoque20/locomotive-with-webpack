import websocket from "../../../../../../services/Websocket";
import { useEffect, useState, useRef } from "react";
import { throttle } from "lodash";



// export const useTrainLocation = (sessionId) => {
//     const [targetPosition, setTargetPosition] = useState(0);
//     useEffect(() => {
//         if (!sessionId) {
//             // console.warn("Session ID is undefined, skipping WebSocket subscription.");
//             return;
//         }

//         // console.log("Subscribing to WebSocket with sessionId:", sessionId);
//         websocket.send("location", "subscribe", { sessionId });

//         const callback = (event) => {
//             if (event) {
//                 console.log("Received new position:", event);
//                 setTargetPosition(event['location']); // Continuously update target position
//             } else {
//                 // console.warn("Received undefined position:", event.Location);
//             }
//         };

//         websocket.subscribe("location", callback);

//         // Cleanup function will unsubscribe when the component is unmounted
//         return () => {
//             // console.log("Unsubscribing from WebSocket...");
//             websocket.unsubscribeTopic("location");
//         };
//     }, [sessionId]); // Only subscribe once per sessionId

//     return targetPosition ?? 0; // Default to 0 if targetPosition is undefined
// };


export const useTrainLocation = (sessionId) => {
    const [targetPosition, setTargetPosition] = useState(0);

    // Throttle the update function to limit how often React state updates
    const throttledSetTargetPosition = useRef(
        throttle((location) => {
            setTargetPosition(location);
        }, 10) // updates every 50ms at most
    ).current;

    useEffect(() => {
        if (!sessionId) return;

        websocket.send("location", "subscribe", { sessionId });

        const callback = (event) => {
            if (event && event.location !== undefined) {
                throttledSetTargetPosition(event.location);
            }
        };

        websocket.subscribe("location", callback);

        return () => {
            websocket.unsubscribeTopic("location");
            throttledSetTargetPosition.cancel(); // Cancel pending throttled calls on cleanup
        };
    }, [sessionId, throttledSetTargetPosition]);

    return targetPosition ?? 0;
};


export const UpdatedSignals = () => {
    const [updatedSignals,setupdatedSignals] = useState([])
    useEffect(() => {
        const callback = (event) => {
            if (event) {
                setupdatedSignals(event); 
            } else {
            }
        };

        websocket.subscribe("BE/FE/TRACK_LAYOUT/TRACK_DATA/SIGNALS", callback);

        return () => {
            websocket.unsubscribeTopic("BE/FE/TRACK_LAYOUT/TRACK_DATA/SIGNALS");
        };
    }, []);
    return updatedSignals
}

