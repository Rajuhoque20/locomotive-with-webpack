import React from 'react'
import new_exercise_button_icon from '../../../assets/Instructor-station/Icons/new_exercise_button_icon.svg';
import './Button.css'
export default function UploadBtn() {
  return (
    <div className='UploaBtn'>
         <button onClick={()=>{
            }}>
              <img src={new_exercise_button_icon} alt="icon"/>
              Upload</button>
    </div>
  )
}
