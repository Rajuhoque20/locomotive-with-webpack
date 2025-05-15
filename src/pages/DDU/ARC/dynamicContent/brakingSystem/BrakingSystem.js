import React, { useContext } from 'react'
import MenuScreenComp from '../auxiliarySystem/MenuScreenComp'
import { ARCContext } from '../../Context';

export default function BrakingSystem() {
    // const data=useData(topics.ARCB)
    const commonData=useContext(ARCContext);

    console.log("ccomm", commonData)

  
    const brakingSystemData=[
        {
          name:"SPEED (KM/H)",
          value:["0.0"],
        },
        {
          name:"MASTER CONTROLLER",
          value:["THROTTLE ZERO"],
        },
        {
          name:"WHEEL SLIP",
          value:["OFF"],
        },
        {
          name:"BE DEMAND (KN)",
          value:["0.0"],
        },
        {
          name:"BE ACTUAL (KN)",
          value:["0.0"],
        },
        {
          name:"PNEWMATIC BRAKE DEMAND",
          value:["0.0"],
        },
        {
          name:"REGENERATED POWER (KW)",
          value:["1 0 634"],
        },
        {
          name:"REGENERATED ENERGY",
          value:["0.0"],
        },
        {
          name:"COMPRESSOR 1,2",
          value:["ON", "ON"],
        },
      ];
  return (
    <MenuScreenComp title={"BRAKING SYSTEM"} data={brakingSystemData}/>
  )
}
