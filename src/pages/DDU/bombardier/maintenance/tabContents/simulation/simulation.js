import React from 'react'
import classes from './simulation.module.css';
import { useDDUBTStore } from '../../../store';
export default function Simulation() {
    const {commonData}=useDDUBTStore();
    const simulationData=[
        {
            title:"STATUS",
            value:"ON",
        },
        {
            title:"V ACT",
            value:commonData?.speed||0+" km/hr",
        },
        {
            title:"TE / BE DEM",
            value:commonData?.te_be_bogie_1+" kN",
        },
        {
            title:"FLG1 NODE",
            value:commonData?.flg||0,
        },
        {
            title:"FLG2 NODE",
            value:commonData?.flg||0,
        },
        {
            title:"SLG1 NODE",
            value:"500",
        },
        {
            title:"SLG2 NODE",
            value:"500",
        },
        {
            title:"SPIF1 NODE",
            value:"2710",
        },
        {
            title:"SPIF2 NODE",
            value:"2710",
        },
    ]
  return (
    <div className={classes.container}>
        {simulationData?.map((item,index)=>{
            return(
                <>
                <span>{item.title}</span>
                <span>{item.value}</span>
                </>
            )
        })}
    </div>
  )
}
