import React from "react";
import classes from './relatedInfo.module.css';
import HVCircuit from "./HVCircuit/HVCircuit";
import TractionConverter from "./tractionConverter/tractionConverter";
import AuxiliaryConverter from "./auxiliaryConverter/auxiliaryConverter";
import TractionMotor from "./tractionMotor/tractionMotor";
import AuxiliarySystem from "./auxiliarySystem/auxiliarySystem";
import Energy from "./energy/energy";
import RouteMap from "./routeMap/routeMap";
import SpeedRestriction from "./speedRestriction/speedRestriction";
import InchingMode from "./inchingMode/inchingMode";
import Brake from "./brake/brake";
import Temperature from "./temperature/temperature";
import Pressure from "./pressure/pressure";
export default function RelatedInfo({topic, inchingSpeed}) {
 
    const routeMapData=[
        {
            title:"ROUTE MAP",
        },
        {
            title:"ROUTE",
        },
        {
            title:"APPROACHING STATION",
        },
        {
            title:"LAST STATION",
        },
        {
            title:"EXPECTED TIME OF ARRIVAL",
        },
        {
            title:"POSITION OF SIGNALS",
        },
        {
            title:"DISTANCE TO NEXT STATION",
        },
        {
            title:"NEXT SPEED RESTRICTION",
        },
        {
            title:"KM CHANGE",
        },
        {
            title:"NEXT NEUTRAL STATION",
        }
    ];
   
  return (
    <div className={classes.container}>
        {topic===1&&<HVCircuit/>}
        {topic===2&&<Brake/>}
        {topic===3&&<TractionConverter />}
        {topic===4&&<Temperature />}
        {topic===5&&<AuxiliaryConverter/>}
        {topic===6&&<Pressure/>}
        {topic===7&&<TractionMotor/>}
        {topic===8&&<RouteMap data={routeMapData}/>}
        {topic===9&&<AuxiliarySystem />}
        {topic===10&&<SpeedRestriction/>}
        {topic===11&&<Energy />}
        {topic===12&&<InchingMode data={inchingSpeed}/>}
    </div>
  )
}
