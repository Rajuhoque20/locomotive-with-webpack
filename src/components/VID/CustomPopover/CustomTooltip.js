import { Popover, Tooltip } from 'antd';
import React, { useState } from 'react'
import classes from './CustomTooltip.module.css';
import { Icons } from '#framework';
const {machine_room_check, machine_room_cross}=Icons.VIDIcons;

const TooltipContent=({isWorking, content})=>{

    return(
        <div className={`${classes.customTooltip} ${isWorking? classes.active:classes.inactive}`}>
            <span>{content?content:isWorking?"Working":"Not working"}</span>
            <img src={isWorking?machine_room_check:machine_room_cross}/>
        </div>
    )
}

 const CustomTooltip=({children, isWorking=true, content})=> {
  return (
    <div >
      <Tooltip title={<TooltipContent  isWorking={isWorking} content={content}/>} trigger="click">
    <div >{children}</div>
  </Tooltip>
    </div>
  )
}
export default CustomTooltip;
