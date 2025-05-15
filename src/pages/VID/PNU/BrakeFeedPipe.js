import React, { useEffect, useRef, useState } from 'react'
import { rotateFn } from '../../cab-replica/CabReplicate/CabUtility';
import { updateVIDData } from '../VIDUtility';

export default function BrakeFeedPipe({width="7rem", height="3rem", data, valueKey}) {
  const [initialX, setInitialX]=useState(0);
  const [isDragging, setIsDragging]=useState(false);
  const svgRef=useRef(null);
  const prevDataRef=useRef(data);
  const [pos, setPos]=useState(data);

  // useEffect(()=>{
  //   if(data===0)
  //   {
  //     rotateFn(svgRef,0, prevDataRef)
  //   }
  //   else if(data===1)
  //   {
  //     rotateFn(svgRef,130, prevDataRef)
  //   }
  // },[data])

  // const onMouseDown=(event)=>{
  //   setInitialX(event.clientX);
  //   setIsDragging(true);
  // }

  // const onMouseUp=()=>{
  //   setIsDragging(false);
  // }
  // const onMouseMove=(event)=>{
  //   if(!isDragging)
  //   {
  //     return;
  //   }
  //   const currentX=event.clientX;
  //   if(currentX>initialX)
  //   {
  //     rotateFn(svgRef,0, prevDataRef);
  //     setPos(0);
  //   }
  //   else
  //   {
  //     rotateFn(svgRef,130, prevDataRef);
  //     setPos(1);
  //   }

  // }

  const dialStyle={
    transformOrigin:"100px 10px",
    cursor:"pointer"
  };

  // useEffect(()=>{
  //   const svg=svgRef.current;
  //   svg.addEventListener("mousedown", onMouseDown);
  //   svg.addEventListener("mousemove", onMouseMove);
  //   svg.addEventListener("mouseup", onMouseUp);
  //   svg.addEventListener("mouseleave", onMouseUp);
  //   return()=>{
  //     svg.removeEventListener("mousedown", onMouseDown)
  //     svg.removeEventListener("mousemove", onMouseMove);
  //     svg.removeEventListener("mouseup", onMouseUp);
  //     svg.removeEventListener("mouseleave", onMouseUp);
  //   }
  // },[isDragging, initialX])

    const clickHandler=()=>{
      if(pos===1)
      {
        setPos(0);
        updateVIDData(valueKey, 0);
      }
      else if (pos===0)
      {
        setPos(1);
        updateVIDData(valueKey, 1);
      }
    }

  return (
    <div style={{width:width, height:height, cursor:"pointer"}} onClick={clickHandler}>
        {pos===1?
        <svg width="100%" height="100%" preserveAspectRatio='none' viewBox="0 0 204 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="17.4023" y="31.8197" width="185.86" height="11.6148" fill="#645C4F"/>
<path d="M16.5875 17.3445L14.6719 19.1087L15.9623 21.9148H18.3895L23.3867 21.6835L24.6775 19.1019L22.7594 17.3445H16.5875Z" fill="#3D3D3D"/>
<rect x="16.583" y="20.855" width="6.17557" height="4.1274" fill="#A6A6A6"/>
<path d="M24.6729 19.1021L22.7584 20.8549V24.9823L24.6729 23.2295V19.1021Z" fill="#8E8E8E"/>
<path d="M14.6689 19.1024L16.5834 20.8551V24.9825L14.6689 23.2298V19.1024Z" fill="#8E8E8E"/>
<path d="M17.9385 16.5485H21.3987V19.4895C21.3987 19.8121 21.1372 20.0737 20.8145 20.0737H18.5227C18.2001 20.0737 17.9385 19.8121 17.9385 19.4895V16.5485Z" fill="url(#paint0_linear_1194_11575)"/>
<ellipse cx="19.6686" cy="16.5485" rx="1.73013" ry="0.430555" fill="#5C5C5C"/>
<path d="M179.132 17.3445L177.217 19.1087L178.507 21.9148H180.934L185.932 21.6835L187.222 19.1019L185.304 17.3445H179.132Z" fill="#3D3D3D"/>
<rect x="179.128" y="20.855" width="6.17557" height="4.1274" fill="#A6A6A6"/>
<path d="M187.218 19.1021L185.303 20.8549V24.9823L187.218 23.2295V19.1021Z" fill="#8E8E8E"/>
<path d="M177.214 19.1024L179.128 20.8551V24.9825L177.214 23.2298V19.1024Z" fill="#8E8E8E"/>
<path d="M180.483 16.5485H183.944V19.4895C183.944 19.8121 183.682 20.0737 183.359 20.0737H181.068C180.745 20.0737 180.483 19.8121 180.483 19.4895V16.5485Z" fill="url(#paint1_linear_1194_11575)"/>
<ellipse cx="182.214" cy="16.5485" rx="1.73013" ry="0.430555" fill="#5C5C5C"/>
<path d="M17.4023 31.8197L0.136042 14.3974V26.0123L17.4023 43.4345V31.8197Z" fill="#2A1B06"/>
<path d="M17.3957 31.8197H203.256L185.996 14.4244H0.135742L17.3957 31.8197Z" fill="#3B372B"/>
<path d="M23.8063 17.3443L21.8906 19.1085L23.1811 21.9146H25.6083L30.6054 21.6833L31.8962 19.1016L29.9782 17.3443H23.8063Z" fill="#3D3D3D"/>
<rect x="23.8018" y="20.8548" width="6.17557" height="4.1274" fill="#A6A6A6"/>
<path d="M31.8916 19.1019L29.9771 20.8546V24.982L31.8916 23.2293V19.1019Z" fill="#8E8E8E"/>
<path d="M21.8877 19.1021L23.8022 20.8549V24.9823L21.8877 23.2295V19.1021Z" fill="#8E8E8E"/>
<path d="M25.1572 16.5483H28.6175V19.4892C28.6175 19.8119 28.3559 20.0735 28.0332 20.0735H25.7415C25.4188 20.0735 25.1572 19.8119 25.1572 19.4892V16.5483Z" fill="url(#paint2_linear_1194_11575)"/>
<ellipse cx="26.8874" cy="16.5483" rx="1.73013" ry="0.430555" fill="#5C5C5C"/>
<path d="M175.854 17.3443L173.938 19.1085L175.229 21.9146H177.656L182.653 21.6833L183.944 19.1016L182.026 17.3443H175.854Z" fill="#3D3D3D"/>
<rect x="175.85" y="20.8548" width="6.17557" height="4.1274" fill="#A6A6A6"/>
<path d="M183.939 19.1019L182.025 20.8546V24.982L183.939 23.2293V19.1019Z" fill="#8E8E8E"/>
<path d="M173.936 19.1021L175.85 20.8549V24.9823L173.936 23.2295V19.1021Z" fill="#8E8E8E"/>
<path d="M177.205 16.5483H180.665V19.4892C180.665 19.8119 180.404 20.0735 180.081 20.0735H177.789C177.467 20.0735 177.205 19.8119 177.205 19.4892V16.5483Z" fill="url(#paint3_linear_1194_11575)"/>
<ellipse cx="178.935" cy="16.5483" rx="1.73013" ry="0.430555" fill="#5C5C5C"/>
<ellipse cx="101.695" cy="23.8246" rx="25.2742" ry="7.25928" fill="#0B1200"/>
<rect x="76.4209" y="17.5762" width="3.18728" height="6.5213" fill="#0B1200"/>
<rect x="123.558" y="17.5762" width="3.41129" height="6.5213" fill="#0B1200"/>
<ellipse cx="101.695" cy="17.9526" rx="25.2742" ry="7.25928" fill="#242819"/>
<g filter="url(#filter0_d_1194_11575)">
<ellipse cx="101.696" cy="18.608" rx="19.1127" ry="5.48957" fill="#0B1200"/>
<rect x="82.583" y="13.8828" width="2.41027" height="4.9315" fill="#0B1200"/>
<rect x="118.227" y="13.8828" width="2.57967" height="4.9315" fill="#0B1200"/>
<ellipse cx="101.696" cy="14.1675" rx="19.1127" ry="5.48957" fill="#242819"/>
</g>



<g filter="url(#filter1_d_1194_11575)" style={dialStyle} ref={svgRef}>
<path d="M88.7246 12.1049L107.696 9.91611L170.57 32.7621L153.59 38.0363L88.7246 12.1049Z" fill="#242819"/>
<ellipse cx="103.747" cy="7.19801" rx="1.73013" ry="0.430555" fill="#5C5C5C"/>
<path d="M153.319 39.625L170.561 34.0433V32.7651L153.58 38.0394L153.319 39.625Z" fill="#474C38"/>
<path d="M88.7246 12.106V14.0491L153.319 39.63L153.589 38.0362L88.7246 12.106Z" fill="#0B1200"/>
</g>
<path d="M100.666 7.99405L98.75 9.75821L100.04 12.5643H102.468L107.465 12.333L108.756 9.75136L106.838 7.99405H100.666Z" fill="#3D3D3D"/>

<rect x="100.661" y="11.5045" width="6.17557" height="4.1274" fill="#A6A6A6"/>
<path d="M108.751 9.75165L106.836 11.5044V15.6318L108.751 13.879V9.75165Z" fill="#8E8E8E"/>
<path d="M98.7471 9.75189L100.662 11.5046V15.632L98.7471 13.8793V9.75189Z" fill="#8E8E8E"/>
<path d="M102.017 7.19803H105.477V10.139C105.477 10.4616 105.215 10.7232 104.893 10.7232H102.601C102.278 10.7232 102.017 10.4616 102.017 10.139V7.19803Z" fill="url(#paint4_linear_1194_11575)"/>

<defs>
<filter id="filter0_d_1194_11575" x="76.7756" y="2.8705" width="49.8404" height="27.0345" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="2.90371"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1194_11575"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1194_11575" result="shape"/>
</filter>
<filter id="filter1_d_1194_11575" x="82.9172" y="0.960035" width="93.4605" height="44.4774" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="2.90371"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.67 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1194_11575"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1194_11575" result="shape"/>
</filter>
<linearGradient id="paint0_linear_1194_11575" x1="21.3987" y1="18.3111" x2="17.9385" y2="18.3111" gradientUnits="userSpaceOnUse">
<stop stop-color="#4C4C4C"/>
<stop offset="0.514423" stop-color="#9A9A9A"/>
<stop offset="1" stop-color="#4C4C4C"/>
</linearGradient>
<linearGradient id="paint1_linear_1194_11575" x1="183.944" y1="18.3111" x2="180.483" y2="18.3111" gradientUnits="userSpaceOnUse">
<stop stop-color="#4C4C4C"/>
<stop offset="0.514423" stop-color="#9A9A9A"/>
<stop offset="1" stop-color="#4C4C4C"/>
</linearGradient>
<linearGradient id="paint2_linear_1194_11575" x1="28.6175" y1="18.3109" x2="25.1572" y2="18.3109" gradientUnits="userSpaceOnUse">
<stop stop-color="#4C4C4C"/>
<stop offset="0.514423" stop-color="#9A9A9A"/>
<stop offset="1" stop-color="#4C4C4C"/>
</linearGradient>
<linearGradient id="paint3_linear_1194_11575" x1="180.665" y1="18.3109" x2="177.205" y2="18.3109" gradientUnits="userSpaceOnUse">
<stop stop-color="#4C4C4C"/>
<stop offset="0.514423" stop-color="#9A9A9A"/>
<stop offset="1" stop-color="#4C4C4C"/>
</linearGradient>
<linearGradient id="paint4_linear_1194_11575" x1="105.477" y1="8.96062" x2="102.017" y2="8.96062" gradientUnits="userSpaceOnUse">
<stop stop-color="#4C4C4C"/>
<stop offset="0.514423" stop-color="#9A9A9A"/>
<stop offset="1" stop-color="#4C4C4C"/>
</linearGradient>
</defs>
        </svg>:
        <svg width="100%" height="100%" preserveAspectRatio='none' viewBox="0 0 204 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="18.0225" y="31.4167" width="185.86" height="11.6148" fill="#645C4F"/>
        <path d="M17.2077 16.9415L15.292 18.7057L16.5824 21.5118H19.0096L24.0068 21.2805L25.2976 18.6989L23.3796 16.9415H17.2077Z" fill="#3D3D3D"/>
        <rect x="17.2031" y="20.452" width="6.17557" height="4.1274" fill="#A6A6A6"/>
        <path d="M25.293 18.6991L23.3785 20.4519V24.5793L25.293 22.8265V18.6991Z" fill="#8E8E8E"/>
        <path d="M15.2891 18.6994L17.2036 20.4521V24.5795L15.2891 22.8268V18.6994Z" fill="#8E8E8E"/>
        <path d="M18.5586 16.1455H22.0188V19.0864C22.0188 19.4091 21.7573 19.6707 21.4346 19.6707H19.1428C18.8202 19.6707 18.5586 19.4091 18.5586 19.0864V16.1455Z" fill="url(#paint0_linear_1219_129649)"/>
        <ellipse cx="20.2887" cy="16.1455" rx="1.73013" ry="0.430555" fill="#5C5C5C"/>
        <path d="M179.753 16.9415L177.837 18.7057L179.127 21.5118H181.555L186.552 21.2805L187.842 18.6989L185.924 16.9415H179.753Z" fill="#3D3D3D"/>
        <rect x="179.748" y="20.452" width="6.17557" height="4.1274" fill="#A6A6A6"/>
        <path d="M187.838 18.6991L185.923 20.4519V24.5793L187.838 22.8265V18.6991Z" fill="#8E8E8E"/>
        <path d="M177.834 18.6994L179.748 20.4521V24.5795L177.834 22.8268V18.6994Z" fill="#8E8E8E"/>
        <path d="M181.104 16.1455H184.564V19.0864C184.564 19.4091 184.302 19.6707 183.98 19.6707H181.688C181.365 19.6707 181.104 19.4091 181.104 19.0864V16.1455Z" fill="url(#paint1_linear_1219_129649)"/>
        <ellipse cx="182.834" cy="16.1455" rx="1.73013" ry="0.430555" fill="#5C5C5C"/>
        <path d="M18.0225 31.4167L0.756159 13.9944V25.6093L18.0225 43.0315V31.4167Z" fill="#2A1B06"/>
        <path d="M18.0158 31.4167H203.876L186.616 14.0214H0.755859L18.0158 31.4167Z" fill="#3B372B"/>
        <path d="M24.4264 16.9413L22.5107 18.7054L23.8012 21.5116H26.2284L31.2255 21.2802L32.5163 18.6986L30.5983 16.9413H24.4264Z" fill="#3D3D3D"/>
        <rect x="24.4219" y="20.4517" width="6.17557" height="4.1274" fill="#A6A6A6"/>
        <path d="M32.5117 18.6989L30.5972 20.4516V24.579L32.5117 22.8263V18.6989Z" fill="#8E8E8E"/>
        <path d="M22.5078 18.6991L24.4223 20.4519V24.5793L22.5078 22.8265V18.6991Z" fill="#8E8E8E"/>
        <path d="M25.7773 16.1453H29.2376V19.0862C29.2376 19.4089 28.976 19.6704 28.6533 19.6704H26.3616C26.0389 19.6704 25.7773 19.4089 25.7773 19.0862V16.1453Z" fill="url(#paint2_linear_1219_129649)"/>
        <ellipse cx="27.5075" cy="16.1452" rx="1.73013" ry="0.430555" fill="#5C5C5C"/>
        <path d="M176.474 16.9413L174.559 18.7054L175.849 21.5116H178.276L183.273 21.2802L184.564 18.6986L182.646 16.9413H176.474Z" fill="#3D3D3D"/>
        <rect x="176.47" y="20.4517" width="6.17557" height="4.1274" fill="#A6A6A6"/>
        <path d="M184.56 18.6989L182.645 20.4516V24.579L184.56 22.8263V18.6989Z" fill="#8E8E8E"/>
        <path d="M174.556 18.6991L176.47 20.4519V24.5793L174.556 22.8265V18.6991Z" fill="#8E8E8E"/>
        <path d="M177.825 16.1453H181.285V19.0862C181.285 19.4089 181.024 19.6704 180.701 19.6704H178.409C178.087 19.6704 177.825 19.4089 177.825 19.0862V16.1453Z" fill="url(#paint3_linear_1219_129649)"/>
        <ellipse cx="179.555" cy="16.1452" rx="1.73013" ry="0.430555" fill="#5C5C5C"/>
        <ellipse cx="25.2742" cy="7.25928" rx="25.2742" ry="7.25928" transform="matrix(-1 0 0 1 131.451 16.1623)" fill="#0B1200"/>
        <rect width="3.18728" height="6.5213" transform="matrix(-1 0 0 1 131.451 17.1732)" fill="#0B1200"/>
        <rect width="3.41129" height="6.5213" transform="matrix(-1 0 0 1 84.3145 17.1732)" fill="#0B1200"/>
        <ellipse cx="25.2742" cy="7.25928" rx="25.2742" ry="7.25928" transform="matrix(-1 0 0 1 131.451 10.2903)" fill="#242819"/>
        <g filter="url(#filter0_d_1219_129649)">
        <ellipse cx="19.1127" cy="5.48957" rx="19.1127" ry="5.48957" transform="matrix(-1 0 0 1 125.289 12.7154)" fill="#0B1200"/>
        <rect width="2.41027" height="4.9315" transform="matrix(-1 0 0 1 125.289 13.4798)" fill="#0B1200"/>
        <rect width="2.57967" height="4.9315" transform="matrix(-1 0 0 1 89.6455 13.4798)" fill="#0B1200"/>
        <ellipse cx="19.1127" cy="5.48957" rx="19.1127" ry="5.48957" transform="matrix(-1 0 0 1 125.289 8.27489)" fill="#242819"/>
        </g>
        <g filter="url(#filter1_d_1219_129649)">
        <path d="M119.147 11.7019L100.176 9.5131L37.302 32.3591L54.2825 37.6333L119.147 11.7019Z" fill="#242819"/>
        <path d="M107.206 7.59102L109.122 9.35518L107.832 12.1613H105.404L100.407 11.93L99.1165 9.34833L101.035 7.59102H107.206Z" fill="#3D3D3D"/>
        <rect width="6.17557" height="4.1274" transform="matrix(-1 0 0 1 107.211 11.1015)" fill="#A6A6A6"/>
        <path d="M99.1211 9.34859L101.036 11.1013V15.2287L99.1211 13.476V9.34859Z" fill="#8E8E8E"/>
        <path d="M109.125 9.34885L107.211 11.1016V15.229L109.125 13.4762V9.34885Z" fill="#8E8E8E"/>
        <path d="M105.855 6.79499H102.395V9.73592C102.395 10.0586 102.657 10.3202 102.979 10.3202H105.271C105.594 10.3202 105.855 10.0586 105.855 9.73592V6.79499Z" fill="url(#paint4_linear_1219_129649)"/>
        <ellipse cx="1.73013" cy="0.430555" rx="1.73013" ry="0.430555" transform="matrix(-1 0 0 1 105.855 6.36442)" fill="#5C5C5C"/>
        <path d="M54.5527 39.2219L37.3111 33.6403V32.3621L54.2916 37.6364L54.5527 39.2219Z" fill="#474C38"/>
        <path d="M119.147 11.7029V13.6461L54.5533 39.227L54.2826 37.6332L119.147 11.7029Z" fill="#0B1200"/>
        </g>
        <defs>
        <filter id="filter0_d_1219_129649" x="81.2561" y="2.46747" width="49.8404" height="27.0344" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="2.90371"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1219_129649"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1219_129649" result="shape"/>
        </filter>
        <filter id="filter1_d_1219_129649" x="31.4943" y="0.556997" width="93.4605" height="44.4774" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="2.90371"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.67 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1219_129649"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1219_129649" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_1219_129649" x1="22.0188" y1="17.9081" x2="18.5586" y2="17.9081" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4C4C4C"/>
        <stop offset="0.514423" stop-color="#9A9A9A"/>
        <stop offset="1" stop-color="#4C4C4C"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1219_129649" x1="184.564" y1="17.9081" x2="181.104" y2="17.9081" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4C4C4C"/>
        <stop offset="0.514423" stop-color="#9A9A9A"/>
        <stop offset="1" stop-color="#4C4C4C"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1219_129649" x1="29.2376" y1="17.9079" x2="25.7773" y2="17.9079" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4C4C4C"/>
        <stop offset="0.514423" stop-color="#9A9A9A"/>
        <stop offset="1" stop-color="#4C4C4C"/>
        </linearGradient>
        <linearGradient id="paint3_linear_1219_129649" x1="181.285" y1="17.9079" x2="177.825" y2="17.9079" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4C4C4C"/>
        <stop offset="0.514423" stop-color="#9A9A9A"/>
        <stop offset="1" stop-color="#4C4C4C"/>
        </linearGradient>
        <linearGradient id="paint4_linear_1219_129649" x1="102.395" y1="8.55758" x2="105.855" y2="8.55758" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4C4C4C"/>
        <stop offset="0.514423" stop-color="#9A9A9A"/>
        <stop offset="1" stop-color="#4C4C4C"/>
        </linearGradient>
        </defs>
        </svg>
}        

    </div>
  )
}
