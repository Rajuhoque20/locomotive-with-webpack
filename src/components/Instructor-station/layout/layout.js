import React from 'react'
import './layout.css';
import {BrowserRouter as Router } from 'react-router-dom';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import LocoRoutes from '../locoRoutes/locoRoutes';
import {useMainStore} from '../../store.js'
export default function Layout() {
  const {activeTab} =useMainStore()
  return (
    <>
      <Router>
        <section className='section-1'>
        <Header/>
        </section>
      
        <section className='section-2'>
        {activeTab==='/home' && <div className='side-div'>
            <Sidebar/>
        </div> }
        <div className='content-div'>
            <LocoRoutes/>
        </div>
        </section>
        </Router>
    </>
  )
}
