import React from "react";
import CLComp from "./CLComp";
import { getCallingCLData, getShuntingData } from "./UtilityMethod";
export default function ShuntingCL({
  type,
  text,
  width,
  height,
  clType,
  isShunting,
}) {
  let data = {
    text: text,
    isShunting: isShunting,
  };
  data["data"] = getCallingCLData(type, clType);
  data["shuntingData"] = getShuntingData();
  return <CLComp width={width} height={height} data={data} />;
}
