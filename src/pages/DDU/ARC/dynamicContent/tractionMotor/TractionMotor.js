import React from 'react'
import classes from './TractionMotor.module.css';
import { topics } from '../../../../../constant/topic';
import { useData } from '../../../../../components/useData';
export default function TractionMotor() {
    const {data:tracMotorInfo}=useData(topics.ARCTRACTIONMOTOR);
    const data=[
        {
            name:"INPUT CONTACTOR",
            value1:tracMotorInfo?.inputContactor?.[0]||"OFF",
            value2:tracMotorInfo?.inputContactor?.[1]||"OFF",
        },
        {
            name:"DC LINK VOLTAGE",
            value2:tracMotorInfo?.dcLinkVoltage?.[1]||0,
            value1:tracMotorInfo?.dcLinkVoltage?.[0]||0,
        },
        {
            name:"VENTILATION LEVEL",
            value2:tracMotorInfo?.ventilationLevel?.[1]||"OFF",
            value1:tracMotorInfo?.ventilationLevel?.[0]||"OFF",
        },
        {
            name:"SR INPUT POWER kW",
            value2:tracMotorInfo?.srInputPower?.[1]||0,
            value1:tracMotorInfo?.srInputPower?.[0]||0,
        },
        {
            name:"WHEEL SLIP",
            value2:tracMotorInfo?.wheelSlip?.[1]||"OFF",
            value1:tracMotorInfo?.wheelSlip?.[0]||"OFF",
        },
        {
            name:"TM SPEED KM/H",
            value2:Array.from({length:3}, (_, index)=>tracMotorInfo?.TmSpeed?.[index+3]||0),
            value1:Array.from({length:3}, (_, index)=>tracMotorInfo?.TmSpeed?.[index]||0),
        },
        {
            name:"TM TEMPERATURE DEG C",
            value2:Array.from({length:3}, (_, index)=>tracMotorInfo?.TmTemperature?.[index+3]||0),
            value1:Array.from({length:3}, (_, index)=>tracMotorInfo?.TmTemperature?.[index]||0),
        },
    ];
  return (
    <div className={classes.container}>
        <span>{"TRACTION MOTOR"}</span>
        <div className={classes.dataInfo}>
            {
                data?.map((item,index)=>{
                    return(
                        <>
                        <span>{item.name}</span>
                        {Array.isArray(item.value1)?
                        <div className={classes.arrItems}>
                        {item.value1.map((item2, index2)=>{
                            return(
                                <span style={{textAlign:"center"}}>{item2}</span>
                            )
                        })}
                        </div>
                        :<span style={{display:"flex", justifyContent:"center"}}>{item.value1}</span>}
                         {Array.isArray(item.value2)?
                        <div className={classes.arrItems}>
                        {item.value2.map((item2, index2)=>{
                            return(
                                <span  className='d-flex align-center justify-center'>{item2}</span>
                            )
                        })}
                        </div>
                        :<span style={{display:"flex", justifyContent:"center"}}>{item.value2}</span>}
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}
