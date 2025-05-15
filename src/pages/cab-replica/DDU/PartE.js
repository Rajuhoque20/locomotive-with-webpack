import React from 'react'
import classes from './DDU.module.css';
import { Icons } from '#framework';

export const IconLable=({label1,label2})=>{
const {inputIcon}=Icons.CRIcons;
  return(
    <div>
      <span style={{color:'white',fontSize:'0.7vw'}}>{label1?label1:' '}</span>
      <img src ={inputIcon} />
      <span style={{color:'white',fontSize:'0.7vw'}}>{label2?label2:" "}</span>
    </div>
  )
}

export default function PartE() {
  return (
    <div className={classes.partEWrapper}>
        <IconLable label1={"ANTISPIN"} label2={"LOCO"} />
        <IconLable label1={""} label2={"AUTO"} />
        <IconLable label1={""} label2={"PARKING"} />
        <IconLable label1={"VIGILANCE"} label2={"EMERGENCY"} />
    </div>
  )
}
