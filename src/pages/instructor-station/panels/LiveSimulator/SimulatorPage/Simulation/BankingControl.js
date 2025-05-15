import React, { useState } from 'react';

import './BankingControl.css'
import AutoBrake from '../../../ReusablePages/AutoBrake';
import Throttle from '../../../ReusablePages/Throttle';
const BankingControl = ({drag}) => {
  return (
    <div className='banking_control_div' style={drag?{height:'73vh'}:{}}>
        <div className='b_k_innerdiv'>
            <AutoBrake />
           <div className='throttle_div'>
           <Throttle/>  
            </div>             
        </div>
    </div>
  )
}

export default BankingControl;

  