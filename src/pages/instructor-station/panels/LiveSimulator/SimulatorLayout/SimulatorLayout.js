import React from 'react';
import './SimulatorLayout.css'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import SimulatorHeader from './SimulatorHeader.js';
import SimulatrorSidebar from './SimulatrorSidebar.js';
import { useSimulatorStore } from '../simulator-store.js';
import SimulatorRoutes from './SimulatorRoute.js';

export default function SimulatorLayout() {
  const { activeTab } = useSimulatorStore(state => state)
  return (
    <>
      <Router>
        <section className='section-1'>
          <SimulatorHeader />
        </section>

        <section className='section-2'>

          {
            activeTab === '/simulatorsimulator-home' ?
              <div className='side-div'>
                <SimulatrorSidebar />
              </div> : ''
          }
          {
           !['/addfault','/addEvent'].includes(activeTab)?
            <div className='content-div' style={activeTab !== '/simulatorsimulator-home'?{padding:0,width:'100vw'}:{}}>
              <SimulatorRoutes />
            </div>:''
          }

        </section>
      </Router>
    </>
  )
}
