import React, { useState } from "react"
import classes from './setDateAndTime.module.css';
import { NumberPlate } from "../../../maintenance";
export const InputFields=()=>{
    return(
        <div className={classes.InputFields}>
            <label>DATE:</label>
            <input placeholder="DD.MM.YYYY"/>
            <label>TIME:</label>
            <input placeholder="DD.MM.YYYY"/>
        </div>
    )
}

export const SetDateAndTime=({data})=>{
    const [value, setValue]=useState('');
    return(
        <div className={classes.container}>
           <InputFields/>
           <NumberPlate value={value} setValue={setValue}/>
           <div>
                <button>ENTER</button>
           </div>
        </div>
    )
}