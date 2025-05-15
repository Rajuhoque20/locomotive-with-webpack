import React, { useEffect, useState } from 'react'
import classes from './auxiliaryConverter.module.css';
import { topics } from '../../../../../../../constant/topic';
import websocket from '../../../../../../../services/Websocket';
export default function AuxiliaryConverter({data}) {

  const [datainfo, setData]=useState([]);
  useEffect(()=>{
    const callback=(event)=>{
      setData(event);
    }
    websocket.subscribe(topics.AUXILIARYCONVERTOR, callback);
    return()=>{
      websocket.unsubscribeTopic(topics.AUXILIARYCONVERTOR);
    }
  },[]);
  // console.log("data",datainfo)
  const auxiliaryData=[
    {
        title:"AUXILIARY CONVERTER",
        value1:"BUR 1",
        value2:"BUR 2",
        value3:"BUR 3",
    },
    {
        title:"SUB SYSTEM STATUS",
        value1:datainfo?.subsystem_status?.[0]||"OFF",
        value2:datainfo?.subsystem_status?.[1]||"OFF",
        value3:datainfo?.subsystem_status?.[2]||"OFF",
    },
    {
        title:"AUXILIARY WINDING VOLT",
        value1:datainfo?.auxiliaryVoltage?.[0]||0+" V",
        value2:datainfo?.auxiliaryVoltage?.[1]||0+" V",
        value3:datainfo?.auxiliaryVoltage?.[2]||0+" V",
    },
    {
        title:"AUX WINDING I/P CURRENT",
        value1:datainfo?.auxiliaryCurrent?.[0]||0+" Amp",
        value2:datainfo?.auxiliaryCurrent?.[1]||0+" Amp",
        value3:datainfo?.auxiliaryCurrent?.[2]||0+" Amp",
    },
    {
        title:"DC LINK VOLT",
        value1:datainfo?.dcLinkVoltage?.[0]||0+" V",
        value2:datainfo?.dcLinkVoltage?.[1]||0+" V",
        value3:datainfo?.dcLinkVoltage?.[2]||0+" V",
    },
    {
        title:"DC LINK CURRENT",
        value1:datainfo?.dcLinkCurrent?.[0]||0+" Amp",
        value2:datainfo?.dcLinkCurrent?.[1]||0+" Amp",
        value3:datainfo?.dcLinkCurrent?.[2]||0+" Amp",
    },
    {
        title:"OUTPUT VOLT",
        value1:datainfo?.outputVoltage?.[0]||0+" V",
        value2:datainfo?.outputVoltage?.[1]||0+" V",
        value3:datainfo?.outputVoltage?.[2]||0+" V",
    },

    {
        title:"OUTPUT FREQUENCY",
        value1:datainfo?.outputFrequency?.[0]||0+" Hz",
        value2:datainfo?.outputFrequency?.[1]||0+" Hz",
        value3:datainfo?.outputFrequency?.[2]||0+" Hz",
    },
    {
        title:"BUR GROUPING CONTACTOR STATUS",
        value1: ["54/1", "54/2", datainfo?.burStatus?.[0]||"OFF",datainfo?.burStatus?.[1]||"OFF"],
        value2: ["54/3", "54/4",datainfo?.burStatus?.[2]||"OFF",datainfo?.burStatus?.[3]||"OFF"],
        value3:["54/5", datainfo?.burStatus?.[4]||"OFF"],
    },
    {
        title:"BATTERY VOLTAGE",
        value1:[datainfo?.batteryVoltage?.[0]||0+" V",datainfo?.batteryVoltage?.[1]||0+" V",],
        value2:[datainfo?.batteryVoltage?.[2]||0+" V",
        datainfo?.batteryVoltage?.[3]||0+" V",],
        value3:datainfo?.batteryVoltage?.[4]||0+" V",
    },
];

  return (
    <div className={classes.container}>
        {auxiliaryData?.map((item,index)=>{
            return(
                <>
                <label>{item.title}</label>
                {Array.isArray(item.value1)?
                <div className={classes.multipleValue}  style={{display:"grid", gridTemplateColumns:`repeat(${item.value1?.length/2},1fr)`}}>
                  {item.value1.map((item2, index2)=>(
                    <span>{item2}</span>
                  ))}
                </div>
                :<span>{item.value1}</span>}
                  {Array.isArray(item.value2)?
                <div className={classes.multipleValue}  style={{display:"grid", gridTemplateColumns:`repeat(${item.value2?.length/2},1fr)`}}>
                  {item.value2.map((item2, index2)=>(
                    <span>{item2}</span>
                  ))}
                </div>
                :
                <span>{item.value2}</span>}
                 {Array.isArray(item.value3)?
                <div className={classes.multipleValue} style={{display:"grid", gridTemplateColumns:`repeat(${item.value3?.length/2},1fr)`}}>
                  {item.value3.map((item3, index3)=>(
                    <span>{item3}</span>
                  ))}
                </div>
                :<span>{item.value3}</span>}
                {index===auxiliaryData?.length-1&&
                <>
                <span>{item?.value4}</span>
                <span>{item?.value5}</span>
                </>}
                </>
            )
        })}
    </div>
  )
}
