import React from "react";

export default function FrontMarker({ pathRange }) {
  return (
    <div
      style={{
        height: "27vh",
        width: "1vw",
        position: "absolute",
        left: pathRange === 2 ? "39vw" : "54vw",
        zIndex: 5,
      }}
    >
      <svg
        width={"100%"}
        height={"27vh"}
        viewBox="0 0 10 800"
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke="rgba(5, 255, 22, 1)"
          strokeDasharray={"3,3"}
          strokeWidth={5}
          d={"M0 0 V800"}
        />
      </svg>
    </div>
  );
}
