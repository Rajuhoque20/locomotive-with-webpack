import React from 'react'
import Home from './home/home';
import ScreensMenu from './screensMenu/screensMenu';
import ARCSubSystem from './subSystems/ARCSubSystem';
import HighVoltageCircuit from './highVoltageCircuit/HighVoltageCircuit';
import TractionConverter from './tractionConverter/TractionConverter';
import AuxiliaryConverter from './auxiliaryConverter/AuxiliaryConverter';
import { useARCStore } from '../store';
import TractionMotor from './tractionMotor/TractionMotor';
import RouteMap from './routeMap/RouteMap';
import SpeedRestriction from './speedRestriction/SpeedRestriction';
import DriverDetails from './driverDetails/DriverDetails';
import IOSignals from './ioSignals/IOSignals';
import { AuxiliarySystem } from './auxiliarySystem/AuxiliarySystem';
import BrakingSystem from './brakingSystem/BrakingSystem';
import EnergyMonitoring from './energyMonitoring/EnergyMonitoring';
import Temperature from './temperature/Temperature';
import Pressure from './pressure/Pressure';
export default function DynamicContent() {
  const {screen}=useARCStore();

  return (
    <>
        {screen==="Home"&&<Home/>}
        {screen==="Menu"&&<ScreensMenu/>}
        {screen===0&&<ARCSubSystem/>}
        {screen===1&& <EnergyMonitoring/>}
        {screen===2&&<HighVoltageCircuit/>}
        {screen===3&&<Temperature/>}
        {screen===4&&<TractionConverter/>}
        {screen===5&&<Pressure/>}
        {screen===6&&<AuxiliaryConverter/>}
        {screen===7&&<RouteMap/>}
        {screen===8&&<TractionMotor/>}
        {screen===9&&<SpeedRestriction/>}
        {screen===10&&<AuxiliarySystem/>}
        {screen===11&&<DriverDetails/>}
        {screen===12&&<BrakingSystem/>}
        {screen===13&&<IOSignals/>}
    </>
  )
}
