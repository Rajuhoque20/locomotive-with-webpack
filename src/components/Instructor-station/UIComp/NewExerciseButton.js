import React from 'react'
import { useMainStore } from '../../store';
import new_exercise_button_icon from '../../../assets/Instructor-station/Icons/new_exercise_button_icon.svg';
import './Button.css'
export default function NewExerciseButton() {
    const {addTab,activeTab,getNewPath}=useMainStore();
  return (
    <div className='exerciseBtn'>
        <button onClick={()=>{
          // console.log('data',extendedTabs)
          let path = getNewPath("exercise","/exercise")
         
          addTab('New Exercise',"exercise","/exercise")
          // naviage(path)
          // console.log('tabb',activeTab)
          // setActiveTab(activeTab+1)
          }}>
            <img src={new_exercise_button_icon} alt="new_exercise_button_icon"/>
            New Exercise</button>
    </div>
  )
}
