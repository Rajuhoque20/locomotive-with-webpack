import React from 'react'
import classes from './SB2.module.css';
import FireDectectionEquip from './FireDectectionEquip';
import CircuitBreaker1 from './CircuitBreaker1';
import { Icons } from '#framework';
import BlockingDiode from './BlockingDiode';
import AuxiliaryConverter from '../../../components/VID/AuxiliaryContactor';
import { HBSwitch } from '../HB/HBSwitch';

export const Description=({text})=>{
  return(
    <div className={classes.description}>
      <span>{text}</span>
    </div>
  )
}

export const SwitchDesc=({item, width="100%", height="70%"})=>{
  
  return(
    <div className={classes.switches}>
                <HBSwitch width={width} height={height} value={item.value} keyValue={item.key}/>
                <Description text={item.text}/>
     </div>
  )
}

export const SB2ContentBox=({data})=>{
  return(
    <div className={classes.switchContainer}>
        {
         data?.map((item,index)=>{
            return(
              <SwitchDesc  key={index} item={item} height='50%'/>
            )
          })
        }
    </div>
  )
}
export const SB2ContentBox2=({data})=>{
 
  return(
    <div className={classes.SB2Contentbox2}>
      <CircuitBreaker1 description={"110 Circuit Breaker Output battery charger"} value={data?.mcb_110} valueKey={"mcb_110"}/>
      <CircuitBreaker1 description={"112.1 Circuit Breaker Control circuit locomotive"} value={data?.mcb_112_1} valueKey={"mcb_112_1"}/>
      <FireDectectionEquip/>
    </div>
  )
}
export const BlockingDiodes=()=>{
  return(
    <div className={classes.blockingDiodes}>
        <BlockingDiode/>
        <BlockingDiode/>
        <BlockingDiode/>
        <BlockingDiode/>
        <BlockingDiode/>
        <BlockingDiode/>
      </div>
  )
}
export const SB2ContentBox3=()=>{
  const { SB_contactor, SB_relay, SB_unknown1}=Icons.VIDIcons;
  return(
    <div>
      <BlockingDiodes/>
      <div className={classes.SBRelay}>
          <img src={SB_relay}/>
          <img src={SB_relay}/>
      </div>
      <div className={classes.SBContactor}>
        <img src={SB_contactor}/>
        <img src={SB_contactor}/>
      </div>
      <div className={classes.SBUnknown1}>
        <img src={SB_unknown1}/>
        <img src={SB_unknown1}/>
      </div>
    </div>
  )
  
}
export const SB2ContentBox4=()=>{
  return(
    <div >
      <AuxiliaryConverter/>
      <AuxiliaryConverter/>
    </div>
  )
}

 const SB2=({data})=> {
    const contentBox1Data=[
      {
        text:"127.81 Commissioning 1",
        value:data?.mcb_127_81,
        key:"mcb_127_81",
      },
      {
        text:"127.15 Vigilance Control",
        value:data?.mcb_127_15,
        key:"mcb_127_15",
      },
      {
        text:"127.7 Pneumatic panel",
        value:data?.mcb_127_7,
        key:"mcb_127_7",
      },
      {
        text:"127.82 Commissioning 2",
        value:data?.mcb_127_82,
        key:"mcb_127_82",
      },
      {
        text:"48.1 Aux. Compressor",
        value:data?.mcb_48_1,
        key:"mcb_48_1",
      },
      {
        text:"127.3/2 Driver Cab",
        value:data?.mcb_127_3_2,
        key:"mcb_127_3_2",
      },
      {
        text:"127.91/2 Power supply 24V/48V",
        value:data?.mcb_127_91_2,
        key:"mcb_127_91_2",
      },
      {
        text:"310.7/1 Markers light",
        value:data?.mcb_310_7_1,
        key:"mcb_310_7_1",
      },
      {
        text:"310.1/2 Front Light",
        value:data?.mcb_310_1_2,
        key:"mcb_310_1_2",
      },
      {
        text:"310.4 Lighting machine room",
        value:data?.mcb_310_4,
        key:"mcb_310_4",
      },
      {
        text:"127.1/2 Electronics traction converter ",
        value:data?.mcb_127_1_2,
        key:"mcb_127_1_2",
      },
      {
        text:" 127.11/2  Power supply Gate Units",
        value:data?.mcb_127_11_2,
        key:"mcb_127_11_2",
      },
      {
        text:" 127.2/2  Monitoring",
        value:data?.mcb_127_2_2,
        key:"mcb_127_2_2",
      },
      {
        text:"127.22/2 Electronics auxiliary convertor  ",
        value:data?.mcb_127_22_2,
        key:"mcb_127_22_2",
      },
      {
        text:"127.22/3 Electronics auxiliary convertor  ",
        value:data?.mcb_127_22_3,
        key:"mcb_127_22_3",
      },
      {
        text:"127.9/3  Central electronics",
        value:data?.mcb_127_9_3,
        key:"mcb_127_9_3",
      },
      {
        text:"127.9/4  Central electronics",
        value:data?.mcb_127_9_4,
        key:"mcb_127_9_4",
      },
    
      {
        text:"127.92 MEMOTEL speedometer",
        value:data?.mcb_127_92,
        key:"mcb_127_92",
      },
    ];

    const SB2Content2Data={
      mcb_110:data?.mcb_110 , 
      mcb_112_1:data?.mcb_112_1,
    }

  return (
             <div className={classes.container}>
                   <SB2ContentBox data={contentBox1Data}/>
                   <SB2ContentBox2 data={SB2Content2Data}/>
                   <SB2ContentBox3/>
                   <SB2ContentBox4/>
                </div>
  )
}
export default SB2;