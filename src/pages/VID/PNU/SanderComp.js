import React, { useEffect, useRef, useState } from 'react'
import { rotateFn } from '../../cab-replica/CabReplicate/CabUtility';
import { updateVIDData } from '../VIDUtility';

export default function SanderComp({width="3rem", height="3rem", data, valueKey,}) {
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
          else if(data===0)
          {
            rotateFn(dialRef, -90,prevDataRef);
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
      
        const dialStyle={
          cursor:"pointer",
          transformOrigin:"11px 10px"
        };

  return (
    <div style={{width:width, height:height, cursor:"pointer"}} onClick={clickHandler} >
<svg width="100%" height="100%" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_diii_1185_1274)">
<path d="M2.12988 2.76712C2.12988 1.93935 2.80092 1.26831 3.62869 1.26831L13.2714 1.26831C17.4102 1.26831 20.7654 4.6235 20.7654 8.76235V16.7889C20.7654 17.6166 20.0944 18.2877 19.2666 18.2877H9.62392C5.48508 18.2877 2.12988 14.9325 2.12988 10.7936L2.12988 2.76712Z" fill="#8E7B6A"/>
</g>
<g filter="url(#filter1_ii_1185_1274)">
<circle cx="5.56623" cy="4.39351" r="1.03498" fill="#5A6970"/>
</g>
<g filter="url(#filter2_ii_1185_1274)">
<circle cx="5.56623" cy="4.39351" r="1.03498" fill="#5A6970"/>
</g>
<g filter="url(#filter3_ii_1185_1274)">
<circle cx="17.7362" cy="15.2916" r="1.03498" fill="white"/>
</g>
<path d="M9.39313 4.49933C10.5415 4.09731 11.7752 4.00296 12.9713 4.22568C14.1675 4.44841 15.2845 4.98043 16.2113 5.76883C17.138 6.55723 17.8422 7.57454 18.2537 8.71955C18.6653 9.86456 18.7699 11.0974 18.5571 12.2953" stroke="white" stroke-width="1.49881" stroke-linecap="round"/>
<path d="M10.0695 4.30643C11.093 4.06063 12.159 4.05011 13.1872 4.27566C14.2154 4.50121 15.179 4.95695 16.0057 5.60861C16.8324 6.26027 17.5006 7.09089 17.96 8.038C18.4194 8.98511 18.658 10.0241 18.658 11.0767" stroke="#171717" stroke-width="0.224821" stroke-linecap="round"/>
<g filter="url(#filter4_d_1185_1274)">
<circle cx="9.35609" cy="4.46873" r="0.348282" fill="url(#paint0_linear_1185_1274)"/>
</g>
<g filter="url(#filter5_ii_1185_1274)">
<circle cx="11.5344" cy="10.6352" r="1.51482" fill="#5A6970"/>
</g>
<g filter="url(#filter6_ii_1185_1274)" ref={dialRef} style={dialStyle}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6174 13.1136C14.0777 12.9126 14.5384 12.7115 15.0226 12.6081L22.0644 11.1035C22.2853 11.0563 22.4432 10.8611 22.4432 10.6353C22.4432 10.4094 22.2853 10.2143 22.0644 10.1671L15.0225 8.66245C14.5384 8.55901 14.0777 8.3579 13.6174 8.15694C13.095 7.92892 12.5731 7.70108 12.0179 7.61629C11.8918 7.59705 11.7631 7.5871 11.6322 7.5871C11.4644 7.5871 11.3 7.60347 11.1403 7.63484C10.7891 7.70384 10.4524 7.83094 10.1155 7.95808C9.82053 8.06942 9.52547 8.18078 9.22053 8.2532L1.19808 10.1585C0.977211 10.211 0.821289 10.4083 0.821289 10.6353C0.821289 10.8623 0.977212 11.0596 1.19808 11.112L9.2205 13.0173C9.52544 13.0897 9.82051 13.2011 10.1155 13.3125C10.4524 13.4396 10.7891 13.5667 11.1403 13.6357C11.3 13.6671 11.4644 13.6834 11.6322 13.6834C11.7631 13.6834 11.8918 13.6735 12.0179 13.6542C12.5731 13.5695 13.095 13.3416 13.6174 13.1136ZM11.5344 12.1077C12.3476 12.1077 13.0069 11.4485 13.0069 10.6353C13.0069 9.82205 12.3476 9.16281 11.5344 9.16281C10.7212 9.16281 10.062 9.82205 10.062 10.6353C10.062 11.4485 10.7212 12.1077 11.5344 12.1077Z" fill="#CE0809"/>
</g>

<defs>
<filter id="filter0_diii_1185_1274" x="0.631076" y="0.518907" width="20.884" height="18.5182" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.749404"/>
<feGaussianBlur stdDeviation="0.374702"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_1274"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_1274" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.749404" dy="0.749404"/>
<feGaussianBlur stdDeviation="0.749404"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_1185_1274"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.749404" dy="-0.749404"/>
<feGaussianBlur stdDeviation="0.749404"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.329167 0 0 0 0 0.329167 0 0 0 0 0.329167 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_1185_1274" result="effect3_innerShadow_1185_1274"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.224821" dy="-0.224821"/>
<feGaussianBlur stdDeviation="0.187351"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect3_innerShadow_1185_1274" result="effect4_innerShadow_1185_1274"/>
</filter>
<filter id="filter1_ii_1185_1274" x="4.53125" y="3.20866" width="2.07031" height="2.59454" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.374702"/>
<feGaussianBlur stdDeviation="0.374702"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_1274"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.149881"/>
<feGaussianBlur stdDeviation="0.0749404"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_1185_1274" result="effect2_innerShadow_1185_1274"/>
</filter>
<filter id="filter2_ii_1185_1274" x="4.53125" y="3.20866" width="2.07031" height="2.59454" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.374702"/>
<feGaussianBlur stdDeviation="0.374702"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_1274"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.149881"/>
<feGaussianBlur stdDeviation="0.0749404"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_1185_1274" result="effect2_innerShadow_1185_1274"/>
</filter>
<filter id="filter3_ii_1185_1274" x="16.7012" y="14.1067" width="2.07031" height="2.59454" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.374702"/>
<feGaussianBlur stdDeviation="0.374702"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_1274"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.149881"/>
<feGaussianBlur stdDeviation="0.0749404"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_1185_1274" result="effect2_innerShadow_1185_1274"/>
</filter>
<filter id="filter4_d_1185_1274" x="6.0102" y="4.12045" width="6.69152" height="6.69179" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.99761"/>
<feGaussianBlur stdDeviation="1.49881"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_1274"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_1274" result="shape"/>
</filter>
<filter id="filter5_ii_1185_1274" x="10.0195" y="8.97054" width="3.0293" height="3.55423" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.374702"/>
<feGaussianBlur stdDeviation="0.374702"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_1274"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.149881"/>
<feGaussianBlur stdDeviation="0.0749404"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_1185_1274" result="effect2_innerShadow_1185_1274"/>
</filter>
<filter id="filter6_ii_1185_1274" x="0.821289" y="6.86746" width="21.6221" height="7.53563" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.719642"/>
<feGaussianBlur stdDeviation="0.359821"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.258333 0 0 0 0 0.258333 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_1274"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.719642"/>
<feGaussianBlur stdDeviation="0.359821"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.44 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_1185_1274" result="effect2_innerShadow_1185_1274"/>
</filter>
<linearGradient id="paint0_linear_1185_1274" x1="9.70438" y1="4.46873" x2="9.00781" y2="4.46873" gradientUnits="userSpaceOnUse">
<stop stop-color="#737373"/>
<stop offset="0.49" stop-color="#D9D9D9"/>
<stop offset="1" stop-color="#737373"/>
</linearGradient>
</defs>
</svg>
    </div>
  )
}
