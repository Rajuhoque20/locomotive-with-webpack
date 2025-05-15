import React, { useEffect, useState } from 'react'
import './AddEvent.css'
import ButtonComp from '../../../../../../components/Instructor-station/UIComp/ButtonComp';
import Dropdown, { DropdownById } from '../../../../../../components/Instructor-station/UIComp/DropDownMenu';
import { useLocation, useNavigate } from 'react-router-dom';
import websocket from '../../../../../../services/Websocket';
import { useSimulatorStore } from '../../simulator-store';

const AddEvent = () => {
    const { tabs, activeId, updateTab, } = useSimulatorStore(state => state);
    const [selectedevent,setselectedevent] = useState()
    const [loc,setloc] = useState()
    const activedata = tabs?.find(x => x.id === activeId)
    const [events,setevents] = useState(activedata?.content?.events)

    const { state } = useLocation();
    console.log('foredit',state?.edit?.id)
    const options = events?.map((x => {
        return{
            label:x.eventName,
            id:x.id,
            data:x.data
        }
    }))
    useEffect(() => {
        setselectedevent(state?.edit?.id)
    },[state?.edit])

    const handleSave = () => {
        if(selectedevent && loc){
          let updated = events.find((x) => x.id === selectedevent)
        
          setevents((prevItems) =>
            prevItems.map((item) =>
              item.id === selectedevent ? { ...item, enabled:true,location:loc } : item 
            )
          );
          updated['enabled'] = true
          updated['deleted'] = false
          updated['location'] = loc
          websocket.publish('BE/FE/EVENT/EVENTLIST',{event:updated})
          console.log('updatedw',{event:updated})
        }

        updateTab(activedata?.content?.sessionId, 'events', events,'ev');
        navigate(state?.redirect, { state: { activeTab: 'events',reload:true } })
       
    }


    const navigate = useNavigate();
    const handleClick = () => {
        navigate(state?.redirect, { state: { activeTab: 'events' } })

    }
    
    const forms = [
        {
            title: 'Select Event',
            componentType: 'Dropdown',
            options:options,

        },
        {
            title: 'Location',
            componentType: 'Input',
            placeholder: 'Enter Location'
        },
        // {
        //     title:'Time',
        //     componentType:'Input',
        //     placeholder:'Enter Time'
        // }
    ]
    return (
        <div className='addEventDiv'>
            <div className='addEventContent'>
                {forms?.map(x => {
                    return (
                        <AddEventForm selected={selectedevent} title={x.title} component={x.componentType} placeholder={x.placeholder} options={x.options} setselectedevent={setselectedevent} setloc={setloc}/>
                    )
                })}
            </div>
            <div className='addEventFooterDiv'>
                <ButtonComp title={'Save Changes'} onClick={e => { handleSave() }} bntStyle={{ 'width': '12vw', 'height': '5.7vh', 'border-radius': '1vh' }} />
                <ButtonComp title={'Cancel'} onClick={e => { handleClick() }} bntStyle={{ 'width': '8vw', 'height': '5.7vh', 'border-radius': '1vh', 'color': 'white', 'background': 'none', 'backdrop-filter': 'blur(5.7vh)' }} />
            </div>
        </div>
    )
}


export default AddEvent;


const AddEventForm = ({ title, component, placeholder,options = [] ,setselectedevent,setloc,selected}) => {
    const handleChange = (event) => {
        setloc(event.target.value); // Update state on input change
      };
    return (
        <div className='addEventFormdiv'>
            <div className='addEventFormdivLeft'>
                <div className='addeventformtitle'>
                    {title ? title : 'title'}
                </div>
            </div>
            <div className='addEventFormdivRight'>
                {component ?
                    component == 'Dropdown' ? <DropdownById selected={selected} options={options} onSelect={setselectedevent}/> :
                        component == 'Input' ?
                            <input className='inputstylediv' placeholder={placeholder}
                            onChange={handleChange}
                            ></input>
                            : null
                    : ''}
            </div>
        </div>
    )
}