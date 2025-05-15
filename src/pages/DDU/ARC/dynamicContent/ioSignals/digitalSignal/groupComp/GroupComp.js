import React from 'react'
import classes from './GroupComp.module.css'
import { useARCStore } from '../../../../store'
export default function GroupComp() {
  const {ioScreenPointer}=useARCStore();
  return (
    <div className={classes.container}>
        
            <div  className={classes.row}>
                <span>INPUT SIGNALS</span>
                <span style={{color:ioScreenPointer===0?"var(--color-yellow)":""}}>GROUP-1</span>
                <span style={{color:ioScreenPointer===1?"var(--color-yellow)":""}}>GROUP-2</span>
            </div>
            <div className={classes.row}>
                <span>OUTPUT SIGNALS</span>
                <span style={{color:ioScreenPointer===2?"var(--color-yellow)":""}}>GROUP-1</span>
                <span style={{color:ioScreenPointer===3?"var(--color-yellow)":""}}>GROUP-2</span>
            </div>
       
    </div>
  )
}
