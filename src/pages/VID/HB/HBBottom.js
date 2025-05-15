import React from 'react'
import classes from './HB.module.css';
import { Icons } from '#framework';
import CustomTooltip from '../../../components/VID/CustomPopover/CustomTooltip';
const HBBottom=({type, data})=> {
    const { HB_image_5, HB_image_4}=Icons.VIDIcons;
    
  return (
    <div className={classes.HBBottom}>
       {type==="HB2"&&<div>
        <CustomTooltip content={data?.scavengeBlower?.[0]?.value===1?"Open":"Close"} isWorking={data?.scavengeBlower?.[0]?.value===1}>
                <img src={HB_image_5} style={{cursor:"pointer", width:"80%",}}/>
        </CustomTooltip>
        </div>}
        {type==="HB2"&&<div>
                <CustomTooltip content={data?.scavengeBlower?.[1]?.value===1?"Open":"Close"} isWorking={data?.scavengeBlower?.[1]?.value===1}>
                <img src={HB_image_5} style={{cursor:"pointer", width:"80%",}}/>
        </CustomTooltip>
               
        </div>}
        <div>
        <CustomTooltip content={data?.oilPump?.[0]?.value===1?"Open":"Close"} isWorking={data?.oilPump?.[0]?.value===1}>
                <img src={HB_image_4} style={{cursor:"pointer", width:type==="HB1"?"60%":"80%",}}/>
        </CustomTooltip>
                
        </div>
        <div>
        <CustomTooltip content={data?.oilPump?.[1]?.value===1?"Open":"Close"} isWorking={data?.oilPump?.[1]?.value===1}>
                <img src={HB_image_4} style={{cursor:"pointer", width:type==="HB1"?"60%":"80%"}}/>
        </CustomTooltip>  
        </div>
               
    </div>
  )
}
export default HBBottom;