import React from 'react'
import './mimicStyles.css'
import FooterAction from '../../components/Instructor-station/UIComp/FooterAction'
export default function SimulationMimic() {
  return (
    <div className='mimic_div'>

      <div className='mimic_header'>
        <div className='mimic_header_content'>
          Mimic Diagram
        </div>
      </div>

      <div className='mimic_content'>

      </div>
      
     <div className='mimic_footer'> 
      <FooterAction/>
     </div>

    </div>
  )
}
