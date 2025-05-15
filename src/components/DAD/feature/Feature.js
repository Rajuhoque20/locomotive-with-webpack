import React, { useEffect, useRef, useState } from "react";
import AllSignalAndSignages from "./AllSignalAndSignages";

//  let trainProgress;

let duration = 0;
const padding=0;

const Feature = ({
  data,
  range,
  trainLocation,
}) => {
 
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const displayRef = useRef(null);
  const [displayWidth, setDisplayWidth]=useState(window.innerWidth*0.9);
  
  const mappingFactor =
    range === 2000 ? displayWidth / 3000 : displayWidth / 2000;
  const dataLength = data?.length;
  const dividor = range === 2000 ? 3 : 2;
  const trackFirstPos = data[0]?.x;
  const trackLastPos = data[dataLength - 1]?.x||11000;
  const width = (displayWidth * (trackLastPos - trackFirstPos)) / (range + 1000);
  const chartWidth = width-2*padding;

  const xMin =
    data?.length > 0 ? Math.min(...data?.map((p) => p.x)) : 0;
  const xMax =
    data?.length > 0 ? Math.max(...data?.map((p) => p.x)) : 0;
  const scaleX = (x) => ((x - xMin) / (xMax - xMin)) * chartWidth + padding;
  const points =
    data?.map((p) => ({ ...p, y: 30, x: scaleX(p.x) })) || [];
  const linePath =
    points?.length > 0 ? points?.map((item) => `${item.x},30`).join(" ") : "";
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
    }, [range, displayWidth]);

//  useEffect(() => {
//     if (
//       trackLastPos - trainLocation >=
//      0
//     ) {
//       setTimeout(()=>{
//         duration=1000;
//       },50)
//       //  trainProgress =trainLocation * mappingFactor;
//       //  setTrainProgress(trainLocation * mappingFactor);
//     }
//     else if(width>trainProgress-displayWidth/dividor)
//     {
//         //  trainProgress=Math.max(0,width-displayWidth/dividor);
//         duration=0;
//         //  setTrainProgress(Math.max(0,width-displayWidth/dividor));
//     }
//     else if(width<trainProgress){
//       //  trainProgress=Math.max(0,width-displayWidth/dividor);
//       duration=0;
//       // setTrainProgress(Math.max(0,width-displayWidth/dividor));
//     }
//   }, [trainProgress, trainLocation, width]);
  
useEffect(() => {
    if (
      svgRef.current
    ) {
      svgRef.current.animate(
        [{ transform: `translateX(${-trainProgress}px)` }],
        {
          duration: duration,
          easing: "linear",
          fill: "forwards",
        }
      );
    }
  }, [trainProgress, duration]);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
         overflow: "hidden",
      }}
      ref={displayRef}
    >
      <svg
        width={width || 0}
        height="100%"
        fill="none"
        ref={svgRef}
      >
        <polyline
          points={linePath ? linePath : ""}
          stroke="rgb(50, 66, 82)"
          strokeWidth="8"
          fill="none"
          ref={pathRef}
        />

        {points?.map((item, index) => (
         (item?.signages||item?.signal)?<AllSignalAndSignages key={index} item={item} />:null
        ))}
        <defs>
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
export default React.memo(Feature);









// import React, { useEffect, useRef } from "react";
// import AllSignalAndSignages from "./AllSignalAndSignages";

// const padding = 0;
// const numTrainCars = 10;
// let trainProgress = 0;
// let currentIndex = 0;
// let displayWidth = 0;
// let duration = 0;

// const Feature = ({
//   data,
//   range,
//   trainLocation,
//   trainSpeed,
//   height,
//   trainLength,
// }) => {
//   // const [trainProgress, setTrainProgress] = useState(0);
//   //  const [currentIndex, setCurrentIndex] = useState(0);

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
//   // const paginatedData = data;
//   // const paginatedData = data?.slice(currentIndex, currentIndex + itemsPerBatch);
//   const chunkTrackLastPos = paginatedData[paginatedData.length - 1]?.x;
//   const chunkTrackFirstPos = paginatedData[0]?.x;
//   const trackLastPos = data[dataLength - 1]?.x;
//   const width =
//     (displayWidth * (chunkTrackLastPos - chunkTrackFirstPos)) / (range + 1000);
//   const chartWidth = width - padding * 2;
//   const xMin =
//     paginatedData?.length > 0 ? Math.min(...paginatedData?.map((p) => p.x)) : 0;
//   const xMax =
//     paginatedData?.length > 0 ? Math.max(...paginatedData?.map((p) => p.x)) : 0;
//   const scaleX = (x) => ((x - xMin) / (xMax - xMin)) * chartWidth + padding;
//   const points =
//     paginatedData?.map((p) => ({ ...p, y: 30, x: scaleX(p.x) })) || [];
//   const linePath =
//     points?.length > 0 ? points?.map((item) => `${item.x},30`).join(" ") : "";

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

//   useEffect(() => {
//     // setTrainProgress((prev) => prev + trainSpeed * mappingFactor);
//     if (
//       trackLastPos - trainLocation >
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
//     // if (!pathRef.current || !trainRef.current?.length > 0) {
//     //   return;
//     // }
//     // const pathElement = pathRef.current;
//     // if (pathElement && pathElement?.getTotalLength()) {
//     //   const pathLength = pathElement.getTotalLength();

//     //   trainRef.current.forEach((car, index) => {
//     //     // Calculate the position for each car
//     //     const carProgress = trainProgress + index * carSpacing + trainTailSpace;
//     //     // Ensure the progress is within the path length
//     //     const adjustedProgress =
//     //       carProgress < 0 ? pathLength + carProgress : carProgress;
//     //     // Get current position
//     //     const point = pathElement?.getPointAtLength(adjustedProgress);
//     //     // Get next position (slightly ahead) to calculate the angle
//     //     const nextPoint = pathElement.getPointAtLength(
//     //       Math.min(adjustedProgress + 1, pathLength)
//     //     );
//     //     // Calculate angle using atan2
//     //     const angle =
//     //       Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) *
//     //       (180 / Math.PI);
//     //     car.animate(
//     //       [
//     //         {
//     //           transform: `translate(${point.x}px, ${
//     //             point.y - 5
//     //           }px) rotate(${angle}deg)`,
//     //         },
//     //       ],
//     //       {
//     //         duration: duration,
//     //         easing: "linear",
//     //         fill: "forwards",
//     //       }
//     //     );
//     //     car.style.display = "block";
//     //   });
//     // }

//     if (
//       svgRef.current &&
//       trackLastPos - trainLocation > (carSpacing * numTrainCars) / mappingFactor
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
//       style={{
//         height: "100%",
//         width: "100%",
//         // overflow: "hidden",
//       }}
//       ref={displayRef}
//     >
//       <svg
//         width={width || 0}
//         height="100%"
//         fill="none"
//         ref={svgRef}
//         // viewBox={`0 0 ${width} ${height}`}
//         // preserveAspectRatio="none"
//       >
//         <polyline
//           points={linePath ? linePath : ""}
//           stroke="rgb(50, 66, 82)"
//           strokeWidth="8"
//           fill="none"
//           ref={pathRef}
//         />

//         {points?.map((item, index) => (
//           <AllSignalAndSignages key={index} item={item} />
//         ))}
//         {/* {Array.from({ length: numTrainCars })?.map((item, index) => {
//           return (
//             <rect
//               style={{ display: "none" }}
//               width={locoWidth}
//               height="10"
//               fill={
//                 index < numTrainCars - 1
//                   ? "#00B3FF"
//                   : "url(#paint0_linear_245_10951)"
//               }
//               ref={(el) => (trainRef.current[index] = el)}
//             />
//           );
//         })} */}
//         <defs>
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
// export default React.memo(Feature);
