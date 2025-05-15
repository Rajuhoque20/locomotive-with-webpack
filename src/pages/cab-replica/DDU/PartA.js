import React from 'react'
import classes from './DDU.module.css';
import { Icons } from '#framework';

export const TwoTextCentre =({lable1,lable2})=>{
    return(
        <div className={classes.twoTextCenter}>
            <span>{lable1}</span>
            <span>{lable2}</span>
        </div>
    )
}

export default function PartA() {
    const {VCB, WACG9, panto}=Icons.CRIcons;
  return (
    <div className={classes.partAWrapper}>
            <TwoTextCentre lable1={"O/C"} lable2={"PRIMARY"} />
            <TwoTextCentre lable1={"E/F"} lable2={"POWER"} />
            <TwoTextCentre lable1={"E/F"} lable2={"AUXILIARY"} />
            <TwoTextCentre lable1={"E/F"} lable2={"CONTROL"} />
            <div>
                <span style={{color:'#fff',font:'0.8vw Graduate',alignSelf:"flex-start"}}>1</span>
                <img src={WACG9} style={{width:"100%", height:"1.5vw"}}/>
                <span>31028</span>
            </div>
            <div>
                <img src={panto} style={{width:"100%", height:"2.5vw"}}/>
                <span>PANTO</span>
            </div>
            <div>
                <img src={VCB} style={{width:"100%", height:"2.5vw"}}/>
                <span>VCB</span>
            </div>
            <div>
                <span>INPUT  <span style={{paddingLeft:"0.3vw"}}>KW</span></span>
                <span style={{color:'#0B8E00',font:'1vw Graduate'}}>0</span>
                <span>FREQ  <span style={{paddingLeft:"0.3vw"}}>HZ</span></span>
                <span style={{color:'#0B8E00',font:'1vw Graduate'}}>0</span>
            </div>
    </div>
  )
}
