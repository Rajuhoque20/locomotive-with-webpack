import React, { useRef, useEffect, useState, useCallback } from "react";

const limit = 30; // Number of points visible at a time
const stepSize = 60;
const animationSpeed = 0.5; // Increased speed for better visibility

const ScrollingChart = ({ data, lineColor = "#646cff" }) => {
  const svgRef = useRef(null);
  const [cData, setCData] = useState([]);
  const [shiftedData, setShiftedData] = useState([]);
  const [offsetX, setOffsetX] = useState(0);
  const animationFrameId = useRef(null);
  const [xValues, setXValues] = useState([]);
  const derivePoints = useCallback((gap, width, height, actualData) => {
    let length = actualData?.length;
    let padding = 0;
    let chartWidth = width - padding * 2;
    let chartHeight = height - padding * 2;
    const xMin = actualData.length
      ? Math.min(...actualData.map((p) => p.x))
      : 0;
    const xMax = actualData.length
      ? Math.max(...actualData.map((p) => p.x))
      : 1;
    let yMin = Math.min(...actualData.map((p) => p.y)) || 0;
    let yMax = Math.max(...actualData.map((p) => p.y)) || 1;

    yMax += gap;
    yMin -= gap;

    const scaleX = (x) => ((x - xMin) / (xMax - xMin)) * chartWidth + padding;
    const scaleY = (y) =>
      height - (((y - yMin) / (yMax - yMin)) * chartHeight + padding);

    return actualData.map((p) => ({
      x: scaleX(p.x),
      y: scaleY(p.y),
    }));
  }, []);

  // Generate the `d` attribute for the SVG path
  const generatePath = useCallback(
    (scaledData) => {
      if (!scaledData || scaledData?.length === 0) {
        return "";
      }

      let path = `M ${scaledData[0].x - offsetX} ${scaledData[0].y}`; // Move to the first point
      for (let i = 1; i < scaledData.length; i++) {
        path += ` L ${scaledData[i].x - offsetX} ${scaledData[i].y}`; // Draw a line to the next point
      }
      return path;
    },
    [offsetX]
  );

  // Shift data to the left and add a new point
  useEffect(() => {
    setCData((prevCData) => {
      if (
        data[0] &&
        !prevCData.some((item) => item.x === data[0].x * stepSize)
      ) {
        const newDataPoint = { x: data[0].x * stepSize, y: data[0].y };
        const updatedCData = [...prevCData, newDataPoint];
        // Sort by x values to ensure correct order
        const sortedCData = updatedCData.sort((a, b) => a.x - a.b);
        return sortedCData.length > 25 ? sortedCData.slice(1) : sortedCData;
      }
      return prevCData;
    });

    setXValues((prev) => {
      if (data[0] && !prev.some((item) => item === data[0].x)) {
        const updatedCData = [...prev, data[0].x];
        const sortedData = updatedCData;
        return sortedData.length > 25 ? sortedData.slice(1) : sortedData;
      }
      return prev;
    });
  }, [data]);

  const shiftData = () => {
    const newData = cData.map((point) => ({
      x: point.x - stepSize,
      y: point.y,
    }));
    setShiftedData(newData);
  };

  // Animate the chart
  const animateScroll = useCallback(() => {
    if (offsetX < stepSize) {
      setOffsetX((prev) => prev + animationSpeed);
    } else {
      setOffsetX(0);
      shiftData();
    }
    animationFrameId.current = requestAnimationFrame(animateScroll);
  }, [offsetX, shiftData]);

  // Start the animation when the component mounts
  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animateScroll);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animateScroll]);

  const scaledData = derivePoints(2, 1041, 38, shiftedData);

  function getSpacedElements(arr) {
    if (arr.length === 0) return []; // Handle empty case
    if (arr.length <= 7) return arr; // If ≤7 elements, return all

    const numMiddleElements = 5; // Since start & end are fixed
    const step = Math.floor((arr.length - 2) / (numMiddleElements - 1)); // Compute gap

    const result = [arr[0]]; // Always include the first element

    for (let i = 1; i <= numMiddleElements; i++) {
      const index = i * step;
      if (index >= arr.length - 1) break; // Ensure we don't exceed array length
      result.push(arr[index]);
    }

    result.push(arr[arr.length - 1]); // Always include the last element
    return result;
  }

  return (
    <div
      style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
    >
      <svg
        ref={svgRef}
        width={"115%"}
        height={"100%"}
        viewBox="0 0 1041 38"
        preserveAspectRatio="none"
        style={{
          marginLeft: "-10%",
          marginRight: "-5%",
        }}
        transform="scale(-1,-1)"
      >
        <path
          d={generatePath(scaledData)}
          stroke={lineColor}
          strokeWidth="2"
          fill="none"
          strokeDasharray={"5,1"}
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
          minHeight: "2vh",
        }}
      >
        {/* X-axis labels (Optional, can be customized) */}
        {getSpacedElements(xValues)
          ?.slice()
          ?.reverse()
          ?.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
      </div>
    </div>
  );
};

export default React.memo(ScrollingChart);
