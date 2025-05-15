import React from "react";
import { getCallingCLData } from "./UtilityMethod";
import CLComp from "./CLComp";
export default function RepeatingCL({
  type,
  text,
  width,
  height,
  clType,
  isRepeating,
}) {
  let data = {
    text: text,
    isRepeating: isRepeating,
  };
  data["data"] = getCallingCLData(type, clType);
  return <CLComp width={width} height={height} data={data} />;
}
