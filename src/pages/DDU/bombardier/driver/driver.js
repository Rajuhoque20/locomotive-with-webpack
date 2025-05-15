import React from 'react'
import classes from './driver.module.css';
export default function Driver() {
    const driverData=[
        "DRIVER DETAILS",
        "FUTURE PROVISION",
        "DRIVER ID",
        "TRAIN ID",
        "TRAIN LOAD TONS",
        "ORIGIN",
        "DESTINATION",
        "SIGN IN TIME",
        "TRIP KM",
        "SPEC ENERGY (KWH /GTKM)",
        "MEDICAL FITNESS OF DRIVER",
    ];
  return (
    <div className={`${classes.container} fc-6 d-grid`} style={{fontSize:"0.7rem"}}>
        {driverData?.map((item,index)=>{
            return(
                <span>{item}</span>
            )
        })}
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}
