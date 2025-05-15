import React from 'react'
import settings_icon from '../../../assets/Instructor-station/Icons/settings_icon.svg';
import './Input.css'
export default function HeadingLabel({title,suffixTitle,onsuffixClick=()=>{},}) {
  return (
    <div className='HeadingLabel'>
        <span>{title}</span>
        <img src={settings_icon} ></img>
        <span className='HeadingLable-border'></span>
        {suffixTitle && <>
        <img src=''></img>
        <span onClick={onsuffixClick} style={{textDecoration:'underline',cursor:'pointer'}}>{suffixTitle}</span>
        </>
        }
    </div>
  )
}
