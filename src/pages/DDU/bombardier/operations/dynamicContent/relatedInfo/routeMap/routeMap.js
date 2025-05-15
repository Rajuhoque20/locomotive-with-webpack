import React from 'react'
import classes from './routeMap.module.css';

export default function RouteMap({data}) {
  return (
    <div  className={classes.container}>
      
                {data?.map((item, index)=>{
                    return(
                        <span key={index}>{item.title}</span>
                    )
                })}
                <span></span>
                <span></span>
                <span></span>
        
      
            <label className='fs-1'>FUTURE PROVISION</label>

      
    </div>
  )
}
