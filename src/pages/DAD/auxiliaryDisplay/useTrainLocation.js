import { useState, useEffect } from "react";
import { throttle } from "lodash";
import websocket from "../../../services/Websocket";
import { topics } from "../../../constant/topic";

const useTrainLocation = ( ) => {
  const [trainLocation, setTrainLocation] = useState(0);

  useEffect(() => {
    const trainLocationCallback = throttle((event) => {
        localStorage.setItem("trainLocation", event?.location||0);
      setTrainLocation(event?.location);
    }, 500);

    websocket.subscribe(topics.TRAIN_LOCATION, trainLocationCallback);

    return () => {
      websocket.unsubscribeTopic(topics.TRAIN_LOCATION);
    };
  }, []);
 
  return parseInt(localStorage.getItem("trainLocation")||0);
};

export default useTrainLocation;


// useEffect(() => {
  //   if (!curvature?.length) return;
  //   const interval = setInterval(() => {
  //     setTrainLocation((prev) => {
  //       const currentLoc =
  //         prev + Math.floor(Math.random() * (100 - 50 + 1)) + 50;
  //       if (currentLoc >= curvature[curvature.length - 1].x) {
  //         clearInterval(interval);
  //         return curvature[curvature.length - 1].x; // Set to final position
  //       }
  //      // setTrainSpeed(currentLoc - prev);
  //       return currentLoc;
  //     });
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);