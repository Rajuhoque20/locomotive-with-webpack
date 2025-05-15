import React, { useEffect, useState } from 'react'
import overview_icon from '../../../assets/Instructor-station/Icons/overview_icon.svg';
import overview_active_icon from '../../../assets/Instructor-station/Icons/overview_active_icon.svg';
import settings_icon from '../../../assets/Instructor-station/Icons/settings_icon.svg';
import draft_icon from '../../../assets/Instructor-station/Icons/draft_icon.svg';
import draft_active_icon from '../../../assets/Instructor-station/Icons/draft_active_icon.svg';
import your_file_icon from '../../../assets/Instructor-station/Icons/your_file_icon.svg';
import your_file_active_icon from '../../../assets/Instructor-station/Icons/your_file_active_icon.svg';
import deleted_file_icon from '../../../assets/Instructor-station/Icons/deleted_file_icon.svg';
import deleted_file_active_icon from '../../../assets/Instructor-station/Icons/deleted_file_active_icon.svg';
import simulation_icon from '../../../assets/Instructor-station/Icons/simulation_icon.svg';
import simulation_history_active_icon from '../../../assets/Instructor-station/Icons/simulation_history_active_icon.svg';
import track_builder_icon from '../../../assets/Instructor-station/Icons/track_builder_icon.svg';
import track_builder_active_icon from '../../../assets/Instructor-station/Icons/track_builder_active_icon.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
    const [activeKey, setActiveKey]=useState(localStorage.getItem("activeKey")||"1");
    const navigate=useNavigate();

    useEffect(()=>{
        if(activeKey==='1')
        {
            navigate('/home');
        }
        else if(activeKey==='2'){
            navigate('/drafts');
        }
        else if(activeKey==='3'){
            navigate('/your-files');
        }
        else if(activeKey==='4'){
            navigate('/deleted-files');
        }
        else if(activeKey==='5'){
            navigate('/simulation-history');
        }
        else if(activeKey==='6'){
            navigate('/track-builder');
        }
    },[])
    const navItems=[
        {
            navName:"Overview", icons:[overview_icon, overview_active_icon], path:"/home", key:"1"
        },
        {
            navName:"Drafts", icons:[draft_icon, draft_active_icon], path:"/drafts", key:"2"
        },
        {
            navName:"Your Files", icons:[your_file_icon, your_file_active_icon], path:"/your-files", key:"3"
        },
        {
            navName:"Deleted Files", icons:[deleted_file_icon, deleted_file_active_icon], path:"/deleted-files", key:"4"
        },
        {
            navName:"Simulation History", icons:[simulation_icon, simulation_history_active_icon], path:"/simulation-history", key:"5"
        },
        {
            navName:"Track Builder", icons:[track_builder_icon, track_builder_active_icon], path:"/track-builder", key:"6"
        },
    ]
    const navHandler=(data)=>{
        // localStorage.setItem("activeKey", data?.key);
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

