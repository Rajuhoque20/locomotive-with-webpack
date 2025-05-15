import React from 'react'
import classes from './DriverDetails.module.css';
export default function DriverDetails() {
    const data=[
        {
            name:"DRIVER NAME/ID",
            value:"(INPUT)",
        },
        {
            name:"TRAIN NAME",
             value:"(INPUT)",
        },
        {
            name:"TRAIN LOARD TONS",
             value:"(INPUT)",
        },
        {
            name:"ORIGIN CODE",
             value:"(INPUT)",
        },
        {
            name:"DESTINATION CODE",
             value:"(INPUT)",
        },
        {
            name:"SIGN IN TIME/DATE",
            value:"(INPUT)",
        },
        {
            name:"TRIP KM",
             value:"(CALCULATED BY SYSTEM)",
        },
        {
            name:"SPECIFIC ENERGY",
            value:"(CALCULATED BY SYSTEM)",
        },
    ];
  return (
    <div className={classes.container}>
        <label>DRIVER DETAILS</label>
        <div className={classes.content}>
            {data?.map((item, index)=>{
                return(
                    <>
                    <span>{item?.name}</span>
                    <span>{item.value}</span>
                    </>
                )
            })}

        <span className='fc-3'>(NOT IMPLEMENTED PRESENTLY)</span>
        </div>
    </div>
  )
}
