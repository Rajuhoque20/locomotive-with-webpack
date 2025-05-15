import React, { useContext } from 'react'
import MenuScreenComp from '../auxiliarySystem/MenuScreenComp'
import { topics } from '../../../../../constant/topic';
import { ARCContext } from '../../Context';
import { useData } from '../../../../../components/useData';

export default function Pressure() {
      const {data}=useData(topics.ARCPRESSURE);
      const {bcPressure1,bcPressure2,mrPressure, bpPressure}=useContext(ARCContext);

    const pressureData=[
        {
          name:"TFP OIL 1,2 BAR",
          value:Array.from({length:2}, (_, index)=>data?.tfp_oil_pressure12?.[index]||0)
        },
        {
          name:"SR OIL 1,2 BAR",
          value:Array.from({length:2}, (_, index)=>data?.sr_oil_pressure12?.[index]||0)
        },
        {
          name:"MR PRESSURE > 6.4",
          value:[mrPressure||0, mrPressure||0],
        },
        {
          name:"BP PRESSURE KG/SQ CM",
          value:[bpPressure||0, bpPressure||0],
        },
        {
          name:"BC1 PRESSURE",
          value:[bcPressure1||0, bcPressure1||0],
        },
        {
          name:"BC2 PRESSURE",
          value:[bcPressure2||0, bcPressure2||0],
        },
      ];

  return (
   <MenuScreenComp title={"PRESSURES"} data={pressureData}/>
  )
}
