import React from 'react'
import classes from './ARCSubSystem.module.css';
import SubSystem from '../../../../../components/DDU/subSystem/subSystem';
export default function ARCSubSystem() {
    let commonData={};
    const subSystems = [
        {
          name: "MAIN",
          number: "SS01",
          operative: commonData?.SS01,
        },
        {
          name: "Bogie 1",
          number: "SS02",
          operative: commonData?.SS02,
        },
        {
          name: "Bogie 2",
          number: "SS03",
          // isolated: true,
          operative: commonData?.SS03,
        },
        {
          name: "MAIN",
          number: "SS04",
          // isolated: true,
          operative: commonData?.SS04,
        },
        {
          name: "MAIN",
          number: "SS05",
          operative: commonData?.SS05,
        },
        {
          name: "MAIN",
          number: "SS06",
          operative: commonData?.SS06,
        },
        {
          name: "MAIN",
          number: "SS07",
          operative: commonData?.SS07,
        },
        {
          name: "MAIN",
          number: "SS08",
          operative: commonData?.SS08,
        },
        {
          name: "MAIN",
          number: "SS09",
          operative: commonData?.SS09,
        },
        {
          name: "MAIN",
          number: "SS10",
          operative: commonData?.SS10,
        },
        {
          name: "MAIN",
          number: "SS11",
          operative: commonData?.SS11,
        },
        {
          name: "MAIN",
          number: "SS12",
          operative: commonData?.SS12,
        },
        {
          name: "MAIN",
          number: "SS13",
          operative: commonData?.SS13,
        },
        {
          name: "MAIN",
          number: "SS14",
          operative: commonData?.SS14,
        },
        {
          name: "MAIN",
          number: "SS15",
          operative: commonData?.SS15,
        },
        {
          name: "MAIN",
          number: "SS16",
          operative: commonData?.SS16,
        },
        {
          name: "MAIN",
          number: "SS17",
          operative: commonData?.SS17,
        },
        {
          name: "MAIN",
          number: "SS18",
          operative: commonData?.SS18,
        },
        {
          name: "MAIN",
          number: "SS19",
          operative: commonData?.SS19,
        },
        {
          name: "MAIN",
          number: "SS20",
          operative: commonData?.SS19,
        },
      ];
  return (
    <div className={classes.container}>
        <span className='fs-4 fc-7'>SUB - SYSTEMS</span>
        <div className={classes.subSystems}>
       {subSystems?.map((item,index)=>{
                    return(
                        <SubSystem
                        nameColor={"var(--color-black)"}
                        key={index}
                        width={"100%"}
                        height={"100%"}
                        name={item?.name}
                        number={item?.number}
                        isOperative={item?.operative}
                        isIsolated={item?.isolated}
                        lineWidth={"50%"}
                        // onClick={()=>handleActivateScreen({type:"isolate SS", data:item})}
                        />
                    )
                })}
        </div>
    </div>
  )
}
