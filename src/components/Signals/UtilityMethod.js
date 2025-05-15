import { signalKeys } from "../../constant/signalKeys";
import {
  circleColor,
  MACLFourCLAttensionData,
  MACLFourCLCautionData,
  MACLFourCLProceedData,
  MACLFourCLStopData,
  MACLThreeCLAttensionData,
  MACLThreeCLCautionData,
  MACLThreeCLProceedData,
  MACLThreeCLStopData,
  shuntingData,
  threeCLCautionData,
  threeCLProceedData,
  threeCLStopData,
  twoCLProceedData,
  twoCLStopData,
} from "./constant";
export const getMACLData = (type, maclType) => {
  let result;
  if (maclType === 3) {
    result =
      type === signalKeys.PROCEED
        ? MACLThreeCLProceedData
        : type === signalKeys.ATTENTION
        ? MACLThreeCLAttensionData
        : type === signalKeys.CAUTION
        ? MACLThreeCLCautionData
        : MACLThreeCLStopData;
  } else if (maclType === 4) {
    result =
      type === signalKeys.PROCEED
        ? MACLFourCLProceedData
        : type === signalKeys.ATTENTION
        ? MACLFourCLAttensionData
        : type === signalKeys.CAUTION
        ? MACLFourCLCautionData
        : MACLFourCLStopData;
  }

  return result;
};
export const getThreeCLData = (type) => {
  let result =
    type === signalKeys.PROCEED
      ? threeCLProceedData
      : type === signalKeys.CAUTION
      ? threeCLCautionData
      : threeCLStopData;
  return result;
};
export const getTwoCLData = (type) => {
  let result = type === signalKeys.PROCEED ? twoCLProceedData : twoCLStopData;
  return result;
};

export const getCallingCLData = (type, callingType) => {
  let result;
  if (callingType === 3) {
    result =
      type === signalKeys.PROCEED
        ? threeCLProceedData
        : type === signalKeys.CAUTION
        ? threeCLCautionData
        : threeCLStopData;
  } else if (callingType === 2) {
    result = type === signalKeys.PROCEED ? twoCLProceedData : twoCLStopData;
  } else if (callingType === 4) {
    result =
      type === signalKeys.PROCEED
        ? MACLFourCLProceedData
        : type === signalKeys.CAUTION
        ? MACLFourCLCautionData
        : type === signalKeys.ATTENTION
        ? MACLFourCLAttensionData
        : MACLFourCLStopData;
  }
  return result;
};
export const getShuntingData = () => {
  return shuntingData;
};

export const getTwoCLStopData = (type) => {
  const proceedData = [
    {
      color1: circleColor.green.color1,
      color2: circleColor.green.color2,
    },
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
    {
      color1: circleColor.green.color1,
      color2: circleColor.green.color2,
    },
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
  ];
  const stopData = [
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
    {
      color1: circleColor.red.color1,
      color2: circleColor.red.color2,
    },
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
    {
      color1: circleColor.red.color1,
      color2: circleColor.red.color2,
    },
  ];
  const cautionData = [
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
    {
      color1: circleColor.red.color1,
      color2: circleColor.red.color2,
    },
    {
      color1: circleColor.green.color1,
      color2: circleColor.green.color2,
    },
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
  ];
  let result =
    type === signalKeys.PROCEED
      ? proceedData
      : type === signalKeys.STOP
      ? stopData
      : type === signalKeys.CAUTION
      ? cautionData
      : [];
  return result;
};

export const getPrewarnerSignalData = (type) => {
  const proceedData = [
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
    {
      color1: circleColor.green.color1,
      color2: circleColor.green.color2,
    },
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
  ];
  const attentionData = [
    {
      color1: circleColor.yellow.color1,
      color2: circleColor.yellow.color2,
    },
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
    {
      color1: circleColor.yellow.color1,
      color2: circleColor.yellow.color2,
    },
  ];
  const cautionData = [
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
    {
      color1: circleColor.yellow.color1,
      color2: circleColor.yellow.color2,
    },
  ];
  let result =
    type === signalKeys.PROCEED
      ? proceedData
      : type === signalKeys.ATTENTION
      ? attentionData
      : type === signalKeys.CAUTION
      ? cautionData
      : [];
  return result;
};
export const getOneTwoWarnerSignalData = (type) => {
  const proceedData = [
    {
      color1: circleColor.green.color1,
      color2: circleColor.green.color2,
    },
    {
      color1: circleColor.green.color1,
      color2: circleColor.green.color2,
    },
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
  ];

  const cautionData = [
    {
      color1: circleColor.green.color1,
      color2: circleColor.green.color2,
    },
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
    {
      color1: circleColor.red.color1,
      color2: circleColor.red.color2,
    },
  ];
  let result =
    type === signalKeys.PROCEED
      ? proceedData
      : type === signalKeys.CAUTION
      ? cautionData
      : [];
  return result;
};

export const getMACLFourCLCallingData = (type) => {
  const proceedData = [
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
    {
      color1: circleColor.red.color1,
      color2: circleColor.red.color2,
    },
  ];
  const stopData = [
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
    {
      color1: circleColor.red.color1,
      color2: circleColor.red.color2,
    },
  ];
  const cautionData = [
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
    {
      color1: circleColor.yellow.color1,
      color2: circleColor.yellow.color2,
    },
    {
      color1: circleColor.grey.color1,
      color2: circleColor.grey.color2,
    },
  ];
  let result =
    type === signalKeys.PROCEED
      ? proceedData
      : type === signalKeys.STOP
      ? stopData
      : type === signalKeys.CAUTION
      ? cautionData
      : [];
  return result;
};
