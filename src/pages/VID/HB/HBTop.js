import React from 'react'
import classes from './HB.module.css';
import { Icons } from '#framework';
import CustomTooltip from '../../../components/VID/CustomPopover/CustomTooltip';
const HBTop=({type, data})=> {
    const {HB_image_6, HB_image_5, HB_image_7, HB_image_8, HB1_UV}=Icons.VIDIcons;
    
  return (
    <div className={classes.HBTop}>
        {type==="HB1"&&<div className={classes.HBChild1}>
                
        <CustomTooltip content={data?.fuseAuxiliary?.value===1?"Melted":"Not Melted"} isWorking={data?.fuseAuxiliary?.value===1}>
                <img src={HB_image_6} style={{cursor:"pointer", width:"100%"}}/>
        </CustomTooltip>
               
        </div>}
        <div className={classes.HBChild2}>
        <CustomTooltip content={data?.mainCompressor?.value===1?"Open":"Closed"} isWorking={data?.mainCompressor?.value===1}>
                <img src={HB_image_5} style={{cursor:"pointer", width:"100%"}}/>
                </CustomTooltip>
                
        </div>
        <div className={classes.HBChild3}>
                <CustomTooltip content={data?.auxiliaryContactor?.[0]?.value===1?"Open":"Closed"} isWorking={data?.auxiliaryContactor?.[0]?.value===1}>
                <img src={HB_image_7} style={{cursor:"pointer"}}/>
                </CustomTooltip>
        </div>
        <div className={classes.HBChild4}>
        <CustomTooltip content={data?.auxiliaryContactor?.[1]?.value===1?"Open":"Closed"} isWorking={data?.auxiliaryContactor?.[1]?.value===1}>
                <img src={HB_image_7} style={{cursor:"pointer"}} />
                </CustomTooltip>
        </div>
        <div className={classes.HBChild4}>
                <img src={HB1_UV}/>
        </div>
        <div >
                <img src={HB_image_5}/>
        </div>
    </div>
  )
}
export default HBTop;
