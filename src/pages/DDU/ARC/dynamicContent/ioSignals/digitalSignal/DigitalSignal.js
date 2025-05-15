import React from 'react'
import classes from './DigitalSignal.module.css';
import { useARCStore } from '../../../store';
export default function DigitalSignal() {
      const {ioScreenPointer}=useARCStore();
    const data=[
        "HBB - 1",
        "HBB - 2",
        "STB  - 1",
        "STB - 2",
        "SLG - 1",
        "SLG - 2",
    ];
  return (
    <div className={classes.container}>
        {data?.map((item, index)=>{
            return(
                <span key={index} style={{color:ioScreenPointer===index?"var(--color-yellow)":""}}>{item}</span>
            )
        })}
    </div>
  )
}
