import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './TrackSidebar.css';
import { Icons } from '#framework';
export default function TrackSidebar() {
    const {overview_icon,overview_active_icon,settings_icon,your_file_icon,your_file_active_icon,simulation_icon,simulation_history_active_icon} = Icons.ISIcons;
    const [activeKey, setActiveKey]=useState(localStorage.getItem("activeKey")||"1");
    const navigate=useNavigate();

    useEffect(()=>{
        if(activeKey==='1') {
            navigate('/track-home');
        } else if(activeKey==='2'){
            navigate('/track-draft');
        } else if(activeKey==='3'){
            navigate('/track-files');
        }  else if(activeKey==='4'){
            navigate('/track-deletedfiles');
        }
       
    },[])
    const navItems=[
        {
            navName:"Overview", icons:[overview_icon, overview_active_icon], path:"/track-home", key:"1"
        },
        {
            navName:"Drafts", icons:[your_file_icon, your_file_active_icon], path:"/track-draft", key:"2"
        },
        {
            navName:"Track Files", icons:[simulation_icon, simulation_history_active_icon], path:"/track-files", key:"3"
        },
        {
            navName:"Deleted Files", icons:[simulation_icon, simulation_history_active_icon], path:"/track-deletedfiles", key:"4"
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
    <section className='settings-div'>
        <img src={settings_icon} alt="settings_icon"/>
        <span>Settings</span>
    </section>
    </div>
  )
}

