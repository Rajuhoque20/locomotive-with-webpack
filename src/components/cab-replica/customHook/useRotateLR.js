import { useEffect, useState } from "react";
import { dialPointValidate } from "../../../pages/cab-replica/CabReplicate/CabUtility";
export const useRotateLR = (
  leftMinPoint,
  leftMaxPoint,
  leftActual,
  rightMinPoint,
  rightMaxPoint,
  rightActual
) => {
  const [rotateLeft, setRotateLeft] = useState(leftMinPoint);
  const [rotateRight, setRotateRight] = useState(rightMinPoint);
  const leftActualValidated = dialPointValidate(
    leftMinPoint,
    leftMaxPoint,
    leftActual
  );
  useEffect(() => {
    const animateLeftDial = () => {
      if (leftMinPoint === leftActual) {
        setRotateLeft(leftMinPoint);
        return;
      }
      let start = leftMinPoint;
      const end = leftActualValidated;
      const duration = end * 10; // 2 seconds
      const stepTime = 20; // Update every 20ms
      const steps = duration / stepTime;
      const increment = (end - start) / steps;
      const interval = setInterval(() => {
        if (start < end) {
          start += increment;
          setRotateLeft(start);
        } else {
          clearInterval(interval);
        }
      }, stepTime);
    };
    const animateRightDial = () => {
      if (rightMinPoint === rightActual) {
        setRotateRight(rightMinPoint);
        return;
      }
      let start = rightMinPoint;
      const end = dialPointValidate(rightMinPoint, rightMaxPoint, rightActual);
      if (start !== end) {
        const duration = (end - start) * 15; // 2 seconds
        const stepTime = 20; // Update every 20ms
        const steps = duration / stepTime;
        const increment = (end - start) / steps;
        const interval = setInterval(() => {
          if (start < end) {
            start += increment;
            setRotateRight(start);
          } else {
            clearInterval(interval);
          }
        }, stepTime);
      }
    };
    animateLeftDial();
    const leftDialDuration = leftActualValidated;
    const timeout = setTimeout(() => {
      animateRightDial();
    }, leftDialDuration);
    return () => {
      clearTimeout(timeout);
    };
  }, [
    leftMinPoint,
    leftMaxPoint,
    leftActual,
    rightMinPoint,
    rightMaxPoint,
    rightActual,
    leftActualValidated,
  ]);
  return { rotateLeft, rotateRight };
};
