import React from 'react'
import classes from './NodeInformation.module.css'
export default function NodeInformation({data, slaveLocoNumber, title}) {
  return (
    <div className={classes.wrapper}>
    <span>{title} :</span>
    <div className={classes.container}>
        <div>
                {data?.map((item, index)=>{
                    return(
                        <div>
                        <span>{item.name} :</span>
                        <span> {item.value}</span>
                        </div>
                    )
                })}
        </div>
        <span>
            {slaveLocoNumber!==null&&<span>SLAVE LOCO : {slaveLocoNumber}</span>}
        </span>
    </div>
    </div>
  )
}
