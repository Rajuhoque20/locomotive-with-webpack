import React from 'react'
import classes from './HB.module.css';
import HBTop from './HBTop';
import HBBottom from './HBBottom';
import HBSecond, { HBThird } from './HBSecond';
 const HB=({type, data})=> {

  return (
             <div className={classes.container}>                 
                      <HBTop type={type} data={{auxiliaryContactor:data?.auxiliary_contactor, mainCompressor:data?.contactor_main_pressure, fuseAuxiliary:data?.fuse_auxiliary}}/>
                      <HBSecond data={data?.mcbThree}/>
                      <HBThird mcbTwo={data?.mcbTwo} mcbOne={data?.mcbOne}/>
                      <HBBottom type={type} data={{scavengeBlower:data?.contactor_scavenge_blower, oilPump:data?.contactor_oil_pump}}/>
                </div>
  )
}
export default HB;
