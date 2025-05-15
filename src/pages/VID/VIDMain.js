import React, { lazy, Suspense, useEffect, useState } from 'react'
import classes from './VIDMain.module.css';

// import Layout from './Layout';
import { useVIDStore } from './store';
import websocket from '../../services/Websocket';
import { throttle } from 'lodash';
import { topics } from '../../constant/topic';
import { deepEqual } from '../../components/utilityFunction';
// import MachineRoom from './machineRoom/machineRoom';
// import RoofTop from './roofTop/RoofTop';
// import UnderFrame from './underFrame/UnderFrame';

// Lazy load components
const MachineRoom = lazy(() => import('./machineRoom/machineRoom'));
const RoofTop = lazy(() => import('./roofTop/RoofTop'));
const UnderFrame = lazy(() => import('./underFrame/UnderFrame'));
const Layout = lazy(() => import('./Layout'));

const tabData=[
  {
  title:"Machine Room",
  value:"machine room"
},
{
  title:"Roof Top",
  value:"roof top",
},
{
  title:"Under Frame",
  value:"under frame"
},
];

export const NavTab=({onClick, title, isActive})=>{
  return(
    <span onClick={onClick} className={isActive?classes.activeNav:""}>{title}</span>
  )
}
export const Footer=()=>{
  const {VIDTab,setVIDTab, navPage, setNavPage}=useVIDStore();
  return(
    <div className={classes.footer} style={{justifyContent:navPage?"left":""}}>  
              {navPage?
               <div style={{ cursor:"pointer", height:"4vh", width:"5vw", borderRadius:"0.4rem", background:"#302f2f"}} className='d-flex align-center gap-1 justify-center'
       onClick={()=>{
        setNavPage('');
      }}
       >
        <svg width={10} height={10} fill='none' viewBox='0 0 10 10'>
          <path d="M10, 0 L5,5 L10,10" stroke='#fff' strokeWidth={2}/>
        </svg>
        <span  className='fs-5'>Back</span>
       </div>
              :tabData?.map((item, index)=>{
                return(
                  <NavTab key={index} title={item.title} 
                  onClick={()=>{
                    setVIDTab(item.value);
                  }}
                  isActive={VIDTab===item.value}
                  />
                )
              })}
        </div>
  )
}
export default function VIDMain() {
  const [VIDData, setVIDData]=useState();
  const {navPage, setNavPage, VIDTab}=useVIDStore();
  useEffect(()=>{
   const callback=throttle((event)=>{
   
    if(!deepEqual(event,VIDData)||!VIDData)
    {
      setVIDData(event);
    }
    
   },1000)
   websocket.subscribe(topics.MACHINE_ROOM_LAYOUT,callback);
   return ()=>websocket.unsubscribeTopic(topics.MACHINE_ROOM_LAYOUT);
  },[VIDData]);

  const machineRoomData={
		scavenge_blower_traction_motor_blower_1:VIDData?.mcb_55_1_1,
		scavenge_blower_traction_motor_blower_2:VIDData?.mcb_55_1_2,
		scavenge_blower_machine_room_blower_1:VIDData?.mcb_56_1_1,
		scavenge_blower_machine_room_blower_2:VIDData?.mcb_56_1_2,
		traction_motor_blower_bogie_1:VIDData?.mcb_53_1_1,
		traction_motor_blower_bogie_2:VIDData?.mcb_53_1_2,
		oil_pump_converter_1:VIDData?.mcb_63_1_1,
		oil_pump_converter_2:VIDData?.mcb_63_1_2,
		machine_room_blower_1:VIDData?.mcb_54_1_1,
		machine_room_blower_2:VIDData?.mcb_54_1_2,
    oil_cooling_unit_converter_1:VIDData?.mcb_59_1_1,
    oil_cooling_unit_converter_2:VIDData?.mcb_59_1_2,
    loco_type:VIDData?.loco_type,
	 };
   
  return (
    <div className={classes.container} style={{position:"relative"}}>
        <div className={classes.content} style={{ height:"94vh"}} >
        <Suspense fallback={<div>Loading...</div>}>
            {VIDTab === "machine room" &&!navPage&& <MachineRoom data={machineRoomData} />}
            {VIDTab === "under frame" && <UnderFrame />}
            {VIDTab === "roof top" && <RoofTop />}
            {navPage&&<Layout data={VIDData}/>}
          </Suspense>
                         
        </div>
      <Footer/>
    </div>
  )
}
