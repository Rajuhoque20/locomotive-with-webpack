


import React, { useEffect, useLayoutEffect } from 'react'
import './SimulatorHeader.css';
import { BorderOutlined, CloseOutlined, MinusOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useSimulatorStore } from '../simulator-store';
import { Icons } from '#framework';
export default function SimulatorHeader() {
    const {home_icon,untitled_exercise1} = Icons.ISIcons;
    const { tabs, removeTab, activeTab, setActiveId, setActiveTab } = useSimulatorStore(state => state);

    const navigate = useNavigate()
    const handleTabClick = (id, path) => {
        setActiveTab(path)
        setActiveId(id)

    }
    const handleRemoveTab = (id) => {
        removeTab(id)
    }
    const { id } = useParams();
    useEffect(() => {
        navigate(activeTab)
    }, [activeTab])
    return (
        <div className='header-wrapper'>
            <section className={'header-section1'}>
                <div
                    className={activeTab === '/simulatorsimulator-home' ? 'simulator-home active-tab' : 'simulator-home'} onClick={() => {
                        handleTabClick('/simulatorsimulator-home', '/simulatorsimulator-home')
                    }}>
                    <img src={home_icon} alt='home_icon' />
                    <span> Home</span>
                </div>
                {tabs?.map((item, index) => {

                    if (item?.id !== '/simulatorsimulator-home') {
                        return (
                            <div onClick={() => {
                                handleTabClick(item?.id, item?.path)
                            }} key={index} className={`untitled-exercise ${item?.path === activeTab ? 'active-tab' : activeTab === '/simulatorsimulator-home' && index === 0 ? '' : 'new-simulation border-zero'}`}>
                                <img src={untitled_exercise1} alt={item.title} />
                                <span>{item?.title}</span>
                                <CloseOutlined onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveTab(item?.id)
                                }} />
                            </div>
                        )
                    }

                })}
            </section>
            <section className='header-section2'>
                <MinusOutlined />
                <BorderOutlined />
                <CloseOutlined />

            </section>
        </div>
    )
}
