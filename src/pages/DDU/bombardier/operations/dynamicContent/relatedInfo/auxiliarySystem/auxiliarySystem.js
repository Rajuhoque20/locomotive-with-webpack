import React, { useEffect, useState } from 'react'
import classes from './auxiliarySystem.module.css';
import websocket from '../../../../../../../services/Websocket';
import { topics } from '../../../../../../../constant/topic';

export default function AuxiliarySystem() {

  const [dataInfo, setData]=useState([]);
    useEffect(()=>{
      const callback=(event)=>{
        setData(event);
      }
      websocket.subscribe(topics.AUXILIARYSYSTEM, callback);
      return()=>{
        websocket.unsubscribeTopic(topics.AUXILIARYSYSTEM);
      }
    },[]);
    // console.log("data",dataInfo)

    const auxiliarySystemData=[
      {
          title:"AUXILIARY SYSTEM",
          value:"",
      },
      {
          title:"COOLING MODE STATUS",
          value:[dataInfo?.coolingModeStatus?.[0]||"OFF", dataInfo?.coolingModeStatus?.[1]||"OFF"],
      },
      {
          title:"AUX. WINDING I/P VOLT",
          value:dataInfo?.auxiliaryVoltage||0+" V",
      },
      {
          title:"BUR SUB SYSTEM STATUS",
          value:[dataInfo?.BUR123Status?.[0]||"OFF",dataInfo?.BUR123Status?.[1]||"OFF",dataInfo?.BUR123Status?.[2]||"OFF",],
      },
      {
          title:"MR BLOWERS 1,2",
          value:[dataInfo?.mrBlower12?.[0]||"OFF", dataInfo?.mrBlower12?.[1]||"OFF",],
      },
      {
          title:"TR BLOWERS 1,2",
          value:[dataInfo?.tmBlower12?.[0]||"OFF",dataInfo?.tmBlower12?.[1]||"OFF",],
      },
      {
          title:"OCB 1,2",
          value:[dataInfo?.ocb12?.[0]||"OFF",dataInfo?.ocb12?.[1]||"OFF",],
      },
      {
          title:"SR OIL PUMP 1,2",
          value:[dataInfo?.sroilPump12?.[0]||"OFF",dataInfo?.sroilPump12?.[1]||"OFF",],
      },
      {
          title:"TFP OIL PUMP 1,2",
          value:[dataInfo?.tfpoilPump12?.[0]||"OFF",dataInfo?.tfpoilPump12?.[1]||"OFF",],
      },
      {
          title:"OIL PUMPS CONVERTER",
          value:[dataInfo?.tfpoilPump12?.[0]||"OFF",dataInfo?.tfpoilPump12?.[1]||"OFF",],
      },
      {
          title:"COMPRESSOR 1,2",
          value:[dataInfo?.oilPumpConvertor?.[0]||"OFF",dataInfo?.oilPumpConvertor?.[1]||"OFF",],
      },
  ];
    
  return (
    <div className={classes.container}>
    {auxiliarySystemData?.map((item,index)=>{
        return(
            <>
            <label className={classes.title}>{item.title}</label>
            {Array.isArray(item.value)?
            <>
              {item.value.map((item2, index2)=>(
                <span style={{gridColumn:`span ${item.value?.length===2&&index2===1?"2":"1"}`}}>{item2}</span>
              ))}
              </>
            :<span style={{gridColumn:"span 3"}}>{item.value}</span>}
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
</div>
  )
}
