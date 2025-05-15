import LandingPage from '../../landingPage'
import SimulatorOverView from '../../LiveSimulator/SimulatorPage/SimulatorOverView'
import ExerciseOverview from '../Page/ExerciseOverview'
import TrackOverview from '../../TrackBuilder/TrackPage/TrackOverview'
import { Route, Routes } from 'react-router-dom'
import ExerciseDraft from '../Page/ExerciseDraft'
import ExerciseFiles from '../Page/ExerciseFiles'
import ExerciseDeletedFiles from '../Page/ExerciseDeletedFiles'
import ExerciseHistory from '../Page/ExerciseHistory'
import ExercisePanelNewExercise from '../Page/ExercisePanelPages/ExcercisePanelNewExcercise'
import AddEvent from '../../LiveSimulator/SimulatorPage/Simulation/AddEvent'

export default function ExerciseRoutes() {

  return ( 
   <Routes>
       <Route path='/home' element={<ExerciseOverview />} />
       <Route path='/drafts' element={<ExerciseDraft />} />
       <Route path='/exercise-files' element={<ExerciseFiles />} />
       <Route path='/deleted-files' element={<ExerciseDeletedFiles />} />
       <Route path='/simulation-history' element={<ExerciseHistory />} />
       <Route path='/new-exercise/:id' element={<ExercisePanelNewExercise/>}/>
       <Route path='/excerciseaddEvent' element={<AddEvent/>}/>
   </Routes>
  )
}