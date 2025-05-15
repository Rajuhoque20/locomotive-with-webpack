import React, { useEffect, useState } from 'react'
import classes from './inchingMode.module.css'
import { Icons } from '#framework';
import websocket from '../../../../../../../services/Websocket';
import { topics } from '../../../../../../../constant/topic';

export const ArrowUpButton=({onClick})=>{
    const {up_white_icon}=Icons.DDUIcons;
    return(
        <button className={classes.upAndDownButton} onClick={onClick}>
                    <img src={up_white_icon}  style={{width:"2vh"}}/>
        </button>
    )
}
export const ArrowDownButton=({onClick})=>{
    const {down_white_icon}=Icons.DDUIcons;
    return(
        <button  className={classes.upAndDownButton} onClick={onClick}>
                    <img src={down_white_icon}  style={{width:"2vh"}}/>
        </button>
    )
}
export default function InchingMode({data}) {
    const [inchingSpeed, setSpeed]=useState(0.5);

    const inchingModeData=[
        {
            title:"STATUS",
            value:"ON",
        },
        {
            title:"ACTUAL SPEED",
            value:data+" km/hr",
        },
        {
            title:"SET SPEED (0.5 - 1.5  km/hr)",
            value:inchingSpeed+" km/hr",
        },
    ];
   
    const publishInchingSpeed=()=>{
        websocket.publish(topics.INCHINGMODE, {inchingSpeed:inchingSpeed?.toFixed(1)});
    }

  return (
    <div className={classes.container}>
        {inchingModeData?.map((item,index)=>{
            return(
                <>
                     <span >{item.title}</span>
                     <span>{item.value}</span>
                </> 
            )
        })}
        <div>
            <span>MODIFIY SPEED WITH UP AND DOWN KEY</span>
            <div className={classes.action}>
                <ArrowDownButton onClick={()=>{
                    setSpeed(prev=>{
                        if(prev>0.5)
                        {
                            return prev-0.1
                        }
                        return prev;
                    })
                }}/>
                <button onClick={()=>{
                    publishInchingSpeed();
                }}>SET</button>
                <ArrowUpButton onClick={()=>{
                    setSpeed(prev=>{
                        if(prev<1.5)
                        {
                            return prev+0.1
                        }
                        return prev;
                    })
                }}/>
            </div>
        </div>
    </div>
  )
}
