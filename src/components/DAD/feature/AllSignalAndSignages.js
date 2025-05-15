import React from "react";
import {
  featureIcons,
  generateSmallPath,
  interpolatePoints,
} from "../constant";
import SpeedIndicator from "../../Signage/SpeedIndicator";
import KMPost from "../../Signage/KMPost";
import GradientPost from "../../Signage/GradientPost";
import Ohemast from "../../Signage/Ohemast";
import CautionIndicatorText from "../../Signage/CautionIndicatorText";
import StationNBPrimary from "../../Signage/StationNBPrimary";
import StationNBSecondary from "../../Signage/StationNBSecondary";
import three_point_cl from "../../../assets/Signal/three_point_cl.svg";
import BridgeBoard from "../../Signage/BridgeBoard";
import ThreeCL from "../../Signals/ThreeCL";
import { signalKeys } from "../../../constant/signalKeys";
import TwoCL from "../../Signals/TwoCL";
import MACLAndCLComp from "../../Signals/MACLAndCLComp";
import CallingCL from "../../Signals/CallingCL";
import ShuntingCL from "../../Signals/ShuntingCL";
import ShuntingPlusCallingCL from "../../Signals/ShuntingPLusCallingCL";
import RepeatingCL from "../../Signals/RepeatingCL";
import DirectionalSignal from "../../Signals/DirectionalSignal";
import { getDirectionalCLData } from "./UtilityMethods";
import {
  getCallingCLData,
  getMACLFourCLCallingData,
  getOneTwoWarnerSignalData,
  getPrewarnerSignalData,
  getShuntingData,
  getTwoCLStopData,
} from "../../Signals/UtilityMethod";
import TwoCLStopWarner from "../../Signals/TwoCLStopWarner";
import PrewarnerSignal from "../../Signals/PrewarnerSignal";
import OneTwoWarnerSignal from "../../Signals/OneTwoWarnerSignal";
import MACL4CLCalling from "../../Signals/MACL4CLCalling";
import MACLFourCLSquareBox from "../../Signals/MACLFourCLSquareBox";
export default function AllSignalAndSignages({ item }) {
  const clCircleCount = 3;
  const clType = signalKeys.PROCEED;
  let directionalCLData = { ...getDirectionalCLData() };
  directionalCLData["SHUNTING_DATA"] = getShuntingData();
  directionalCLData["CL_DATA"] = getCallingCLData(clType, clCircleCount);
  const TwoCLStopData = getTwoCLStopData(signalKeys.PROCEED);
  const prewarnerSignalData = getPrewarnerSignalData(signalKeys.PROCEED);
  const oneTwoWarnerSignalData = getOneTwoWarnerSignalData(signalKeys.CAUTION);
  const MACLFourCLCallingData = {};
  MACLFourCLCallingData["text"] = "S-6";
  MACLFourCLCallingData["isCallingActive"] = true;
  MACLFourCLCallingData["data"] = getMACLFourCLCallingData(signalKeys.CAUTION);
  const MACLFourCLSqaureBoxData = {};
  MACLFourCLSqaureBoxData["text"] = "S-6";
  MACLFourCLSqaureBoxData["circularText"] = "";
  MACLFourCLSqaureBoxData["squareText"] = "A";
  MACLFourCLSqaureBoxData["data"] = getMACLFourCLCallingData(
    signalKeys.CAUTION
  );
  const signal = item?.signal;
  return (
    <>
      {item?.signages?.type === "stopIndicator" && (
        <image
          x={item.x}
          y={"0"}
          href={featureIcons[item?.signages?.type]}
          width={20}
          height="100%"
        />
      )}
      {item?.signages?.type === "stopDisk" && (
        <image
          x={item.x}
          y={"0"}
          href={featureIcons[item?.signages?.type]}
          width={20}
          height="100%"
        />
      )}
      {item?.signages?.type === "haltStation" && (
        <image
          x={item.x}
          y={"0"}
          href={featureIcons[item?.signages?.type]}
          width={20}
          height="100%"
        />
      )}
      {item?.signages?.type === "sigmaBoard" && (
        <image
          x={item.x}
          y={"0"}
          href={featureIcons[item?.signages?.type]}
          width={15}
          height="100%"
        />
      )}

      {item?.signages&&<foreignObject x={item.x || 0} y={0} width={35} height="100%">
        {/* <SpeedIndicator data={"110"} /> */}
        {/* <KMPost height="8vh" /> */}
        {/* <GradientPost /> */}
        {/* <Ohemast /> */}
        {/* <CautionIndicatorText width="80" /> */}
        {/* <StationNBPrimary width="80" height="8vh" /> */}
        {/* <StationNBSecondary width="80" height="8vh" /> */}
        {/* <BridgeBoardImportant width="80" height="8vh" /> */}
        {/* <BridgeBoard width="80" height="8vh" type="important" /> */}
        {
          // <MACLAndCLComp
          //   type={signalKeys.CAUTION}
          //   maclType={4}
          //   text={"S-14"}
          //   width="50"
          //   height="8vh"
          // />
          // <ThreeCL
          //   type={signalKeys.PROCEED}
          //   text={"S-14"}
          //   width="50"
          //   height="8vh"
          // />}
          // <MACLAndCLComp
          //   maclType={3}
          //   type={signalKeys.ATTENTION}
          //   text={"S-14"}
          //   width="50"
          //   height="8vh"
          // />
          // <CallingCL
          //   callingType={3}
          //   isCallingActive={true}
          //   type={signalKeys.PROCEED}
          //   text={"S-14"}
          //   width="50"
          //   height="8vh"
          // />
          // <CallingCL
          //   callingType={2}
          //   isCallingActive={true}
          //   type={signalKeys.PROCEED}
          //   text={"S-14"}
          //   width="50"
          //   height="8vh"
          // />
          // <ShuntingCL
          //   clType={3}
          //   isShunting={true}
          //   type={signalKeys.PROCEED}
          //   text={"S-14"}
          //   width="50"
          //   height="8vh"
          // />
          // <ShuntingCL
          //   clType={2}
          //   isShunting={true}
          //   type={signalKeys.PROCEED}
          //   text={"S-14"}
          //   width="50"
          //   height="8vh"
          // />
          // <ShuntingCL
          //   clType={2}
          //   isShunting={true}
          //   type={signalKeys.PROCEED}
          //   text={"S-14"}
          //   width="50"
          //   height="8vh"
          // />
          // <ShuntingPlusCallingCL
          //   clType={3}
          //   isShunting={true}
          //   type={signalKeys.PROCEED}
          //   text={"S-14"}
          //   isCalling={true}
          //   isCallingActive={true}
          //   width="50"
          //   height="8vh"
          // />
          // <RepeatingCL
          //   clType={3}
          //   isRepeating={true}
          //   type={signalKeys.PROCEED}
          //   text={""}
          //   width="50"
          //   height="8vh"
          // />
          // <DirectionalSignal
          //   width="50"
          //   height="8vh"
          //   data={directionalCLData}
          // />
          // <TwoCLStopWarner
          //   width="50"
          //   height="8vh"
          //   data={TwoCLStopData}
          // />
          // <PrewarnerSignal
          //   width="50"
          //   height="8vh"
          //   data={prewarnerSignalData}
          // />
          // <OneTwoWarnerSignal
          //   width="50"
          //   height="8vh"
          //   data={oneTwoWarnerSignalData}
          // />
          // <MACLAndCLComp
          //   type={signalKeys.ATTENTION}
          //   maclType={4}
          //   text={"S-14"}
          //   width="50"
          //   height="8vh"
          //   arrowRight={true}
          // />
          // <MACL4CLCalling
          //   data={MACLFourCLCallingData}
          //   text={"S-14"}
          //   width="50"
          //   height="8vh"
          // />
          // <MACLFourCLSquareBox
          //   data={MACLFourCLSqaureBoxData}
          //   width="50"
          //   height="8vh"
          // />
        }
        {/* <MACLFourCLSquareBox
          data={MACLFourCLSqaureBoxData}
          width="50"
          height="8vh"
        /> */}


       
        {item?.signages?.type === "speedIndicator" && (
          <SpeedIndicator data={item?.signages?.config?.speed} />
        )}
        {item?.signages?.type === "cautionIndicator" && (
          <CautionIndicatorText
            width="20"
            data={item?.signages?.config?.speed}
          />
        )}

        {item?.signages?.type === "pole" && (
          <Ohemast data={item?.signages?.config?.value} />
        )}
        {item?.signages?.type === "stationname" && (
          <StationNBPrimary data={item?.signages?.config?.name} />
        )}
        {item?.signages?.type === "signBoard" && (
          <StationNBPrimary data={item?.signages?.config?.value} />
        )}

        {item?.signages?.type === "secondaryStationBoard" && (
          <StationNBSecondary
            width="30"
            height="8vh"
            data={{
              english: item?.signages?.config?.title,
              hindi: item?.signages?.config?.subTitle,
            }}
          />
        )}
        {item?.signages?.type === "kmPost" && (
          <KMPost height="8vh" data={item?.signages?.config?.km} />
        )}
        {item?.signages?.type === "gradientPost" && (
          <KMPost height="8vh" data={item?.signages?.config?.km} />
        )}
       
      </foreignObject>}

      {signal&&<foreignObject x={item.x} y={0} width={18} height={"100%"} style={{ display:"flex", justifyContent:"center", zIndex:100}}>
     
          
          <ShuntingPlusCallingCL
            clType={
              signal?.state?.type?.type === "2CL"
                ? 2
                : signal?.state?.type?.type === "3CL"
                ? 3
                : signal?.state?.type?.type === "4CL"
                ? 4
                : 4
            }
            
            type={signal?.state?.indication==="twoyellow"?
              signalKeys.ATTENTION:signal?.state?.indication==="green"?
              signalKeys.PROCEED:signal?.state?.indication==="yellow"?signalKeys.CAUTION:
               signalKeys.STOP}
            text={"S-14"}
            isCalling={signal?.state.type?.calling}
            isShunting={signal?.state.type?.shunting}
            width="50"
            height="8vh"
          />
        
      </foreignObject>}
    </>
  );
}
