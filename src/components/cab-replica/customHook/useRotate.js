import { useEffect, useState } from "react";
import { dialPointValidate } from "../../../pages/cab-replica/CabReplicate/CabUtility";
export const useRotate = (minPoint, maxPoint, actualValue) => {
  const [rotateValue, setRotateValue] = useState(minPoint);
  useEffect(() => {
    const animateDial = () => {
      if (minPoint === actualValue) {
        setRotateValue(minPoint);
        return;
      }
      let start = minPoint;
      const end = dialPointValidate(minPoint, maxPoint, actualValue);
      const duration = end * 10; // 2 seconds
      const stepTime = 20; // Update every 20ms
      const steps = duration / stepTime;
      const increment = (end - start) / steps;
      const interval = setInterval(() => {
        if (start < end) {
          start += increment;
          setRotateValue(start);
        } else {
          clearInterval(interval);
        }
      }, stepTime);
    };
    const leftDialDuration = 0; // Duration of left dial animation in milliseconds
    const timeout = setTimeout(() => {
      animateDial();
    }, leftDialDuration);
    return () => {
      clearTimeout(timeout);
    };
  }, [minPoint, maxPoint, actualValue]);
  return rotateValue;
};
