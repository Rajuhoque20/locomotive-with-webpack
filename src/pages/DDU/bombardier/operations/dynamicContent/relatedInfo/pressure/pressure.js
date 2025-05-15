import React, { useEffect, useState } from 'react'
import classes from './pressure.module.css';
import { topics } from '../../../../../../../constant/topic';
import websocket from '../../../../../../../services/Websocket';
export default function Pressure() {

    const [dataInfo, setData]=useState([]);
    useEffect(()=>{
      const callback=(event)=>{
        setData(event);
      }
      websocket.subscribe(topics.PRESSURE, callback);
      return()=>{
        websocket.unsubscribeTopic(topics.PRESSURE);
      }
    },[]);

    const pressureData=[
        {
            title:"PRESSURES",
            value:"",
        },
        {
            title:"BL KEY STATUS",
            value:"ON",
        },
        {
            title:"OIL PRESSURE TRANSFORMER",
            value:[dataInfo?.oil_pressure?.[0]||0+" bar",dataInfo?.oil_pressure?.[1]||0+" bar"],
        },
        {
            title:"OIL PRESSURE CONVERTER",
            value:[dataInfo?.conv_pressure?.[0]||0+" bar",dataInfo?.conv_pressure?.[1]||0+" bar"],
        },
        {
            title:"BRAKE CYLINDER PRESSURE",
            value:["4.99 bar","4.67 bar"],
        },
    ];

  return (
    <div className={` fs-5 fc-6 d-grid ${classes.container}`}>
        {pressureData?.map((item,index)=>{
            return(
                <>
                 <span className={`d-flex align-center ${classes.title}`} >{item.title}</span>
                 {Array.isArray(item.value)?
                 <>
                 {item.value?.map((item2,index2)=>{
                    return(
                        <span key={index2} className='d-flex align-center justify-center'>{item2}</span>
                    )
                 })}
                 </>
                 :
                 <span style={{gridColumn:"span 2"}} className='d-flex align-center justify-center'>{item.value}</span>}
                </>
            )
        })}
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
    </div>
  )
}
