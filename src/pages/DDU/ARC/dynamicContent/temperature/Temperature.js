import React from 'react'
import MenuScreenComp from '../auxiliarySystem/MenuScreenComp'
import { topics } from '../../../../../constant/topic';
import { useData } from '../../../../../components/useData';

export default function Temperature() {
    const {data}=useData(topics.ARCTEMPERATURE);
    const temperatureData=[
        {
          name:"TFP OIL 1,2 C",
          value:Array.from({length:2}, (_, index)=>data?.tfp_oil_temp12?.[index]||0),
        },
        {
          name:"SR OIL 1,2 C",
          value:Array.from({length:2}, (_, index)=>data?.sr_oil_temp12?.[index]||0)
        },
        {
          name:"TM1 1,2 C",
          value:Array.from({length:2}, (_, index)=>data?.tm1_12?.[index]||0)
        },
        {
          name:"TM2 1,2 C",
          value:Array.from({length:2}, (_, index)=>data?.tm2_12?.[index]||0)
        },
        {
          name:"TM3 1,2 C",
          value:Array.from({length:2}, (_, index)=>data?.tm3_12?.[index]||0)
        },
        {
          name:"INPUT POWER 1,2 KW",
          value:Array.from({length:2}, (_, index)=>data?.input_power_12?.[index]||0)
        },
      ];
  return (
    <MenuScreenComp title={"TEMPERATURES"} data={temperatureData}/>
  )
}
