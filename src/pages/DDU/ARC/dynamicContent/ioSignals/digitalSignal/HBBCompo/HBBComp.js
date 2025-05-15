import React from 'react'
import classes from './HBBComp.module.css'
export default function HBBComp({title, columns, data}) {
  return (
    <div className={classes.container}>
        <span className={classes.title}>{title}</span>
        {columns?.map((item, index)=>{
            return(
                <span key={index} className={classes.column}>{item}</span>
            )
        })}
        {data?.map((item,index)=>{
            return(
                <>
                <span>{item?.name}</span>
                {item.value?.map((item2, index2)=>{
                    return(
                        <span key={index2}>{item2}</span>
                    )
                })}
                </>
            )
        })}
    </div>
  )
}
