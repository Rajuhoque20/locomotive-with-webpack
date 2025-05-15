import React, { useEffect, useRef } from 'react'
import { rotateFn } from '../../cab-replica/CabReplicate/CabUtility';
import { updateVIDData } from '../VIDUtility';

export default function EmergencyVigilance( {width=40, height=50, data=0, valueKey=''}) {
      const handleRef=useRef(null);
            const prevDataRef=useRef(data);
            const pos=useRef(data);
    
            useEffect(()=>{
                if(data===0)
                {
                    rotateFn(handleRef,0,prevDataRef);
                }
                else if (data===1)
                {
                    rotateFn(handleRef,90,prevDataRef);
                }
            },[data])
        
            const clickHandler=()=>{
                if(pos.current===1)
                {
                    pos.current=0;
                    rotateFn(handleRef,0,prevDataRef);
                    updateVIDData(valueKey, 0);
                }
                else if(pos.current===0)
                {
                    pos.current=1;
                    rotateFn(handleRef,90,prevDataRef);
                    updateVIDData(valueKey, 1);
                }
            }
  return (
    <div style={{width:width, height:height}}>
        <svg width="100%" height="100%" style={{cursor:"pointer"}} onClick={clickHandler} viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.93799" cy="14.5304" r="7.3468" fill="#A29D9A"/>
<g filter="url(#filter0_ii_1324_3413)" ref={handleRef} style={{transformOrigin:"8px 14.4px"}}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.57306 1.73514C6.59869 1.20215 7.03833 0.783203 7.5719 0.783203H8.32947C8.8642 0.783203 9.30432 1.20392 9.32843 1.73816L9.65198 8.91116C12.114 9.6478 13.9083 11.9303 13.9083 14.6319C13.9083 17.3369 12.1094 19.6217 9.64276 20.3554L9.32843 27.3233C9.30432 27.8575 8.8642 28.2783 8.32947 28.2783H7.5719C7.03833 28.2783 6.59869 27.8593 6.57306 27.3263L6.23761 20.3568C3.76855 19.6246 1.96741 17.3386 1.96741 14.6319C1.96741 11.9288 3.76373 9.64533 6.22772 8.90997L6.57306 1.73514Z" fill="#B7415E"/>
</g>
<circle cx="7.93787" cy="14.5317" r="2.479" fill="#948A88"/>
<line x1="5.45886" y1="14.4254" x2="10.4169" y2="14.4254" stroke="#867F77" stroke-width="0.2"/>
<defs>
<filter id="filter0_ii_1324_3413" x="0.967407" y="-0.216797" width="13.9409" height="29.4951" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_3413"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-1" dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.825 0 0 0 0 0.825 0 0 0 0 0.825 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_1324_3413" result="effect2_innerShadow_1324_3413"/>
</filter>
</defs>
</svg>

    </div>
  )
}
