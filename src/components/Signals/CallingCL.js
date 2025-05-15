import React from "react";
import CLComp from "./CLComp";
import { getCallingCLData } from "./UtilityMethod";

export default function CallingCL({
  type,
  text,
  width,
  height,
  callingType,
  isCallingActive,
}) {
  let data = {
    text: text,
    calling: callingType ? true : false,
    isCallingActive: isCallingActive,
  };
  data["data"] = getCallingCLData(type, callingType);
  return <CLComp width={width} height={height} data={data} />;
}
