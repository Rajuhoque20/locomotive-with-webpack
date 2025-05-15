import React, { useState , useEffect} from "react";
import './Tab.css';
export default function NavTab({data,onClick,defaultView,tabContainerStyle}) {
  useEffect(()=>{
    SetNav(defaultView)
},[defaultView])
const [nav,SetNav]=useState(defaultView);
  return (
    <>
            <div className="Tab-Container"  style={tabContainerStyle}>
                   { data.map((item,index)=>(
                        <div
                        key={index}
                         className={nav?.id===item?.id?"activeTab":"Tab"}
                         onClick={()=>{
                            SetNav(item)
                            onClick(item)
                            }}>
                                {item?.icon && <img className="Tab-Icon" src={item.icon} />}
                                <div className={nav?.id===item?.id?"Active-Tab-label":"Tab-label"} >{item?.label}</div>
                               
                                
                        </div>
                   ))}
            </div>
        </>
  )
}


