import React from "react";

export default function StationNBSecondary({
  width,
  height,
  data = { english: "STATION NAME", hindi: "स्टेशन नाम" },
}) {
  return (
    <div style={{ width: width, height: height }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 878 878"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M452.941 846.718L2.65532 452.718L424.793 30.58L875.079 424.58L452.941 846.718Z"
          fill="white"
          stroke="black"
          strokeWidth="3"
        />
        <circle
          cx="438.867"
          cy="438.648"
          r="118.965"
          stroke="#FF0000"
          strokeWidth="25"
        />
        <rect
          x="156.664"
          y="410.436"
          width="564.403"
          height="56.4275"
          fill="#230068"
        />

        <text
          x="438"
          y="268.14"
          font-size="80"
          text-anchor="middle"
          alignment-baseline="middle"
          fill="black"
        >
          {data?.hindi}
        </text>
        <text
          x="438"
          y="448.14"
          font-size="60"
          text-anchor="middle"
          alignment-baseline="middle"
          fill="#fff"
        >
          {data?.english}
        </text>
      </svg>
    </div>
  );
}
