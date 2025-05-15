import React, { useState } from 'react'
import classes from './screensMenu.module.css'
import { useARCStore } from '../../store';
export default function ScreensMenu() {
  const {screenMenu}=useARCStore();
    const screensData=[
        "SUB-SYSTEM STATUS",
        "ENERGY MONITORING",
        "HIGH VOLTAGE CIRCUIT",
        "TEMPERATURES",
        "TRACTION CONVERTER",
        "PRESSURES",
        "AUXILIARY CONVERTER",
        "ROUTE MAP",
        "TRACTION MOTOR",
        "SPEED RESTRICTION",
        "AUXILIARY SYSTEM",
        "DRIVER DETAILS",
        "BRAKING SYSTEM",
        "I/O SIGNALS",
    ];
  return (
    <div className={classes.container}>
      <span className='fs-5 fc-7'>SCREENS</span>
      {screensData?.map((item, index)=>{
        return(<span key={index} className={`fs-5 ${screenMenu===index?"fc-3":"fc-7"}`}>{item}</span>)
      })}
    </div>
  )
}
