import React from "react";
import { getMACLData } from "./UtilityMethod";
import CLComp from "./CLComp";
export default function MACLAndCLComp({
  type,
  text,
  width,
  height,
  maclType,
  arrowRight,
}) {
  let MACLData = {
    text: text,
    arrowRight: arrowRight,
  };
  MACLData["data"] = getMACLData(type, maclType);
  return <CLComp width={width} height={height} data={MACLData} />;
}
