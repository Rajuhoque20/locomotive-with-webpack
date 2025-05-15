import React, { useEffect } from 'react'
import './ExerciseHeader.css';
import { BorderOutlined, CloseOutlined, MinusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useExerciseStore } from '../store';
import { Icons } from '#framework';
const {home_icon,untitled_exercise1} = Icons.ISIcons;
export default function ExerciseHeader() {


    const { tabs, removeTab, activeTab, setActiveTab, setActiveId } = useExerciseStore(state => state);
    const navigate = useNavigate()
    const handleTabClick = (id, path) => {
        setActiveTab(path)
        setActiveId(id)

    }
    const handleRemoveTab = (id) => {
        removeTab(id)
    }
    useEffect(() => {
        console.log(1111)
        if (activeTab) {
            console.log("upadating naviagte", activeTab)
            navigate(activeTab)
        }

    }, [activeTab])
    return (
        <div className='header-wrapper'>
            <section className={'header-section1'}>
                <div
                    className={activeTab === '/home' ? 'home active-tab' : 'home'} onClick={() => {
                        handleTabClick('/home', '/home')
                    }}>
                    <img src={home_icon} alt='home_icon' />
                    <span> Home</span>
                </div>
                {tabs?.map((item, index) => {
                    if (item?.id !== '/home') {
                        return (
                            <div onClick={() => {
                                console.log(item.id, item.path)
                                handleTabClick(item?.id, item?.path)
                            }} key={index} className={`untitled-exercise ${item?.path === activeTab ? 'active-tab' : activeTab === '/home' && index === 0 ? '' : 'new-simulation border-zero'}`}>
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
