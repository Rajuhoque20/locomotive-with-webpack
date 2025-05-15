import React from "react";
const  width = 941;
const height=54;
const CoupChart = ({
  data,
  fillColor = "red",
  max,
  min,
}) => {
  const padding = 0;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const xMin = data?.length > 0 ? Math.min(...data.map((p) => p.x)) : 0;
  const xMax = data?.length > 0 ? Math.max(...data.map((p) => p.x)) : 0;
  // const yMin = Math.abs(min) > Math.abs(max) ? min : -max;
  // const yMax = Math.abs(min) > Math.abs(max) ? -min : max;
  const yMax=max;
  const yMin=min;
  const scaleX = (x) => ((x - xMin) / (xMax - xMin)) * chartWidth + padding;
  const scaleY = (y) =>
    height - (((y - yMin) / (yMax - yMin)) * chartHeight + padding);
  const points = data?.map((p) => ({
    x: scaleX(p.x),
    y: scaleY(p.y),
  }));
  const linePath =
    points?.length > 0
      ? `M ${points?.map((p) => `${p.x},${p.y}`).join(" L ")}`
      : "";
  return (
    <svg height={height} width={"100%"}
    preserveAspectRatio="none"
    viewBox={`0 0 ${width} ${height}`}
    // transform="scale(-1,1)"
    
    >
      <line
        x1={data?.[0]?.x || 0}
        y1={height / 2}
        x2={width}
        y2={height / 2}
        stroke={"rgba(255, 255, 255, 1)"}
        strokeWidth="1"
      />
      <path
        d={linePath ? `${linePath} L1000,${height / 2} L0,${height / 2} Z` : ""}
        fill={fillColor}
      />
    </svg>
  );
};
export default React.memo(CoupChart);
