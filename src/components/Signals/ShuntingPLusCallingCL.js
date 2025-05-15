import React from "react";
import CLComp from "./CLComp";
import { getCallingCLData, getShuntingData } from "./UtilityMethod";
export default function ShuntingPlusCallingCL({
  type,
  text,
  width,
  height,
  clType,
  isShunting,
  isCalling,
}) {
  let data = {
    text: text,
    isShunting: isShunting,
    calling: isCalling,
    isCallingActive: isCalling?.indication==="on",
  };
  data["data"] = getCallingCLData(type, clType);
  data["shuntingData"] = getShuntingData();
  return <CLComp width={width} height={height} data={data} />;
}
