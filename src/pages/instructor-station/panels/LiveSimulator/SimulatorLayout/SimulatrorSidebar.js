import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './SimulatorSidebar.css';
import { useSimulatorStore } from "../simulator-store";
import { Icons } from '#framework';
export default function SimulatrorSidebar() {
    const {overview_icon,overview_active_icon,settings_icon,your_file_icon,your_file_active_icon,simulation_icon,simulation_history_active_icon} = Icons.ISIcons;
    const [activeKey, setActiveKey]=useState(localStorage.getItem("activeKey")||"1");
    const navigate=useNavigate();
    const { addTab } = useSimulatorStore(state=>state);


    useEffect(()=>{
        if(activeKey==='1')
        {
            navigate('/simulatorsimulator-home');
        } else if(activeKey==='2'){
            navigate('/simulator-exercise-files');
        
        } else if(activeKey==='3'){
            navigate('/simulator-simulation-history');
        }else if(activeKey === 'setting'){
            navigate( "/settingInfo")
        }
       
    },[])
    const navItems=[
        {
            navName:"Overview", icons:[overview_icon, overview_active_icon], path:"/simulatorsimulator-home", key:"1"
        },
        {
            navName:"Exercise Files", icons:[your_file_icon, your_file_active_icon], path:"/simulator-exercise-files", key:"2"
        },
        {
            navName:"Simulation History", icons:[simulation_icon, simulation_history_active_icon], path:"/simulator-simulation-history", key:"3"
        },
    ]
    const navHandler=(data)=>{
        // localStorage.setItem("activeKey", data?.key);
        console.log('data in navclick',data?.path)
        setActiveKey(data?.key);
        navigate(data?.path);
    }
  return (
    <div className='nav-container'>
        <section className='nav-items-wrapper'>
        {navItems?.map((item,index)=>{
            return (
                <div key={index} className={activeKey===item?.key?'nav-item-active':'nav-item'} onClick={()=>{
                    navHandler(item);
                }}>
                    <NavLink to={item.path} className={`nav-name-image ${activeKey===item?.key?'text-color-active':'text-color'}`}>                
                        <div className={activeKey===item?.key?'nav-image-div-active':'nav-image-div'}>
                            <img src={activeKey===item?.key?item?.icons[1]:item?.icons[0]} alt={item.key} className='nav-image-div-img'/>
                        </div>                       
                        <span className='nav-name'>{item?.navName}</span>                                
                    </NavLink>
                </div>
            )
        })}
    </section>
    <section className='settings-div' onClick={() => {navHandler({key:'setting',path:'/settingInfo'})}}>
        <img src={settings_icon} alt="settings_icon"/>
        <span>Settings</span>
    </section>
    </div>
  )
}

