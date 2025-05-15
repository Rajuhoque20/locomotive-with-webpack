import React from "react";
export const IconWithName = ({ name, icon }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "min-content",
        alignItems: "center",
      }}
    >
      <img src={icon} style={{ width: "100%" }} />
      <span style={{ color: "white", fontSize: "0.8vw" }}>{name}</span>
    </div>
  );
};
