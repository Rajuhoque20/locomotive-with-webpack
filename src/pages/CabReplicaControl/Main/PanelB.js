import React, { useEffect, useState } from "react";
import { SwitchComp } from "./ControlPanel";
import { Indicator, IndicatorBtn } from "./PanelA";
import { Icons } from "#framework";
import { useReplicaStore } from "../CabReplicate/store";
import { replicaKeys } from "../../../constant/cabReplica";
export default function PanelB({ data }) {
  const { updateReplicaData } = useReplicaStore();

  const ControlPanelswitchData = [
    {
      name: "BLHO",
      label1: "OFF",
      label2: "",
      label3: "ON",
      actualValue: data?.blho,
      key: replicaKeys.BLHO,
    },
    {
      name: "ZTEL",
      label1: "OFF",
      label2: "",
      label3: "ON",
      actualValue: data?.ztel === 1 ? 1 : -1,
      key: replicaKeys.ZTEL,
    },
    {
      name: "ZBAN",
      label1: "OFF",
      label2: "",
      label3: "ON",
      actualValue: data?.zban === 1 ? 1 : -1,
      key: replicaKeys.ZBAN,
    },
    {
      name: "ZPT",
      label1: "DN",
      label2: "",
      label3: "UP",
      actualValue: data?.[replicaKeys.ZPT],
      key: replicaKeys.ZPT,
    },
    {
      name: "BLDJ",
      label1: "OFF",
      label2: "",
      label3: "ON",
      actualValue: data?.bldj,
      key: replicaKeys.BLDJ,
    },
    {
      name: "BLCP",
      label1: "OFF",
      label2: "AUTO",
      label3: "MAIN",
      actualValue: data?.blcp,
      key: replicaKeys.BLCP,
    },
  ];
  const switchData = [
    {
      name: "ZLC",
      label1: "OFF",
      label2: "",
      label3: "ON",
      actualValue: data?.zlc === 1 ? 1 : -1,
      key: replicaKeys.ZLC,
    },
    {
      name: "ZLI",
      label1: "OFF",
      label2: "",
      label3: "ON",
      actualValue: data?.zli === 1 ? 1 : -1,
      key: replicaKeys.ZLI,
    },
    {
      name: "ZLDD",
      label1: "OFF",
      label2: "",
      label3: "ON",
      actualValue: data?.zldd === 1 ? 1 : -1,
      key: replicaKeys.ZLDD,
    },
    {
      name: "BLPR",
      label1: "R",
      label2: "OFF",
      label3: "F",
      actualValue: data?.blpr,
      key: replicaKeys.BLPR,
    },
    {
      name: "ZPRD",
      label1: "FULL",
      label2: "",
      label3: "DIM",
      actualValue: data?.zprd === 1 ? -1 : 1,
      key: replicaKeys.ZPRD,
    },
    {
      name: "ZLFW",
      label1: "OFF",
      label2: "",
      label3: "ON",
      actualValue: data?.zlfw === 1 ? 1 : -1,
      key: replicaKeys.ZLFW,
    },
    {
      name: "ZLFR",
      label1: "OFF",
      label2: "",
      label3: "ON",
      actualValue: data?.zlfr === 1 ? 1 : -1,
      key: replicaKeys.ZLFR,
    },
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        rowGap: "2vh",
        height: "50%",
        // gridTemplateRows: "50% 50%",
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
            valueKey={item.key}
          />
        );
      })}
      {ControlPanelswitchData?.map((item, index) => {
        return (
          <SwitchComp
            key={index}
            name={item.name}
            label1={item.label1}
            label2={item.label2}
            label3={item.label3}
            actualValue={item.actualValue}
            valueKey={item.key}
          />
        );
      })}
    </div>
  );
}
