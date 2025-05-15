import React, { useRef } from 'react'
import { rotateFn } from '../../cab-replica/CabReplicate/CabUtility';

export default function CCBInnerIsolationHandel({width=50, height=40}) {
    const handleRef=useRef(null);
    const prevDataRef=useRef(0);
    const pos=useRef(0);

    const clickHandler=()=>{
        if(pos.current===1)
        {
            pos.current=0;
            rotateFn(handleRef,0,prevDataRef);
        }
        else if(pos.current===0)
        {
            pos.current=1;
            rotateFn(handleRef,30,prevDataRef);
        }
    }
  return (
    <div style={{width:width, height:height}}>
        <svg width={"100%"} height={"100%"} style={{cursor:"pointer",}} onClick={clickHandler} viewBox="0 0 86 55" fill="none" xmlns="http://www.w3.org/2000/svg" >
<g filter="url(#filter0_dii_1324_2729)">
<circle cx="11.8914" cy="27.8721" r="10.7998" fill="url(#pattern0_1324_2729)" shape-rendering="crispEdges"/>
<circle cx="11.8914" cy="27.8721" r="10.7998" fill="#514540" fill-opacity="0.5" shape-rendering="crispEdges"/>
<circle cx="11.8914" cy="27.8721" r="10.7998" fill="url(#pattern1_1324_2729)" fill-opacity="0.5" shape-rendering="crispEdges"/>
<circle cx="11.8914" cy="27.8721" r="10.7998" fill="black" fill-opacity="0.2" shape-rendering="crispEdges"/>
</g>

<g ref={handleRef} style={{transformOrigin:"11px 27px"}}>
        <g filter="url(#filter1_ii_1324_2729)">
        <path d="M78.1135 15.6282C78.1135 18.7388 75.931 21.4226 72.8857 22.0566L21.1961 32.8185C19.6293 33.1447 18.2786 34.0837 16.9618 34.9935C15.5455 35.972 13.8277 36.5453 11.9758 36.5453C7.12452 36.5452 3.19177 32.6125 3.19165 27.7611C3.19165 22.9097 7.12445 18.977 11.9758 18.977C12.7006 18.977 13.4047 19.0651 14.0782 19.231C15.8479 19.667 17.6782 20.1363 19.4626 19.7648L70.2089 9.1998C74.2862 8.35094 78.1135 11.4635 78.1135 15.6282Z" fill="#D5C216"/>
        </g>
        <g filter="url(#filter2_ii_1324_2729)">
        <path d="M22.1978 25.1171C22.1061 23.2454 23.3986 21.5887 25.2363 21.2223L67.0724 12.8795C69.3389 12.4275 71.4773 14.0958 71.5904 16.4041C71.6821 18.2758 70.3897 19.9325 68.5519 20.299L26.7158 28.6418C24.4493 29.0937 22.3109 27.4255 22.1978 25.1171Z" fill="#D5C216"/>
        </g>

        <g filter="url(#filter4_ii_1324_2729)">
        <circle cx="67.9942" cy="18.2007" r="13.9292" fill="#D5C216"/>
        </g>
        <g filter="url(#filter5_f_1324_2729)">
        <circle cx="67.9942" cy="18.2007" r="13.9292" fill="url(#paint0_radial_1324_2729)"/>
        </g>
        <g opacity="0.4" filter="url(#filter6_f_1324_2729)">
        <circle cx="67.9943" cy="18.2007" r="13.9292" transform="rotate(-180 67.9943 18.2007)" fill="url(#paint1_radial_1324_2729)"/>
        </g>
        <g filter="url(#filter7_f_1324_2729)">
        <circle cx="67.9943" cy="18.2007" r="13.9292" transform="rotate(-180 67.9943 18.2007)" fill="url(#paint2_radial_1324_2729)"/>
        </g> 
</g>

<g filter="url(#filter3_dii_1324_2729)">
<circle cx="11.8914" cy="27.8721" r="5.38867" fill="url(#pattern2_1324_2729)" shape-rendering="crispEdges"/>
<circle cx="11.8914" cy="27.8721" r="5.38867" fill="#514540" fill-opacity="0.5" shape-rendering="crispEdges"/>
<circle cx="11.8914" cy="27.8721" r="5.38867" fill="url(#pattern3_1324_2729)" fill-opacity="0.5" shape-rendering="crispEdges"/>
</g>

<defs>
<filter id="filter0_dii_1324_2729" x="0.0915527" y="16.0723" width="23.5996" height="24.5996" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1324_2729"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1324_2729" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_1324_2729"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_1324_2729" result="effect3_innerShadow_1324_2729"/>
</filter>

<filter id="filter1_ii_1324_2729" x="0.19165" y="5.05957" width="80.9219" height="34.4854" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-3" dy="3"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_2729"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="-4"/>
<feGaussianBlur stdDeviation="2.6"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.558333 0 0 0 0 0.558333 0 0 0 0 0.558333 0 0 0 0.39 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_1324_2729" result="effect2_innerShadow_1324_2729"/>
</filter>
<filter id="filter2_ii_1324_2729" x="19.1932" y="8.80566" width="55.4017" height="22.9102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-3" dy="3"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.56 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_2729"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="-4"/>
<feGaussianBlur stdDeviation="2.6"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.170833 0 0 0 0 0.170833 0 0 0 0 0.170833 0 0 0 0.39 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_1324_2729" result="effect2_innerShadow_1324_2729"/>
</filter>
<filter id="filter3_dii_1324_2729" x="5.50269" y="21.4834" width="12.7773" height="13.7773" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1324_2729"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1324_2729" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_1324_2729"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_1324_2729" result="effect3_innerShadow_1324_2729"/>
</filter>

<filter id="filter4_ii_1324_2729" x="51.0651" y="0.271484" width="33.8583" height="34.8584" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-3" dy="3"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_2729"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="-4"/>
<feGaussianBlur stdDeviation="2.6"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.558333 0 0 0 0 0.558333 0 0 0 0 0.558333 0 0 0 0.39 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_1324_2729" result="effect2_innerShadow_1324_2729"/>
</filter>
<filter id="filter5_f_1324_2729" x="50.0651" y="0.271484" width="35.8583" height="35.8584" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1324_2729"/>
</filter>
<filter id="filter6_f_1324_2729" x="50.0652" y="0.271484" width="35.8583" height="35.8584" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1324_2729"/>
</filter>
<filter id="filter7_f_1324_2729" x="50.0652" y="0.271484" width="35.8583" height="35.8584" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1324_2729"/>
</filter>
<radialGradient id="paint0_radial_1324_2729" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.7159 18.2007) rotate(94.8756) scale(16.5265 4.69391)">
<stop stop-color="white"/>
<stop offset="1" stop-color="#D5C216" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint1_radial_1324_2729" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.7159 18.2007) rotate(115.161) scale(35.1558 4.99973)">
<stop stop-color="white"/>
<stop offset="1" stop-color="#D5C216" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint2_radial_1324_2729" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(67.9943 18.2007) rotate(97.5744) scale(6.19541 4.08077)">
<stop stop-color="white"/>
<stop offset="1" stop-color="#D5C216" stop-opacity="0"/>
</radialGradient>


</defs>
</svg>

    </div>
  )
}
