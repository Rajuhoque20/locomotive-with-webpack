import {BrowserRouter as Router } from 'react-router-dom';
import './TrackLayout.css'
import { useTrackStore } from '../Track-store.js';
import TrackHeader from './TrackHeader.js';
import TrackSidebar from './TrackSidebar.js';
import TrackRoutes from './TrackRoute.js';
export default function TrackLayout() {
  const {activeTab} =useTrackStore()
  return (
    <>
      <Router>
        <section className='section-1'>
        <TrackHeader/>
        </section>
      
        <section className='section-2'>
       <div className='side-div'>
            <TrackSidebar/>
        </div> 
        <div className='content-div'>
          <TrackRoutes/>
        </div>
        </section>
        </Router>
    </>
  )
}
