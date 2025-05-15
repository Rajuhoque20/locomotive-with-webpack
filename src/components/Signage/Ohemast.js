import React from "react";
import classes from "./style.module.css";
export default function Ohemast({ data, }) {
  let value1 = data?.split("/")?.[0];
  let value2 = data?.split("/")?.[1];
  return (
    <div
      style={{ transform: `scale(0.18)`, width: "3.5rem" }}
      className={classes.ohemast}
    >
      <span>{value1}</span>
      <hr />
      <span >{value2}</span>
    </div>
  );
}
