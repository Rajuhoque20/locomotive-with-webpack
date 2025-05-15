import React, { useEffect, useState } from "react";
import SAPBrake from "../CabReplicate/SAPBrake";
import AutoBrake from "../CabReplicate/AutoBrake";
import DirectionThrottle from "../CabReplicate/DirectionThrottle";
import Throttle from "../CabReplicate/Throttle";
import BLkey from "../CabReplicate/BLkey";
import { Icons } from "#framework";
import { replicaKeys } from "../../../constant/cabReplica";
import { controlPanelSwitchData, footPadelData } from "./utilityMethod";
import Sa9A9 from "../CabReplicate/Sa9A9";
import SwitchComp from "../../../components/cab-replica/SwitchComp/SwitchComp";
import { IconWithName } from './../../../components/cab-replica/IconWithName/IconWithName';
const ControlPanel = ({ data, mode }) => {
  const { foot_padel_inactive, foot_padel, horn_LT, horn_HT, Horn } =
    Icons.CRIcons;
  const footPadels = footPadelData(data);
  const switchData = controlPanelSwitchData(data);
  let Sa9A9Data = {};
  Sa9A9Data[replicaKeys?.SA_9_ANGLE] = data?.[replicaKeys.SA_9_ANGLE];
  Sa9A9Data[replicaKeys?.A_9] = data?.[replicaKeys.A_9];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 0.5fr 1fr" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {mode === "CCB" ? (
          <Sa9A9 data={Sa9A9Data} />
        ) : (
          <div style={{ display: "flex", gap: "1rem" }}>
            <SAPBrake data={data?.[replicaKeys.SA_9_ANGLE]} />
            <AutoBrake data={data?.[replicaKeys.A_9]} />
          </div>
        )}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "33% 33% 33%",
          }}
        >
        
          {footPadels?.map((item, index) => {
            return (
              <IconWithName
                key={index}
                name={item.name}
                icon={item.value ? foot_padel : foot_padel_inactive}
              />
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <DirectionThrottle data={data?.[replicaKeys.REVERSER]} />
        <Throttle data={data?.[replicaKeys.THROTTLE]} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <BLkey data={data?.[replicaKeys.BL_KEY_CURRENT]} />
          {/* <Horn /> */}
          <img
            src={
              data?.[replicaKeys.HORN] === 1
                ? horn_HT
                : data?.[replicaKeys.HORN] === -1
                ? horn_LT
                : Horn
            }
            style={{ width: "15vh" }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
          }}
        >
          {switchData?.map((item, index) => {
            return (
              <SwitchComp
                key={index}
                name={item.name}
                label1={item.label1}
                label2={item.label2}
                label3={item.label3}
                actualValue={item.actualValue}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default React.memo(ControlPanel);
