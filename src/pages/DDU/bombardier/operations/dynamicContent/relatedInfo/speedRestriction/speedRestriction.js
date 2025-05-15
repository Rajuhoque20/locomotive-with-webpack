import React from 'react'
import classes from './speedRestriction.module.css';

export default function SpeedRestriction() {
  return (
    <div className={classes.container}>
        <span className='fs-4'>FROM</span>
        <span className='fs-4'>TO</span>
        <span className='fs-4'>PERMITTED SPEED</span>
        <label className='fs-4'>FUTURE PROVISION</label>
    </div>
  )
}
