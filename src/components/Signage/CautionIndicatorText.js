import { Icons } from "#framework";
import React from "react";
import classes from "./style.module.css";
export default function CautionIndicatorText({
  data = 1000,
  height = "8vh",
  width = 80,
}) {
  const { caution_indicator_with_text } = Icons.Signage;
  return (
    <div className={classes.container}>
      <div
        style={{
          fontSize: "0.8vh",
          top: 1,
          fontWeight: "600",
          left: 22,
        }}
      >
        <span>{data}</span>
      </div>
      <img src={caution_indicator_with_text} style={{ height: height }} />
    </div>
  );
}
