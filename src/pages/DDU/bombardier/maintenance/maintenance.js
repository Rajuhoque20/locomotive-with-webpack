import React, { useState } from 'react'
import classes from './maintenance.module.css'
import { ContentHighLight } from '../operations/operation';
import Diagnostics from './tabContents/diagnostics/diagnostics';
import SoftwareVersion from './tabContents/softwareVersion/softwareVersion';
import Simulation from './tabContents/simulation/simulation';
import SetValues from './tabContents/setValues/setValues';
import { Icons } from '#framework';
export const Action=({title, isActive=true, onClick})=>{
    return(
        <button className={`fs-4 fc-1 ${isActive?'bg-2':'bg-5'} border-none cursor-pointer`} onClick={onClick}>{title}</button>
    )
}
export const NumberPlate=({value, setValue})=>{
  const {clear_icon}=Icons.DDUIcons;
  const digits=["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"];
  return(
    <div className={classes.digitsWrapper}>
      {digits?.map((item, index)=>(<span key={index} onClick={()=>setValue(prev=>prev+item)} className='fs-4'>{item}</span>))}
      <span>
        <img src={clear_icon} onClick={()=>{
          setValue(value.slice(0, -1))
        }}/>
      </span>
    </div>
  )
}
export const PasswordPage=({ password, setIsEntered, setPassword, setTabContent})=>{
  return(
    <div className={classes.content}>
    <div>
          <span>ENTER PASSWORD</span>
    </div>
    <div>
    <NumberPlate value={password} setValue={setPassword}/>
    </div>
   
    <div>
         <span onClick={()=>setPassword('')}>CANCEL</span>
      </div>
    <div>
          <span>{password.replace(/./g, '*')}</span>
    </div>
    <div>
          <span onClick={()=>{
            if(password)
            {
              setIsEntered(true);
              setTabContent("DIAGNOSTICS");
            }
          }}>ENTER</span>
    </div>
  </div>
  )
}
export default function Maintenance() {
    const [tabContent, setTabContent]=useState("");
    const [password, setPassword]=useState("");
    const [isEntered, setIsEntered]=useState(false);
    const actionContent=[
        "DIAGNOSTICS",
        "SOFTWARE VERSION",
        "SIMULATION",
        "SET VALUES"
    ];
      return (
    <div className={classes.container}>
        <section>
            <ContentHighLight screen="maintenance"/>
        </section>
        <section>
        {!tabContent&&
              <PasswordPage
                password={password} 
                setIsEntered={setIsEntered} 
                setPassword={setPassword}
                setTabContent={setTabContent}
                />
          }
          {tabContent==="DIAGNOSTICS"&&<Diagnostics/>}
          {tabContent==="SOFTWARE VERSION"&&<SoftwareVersion/>}
          {tabContent==="SIMULATION"&&<Simulation/>}
          {tabContent==="SET VALUES"&&<SetValues/>}
        </section>
        <section className={classes.actionDiv}>
          {actionContent?.map((item, index)=>{
            return(<Action title={item} onClick={()=>{
              if(isEntered)
              {
                setTabContent(item)
              }
            }} isActive={tabContent===item}/>)
          })}
        </section>
    </div>
  )
}
