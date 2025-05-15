import React, { useState } from "react"
import classes from './setLocoDetails.module.css';
import { NumberPlate } from "../../../maintenance";

export const InputFields=()=>{
    const options=["WAP 7", "WAP 11"];
    return(
        <div className={classes.InputFields}>
            <label>LOCO NUMBER:</label>
            <input placeholder="Enter the Loco Number"/>
            <label>LOCO TYPE:</label>
            <select placeholder="Select">
                {options?.map((item,index)=>(<option>{item}</option>))}
            </select>
        </div>
    )
}
export const SetLocoDetails=({data})=>{
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