import React, { useEffect, useState } from 'react'
import classes from './diagnostics.module.css';
import websocket from '../../../../../../services/Websocket';
import { topics } from '../../../../../../constant/topic';
import { Typography } from 'antd';
export const TableColumns=({data})=>{
    return(
        <>
        {data?.map((item, index)=>{
            return(
                <span key={index}>{item}</span>
            )
        })}
        </>
    )
}
export const TableData=({data})=>{
    return(
        <>
        {data?.map((item, index)=>{
            return(
                <>
                    <span>{index+1}</span>
                    <span>{item?.subsystem}</span>
                    <span>{item?.priority}</span>
                    <span>{item?.startDate+" "+item?.startTime}</span>
                    <span>{item?.endDate+" "+item?.endTime}</span>
                    <div>
                    <Typography.Paragraph ellipsis={{tooltip:true, rows:2}} style={{width:"8rem", padding:"0", margin:0}}>
                    <span style={{fontSize:"0.6rem", color:"rgba(30, 144, 255, 1)"}}>{item?.frontendMessage}</span>
                    </Typography.Paragraph>

                    </div>
                    
                    
                </>
            )
        })}
        </>
    )
}
export default function Diagnostics() {
    const columns=["SR. NO.", "SUB SYSTEM", "PRIO", "START", "END","MESSAGE",];
    const [diagnosticsData, setDiagnosticsData]=useState();

    useEffect(()=>{
        const callback=(event)=>{
            setDiagnosticsData(event);
        };
        websocket.subscribe(topics.DIAGNOSTICS, callback);
        return()=>{
            websocket.unsubscribeTopic(topics.DIAGNOSTICS);
        }
    },[]);

    console.log("diagnosticsData",diagnosticsData)

    const diagData=[
        {
            SL_NO:1,
            SUB_SYSTEM:"SS10",
            PRIO:"P1",
            START:"30-MAR-2024 11:54:59 AM",
            END:"30-MAR-2024 12:10:54 AM",
            MESSAGE:"The CCUO does not receive the lifesign from SPIF1.",
        },
        {
            SL_NO:1,
            SUB_SYSTEM:"SS10",
            PRIO:"P1",
            START:"30-MAR-2024 11:54:59 AM",
            END:"30-MAR-2024 12:10:54 AM",
            MESSAGE:"The CCUO does not receive the lifesign from SPIF1.",
        },
        {
            SL_NO:1,
            SUB_SYSTEM:"SS10",
            PRIO:"P1",
            START:"30-MAR-2024 11:54:59 AM",
            END:"30-MAR-2024 12:10:54 AM",
            MESSAGE:"The CCUO does not receive the lifesign from SPIF1.",
        },
        {
            SL_NO:1,
            SUB_SYSTEM:"SS10",
            PRIO:"P1",
            START:"30-MAR-2024 11:54:59 AM",
            END:"30-MAR-2024 12:10:54 AM",
            MESSAGE:"The CCUO does not receive the lifesign from SPIF1.",
        },
        {
            SL_NO:1,
            SUB_SYSTEM:"SS10",
            PRIO:"P1",
            START:"30-MAR-2024 11:54:59 AM",
            END:"30-MAR-2024 12:10:54 AM",
            MESSAGE:"The CCUO does not receive the lifesign from SPIF1.",
        },
        {
            SL_NO:1,
            SUB_SYSTEM:"SS10",
            PRIO:"P1",
            START:"30-MAR-2024 11:54:59 AM",
            END:"30-MAR-2024 12:10:54 AM",
            MESSAGE:"The CCUO does not receive the lifesign from SPIF1.",
        },
    ];
  return (
    <div className={classes.container}>
        <TableColumns data={columns}/>
        <TableData data={diagnosticsData}/>
    </div>
  )
}
