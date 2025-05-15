import React from "react";

export default function StationNBPrimary({ width, height, data }) {
  const nameEnglish = data?.split("/")?.[0];
  const nameHindi = data?.split("/")?.[1];
  return (
    <div style={{ width: width, height: height }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 2591 3125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="75.0977" y="275" width="2440" height="900" fill="#FFFF00" />
        <rect
          x="1.5"
          y="-1.5"
          width="2437"
          height="47"
          transform="matrix(1 0 0 -1 75.0977 272)"
          stroke="black"
          strokeWidth="3"
        />
        <rect
          x="1.5"
          y="-1.5"
          width="2437"
          height="47"
          transform="matrix(1 0 0 -1 75.0977 1222)"
          stroke="black"
          strokeWidth="3"
        />
        <rect
          x="1.59766"
          y="76.5"
          width="72"
          height="3047"
          stroke="black"
          strokeWidth="3"
        />
        <circle cx="37.5977" cy="37.5" r="36" stroke="black" strokeWidth="3" />
        <rect
          x="2516.6"
          y="76.5"
          width="72"
          height="3047"
          stroke="black"
          strokeWidth="3"
        />
        <circle cx="2552.6" cy="37.5" r="36" stroke="black" strokeWidth="3" />
        <text
          x="1232.02"
          y="550.379"
          font-size="300"
          text-anchor="middle"
          alignment-baseline="middle"
          fill="black"
        >
          {nameHindi || ""}
        </text>
        <text
          x="1232.02"
          y="950.379"
          font-size="300"
          text-anchor="middle"
          alignment-baseline="middle"
          fill="black"
        >
          {nameEnglish || ""}
        </text>
      </svg>
    </div>
  );
}
