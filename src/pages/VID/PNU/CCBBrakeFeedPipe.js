
import React, { useEffect, useRef } from 'react'
import { rotateFn } from '../../cab-replica/CabReplicate/CabUtility';
import { updateVIDData } from '../VIDUtility';

export default function CCBBrakeFeedPipe({ width=50, height=50, valueKey='', data=0}) {
     const handleRef=useRef(null);
            const prevDataRef=useRef(data);
            const pos=useRef(data);
    
            useEffect(()=>{
                if(data===0)
                {
                    rotateFn(handleRef,-90,prevDataRef);
                }
                else if (data===1)
                {
                    rotateFn(handleRef,0,prevDataRef);
                }
            },[data])
        
            const clickHandler=()=>{
                if(pos.current===1)
                {
                    pos.current=0;
                    rotateFn(handleRef,-90,prevDataRef);
                    updateVIDData(valueKey, 0);
                }
                else if(pos.current===0)
                {
                    pos.current=1;
                    rotateFn(handleRef,0,prevDataRef);
                    updateVIDData(valueKey, 1);
                }
            }
            const handleStyle={
                transformOrigin:"20px 20px"
            }
  return (
    <div style={{width:width, height:height}}>
        <svg width="100%" height="100%" style={{cursor:"pointer"}} onClick={clickHandler} viewBox="0 0 41 40" fill="none" >
<g filter="url(#filter0_dii_1324_3616)">
<path d="M21.1394 38.0063C31.4633 38.0063 39.8325 29.6372 39.8325 19.3132C39.8325 8.98931 31.4633 0.620117 21.1394 0.620117C17.2413 0.620117 13.6219 1.81326 10.6265 3.85425C10.09 4.22701 9.8788 4.91878 10.1155 5.52764L10.3848 6.22032C10.5428 6.62671 10.585 7.06896 10.5067 7.4979L10.4073 8.04254C10.2974 8.64473 10.0606 9.21664 9.71263 9.72026L8.23196 11.8633L7.43413 13.3047C6.50158 14.9895 5.8877 16.8317 5.6233 18.7391L5.53773 19.3564C5.39577 20.3806 5.39645 21.4194 5.53976 22.4434C5.62869 23.0788 5.77487 23.714 5.97122 24.3248C6.36576 25.5523 6.96942 26.722 7.7461 27.7511L8.23196 28.3949L9.71197 29.9938L10.2979 30.6841C10.4413 30.853 10.5526 31.0467 10.6263 31.2556L10.7297 31.5485C10.861 31.9205 10.8038 32.3331 10.5763 32.6554C10.5354 32.7134 10.489 32.7681 10.4386 32.8181C9.8834 33.3687 9.9222 34.2885 10.5666 34.7313C13.5737 36.7972 17.2153 38.0063 21.1394 38.0063Z" fill="#A19A8A"/>
<path d="M21.1394 38.0063C31.4633 38.0063 39.8325 29.6372 39.8325 19.3132C39.8325 8.98931 31.4633 0.620117 21.1394 0.620117C17.2413 0.620117 13.6219 1.81326 10.6265 3.85425C10.09 4.22701 9.8788 4.91878 10.1155 5.52764L10.3848 6.22032C10.5428 6.62671 10.585 7.06896 10.5067 7.4979L10.4073 8.04254C10.2974 8.64473 10.0606 9.21664 9.71263 9.72026L8.23196 11.8633L7.43413 13.3047C6.50158 14.9895 5.8877 16.8317 5.6233 18.7391L5.53773 19.3564C5.39577 20.3806 5.39645 21.4194 5.53976 22.4434C5.62869 23.0788 5.77487 23.714 5.97122 24.3248C6.36576 25.5523 6.96942 26.722 7.7461 27.7511L8.23196 28.3949L9.71197 29.9938L10.2979 30.6841C10.4413 30.853 10.5526 31.0467 10.6263 31.2556L10.7297 31.5485C10.861 31.9205 10.8038 32.3331 10.5763 32.6554C10.5354 32.7134 10.489 32.7681 10.4386 32.8181C9.8834 33.3687 9.9222 34.2885 10.5666 34.7313C13.5737 36.7972 17.2153 38.0063 21.1394 38.0063Z" fill="url(#pattern0_1324_3616)" style={{mixBlendMode:"overlay"}}/>
</g>
<g ref={handleRef} style={handleStyle}>
    <g filter="url(#filter1_ii_1324_3616)">
<circle cx="20.3374" cy="19.3132" r="6.71753" fill="url(#paint0_linear_1324_3616)"/>
<circle cx="20.3374" cy="19.3132" r="6.71753" fill="url(#pattern1_1324_3616)" style={{mixBlendMode:"multiply"}}/>
<circle cx="20.3374" cy="19.3132" r="6.71753" fill="url(#paint1_linear_1324_3616)"/>
</g>
<g filter="url(#filter2_ii_1324_3616)">
<path d="M0.575439 18.5689C0.575439 17.4165 1.54677 16.5025 2.69702 16.5726L15.116 17.329C16.1714 17.3932 16.9944 18.2679 16.9944 19.3253V19.8171C16.9944 20.8745 16.1714 21.7492 15.116 21.8134L2.69703 22.5698C1.54677 22.6399 0.575439 21.7259 0.575439 20.5735V18.5689Z" fill="url(#paint2_linear_1324_3616)"/>
<path d="M0.575439 18.5689C0.575439 17.4165 1.54677 16.5025 2.69702 16.5726L15.116 17.329C16.1714 17.3932 16.9944 18.2679 16.9944 19.3253V19.8171C16.9944 20.8745 16.1714 21.7492 15.116 21.8134L2.69703 22.5698C1.54677 22.6399 0.575439 21.7259 0.575439 20.5735V18.5689Z" fill="url(#pattern2_1324_3616)" style={{mixBlendMode:"multiply"}}/>
<path d="M0.575439 18.5689C0.575439 17.4165 1.54677 16.5025 2.69702 16.5726L15.116 17.329C16.1714 17.3932 16.9944 18.2679 16.9944 19.3253V19.8171C16.9944 20.8745 16.1714 21.7492 15.116 21.8134L2.69703 22.5698C1.54677 22.6399 0.575439 21.7259 0.575439 20.5735V18.5689Z" fill="url(#paint3_linear_1324_3616)"/>
</g>
<g filter="url(#filter3_ii_1324_3616)">
<path d="M39.7451 18.5689C39.7451 17.4165 38.7738 16.5025 37.6235 16.5726L25.2046 17.329C24.1492 17.3932 23.3262 18.2679 23.3262 19.3253V19.8171C23.3262 20.8745 24.1492 21.7492 25.2046 21.8134L37.6235 22.5698C38.7738 22.6399 39.7451 21.7259 39.7451 20.5735V18.5689Z" fill="url(#paint4_linear_1324_3616)"/>
<path d="M39.7451 18.5689C39.7451 17.4165 38.7738 16.5025 37.6235 16.5726L25.2046 17.329C24.1492 17.3932 23.3262 18.2679 23.3262 19.3253V19.8171C23.3262 20.8745 24.1492 21.7492 25.2046 21.8134L37.6235 22.5698C38.7738 22.6399 39.7451 21.7259 39.7451 20.5735V18.5689Z" fill="url(#pattern3_1324_3616)" style={{mixBlendMode:"multiply"}}/>
<path d="M39.7451 18.5689C39.7451 17.4165 38.7738 16.5025 37.6235 16.5726L25.2046 17.329C24.1492 17.3932 23.3262 18.2679 23.3262 19.3253V19.8171C23.3262 20.8745 24.1492 21.7492 25.2046 21.8134L37.6235 22.5698C38.7738 22.6399 39.7451 21.7259 39.7451 20.5735V18.5689Z" fill="url(#paint5_linear_1324_3616)"/>
</g>
<circle cx="20.3374" cy="19.3135" r="5.09082" fill="url(#paint6_linear_1324_3616)" fill-opacity="0.5"/>
<circle cx="20.3374" cy="19.3135" r="5.09082" fill="url(#pattern4_1324_3616)" style={{mixBlendMode:"multiply"}}/>
<circle cx="20.3374" cy="19.3135" r="5.09082" fill="#AE8C64"/>
</g>
<line x1="15.2656" y1="19.0713" x2="25.4282" y2="19.0713" stroke="#D9A76A"/>

<defs>
<filter id="filter0_dii_1324_3616" x="4.43176" y="-0.379883" width="36.4008" height="40.3857" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1324_3616"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1324_3616" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_1324_3616"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_1324_3616" result="effect3_innerShadow_1324_3616"/>
</filter>

<filter id="filter1_ii_1324_3616" x="11.6199" y="10.5957" width="17.4351" height="17.4355" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-2" dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.291667 0 0 0 0 0.291667 0 0 0 0 0.291667 0 0 0 0.65 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_3616"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="2" dy="-2"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0.65 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_1324_3616" result="effect2_innerShadow_1324_3616"/>
</filter>

<filter id="filter2_ii_1324_3616" x="-1.42456" y="16.5684" width="20.4189" height="6.00488" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="2"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.9875 0 0 0 0 0.747142 0 0 0 0 0.460833 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_3616"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-2"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_1324_3616" result="effect2_innerShadow_1324_3616"/>
</filter>

<filter id="filter3_ii_1324_3616" x="23.3262" y="16.5684" width="18.4189" height="6.00488" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="2"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.9875 0 0 0 0 0.747142 0 0 0 0 0.460833 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_3616"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="2"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_1324_3616" result="effect2_innerShadow_1324_3616"/>
</filter>

<linearGradient id="paint0_linear_1324_3616" x1="20.3374" y1="12.5957" x2="20.3374" y2="26.0308" gradientUnits="userSpaceOnUse">
<stop stop-color="#412C11"/>
<stop offset="0.299291" stop-color="#FCBF76"/>
<stop offset="1" stop-color="#412C11"/>
</linearGradient>
<linearGradient id="paint1_linear_1324_3616" x1="27.0549" y1="19.3132" x2="17.6383" y2="19.3132" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0"/>
<stop offset="0.447826" stop-color="#C4C4C4" stop-opacity="0.2"/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_1324_3616" x1="8.78491" y1="16.4434" x2="8.78491" y2="22.699" gradientUnits="userSpaceOnUse">
<stop stop-color="#412C11"/>
<stop offset="0.299291" stop-color="#FCBF76"/>
<stop offset="1" stop-color="#412C11"/>
</linearGradient>
<linearGradient id="paint3_linear_1324_3616" x1="16.9944" y1="19.5712" x2="5.48638" y2="19.5712" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0"/>
<stop offset="0.447826" stop-color="#C4C4C4" stop-opacity="0.2"/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_1324_3616" x1="31.5356" y1="16.4434" x2="31.5356" y2="22.699" gradientUnits="userSpaceOnUse">
<stop stop-color="#412C11"/>
<stop offset="0.299291" stop-color="#FCBF76"/>
<stop offset="1" stop-color="#412C11"/>
</linearGradient>
<linearGradient id="paint5_linear_1324_3616" x1="23.3262" y1="19.5712" x2="34.8342" y2="19.5712" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0"/>
<stop offset="0.447826" stop-color="#C4C4C4" stop-opacity="0.2"/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear_1324_3616" x1="20.3374" y1="14.2227" x2="20.3374" y2="24.4043" gradientUnits="userSpaceOnUse">
<stop stop-color="#412C11"/>
<stop offset="0.299291" stop-color="#FCBF76"/>
<stop offset="1" stop-color="#412C11"/>
</linearGradient>

</defs>
</svg>

    </div>
  )
}
