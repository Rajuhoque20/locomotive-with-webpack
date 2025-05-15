import React from 'react'
import classes from './FLGCompo.module.css';
export default function FLGCompo({ data, rows=7}) {
  return (
    <div className={classes.container} >
        <span className={classes.title}>{data?.title?.[0]}</span>
        {data?.columns?.map((item,index)=>{
            return(
                <span key={index}>{item}</span>
            )
        })}
        
            {data?.content?.[0]?.map((item,index)=>{
                return(
                    <>
                    <span key={index}>{item.title}</span>
                    {item.value?.map((item2,index2)=>{
                        return(
                            <span key={index2}>{item2}</span>
                        )
                    })}
                    </>
                    
                )
            })}
            {data?.title?.[1]&&<span className={classes.title}>{data?.title?.[1]}</span>}
        
        {data?.content?.[1]?.map((item,index)=>{
            return(
                <>
                <span key={index}>{item.title}</span>
                {item.value?.map((item2,index2)=>{
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
