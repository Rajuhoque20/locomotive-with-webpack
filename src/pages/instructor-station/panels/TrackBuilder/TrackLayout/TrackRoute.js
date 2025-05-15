
import { Route, Routes } from 'react-router-dom'
import TrackOverview from '../TrackPage/TrackOverview'
import TrackDraft from '../TrackPage/TrackDraft'
import TrackFiles from '../TrackPage/TrackFiles'
import TrackDeletedFiles from '../TrackPage/TrackDeletedFiles'

export default function TrackRoutes() {
    
  return ( 
   <Routes>
       <Route path='/track-home' element={<TrackOverview />} />
       <Route path='/track-draft' element={<TrackDraft />} />
       <Route path='/track-files' element={<TrackFiles />} />
       <Route path='/track-deletedfiles' element={<TrackDeletedFiles />} />
   </Routes>
  )
}