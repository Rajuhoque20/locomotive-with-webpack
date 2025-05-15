import React, { useEffect, useState } from 'react'
import classes from './temperature.module.css';
import { topics } from '../../../../../../../constant/topic';
import websocket from '../../../../../../../services/Websocket';

export default function Temperature({data}) {

      const [dataInfo, setData]=useState([]);
      useEffect(()=>{
        const callback=(event)=>{
          setData(event);
        }
        websocket.subscribe(topics.TEMPERATURE, callback);
        return()=>{
          websocket.unsubscribeTopic(topics.TEMPERATURE);
        }
      },[]);
    //   console.log("data",dataInfo)
    const temperatureData=[
        {
            title:"TEMPERATURES",
            value:"",
        },
        {
            title:"BL KEY STATUS",
            value:"ON",
        },
        {
            title:"TEMP. TRANSFORM OIL",
            value:[dataInfo?.oil_temp?.[0]||0+" °C",dataInfo?.oil_temp?.[1]||0+" °C"],
        },
        {
            title:"TEMP. CONVERTER OIL",
            value:[dataInfo?.conv_temp?.[0]||0+" °C",dataInfo?.conv_temp?.[1]||0+" °C"],
        },
        {
            title:"HIGH TEMP CONTROL ELECTRONICS ON/OFF RELAY STATUS",
            value:dataInfo?.relay||"OFF",
        },
        {
            title:"TEMP. TRACTION MOTORS",
            value:["0 °C","0 °C","0 °C","0 °C","0 °C","0 °C",],
        },
        {
            title:"MUB SIMULATED TEMP.",
            value:[dataInfo?.mub_temp?.[0]||0+" °C",dataInfo?.mub_temp?.[1]||0+" °C"],
        },
        {
            title:"TE REFERENCE",
            value:dataInfo?.te_ref||0+" kN",
        },
        {
            title:"TE ACTUAL",
            value:dataInfo?.te_act||0+" kN",
        }, {
            title:"BE REFERENCE",
            value:dataInfo?.be_ref||0+" kN",
        },
        {
            title:"BE ACTUAL",
            value:dataInfo?.be_act||0+" kN",
        },
    ];

  return (
    <div className={` fs-5 fc-6 d-grid ${classes.container}`}>
        {temperatureData?.map((item,index)=>{
            return(
                <>
                <span className={`${classes.title} d-flex align-center`}>{item.title}</span>
                {Array.isArray(item.value)?
                <>
                    {item.value?.map((item2, index2)=>{
                        return(
                            <span key={index2} style={{gridColumn:`span ${item.value?.length===2?"3":"auto"}`}} className='d-flex align-center justify-center'>{item2}</span>
                        )
                    })}
                </>
                :
                <span style={{gridColumn:`span 6`}} className='d-flex align-center justify-center'>{item.value}</span>}
                </>
            )
        })}
    </div>
  )
}
