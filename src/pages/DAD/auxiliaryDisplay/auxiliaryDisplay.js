import AnimatedPart from "./AnimatedPart";
import React from "react";
import styles  from "./auxiliaryDisplay.module.css";
import GraphPart from "./graphPart/GraphPart";
const AuxiliaryDisplay = () => {
  console.log("styles ", styles )
  return (
    <div className={styles.container}>
      <AnimatedPart />
      <GraphPart/>
    </div>
  );
};
export default AuxiliaryDisplay;
