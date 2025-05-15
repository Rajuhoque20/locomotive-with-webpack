import { Icons } from "#framework";
import React from "react";
import classes from "./style.module.css";
export default function KMPost({ data = 1000, height = "8vh" }) {
  const { km_post } = Icons.Signage;
  return (
    <div className={classes.container}>
      <div
        style={{
          fontSize: "1.8vh",
          top: "1.8vh",
          width: "3.2vw",
          fontWeight: "600",
        }}
      >
        <span>{data}</span>
        <span>KM</span>
      </div>
      <img src={km_post} style={{ height: height }} />
    </div>
  );
}
