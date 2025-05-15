import React from 'react'
import MenuScreenComp from '../auxiliarySystem/MenuScreenComp'
import { topics } from '../../../../../constant/topic'
import { useData } from "../../../../../components/useData";

export default function EnergyMonitoring() {
     const {data}=useData(topics.ARCENERGY);

    const energyMonitoringData=[
        {
          name:"ENERGY CONSUMED CUMULATIVE",
          value:[data?.cum_traction_energy||0],
        },
        {
          name:"ENERGY REGENERATED CUMULATIVE",
          value:[data?.cum_regenaration_energy||0],
        },
        {
          name:"ENERGY CONSUMED TRIP",
          value:[data?.energy_consumption_trip||0],
        },
        {
          name:"ENERGY REGENERATED TRIP",
          value:[data?.energy_regenarated_trip||0],
        },
        {
          name:"REGENERATION RATIO CUMULATIVE",
          value:[data?.regeneration_ratio_cum||0],
        },
        {
          name:"REGENERATION RATIO TRIP",
          value:[data?.regeneration_ratio_trip||0],
        },
      ];

  return (
    <MenuScreenComp title={"ENERGY MONITORING"} data={energyMonitoringData}/>
  )
}
