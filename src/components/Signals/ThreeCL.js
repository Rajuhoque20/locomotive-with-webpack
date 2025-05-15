import React from "react";
import { getThreeCLData } from "./UtilityMethod";
import CLComp from "./CLComp";
export default function ThreeCL({ type, text, width, height }) {
  let MACLData = {
    text: text,
  };
  MACLData["data"] = getThreeCLData(type);
  return <CLComp width={width} height={height} data={MACLData} />;
}
