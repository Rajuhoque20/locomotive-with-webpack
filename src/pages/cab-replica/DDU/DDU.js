import React from "react";
import PartA from "./PartA";
import PartB from "./PartB";
import PartC from "./PartC";
import PartD from "./PartD";
import PartE from "./PartE";
import PartF from "./PartF";
import classes from "./DDU.module.css";

export default function DDU({ data }) {
  return (
    <div className={classes.dduContainer}>
      <div className={classes.dduParts}>
        <PartA />
        <PartB />
        <PartC />
        <PartD data={data} />
        <PartE />
        <PartF />
      </div>
      <div className={classes.dduText}>
        <span style={{ color: "white", fontSize: "1.1vw" }}>
          DRIVERS DISPLAY UNIT
        </span>
      </div>
    </div>
  );
}
