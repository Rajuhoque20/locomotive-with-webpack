import React from 'react'
import { M_Dynamic_Speedometer } from './MS_Components/M_Dynamic_Speedometer';

const M_speedometer = () => {
  return (
    <div style={{height:'100vh',width:'100vw',display:'flex',alignItems:'center',justifyContent:'center',background:'black'}}>
        <div style={{height:'90%',width:'30%',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <M_Dynamic_Speedometer/>
        </div>
    </div>
  )
}

export default M_speedometer;
