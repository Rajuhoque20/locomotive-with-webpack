import React from 'react'
import classes from './inchingMode.module.css';
export default function InchingMode() {
  return (
    <div className={classes.container}>
        <div>
            <span>INCHING MODE <small>active</small>:</span>
            <span>0</span>
        </div>
        <div>
            <span>ACTUAL SPEED:</span>
            <span>0.0 kmph</span>
        </div>
        <div>
            <span>SET SPEED:</span>
            <span>0.5 kmph</span>
        </div>
        <span>MODIFY SET SPEEP WITH UP AND DOWN KEY</span>
    </div>
  )
}
