import React from "react";
import { pointsToSmoothPath } from "../utilityMethod";

  const height=38;
  const width=941;

    const scaleData = (actualData, max, min) => {
    let data = actualData || [];
    const chartWidth = width;
    const xMin = data?.length > 0 ? Math.min(...data?.map((p) => p.x)) : 0;
    const xMax = data?.length > 0 ? Math.max(...data?.map((p) => p.x)) : 0;
    let yMin = Math.min(...data.map((p) => p.y)) || 0;
    let yMax = Math.max(...data.map((p) => p.y)) || 1;
    if(Math.abs(max-min)<80)
    {
      yMax=max;
      yMin=min;
    }
    else{
       if(yMax===yMin)
        {
          yMax=yMax+1;
        }
        else if(yMin!==yMax)
        {
          yMin=yMin-(Math.abs(yMax) + Math.abs(yMin))*0.005;
          yMax=yMax+(Math.abs(yMax) + Math.abs(yMin))*0.005;
        }
    }
    const padding = 2;
    const chartHeight = height - padding * 2;
    const scaleY = (y) =>
      height - (((y - yMin) / (yMax - yMin)) * chartHeight + padding);
    const scaleX = (x) => ((x - xMin) / (xMax - xMin)) * chartWidth;
    const points = data?.map((p) => ({
      x: scaleX(p.x),
      y: scaleY(p.y),
    }));
    return points;
  };
   

 const LineChart = ({
  data,
  lineColor = "#646cff",
  max,
  min
}) => {
  
  const points =  scaleData(data, max, min);
  const linePath = pointsToSmoothPath(points);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
     <svg  width="100%" height="100%"
     preserveAspectRatio="none"
     viewBox={`0 0 ${width} ${height}`}
     transform="scale(-1,1)"
    >
        <path
          d={linePath}
          fill="none"
          stroke={lineColor}
          strokeWidth="2"
          strokeDasharray="5,1"
        />
      </svg>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(85, 90, 106, 1)",
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: "var(--font-size-5)",
          padding: "0 0.5vw",
          borderRadius: "0 0 0.5vw 0.5vw",
        }}
      >
           {data?.slice()?.reverse()
        ?.map((item, index) => {
          return <span key={index}>{item?.x?.toFixed(0)}</span>;
        })}
    </div>
      </div>
    
  );
};

export default LineChart;


// import React, { useEffect, useRef, useState } from "react";

//  const limit = 25;
//   const stepSize = 55;
//   const animationSpeed = 1;
//   const height=38;
//   const width=941;
   
//   const scaleData = (data, ) => {
//     const padding =2;
//     const chartHeight = height - padding * 2;
//     let yMin = Math.min(...data.map((p) => p.y)) || 0;
//     let yMax = Math.max(...data.map((p) => p.y)) || 1;
//     const scaleY = (y) =>
//       height - (((y - yMin) / (yMax - yMin)) * chartHeight + padding);
//     return data.map((p) => ({ x: p.x, y: scaleY(p.y) }));
//   };

// const LineChart = ({data, lineColor}) => {
//   const svgRef = useRef(null);
//   const pathRef = useRef(null);
//   let offsetX=0;
//   let isAnimating=false;
//   let latestLastItem ;
//   const dataRef = useRef(data);
//   let cData;
//   if(!cData)
//   {
//     cData=data?.map((item, index)=>({x:index*stepSize,y:item.y }));
//   }
// useEffect(() => {
//   dataRef.current = data;
// }, [data]);

//   const drawData = () => {
//     if (!pathRef.current||cData?.length===0) return;
//     const scaledData = scaleData(cData);
//     let d = `M ${scaledData[0].x - offsetX},${scaledData[0].y}`;
//     for (let i = 1; i < scaledData.length - 1; i++) {
//       const xc = (scaledData[i].x + scaledData[i + 1].x) / 2;
//       const yc = (scaledData[i].y + scaledData[i + 1].y) / 2;
//       d += ` Q ${scaledData[i].x - offsetX},${scaledData[i].y} ${xc - offsetX},${yc}`;
//     }
//     d += ` L ${scaledData[scaledData.length - 1].x - offsetX},${scaledData[scaledData.length - 1].y}`;
 
   
//     pathRef.current.setAttribute("d", d);
//     pathRef.current.setAttribute('stroke', lineColor);
//     pathRef.current.setAttribute('stroke-dasharray', '5,1'); // Corrected attribute name
//     pathRef.current.setAttribute('stroke-width', '2'); 
//   };

//   const animateScroll = () => {
//     if (!isAnimating) return;
//     if (offsetX < stepSize) {
//       offsetX+=animationSpeed;
//       drawData();
//       requestAnimationFrame(animateScroll);
//     } else {
//        offsetX=0;
//       shiftData();
//       isAnimating=false;
//     }
//   };

//   const shiftData = () => {
//     if(latestLastItem?.x===dataRef.current[dataRef.current.length - 1]?.x ||cData.length===0)
//     {
//       return;
//     }
//      latestLastItem = dataRef.current[dataRef.current.length - 1];
//       const lastX = cData[cData.length - 1].x + stepSize;
//       cData.push({ x: lastX, y: latestLastItem.y });
//       cData.shift();
    
//        cData = cData.map((point) => ({
//         x: point.x - stepSize,
//         y: point.y,
//       }));
      
//   };
 
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isAnimating) {
//         isAnimating=true;
//         animateScroll();
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (

//     <div
//     style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
//     <svg ref={svgRef} width="100%" height="100%"
//      preserveAspectRatio="none"
//      viewBox={`0 0 ${width} ${height}`}
//      transform="scale(-1,1)"
//     >
//       <path ref={pathRef} fill="none"/>
//     </svg>
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         background: "rgba(85, 90, 106, 1)",
//         color: "rgba(255, 255, 255, 0.5)",
//         fontSize: "var(--font-size-5)",
//         padding: "0 0.5vw",
//         borderRadius: "0 0 0.5vw 0.5vw",
//         minHeight: "2vh",
//       }}
//     >
//       {/* X-axis labels (Optional, can be customized) */}
//       {data?.slice()?.reverse()
//         ?.map((item, index) => {
//           return <span key={index}>{item?.x?.toFixed(0)}</span>;
//         })}
//     </div>
//     </div>
    
//   );
// };
// export default React.memo(LineChart);




// import React, { useEffect, useRef } from "react";
// import { lineChartScaling, usePoints } from "../usePoints";
// import { pointsToSmoothPath } from "../utilityMethod";
// const svgNS = "http://www.w3.org/2000/svg";

// let currentPage = 0;
// let cData = [];
// let shift = 0;
// const width = 941;
// const height = 38;
// const multiplier = 60;
// const shiftDecrementFactor = 0.165;
// const cDataLength = 40;
// const pageSize = 55;

// const drawData = (svgRef, cData, lineColor) => {
//   if (!svgRef.current) return;
//   const svg = svgRef.current;
//   while (svg.firstChild) {
//     svg.removeChild(svg.firstChild);
//   }
//   const start = 0;
//   const end = cData?.length > 0 ? cData.length - 1 : 0;
//   let pathData =
//     cData?.length > 0
//       ? `M${cData[start].x * multiplier + shift} ${cData[start].y}`
//       : "";
//   for (let i = start + 1; i < end; i++) {
//     pathData += ` L${cData[i].x * multiplier + shift} ${cData[i].y}`;
//   }
//   const path = document.createElementNS(svgNS, "path");
//   path.setAttribute("d", pathData);
//   path.setAttribute("stroke", lineColor);
//   path.setAttribute("fill", "none");
//   path.setAttribute("stroke-dasharray", "5,1");
//   path.setAttribute("stroke-width", "2");
//   svg.appendChild(path);
// };

// const LineChart = ({ data, lineColor = "#646cff" }) => {
//   const svgRef = useRef(null);

//   useEffect(() => {
//     cData = [...cData, ...data];
//     cData = [...new Set(cData)];
//     if (cData.length > cDataLength) {
//       cData = cData.slice(-cDataLength);
//     }
//     currentPage++;
//   }, [data]);

//   const updateShift = () => {
//     if (currentPage > pageSize) {
//       shift -= shiftDecrementFactor;
//     }
//     drawData(svgRef, cData, lineColor);
//     requestAnimationFrame(updateShift);
//   };

//   useEffect(() => {
//     updateShift();
//   }, []);

//   return (
//     <div
//       id="svgContainer"
//       style={{
//         width: "100%",
//         height: height,
//         // overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       <svg
//         ref={svgRef}
//         width={"115%"}
//         height={"100%"}
//         preserveAspectRatio="none"
//         viewBox={`0 0 ${width} ${height}`}
//         style={{
//           display: "block",
//           marginRight: "-5%",
//           marginLeft: "-10%",
//         }}
//         transform="scale(-1,-1)"
//       />
//     </div>
//   );
// };
// export default LineChart;

