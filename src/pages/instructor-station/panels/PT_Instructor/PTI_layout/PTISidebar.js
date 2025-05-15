import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Icons } from '#framework';
export default function PTISidebar() {
    const {overview_icon,overview_active_icon,settings_icon,your_file_icon,your_file_active_icon,simulation_icon,simulation_history_active_icon} = Icons.ISIcons;
    const [activeKey, setActiveKey]=useState(localStorage.getItem("activeKey")||"1");
    const navigate=useNavigate();

    useEffect(()=>{
        if(activeKey==='1') {
            navigate('/pti-home');
        } else if(activeKey==='2'){
            navigate('/pti-history');
        }
        else if(activeKey==='3'){
            navigate('/pti-results');
        }

       
    },[])
    const navItems=[
        {
            navName:"Part Trainers", icons:[overview_icon, overview_active_icon], path:"/pti-home", key:"1"
        },
        {
            navName:"Report History", icons:[simulation_icon, simulation_history_active_icon], path:"/pti-history", key:"2"
        }
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

