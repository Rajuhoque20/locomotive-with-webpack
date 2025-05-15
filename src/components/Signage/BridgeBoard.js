import React from "react";

export default function BridgeBoard({
  width,
  height,
  data = { english: "NAME", hindi: "नाम" },
  type = "important",
}) {
  return (
    <div style={{ width: width, height: height }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 1401 2400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="75.0938"
          y="50"
          width="1250"
          height="900"
          fill={type === "important" ? "#FFFF00" : "#fff"}
        />
        <rect
          x="1.5"
          y="-1.5"
          width="1247"
          height="47"
          transform="matrix(1 0 0 -1 75.0938 47)"
          stroke="black"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="1247"
          height="47"
          transform="matrix(1 0 0 -1 75.0938 997)"
          stroke="black"
          strokeWidth="3"
        />
        <rect
          x="1.59375"
          y="1.5"
          width="72"
          height="2397"
          stroke="black"
          strokeWidth="3"
        />
        <rect
          x="1326.59"
          y="1.5"
          width="72"
          height="2397"
          stroke="black"
          strokeWidth="3"
        />
        <text
          x="700"
          y="430.556"
          font-size="300"
          text-anchor="middle"
          alignment-baseline="middle"
          fill="black"
        >
          {data?.hindi}
        </text>
        <text
          x="700"
          y="700.556"
          font-size="300"
          text-anchor="middle"
          alignment-baseline="middle"
          fill="black"
        >
          {data?.english}
        </text>
      </svg>
    </div>
  );
}
