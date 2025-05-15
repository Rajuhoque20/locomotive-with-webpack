import React, { useEffect, useRef, useState } from 'react'
import { rotateFn } from '../../cab-replica/CabReplicate/CabUtility';
import { updateVIDData } from '../VIDUtility';

export default function IsolationHandel({width=50,height=300, data, valueKey}) {
   const handleRef=useRef(null);
    const[initial, setInitial]=useState({x:0, y:0});
    const [isDragging, setIsDragging]=useState(false);
    const prevDataRef=useRef(data);
    const  hasMoved = useRef(false);
    const [pos, setPos]=useState(data);

    useEffect(()=>{
      if(data===0)
      {
        rotateFn(handleRef, -90,prevDataRef);
      }
      else if (data===1)
      {
        rotateFn(handleRef, 0,prevDataRef);
      }
    },[data])
  
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
    //   if(currentX>initial.x&&pos===0)
    //   {
    //     rotateFn(handleRef, -90,prevDataRef);
    //     setPos(1);
    //   }
    //   else if(currentY>initial.y&&pos===1){
    //     rotateFn(handleRef, 0,prevDataRef);
    //     setPos(0);
    //   }
    // };
  
    // useEffect(()=>{
    //   const svg=handleRef.current;
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
      transformOrigin:"45px 43px"
    }

    const clickHandler=()=>{
    if(pos===1)
    {
      rotateFn(handleRef, -90,prevDataRef);
      setPos(0);
       updateVIDData(valueKey, 0);
    }
    else if (pos===0)
    {
      rotateFn(handleRef,0,prevDataRef);
      setPos(1);
       updateVIDData(valueKey, 1);
    }
  }
  return (
    <div style={{width:width, height:height, cursor:"pointer" }} onClick={clickHandler}>
            <svg width="100%" height="100%" viewBox="0 0 93 221"  fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_dddd_1193_11574)">
        <rect x="6.56934" y="4.83521" width="68.9809" height="81.4507" rx="5.27649" fill="#6B491C"/>
        </g>
        <g filter="url(#filter1_ddd_1193_11574)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.239 45.5606C24.239 54.8508 31.7702 62.3819 41.0604 62.3819C50.3506 62.3819 57.8818 54.8508 57.8818 45.5606C57.8818 36.2704 50.3506 28.7392 41.0604 28.7392C31.7702 28.7392 24.239 36.2704 24.239 45.5606ZM41.0604 24.4221C29.3859 24.4221 19.9219 33.8861 19.9219 45.5606C19.9219 57.235 29.3859 66.6991 41.0604 66.6991C52.7349 66.6991 62.1989 57.235 62.1989 45.5606C62.1989 33.8861 52.7349 24.4221 41.0604 24.4221Z" fill="#6B491C"/>
        </g>
        <g filter="url(#filter2_ddd_1193_11574)">
        <rect x="25.2686" y="29.7684" width="31.5844" height="31.5844" rx="15.7922" fill="#D8C8B3"/>
        </g>
        <g filter="url(#filter3_ddd_1193_11574)">
        <rect x="26.6494" y="31.1496" width="28.8221" height="28.8221" rx="14.411" fill="#020202"/>
        </g>
        <g filter="url(#filter4_ddd_1193_11574)" style={dialStyle} ref={handleRef}>
        <path d="M35.082 39.198H40.8382V105.644C40.8382 116.935 42.1772 128.187 44.8272 139.163C48.8505 155.826 55.841 171.629 65.4643 185.816L79.2127 206.084H73.4565L59.7081 185.816C50.0849 171.629 43.0944 155.826 39.0711 139.163C36.4211 128.187 35.082 116.935 35.082 105.644V39.198Z" fill="#020202"/>
        <path d="M80.7459 213.224C77.471 212.459 74.4104 208.188 73.4541 206.076H79.2065L81.3224 209.374C81.3964 209.489 81.5428 209.534 81.6687 209.48C81.8311 209.411 81.8893 209.21 81.7895 209.064L79.7424 206.076H85.4971C86.6552 208.262 86.7541 211.132 84.6752 212.473C83.5914 213.172 82.2612 213.578 80.7459 213.224Z" fill="#020202"/>
        <path d="M41.3662 39.198H47.1224V105.644C47.1224 116.935 48.4614 128.187 51.1114 139.163C55.1347 155.826 62.1252 171.629 71.7484 185.816L85.4968 206.084H79.7407L65.9923 185.816C56.3691 171.629 49.3785 155.826 45.3553 139.163C42.7052 128.187 41.3662 116.935 41.3662 105.644V39.198Z" fill="#020202"/>
        </g>
        <g filter="url(#filter5_ddd_1193_11574)">
        <rect x="35.082" y="39.198" width="11.992" height="11.992" rx="2.3984" fill="#737373"/>
        </g>

        <defs>
        <filter id="filter0_dddd_1193_11574" x="0.813168" y="0.0384057" width="80.4928" height="92.963" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1.91872"/>
        <feGaussianBlur stdDeviation="0.959361"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1193_11574"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.959361"/>
        <feGaussianBlur stdDeviation="2.87808"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.179167 0 0 0 0 0.112967 0 0 0 0 0.0291146 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_1193_11574" result="effect2_dropShadow_1193_11574"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.959361"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.494118 0 0 0 0 0.376471 0 0 0 0 0.227451 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_dropShadow_1193_11574" result="effect3_dropShadow_1193_11574"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="0.959361"/>
        <feGaussianBlur stdDeviation="0.479681"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.225 0 0 0 0 0.14625 0 0 0 0 0.0675 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect3_dropShadow_1193_11574" result="effect4_dropShadow_1193_11574"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_1193_11574" result="shape"/>
        </filter>
        <filter id="filter1_ddd_1193_11574" x="14.1657" y="19.6252" width="53.7897" height="53.7894" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1.91872"/>
        <feGaussianBlur stdDeviation="0.959361"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1193_11574"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.959361"/>
        <feGaussianBlur stdDeviation="2.87808"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.179167 0 0 0 0 0.112967 0 0 0 0 0.0291146 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_1193_11574" result="effect2_dropShadow_1193_11574"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="0.959361"/>
        <feGaussianBlur stdDeviation="0.479681"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.225 0 0 0 0 0.14625 0 0 0 0 0.0675 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_dropShadow_1193_11574" result="effect3_dropShadow_1193_11574"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1193_11574" result="shape"/>
        </filter>
        <filter id="filter2_ddd_1193_11574" x="19.5124" y="24.9716" width="43.0963" height="43.0968" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1.91872"/>
        <feGaussianBlur stdDeviation="0.959361"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1193_11574"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.959361"/>
        <feGaussianBlur stdDeviation="2.87808"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.179167 0 0 0 0 0.112967 0 0 0 0 0.0291146 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_1193_11574" result="effect2_dropShadow_1193_11574"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="0.959361"/>
        <feGaussianBlur stdDeviation="0.479681"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.225 0 0 0 0 0.14625 0 0 0 0 0.0675 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_dropShadow_1193_11574" result="effect3_dropShadow_1193_11574"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1193_11574" result="shape"/>
        </filter>
        <filter id="filter3_ddd_1193_11574" x="20.8932" y="26.3527" width="40.3346" height="40.3344" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1.91872"/>
        <feGaussianBlur stdDeviation="0.959361"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1193_11574"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.959361"/>
        <feGaussianBlur stdDeviation="2.87808"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.179167 0 0 0 0 0.112967 0 0 0 0 0.0291146 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_1193_11574" result="effect2_dropShadow_1193_11574"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="0.959361"/>
        <feGaussianBlur stdDeviation="0.479681"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.225 0 0 0 0 0.14625 0 0 0 0 0.0675 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_dropShadow_1193_11574" result="effect3_dropShadow_1193_11574"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1193_11574" result="shape"/>
        </filter>
        <filter id="filter4_ddd_1193_11574" x="29.3259" y="34.4012" width="62.7457" height="185.669" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1.91872"/>
        <feGaussianBlur stdDeviation="0.959361"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1193_11574"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.959361"/>
        <feGaussianBlur stdDeviation="2.87808"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0913462 0 0 0 0 0.0735213 0 0 0 0 0.050943 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_1193_11574" result="effect2_dropShadow_1193_11574"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="0.959361"/>
        <feGaussianBlur stdDeviation="0.479681"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0336538 0 0 0 0 0.0268584 0 0 0 0 0.0200629 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_dropShadow_1193_11574" result="effect3_dropShadow_1193_11574"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1193_11574" result="shape"/>
        </filter>
        <filter id="filter5_ddd_1193_11574" x="29.3259" y="34.4012" width="23.5045" height="23.5044" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1.91872"/>
        <feGaussianBlur stdDeviation="0.959361"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1193_11574"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.959361"/>
        <feGaussianBlur stdDeviation="2.87808"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.179167 0 0 0 0 0.112967 0 0 0 0 0.0291146 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_1193_11574" result="effect2_dropShadow_1193_11574"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="0.959361"/>
        <feGaussianBlur stdDeviation="0.479681"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.225 0 0 0 0 0.14625 0 0 0 0 0.0675 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_dropShadow_1193_11574" result="effect3_dropShadow_1193_11574"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1193_11574" result="shape"/>
        </filter>
        </defs>
        </svg>
    </div>
  )
}
