import React, { useEffect, useState } from 'react'
import './LiveSimulatorEvents.css'
import ButtonComp from '../../../../../../components/Instructor-station/UIComp/ButtonComp'
import EventTableComponent from './EventTable';
import { useLocation, useNavigate,useParams } from 'react-router-dom';
import { Icons } from '#framework';
import websocket from '../../../../../../services/Websocket';
import { useSimulatorStore } from '../../simulator-store';
export default function LiveSimulatorEvents({drag}) {
    const { tabs, activeId, updateTab, } = useSimulatorStore(state => state);
  const {new_exercise_button_icon,cancel_icon,enable_icon,disable_icon} = Icons.ISIcons;
  const activedata = tabs?.find(x => x.id === activeId)
  const {state} = useLocation();
  const [events,setevents] = useState()
  const [button,setbutton] = useState()
  const [filtered,setFiltered] = useState([])
  const [selecteevent,setselecteevent] = useState()
  useEffect(() => {
    const callback = (event) => {
      setevents(event);
      updateTab(activedata?.content?.sessionId, 'events', event);
    };
    websocket.subscribe('BE/FE/EVENT/EVENTLIST', callback);
  
    return () => {
      websocket.unsubscribeTopic('BE/FE/EVENT/EVENTLIST');
    };
  }, []);


  useEffect(() => {
    setevents(activedata?.content?.events);
  },[state?.reload])
  
  const navigate=useNavigate();
  const {id}=useParams();
  const handleNavigate = () =>{
      navigate('/addEvent',{state:{redirect:`/simulation/${id}`}}) 
  }
  const handleFilterButton = (button) => {
    setbutton(prev => (prev === button ? null : button));
  };

  const handleDelete = () => {
    if(selecteevent){
      let updated = events.find((x) => x.id === selecteevent.id)
      setevents((prevItems) =>
        prevItems.map((item) =>
          item.id === selecteevent.id ? { ...item,deleted:true } : item 
        )
      );
      updated['deleted'] = true
      updated['enabled'] = false
      updated['location'] = ''
      websocket.publish('BE/FE/EVENT/EVENTLIST',{event:updated})
      setselecteevent()
    }
  }

  
  useEffect(() => {
    if (button === 'Enabled') {
      setFiltered(activedata?.content?.events?.filter(event => event.enabled === true) || []);
    } else if (button === 'Disabled') {
      setFiltered(activedata?.content?.events?.filter(event => event.enabled === false) || []);
    }
  }, [button]);

  return (
    <div className='scenario_div' style={drag?{height:'73vh'}:{}}>

      <div className='header_actions'>
        <div className='left_actions'>
          <ButtonComp title={'Add'} prefixIcon={new_exercise_button_icon} bntStyle={{ "width": "6vw", "height": "4.5vh", fontSize: 'var(--font-size-4)' }} onClick={handleNavigate}/>
          {/* <ButtonComp title={'Delete'} prefixIcon={cancel_icon} bntStyle={{
            "width": "9.4vw", "height": "6vh", "background": "none", "color": " rgb(204, 204, 210)", fontSize: 'var(--font-size-4)',
            "backdrop-filter": "blur(100px)"
          }} /> */}
          <ButtonComp onClick={() => {handleDelete()}} title={'Delete'} prefixIcon={cancel_icon} bntStyle={{
            "width": "6vw", "height": "4.5vh", "background": selecteevent?'var(--Windows-Glass, rgba(224, 224, 232, 0.53))':"rgba(125, 125, 128, 0.53)", "color": selecteevent?'rgb(255, 255, 255)':" rgb(204, 204, 210)", fontSize: 'var(--font-size-4)',
            "backdrop-filter": selecteevent?"blur(100px)":null
          }} /> 

        </div>
        <div className='right_actions'>
          {/* <div className='twinbuttons'>
            <ButtonComp onClick={() => {handleFilterButton('Enabled')}} title={'Enabled'} prefixIcon={enable_icon} bntStyle={{
              "width": "11.71vw", "height": "5.5vh", "background":button === 'Enabled'? "rgb(204, 204, 210)":'none', "color": "#817f7f", "fontFamily": "'SF Pro', sans-serif",
              "fontSize": "var(--font-size-4)",
              "fontWeight": "590",
              "lineHeight": "3.15vh",
              "textAlign": "center"
            }} />
            <ButtonComp onClick={() => {handleFilterButton('Disabled')}} title={'Disabled'} prefixIcon={disable_icon} bntStyle={{
              "width": "11.71vw", "height": "5.5vh", "background":button === 'Disabled'? "rgb(204, 204, 210)":'none', "color": "#817f7f", "fontFamily": "'SF Pro', sans-serif",
              "fontSize": "var(--font-size-4)",
              "fontWeight": "590",
              "lineHeight": "3.15vh",
              "textAlign": "center"
            }} />
          </div> */}
        </div>
      </div>
      <EventTableComponent events={button?filtered:events} setselecteevent={setselecteevent} selecteevent={selecteevent}/>
    </div>
  )
}
