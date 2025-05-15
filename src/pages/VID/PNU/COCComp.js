import React, { useEffect, useRef, useState } from 'react'
import { rotateFn } from '../../cab-replica/CabReplicate/CabUtility';
import { updateVIDData } from '../VIDUtility';

export default function COCComp({width="2rem", height="2rem", data=0, valueKey=''}) {
    const dialRef=useRef(null);
      const[initial, setInitial]=useState({x:0, y:0});
      const [isDragging, setIsDragging]=useState(false);
      const prevDataRef=useRef(data);
      const  hasMoved = useRef(false);
      const [pos, setPos]=useState(data);

      useEffect(()=>{
        if(data===1)
        {
          rotateFn(dialRef, 0,prevDataRef);
        }
        else if (data===0)
        {
          rotateFn(dialRef, -90,prevDataRef);
        }
      },[data])



      const clickHandler=()=>{
      if(pos===1)
      {
        rotateFn(dialRef, -90,prevDataRef);
        setPos(0);
        updateVIDData(valueKey, 0);
      }
      else if (pos===0)
      {
        rotateFn(dialRef, 0,prevDataRef);
        setPos(1);
        updateVIDData(valueKey, 1);
      }
    }
    
      // const mouseDown=(event)=>{
      //   setInitial({x:event.clientX, y:event.clientY});
      //   setIsDragging(true);
      // }
    
      // const mouseUp=()=>{
      //   setIsDragging(false);
      //   hasMoved.current = false;
      // }
    
      // const mouseMove=(event)=>{
      //   if(!isDragging|| hasMoved.current)
      //   {
      //     return;
      //   }
      //   hasMoved.current = true;
      //   const currentX=event.clientX;
      //   const currentY=event.clientY;
      //   if(currentX<initial.x&&pos===1)
      //   {
      //     rotateFn(dialRef, 0,prevDataRef);
      //     setPos(0);
      //   }
      //   else if(currentY>initial.y&&pos===0){
      //     rotateFn(dialRef, -90,prevDataRef);
      //     setPos(1);
      //   }
      // };
    
      // useEffect(()=>{
      //   const svg=dialRef.current;
      //   svg.addEventListener("mousedown",mouseDown);
      //   svg.addEventListener("mouseup",mouseUp);
      //   svg.addEventListener("mousemove",mouseMove);
      //   svg.addEventListener("mouseleave",mouseUp);
      //   return()=>{
      //     svg.removeEventListener("mousedown",mouseDown);
      //     svg.removeEventListener("mouseup",mouseUp);
      //     svg.removeEventListener("mousemove",mouseMove);
      //     svg.removeEventListener("mouseleave",mouseUp);
      //   }
      // },[initial, isDragging])
    
      const dialStyle={
        cursor:"pointer",
        transformOrigin:"16px 12px"
      };

  return (
    <div style={{width:width, height:height, cursor:"pointer"}} onClick={clickHandler}>
        <svg width={"100%"} height={"100%"} preserveAspectRatio='none' viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_diii_1185_2293)">
        <path d="M2.81641 3.78495C2.81641 2.68038 3.71184 1.78495 4.81641 1.78495L17.6835 1.78495C23.2064 1.78495 27.6835 6.2621 27.6835 11.785V22.4955C27.6835 23.6 26.7881 24.4955 25.6835 24.4955H12.8164C7.29356 24.4955 2.81641 20.0183 2.81641 14.4955L2.81641 3.78495Z" fill="#D8C6B4"/>
        </g>
        <g filter="url(#filter1_ii_1185_2293)">
        <circle cx="7.40158" cy="5.95518" r="1.38107" fill="#5A6970"/>
        </g>
        <path d="M12.5078 6.09638C14.0402 5.55993 15.6864 5.43403 17.2825 5.73123C18.8787 6.02843 20.3692 6.73835 21.6059 7.79039C22.8425 8.84243 23.7821 10.1999 24.3313 11.7278C24.8805 13.2557 25.0201 14.9008 24.7361 16.4993" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M13.4112 5.83898C14.777 5.51099 16.1994 5.49695 17.5715 5.79792C18.9435 6.09889 20.2294 6.70703 21.3325 7.5766C22.4356 8.44618 23.3272 9.55455 23.9403 10.8184C24.5533 12.0822 24.8718 13.4686 24.8718 14.8732" stroke="#171717" stroke-width="0.3" stroke-linecap="round"/>
        <g filter="url(#filter2_d_1185_2293)">
        <circle cx="12.4589" cy="6.05556" r="0.464745" fill="url(#paint0_linear_1185_2293)"/>
        </g>
        <g filter="url(#filter3_ii_1185_2293)">
        <circle cx="16.1417" cy="12.8025" r="1.60265" fill="#5A6970"/>
        </g>
        <g filter="url(#filter4_ii_1185_2293)" ref={dialRef} style={dialStyle}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3457 15.4245C18.8327 15.2119 19.3201 14.9991 19.8324 14.8897L27.2824 13.2978C27.5161 13.2479 27.6831 13.0415 27.6831 12.8025C27.6831 12.5635 27.5161 12.3571 27.2824 12.3072L19.8323 10.7153C19.3201 10.6059 18.8327 10.3931 18.3457 10.1805C17.793 9.93924 17.2409 9.6982 16.6534 9.60849C16.5201 9.58812 16.3839 9.5776 16.2454 9.5776C16.0678 9.5776 15.8939 9.59492 15.725 9.62811C15.3534 9.70111 14.9972 9.83557 14.6408 9.97008C14.3287 10.0879 14.0166 10.2057 13.694 10.2823L5.20626 12.2981C4.97258 12.3536 4.80762 12.5623 4.80762 12.8025C4.80762 13.0427 4.97258 13.2514 5.20625 13.3069L13.6939 15.3227C14.0165 15.3993 14.3287 15.5171 14.6408 15.6349C14.9972 15.7694 15.3534 15.9039 15.725 15.9769C15.8939 16.0101 16.0678 16.0274 16.2454 16.0274C16.3839 16.0274 16.5201 16.0169 16.6534 15.9965C17.2409 15.9068 17.7931 15.6658 18.3457 15.4245ZM16.142 14.3603C17.0024 14.3603 17.6998 13.6629 17.6998 12.8025C17.6998 11.9421 17.0024 11.2447 16.142 11.2447C15.2816 11.2447 14.5842 11.9421 14.5842 12.8025C14.5842 13.6629 15.2816 14.3603 16.142 14.3603Z" fill="#CE0809"/>
        </g>
        
        <defs>
        <filter id="filter0_diii_1185_2293" x="0.816406" y="0.78495" width="27.8672" height="24.7105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2293"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2293" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-1" dy="1"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1185_2293"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="1" dy="-1"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.329167 0 0 0 0 0.329167 0 0 0 0 0.329167 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_1185_2293" result="effect3_innerShadow_1185_2293"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="0.3" dy="-0.3"/>
        <feGaussianBlur stdDeviation="0.25"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect3_innerShadow_1185_2293" result="effect4_innerShadow_1185_2293"/>
        </filter>
        <filter id="filter1_ii_1185_2293" x="6.02051" y="4.37411" width="2.76172" height="3.46214" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2293"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2293" result="effect2_innerShadow_1185_2293"/>
        </filter>
        <filter id="filter2_d_1185_2293" x="7.99414" y="5.59081" width="8.92969" height="8.92949" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2293"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2293" result="shape"/>
        </filter>
        <filter id="filter3_ii_1185_2293" x="14.5391" y="11.0413" width="3.20508" height="3.7603" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.396427"/>
        <feGaussianBlur stdDeviation="0.396427"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2293"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.158571"/>
        <feGaussianBlur stdDeviation="0.0792853"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2293" result="effect2_innerShadow_1185_2293"/>
        </filter>
        <filter id="filter4_ii_1185_2293" x="4.80762" y="8.81623" width="22.876" height="7.97254" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.761366"/>
        <feGaussianBlur stdDeviation="0.380683"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.258333 0 0 0 0 0.258333 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2293"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.761366"/>
        <feGaussianBlur stdDeviation="0.380683"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.44 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2293" result="effect2_innerShadow_1185_2293"/>
        </filter>
        <linearGradient id="paint0_linear_1185_2293" x1="12.9236" y1="6.05556" x2="11.9941" y2="6.05556" gradientUnits="userSpaceOnUse">
        <stop stop-color="#737373"/>
        <stop offset="0.49" stop-color="#D9D9D9"/>
        <stop offset="1" stop-color="#737373"/>
        </linearGradient>
        </defs>
        </svg>
    </div>
  )
}
