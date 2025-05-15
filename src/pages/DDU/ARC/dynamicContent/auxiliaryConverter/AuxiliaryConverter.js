import React from 'react'
import classes from './AuxiliaryConverter.module.css';
import { topics } from '../../../../../constant/topic';
import { useData } from '../../../../../components/useData';
export default function AuxiliaryConverter() {
const {data:auxiliaryInfo}=useData(topics.ARCAUXILIARYCONVERTOR);

    const data=[
        {
            name:"AUXILIARY VOLTAGE",
            value: auxiliaryInfo?.auxiliaryVoltage||"OFF",
        },
        {
            name:"AUXILIARY CURRENT",
            value: auxiliaryInfo?.auxiliaryCurrent || "OFF",
        },
        {
            name:"DC LINK VOLTAGE",
            value: Array.from({length:3}, (_,index)=> auxiliaryInfo?.dcLinkVoltage[index]||0),
        },
        {
            name:"DC LINK CURRENT",
             value: Array.from({length:3}, (_,index)=> auxiliaryInfo?.dcLinkCurrent[index]||0),
        },
        {
            name:"OUTPUT VOLTAGE",
             value: Array.from({length:3}, (_,index)=> auxiliaryInfo?.outputVoltage[index]||0),
        },
        {
            name:"OUTPUT FREQUENCY",
             value: Array.from({length:3}, (_,index)=> auxiliaryInfo?.outputFrequency[index]||0),
        },
      
        {
            name:"GROUPING CONTACTORS",
            value:["54/1","54/2","54/3","54/4","54/5", "", "", "","",""],
        },
      
    ];
  return (
    <div className={classes.container}>
        <span>AUXILIARY CONVERTER</span>
        <div className={classes.dataInfo}>
            {data?.map((item, index)=>{
                return(
                    <>
                    <span className='px-1'>{item.name}</span>
                    {Array.isArray(item.value)?
                    <div className={classes.arrayItems} style={{gridTemplateColumns:`repeat(${item.value.length>3?5:item.value.length},1fr)`}}>
                         {item.value?.map((item2,index2)=>(<span  key={index} style={{borderBottom:index2<5&&item.value.length>3?"var(--border-primary)":"", textAlign:"center"}}>{item2}</span>))}
                    </div>:
                    <span className="justify-center">{item.value}</span>
                    }
                    </>
                )
            })}
        </div>
    </div>
  )
}
