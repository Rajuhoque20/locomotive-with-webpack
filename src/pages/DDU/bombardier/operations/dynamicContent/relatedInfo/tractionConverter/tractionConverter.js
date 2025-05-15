import React, { useEffect, useState } from 'react'
import classes from './tractionConverter.module.css';
import { topics } from '../../../../../../../constant/topic';
import websocket from '../../../../../../../services/Websocket';

export default function TractionConverter() {

      const [dataInfo, setData]=useState([]);
      useEffect(()=>{
        const callback=(event)=>{
          setData(event);
        }
        websocket.subscribe(topics.TRACTIONCONVERTOR, callback);
        return()=>{
          websocket.unsubscribeTopic(topics.TRACTIONCONVERTOR);
        }
      },[]);
      // console.log("dataInfo",dataInfo)
      const tractionData=[
        {
            title:"TRACTION CONVERTER 1 & 2",
            value1:"TRACTION CONVERTER 1",
            value2:"TRACTION CONVERTER 2",
        },
        {
            title:"SUBSYSTEM STATUS",
            value1:dataInfo?.subsystem_status?.[0]||"OFF",
            value2:dataInfo?.subsystem_status?.[1]||"OFF",
        },
        {
            title:"INPUT CONTACTOR",
            value1:dataInfo?.inputContactor?.[0]||"OFF",
            value2:dataInfo?.inputContactor?.[1]||"OFF",
        },
        {
            title:"PRECHARGE CONTACTOR",
            value1:dataInfo?.prechargeContactor?.[0]||"OFF",
            value2:dataInfo?.prechargeContactor?.[1]||"OFF",
        },
        {
            title:"INPUT CURRENT",
            value1:dataInfo?.inputCurrent?.[0]||0+" Amp",
            value2:dataInfo?.inputCurrent?.[1]||0+" Amp",
        },
        {
            title:"DC LINK VOLTAGE",
            value1:dataInfo?.dcLinkVoltage?.[0]||0+" Volt",
            value2:dataInfo?.dcLinkVoltage?.[1]||0+" Volt",
        },
        {
            title: "OUTPUT PHASE CURRENTS",
            value1: [dataInfo?.outputCurrent?.[0]||0+" Amp", dataInfo?.outputCurrent?.[1]||0+" Amp", dataInfo?.outputCurrent?.[2]||0+" Amp",],
            value2: [dataInfo?.outputCurrent?.[3]||0+" Amp", dataInfo?.outputCurrent?.[4]||0+" Amp",dataInfo?.outputCurrent?.[5]||0+" Amp",],
        },
        {
            title:"OIL PRESSURES",
            value1:dataInfo?.oilPressure?.[0]||0+"0 bar",
            value2:dataInfo?.oilPressure?.[1]||0+"0 bar",
        },
        {
            title:"OIL TEMPERATURES",
            value1:dataInfo?.oilTemperature?.[0]||0+" C",
            value2:dataInfo?.oilTemperature?.[1]||0+" C",
        },
    ];
  
  return (
    <div className={classes.container}>
        {tractionData?.map((item,index)=>{
         
            return(
                <>
                <label>{item.title}</label>
                {Array.isArray(item.value1)?
                <div className={classes.multipleValue}>
                  {item.value1.map((item2, index2)=>(
                    <span>{item2}</span>
                  ))}
                </div>
                :<span>{item.value1}</span>}
                  {Array.isArray(item.value2)?
                <div className={classes.multipleValue}>
                  {item.value1.map((item2, index2)=>(
                    <span>{item2}</span>
                  ))}
                </div>
                :
                <span>{item.value2}</span>}
                </>
            )
        })}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}
