import React, { useEffect, useRef, useState } from 'react'
import { rotateFn } from '../../cab-replica/CabReplicate/CabUtility';
import { updateVIDData } from '../VIDUtility';

export default function RotarySwitch({width="2rem", height="2rem", data, valueKey}) {
  const dialRef=useRef(null);
    const[initial, setInitial]=useState({x:0, y:0});
    const [isDragging, setIsDragging]=useState(false);
    const prevDataRef=useRef(data);
    const  hasMoved = useRef(false);
    const [pos, setPos]=useState(data);

    useEffect(()=>{
      if(data===0)
      {
        rotateFn(dialRef, 0,prevDataRef);
      }
      else if(data===1)
     {
      rotateFn(dialRef, 25,prevDataRef);
      }
      else if(data===2)
      {
        rotateFn(dialRef, 60,prevDataRef);
      }

    },[data])
  
    const mouseDown=(event)=>{
      setInitial({x:event.clientX, y:event.clientY});
      setIsDragging(true);
    }
  
    const mouseUp=()=>{
      setIsDragging(false);
      hasMoved.current = false;
    }
  
    const mouseMove=(event)=>{
      if(!isDragging|| hasMoved.current)
      {
        return;
      }
      hasMoved.current = true;
      const currentX=event.clientX;
      const currentY=event.clientY;
      if(currentX>initial.x)
      {
        if(pos===2)
        {
          rotateFn(dialRef, 25,prevDataRef);
          setPos(1);
           updateVIDData(valueKey, 1);
        }
        else if(pos===1)
        {
          rotateFn(dialRef, 0,prevDataRef);
          setPos(0);
           updateVIDData(valueKey, 0);
        }
      }
      else{
        if(pos===0)
          {
            rotateFn(dialRef, 25,prevDataRef);
            setPos(1);
             updateVIDData(valueKey, 1);
          }
          else if(pos===1)
          {
            rotateFn(dialRef, 60,prevDataRef);
            setPos(2);
             updateVIDData(valueKey, 2);
          }
        
      }
    };
  
    useEffect(()=>{
      const svg=dialRef.current;
      svg.addEventListener("mousedown",mouseDown);
      svg.addEventListener("mouseup",mouseUp);
      svg.addEventListener("mousemove",mouseMove);
      svg.addEventListener("mouseleave",mouseUp);
      return()=>{
        svg.removeEventListener("mousedown",mouseDown);
        svg.removeEventListener("mouseup",mouseUp);
        svg.removeEventListener("mousemove",mouseMove);
        svg.removeEventListener("mouseleave",mouseUp);
      }
    },[initial, isDragging])
  
    const dialStyle={
      cursor:"pointer",
      transformOrigin:"9px 11px"
    }
  return (
    <div style={{width:width, height:height}}>
        <svg width="100%" height="100%" preserveAspectRatio='none' viewBox="0 0 20 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_iiii_1185_2715)">
        <rect x="4.75098" y="18.2661" width="10.3181" height="11.9946" rx="1" fill="url(#paint0_linear_1185_2715)"/>
        </g>
        <g filter="url(#filter1_iiii_1185_2715)">
        <rect x="0.576172" y="0.96286" width="18.6674" height="21.0967" fill="url(#paint1_linear_1185_2715)"/>
        </g>
        <g filter="url(#filter2_ii_1185_2715)">
        <circle cx="9.91007" cy="11.2692" r="5.22257" fill="#373737"/>
        </g>

        <g style={dialStyle} ref={dialRef}>
        <g filter="url(#filter3_dii_1185_2715)">
        <path d="M6.49881 7.44144C6.27433 6.91 6.48086 6.29458 6.98047 6.00613C7.48008 5.71767 8.11631 5.84653 8.46432 6.30665L11.1918 9.91289C11.3415 10.1108 11.4661 10.3266 11.5627 10.5553L13.322 14.7204C13.5465 15.2519 13.34 15.8673 12.8404 16.1558C12.3408 16.4442 11.7045 16.3154 11.3565 15.8552L8.62902 12.249C8.47931 12.051 8.35473 11.8353 8.25816 11.6066L6.49881 7.44144Z" fill="#282828"/>
        </g>
        <g filter="url(#filter4_d_1185_2715)">
        <circle cx="9.9464" cy="11.2356" r="0.681755" fill="url(#paint2_linear_1185_2715)"/>
        </g>
        </g>

        <text
        x={4.5}
        y={5.5}
        textAnchor='middle'
        alignmentBaseline='middle'
        fill='#000'
        fontSize={2}
        fontWeight={500}
        >
          Auto
        </text>

        <text
        x={10}
        y={4}
        textAnchor='middle'
        alignmentBaseline='middle'
        fill='#000'
        fontSize={2}
        fontWeight={500}
        >
          I
        </text>

        <text
        x={15}
        y={5.5}
        textAnchor='middle'
        alignmentBaseline='middle'
        fill='#000'
        fontSize={2}
        fontWeight={500}
        >
          II
        </text>
        
        
        <defs>
        <filter id="filter0_iiii_1185_2715" x="3.75098" y="17.7661" width="12.3184" height="13.4946" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.733333 0 0 0 0 0.733333 0 0 0 0 0.733333 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2715"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.733333 0 0 0 0 0.733333 0 0 0 0 0.733333 0 0 0 0.16 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2715" result="effect2_innerShadow_1185_2715"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.53 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_1185_2715" result="effect3_innerShadow_1185_2715"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"/>
        <feBlend mode="normal" in2="effect3_innerShadow_1185_2715" result="effect4_innerShadow_1185_2715"/>
        </filter>
        <filter id="filter1_iiii_1185_2715" x="-0.423828" y="0.46286" width="20.667" height="22.5967" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.733333 0 0 0 0 0.733333 0 0 0 0 0.733333 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2715"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.733333 0 0 0 0 0.733333 0 0 0 0 0.733333 0 0 0 0.16 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2715" result="effect2_innerShadow_1185_2715"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.53 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_1185_2715" result="effect3_innerShadow_1185_2715"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"/>
        <feBlend mode="normal" in2="effect3_innerShadow_1185_2715" result="effect4_innerShadow_1185_2715"/>
        </filter>
        <filter id="filter2_ii_1185_2715" x="4.6875" y="5.04663" width="10.4453" height="12.4451" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.425 0 0 0 0 0.425 0 0 0 0 0.425 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2715"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0916667 0 0 0 0 0.0916667 0 0 0 0 0.0916667 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2715" result="effect2_innerShadow_1185_2715"/>
        </filter>
        <filter id="filter3_dii_1185_2715" x="2.4082" y="4.85284" width="15.0039" height="19.4562" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2715"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2715" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.425 0 0 0 0 0.425 0 0 0 0 0.425 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1185_2715"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0916667 0 0 0 0 0.0916667 0 0 0 0 0.0916667 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_1185_2715" result="effect3_innerShadow_1185_2715"/>
        </filter>
        <filter id="filter4_d_1185_2715" x="8.26465" y="10.5539" width="3.36328" height="3.36353" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2715"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2715" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_1185_2715" x1="9.91001" y1="30.2607" x2="14.987" y2="18.6601" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3443B8"/>
        <stop offset="1" stop-color="#6B78D8"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1185_2715" x1="9.9099" y1="22.0596" x2="18.6683" y2="1.47428" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3443B8"/>
        <stop offset="1" stop-color="#6B78D8"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1185_2715" x1="9.9464" y1="10.5539" x2="9.9464" y2="11.9174" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="#999999"/>
        </linearGradient>
        </defs>
        </svg>
    </div>
  )
}
