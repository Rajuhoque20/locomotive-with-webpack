import React from "react";
import "./subSystem.css";
const SubSystem = ({
  onClick,
  isOperative,
  isIsolated,
  name,
  number,
  lineWidth,
  nameColor,
  width,
}) => {
  return (
    <div
      onClick={onClick}
      className={`container ${!isOperative ? "faulty" : "operative"}`}
      style={{  height:"2.3rem", width:width?width:"2.3rem"}}
    >
      <div style={{height:"100%",display:"flex", alignItems:"center",flexDirection:"column", justifyContent:"center"}}>
        <label
          className="fs-5 fc-1"
          style={{
            fontSize: "0.7rem",
          }}
        >
          {number}
        </label>
        {name && (
          <label
            className={`fs-4 fc-1`}
            style={{
              color: nameColor ? nameColor : "",
              fontWeight: "600",
              fontSize: "0.6rem",
            }}
          >
            {name}
          </label>
        )}
      </div>
      {isIsolated && (
        <span
          className="isolated"
          style={{ width: lineWidth ? lineWidth*0.8 : "" }}
        ></span>
      )}
    </div>
  );
};
export default SubSystem;
