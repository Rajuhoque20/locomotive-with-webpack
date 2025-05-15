import React, { useEffect, useState } from 'react'
import classes from './HVCircuit.module.css';
import websocket from '../../../../../../../services/Websocket';
import { topics } from '../../../../../../../constant/topic';
export default function HVCircuit({data}) {
  const [datainfo, setData]=useState([]);
  useEffect(()=>{
    const callback=(event)=>{
      setData(event);
    }
    websocket.subscribe(topics.HIGHVOLTAGECIRCUIT, callback);
    return()=>{
      websocket.unsubscribeTopic(topics.HIGHVOLTAGECIRCUIT);
    }
  },[]);
  console.log("HVCdata",data, datainfo);

  const hvCircuitInfo=[
    {
        title:"SUB SYSTEM STATUS",
        value:datainfo?.subsystem_status||"OFF",
    },
    {
        title:"PRIMARY OVER CURRENT RELAY",
        value:datainfo?.primary_current_relay_status||"OFF",
    },
    {
        title:"MINIMUS VOLTAGE RELAY STATUS",
        value:datainfo?.min_voltage_relay_status||"OFF",
    },
    {
        title:"DRIVER'S SWITCH STATUS FOR PANTO",
        value:datainfo?.panto||"OFF",
    },
    {
        title:"HOTEL LOAD",
        value:datainfo?.hotel_load||"OFF",
    },
    {
        title:"PRIMARY CURRENT (A)",
        value:2.90 +" A",
    },
    {
        title:"EARTH FAULT POWER CIRCUIT",
        value:datainfo?.earth_fault_power_circuit||"OFF",
    },
    {
        title:"AUXILIARY CURRENT",
        value:datainfo?.auxillary_current||0+" A"
    },
    {
        title:"FILTER CURRENT",
        value:datainfo?.filter_current||0+" A"
    },
    {
        title:"HOTEL LOAD1 CURRENT",
        value:datainfo?.hotel_load1_current||0+" A"
    },
    {
        title:"HOTEL LOAD2 CURRENT",
        value:datainfo?.hotel_load2_current||0+" A",
    },
    {
        title:"TEMPERATURE OF TRANSFORMER OIL",
        value:datainfo?.temp_transformer_oil||0+" C",
    },
    {
        title:"PRESSURE OF TRANSFORMER OIL",
        value:datainfo?.pressure_transformer_oil||0+" bar",
    },
];
  return (
    <div className={classes.container}>
        {hvCircuitInfo?.map((item,index)=>{
            return(
                <>
                <label>{item.title}</label>
                <span>{item.value}</span>
                </>
            )
        })}
    </div>
  )
}
