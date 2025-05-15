import React from 'react'
import classes from './DiagDataSet.module.css';
export default function DiagDataSet({data}) {
  return (
    <div className={classes.container}>
        {data?.map((item,index)=>{
            return(
                <>
                <span>{item.title}</span>
                <div className={classes.values}>
                    {item.value?.map((item2, index2)=>{
                        return(
                            <span key={index2}>{item2}</span>
                        )
                    })}
                </div>
                </>
            )
        })}
    </div>
  )
}
