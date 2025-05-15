import React, { useContext } from 'react'
import classes from './TractionConverter.module.css';
import { topics } from '../../../../../constant/topic';
import { ARCContext } from '../../Context';
import { useData } from '../../../../../components/useData';
export default function TractionConverter() {
    const {data}=useData(topics.ARCTRACTIONCONVERTOR);
     const commonData=useContext(ARCContext);
    const tractionData=[
        {
            title:"FLG NODE",
            value1:commonData?.flg||0,
            value2:commonData?.flg||0,
        },
        {
            title:"SLG NODE",
            value1:commonData?.slg||"",
            value2:commonData?.slg||"",
        },
        {
            title:"ALG NODE",
            value1:commonData?.alg||"",
            value2:commonData?.alg||"",
        },
        {
            title:"PRE-CHARGE CONTACTOR",
            value1:data?.prechargeContactor?.[0]||'',
            value2:data?.prechargeContactor?.[1]||'',
        },
        {
            title:"INPUT CONTACTOR",
            value1:data?.inputContactor?.[0]||'',
            value2:data?.inputContactor?.[1]||'',
        },
        {
            title:"OIL PRESSURE",
            value1:data?.oilPressure?.[0]||0,
            value2:data?.oilPressure?.[1]||0,
        },
        {
            title:"OIL TEMPERATURE",
            value1:data?.oilTemperature?.[0]||0,
            value2:data?.oilTemperature?.[1]||0,
        },
        {
            title:"INPUT POWER",
            value1:data?.inputPower?.[0]||0,
            value2:data?.inputPower?.[1]||0,
        },
        {
            title:"VENTILATION LEVEL",
            value1:data?.ventilationLevel?.[0]||'',
            value2:data?.ventilationLevel?.[1]||'',
        },
    ];
  return (
    <div className={classes.container}>
        <span className='fc-7 fs-4'>TRACTION CONVERTER</span>
        <div className={classes.dataInfo}>
            {tractionData?.map((item, index)=>{
                return(
                    <>
                    <label  className='fc-7'>{item.title}</label>
                    <span  className='fc-7'>{item.value1}</span>
                    <span  className='fc-7'>{item.value2}</span>
                    </>
                )
            })}
        </div>
    </div>
  )
}
