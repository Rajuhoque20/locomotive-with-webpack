import { Icons } from "#framework";
import React from "react";
import classes from "./style.module.css";
export default function SpeedIndicator({ height = "8vh", data = 10 }) {
  const { speed_indicator } = Icons.Signage;
  return (
    <div className={classes.container}>
      <div
        style={{
          fontSize: "10px",
          top: "0.45rem",
          width: "1.8rem",
        }}
      >
        <small>{data}</small>
      </div>
      <img src={speed_indicator} style={{ height: height }} />
    </div>
  );
}
