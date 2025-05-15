import React from 'react'
import classes from './home.module.css';
import { Indicator } from '../../../../../components/DDU/indicator/indicator';
import ArcSpeedometer from './arcSpeedometer';
import { topics } from '../../../../../constant/topic';
import { useData } from '../../../../../components/useData';

export default function Home() {
  const {data}=useData(topics.ARCHOMESCREEN)

  return (
    <div className={classes.container}>
        <div className={classes.speedometerARC}>
            <ArcSpeedometer data={data?.speed}/>
        </div>
        <div>
            <Indicator label={"BPCS"} styles={{background:"none",boxShadow:"none"}} status={data?.bpcs===1?"active":"inactive"}/>
            <Indicator label={"LSP"} styles={{background:"none",boxShadow:"none"}} status={data?.hotel===1?"active":"inactive"}/>
        </div>
    </div>
  )
}
