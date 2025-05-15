import { replicaKeys } from "../../../constant/cabReplica";
export const getIndicatorData = (data) => {
  let result = [
    {
      name: "LSDJ",
      color: "red",
      type: "indicator",
      value: data?.[replicaKeys.LSDJ],
    },
    {
      name: "LSCE",
      color: "yellow",
      type: "indicator",
      value: data?.[replicaKeys.LSCE],
    },
    {
      name: "LSAF",
      color: "red",
      type: "indicator",
      value: data?.[replicaKeys.LSAF],
    },
    {
      name: "LSP",
      color: "yellow",
      type: "indicator",
      value: data?.[replicaKeys.LSP],
    },
    {
      name: "LSHO",
      color: "yellow",
      type: "indicator",
      value: data?.[replicaKeys.LSHO],
    },
    {
      name: "LSVW",
      color: "yellow",
      type: "indicator",
      value: data?.[replicaKeys.LSVW],
    },
  ];
  return result;
};
export const getIndicatorBtnData = (data) => {
  let result = [
    {
      name: "BPCS",
      color: "blue",
      type: "button",
      value: data?.[replicaKeys.BPCS_LIGHT],
    },
    {
      name: "BPVR",
      color: "yellow",
      type: "button",
      value: data?.[replicaKeys.BPVR_LIGHT],
    },
    {
      name: "BPPB",
      color: "red",
      type: "button",
      value: data?.[replicaKeys.BPPB_LIGHT],
    },
  ];
  return result;
};

export const PanelBSwitchData = (data) => {
  let result = [
    {
      name: "ZLC",
      label1: "OFF",
      label2: "",
      label3: "ON",
      actualValue: data?.[replicaKeys.ZLC],
    },
    {
      name: "ZLI",
      label1: "OFF",
      label2: "",
      label3: "ON",
      actualValue: data?.[replicaKeys.ZLI],
    },
    {
      name: "ZLDD",
      label1: "OFF",
      label2: "",
      label3: "ON",
      actualValue: data?.[replicaKeys.ZLDD],
    },
    {
      name: "BLPR",
      label1: "R",
      label2: "OFF",
      label3: "F",
      actualValue: data?.[replicaKeys.BLPR],
    },
    {
      name: "ZPRD",
      label1: "FULL",
      label2: "",
      label3: "DIM",
      actualValue: data?.[replicaKeys.ZPRD],
    },
    {
      name: "ZLFW",
      label1: "OFF",
      label2: "",
      label3: "ON",
      actualValue: data?.[replicaKeys.ZLFW],
    },
    {
      name: "ZLFR",
      label1: "OFF",
      label2: "",
      label3: "ON",
      actualValue: data?.[replicaKeys.ZLFR],
    },
  ];
  return result;
};
export const controlPanelSwitchData = (data) => {
  let result = [
    {
      name: "BLHO",
      label1: "OFF",
      label2: "",
      label3: "ON",
      actualValue: data?.[replicaKeys.BLHO],
    },
    {
      name: "ZTEL",
      label1: "OFF",
      label2: "",
      label3: "ON",
      actualValue: data?.[replicaKeys.ZTEL],
    },
    {
      name: "ZBAN",
      label1: "OFF",
      label2: "",
      label3: "ON",
      actualValue: data?.[replicaKeys.ZBAN],
    },
    {
      name: "ZPT",
      label1: "DN",
      label2: "",
      label3: "UP",
      actualValue: data?.[replicaKeys.ZPT],
    },
    {
      name: "BLDJ",
      label1: "OFF",
      label2: "",
      label3: "ON",
      actualValue: data?.[replicaKeys.BLDJ],
    },
    {
      name: "BLCP",
      label1: "OFF",
      label2: "AUTO",
      label3: "MAIN",
      actualValue: data?.[replicaKeys.BLCP],
    },
  ];
  return result;
};
export const footPadelData = (data) => {
  let result = [
    { name: "SANDING", value: data?.[replicaKeys.SANDING] },
    { name: "PVEF", value: data?.[replicaKeys.PVEF] },
    { name: "VIGILANCE", value: data?.[replicaKeys.VIGILANCE] },
  ];
  return result;
};
