import React, { useEffect, useRef, useState } from "react";
import { usePoints } from "../usePoints";
import { pointsToSmoothPath } from "../utilityMethod";

const gap = 3;
// let trainProgress = 0;
// let displayWidth = 0;
let duration = 0;
const numTrainCars=10;

const Gradient = ({
  height,
  range,
  data,
  trainLocation,
  trainLength,
}) => {
  const trainRef = useRef([]);
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const trainGroupRef=useRef(null);
  const displayRef = useRef(null);
    const [displayWidth, setDisplayWidth]=useState(window.innerWidth*0.9);
  const mappingFactor = range === 2000 ? displayWidth / 3000 : displayWidth / 2000;
  const dataLength = data?.length;
  const dividor = range === 2000 ? 3 : 2;
    const trainLengthInMeter = trainLength || 650;
  const trainLenth = trainLengthInMeter * mappingFactor;
  let locoWidth = Math.ceil(trainLenth / numTrainCars);
  const carSpacing = locoWidth + 1;
  const trainTailSpace = displayWidth / dividor - numTrainCars * carSpacing;
  const trackFirstPos = data[0]?.x;
  const trackLastPos = dataLength > 0 ? data[dataLength - 1]?.x : 0;
  const width = (displayWidth * (trackLastPos - trackFirstPos)) / (range + 1000);
  const points =usePoints(gap, width,height, data);
  let path12 = points?.length > 0 ? pointsToSmoothPath(points) : "";
  let trainProgress=Math.min(trainLocation*mappingFactor, Math.abs(width-displayWidth/dividor));

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDisplayWidth(entry.contentRect.width);
      }
    });
    if (displayRef.current) {
      observer.observe(displayRef.current);
    }
    return () => {
      if (displayRef.current) {
        observer.unobserve(displayRef.current);
      }
    };
  }, []);

     useEffect(() => {
        duration = 0;
        setTimeout(()=>{
          duration=1000;
        },50)
      }, [range]);


  
//  useEffect(() => {
//     if (
//       trackLastPos - trainLocation >=
//       (displayWidth/dividor) / mappingFactor
//     ) {
//       if(trainGroupRef.current.style.display==="block")
//       {
//         setTimeout(()=>{
//           duration=1000;
//         },50)
//       }
//       trainProgress =trainLocation * mappingFactor;
//     }
//     else if(width>trainProgress-displayWidth/dividor)
//     {
//         trainProgress=Math.max(0,width-displayWidth/dividor);
//         duration=0;
//     }
//     else if(width<trainProgress){
//       trainProgress=Math.max(0,width-displayWidth/dividor);
//       duration=0;
//     }
//   }, [trainProgress, trainLocation, width]);

  useEffect(() => {
    
    if (!pathRef.current || !trainRef.current?.length > 0) return;
   
    const pathElement = pathRef.current;
    if (pathElement && pathElement.getTotalLength()) {
      const pathLength = pathElement?.getTotalLength();
      trainRef.current.forEach((car, index) => {
       
        // Calculate the position for each car
        const carProgress = trainProgress + index * carSpacing + trainTailSpace;
        // Ensure the progress is within the path length
        const adjustedProgress =
          carProgress < 0 ? pathLength + carProgress : carProgress;
        // Get current position
        const point = pathElement?.getPointAtLength(adjustedProgress);
        // Get next position (slightly ahead) to calculate the angle
        const nextPoint = pathElement?.getPointAtLength(
          Math.min(adjustedProgress + 1, pathLength)
        );
        // Calculate angle using atan2
        const angle =
          Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) *
          (180 / Math.PI);
         
        car.animate(
          [
            {
              transform: `translate(${point.x}px, ${
                point.y - 5
              }px) rotate(${angle}deg)`,
            },
          ],
          {
            duration: duration,
            easing: "linear",
            fill: "forwards",
          }
        );
        // car.style.display = "block";
      });
    }
    if (
      svgRef.current &&
      trackLastPos - trainLocation >=
        0
    ) {
      //(carSpacing * numTrainCars) / mappingFactor
      svgRef.current.animate(
        [{ transform: `translateX(${-trainProgress}px)` }],
        {
          duration: duration,
          easing: "linear",
          fill: "forwards",
        }
      );
    }
  }, [trainProgress, range, duration, pathRef.current,data]);

  useEffect(() => {
    let timeoutId;
    
    if (trainGroupRef.current) {
      timeoutId = setTimeout(() => {
        if (trainGroupRef.current) {
          trainGroupRef.current.style.display = "block";
        }
      }, 2000);
    }
    return () => clearTimeout(timeoutId); // Cleanup to prevent memory leaks
  }, []);

  return (
    <div
      style={{ height: "100%", width: "100%",
           overflow: "hidden"
         }}
      ref={displayRef}
    >
      <svg
        width={width || 0}
        height={height}
        fill="none"
        ref={svgRef}
        // preserveAspectRatio="none"
        // viewBox={`0 0 ${width} ${height}`}
      >
        {path12 && (
          <path
            ref={pathRef}
            d={path12}
            stroke="black"
            strokeWidth="3"
            filter="url(#doubleShadow)"
          />
        )}

        <g ref={trainGroupRef}   style={{ display: "none" }}>
          {Array.from({ length: numTrainCars }, (_, index) => index)?.map(
            (item, index) => {
              return (
                <rect
                  width={locoWidth}
                  height="10"
                  fill={
                    index < numTrainCars - 1
                      ? "#00B3FF"
                      : "url(#paint0_linear_245_10951)"
                  }
                  ref={(el) => (trainRef.current[index] = el)}
                />
              );
            }
          )}
        </g>
        <defs>
          <filter
            id="doubleShadow"
            x="-500%"
            y="-500%"
            width="1000%"
            height="1000%"
          >
            {/* Green shadow on top */}
            <feDropShadow
              dx="0"
              dy="-4"
              stdDeviation="3"
              floodColor="green"
              floodOpacity="0.99"
            />
            <feDropShadow
              dx="0"
              dy="-3"
              stdDeviation="3"
              floodColor="green"
              floodOpacity="0.99"
            />
            {/* Grey shadow on bottom */}
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="3"
              floodColor="black"
              floodOpacity="0.7"
            />

            <feDropShadow
              dx="0"
              dy="1"
              stdDeviation="0.1"
              floodColor="red"
              floodOpacity="0.16"
            />
          </filter>
          <linearGradient
            id="paint0_linear_245_10951"
            x1="449.064"
            y1="34.0002"
            x2="459.629"
            y2="34.0002"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#97FF05" />
            <stop offset="1" stopColor="#008E0A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
export default React.memo(Gradient);




// const Gradient = ({
//   height,
//   range,
//   data,
//   trainLocation,
//   trainSpeed,
//   trainLength,
// }) => {
//   // const [trainProgress, setTrainProgress] = useState(2000); // Progress along path
//   // const [currentIndex, setCurrentIndex] = useState(0);
//   const trainRef = useRef([]);
//   const svgRef = useRef(null);
//   const pathRef = useRef(null);
//   const displayRef = useRef(null);
//   const mappingFactor =
//     range === 2000 ? displayWidth / 3000 : displayWidth / 2000;
//   const trainLengthInMeter = trainLength || 0;
//   const trainLenth = trainLengthInMeter * mappingFactor;
//   let locoWidth = Math.ceil(trainLenth / numTrainCars);
//   const carSpacing = locoWidth + 1;
//   const itemsPerBatch = range === 2000 ? 6000 : 4000;
//   const dataLength = data?.length;

//   const lastIndex =
//     currentIndex + itemsPerBatch > dataLength
//       ? dataLength
//       : currentIndex + itemsPerBatch;
//   const paginatedData = data?.slice(currentIndex, lastIndex);
//   const dividor = range === 2000 ? 3 : 2;
//   const trainTailSpace = displayWidth / dividor - numTrainCars * carSpacing;
//   const chunkTrackLastPos = paginatedData[paginatedData?.length - 1]?.x;
//   const chunkTrackFirstPos = paginatedData[0]?.x;
//   const trackLastPos = dataLength > 0 ? data[dataLength - 1]?.x : 0;
//   const width =
//     (displayWidth * (chunkTrackLastPos - chunkTrackFirstPos)) / (range + 1000);
//   const points = usePoints(gap, width, height, paginatedData);

//   useEffect(() => {
//     const observer = new ResizeObserver((entries) => {
//       for (let entry of entries) {
//         displayWidth = entry.contentRect.width;
//       }
//     });
//     if (displayRef.current) {
//       observer.observe(displayRef.current);
//     }
//     return () => {
//       if (displayRef.current) {
//         observer.unobserve(displayRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     duration = 0;
//   }, [range]);

//   useEffect(() => {
//     if (duration === 1000 && trainProgress === 0) {
//       duration = 0;
//     } else if (duration === 0 && trainProgress > 0) {
//       setTimeout(() => {
//         duration = 1000;
//       }, 50);
//     }
//   }, [trainProgress]);

//   // let path12 = points?.length > 0 ? generatePath(points) : "";
//   let path12 = points?.length > 0 ? pointsToSmoothPath(points) : "";

//   useEffect(() => {
//     // setTrainProgress((prev) => prev + trainSpeed * mappingFactor);
//     if (
//       trackLastPos - trainLocation >=
//       (carSpacing * numTrainCars + trainTailSpace) / mappingFactor
//     ) {
//       trainProgress = trainProgress + trainSpeed * mappingFactor;
//     }
//   }, [trainSpeed, trainLocation]);

//   useEffect(() => {
//     if (trackLastPos - trainLocation > range + 1000) {
//       if (chunkTrackLastPos - trainLocation < range + 1000) {
//         // setCurrentIndex((prev) => prev + Math.floor(itemsPerBatch / 2));
//         currentIndex = currentIndex + Math.floor(itemsPerBatch / 2);
//         // setTrainProgress(0);
//         trainProgress = 0;
//       }
//     }
//   }, [chunkTrackLastPos, trainLocation]);

//   useEffect(() => {
//     if (!pathRef.current || !trainRef.current?.length > 0) return;
//     const pathElement = pathRef.current;
//     if (pathElement && pathElement.getTotalLength()) {
//       const pathLength = pathElement?.getTotalLength();
//       trainRef.current.forEach((car, index) => {
//         // Calculate the position for each car
//         const carProgress = trainProgress + index * carSpacing + trainTailSpace;
//         // Ensure the progress is within the path length
//         const adjustedProgress =
//           carProgress < 0 ? pathLength + carProgress : carProgress;
//         // Get current position
//         const point = pathElement?.getPointAtLength(adjustedProgress);
//         // Get next position (slightly ahead) to calculate the angle
//         const nextPoint = pathElement?.getPointAtLength(
//           Math.min(adjustedProgress + 1, pathLength)
//         );
//         // Calculate angle using atan2
//         const angle =
//           Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) *
//           (180 / Math.PI);
//         car.animate(
//           [
//             {
//               transform: `translate(${point.x}px, ${
//                 point.y - 5
//               }px) rotate(${angle}deg)`,
//             },
//           ],
//           {
//             duration: duration,
//             easing: "linear",
//             fill: "forwards",
//           }
//         );
//         car.style.display = "block";
//       });
//     }
//     if (
//       svgRef.current &&
//       trackLastPos - trainLocation >=
//         (carSpacing * numTrainCars) / mappingFactor
//     ) {
//       svgRef.current.animate(
//         [{ transform: `translateX(${-trainProgress}px)` }],
//         {
//           duration: duration,
//           easing: "linear",
//           fill: "forwards",
//         }
//       );
//     }
//   }, [trainProgress, range, duration]);

//   return (
//     <div
//       style={{ height: "100%", width: "100%", overflow: "hidden" }}
//       ref={displayRef}
//     >
//       <svg
//         width={width || 0}
//         height={height}
//         fill="none"
//         ref={svgRef}
//         // preserveAspectRatio="none"
//         // viewBox={`0 0 ${width} ${height}`}
//       >
//         {path12 && (
//           <path
//             ref={pathRef}
//             d={path12}
//             stroke="black"
//             strokeWidth="3"
//             filter="url(#doubleShadow)"
//           />
//         )}

//         <g>
//           {Array.from({ length: numTrainCars }, (_, index) => index)?.map(
//             (item, index) => {
//               return (
//                 <rect
//                   style={{ display: "none" }}
//                   width={locoWidth}
//                   height="10"
//                   fill={
//                     index < numTrainCars - 1
//                       ? "#00B3FF"
//                       : "url(#paint0_linear_245_10951)"
//                   }
//                   ref={(el) => (trainRef.current[index] = el)}
//                 />
//               );
//             }
//           )}
//         </g>
//         <defs>
//           <filter
//             id="doubleShadow"
//             x="-500%"
//             y="-500%"
//             width="1000%"
//             height="1000%"
//           >
//             {/* Green shadow on top */}
//             <feDropShadow
//               dx="0"
//               dy="-4"
//               stdDeviation="3"
//               floodColor="green"
//               floodOpacity="0.99"
//             />
//             <feDropShadow
//               dx="0"
//               dy="-3"
//               stdDeviation="3"
//               floodColor="green"
//               floodOpacity="0.99"
//             />
//             {/* Grey shadow on bottom */}
//             <feDropShadow
//               dx="0"
//               dy="3"
//               stdDeviation="3"
//               floodColor="black"
//               floodOpacity="0.7"
//             />

//             <feDropShadow
//               dx="0"
//               dy="1"
//               stdDeviation="0.1"
//               floodColor="red"
//               floodOpacity="0.16"
//             />
//           </filter>
//           <linearGradient
//             id="paint0_linear_245_10951"
//             x1="449.064"
//             y1="34.0002"
//             x2="459.629"
//             y2="34.0002"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopColor="#97FF05" />
//             <stop offset="1" stopColor="#008E0A" />
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//   );
// };
// export default React.memo(Gradient);
