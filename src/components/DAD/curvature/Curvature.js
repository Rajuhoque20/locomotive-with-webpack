import React, { useEffect, useRef, useState } from "react";
import { pointsToSmoothPath } from "../utilityMethod";

const gap = 5;
let duration=0;

 const scalePoints = ( width, actualData) => {
  let data = actualData || [];
  const chartWidth = width;
  const xMin = data?.length > 0 ? Math.min(...data?.map((p) => p.x)) : 0;
  const xMax = data?.length > 0 ? Math.max(...data?.map((p) => p.x)) : 0;
  let yMin = Math.min(...data?.map((p) => p.y)) || 0;
  let yMax = Math.max(...data?.map((p) => p.y)) || 0;
  let modifiedGap = Math.abs(yMax) + Math.abs(yMin);
  modifiedGap = 0.01 * (yMax - yMin);
  modifiedGap = gap;
  yMax = yMax + modifiedGap;
  yMin = yMin - modifiedGap;
  const scaleX = (x) => ((x - xMin) / (xMax - xMin)) * chartWidth;
  const points = data?.map((p) => ({
    x: scaleX(p.x),
    y: p.y,
  }));
  return points;
};

const Curvature = ({
  height = 50,
  range,
  data,
  trainLocation,
}) => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const displayRef = useRef(null);
   const [displayWidth, setDisplayWidth]=useState(window.innerWidth*0.9);
  const mappingFactor = range === 2000 ? displayWidth / 3000 : displayWidth / 2000;
  const dataLength = data?.length;
  const dividor = range === 2000 ? 3 : 2;
  const trackFirstPos = data[0]?.x;
  const trackLastPos = data[dataLength - 1]?.x;
  const width =(displayWidth * (trackLastPos - trackFirstPos)) / (range + 1000);
   const points = scalePoints( width, data);
   let path11 = points?.length > 0 ? pointsToSmoothPath(points) : "";
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


  // useEffect(() => {
  //   if (
  //     trackLastPos - trainLocation >=
  //    0
  //   ) {
  //     setTimeout(()=>{
  //       duration=1000;
  //     },50)
  //     trainProgress =trainLocation * mappingFactor;
  //   }
  //   else if(width>trainProgress-displayWidth/dividor)
  //   {
  //       trainProgress=Math.max(0,width-displayWidth/dividor);
  //       duration=0;
  //   }
  //   else if(width<trainProgress){
  //     trainProgress=Math.max(0,width-displayWidth/dividor);
  //     duration=0;
  //   }
  // }, [trainProgress, trainLocation, width]);

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
        height={height}
        fill="none"
        ref={svgRef}
         viewBox={`0 0 ${width} ${height}`}
      >
        <g filter="url(#filter0_i_561_4000)">
          <path d={path11} stroke="#45596D" strokeWidth="15" ref={pathRef} />
        </g>
        <defs>
          <filter
            id="filter0_i_561_4000"
            x="0.764893"
            y="5.03003"
            width={width}
            height={height}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.141667 0 0 0 0 0.141667 0 0 0 0 0.141667 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_561_4000"
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

          <linearGradient
            id="paint0_linear_561_4000"
            x1="0.931274"
            y1="28"
            x2="1681.6"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFCB87" stopOpacity="0" />
            <stop offset="0.26817" stopColor="#FFCB87" stopOpacity="0" />
            <stop offset="0.280854" stopColor="#FF0000" />
            <stop offset="0.303157" stopColor="#FF0000" />
            <stop offset="0.331837" stopColor="#FFCB87" stopOpacity="0" />
            <stop offset="0.437147" stopColor="#FFCB87" stopOpacity="0" />
            <stop offset="0.459716" stopColor="#FF0000" />
            <stop offset="0.502713" stopColor="#FF0000" />
            <stop offset="0.514921" stopColor="#FFCB87" stopOpacity="0" />
            <stop offset="1" stopColor="#FFCB87" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_561_4000"
            x1="0.931274"
            y1="28"
            x2="1681.6"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFCB87" stopOpacity="0" />
            <stop offset="0.262575" stopColor="#FFCB87" stopOpacity="0" />
            <stop offset="0.278003" stopColor="#FF0000" />
            <stop offset="0.309525" stopColor="#FF0000" />
            <stop offset="0.325914" stopColor="#FFCB87" stopOpacity="0" />
            <stop offset="0.440732" stopColor="#FFCB87" stopOpacity="0" />
            <stop offset="0.464827" stopColor="#FF0000" />
            <stop offset="0.499384" stopColor="#FF0000" />
            <stop offset="0.513016" stopColor="#FFCB87" stopOpacity="0" />
            <stop offset="1" stopColor="#FFCB87" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_561_4000"
            x1="221.424"
            y1="37.47"
            x2="226.889"
            y2="37.47"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#97FF05" />
            <stop offset="1" stopColor="#008E0A" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_561_4000"
            x1="221.424"
            y1="37.47"
            x2="226.889"
            y2="37.47"
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
export default React.memo(Curvature);





// const Curvature = ({
//   height = 50,
//   range,
//   data,
//   trainLocation,
//   trainSpeed,
//   trainLength,
// }) => {
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
//   // const [trainProgress, setTrainProgress] = useState(0);
//   const itemsPerBatch = range === 2000 ? 6000 : 4000;
//   const dataLength = data?.length;
//   // const lastLocation=data?.[dataLength-1]?.x;
//   const lastIndex = Math.min(dataLength, currentIndex + itemsPerBatch);
//   // const paginatedData = data?.slice(currentIndex, lastIndex);
//   const paginatedData = data;
//   const dividor = range === 2000 ? 3 : 2;
//   const trainTailSpace = displayWidth / dividor - numTrainCars * carSpacing;
//   const chunkTrackLastPos = paginatedData[paginatedData.length - 1]?.x;
//   const chunkTrackFirstPos = paginatedData[0]?.x;
//   const trackLastPos = data[dataLength - 1]?.x;
//   const width =
//     (displayWidth * (chunkTrackLastPos - chunkTrackFirstPos)) / (range + 1000);
//    const points = scalePoints( width, height, paginatedData);
 

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

//   // let path11 = points?.length > 0 ? generatePath(points) : "";
//   let path11 = points?.length > 0 ? pointsToSmoothPath(points) : "";

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
//     // if (!pathRef.current || !trainRef.current?.length > 0) return;
//     // const pathElement = pathRef.current;
//     // if (pathElement && pathElement.getTotalLength()) {
//     //   const pathLength = pathElement.getTotalLength();
//     //   trainRef.current.forEach((car, index) => {
//     //     const carProgress = trainProgress + index * carSpacing + trainTailSpace;
//     //     // Ensure the progress is within the path length
//     //     // Get current position
//     //     const point = pathElement.getPointAtLength(carProgress);
//     //     // Get next position (slightly ahead) to calculate the angle
//     //     const nextPoint = pathElement.getPointAtLength(
//     //       Math.min(carProgress + 1, pathLength)
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
//       style={{
//         height: "100%",
//         width: "100%",
//         // overflow: "hidden",
//       }}
//       ref={displayRef}
//     >
//       <svg
//         width={width || 0}
//         height={height}
//         fill="none"
//         ref={svgRef}
//         // preserveAspectRatio="none"
//          viewBox={`0 0 ${width} ${height}`}
//         //  transform={`scale(1, -1)`}
//       >
//         <g filter="url(#filter0_i_561_4000)">
//           <path d={path11} stroke="#45596D" strokeWidth="15" ref={pathRef} />
//         </g>
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
//           <filter
//             id="filter0_i_561_4000"
//             x="0.764893"
//             y="5.03003"
//             width={width}
//             height={height}
//             filterUnits="userSpaceOnUse"
//             colorInterpolationFilters="sRGB"
//           >
//             <feFlood floodOpacity="0" result="BackgroundImageFix" />
//             <feBlend
//               mode="normal"
//               in="SourceGraphic"
//               in2="BackgroundImageFix"
//               result="shape"
//             />
//             <feColorMatrix
//               in="SourceAlpha"
//               type="matrix"
//               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//               result="hardAlpha"
//             />
//             <feOffset dy="4" />
//             <feGaussianBlur stdDeviation="2" />
//             <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
//             <feColorMatrix
//               type="matrix"
//               values="0 0 0 0 0.141667 0 0 0 0 0.141667 0 0 0 0 0.141667 0 0 0 1 0"
//             />
//             <feBlend
//               mode="normal"
//               in2="shape"
//               result="effect1_innerShadow_561_4000"
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

//           <linearGradient
//             id="paint0_linear_561_4000"
//             x1="0.931274"
//             y1="28"
//             x2="1681.6"
//             y2="28"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopColor="#FFCB87" stopOpacity="0" />
//             <stop offset="0.26817" stopColor="#FFCB87" stopOpacity="0" />
//             <stop offset="0.280854" stopColor="#FF0000" />
//             <stop offset="0.303157" stopColor="#FF0000" />
//             <stop offset="0.331837" stopColor="#FFCB87" stopOpacity="0" />
//             <stop offset="0.437147" stopColor="#FFCB87" stopOpacity="0" />
//             <stop offset="0.459716" stopColor="#FF0000" />
//             <stop offset="0.502713" stopColor="#FF0000" />
//             <stop offset="0.514921" stopColor="#FFCB87" stopOpacity="0" />
//             <stop offset="1" stopColor="#FFCB87" stopOpacity="0" />
//           </linearGradient>
//           <linearGradient
//             id="paint1_linear_561_4000"
//             x1="0.931274"
//             y1="28"
//             x2="1681.6"
//             y2="28"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopColor="#FFCB87" stopOpacity="0" />
//             <stop offset="0.262575" stopColor="#FFCB87" stopOpacity="0" />
//             <stop offset="0.278003" stopColor="#FF0000" />
//             <stop offset="0.309525" stopColor="#FF0000" />
//             <stop offset="0.325914" stopColor="#FFCB87" stopOpacity="0" />
//             <stop offset="0.440732" stopColor="#FFCB87" stopOpacity="0" />
//             <stop offset="0.464827" stopColor="#FF0000" />
//             <stop offset="0.499384" stopColor="#FF0000" />
//             <stop offset="0.513016" stopColor="#FFCB87" stopOpacity="0" />
//             <stop offset="1" stopColor="#FFCB87" stopOpacity="0" />
//           </linearGradient>
//           <linearGradient
//             id="paint2_linear_561_4000"
//             x1="221.424"
//             y1="37.47"
//             x2="226.889"
//             y2="37.47"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopColor="#97FF05" />
//             <stop offset="1" stopColor="#008E0A" />
//           </linearGradient>
//           <linearGradient
//             id="paint3_linear_561_4000"
//             x1="221.424"
//             y1="37.47"
//             x2="226.889"
//             y2="37.47"
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
