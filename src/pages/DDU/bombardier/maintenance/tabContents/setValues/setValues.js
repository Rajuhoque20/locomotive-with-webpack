import React, { useState } from 'react'
import classes from './setValues.module.css';
import { SetDateAndTime } from './setDateAndTime/setDateAndTime';
import { SetLocoDetails } from './setLocoDetails/setLocoDetails';
import { SetWheelDiameter } from './setWheelDiameter/setWheelDiameter';
export const SubTab=({data, handleClick, subTab})=>{
    return(
        <div className={classes.subTabs}>
            {data?.map((item,index)=>{
                return(
                    <span key={index} onClick={()=>handleClick(item)} className={`${subTab===item?"bg-2":"bg-5"}`} style={{textAlign:"center"}}>{item}</span>
                )
            })}
        </div>
    )
}
export default function SetValues() {
    const [subTab, setSubTab]=useState("SET DATE & TIME");
    const subTabs=["SET DATE & TIME", "SET LOCO DETAILS", "SET WHEEL DIAMETER"];
  return (
    <div className={classes.container}>
        {subTab==="SET DATE & TIME"&&<SetDateAndTime/>}
        {subTab==="SET LOCO DETAILS"&&<SetLocoDetails/>}
        {subTab==="SET WHEEL DIAMETER"&&<SetWheelDiameter/>}
        <SubTab data={subTabs} handleClick={(value)=>setSubTab(value)} subTab={subTab}/>
    </div>
  )
}
