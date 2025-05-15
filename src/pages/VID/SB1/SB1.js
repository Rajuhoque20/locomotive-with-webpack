import React from 'react'
import classes from './SB1.module.css';
import { BlockingDiodes, SwitchDesc } from '../SB2/SB2';
import AuxiliaryConverter from '../../../components/VID/AuxiliaryContactor';
import { Icons } from '#framework';
import RotarySwitchDesc from './RotarySwitch';
import KeySwitch from './KeySwitch';
import IlluminatedPushButton from './IlluminatedPushButton';
import CustomTooltip from '../../../components/VID/CustomPopover/CustomTooltip';
import VCUReset from './VCUReset';



export const SB2Content=({data})=>{
  const { wire_register7}=Icons.VIDIcons;
  const rotarySwitchData=[
    {
      title:"152 Rotary Switch Failure mode operation",
      type:2,
      value:data?.switch_152,
      key:"switch_152",
    },
    {
      title:"154 Rotary Switch Bogie cut out",
      type:3,
      value:data?.switch_154,
      key:"switch_154",
    },
    {
      title:"160 Rotary Switch Configuration",
      type:2,
      value:data?.switch_160,
      key:"switch_160",
    },
    {
      title:"237.1 Rotary Switch Vigilance device cut-off",
      type:2,
      value:data?.switch_237_1,
      key:"switch_237_1",
    },
  ];
  return(
    <div className='d-flex align-center' style={{gap:"2%"}}>
      {rotarySwitchData?.map((item, index)=>{
        return(
          <RotarySwitchDesc title={item.title} type={item.type} item={item} key={index}/>
        )
      })}
     <div style={{width:"10%", height:"100%", display:"flex"}}>
     <KeySwitch value={data?.key_179} valueKey={"key_179"}/>
     </div>
     <div style={{width:"10%", height:"100%", display:"flex"}}>
      <IlluminatedPushButton/>
      </div>
      <div style={{width:"10%", height:"100%", display:"flex"}}>
        <VCUReset data={data?.vcu_reset}/>
      </div>
      
      <div className='d-flex align-center' style={{width:"15%", height:"100%", marginLeft:"auto",}}>
        <img src={wire_register7} style={{width:"100%", height:"100%",}}/>
      </div>
    </div>
  )
}
export const SB2Content5=({data})=>{
  return(
    <div className={classes.content5}>
      <div style={{ width:"27%"}}>
      <CustomTooltip isWorking={data?.headlight_contactor===1} content={data?.headlight_contactor===1?"Open":"Close"}>
             <AuxiliaryConverter style={{cursor:"pointer",}}/>
      </CustomTooltip>
      </div>
      <AuxiliaryConverter />
      <AuxiliaryConverter/>
      <div></div>
    </div>
  )

}
export const SB2Content4=()=>{
  const { SB_contactor, SB_relay,SB_unknown}=Icons.VIDIcons;
  return(
    <div className={classes.content4}>
      <BlockingDiodes />
      <div>
      <img src={SB_relay}/>
      </div>
      <div>
      <img src={SB_relay}/>
      </div>
      <div>
      <img src={SB_contactor}/>
      </div>
      <div>
      <img src={SB_relay}/>
      </div>
   
      <div></div>
      <div style={{height:"100%", display:"flex", marginLeft:"2%"}}>
        <img src={SB_unknown} style={{height:"100%", width:"100%"}}/>
      </div>
    </div>
  )

}

const SBContent2=({data})=>{
  
  const switchesData=[
    {
      text:"127.3/1 Driver’s cab",
      value:data?.mcb_127_3_1,
      key:"mcb_127_3_1",
    },
    {
      text:"127.12  Pantograph,VCB Control",
      value:data?.mcb_127_12,
      key:"mcb_127_12",
    },
    {
      text:"127.91/1  Power supply 24V/48V",
      value:data?.mcb_127_91_1,
      key:"mcb_127_91_1",
    },
    {
      text:" 310.1/1  Lighting front",
      value:data?.mcb_310_1_1,
      key:"mcb_310_1_1",
    },
    {
      text:"127.1/1 Electronics traction converter",
      value:data?.mcb_127_1_1,
      key:"mcb_127_1_1",
    },
    {
      text:" 127.1 1/1  Power supply Gate Units",
      value:data?.mcb_127_11_1,
      key:"mcb_127_11_1",
    },
    {
      text:" 127.2/1  Monitoring",
      value:data?.mcb_127_2_1,
      key:"mcb_127_2_1",
    },
    {
      text:"127.22/1  Electronics, auxiliary converter",
      value:data?.mcb_127_22_1,
      key:"mcb_127_22_1",
    },
    {
      text:"127.9/1  Central electronics",
      value:data?.mcb_127_9_1,
      key:"mcb_127_9_1",
    },
    {
      text:"127.9/2  Central electronics",
      value:data?.mcb_127_9_2,
      key:"mcb_127_9_2",
    },
  ];

  const {SB1_register, wire_register}=Icons.VIDIcons;
  return(
    <div style={{ display:"flex",}}>
      <div style={{width:"60%", display:"flex", height:"90%", gap:"1%"}}>
      {switchesData?.map((item, index)=>{
        return(
          <SwitchDesc key={index} item={item} width="90%" height='60%'/>
        )
      })}
      </div>
      <div className='d-flex align-center' style={{width:"20%", display:"flex", height:"100%", }}>
      <img src={wire_register} style={{width:"50%", height:"90%",}}/>
      <img src={wire_register} style={{width:"50%", height:"90%",}}/>
      </div>
      <div style={{width:"20%", display:"flex", height:"100%",}}>
        <img src={SB1_register} style={{width:"100%", height:"100%",}}/>
      </div>
      
    </div>
  
  )
}

const SBContent3=()=>{
  const {relay_earth_fault, register_12, connecting_box}=Icons.VIDIcons
  return(
    <div className='d-flex align-center'>
      <div style={{width:"20%", height:"90%",alignItems:"end",}} className='d-flex'>
        <img src={relay_earth_fault} style={{width:"100%", height:"50%",}}/>
      </div>
      <div className='d-flex align-center' style={{width:"30%", height:"100%", gap:"2%", marginLeft:"10%"}}>
        <div className='d-flex' style={{width:"15%", height:"80%"}}>
          <img style={{width:"100%", height:"100%"}} src={register_12}/>
        </div>
        <div className='d-flex' style={{width:"15%", height:"80%"}}>
          <img style={{width:"100%", height:"100%",}} src={register_12}/>
        </div>
      </div>
      <div className='d-flex align-center' style={{width:"35%", height:"80%"}}>
          <img style={{width:"100%", height:"100%",}} src={connecting_box}/>
        </div>
    </div>
  )
}

 const SB1=({
  data
 })=> {
  const {
    switch_152,
  switch_160,
  switch_154,
  switch_237_1,
  mcb_127_3_1,
  mcb_127_12,
  mcb_127_91_1,
  mcb_310_1_1,
  mcb_127_1_1,
  mcb_127_11_1,
  mcb_127_2_1,
  mcb_127_22_1,
  mcb_127_9_1,
  mcb_127_9_2,
}=data;

  const SB2ContentData={
    switch_152,
    switch_160,
    switch_154,
    switch_237_1,
    vcu_reset:data?.vcu_reset,
    key_179:data?.key_179,
  };

  const SB2Content2Data={
    mcb_127_3_1,
  mcb_127_12,
  mcb_127_91_1,
  mcb_310_1_1,
  mcb_127_1_1,
  mcb_127_11_1,
  mcb_127_2_1,
  mcb_127_22_1,
  mcb_127_9_1,
  mcb_127_9_2,
  };

  const SB2Content5Data={
    headlight_contactor:data?.headlight_contactor
  };
  return (
     <div className={classes.container} >
                      <SB2Content data={SB2ContentData}/>
                     <SBContent2 data={SB2Content2Data}/>
                     <SBContent3/>
                     <SB2Content4/>
                     <SB2Content5 data={SB2Content5Data}/>
                    </div>
  )
}
export default SB1;

