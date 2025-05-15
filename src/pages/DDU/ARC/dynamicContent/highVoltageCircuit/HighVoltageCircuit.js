import React, { useContext } from 'react'
import classes from './HighVoltageCircuit.module.css';
import { topics } from '../../../../../constant/topic';
import { ARCContext } from '../../Context';
import { useData } from '../../../../../components/useData';
export default function HighVoltageCircuit() {
     const {data}=useData(topics.ARCHIGHVOLTAGECIRCUIT);
      const commonData=useContext(ARCContext);
    const voltoageData=[
        {
            title:"PANTO UP",
            value:commonData?.panto===1?"ON":"OFF",
        },
        {
            title:"VCB STATUS",
            value:commonData?.vcb===1?"ON":"OFF",
        },
        {
            title:"HOTEL LOAD",
            value:commonData?.hotel===1?"ON":"OFF",
        },
        {
            title:"CATENARY VOLTAGE",
            value:commonData?.catenary_voltage||0+" KV",
        },
        {
            title:"PRIMARY CURRENT",
            value:"50.0 A",
        },
        {
            title:"LINE FREQUENCY",
            value:"51.2 Hz",
        },
        {
            title:"INPUT POWER KW",
            value:"125.4 kw",
        },
        {
            title:"PRIMAY OVER CURRENT",
            value:data?.primaryOverCurrent||"OFF",
        },
        {
            title:"FITER",
            value:data?.filter||"OFF",
        },
        {
            title:"EARTHFUL POWER CIRCUIT",
            value:data?.earthFault||"OFF",
        },
    ];
  return (
    <div className={classes.container}>
        <span className='fc-7 fs-4 fw-2'>HIGH VOLTAGE CIRCUIT</span>
        <div className={classes.dataInfo}>
            {voltoageData?.map((item,index)=>{
                return(
                    <>
                         <span className='fc-7'>{item.title}</span>
                         <span className='fc-7'>{item.value}</span>
                    </>
                )
            })}
        </div>
    </div>
  )
}
