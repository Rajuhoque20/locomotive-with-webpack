import React from 'react'
import { useMainStore } from '../../store';
import new_exercise_button_icon from '../../../assets/Instructor-station/Icons/new_exercise_button_icon.svg';
import './Button.css'
export default function NewTrackBtn() {
    const {addTab,activeTab,getNewPath}=useMainStore();
    return (
      <div className='exerciseBtn'>
          <button onClick={()=>{
            // console.log('data',extendedTabs)
            let path = getNewPath("track","/track")
           
            addTab('New track',"track","/track")
            // naviage(path)
            // console.log('tabb',activeTab)
           
            }}>
              <img src={new_exercise_button_icon} alt="new_exercise_button_icon"/>
              New Track</button>
      </div>
    )
}
