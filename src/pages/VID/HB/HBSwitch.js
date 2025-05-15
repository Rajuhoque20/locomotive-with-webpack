import React, { useEffect, useRef, useState } from 'react'
import { moveFn } from '../../cab-replica/CabReplicate/CabUtility';
import { updateVIDData } from '../VIDUtility';

let isDragging=false, initialX=0, initialY=0;
export  const HBSwitch=({width="100%", height="100%", value=0, keyValue})=> {
  const valueKey=keyValue;
   const switchRef=useRef(null);
        const hasMoved = useRef(false);
        const [pos, setPos] = useState(value);

        useEffect(()=>{
            if(value===1)
            {
              switchRef.current.setAttribute("transform", "rotate(0,19, 50)")
            }
            else
            {
              switchRef.current.setAttribute("transform", "rotate(180,19, 50)")
            }
      },[value])
        
                const onMouseDown = (event) => {
                  isDragging=true;
                  initialX=event.clientX;
                  initialY=event.clientY;
                };
              
                const moveDial = (currentY) => {
                
                    if (pos === 1&&currentY>initialY) {
                    setPos(0);
                    // moveFn(switchRef, 45, prevDataRef);
                    switchRef.current.setAttribute("transform", "rotate(180,19, 50)")
                    updateVIDData(valueKey, 0);
                  } 
                  else if (pos === 0&&currentY<initialY) {
                    setPos(1);
                    switchRef.current.setAttribute("transform", "rotate(0,19, 50)")
                    updateVIDData(valueKey, 1);
                  }
                };
       
        const onMouseMove = (event) => {
          if (!isDragging || hasMoved.current) {
            return;
          }
          hasMoved.current = true;
          const currentY = event.clientY;
          moveDial( currentY);
        };
  
        const onMouseUp = () => {
          isDragging=false;
          hasMoved.current = false;
        };
  
        useEffect(() => {
          const svg = switchRef.current;
          svg.addEventListener("mousedown", onMouseDown);
          svg.addEventListener("mousemove", onMouseMove);
          svg.addEventListener("mouseup", onMouseUp);
          svg.addEventListener("mouseleave", () => {
            if (isDragging) onMouseUp();
          });
          
          return () => {
            svg.removeEventListener("mousedown", onMouseDown);
            svg.removeEventListener("mousemove", onMouseMove);
            svg.removeEventListener("mouseup", onMouseUp);
            svg.removeEventListener("mouseleave", () => {
              if (isDragging) onMouseUp();
            });
          };
        }, [isDragging, initialX, initialY]);

  return (
   
            <svg width={width} height={height} viewBox="5 0 28 105" preserveAspectRatio='none' fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_441_5704)">
            <rect width="27.6702" height="24.0718" transform="matrix(1 0 0 -1 5.45068 104.086)" fill="#E3E3E3"/>
            </g>
            <rect x="5.45068" y="3.83356" width="27.6702" height="19.9491" fill="#E3E3E3"/>
            <g filter="url(#filter1_f_441_5704)">
            <mask id="path-3-inside-1_441_5704" fill="white">
            <path d="M5.45068 3.83356H33.1209V23.7826H5.45068V3.83356Z"/>
            </mask>
            <path d="M5.45068 4.65553H33.1209V3.01158H5.45068V4.65553ZM33.1209 22.9606H5.45068V24.6046H33.1209V22.9606Z" fill="white" mask="url(#path-3-inside-1_441_5704)"/>
            </g>
            <rect width="29.0402" height="21.2312" transform="matrix(1 0 0 -1 4.08057 48.176)" fill="#F4F0F0"/>
            <rect width="29.0402" height="2.30677" transform="matrix(1 0 0 -1 4.08057 29.2515)" fill="#973749"/>
            <g filter="url(#filter2_d_441_5704)">
            <rect x="4.08057" y="48.176" width="29.0402" height="32.0062" fill="#F4F0F0"/>
            </g>
            <path d="M4.08057 26.9447H33.1208V23.7825H5.45053L4.08057 26.9447Z" fill="#CDCDCD"/>
            <path d="M5.45068 3.83356H33.1209V0.91374H7.64262L5.45068 3.83356Z" fill="#F4F0F0"/>
          
            <g filter="url(#filter4_iii_441_5704)">
            <circle cx="18.6501" cy="9.37622" r="5.73456" fill="#F4F0F0"/>
            </g>
            <g filter="url(#filter5_ii_441_5704)">
            <circle cx="18.6503" cy="9.37618" r="4.39052" fill="#CCCCCC"/>
            </g>
            
            <g filter="url(#filter6_i_441_5704)">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.0429 9.79308L18.0429 13.8559H19.0715V9.79308H23.0409V8.76443H19.0715V4.89642L18.0429 4.89642L18.0429 8.76443H14.2598V9.79308H18.0429Z" fill="#AAAAAA"/>
            </g>
            <g filter="url(#filter7_iii_441_5704)">
            <circle cx="18.6501" cy="93.3319" r="5.73456" fill="#C2C2C2"/>
            </g>

          <g ref={switchRef} style={{cursor:"pointer",}}>
              <g filter="url(#filter3_i_441_5704)">
            <rect x="10.3633" y="43.8807" width="16.1578" height="16.5315" rx="2.73992" fill="#8E8E8E"/>
            </g>
            <rect width="13.8066" height="15.851" rx="2.73992" transform="matrix(1 0 0 -1 11.7471 58.2202)" fill="url(#paint0_linear_441_5704)"/>
         
            <g filter="url(#filter10_i_441_5704)">
            <rect x="4.60986" y="34.183" width="28.0809" height="11.4557" rx="2.73992" fill="url(#paint1_linear_441_5704)"/>
            </g>
            <g filter="url(#filter11_i_441_5704)">
            <rect x="6.14307" y="72.7805" width="13.3076" height="2.66152" fill="#F4F0F0"/>
            </g>
            </g>
            
            <g filter="url(#filter12_i_441_5704)">
            <rect x="11.2397" y="72.7805" width="8.21092" height="2.66152" fill="#973749"/>
            </g>
            <circle cx="26.5211" cy="73.1896" r="3.19831" fill="#636363"/>
            
            <defs>
            <filter id="filter0_i_441_5704" x="5.45068" y="79.4665" width="27.6704" height="24.6198" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-0.547984"/>
            <feGaussianBlur stdDeviation="0.273992"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_441_5704"/>
            </filter>
            <filter id="filter1_f_441_5704" x="4.9027" y="3.28557" width="28.7664" height="21.045" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="0.273992" result="effect1_foregroundBlur_441_5704"/>
            </filter>
            <filter id="filter2_d_441_5704" x="0.95706" y="48.176" width="35.2871" height="39.7876" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4.65786"/>
            <feGaussianBlur stdDeviation="1.56175"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_441_5704"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_441_5704" result="shape"/>
            </filter>
            <filter id="filter3_i_441_5704" x="10.3633" y="43.8807" width="16.1577" height="16.5315" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1.83574"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_441_5704"/>
            </filter>
            <filter id="filter4_iii_441_5704" x="12.4012" y="3.12734" width="12.4979" height="11.9834" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="0.514323"/>
            <feGaussianBlur stdDeviation="0.514323"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_441_5704"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-0.514323"/>
            <feGaussianBlur stdDeviation="0.514323"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="effect1_innerShadow_441_5704" result="effect2_innerShadow_441_5704"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-0.514323"/>
            <feGaussianBlur stdDeviation="0.514323"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect2_innerShadow_441_5704" result="effect3_innerShadow_441_5704"/>
            </filter>
            <filter id="filter5_ii_441_5704" x="13.7454" y="4.98566" width="9.8099" height="8.78107" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="0.514323"/>
            <feGaussianBlur stdDeviation="0.514323"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_441_5704"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-0.514323"/>
            <feGaussianBlur stdDeviation="0.514323"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="effect1_innerShadow_441_5704" result="effect2_innerShadow_441_5704"/>
            </filter>
            <filter id="filter6_i_441_5704" x="14.2598" y="4.89642" width="9.03841" height="8.95947" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="0.257162"/>
            <feGaussianBlur stdDeviation="0.128581"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_441_5704"/>
            </filter>
            <filter id="filter7_iii_441_5704" x="12.4012" y="87.083" width="12.4979" height="11.9834" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="0.514323"/>
            <feGaussianBlur stdDeviation="0.514323"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_441_5704"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-0.514323"/>
            <feGaussianBlur stdDeviation="0.514323"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="effect1_innerShadow_441_5704" result="effect2_innerShadow_441_5704"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-0.514323"/>
            <feGaussianBlur stdDeviation="0.514323"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect2_innerShadow_441_5704" result="effect3_innerShadow_441_5704"/>
            </filter>
            <filter id="filter8_ii_441_5704" x="13.7454" y="88.9413" width="9.8099" height="8.78107" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="0.514323"/>
            <feGaussianBlur stdDeviation="0.514323"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_441_5704"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-0.514323"/>
            <feGaussianBlur stdDeviation="0.514323"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="effect1_innerShadow_441_5704" result="effect2_innerShadow_441_5704"/>
            </filter>
            
            <filter id="filter10_i_441_5704" x="4.60986" y="34.183" width="28.0811" height="12.6065" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4.10988"/>
            <feGaussianBlur stdDeviation="0.575383"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_441_5704"/>
            </filter>
            <filter id="filter11_i_441_5704" x="6.14307" y="72.7805" width="13.3076" height="2.93549" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="0.273992"/>
            <feGaussianBlur stdDeviation="0.273992"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_441_5704"/>
            </filter>
            <filter id="filter12_i_441_5704" x="11.2397" y="72.7805" width="8.21094" height="3.20948" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="0.547984"/>
            <feGaussianBlur stdDeviation="0.273992"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_441_5704"/>
            </filter>
            <linearGradient id="paint0_linear_441_5704" x1="7.73184" y1="15.8509" x2="8.24375" y2="1.72496" gradientUnits="userSpaceOnUse">
            <stop stopColor="#313131"/>
            <stop offset="0.428022" stopColor="#373737"/>
            <stop offset="0.716949" stopColor="#212121"/>
            <stop offset="1" stopColor="#1D2021"/>
            </linearGradient>
            <linearGradient id="paint1_linear_441_5704" x1="20.3355" y1="45.6387" x2="20.4671" y2="35.4179" gradientUnits="userSpaceOnUse">
            <stop stopColor="#313131"/>
            <stop offset="0.428022" stopColor="#0C0C0C"/>
            <stop offset="0.716949" stopColor="#525252"/>
            <stop offset="1" stopColor="#1D2021"/>
            </linearGradient>
            </defs>
            </svg>
  
  )
}
