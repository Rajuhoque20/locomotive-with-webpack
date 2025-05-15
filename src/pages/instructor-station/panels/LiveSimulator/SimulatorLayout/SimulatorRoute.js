import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SimulatorOverView from '../SimulatorPage/SimulatorOverView'
import SimulatorExerciseFiles from '../SimulatorPage/SimulatorExerciseFiles'
import SimulatorHistory from '../SimulatorPage/SimulatorHistory'
import NewSimulationLive from '../SimulatorPage/Simulation/NewSimulationLive'
import AddFault from '../SimulatorPage/Simulation/AddFault'
import AddEvent from '../SimulatorPage/Simulation/AddEvent'
import SettingPage from '../../ReusablePages/SettingPage';
import Results from '../../ReusablePages/Results'
import { AddTrain } from '../SimulatorPage/Simulation/AddTrain'
export default function SimulatorRoutes() {

  return ( 
   <Routes>
       <Route path='/simulatorsimulator-home' element={< SimulatorOverView/>} />
       <Route path='/simulator-exercise-files' element={<SimulatorExerciseFiles />} />
       <Route path='/simulator-simulation-history' element={<SimulatorHistory />} />
       <Route path='/simulation/:id' element={<NewSimulationLive />}/>
       <Route path='/addfault' element={<AddFault/>} />
       <Route path='/addEvent' element={<AddEvent/>}/>
       <Route path='/settingInfo' element={<SettingPage/>}/>
       <Route path='/simulation-results/:id' element={< Results/>}/>
       <Route path='/addTrain' element={< AddTrain/>}/>
   </Routes>
  )
}