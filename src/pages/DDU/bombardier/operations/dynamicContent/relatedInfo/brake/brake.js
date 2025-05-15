import React, { useEffect, useState } from 'react'
import classes from './brake.module.css';
import { topics } from '../../../../../../../constant/topic';
import websocket from '../../../../../../../services/Websocket';

export default function Brake() {

  const [dataInfo, setData]=useState([]);
  useEffect(()=>{
    const callback=(event)=>{
      // console.log("data",event)
      setData(event);
    }
    websocket.subscribe(topics.BRAKES, callback);
    return()=>{
      websocket.unsubscribeTopic(topics.BRAKES);
    }
  },[]);

  const brakeData=[
    {
        title:"BRAKING SYSTEM",
        value:"",
    },
    {
        title:"BL KEY STATUS",
        value:"OFF",
    },
    {
        title:"MASTER CONTROLLER",
        value:dataInfo?.masterController||"OFF",
    },
    {
        title:"BE REFERENCE",
        value:dataInfo?.be_ref||0+" kN",
    },
    {
        title:"COMPRESSOR 1,2",
        value:[dataInfo?.compressor12?.[0]||"OFF", dataInfo?.compressor12?.[1]||"OFF"],
    },
    {
        title:"BE ACTUAL (ELECTRICAL)",
        value:dataInfo?.be_actual||"OFF",
    },
    {
        title:"EQUI. PNEUMATIC BRAKE DEMAND",
        value:dataInfo?.brakeDemand||"OFF",
    },
    {
        title:"EMERGENCY BRAKE",
        value:"OFF",
    },
    {
        title:"VIGILANCE ACTIVATED / PENALTY BRAKE",
        value:"OFF",
    },
    {
        title:"BRAKE CYLINDER PRESSURE",
        value:"RELEASED",
    },
    {
        title:"ANTI SLIP APPLIED",
        value:"OFF",
    },
    {
        title:"BP PRESSURE",
        value:"2.1 kg/cm2",
    }, 
];


  return (
    <div className={classes.container}>
        {brakeData?.map((item,index)=>{
            return(
                <>
                <span className={classes.title}>{item.title}</span>
                {Array.isArray(item.value)?
                <>
               {item.value?.map((item,index)=>{
                return(
                    <span>{item}</span>
                )
               })}
                </>
                :
                <span style={{gridColumn:'span 2'}}>{item.value}</span>
                }
               
                </>
            )
        })}
         <span></span>
         <span style={{gridColumn:'span 2'}}></span>
    </div>
  )
}
