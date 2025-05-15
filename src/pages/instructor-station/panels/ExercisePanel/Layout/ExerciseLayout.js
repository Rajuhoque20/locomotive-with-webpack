import React from 'react'
import './ExerciseLayout.css';
import {BrowserRouter as Router } from 'react-router-dom';
import ExerciseHeader from './ExerciseHeader.js';
import ExerciseSidebar from './ExerciseSidebar.js';
import ExerciseRoutes from './ExerciseRoute.js';
import { useExerciseStore } from '../store.js';
export default function ExerciseLayout() {
  const {activeTab} =useExerciseStore(state => state)
  return (
    <>
      <Router>
        <section className='section-1'>
        <ExerciseHeader />
        </section>
      
        <section className='section-2'>
        {
          activeTab === '/home'?
          <div className='side-div'>
          <ExerciseSidebar/>
         </div>:''
        }
        {
            
            <div className='content-div' style={activeTab !== '/home'?{padding:0,width:'100%'}:{}}>
                  <ExerciseRoutes/> 
              </div>
        }
        </section>
        </Router>
    </>
  )
}
