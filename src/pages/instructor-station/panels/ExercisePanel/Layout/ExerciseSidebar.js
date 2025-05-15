import React, { useEffect, useState } from 'react'
import { Icons } from '#framework';
import { NavLink, useNavigate } from 'react-router-dom';
import './ExerciseSidebar.css';

export default function ExerciseSidebar() {
    const { overview_icon, overview_active_icon, settings_icon, draft_icon, draft_active_icon, your_file_icon, your_file_active_icon, deleted_file_icon, deleted_file_active_icon, simulation_icon, simulation_history_active_icon } = Icons.ISIcons;
    const [activeKey, setActiveKey] = useState(localStorage.getItem("activeKey") || '1');
    const navigate = useNavigate();
    useEffect(() => {
        if (activeKey === '1') {
            navigate('/home');
        }
        else if (activeKey === '2') {
            navigate('/drafts');
        }
        else if (activeKey === '3') {
            navigate('/exercise-files');
        }
        else if (activeKey === '4') {
            navigate('/deleted-files');
        }
        else if (activeKey === '5') {
            navigate('/simulation-history');
        }

    }, [])
    const navItems = [
        {
            navName: "Overview", icons: [overview_icon, overview_active_icon], path: "/home", key: "1"
        },
        {
            navName: "Drafts", icons: [draft_icon, draft_active_icon], path: "/drafts", key: "2"
        },
        {
            navName: "Exercises", icons: [your_file_icon, your_file_active_icon], path: "/exercise-files", key: "3"
        },
        {
            navName: "Deleted Files", icons: [deleted_file_icon, deleted_file_active_icon], path: "/deleted-files", key: "4"
        },
        // {
        //     navName: "Simulation History", icons: [simulation_icon, simulation_history_active_icon], path: "/simulation-history", key: "5"
        // },
    ]
    const navHandler = (data) => {
        // localStorage.setItem("activeKey", data?.key);
        console.log('data in navclick', data?.path)
        setActiveKey(data?.key);
        navigate(data?.path);
    }
    return (
        <div className='nav-container'>
            <section className='nav-items-wrapper'>
                {navItems?.map((item, index) => {
                    return (
                        <div key={index} className={activeKey === item?.key ? 'nav-item-active' : 'nav-item'} onClick={() => {
                            navHandler(item);
                        }}>
                            <NavLink to={item.path} className={`nav-name-image ${activeKey === item?.key ? 'text-color-active' : 'text-color'}`}>
                                <div className={activeKey === item?.key ? 'nav-image-div-active' : 'nav-image-div'}>
                                    <img src={activeKey === item?.key ? item?.icons[1] : item?.icons[0]} alt={item.key} className='nav-image-div-img' />
                                </div>
                                <span className='nav-name'>{item?.navName}</span>
                            </NavLink>
                        </div>
                    )
                })}
            </section>
            <section className='settings-div'>
                <img src={settings_icon} alt="settings_icon" />
                <div>Settings</div>
            </section>
        </div>
    )
}

