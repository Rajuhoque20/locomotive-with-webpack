import React from 'react'
import classes from './SB2.module.css';
import { Icons } from '#framework';
export const Content=()=>{
    const {SB2_reset_inactive}=Icons.VIDIcons;
    const contentData=[
        {
            title:"Reset",
           image:SB2_reset_inactive,
        },
        {
            title:"Calibration",
           image:SB2_reset_inactive,
        },
        {
            title:" In Operation",
           image:SB2_reset_inactive,
        },
        {
            title:"Fault or Malfunction",
           image:SB2_reset_inactive,
        },
        {
            title:"Alarm Smoke Detector 1",
           image:SB2_reset_inactive,
        },
        {
            title:"Alarm Smoke Detector 1",
           image:SB2_reset_inactive,
        },
    ];
    return(
        <div className={classes.fireDetecContent}>
            <span>ITX 6340 FIRE DETECTION UNIT</span>
            <div>
                {contentData?.map((item, index)=>{
                    return(
                        <div>
                            <span>{item.title}</span>
                            <img src={item.image}/>
                        </div>
                    )
                })}
                
            </div>

        </div>
    )
}
export default function FireDectectionEquip() {
  return (
    
        <svg width="100%" height="88%" viewBox="0 -30 229 220" fill="none">
            <path d="M10,2 L219,2 L228,20 H0 L10,2Z" fill="rgba(159,165,160,1)" />
            <rect x="25" y="-28" width="24" height="38" rx="2" ry="2"  fill="rgba(159,165,160,1)" />
            <circle cy="-15" cx="37" r="3" fill="rgba(159,165,160,1)"/>
            <circle cy="-15" cx="37" r="5" fill="none" stroke="black" stroke-width="3" />
            <path d="M26,10 C22,11 24,11 27,12H48C51,11 52,11 50,10" stroke="black" stroke-width="2"/>
            <rect x="180" y="-28" width="24" height="38" rx="2" ry="2" fill="rgba(159,165,160,1)" />
            <circle cy="-15" cx="192" r="3" fill="rgba(159,165,160,1)"/>
            <circle cy="-15" cx="192" r="5" fill="none" stroke="black" stroke-width="3" />
            <path d="M181,10 C177,11 179,11 182,12H203C206,11 207,11 205,10" stroke="black" stroke-width="2" />
            <rect x="2" y="20" width="224" height="168" rx="2" ry="2" stroke="white" stroke-width="3" fill="none" />
            <rect x="5" y="23" width="218" height="162" rx="2" ry="2" stroke="grey" stroke-width="4" fill="white" />
            <rect x="12" y="30" width="204" height="148" rx="2" ry="2" stroke="rgba(22, 111, 225, 1)" stroke-width="1.5" fill="white" />
            <circle cy="42" cx="24" r="3" fill="rgba(159,165,160,1)"/>
            <circle cy="42" cx="24" r="5" fill="none" stroke="black" stroke-width="3" />
            <circle cy="42" cx="204" r="3" fill="rgba(159,165,160,1)" />
            <circle cy="42" cx="204" r="5" fill="none" stroke="black" stroke-width="3" />
            <circle cy="166" cx="24" r="3" fill="rgba(159,165,160,1)" />
            <circle cy="166" cx="24" r="5" fill="none" stroke="black" stroke-width="3" />
            <circle cy="166" cx="204" r="3" fill="rgba(159,165,160,1)" />
            <circle cy="166" cx="204" r="5" fill="none" stroke="black" stroke-width="3" />
            <foreignObject x="33" y="34" height={140} width={160}>
                <Content/>

            </foreignObject>
        </svg>
  )
}
