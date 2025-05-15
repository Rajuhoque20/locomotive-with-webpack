import React from 'react'
import './Button.css'

export default function ButtonComp({ title, suffixIcon, prefixIcon, bntStyle, onClick, btnContainer,imgstyle }) {
  return (
    <div className='Comp-Button' style={btnContainer}>
      <button style={bntStyle} onClick={onClick}>
        {prefixIcon && <img style={imgstyle} src={prefixIcon} alt="icon" />}
        {title ? <span>{title}</span> : ''}
        {suffixIcon && <img style={imgstyle} src={suffixIcon} alt="icon" />}

      </button>
    </div>
  )
}


