import React, { useEffect, useRef, useState } from 'react'
import { rotateFn } from '../../cab-replica/CabReplicate/CabUtility';
import { updateVIDData } from '../VIDUtility';

export default function IsolatingCock({width="4rem", height="4rem", data=0, valueKey=''}) {
  const cockRef=useRef(null);
  const prevDataRef=useRef(data);
  const [pos, setPos]=useState(data);

  useEffect(()=>{
    if(data===1)
    {
      rotateFn(cockRef, -90,prevDataRef);
    }
    else if(data===0)
    {
      rotateFn(cockRef, 0,prevDataRef);
    }
  },[data])


   const clickHandler=()=>{
    if(pos===0)
    {
      rotateFn(cockRef, -90,prevDataRef);
      setPos(1);
       updateVIDData(valueKey, 1);
    }
    else if (pos===1)
    {
      rotateFn(cockRef, 0,prevDataRef);
      setPos(0);
       updateVIDData(valueKey, 0);
    }
  }

  // useEffect(()=>{
  //   const svg=cockRef.current;
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
    transformOrigin:"75px 39px"
  }
  
  return (
    <div style={{width:width, height:height, cursor:"pointer", }} onClick={clickHandler}>
        <svg width="100%" height="100%" viewBox="0 0 113 73" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="109.678" y="23.2517" width="2.70808" height="1.74451" transform="rotate(-90 109.678 23.2517)" fill="url(#paint0_linear_1185_2534)"/>
        <rect x="107.886" y="24.0069" width="4.21849" height="2.35626" transform="rotate(-90 107.886 24.0069)" fill="url(#paint1_linear_1185_2534)"/>
        <rect x="108.94" y="25.3609" width="2.70808" height="1.74451" transform="rotate(-90 108.94 25.3609)" fill="url(#paint2_linear_1185_2534)"/>
        <rect x="107.148" y="26.1161" width="4.21849" height="2.35626" transform="rotate(-90 107.148 26.1161)" fill="url(#paint3_linear_1185_2534)"/>
        <rect x="109.678" y="57.4409" width="2.70808" height="1.74451" transform="rotate(-90 109.678 57.4409)" fill="url(#paint4_linear_1185_2534)"/>
        <rect x="107.886" y="58.1962" width="4.21849" height="2.35626" transform="rotate(-90 107.886 58.1962)" fill="url(#paint5_linear_1185_2534)"/>
        <rect x="108.94" y="59.5502" width="2.70808" height="1.74451" transform="rotate(-90 108.94 59.5502)" fill="url(#paint6_linear_1185_2534)"/>
        <rect x="107.148" y="60.3054" width="4.21849" height="2.35626" transform="rotate(-90 107.148 60.3054)" fill="url(#paint7_linear_1185_2534)"/>
        
        <g filter="url(#filter0_diiii_1185_2534)">
        <rect x="41.1484" y="14.2174" width="67.1131" height="50.5437" fill="#795420"/>
        </g>
        <g filter="url(#filter1_f_1185_2534)">
        <circle cx="48.5084" cy="22.2208" r="1.75453" stroke="#43311E" stroke-width="0.5"/>
        </g>
        <circle cx="48.5081" cy="22.2208" r="1.78051" fill="#4E432D"/>
        <g filter="url(#filter2_f_1185_2534)">
        <circle cx="48.5084" cy="58.2208" r="1.75453" stroke="#43311E" stroke-width="0.5"/>
        </g>
        <circle cx="48.5081" cy="58.2208" r="1.78051" fill="#4E432D"/>
        <g filter="url(#filter3_f_1185_2534)">
        <circle cx="102.508" cy="58.2208" r="1.75453" stroke="#43311E" stroke-width="0.5"/>
        </g>
        
        <circle cx="102.508" cy="58.2208" r="1.78051" fill="#4E432D"/>
        <g filter="url(#filter4_ii_1185_2534)">
        <circle cx="102.33" cy="22.2208" r="4.56418" fill="#5A6970"/>
        </g>
        <g filter="url(#filter5_d_1185_2534)">
        <rect x="59.7754" y="15.0132" width="30.6536" height="49.7479" fill="#80633B"/>
        </g>
        <g filter="url(#filter6_d_1185_2534)">
        <rect x="69.6143" y="23.0152" width="10.9748" height="32.4926" fill="#D9D0C7"/>
        </g>
        <g filter="url(#filter7_ii_1185_2534)">
        <circle cx="75.0903" cy="39.2615" r="6.8491" fill="#5A6970"/>
        </g>
        
        <g filter="url(#filter8_d_1185_2534)">
        <rect x="85.1709" y="33.7813" width="1.41531" height="11.4965" rx="0.707655" fill="#D9D0C7"/>
        </g>
        <g style={dialStyle} ref={cockRef}>
        <g filter="url(#filter9_ii_1185_2534)" >
        <path d="M0.274414 39.9449C0.274414 38.503 1.42603 37.3251 2.86757 37.2925L85.6562 35.4205C87.3391 35.3824 88.724 36.7363 88.724 38.4197V40.5341C88.724 42.2042 87.3601 43.5528 85.6901 43.5339L2.89756 42.5979C1.44406 42.5815 0.274414 41.3985 0.274414 39.9449Z" fill="#202020"/>
        </g>
        <g filter="url(#filter10_ii_1185_2534)">
        <circle cx="75.0895" cy="39.2615" r="2.50258" fill="#5A6970"/>
        </g>
        <rect x="81.9395" y="37.3896" width="5.63028" height="4.3745" fill="url(#paint8_linear_1185_2534)"/>
        
        <g filter="url(#filter11_d_1185_2534)">
        <rect x="84.1885" y="37.3896" width="3.38133" height="4.3745" fill="url(#paint9_linear_1185_2534)"/>
        </g>
        </g>
        <g filter="url(#filter12_iiii_1185_2534)">
        <path d="M59.3359 15.0132L91.259 15.0132L91.259 3.935C91.259 2.27815 89.9158 0.935001 88.259 0.935001L62.3359 0.934996C60.6791 0.934996 59.3359 2.27814 59.3359 3.935L59.3359 15.0132Z" fill="#FBFBFB"/>
        </g>
        
        
        <g filter="url(#filter13_d_1185_2534)">
        <rect x="56.5156" y="13.7574" width="37.5628" height="1.25575" fill="#D9D9D9"/>
        </g>
        <g filter="url(#filter14_i_1185_2534)">
        <rect width="31.923" height="2.29268" transform="matrix(1 0 0 -1 59.3359 14.0806)" fill="#65AA8D"/>
        </g>
        <g filter="url(#filter15_ii_1185_2534)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M84.5897 15.0132C84.4015 15.0132 84.2211 15.0901 84.0877 15.2272L83.3797 15.9549C83.3226 16.0135 83.2905 16.0933 83.2905 16.1765C83.2905 16.3346 83.1761 16.4679 83.0242 16.4868L74.7875 17.5129C74.2094 17.585 73.7974 18.1275 73.8671 18.7248C73.9217 19.1933 73.65 19.6267 73.3533 19.9855C73.088 20.3064 72.9277 20.723 72.9277 21.1782C72.9277 22.1928 73.7237 23.0152 74.7055 23.0152C75.6874 23.0152 76.4833 22.1928 76.4833 21.1782C76.4833 20.5986 76.91 19.2809 77.4669 19.2115L83.3525 18.4783C83.6091 18.4463 83.8657 18.5376 84.0489 18.7259L84.0877 18.7657C84.2211 18.9028 84.4015 18.9798 84.5897 18.9798C84.9828 18.9798 85.3014 18.6505 85.3014 18.2442V15.7487C85.3014 15.3425 84.9828 15.0132 84.5897 15.0132Z" fill="#5A6970"/>
        </g>
        <g filter="url(#filter16_ii_1185_2534)">
        <path d="M73.2822 26.2241C73.2822 25.7956 73.5552 25.4147 73.961 25.2771L74.7812 24.9989C74.9895 24.9282 75.2153 24.9282 75.4236 24.9989L76.2438 25.2771C76.6496 25.4147 76.9225 25.7956 76.9225 26.2241V27.3459C76.9225 27.7744 76.6496 28.1552 76.2438 28.2929L75.4236 28.5711C75.2153 28.6418 74.9895 28.6418 74.7812 28.5711L73.961 28.2929C73.5552 28.1552 73.2822 27.7744 73.2822 27.3459V26.2241Z" fill="#5A6970"/>
        </g>
        <g filter="url(#filter17_ii_1185_2534)">
        <path d="M73.2822 51.5217C73.2822 51.0932 73.5552 50.7123 73.961 50.5747L74.7812 50.2965C74.9895 50.2258 75.2153 50.2258 75.4236 50.2965L76.2438 50.5747C76.6496 50.7123 76.9225 51.0932 76.9225 51.5217V52.6435C76.9225 53.072 76.6496 53.4528 76.2438 53.5905L75.4236 53.8687C75.2153 53.9394 74.9895 53.9394 74.7812 53.8687L73.961 53.5905C73.5552 53.4528 73.2822 53.072 73.2822 52.6435V51.5217Z" fill="#5A6970"/>
        </g>
        <defs>
        <filter id="filter0_diiii_1185_2534" x="37.1484" y="14.2174" width="75.1133" height="58.5437" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2534"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2534" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.179167 0 0 0 0 0.112967 0 0 0 0 0.0291146 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1185_2534"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.494118 0 0 0 0 0.376471 0 0 0 0 0.227451 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_1185_2534" result="effect3_innerShadow_1185_2534"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.225 0 0 0 0 0.14625 0 0 0 0 0.0675 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect3_innerShadow_1185_2534" result="effect4_innerShadow_1185_2534"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.633333 0 0 0 0 0.633333 0 0 0 0 0.633333 0 0 0 0.48 0"/>
        <feBlend mode="normal" in2="effect4_innerShadow_1185_2534" result="effect5_innerShadow_1185_2534"/>
        </filter>
        <filter id="filter1_f_1185_2534" x="46.0039" y="19.7163" width="5.00879" height="5.00905" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur_1185_2534"/>
        </filter>
        <filter id="filter2_f_1185_2534" x="46.0039" y="55.7163" width="5.00879" height="5.00905" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur_1185_2534"/>
        </filter>
        <filter id="filter3_f_1185_2534" x="100.004" y="55.7163" width="5.00879" height="5.00905" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur_1185_2534"/>
        </filter>
        <filter id="filter4_ii_1185_2534" x="97.7656" y="17.4566" width="9.12793" height="9.82836" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2534"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2534" result="effect2_innerShadow_1185_2534"/>
        </filter>
        <filter id="filter5_d_1185_2534" x="57.7754" y="14.0132" width="32.6533" height="51.7479" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2534"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2534" result="shape"/>
        </filter>
        <filter id="filter6_d_1185_2534" x="67.6143" y="22.0152" width="12.9746" height="34.4926" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2534"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2534" result="shape"/>
        </filter>
        <filter id="filter7_ii_1185_2534" x="68.2412" y="32.2124" width="13.6982" height="14.3982" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2534"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2534" result="effect2_innerShadow_1185_2534"/>
        </filter>
        <filter id="filter8_d_1185_2534" x="83.1709" y="32.7813" width="3.41504" height="13.4966" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2534"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2534" result="shape"/>
        </filter>
        <filter id="filter9_ii_1185_2534" x="0.274414" y="34.4197" width="88.4492" height="10.1144" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="3"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2534"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-2"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.170833 0 0 0 0 0.170833 0 0 0 0 0.170833 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2534" result="effect2_innerShadow_1185_2534"/>
        </filter>
        <filter id="filter10_ii_1185_2534" x="72.5869" y="36.5589" width="5.00488" height="5.70517" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2534"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2534" result="effect2_innerShadow_1185_2534"/>
        </filter>
        <filter id="filter11_d_1185_2534" x="80.1885" y="37.3896" width="11.3809" height="12.3745" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2534"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2534" result="shape"/>
        </filter>
        <filter id="filter12_iiii_1185_2534" x="57.3359" y="0.934998" width="35.9229" height="16.0782" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.733333 0 0 0 0 0.733333 0 0 0 0 0.733333 0 0 0 0.51 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2534"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.51 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2534" result="effect2_innerShadow_1185_2534"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.51 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_1185_2534" result="effect3_innerShadow_1185_2534"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.666667 0 0 0 0 0.666667 0 0 0 0 0.666667 0 0 0 0.51 0"/>
        <feBlend mode="normal" in2="effect3_innerShadow_1185_2534" result="effect4_innerShadow_1185_2534"/>
        </filter>
        <filter id="filter13_d_1185_2534" x="52.5156" y="11.7574" width="45.5625" height="9.25575" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.56 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2534"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2534" result="shape"/>
        </filter>
        <filter id="filter14_i_1185_2534" x="59.3359" y="11.7879" width="33.9229" height="2.29268" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.51 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2534"/>
        </filter>
        <filter id="filter15_ii_1185_2534" x="72.9277" y="14.8132" width="12.374" height="8.70204" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2534"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2534" result="effect2_innerShadow_1185_2534"/>
        </filter>
        <filter id="filter16_ii_1185_2534" x="73.2822" y="24.7459" width="3.64062" height="4.37822" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2534"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2534" result="effect2_innerShadow_1185_2534"/>
        </filter>
        <filter id="filter17_ii_1185_2534" x="73.2822" y="50.0435" width="3.64062" height="4.37822" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2534"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2534" result="effect2_innerShadow_1185_2534"/>
        </filter>
        <linearGradient id="paint0_linear_1185_2534" x1="112.386" y1="24.1239" x2="109.678" y2="24.1239" gradientUnits="userSpaceOnUse">
        <stop stop-color="#666664"/>
        <stop offset="0.525" stop-color="#D9D9D9"/>
        <stop offset="1" stop-color="#666664"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1185_2534" x1="112.104" y1="25.185" x2="107.886" y2="25.185" gradientUnits="userSpaceOnUse">
        <stop stop-color="#666664"/>
        <stop offset="0.525" stop-color="#D9D9D9"/>
        <stop offset="1" stop-color="#666664"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1185_2534" x1="111.649" y1="26.2332" x2="108.94" y2="26.2332" gradientUnits="userSpaceOnUse">
        <stop stop-color="#666664"/>
        <stop offset="0.525" stop-color="#D9D9D9"/>
        <stop offset="1" stop-color="#666664"/>
        </linearGradient>
        <linearGradient id="paint3_linear_1185_2534" x1="111.367" y1="27.2942" x2="107.148" y2="27.2942" gradientUnits="userSpaceOnUse">
        <stop stop-color="#666664"/>
        <stop offset="0.525" stop-color="#D9D9D9"/>
        <stop offset="1" stop-color="#666664"/>
        </linearGradient>
        <linearGradient id="paint4_linear_1185_2534" x1="112.386" y1="58.3132" x2="109.678" y2="58.3132" gradientUnits="userSpaceOnUse">
        <stop stop-color="#666664"/>
        <stop offset="0.525" stop-color="#D9D9D9"/>
        <stop offset="1" stop-color="#666664"/>
        </linearGradient>
        <linearGradient id="paint5_linear_1185_2534" x1="112.104" y1="59.3743" x2="107.886" y2="59.3743" gradientUnits="userSpaceOnUse">
        <stop stop-color="#666664"/>
        <stop offset="0.525" stop-color="#D9D9D9"/>
        <stop offset="1" stop-color="#666664"/>
        </linearGradient>
        <linearGradient id="paint6_linear_1185_2534" x1="111.649" y1="60.4224" x2="108.94" y2="60.4224" gradientUnits="userSpaceOnUse">
        <stop stop-color="#666664"/>
        <stop offset="0.525" stop-color="#D9D9D9"/>
        <stop offset="1" stop-color="#666664"/>
        </linearGradient>
        <linearGradient id="paint7_linear_1185_2534" x1="111.367" y1="61.4835" x2="107.148" y2="61.4835" gradientUnits="userSpaceOnUse">
        <stop stop-color="#666664"/>
        <stop offset="0.525" stop-color="#D9D9D9"/>
        <stop offset="1" stop-color="#666664"/>
        </linearGradient>
        <linearGradient id="paint8_linear_1185_2534" x1="87.5697" y1="39.5769" x2="81.9395" y2="39.5769" gradientUnits="userSpaceOnUse">
        <stop stop-color="#737373"/>
        <stop offset="0.49" stop-color="#D9D9D9"/>
        <stop offset="1" stop-color="#737373"/>
        </linearGradient>
        <linearGradient id="paint9_linear_1185_2534" x1="87.5698" y1="39.5769" x2="84.1885" y2="39.5769" gradientUnits="userSpaceOnUse">
        <stop stop-color="#737373"/>
        <stop offset="0.49" stop-color="#D9D9D9"/>
        <stop offset="1" stop-color="#737373"/>
        </linearGradient>
        </defs>
        </svg>
    </div>
  )
}
