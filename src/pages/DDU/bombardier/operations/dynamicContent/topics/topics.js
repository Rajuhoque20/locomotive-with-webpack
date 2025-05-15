import React from 'react'
import classes from './topics.module.css';
export const TopicButton=({title, activeClass, onClick})=>{
    return(<span className={` fc-1 ${activeClass}`} onClick={onClick}>{title}</span>)
}
export default function Topics({topic, setTopic,}) {
    const topics=[
        "HV CIRCUIT",
        "BRAKE",
        "TRACTION CONVERTER 1 & 2",
        "TEMPERATURE",
        "AUXILIARY CONVERTER 1, 2 & 3",
        "PRESSURE",
        "TRACTION MOTOR",
        "ROUTE MAP",
        "AUXILIARY SYSTEMS",
        "SPEED RESTRICTION",
        "ENERGY",
        "INCHING MODE",
    ];
  return (
    <div className={`${classes.container}`}>
        {topics?.map((item,index)=>{
            return(
                <TopicButton title={item} key={index} setTopic={setTopic} topic={topic} activeClass={(topic===index+1)?classes.active:""} onClick={()=>setTopic(index+1)}/>
            )
        })}
    </div>
  )
};
