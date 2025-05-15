import React from 'react'
import { HBSwitch } from './HBSwitch'

export default function HBSwitch2({width="100%", height="100%",description, value, valueKey}) {
  return (
    <div className='d-flex flex-col align-center' style={{width:width, height:height, }}>
        <HBSwitch height='70%' width='35%' value={value} keyValue={valueKey}/>
        <div className='d-flex flex-col align-center justify-center' style={{height:"30%", background:"#000", width:"100%", borderRadius:"0.3rem"}}>
            <span style={{fontSize:"1vh", lineHeight:1, textAlign:"center"}}>{description}</span>
        </div>
    </div>
  )
}
