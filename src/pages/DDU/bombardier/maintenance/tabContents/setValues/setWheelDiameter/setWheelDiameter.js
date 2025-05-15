import React, { useState } from "react"
import classes from './setWheelDiameter.module.css';
import { ArrowDownButton, ArrowUpButton } from "../../../../operations/dynamicContent/relatedInfo/inchingMode/inchingMode";

export const WheelDiam=({data})=>{
    const [diamVal, setDiamVal]=useState(1234);
    return(
        <div className={classes.diamVal}>
            <label style={{fontSize:"0.7rem"}}>{data}</label>
            <div>
                <ArrowUpButton/>
                <span>{diamVal}</span>
                <ArrowDownButton/>
            </div>
        </div>
    )
}
export const SetWheelDiameter=({data})=>{
    const wheelDiams=
    [
        "BOGIE1 WHEEL DIAM 1","BOGIE1 WHEEL DIAM 2", "BOGIE1 WHEEL DIAM 3",
        "BOGIE2 WHEEL DIAM 1", "BOGIE2 WHEEL DIAM 2","BOGIE2 WHEEL DIAM 3"
    ];
    return(
        <div className={classes.container}>
            {wheelDiams?.map((item,index)=>{
                return <WheelDiam key={index} data={item}/>
            })}
            <div>
                <button className={classes.enterButton}>ENTER</button>
            </div>
        </div>
    )
}