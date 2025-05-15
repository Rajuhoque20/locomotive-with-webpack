import React from "react";
import { Icons } from "#framework";
import { replicaKeys } from "../../../constant/cabReplica";
import { IndicatorBtn } from "../../../components/cab-replica/IndicatorButton/IndicatorButton";
import { Indicator } from "../../../components/cab-replica/Indicator/Indicator";
import { PanelBSwitchData } from "./utilityMethod";
import SwitchComp from "../../../components/cab-replica/SwitchComp/SwitchComp";
export const EmergencyStopButton=({value})=>{
  const {
    emergency_stop,
    emergency_stop2,
  } = Icons.CRIcons;
  return(
    <div>
    <img
      src={
       value
          ? emergency_stop
          : emergency_stop2
      }
      style={{ height: "13vh" }}
    />
  </div>
  )
}
const PanelB = ({ data }) => {
  const {
    bpfl_icon1,
    bpfl_icon2,
    emergency_stop,
    emergency_stop2,
    buzzer_off,
    buzzer_on,
  } = Icons.CRIcons;
  const switchData = PanelBSwitchData(data);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1.3fr 1fr",
        padding: "2vh 0 0 0..5vw",
        gap: "1vw",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1vh",
        }}
      >
       <EmergencyStopButton value={ data?.[replicaKeys.EMERGENCY_PUSH_BUTTON]}/>
        {switchData?.slice(0, 3)?.map((item, index) => {
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={data?.[replicaKeys.BZ_V_O_F] ? buzzer_on : buzzer_off}
            style={{ width: "15vh" }}
          />
          <span style={{ fontSize: "clamp(0.6rem, 1.3vh, 3vh)", color:"#fff" }}>
            BZ-V-O-F
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
        }}
      >
        <div>
          <IndicatorBtn
            name={"BPVG"}
            color={"rgb(217, 222, 225)"}
            type={"button"}
            value={data?.[replicaKeys.BPVG]}
          />
        </div>
        {switchData?.map((item, index) => {
          if (index < 3) {
            return;
          }
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <Indicator
            name="LSFI"
            color={"red"}
            value={data?.[replicaKeys.LSFI]}
          />
          <Indicator
            name="BPFA"
            color={"yellow"}
            value={data?.[replicaKeys.BPFA_LIGHT]}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "center",
              gap: "0.5vh",
            }}
          >
            <div
              style={{
                display: "flex",
                // width: "6.3vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={data?.[replicaKeys.BPFL] ? bpfl_icon1 : bpfl_icon2}
                style={{
                  objectFit: "cover",
                  transform: "scale(1.17)",
                  width: "90%",
                }}
              />
            </div>
            <span
              style={{ fontSize: "clamp(0.6rem, 1.3vh, 3vh)", color: "#fff" }}
            >
              BPFL
            </span>
          </div>
        </div>
      </div>
      {/* <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          rowGap: "2vh",
          gridTemplateRows: "50% 50%",
        }}
      >
        <div>
          <img
            src={
              data?.[replicaKeys.EMERGENCY_PUSH_BUTTON]
                ? emergency_stop
                : emergency_stop2
            }
            style={{ height: "10vh" }}
          />
        </div>
        {switchData?.map((item, index) => {
          if (index === 3) {
            return (
              <>
                <div style={{ padding: "1vh" }}>
                  <IndicatorBtn
                    name={"BPVG"}
                    color={"rgb(217, 222, 225)"}
                    type={"button"}
                    value={data?.[replicaKeys.BPVG]}
                  />
                </div>
                <SwitchComp
                  key={index}
                  name={item.name}
                  label1={item.label1}
                  label2={item.label2}
                  label3={item.label3}
                  actualValue={item.actualValue}
                />
              </>
            );
          }
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={data?.[replicaKeys.BZ_V_O_F] ? Speaker : Speaker}
            style={{ width: "100%" }}
          />
          <span>BZ-V-O-F</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "33% 33% 33%" }}>
          <Indicator
            name="LSFI"
            color={"red"}
            value={data?.[replicaKeys.LSFI]}
          />
          <Indicator
            name="BPFA"
            color={"yellow"}
            value={data?.[replicaKeys.BPFA_LIGHT]}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5vh",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "6vmin",
                width: "6vmin",
                paddingTop: "0.7vh",
              }}
            >
              <img
                src={data?.[replicaKeys.BPFL] ? bpfl_icon1 : bpfl_icon2}
                style={{ objectFit: "cover", transform: "scale(1.17)" }}
              />
            </div>
            <span style={{ color: "#fff", fontSize: "0.8vw" }}>BPFL</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default React.memo(PanelB);
