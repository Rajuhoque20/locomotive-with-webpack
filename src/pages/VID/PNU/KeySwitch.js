import React, { useEffect, useRef, useState } from 'react'
import { rotateFn } from '../../cab-replica/CabReplicate/CabUtility';
import { updateVIDData } from '../VIDUtility';

export default function KeySwitch({width="2rem", height="2rem", data, valueKey}) {
  const dialRef=useRef(null);
  const prevDataRef=useRef(data);
  const [pos, setPos]=useState(data);

  useEffect(()=>{
    if(data===1)
    {
      rotateFn(dialRef, -90, prevDataRef,);
    }
    else if (data===0)
    {
      rotateFn(dialRef, 0, prevDataRef,);
    }
  },[data]);

    const clickHandler=()=>{
      if(pos===1)
      {
        rotateFn(dialRef, 0,prevDataRef);
        setPos(0);
         updateVIDData(valueKey, 0);
      }
      else if (pos===0)
      {
        rotateFn(dialRef, -90,prevDataRef);
        setPos(1);
         updateVIDData(valueKey, 1);
      }
    }
      

  const dialStyle={
    cursor:"pointer",
    transformOrigin:"13.5px 12.5px"
  };
  

  return (
    <div style={{width:width, height:height, cursor:"pointer"}} onClick={clickHandler}>
        <svg width="100%" height="100%" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_dii_1185_2329)">
        <circle cx="13.7949" cy="12.1777" r="11.5068" fill="#EA894C"/>
        </g>
        <g filter="url(#filter1_ii_1185_2329)">
        <circle cx="13.9939" cy="12.7606" r="6.0632" fill="#5A6970"/>
        </g>
        <circle cx="13.9933" cy="12.7606" r="3.58021" fill="#BFAFA2"/>
        <g filter="url(#filter2_iiii_1185_2329)" ref={dialRef} style={dialStyle}>
        <rect x="7.9082" y="12.0588" width="11.6476" height="2.11978" fill="url(#paint0_linear_1185_2329)"/>
        </g>
        <g filter="url(#filter3_ii_1185_2329)">
        <circle cx="23.0796" cy="12.8041" r="1.27788" fill="#5A6970"/>
        </g>
        <g filter="url(#filter4_ii_1185_2329)">
        <circle cx="4.28081" cy="12.8041" r="1.27788" fill="#5A6970"/>
        </g>
        <defs>
        <filter id="filter0_dii_1185_2329" x="0.788086" y="0.17086" width="24.8137" height="24.0136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-1"/>
        <feGaussianBlur stdDeviation="0.25"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2329"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2329" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-0.5" dy="0.3"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.53 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1185_2329"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="0.3" dy="-0.3"/>
        <feGaussianBlur stdDeviation="0.25"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.9 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_1185_2329" result="effect3_innerShadow_1185_2329"/>
        </filter>
        <filter id="filter1_ii_1185_2329" x="7.93066" y="6.49737" width="12.126" height="12.8264" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2329"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2329" result="effect2_innerShadow_1185_2329"/>
        </filter>
        <filter id="filter2_iiii_1185_2329" x="6.9082" y="11.5588" width="13.6475" height="3.61978" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.733333 0 0 0 0 0.733333 0 0 0 0 0.733333 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2329"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.733333 0 0 0 0 0.733333 0 0 0 0 0.733333 0 0 0 0.16 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2329" result="effect2_innerShadow_1185_2329"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.53 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_1185_2329" result="effect3_innerShadow_1185_2329"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"/>
        <feBlend mode="normal" in2="effect3_innerShadow_1185_2329" result="effect4_innerShadow_1185_2329"/>
        </filter>
        <filter id="filter3_ii_1185_2329" x="21.8018" y="11.3262" width="2.55566" height="3.25576" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2329"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2329" result="effect2_innerShadow_1185_2329"/>
        </filter>
        <filter id="filter4_ii_1185_2329" x="3.00293" y="11.3262" width="2.55566" height="3.25576" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2329"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2329" result="effect2_innerShadow_1185_2329"/>
        </filter>
        <linearGradient id="paint0_linear_1185_2329" x1="13.732" y1="14.1786" x2="13.8986" y2="11.7472" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3443B8"/>
        <stop offset="1" stop-color="#6B78D8"/>
        </linearGradient>
        </defs>
        </svg>
    </div>
  )
}
