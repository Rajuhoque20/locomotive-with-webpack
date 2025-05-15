import React, { useEffect, useState } from "react";
import classes from "./home.module.css";
import { Speedometer } from "./speedometer/speedometer";
import { Indicator } from "../../../../components/DDU/indicator/indicator";
import CustomLineGraph from "../../../../components/DDU/lineGraph/lineGraph";
import { TEBEGraph } from "../../../../components/DDU/TEBEGraph/TEBEGraph";
import { Icons } from "#framework";
import MasterLoco from "../../../../components/DDU/locoMode/masterLoco";
import SlaveLoco from "../../../../components/DDU/locoMode/slaveLoco";
import websocket from "../../../../services/Websocket";
import { topics } from "../../../../constant/topic";
import { useDDUBTStore } from "../store";
export const BatteryVolt = ({ value }) => {
  return (
    <div className={classes.batterVolt}>
      <label
        className="fc-1"
        style={{ fontSize:"0.8rem" }}
      >
        BATTERY
      </label>
      
      <label
        className="fc-2 fs-3"
        style={{ fontSize: "0.9rem" }}
      >
        {value} V
      </label>
    </div>
  );
};
export const InputPower = ({ powerVal, freqVal, screen }) => {
  return (
    <div className={classes.batterVolt} style={{lineHeight:screen==="ARC"?1:"auto"}}>
      <label
        className="fc-1 fs-4"
        style={{ fontSize: "0.8rem" }}
      >
        INPUT kW
      </label>
      <label
        className="fc-2 fs-4"
        style={{ fontSize: "0.8rem" }}
      >
        {powerVal}
      </label>
      <label
        className="fc-1 fs-4"
        style={{ fontSize: "0.8rem"}}
      >
        FREQ Hz
      </label>
      <label
        className="fc-2 fs-4"
        style={{ fontSize: "0.8rem" }}
      >
        {freqVal}
      </label>
    </div>
  );
};
export const Panto = ({ type = "Down", screen }) => {
  const { panto_arc_icon1, pantoup_icon, panto_down, ARC_pento_up } = Icons.DDUIcons;
  return (
    <>
      {screen === "ARC" ? (
        <>
          <div
            className={classes.pantoWrapper}
            style={{ flexDirection: "column-reverse" }}
          >
            <label
              className="fc-1 fs-4"
              style={{ fontSize: "0.8rem" }}
            >
              PANTO
            </label>
            <img src={type==="UP"?ARC_pento_up:panto_arc_icon1} />
          </div>
        </>
      ) : (
        <>
          {type === "UP" ? (
            <div className={classes.pantoWrapper}>
              <label
                className="fc-1 fs-4"
                style={{ fontSize: "0.8rem"}}
              >
                PANTO UP
              </label>
              <img src={pantoup_icon}  style={{height:`2rem`}}/>
            </div>
          ) : (
            <div style={{display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center"}}>
              <label
                className="fc-1 fs-4"
                style={{ fontSize: "0.7rem" }}
              >
                PANTO DOWN
              </label>
              <img src={panto_down}  style={{height:`2.2rem`}}/>
            </div>
          )}
        </>
      )}
    </>
  );
};
export const VCB = ({ type = "open", screen }) => {
  const { vcb_arc_icon1, vcb_on_icon:vcb_closed, VCB_on, ARC_VCB_closed } = Icons.DDUIcons;
  return (
    <>
      {screen === "ARC" ? (
        <>
          <div
            className={classes.vcbWrapper}
            style={{ flexDirection: "column-reverse" }}
          >
            <label
              className="fc-1 fs-4"
              style={{ fontSize: '0.8rem' }}
            >
              VCB
            </label>
            <div style={{ background: "none" }}>
              <img src={type==="open"?vcb_arc_icon1:ARC_VCB_closed} />
            </div>
          </div>
        </>
      ) : (
        <>
          {type === "open" ? (
            <div className={classes.vcbWrapper}>
              <label
                className="fc-1 fs-4"
                style={{ fontSize: '0.8rem' }}
              >
                VCB ON
              </label>
              <div>
                <img src={VCB_on} />
              </div>
            </div>
          ) : (
            <div className={classes.vcbWrapper}>
              <label className="fc-1 fs-4">VCB OFF</label>
              <div>
                <img src={vcb_closed} />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
export const Pressure = ({ name, value, unit, color, }) => {
  return (
    <div className={classes.pressure}>
      <label
        className="fc-1 fs-4"
        style={{ fontSize: '0.8rem' }}
      >
        {name}
      </label>
      <span
        style={{ color: color, fontSize: '1rem' }}
        className="fs-1"
      >
        {value}
      </span>
      <label
        className="fc-1 fs-4"
        style={{ fontSize: '0.8rem' }}
      >
        {unit}
      </label>
    </div>
  );
};
export const Indication = ({ label1, lable2, color1, color2, }) => {
  return (
    <div className="d-flex flex-col justify-center align-center">
      <label
        className="fs-1 fc-4 "
        style={{
          color: color1 ? color1 : "auto",
          fontSize: '1rem',
        }}
      >
        {label1}
      </label>
      <label
        className="fs-4 fc-4"
        style={{
          color: color2 ? color2 : "auto",
          fontSize: '0.8rem',
        }}
      >
        {lable2}
      </label>
    </div>
  );
};
export const Vcat = ({ name, value, unit, color }) => {
  return (
    <div className={classes.vcat}>
      <label className="fc-1"  style={{fontSize:"0.8rem"}}>{name}</label>
      <div>
        <span  style={{ color: color ? color : "auto",fontSize:"1.1rem",marginRight:"0.3rem" }}>
          {value}
        </span>
        <label className="fc-1" style={{fontSize:"0.8rem"}}>{unit}</label>
      </div>
    </div>
  );
};
export const TEBE = ({ label1, lable2, value, unit }) => {
  return (
    <div className={classes.tebe}>
      <div>
        <label className="fc-1" style={{fontSize:"0.8rem",}}>{label1}</label>
        <label className="fc-1"  style={{fontSize:"0.8rem",}}>{lable2}</label>
      </div>
      <div>
        <span className="fc-2"  style={{fontSize:"1.1rem",marginRight:"0.4rem"}}>{value}</span>
        <label className="fc-1"  style={{fontSize:"0.8rem",}}>{unit}</label>
      </div>
    </div>
  );
};
export const BombarHome = () => {
 const { commonData } =useDDUBTStore();
  const [bombarHomeScreenData,setBombarHomeScreenData]=useState();
  useEffect(()=>{
    const callback=(event)=>{
      setBombarHomeScreenData(event);
    }
    websocket.subscribe(topics.BOMBARDIER_HOME_SCREEN, callback);
    return()=>{
      websocket.unsubscribeTopic(topics.BOMBARDIER_HOME_SCREEN);
    }
  },[])

  return (
    <div className={classes.bombarHome}>
      <section className={classes.content1}>
        <TEBE label1={"TE/BE"} lable2={"BOGIE 1"} value={commonData?.te_be_bogie_1||0} unit={"kN"}/>
        <TEBE label1={"TE/BE"} lable2={"BOGIE 2"} value={commonData?.te_be_bogie_2||0} unit={"kN"}/>
        <Vcat
          name={"Vcat"}
          value={commonData?.catenary_voltage||0}
          unit={"kV"}
          color={"rgba(30, 144, 255, 1)"}
        />
        <Vcat
          name={"Ipris"}
          value={commonData?.primary_current||0}
          unit={"A"}
          color={"rgba(255, 193, 7, 1)"}
        />
        <TEBEGraph
          data={[
            100, 80, 60, 40, 20,  0,  -20, -40, -60, -80,-100
          ]}
          pointerValue={commonData?.te_be_bogie_1||0}
        />
        <TEBEGraph
          data={[
            100, 80, 60, 40, 20,  0,  -20, -40, -60, -80,-100
          ]}
          pointerValue={commonData?.te_be_bogie_2||0}
        />
        <CustomLineGraph
          backgroundColor="rgba(30, 144, 255, 1)"
          data={[30, 25, 20, 15, 10, 5, 0]}
          pointerValue={commonData?.catenary_voltage||0}
        />
        <CustomLineGraph
          backgroundColor="rgba(255, 193, 7, 1)"
          data={[300, 250, 200, 150, 100, 50, 0]}
          pointerValue={commonData?.primary_current||0}
        />
      </section>
      <section className={classes.section2}>
        <Speedometer value={commonData?.speed||0}/>
        <MasterLoco locoNumber={commonData?.master} direction={commonData?.reverser}/>
        {commonData?.slave===1?<SlaveLoco locoNumber={commonData?.slave} direction={commonData?.reverser}/>:<div></div>}
        
        <BatteryVolt value={commonData?.battery||0} />
        <InputPower powerVal={commonData?.power||0} freqVal={commonData?.frequency||0}/>
    
        <Panto type={commonData?.panto===1?"UP":"DOWN"}/>
        <VCB type={commonData?.vcb===1?"open":'close'} />
        <Indicator label={"BPCS"} status={bombarHomeScreenData?.bpcs===1?"active":"inactive"} />
        <Indicator label={"HOTEL"} status={bombarHomeScreenData?.hotel===1?"active":"inactive"}/>
        
        <Pressure
          name={"MR"}
          value={commonData?.mrPressure||0}
          unit={"kg/cm2"}
          color={"rgba(229, 57, 53, 1)"}
        />
        <Pressure
          name={"BP"}
          value={commonData?.bpPressure||0}
          unit={"kg/cm2"}
          color={"rgba(229, 57, 53, 1)"}
        />
        <Indication label1={"O/C"} lable2={"PRIMARY"} 
         color1={bombarHomeScreenData?.overCurrent===1?"rgba(255, 193, 7, 1)":""}
         color2={bombarHomeScreenData?.overCurrent===1?"rgba(255, 193, 7, 1)":""}
        />
        <Indication 
        label1={"E/F"} 
        lable2={"POWER"}
        color1={bombarHomeScreenData?.faultIndicator===1?"rgba(255, 193, 7, 1)":""}
        color2={bombarHomeScreenData?.faultIndicator===1?"rgba(255, 193, 7, 1)":""}
        />
        <Indication
          label1={"E/F"}
          lable2={"AUXILIARY"}
          color1={bombarHomeScreenData?.faultIndicator===2?"rgba(255, 193, 7, 1)":""}
          color2={bombarHomeScreenData?.faultIndicator===2?"rgba(255, 193, 7, 1)":""}
        />
        <Indication
         label1={"E/F"} 
         lable2={"CONTROL"}
         color1={bombarHomeScreenData?.faultIndicator===3?"rgba(255, 193, 7, 1)":""}
         color2={bombarHomeScreenData?.faultIndicator===3?"rgba(255, 193, 7, 1)":""}
        />
        <Indication
          label1={"BC 1"}
          lable2={commonData?.a_9===3||commonData?.a_9===4||commonData?.a_9===5?"APPLIED":"RELEASED"}
          color1={"var(--color-white)"}
          color2={commonData?.a_9===3||commonData?.a_9===4||commonData?.a_9===5?"rgba(255, 193, 7, 1)":"rgba(40, 167, 69, 1)"}
        />
        <Indication
          label1={"BC 2"}
          lable2={commonData?.a_9===3||commonData?.a_9===4||commonData?.a_9===5?"APPLIED":"RELEASED"}
          color1={"var(--color-white)"}
          color2={commonData?.a_9===3||commonData?.a_9===4||commonData?.a_9===5?"rgba(255, 193, 7, 1)":"rgba(40, 167, 69, 1)"}
        />
      </section>
    </div>
  );
};
