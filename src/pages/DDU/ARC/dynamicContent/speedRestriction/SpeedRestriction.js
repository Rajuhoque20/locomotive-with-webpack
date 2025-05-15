import React from 'react'
import classes from './SpeedRestriction.module.css';
export default function SpeedRestriction() {
  return (
    <div className={classes.container}>
        <label>SPEED RESTRICTION</label>
        <div className={classes.content}>
            <span>KM CHAINAGE: ........</span>
            <div>
                <span>FROM</span>
                <span>TO</span>
                <span>PERMITTED SPEED</span>
            </div>
            <span className='fc-3'>(NOT IMPLEMENTED PRESENTLY)</span>
        </div>
    </div>
  )
}
