import React from 'react'
import './textviewStyles.css'
const TextViewComp = ({text,styles,txtstyles}) => {
  return (
    <div className='textdiv' style={styles}>
     <div className='textview' style={txtstyles}>
     {text}
     </div>
    </div>
  )
}

export default TextViewComp;
