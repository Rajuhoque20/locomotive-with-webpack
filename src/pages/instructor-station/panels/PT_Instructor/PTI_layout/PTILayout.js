import { Outlet, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';

import { usePTIStore } from '../PTI-store.js';
import PTIHeader from './PTIHeader.js';
import PTISidebar from './PTISidebar.js';
import PTIRoutes from './PTIRoute.js';

export default function PTILayout() {
    const {activeTab,setActiveTab } = usePTIStore(state => state);
    console.log('acttttt',activeTab)
  return (
    <>
      <Router>
        <section className='section-1'>
        <PTIHeader/>
        </section>


      
        <section style={{padding:'0'}} className='section-2'>

            <div className='side-div'>
            <PTISidebar/>
        </div> 
    
        <div className='content-div' style={{height:'93vh', padding:'1vh 2vh'} }>
          <PTIRoutes/>
        </div>
        </section>
        </Router>
    </>
  )
}
