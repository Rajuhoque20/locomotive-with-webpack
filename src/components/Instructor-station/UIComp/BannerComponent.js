import React from 'react'
import './BannerComponent.css'
import ButtonComp from './ButtonComp';
import new_exercise_button_icon from '../../../assets/Instructor-station/Icons/new_exercise_button_icon.svg'
const BannerComponent = ({title,subtitle,button,btntitle,onClick,bannerImage}) => {
  return (
    <div className='banner-div' style={bannerImage?{'background-image':{}}:{}}>
        <div className='banner-contents'>
         <div className='banner-titles'>
         <h2 className='banner-title'>{title?title:'Welcome to the Instructor Panel'}</h2>
         <small className='banner-subtitle'>{subtitle?subtitle:'Streamline training with real-time monitoring and precise adjustments'}</small>
         </div>
         {
          button?
          <div className='banner-button'>
          <ButtonComp onClick = {onClick} title={btntitle?btntitle:'New Exercise'} prefixIcon={new_exercise_button_icon} bntStyle={{"width":"100%","height":"6.5vh","font-size":"var(--font-size-3)","border-radius":"1.2vh"}}/>
         </div>:''
         }
        </div>
    </div>
  )
}

export default BannerComponent;
