import React, { useContext } from 'react'
import classes from './footer.module.css'
import { Icons } from '#framework';
import ScreenComp from './pixyScreen/screenComp/ScreenComp';
import { useARCStore } from '../store';
import VehicleDiagnostics from './pixyScreen/vehicleDiagnostics/VehicleDiagnostics';
import DiagDataSet from './pixyScreen/diagDataSet/DiagDataSet';
import NodeInformation from './pixyScreen/nodeInformation/NodeInformation';
import InchingMode from './pixyScreen/inchingMode/inchingMode';
import { topics } from '../../../../constant/topic';
import { useData } from '../../../../components/useData';
import { ARCContext } from '../Context';

export const Screen3Content=()=>{
  return(
    <div className={classes.screen3Content}>
      <span>Browse mode for LOCO 33969 rter 3</span>
      <span>DISTURBANCE IN PROCESSOR BUR3</span>
      <span>Try to close the VCB again</span>
      <span>F0801P1</span>
    </div>
  )
}
export const TrainCong=()=>{
  return(
    <div className={classes.trainConfig}>
      <label>TRAIN CONFIGURATION:</label>
      <div>
          <div>
            <span>LOCO</span>
            <span> 33969</span>
          </div>
          <div>
            <span>LOCO</span>
            <span> 00000</span>
          </div>
      </div>

    </div>
  )
}
export const EnergyCounter=({title, data})=>{
  return(
    <div className={classes.energyCounter}>
      <label>{title}</label>
      {data?.map((item, index)=>{
        return(
          <div key={index} className={classes.energyEncounterInfo}>
            <span>{item.name}</span>
            <span>: {item.value}</span>
          </div>
        )
      })}

    </div>
  )
}
export const FooterLoco=({data })=>{
  const {icon_24, icon_25}=Icons.DDUIcons;
    return(
        <div className={classes.footerLoco}>
              <span style={{color:data?.status==="applied"?"rgba(229, 57, 53, 1)":"auto"}}>{data?.subTitle}</span>
              <img src={data?.status==="applied"?icon_25:icon_24}/>
              <label>{data?.title}</label>
        </div>
    )
}
export const FooterContent=()=>{
  const {flg, alg, slg}=useContext(ARCContext);
  const {pixyScreen}=useARCStore();
  const {arrow_right_yellow_icon}=Icons.DDUIcons;

  const {data:pixyData}=useData(topics.ARCPIXY);
  console.log("data",pixyData)
  const menuData=[
    "VEHICLE DIAGNOSTICS",
    "INFORMATION TRAIN BUS",
    "PROCESS INFORMATION"
  ];
  const processInfo=[
    "ENERGY CONSUMPTION",
    "COMMISSIONING DATA",
    "MOTOR TEMPERATURE / SOFTWARE VERSION/ INCHING"
  ];
  const diagnosticsData=[
    {
      name:"LOCO    33969",
      value:"90",
    },
    {
      name:" LOCO    00000",
      value:"00",
    },
    {
      name:" BROWSE MODE",
      value:"",
    },
  ];
  const energyCounterData=[
    {
      name:"CONSUMED",
      value:"000, 020, 303 kWh",
    },
    {
      name:"REGENERATED",
      value:" 001, 000, 632  kWh",
    },
  ];
  const commissionData=[
    "DIAGNOSTIC DATA SETS",
    "NODE INFORMATION",
    "SIMULATION",
  ];
  const daigDataSetData=[
    {
      title:"FLG1: 0091 - Power on of MCE",
      value:["20 - 02 - 23", "13:59:43", "-001"],
    },
    {
      title:"FLG1: 0100 - SS08 auxiliary converter 3 off",
      value:["20 - 02 - 23", "14:00:06", "+000"],
    },
  ];
  const nodeInfo=[
    {
      name:"FLG1",
      value:"590",
    },
    {
      name:"FLG2",
      value:"590",
    },
    {
      name:"SLG1",
      value:"3099",
    },
    {
      name:"SLG2",
      value:"3099",
    },
    {
      name:"ALG1",
      value:"3555h",
    },
    {
      name:"ALG2",
      value:"3555h",
    },

  ];
  const simulationModeData=[
    {
      name:"UPRI M",
      value:"24.70 . KV",
    },
    {
      name:"STATUS",
      value:"0",
    },
    {
      name:"VACT",
      value:"0KPH",
    },
    {
      name:"FLG1",
      value:"590",
    },
    {
      name:"TE / BE DEN",
      value:"00.0 kN",
    },
    {
      name:"SLG1",
      value:"3099",
    },
  ];
  const motorTemperatureData=[
    "TRACTION MOTOR TEMPERATURES",
    "SOFTWARE VERSIONS",
    "INCHING MODE INFORMATION",
  ];
  const tractionMotorData=[
    {
      name:"MOTOR 1",
      value:"43.72",
    },
    {
      name:"MOTOR 4",
      value:"43.72",
    },
    {
      name:"MOTOR 2",
      value:" 42.33",
    },
    {
      name:"MOTOR 5",
      value:"42.86",
    },
    {
      name:"MOTOR 3",
      value:"42.74",
    },
    {
      name:"MOTOR 6",
      value:"42.86",
    },
  ];

  return(
    <>
     {pixyScreen===0&&<ScreenComp title={"MAIN MENU:"} loco={"LOCO  31234"} data={menuData}/>}
     {pixyScreen===1&&<VehicleDiagnostics
     title={"MAIN MENU:"} loco={"LOCO  31234"}
     data={diagnosticsData}
     />}
     {pixyScreen===2&&<ScreenComp  data={[
      " LOCO    1:    FAULT / ISOLATION     MESSAGES",
      " LOCO    2:   FAULT / ISOLATION     MESSAGES "
     ]}/>}
      {pixyScreen===3&&<Screen3Content/>}
      {pixyScreen===4&&
      <div className={classes.notAvailable}>
        <span>LOCO NOT AVAILABLE !</span>
      </div>}
      {pixyScreen===5&&<TrainCong/>}
      {pixyScreen===6&&<ScreenComp title={"PROCESS INFORMATION"} loco={""} data={processInfo}/>}
      {pixyScreen===7&&<EnergyCounter title={"ENERGY COUNTER LOCO 33696"}
      data={energyCounterData}
      />}
        {pixyScreen===8&&<ScreenComp title={"COMMISSIONING DATA"} loco={""} data={commissionData}/>}
        {pixyScreen===9&&<DiagDataSet data={daigDataSetData}/>}
        {pixyScreen===10&&<NodeInformation slaveLocoNumber={0} data={nodeInfo} title={"NODE INFORMATION"}/>}
        {pixyScreen===11&&<NodeInformation slaveLocoNumber={null} data={simulationModeData} title={"SIMULATION MODE"}/>}
        {pixyScreen===12&&<ScreenComp title={"MOTOR TEMPERATURE / SOFTWARE VERSION/ INCHING"} loco={""} data={motorTemperatureData}/>}
        {pixyScreen===13&&<NodeInformation slaveLocoNumber={null} data={tractionMotorData} title={"TRACTION MOTOR TEMPERATURE"}/>}
        {pixyScreen===14&&
      <div className={classes.softwareVersion}>
        <span>SOFTWARE VERSION:</span>
      </div>}
      {pixyScreen===15&&<InchingMode/>}
    </>  
  )
}
export default function ARCFooter() {
  const {parkingBrake, locoBrake, emergencyBrake, a_9}=useContext(ARCContext);
 
  const locoDetails= [
    {
      subTitle:"ANTISPIN",
      title:"LOCO",
       status:(a_9===3||a_9===4||a_9===5)?"applied":"released",
    },
    {
      subTitle:"",
      title:"PARKING",
      status:parkingBrake===1?"applied":"released",
    },
    {
      subTitle:"",
      title:"AUTO",
       status:locoBrake===1?"applied":"released",
    },
    {
      subTitle:"ANTISPIN",
      title:"EMERGENCY",
      status:emergencyBrake===1?"applied":"released",
    },
  ];
  return (
    <div className={classes.container}>
      {locoDetails?.map((item, index)=>{
        return(
          <FooterLoco data={item} key={index}/>
        )
      })}
      <FooterContent/>
    </div>
  )
}
