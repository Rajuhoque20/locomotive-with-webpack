import React from 'react'
import classes from './AnalogSignal.module.css';
import { useARCStore } from '../../../store';
export default function AnalogSignal() {
    const {ioScreenPointer}=useARCStore();
    const data=[
        "FLG-1",
        "FLG-2",
        "SLG-1",
        "SLG-2"
    ]
  return (
    <div className={classes.container}>
        {data?.map((item,index)=>{
            return(
                <span style={{color:ioScreenPointer===index?"var(--color-yellow)":""}}>{item}</span>
            )
        })}
    </div>
  )
}
