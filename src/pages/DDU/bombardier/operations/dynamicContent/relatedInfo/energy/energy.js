import React, { useEffect, useState } from 'react'
import classes from './energy.module.css';
import websocket from '../../../../../../../services/Websocket';
import { topics } from '../../../../../../../constant/topic';
export const Button1=({title, width, height, styles, onClick})=>{
  let style={...styles, width:width, height:height };
  return(
    <>
        {style?<button style={style} onClick={onClick} className={classes.Button1}>{title}</button>:
        <button onClick={onClick}>{title}</button>}
    </>
  )
}
export default function Energy() {

   const [datainfo, setData]=useState([]);
  useEffect(()=>{
    const callback=(event)=>{
      setData(event);
    }
    websocket.subscribe(topics.ENERGY, callback);
    return()=>{
      websocket.unsubscribeTopic(topics.ENERGY);
    }
  },[]);
  // console.log("data",datainfo)

  const energyData=[
    {
        title:"ENERGY MONITORING",
        value:"",
    },
    {
        title:"CUM. TRACTION ENERGY",
        value:datainfo?.cum_traction_energy||0+" kwhr",
    },
    {
        title:"CUM. REGENERATED ENERGY",
        value:datainfo?.cum_regenaration_energy||" kwhr",
    },
    {
        title:"ENERGY REGENERATED (TRIP)",
        value:datainfo?.energy_regenarated_trip||0+" kwhr",
    },
    {
        title:"REGENERATION RATIO (CUM)",
        value:datainfo?.regeneration_ratio_cum||"",
    },
    {
        title:"REGENERATION RATIO (TRIP)",
        value:datainfo?.regeneration_ratio_trip||"",
    },
    {
        title:"DISTANCE TRAVELLED (TRIP)",
        value:datainfo?.distance_travelled_trip||0+" km",
    },
    {
        title:"DISTANCE TRAVELLED (TOTAL)",
        value:datainfo?.distance_travelled_cum||0+" km",
    },
];

  return (
    <>
    <div className={classes.container}>
        {energyData?.map((item,index)=>{
            return(
                <>
                <span>{item.title}</span>
                <span>{item.value}</span>
                </>
            )
        })}
    </div>
    <div className={classes.reset}>
        <Button1 title={"RESET TRIP"}/>
    </div>
    </>
  )
}
