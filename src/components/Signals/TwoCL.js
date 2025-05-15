import React from "react";
import { getTwoCLData } from "./UtilityMethod";
import CLComp from "./CLComp";
export default function TwoCL({ type, text, width, height }) {
  let MACLData = {
    text: text,
  };
  MACLData["data"] = getTwoCLData(type);
  return <CLComp width={width} height={height} data={MACLData} />;
}
