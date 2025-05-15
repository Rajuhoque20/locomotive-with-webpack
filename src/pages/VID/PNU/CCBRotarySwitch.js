import React, { useEffect, useRef, useState } from 'react'
import { rotateFn } from '../../cab-replica/CabReplicate/CabUtility';
import { updateVIDData } from '../VIDUtility';

export default function CCBRotarySwitch({width=50, height=50, data=1, valueKey=''}) {
        const dialRef=useRef(null);
        const[initial, setInitial]=useState({x:0, y:0});
        const [isDragging, setIsDragging]=useState(false);
        const prevDataRef=useRef(data);
        const  hasMoved = useRef(false);
        const pos=useRef(data);
    
        useEffect(()=>{
          if(data===0)
          {
            rotateFn(dialRef, 90,prevDataRef);
          }
          else if(data===1)
         {
          rotateFn(dialRef, 0,prevDataRef);
          }
          else if(data===2)
          {
            rotateFn(dialRef, 45,prevDataRef);
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
          const currentY=event.clientY;
        //   console.log("curreee", pos.current, currentY>initial.y)
          if(currentY>initial.y)
          {
          
            if(pos.current===2)
            {
              rotateFn(dialRef, 90,prevDataRef);
              pos.current=0;
            }
            else if(pos.current===1)
            {
              rotateFn(dialRef, 45,prevDataRef);
              pos.current=2;
            }
            updateVIDData(valueKey, pos.current);
          }
          else{
            if(pos.current===0)
              {
                rotateFn(dialRef, 45,prevDataRef);
                pos.current=2;
              }
              else if(pos.current===2)
              {
                rotateFn(dialRef, 0,prevDataRef);
                pos.current=1;
              }
              updateVIDData(valueKey, pos.current);
            
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
          transformOrigin:"16.8px 14.8px"
        }
  return (
    <div style={{width:width, height:height}}>
            <svg width="100%" height="100%" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_ddd_1324_3348)">
            <rect x="2.3147" y="2.34375" width="23.9939" height="25.015" rx="1.6553" fill="url(#paint0_linear_1324_3348)"/>
            </g>
            <path d="M3.96997 2.62012H24.6536C25.4153 2.62026 26.0325 3.2373 26.0325 3.99902V25.7031C26.0325 26.4649 25.4153 27.0829 24.6536 27.083H3.96997C3.20815 27.083 2.59106 26.4649 2.59106 25.7031V3.99902C2.59108 3.23721 3.20816 2.62013 3.96997 2.62012Z" stroke="url(#pattern0_1324_3348)" stroke-width="0.551768"/>
            <path d="M9.00153 23.4624C9.00153 23.5261 8.98617 23.5859 8.95544 23.6416C8.92585 23.6974 8.87863 23.7424 8.81377 23.7765C8.75004 23.8106 8.66925 23.8277 8.57138 23.8277H8.37167V24.2852H8.1327V23.0937H8.57138C8.66356 23.0937 8.74208 23.1097 8.80694 23.1415C8.8718 23.1734 8.92016 23.2172 8.95203 23.273C8.98503 23.3287 9.00153 23.3919 9.00153 23.4624ZM8.56114 23.6348C8.62714 23.6348 8.67607 23.62 8.70794 23.5904C8.7398 23.5597 8.75573 23.517 8.75573 23.4624C8.75573 23.3463 8.69087 23.2883 8.56114 23.2883H8.37167V23.6348H8.56114ZM9.11486 23.261V23.0408H9.52623V24.2852H9.28044V23.261H9.11486Z" fill="white"/>
            <path d="M4.26024 14.814C4.26024 14.8777 4.24488 14.9374 4.21416 14.9932C4.18457 15.049 4.13734 15.0939 4.07248 15.1281C4.00876 15.1622 3.92796 15.1793 3.8301 15.1793H3.63039V15.6367H3.39142V14.4453H3.8301C3.92227 14.4453 4.00079 14.4612 4.06565 14.4931C4.13052 14.5249 4.17888 14.5688 4.21074 14.6245C4.24374 14.6803 4.26024 14.7434 4.26024 14.814ZM3.81986 14.9864C3.88586 14.9864 3.93479 14.9716 3.96665 14.942C3.99851 14.9113 4.01445 14.8686 4.01445 14.814C4.01445 14.6979 3.94958 14.6399 3.81986 14.6399H3.63039V14.9864H3.81986ZM4.4777 15.367C4.58694 15.276 4.674 15.2003 4.73886 15.14C4.80372 15.0786 4.85778 15.0148 4.90102 14.9488C4.94426 14.8828 4.96588 14.818 4.96588 14.7542C4.96588 14.6962 4.95223 14.6507 4.92492 14.6177C4.8976 14.5847 4.8555 14.5682 4.7986 14.5682C4.74171 14.5682 4.69789 14.5875 4.66717 14.6262C4.63645 14.6638 4.62051 14.7155 4.61938 14.7815H4.38723C4.39179 14.645 4.43218 14.5414 4.50843 14.4709C4.58581 14.4003 4.68367 14.3651 4.80202 14.3651C4.93174 14.3651 5.03131 14.3998 5.10073 14.4692C5.17014 14.5375 5.20485 14.6279 5.20485 14.7406C5.20485 14.8293 5.18095 14.9141 5.13316 14.9949C5.08537 15.0757 5.03075 15.1463 4.9693 15.2066C4.90785 15.2657 4.82762 15.3374 4.72862 15.4216H5.23216V15.6196H4.38894V15.4421L4.4777 15.367Z" fill="white"/>
            <path d="M6.00529 6.36478H5.53076L5.45224 6.5918H5.20132L5.62976 5.39866H5.90799L6.33643 6.5918H6.0838L6.00529 6.36478ZM5.94042 6.1736L5.76802 5.67518L5.59562 6.1736H5.94042ZM6.73213 5.40036V6.13776C6.73213 6.21855 6.75318 6.28057 6.79528 6.32381C6.83739 6.36591 6.89656 6.38697 6.9728 6.38697C7.05019 6.38697 7.10993 6.36591 7.15203 6.32381C7.19414 6.28057 7.21519 6.21855 7.21519 6.13776V5.40036H7.45586V6.13605C7.45586 6.23733 7.43367 6.32324 7.38929 6.39379C7.34605 6.46321 7.28745 6.51555 7.21348 6.55083C7.14065 6.58611 7.05929 6.60375 6.96939 6.60375C6.88063 6.60375 6.79984 6.58611 6.72701 6.55083C6.65532 6.51555 6.59842 6.46321 6.55632 6.39379C6.51421 6.32324 6.49316 6.23733 6.49316 6.13605V5.40036H6.73213ZM8.49754 5.40036V5.59325H8.18005V6.5918H7.94108V5.59325H7.6236V5.40036H8.49754ZM9.22494 6.60375C9.11343 6.60375 9.01101 6.57757 8.9177 6.52523C8.82439 6.47288 8.75042 6.40062 8.6958 6.30845C8.64118 6.21514 8.61387 6.10988 8.61387 5.99267C8.61387 5.8766 8.64118 5.77247 8.6958 5.6803C8.75042 5.58699 8.82439 5.51416 8.9177 5.46181C9.01101 5.40947 9.11343 5.38329 9.22494 5.38329C9.3376 5.38329 9.44002 5.40947 9.53219 5.46181C9.6255 5.51416 9.6989 5.58699 9.75238 5.6803C9.80701 5.77247 9.83432 5.8766 9.83432 5.99267C9.83432 6.10988 9.80701 6.21514 9.75238 6.30845C9.6989 6.40062 9.6255 6.47288 9.53219 6.52523C9.43888 6.57757 9.33646 6.60375 9.22494 6.60375ZM9.22494 6.39038C9.29664 6.39038 9.35979 6.37445 9.41441 6.34259C9.46903 6.30959 9.51171 6.26293 9.54243 6.20262C9.57316 6.14231 9.58852 6.07232 9.58852 5.99267C9.58852 5.91301 9.57316 5.8436 9.54243 5.78442C9.51171 5.72411 9.46903 5.67802 9.41441 5.64616C9.35979 5.6143 9.29664 5.59837 9.22494 5.59837C9.15325 5.59837 9.08953 5.6143 9.03377 5.64616C8.97915 5.67802 8.93647 5.72411 8.90575 5.78442C8.87502 5.8436 8.85966 5.91301 8.85966 5.99267C8.85966 6.07232 8.87502 6.14231 8.90575 6.20262C8.93647 6.26293 8.97915 6.30959 9.03377 6.34259C9.08953 6.37445 9.15325 6.39038 9.22494 6.39038Z" fill="white"/>
            <g filter="url(#filter1_i_1324_3348)">
            <circle cx="16.7738" cy="14.8508" r="8.75903" fill="#2D2D2B"/>
            </g>
            <g filter="url(#filter2_f_1324_3348)">
            <g filter="url(#filter3_iii_1324_3348)">
            <circle cx="16.7738" cy="14.8517" r="8.07823" fill="#2D2D2B"/>
            </g>
            </g>
            <g filter="url(#filter4_iii_1324_3348)" ref={dialRef} style={dialStyle}>
            <path d="M20.7102 7.54188C21.0256 7.22643 21.5371 7.22643 21.8525 7.54188L24.0824 9.77172C24.3978 10.0872 24.3978 10.5986 24.0824 10.9141L13.2818 21.7147C13.1202 21.8762 12.8978 21.9618 12.6696 21.9502L11.7338 21.9027C11.534 21.8926 11.3451 21.8086 11.2036 21.6672L10.5804 21.0439L9.95711 20.4206C9.81564 20.2792 9.7317 20.0902 9.72156 19.8904L9.67403 18.9546C9.66245 18.7265 9.74803 18.504 9.90958 18.3425L20.7102 7.54188Z" fill="#2D2D2B"/>
            </g>
            
            <defs>
            <filter id="filter0_ddd_1324_3348" x="0.466276" y="0.909154" width="27.2217" height="28.1055" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="0.827651" dy="1.10354"/>
            <feGaussianBlur stdDeviation="0.275884"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1324_3348"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-0.689709" dy="-0.275884"/>
            <feGaussianBlur stdDeviation="0.579356"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.208333 0 0 0 0 0.208333 0 0 0 0 0.208333 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_1324_3348" result="effect2_dropShadow_1324_3348"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-0.137942" dy="0.827651"/>
            <feGaussianBlur stdDeviation="0.275884"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_1324_3348" result="effect3_dropShadow_1324_3348"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1324_3348" result="shape"/>
            </filter>

            <filter id="filter1_i_1324_3348" x="8.01477" y="5.35581" width="17.5181" height="18.2536" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-1.34627"/>
            <feGaussianBlur stdDeviation="0.367996"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_3348"/>
            </filter>
            <filter id="filter2_f_1324_3348" x="8.05156" y="6.12945" width="17.4445" height="17.4442" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="0.321996" result="effect1_foregroundBlur_1324_3348"/>
            </filter>
            <filter id="filter3_iii_1324_3348" x="8.51156" y="6.58944" width="16.7085" height="16.3402" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="0.367996"/>
            <feGaussianBlur stdDeviation="0.441595"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_3348"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-0.183998" dy="-0.183998"/>
            <feGaussianBlur stdDeviation="0.275997"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.491667 0 0 0 0 0.491667 0 0 0 0 0.491667 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect1_innerShadow_1324_3348" result="effect2_innerShadow_1324_3348"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="0.183998" dy="-0.183998"/>
            <feGaussianBlur stdDeviation="0.275997"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.241667 0 0 0 0 0.241667 0 0 0 0 0.241667 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect2_innerShadow_1324_3348" result="effect3_innerShadow_1324_3348"/>
            </filter>
            <filter id="filter4_iii_1324_3348" x="9.40372" y="7.03543" width="15.4538" height="14.9157" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="0.538508"/>
            <feGaussianBlur stdDeviation="0.646209"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_3348"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-0.269254" dy="-0.269254"/>
            <feGaussianBlur stdDeviation="0.403881"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.491667 0 0 0 0 0.491667 0 0 0 0 0.491667 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect1_innerShadow_1324_3348" result="effect2_innerShadow_1324_3348"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="0.269254" dy="-0.269254"/>
            <feGaussianBlur stdDeviation="0.403881"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.241667 0 0 0 0 0.241667 0 0 0 0 0.241667 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect2_innerShadow_1324_3348" result="effect3_innerShadow_1324_3348"/>
            </filter>
            <linearGradient id="paint0_linear_1324_3348" x1="-2.83261" y1="22.1405" x2="26.4227" y2="15.7854" gradientUnits="userSpaceOnUse">
            <stop stop-color="#313131"/>
            <stop offset="1" stop-color="#1D2021"/>
            </linearGradient>

            </defs>
            </svg>
    </div>
  )
}
