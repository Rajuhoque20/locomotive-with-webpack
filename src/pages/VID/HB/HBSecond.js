import React from 'react'
import classes from './HB.module.css';
import HBSwitch2 from './HBSwitch2';
import { HBSwitch3WithDesc } from './HBSwitch3';
import { HBSwitch4WithDesc } from './HBSwitch4';

export default function HBSecond({data}) {

  return (
    <div className={classes.HBSecond}>
      {data?.map((item,index)=>{
          
        return(
          <HBSwitch4WithDesc width={item?.width} description={item.title} value={item.value} valueKey={item.key} key={index}/>
        )
      })}
    </div>
  )
}

export  function HBThird({ mcbTwo, mcbOne}) {
  return (
    <div className={classes.HBThird}>
      {mcbTwo?.map((item,index)=>{
      
        
        return(
          <HBSwitch3WithDesc key={index} width='20%' description={item.title} value={item.value} valueKey={item.key}/>
        )
      })}
      {mcbOne?.map((item,index)=>{
        return(
          <HBSwitch2 key={index} width='15%' description={item.title} value={item.value} valueKey={item.key}/>
        )
      })}
    </div>
  )
}
