import React from "react";
import "./screenTab.css";
export const ScreenTab = ({
  isActive,
  name = null,
  icon = null,
  onClick,
  iconHeight = null,
}) => {
  return (
    <div
      className={`screen-tab ${isActive ? "bg-2" : "bg-1"}`}
      onClick={onClick}
   
    >
      {icon ? (
        <img src={icon} style={{ height: iconHeight ? iconHeight : "auto" }} />
      ) : (
        <label className={`fs-3 ${isActive ? "fw-2 fc-1" : ""}`} style={{cursor:"pointer"}}>{name}</label>
      )}
    </div>
  );
};
