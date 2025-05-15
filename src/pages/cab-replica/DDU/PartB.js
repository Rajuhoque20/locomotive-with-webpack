import moment from 'moment'
import React from 'react';
import classes from './DDU.module.css';

export const FlagText=({label1,label2})=>{

    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <span style={{color:'#3B3B83',font:'0.8vw Graduate'}}>{label1} : {label2}</span>
        </div>
    )
}
export default function PartB() {
    const arr= ["01", "02", "03", "04", "05","06", "07", "08", "09","10", "11", "12", "13", "14","15","16", "17", "18","19", "20",]
  return (
    <div className={classes.partBWrapper}>
        <div className={classes.partBContent}>
                <FlagText label1={"FLG1"} label2={"504"} />
                <FlagText label1={"SLG1"} label2={"1999"} />
                <FlagText label1={"ALG1"} label2={"A0G0"} />
                <span style={{font:'1vw Graduate',color:'#0C8E8E',display:'flex',justifyContent:'center',alignItems:'center'}}>{moment().format('DD-MMM-YY')}</span>
                <FlagText label1={"FLG1"} label2={"504"} />
                <FlagText label1={"SLG2"} label2={"1999"} />
                <FlagText label1={"ALG2"} label2={"B0B0"} />
                <span style={{font:'1vw Graduate',color:'#0C8E8E',display:'flex',justifyContent:'center',alignItems:'center'}}>{moment().format('hh:mm:ss')}</span>
        </div>
        <div style={{width:'100%', display:'grid',gridTemplateColumns:'repeat(10,1fr)' , gridTemplateRows:'repeat(2,1fr)'}}>
            {arr.map((val,id)=>{
                return (
                    <div style={{background:'#0B8E00',display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid white'}}>
                        <span style={{color:'#fff',font:'0.75vw Graduate'}}>{"SS"+val}</span>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
