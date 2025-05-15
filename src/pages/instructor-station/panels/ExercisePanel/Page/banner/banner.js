import React from 'react'
import './banner.css';
import new_exercise_button_icon from "../../../../assets/Instructor-station/Icons/new_exercise_button_icon.svg";
import { useNavigate } from 'react-router-dom';
import { useMainStore } from '../../../../store';
export default function Banner() {
  const {addTab,activeTab,getNewPath}=useMainStore();
  const naviage=useNavigate()
  return (
    <div className='banner'>
        <h2>Welcome to the Instructor Panel</h2>
        <small>Streamline training with real-time monitoring and precise adjustments</small>
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
