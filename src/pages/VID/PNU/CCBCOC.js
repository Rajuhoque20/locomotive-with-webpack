import React, { useEffect, useRef, useState } from 'react'
import { updateVIDData } from '../VIDUtility';
import { rotateFn } from '../../cab-replica/CabReplicate/CabUtility';

export default function CCBCOC({width=50, height=50, data=0, valueKey=''}) {
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
    <svg width="100%" height="100%" style={{cursor:"pointer"}} onClick={clickHandler} viewBox="0 0 13 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
<g filter="url(#filter0_ii_1324_3561)" style={{transformOrigin:"7px 15px"}} ref={handleRef}>
<path d="M8.11197 2.79683V2.11912C8.11197 1.31012 7.21362 0.654297 6.40461 0.654297C5.61146 0.654297 4.77346 1.28559 4.75143 2.07845V2.90732C4.74382 3.18135 4.85355 3.45184 4.75143 3.70624L1.5272 11.7385L1.13866 12.4379C0.0664463 14.368 -0.127578 16.6649 0.605684 18.7475C0.823974 19.3675 1.12059 19.957 1.48832 20.5018L4.27651 24.6325C5.22752 26.0414 4.75143 27.7024 4.75143 29.4022C4.75143 29.9713 8.11197 29.9654 8.11197 29.4022C8.11197 27.6971 8.3434 26.0256 9.2384 24.5743L11.451 20.9864C11.9844 20.1214 12.3829 19.1801 12.6326 18.1949L12.6603 18.0857C13.0942 16.3743 13.0673 14.5786 12.5822 12.881L12.5344 12.7136C12.3492 12.0652 12.0988 11.4373 11.7872 10.8393L8.11197 3.787C7.95264 3.48126 8.11197 3.14159 8.11197 2.79683Z" fill="#323D3D"/>
<path d="M8.11197 2.79683V2.11912C8.11197 1.31012 7.21362 0.654297 6.40461 0.654297C5.61146 0.654297 4.77346 1.28559 4.75143 2.07845V2.90732C4.74382 3.18135 4.85355 3.45184 4.75143 3.70624L1.5272 11.7385L1.13866 12.4379C0.0664463 14.368 -0.127578 16.6649 0.605684 18.7475C0.823974 19.3675 1.12059 19.957 1.48832 20.5018L4.27651 24.6325C5.22752 26.0414 4.75143 27.7024 4.75143 29.4022C4.75143 29.9713 8.11197 29.9654 8.11197 29.4022C8.11197 27.6971 8.3434 26.0256 9.2384 24.5743L11.451 20.9864C11.9844 20.1214 12.3829 19.1801 12.6326 18.1949L12.6603 18.0857C13.0942 16.3743 13.0673 14.5786 12.5822 12.881L12.5344 12.7136C12.3492 12.0652 12.0988 11.4373 11.7872 10.8393L8.11197 3.787C7.95264 3.48126 8.11197 3.14159 8.11197 2.79683Z" fill="url(#pattern0_1324_3561)" fill-opacity="0.5" style={{mixBlendMode:"overlay"}}/>
<path d="M8.11197 2.79683V2.11912C8.11197 1.31012 7.21362 0.654297 6.40461 0.654297C5.61146 0.654297 4.77346 1.28559 4.75143 2.07845V2.90732C4.74382 3.18135 4.85355 3.45184 4.75143 3.70624L1.5272 11.7385L1.13866 12.4379C0.0664463 14.368 -0.127578 16.6649 0.605684 18.7475C0.823974 19.3675 1.12059 19.957 1.48832 20.5018L4.27651 24.6325C5.22752 26.0414 4.75143 27.7024 4.75143 29.4022C4.75143 29.9713 8.11197 29.9654 8.11197 29.4022C8.11197 27.6971 8.3434 26.0256 9.2384 24.5743L11.451 20.9864C11.9844 20.1214 12.3829 19.1801 12.6326 18.1949L12.6603 18.0857C13.0942 16.3743 13.0673 14.5786 12.5822 12.881L12.5344 12.7136C12.3492 12.0652 12.0988 11.4373 11.7872 10.8393L8.11197 3.787C7.95264 3.48126 8.11197 3.14159 8.11197 2.79683Z" fill="url(#pattern1_1324_3561)" style={{mixBlendMode:"multiply"}}/>
<path d="M8.11197 2.79683V2.11912C8.11197 1.31012 7.21362 0.654297 6.40461 0.654297C5.61146 0.654297 4.77346 1.28559 4.75143 2.07845V2.90732C4.74382 3.18135 4.85355 3.45184 4.75143 3.70624L1.5272 11.7385L1.13866 12.4379C0.0664463 14.368 -0.127578 16.6649 0.605684 18.7475C0.823974 19.3675 1.12059 19.957 1.48832 20.5018L4.27651 24.6325C5.22752 26.0414 4.75143 27.7024 4.75143 29.4022C4.75143 29.9713 8.11197 29.9654 8.11197 29.4022C8.11197 27.6971 8.3434 26.0256 9.2384 24.5743L11.451 20.9864C11.9844 20.1214 12.3829 19.1801 12.6326 18.1949L12.6603 18.0857C13.0942 16.3743 13.0673 14.5786 12.5822 12.881L12.5344 12.7136C12.3492 12.0652 12.0988 11.4373 11.7872 10.8393L8.11197 3.787C7.95264 3.48126 8.11197 3.14159 8.11197 2.79683Z" fill="url(#paint0_radial_1324_3561)"/>
</g>
<g filter="url(#filter1_dii_1324_3561)">
<circle cx="6.56738" cy="15.2402" r="3.56445" fill="url(#pattern2_1324_3561)" shape-rendering="crispEdges"/>
<circle cx="6.56738" cy="15.2402" r="3.56445" fill="#B2ABA8" fill-opacity="0.5" shape-rendering="crispEdges"/>
</g>
<g filter="url(#filter2_dii_1324_3561)">
<circle cx="6.56744" cy="15.2401" r="2.65021" fill="url(#pattern3_1324_3561)" shape-rendering="crispEdges"/>
<circle cx="6.56744" cy="15.2401" r="2.65021" fill="#B2ABA8" fill-opacity="0.5" shape-rendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_ii_1324_3561" x="-0.832275" y="0.654297" width="14.7993" height="29.1729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_3561"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_1324_3561" result="effect2_innerShadow_1324_3561"/>
</filter>

<filter id="filter1_dii_1324_3561" x="2.00293" y="10.6758" width="9.12891" height="10.1289" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1324_3561"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1324_3561" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_1324_3561"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_1324_3561" result="effect3_innerShadow_1324_3561"/>
</filter>

<filter id="filter2_dii_1324_3561" x="2.91724" y="11.5898" width="7.30042" height="8.30078" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1324_3561"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1324_3561" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_1324_3561"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_1324_3561" result="effect3_innerShadow_1324_3561"/>
</filter>
<radialGradient id="paint0_radial_1324_3561" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.07185 14.6004) rotate(88.1361) scale(15.2345 13.2319)">
<stop/>
<stop offset="0.430952" stop-opacity="0"/>
</radialGradient>

</defs>
</svg>

    </div>
  )
}
