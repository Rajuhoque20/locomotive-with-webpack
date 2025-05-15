import { elements } from "chart.js";

export const angleBetweenTwoLines = (point1, point2, point3) => {
  // Calculate vectors
  const vectorU = { x: point2.x - point1.x, y: point2.y - point1.y };
  const vectorV = { x: point3.x - point1.x, y: point3.y - point1.y };

  // Dot product of vectorU and vectorV
  const dotProduct = vectorU.x * vectorV.x + vectorU.y * vectorV.y;

  // Magnitudes of the vectors
  const magnitudeU = Math.sqrt(vectorU.x ** 2 + vectorU.y ** 2);
  const magnitudeV = Math.sqrt(vectorV.x ** 2 + vectorV.y ** 2);

  // Calculate cosine of the angle
  const cosTheta = dotProduct / (magnitudeU * magnitudeV);

  // Calculate angle in radians
  const angleRadians = Math.acos(cosTheta);

  // Convert radians to degrees
  const angleDegrees = (angleRadians * 180) / Math.PI;
  return angleDegrees;
};
export const keyDownFn = (e, callback1, calback2) => {
  if (e.key === "ArrowUp") {
    callback1();
  } else if (e.key === "ArrowDown") {
    calback2();
  }
};
export const onKeydownMoveLeftToRight=(e,callback1, callback2)=>{
  if(e.key==="ArrowLeft")
  {
    callback1();
  }
  else if(e.key==="ArrowRight")
  {
    callback2();
  }
}
