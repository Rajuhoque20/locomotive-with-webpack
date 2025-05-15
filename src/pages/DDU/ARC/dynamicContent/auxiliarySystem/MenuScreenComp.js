import React from 'react'
import classes from './MenuScreenComp.module.css';
export default function MenuScreenComp({title, data}) {
  return (
    <div className={classes.container}>
        <label>{title}</label>
        <div className={classes.dataInfo} style={{gridTemplateRows:`repeat(${data?.length}, 1fr)`}}>
                {data?.map((item, index)=>{
                    return(
                        <>
                        <span>{item.name}</span>
                        <div style={{ gridTemplateColumns:`repeat(${item.value?.length}, 1fr)`}} className={classes.arrayItems}>
                            {item.value?.map((item2, index2)=>{
                                return(
                                    <span key={index2} className='d-flex align-center'>{item2}</span>
                                )
                            })}
                        </div>
                        </>
                    )
                })}
        </div>
    </div>
  )
}

