import { Icons } from "#framework";
import React from "react";
import classes from "./style.module.css";
export default function GradientPost({
  data = 1000,
  height = "8vh",
  width = "3vw",
}) {
  const { gradient_post } = Icons.Signage;
  return (
    <div className={classes.container}>
      <div
        style={{
          fontSize: "1.8vh",
          top: "1.8vh",
          width: "3vw",
        }}
      >
        <span>{data}</span>
      </div>
      <img src={gradient_post} style={{ height: height, width: width }} />
    </div>
  );
}
