import React, { useEffect, useState } from 'react'
import classes from './tractionMotor.module.css';
import websocket from '../../../../../../../services/Websocket';
import { topics } from '../../../../../../../constant/topic';

export default function TractionMotor() {

      const [dataInfo, setData]=useState([]);
      useEffect(()=>{
        const callback=(event)=>{
          setData(event);
        }
        websocket.subscribe(topics.TRACTIONMOTOR, callback);
        return()=>{
          websocket.unsubscribeTopic(topics.TRACTIONMOTOR);
        }
      },[]);

      // console.log("dataInfo",dataInfo)
      const tractionMotorData=[
        {
            title:"SUB SYSTEM STATUS",
            value:[dataInfo?.subsystem_status?.[0]||"OFF",dataInfo?.subsystem_status?.[1]|| "OFF"],
        },
        {
            title:"CONV I/P CONTACTOR",
            value:[dataInfo?.inputContactor?.[0]||"OFF",dataInfo?.inputContactor?.[1]||"OFF"],
        },
        {
            title:"CONV DC LINK VOLT",
            value:[dataInfo?.convLinkVoltage?.[0]||0+' Volt', dataInfo?.convLinkVoltage?.[1]||0+' Volt',],
        },
        {
            title:"CONV OUTPUT CURRENT",
            value:[dataInfo?.convOutputCurrent?.[0]||0+" Amp",dataInfo?.convOutputCurrent?.[1]||0+" Amp"],
        },
        {
            title:"WHEEL SLIP",
            value:[dataInfo?.wheelSlip||"OFF"],
        },
        {
            title:"MOTOR SPEED",
            value:[dataInfo?.TmSpeed?.[0]||0,dataInfo?.TmSpeed?.[1]||0,dataInfo?.TmSpeed?.[2]||0,dataInfo?.TmSpeed?.[3]||0,dataInfo?.TmSpeed?.[4]||0,dataInfo?.TmSpeed?.[5]||0,],
        },
        {
            title:"MOTOR TEMPERATURE",
            value:[dataInfo?.TmTemperature?.[0]||0+" °C",dataInfo?.TmTemperature?.[1]||0+" °C",dataInfo?.TmTemperature?.[2]||0+" °C",dataInfo?.TmTemperature?.[3]||0+" °C",dataInfo?.TmTemperature?.[4]||0+" °C",dataInfo?.TmTemperature?.[5]||0+" °C"],
        },
        {
            title:"TE (REFERENCE)",
            value:[dataInfo?.te_ref?.[0]||0+" kN",dataInfo?.te_ref?.[1]||0+" kN",dataInfo?.te_ref?.[2]||0+" kN",dataInfo?.te_ref?.[3]||0+" kN",dataInfo?.te_ref?.[4]||0+" kN", dataInfo?.te_ref?.[5]||0+" kN",],
        },
        {
            title:"TE (ACTUAL)",
            value:[dataInfo?.te_act?.[0]||0+" kN",dataInfo?.te_act?.[1]||0+" kN",dataInfo?.te_act?.[2]||0+" kN",dataInfo?.te_act?.[3]||0+" kN",dataInfo?.te_act?.[4]||0+" kN", dataInfo?.te_act?.[5]||0+" kN",],
        },
        {
            title:"BE (REFERENCE)",
            value:[dataInfo?.be_ref?.[0]||0+" kN",dataInfo?.be_ref?.[1]||0+" kN",dataInfo?.be_ref?.[2]||0+" kN",dataInfo?.be_ref?.[3]||0+" kN",dataInfo?.be_ref?.[4]||0+" kN",dataInfo?.be_ref?.[5]||0+" kN",],
        },
        {
            title:"BE (ACTUAL)",
            value:[dataInfo?.be_act?.[0]||0+" kN",dataInfo?.be_act?.[1]||0+" kN",dataInfo?.be_act?.[2]||0+" kN",dataInfo?.be_act?.[3]||0+" kN",dataInfo?.be_act?.[4]||0+" kN",dataInfo?.be_act?.[5]||0+" kN",],
        },
    ];

  return (
    <div className={classes.container}>
        {tractionMotorData?.map((item,index)=>{
         
            return(
                <>
                <label>{item.title}</label>
                <div className={classes.multipleValue} style={{display:"grid", gridTemplateColumns:`repeat(${item.value?.length}, 1fr)`}}>
                  {item.value.map((item2, index2)=>(
                    <span>{item2}</span>
                  ))}
                </div>
                </>
            )
        })}
        <span></span>
        <span></span>
    </div>
  )
}
