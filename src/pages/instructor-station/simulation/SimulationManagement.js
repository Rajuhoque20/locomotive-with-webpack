import React from "react";
import RangePicker from "../../components/Instructor-station/UIComp/RangePicker";
import InputSelect from "../../components/Instructor-station/UIComp/InputSelect";
import classes from "./simulation.module.css";
import { SwitchCard } from "../newExercise/TrainConfig";

export default function SimulationManagement() {
  const ControlData = [
    {
      id: 1,
      title: "Track Adhesion Control",
      subTitle: "Optimize traction",
      minRange: 0,
      maxRange: 5,
      stepLength: 1,
      defaultValue: 3,
    },
    {
      id: 2,
      title: "Hauling Power",
      subTitle: "Adjust for terrain and cargoeight",
      minRange: 0,
      maxRange: 15,
      stepLength: 1,
      defaultValue: 9,
    },
    {
      id: 1,
      title: "Rate of BP",
      subTitle: "Balance brake force with trainweight",
      minRange: 0,
      maxRange: 25,
      stepLength: 1,
      defaultValue: 5,
    },
  ];
  const sampleData1=[
    {
        id:1,
        title:'Sun Glare',
        subTitle:"Toggle on for brighter experience or off for more subdued",
        enable:true,
    },
    {
        id:2,
        title:'Rain',
        subTitle:"Toggle on for a dynamic ambience or off for a clear",
        enable:false,
    },
    {
        id:3,
        title:'Lighting',
        subTitle:"Toggle on for a illuminated atmosphere or off for a softer" ,
       enable:true,
    },
]
const sampleData2=[
    {
        id:1,
        title:'Broken Window',
        subTitle:"Damaged front window of locomotivd",
        enable:true,
    },
    {
        id:2,
        title:'Headlight',
        subTitle:"Manage the operation of headlight ",
        enable:false,
    },
    {
        id:3,
        title:'Wiper',
        subTitle:"operate and  adjust wiper" ,
       enable:true,
    },
]
  return (
    <div>
      <div className={classes.headingText}>Management</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "47%" }}>
          <div className={classes.cardContainer}>
            {ControlData?.map((item, id) => {
              return <ControlCard data={item} />;
            })}

          </div>
          <div className={classes.cardContainer}>
                {sampleData1?.map((item,id)=>{

                    return(
                        <SwitchCard data={item} onChange={()=>{}} />  
                    )
                })}
               </div>
               <div className={classes.cardContainer}>
                {sampleData2?.map((item,id)=>{

                    return(
                        <SwitchCard data={item} onChange={()=>{}} />  
                    )
                })}
               </div>
        </div>
        <div style={{ width: "47%" }}>
          <div className={classes.cardContainer}>
            {ControlData?.map((item, id) => {
              return <ControlCard data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export const ControlCard = ({ data }) => {
  return (
    <div className={classes.ControlCard}>
      <div className={classes.cardTitle}>
        <div>{data?.title}</div>
        <div>{data?.subTitle}</div>
      </div>

      <RangePicker
        minRange={data?.minRange}
        maxRange={data?.maxRange}
        defaultValue={data?.defaultValue}
      />
      <InputSelect />
    </div>
  );
};
