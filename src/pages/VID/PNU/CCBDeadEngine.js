import React, { useEffect, useRef } from 'react'
import { rotateFn } from '../../cab-replica/CabReplicate/CabUtility';
import { updateVIDData } from '../VIDUtility';

export default function CCBDeadEngine({width=50, height=50, data=0, valueKey=""}) {
         const handleRef=useRef(null);
        const prevDataRef=useRef(data);
        const pos=useRef(data);

        useEffect(()=>{
            if(data===0)
            {
                rotateFn(handleRef,0,prevDataRef);
            }
            else if(data===1)
            {
                rotateFn(handleRef, -90, prevDataRef);
            }
        },[data])
    
        const clickHandler=()=>{
            if(pos.current===1)
            {
                pos.current=0;
                rotateFn(handleRef,0,prevDataRef);
            }
            else if(pos.current===0)
            {
                pos.current=1;
                rotateFn(handleRef,-90,prevDataRef);
            }
            updateVIDData(valueKey, pos.current);
        }

        const handelStyle={transformOrigin:"17px 21px"}
  return (
    <div style={{width:width, height:height}}>
         <svg width="100%" height="100%" style={{cursor:"pointer"}} viewBox="0 0 42 36" fill="none" onClick={clickHandler}>
        <circle cx="16.4613" cy="20.3787" r="15.6101" fill="url(#paint0_linear_1324_2798)"/>
        <circle cx="16.4613" cy="20.3787" r="15.6101" fill="url(#pattern0_1324_2798)" style={{mixBlendMode:"multiply"}}/>
        <circle cx="17.219" cy="21.1356" r="14.8524" fill="#B49555"/>
        <circle cx="17.219" cy="21.1356" r="14.8524" fill="url(#pattern1_1324_2798)" style={{mixBlendMode:"multiply"}}/>
        <g filter="url(#filter0_ddi_1324_2798)" ref={handleRef} style={handelStyle}>
        <path d="M36.7969 3.53477C37.7089 4.52898 37.6423 6.07422 36.6481 6.98627L22.8001 19.6908C22.403 20.0551 22.2381 20.5968 22.2382 21.1357C22.2382 23.9076 19.9905 26.1552 17.2186 26.1552C14.4469 26.155 12.2001 23.9074 12.2001 21.1357C12.2002 18.3641 14.447 16.1173 17.2186 16.1171C18.3837 16.1171 19.6249 15.9737 20.4833 15.1861L33.3451 3.386C34.3393 2.47383 35.8848 2.54043 36.7969 3.53477Z" fill="#B49555"/>
        <path d="M36.7969 3.53477C37.7089 4.52898 37.6423 6.07422 36.6481 6.98627L22.8001 19.6908C22.403 20.0551 22.2381 20.5968 22.2382 21.1357C22.2382 23.9076 19.9905 26.1552 17.2186 26.1552C14.4469 26.155 12.2001 23.9074 12.2001 21.1357C12.2002 18.3641 14.447 16.1173 17.2186 16.1171C18.3837 16.1171 19.6249 15.9737 20.4833 15.1861L33.3451 3.386C34.3393 2.47383 35.8848 2.54043 36.7969 3.53477Z" fill="url(#pattern2_1324_2798)" style={{mixBlendMode:"multiply"}}/>
        </g>
        <g filter="url(#filter1_d_1324_2798)">
        <circle cx="17.2189" cy="21.136" r="2.68781" fill="#8E7E6E"/>
        <circle cx="17.2189" cy="21.136" r="2.68781" fill="url(#pattern3_1324_2798)" style={{mixBlendMode:"multiply"}}/>
        </g>

        <defs>
      
        <filter id="filter0_ddi_1324_2798" x="8.20007" y="0.743164" width="33.2395" height="33.4121" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1324_2798"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_1324_2798" result="effect2_dropShadow_1324_2798"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1324_2798" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect3_innerShadow_1324_2798"/>
        </filter>
        
        <filter id="filter1_d_1324_2798" x="12.5311" y="16.4482" width="9.37561" height="9.37598" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1324_2798"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1324_2798" result="shape"/>
        </filter>
        
        <linearGradient id="paint0_linear_1324_2798" x1="16.4613" y1="4.76855" x2="16.4613" y2="35.9888" gradientUnits="userSpaceOnUse">
        <stop stop-color="#725013"/>
        <stop offset="1" stop-color="#5D4520"/>
        </linearGradient>


        </defs>
        </svg>
    </div>
  )
}
