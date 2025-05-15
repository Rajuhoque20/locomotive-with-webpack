import React from 'react'
import clearIcon from '../../../assets/Instructor-station/Icons/ClearIcon.svg';
import './Input.css'
export default function InputName({name,onChange,placeholder}) {
  return (
    <div className='InputName-container'>
    <input value={name} type='text' placeholder={placeholder} onChange={onChange} />
    <img src={clearIcon} />
    </div>
  )
}
