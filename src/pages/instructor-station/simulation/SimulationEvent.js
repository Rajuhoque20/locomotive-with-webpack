import React from 'react'
import classes from './simulation.module.css';
export default function SimulationEvent() {
 
    const sampleData =[
        "CD is on BPA 1581 at 572.0 m (Active when the Condition becomes met)ASAF 1758 at 84.0 m (Active when the Condition becomes met)",
        "CD is on BPA 1581 at 56.0 m (Active when the Condition becomes met)0 seconds (Active after the Condition is met)",
        "0 seconds (Active after the Condition is met)0 seconds (Active after the Condition is met)",
       
        "CD is on UP 1555 at 7065.0 m (Active when the Condition becomes met)CD is on ASAF 1758 at 477.0 m (Active when the Condition becomes met)",
       
        "CD is on ASAF 1758 at 477.0 m (Active when the Condition becomes met)",
        "CD is on BPA 1581 at 572.0 m (Active when the Condition becomes met)ASAF 1758 at 84.0 m (Active when the Condition becomes met)",
        "CD is on BPA 1581 at 56.0 m (Active when the Condition becomes met)0 seconds (Active after the Condition is met)",
        "0 seconds (Active after the Condition is met)0 seconds (Active after the Condition is met)",
        "At 156.0 m",
        "CD is on UP 1555 at 7065.0 m (Active when the Condition becomes met)CD is on ASAF 1758 at 477.0 m (Active when the Condition becomes met)",
        "0 seconds (Active after the Condition is met)",
        "CD is on ASAF 1758 at 84.0 m (Active when the Condition becomes met)",
        "At 673.0 m",
       "CD is on UP 1748 at 8169.0 m (Active when the Condition becomes met)",
       "CD is on UP 1748 at 7793.0m (Active when the Condition becomes met)",
        "CD is on UP 1555 at 4945.0 m (Active when the Condition becomes met)",
    ]
 
    return (
    <div >

        <div className={classes.headingText}>Event Log</div>
        <div className={classes.eventTextContainer}>
            {sampleData?.map((item,id)=>{

                return(
                    <div key={id} className={classes.eventText}>{id+1}. {item}</div>
                )
            })}
        </div>
    </div>
  )
}
