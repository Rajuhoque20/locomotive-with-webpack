import React from "react";
import './ImageLabelCard.css'
export default function ImageLabelCard({id,label,icon,cardStyle,handleClick = () => {} ,selected}){
 return (
  <div  onClick={handleClick} className="tracktypeouter" style={cardStyle}>
   <div className="tracktypeinner" style={selected?{'border': '0.4vh solid rgb(7, 90, 255)'}:{}} >

     <div className="imgdiv">
     <img  src={icon}/>
     </div>
     <div className="imglableTitle">
      {label}
      
     </div>
   </div>
  </div>
 )
}
