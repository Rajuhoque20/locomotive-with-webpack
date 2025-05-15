import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../../panels/landingPage'
import ExerciseLayout from '../../panels/ExercisePanel/Layout/ExerciseLayout'
import SimulatorLayout from '../../panels/LiveSimulator/SimulatorLayout/SimulatorLayout'
import TrackLayout from '../../panels/TrackBuilder/TrackLayout/TrackLayout'

export default function LocoRoutes() {
  return ( 
   <Routes>
        <Route  path='/' element={<LandingPage />}  />
        <Route  path='/simulator' element={<SimulatorLayout />} />
        <Route  path='/exercise' element={<ExerciseLayout />} />
        <Route  path='/track' element={<TrackLayout />} />
   </Routes>
  )
}
       {/* <Route path='/home' element={<Overview/>}/>
        <Route path='/drafts' element={<Drafts/>}/>
        <Route path='/your-files' element={<YourFiles/>}/>
        <Route path='/deleted-files' element={<DeletedFiles/>}/>
        <Route path='/simulation-history' element={<SimulationHistory/>}/>
        <Route path='/track-builder' element={<TrackBuilder/>}/>
        <Route path='/exercise/:id' element={<NewExercise />}/>
        <Route path='/simulation/:id' element={<NewSimulation />}/>
        <Route path='/track/:id' element={<TrackCreate />}/> */}