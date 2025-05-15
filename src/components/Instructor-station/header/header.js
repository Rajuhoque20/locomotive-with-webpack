import React, { useEffect } from 'react'
import './header.css';
import home_icon from '../../../assets/Instructor-station/Icons/home_icon.svg';
import untitled_exercise1 from '../../../assets/Instructor-station/Icons/untitled_exercise1.svg';
import { BorderOutlined, CloseOutlined, MinusOutlined } from '@ant-design/icons';
import { useMainStore } from '../../store';
import {useNavigate} from 'react-router-dom';
export default function Header() {

    const {tabs,removeTab,activeTab,setActiveTab,setActiveId}=useMainStore();
    const navigate=useNavigate()
    const handleTabClick=(id,path)=>{
        setActiveTab(path)
        setActiveId(id)
      
    }
    const handleRemoveTab=(id)=>{
            removeTab(id)  
    }
useEffect(()=>{
    console.log(1111)
    if(activeTab){
        console.log("upadating naviagte",activeTab)
        navigate(activeTab)
    }
 
},[activeTab])
  return (
    <div className='header-wrapper'>
        <section className={'header-section1'}>
            <div className={activeTab==='/home'?'home active-tab':'home'} onClick={()=>{
                handleTabClick('/home','/home')
            }}>
                    <img src={home_icon} alt='home_icon'/>
                    <span>Home</span>
            </div>
            {tabs?.map((item, index)=>{
                if(item?.id!=='/home'){
                return(
                    <div onClick={()=>{
                        console.log(item.id,item.path)
                        handleTabClick(item?.id,item?.path)
                    }} key={index} className={`untitled-exercise ${item?.path===activeTab?'active-tab':activeTab==='/home'&&index===0?'':'new-simulation border-zero'}`}>
                    <img src={untitled_exercise1} alt={item.title}/>
                    <span>{item?.title}</span>
                    <CloseOutlined onClick={()=>{
                     handleRemoveTab(item?.id) 
                    }}/>
                </div>
                )
                }
                
            })}
        </section>
        <section className='header-section2'>
            <MinusOutlined/>
            <BorderOutlined/>
            <CloseOutlined/>

        </section>
    </div>
  )
}
