import React, { useEffect, useRef, useState } from 'react'
import { updateVIDData } from '../VIDUtility';

export default function ParkingBrake({width="4rem", height="4rem", data, valueKey}) {
  const brakeApply=useRef(null);
  const brakeRelease=useRef(null);
 const [apply, setApply]=useState(data?.apply||0);
 const [release, setRelease]=useState(data?.release||0)

  useEffect(()=>{
    if(data?.apply===0)
    {
      brakeApply.current?.setAttribute("transform", "translate(0,0)");
    }
    else if(data?.apply===1)
      {
        brakeApply.current?.setAttribute("transform", "translate(5,0)");
      }
       if (data?.release===1)
        {
          brakeRelease.current?.setAttribute("transform", "translate(-3,0)");
        }
    else if (data?.release===0)
    {
      brakeRelease.current?.setAttribute("transform", "translate(0,0)");
    }
  },[data?.apply, data?.release]);

  const applyBrake=()=>{
    if(apply===0&&release===0)
    {
      setApply(1);
      brakeApply.current?.setAttribute("transform", "translate(5,0)");
       updateVIDData(valueKey?.apply, 1);
    }
    else if(apply===1)
    {
      brakeApply.current?.setAttribute("transform", "translate(0,0)");
      setApply(0);
      updateVIDData(valueKey?.apply, 0);
    }
  }

  const releaseBrake=()=>{
    if(release===0&&apply===0)
    {
      brakeRelease.current?.setAttribute("transform", "translate(-3,0)");
      setRelease(1);
      updateVIDData(valueKey?.release, 1);
    }
    else if (release===1)
    {
      brakeRelease.current?.setAttribute("transform", "translate(0,0)");
      setRelease(0);
      updateVIDData(valueKey?.release, 0);
    }
  }
  return (
    <div style={{width:width, height:height}}>
        <svg  width="100%" height="100%" preserveAspectRatio='none' viewBox="0 0 103 71" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g ref={brakeApply} 
        >
        <rect x="0.5" y="28.3687" width="6.7937" height="11.0229" rx="0.0795176" transform="rotate(-90 0.5 28.3687)" fill="url(#paint0_linear_1185_2010)"/>
        <rect x="0.5" y="28.9611" width="7.97834" height="1.96908" rx="0.0795176" transform="rotate(-90 0.5 28.9611)" fill="url(#paint1_linear_1185_2010)"/>
        </g>
      
      <g ref={brakeRelease}>
        <rect width="6.7937" height="11.0229" rx="0.0795176" transform="matrix(-1.02065e-07 -1 -1 9.6712e-08 100.63 29.3687)" fill="url(#paint2_linear_1185_2010)"/>
        <rect width="7.97834" height="1.96908" rx="0.0795176" transform="matrix(-1.02065e-07 -1 -1 9.6712e-08 100.63 29.9611)" fill="url(#paint3_linear_1185_2010)"/>
      </g>
        
        <g filter="url(#filter0_d_1185_2010)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M85.9816 14.8523H15.7812V69.25H85.9816V14.8523ZM81.9655 56.3909C82.8356 56.3909 83.541 55.6855 83.541 54.8154C83.541 53.9453 82.8356 53.2399 81.9655 53.2399C81.0954 53.2399 80.39 53.9453 80.39 54.8154C80.39 55.6855 81.0954 56.3909 81.9655 56.3909Z" fill="#6B491C"/>
        </g>
        <g filter="url(#filter1_ii_1185_2010)">
        <circle cx="20.5768" cy="54.102" r="3.83852" fill="#5A6970"/>
        </g>
        <path d="M15.7812 15.1538H85.9815L86.9032 13.03H16.7029L15.7812 15.1538Z" fill="#3C2305"/>
        <g filter="url(#filter2_iii_1185_2010)">
        <rect x="36.5312" y="17.1377" width="30.39" height="15.1572" rx="0.5" fill="#6B491C"/>
        </g>
        <rect x="36.5312" y="17.1377" width="30.39" height="15.1572" rx="0.5" fill="url(#paint4_linear_1185_2010)"/>
        <g filter="url(#filter3_d_1185_2010)">
        <rect x="7.48242" y="18.1934" width="9.02798" height="13.557" fill="#6B491C"/>
        </g>
        <circle cx="11.5216" cy="24.8741" r="0.847769" fill="url(#paint5_linear_1185_2010)"/>
        <path d="M7.48242 18.1934H16.3934L16.5104 17.1377H7.59941L7.48242 18.1934Z" fill="#3C2305"/>
        <g filter="url(#filter4_d_1185_2010)">
        <rect x="85.7969" y="18.1934" width="9.02798" height="13.557" fill="#6B491C"/>
        </g>
        <path d="M85.7969 18.1934H94.7079L94.8249 17.1377H85.9139L85.7969 18.1934Z" fill="#3C2305"/>
        <g filter="url(#filter5_d_1185_2010)">
        <rect x="24.5293" y="35.2391" width="15.914" height="33.0997" fill="#6B491C"/>
        </g>
        
        <g filter="url(#filter6_ii_1185_2010)">
        <circle cx="33.2269" cy="63.3006" r="3.30498" fill="#B2ADA5"/>
        </g>
        <g filter="url(#filter7_ii_1185_2010)">
        <circle cx="33.2269" cy="42.3204" r="3.30498" fill="#B2ADA5"/>
        </g>
        <path d="M24.46 35.2391H40.2363L40.4434 34.2771H24.6671L24.46 35.2391Z" fill="#3C2305"/>
        <g filter="url(#filter8_d_1185_2010)">
        <rect x="61.543" y="35.2391" width="16.8935" height="33.0997" fill="#6B491C"/>
        </g>
        <g filter="url(#filter9_ii_1185_2010)">
        <circle cx="70.2269" cy="42.3204" r="3.30498" fill="#B2ADA5"/>
        </g>
        <g filter="url(#filter10_ii_1185_2010)">
        <circle cx="70.2269" cy="63.3006" r="3.30498" fill="#B2ADA5"/>
        </g>
        <path d="M61.4365 35.2391H85.6638L85.9819 34.2771H61.7546L61.4365 35.2391Z" fill="#3C2305"/>
        <g filter="url(#filter11_ii_1185_2010)">
        <rect width="10.1147" height="6.48527" rx="0.691648" transform="matrix(0.995295 0.0968947 -0.0632047 0.998001 77.2461 6.3365)" fill="#202020"/>
        </g>
        <g filter="url(#filter12_i_1185_2010)">
        <circle cx="82.3687" cy="10.2426" r="2.42921" transform="rotate(93.5185 82.3687 10.2426)" fill="#202020"/>
        </g>
        <g filter="url(#filter13_i_1185_2010)">
        <circle cx="82.368" cy="10.2426" r="2.15149" transform="rotate(93.5185 82.368 10.2426)" fill="#202020"/>
        </g>
        <g filter="url(#filter14_dii_1185_2010)">
        <rect width="11.1819" height="1.59947" rx="0.691648" transform="matrix(0.995295 0.0968947 0.0632047 -0.998001 76.2471 13.6829)" fill="#202020"/>
        </g>
        <g filter="url(#filter15_dii_1185_2010)">
        <rect width="13.6886" height="3.62019" rx="0.691648" transform="matrix(0.995295 0.0968947 0.0632047 -0.998001 74.791 16.8462)" fill="#202020"/>
        </g>
        <g filter="url(#filter16_d_1185_2010)">
        <ellipse cx="9.59444" cy="9.65178" rx="9.59444" ry="9.65178" transform="matrix(0.995295 0.0968947 -0.0632047 0.998001 72.2393 15.9741)" fill="#E6DED8"/>
        </g>
        <ellipse cx="9.48563" cy="9.54232" rx="9.48563" ry="9.54232" transform="matrix(0.995295 0.0968947 -0.0632047 0.998001 72.3438 16.0538)" fill="#271E15"/>
        <g filter="url(#filter17_dii_1185_2010)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M90.1642 18.6054C90.1878 18.2333 89.9121 17.9095 89.5409 17.8733L74.053 16.3655C73.6637 16.3276 73.3204 16.6198 73.2957 17.0102L72.9662 22.2132C72.4737 23.233 72.1662 24.37 72.0892 25.5849C71.7683 30.6513 75.5799 35.1548 80.6025 35.6437C85.6251 36.1327 89.9569 32.422 90.2777 27.3556C90.3549 26.1367 90.1929 24.9503 89.8324 23.8446L90.1642 18.6054Z" fill="#E6DED8"/>
        </g>
        <g filter="url(#filter18_ii_1185_2010)">
        <rect width="10.1147" height="6.48527" rx="0.691648" transform="matrix(-0.983809 0.179222 0.145873 0.989303 27.1865 4.80425)" fill="#202020"/>
        </g>
        <g filter="url(#filter19_i_1185_2010)">
        <circle cx="2.42921" cy="2.42921" r="2.42921" transform="matrix(0.144055 0.98957 0.98957 -0.144055 19.6523 7.06835)" fill="#202020"/>
        </g>
        <g filter="url(#filter20_i_1185_2010)">
        <circle cx="2.15149" cy="2.15149" r="2.15149" transform="matrix(0.144055 0.98957 0.98957 -0.144055 19.9668 7.30316)" fill="#202020"/>
        </g>
        <g filter="url(#filter21_dii_1185_2010)">
        <rect width="11.1819" height="1.59947" rx="0.691648" transform="matrix(-0.983809 0.179222 -0.145873 -0.989303 28.793 12.0423)" fill="#202020"/>
        </g>
        <g filter="url(#filter22_dii_1185_2010)">
        <rect width="13.6886" height="3.62019" rx="0.691648" transform="matrix(-0.983809 0.179222 -0.145873 -0.989303 30.5059 15.0738)" fill="#202020"/>
        </g>
        <g filter="url(#filter23_d_1185_2010)">
        <ellipse cx="9.59444" cy="9.65178" rx="9.59444" ry="9.65178" transform="matrix(-0.983809 0.179222 0.145873 0.989303 32.9766 13.9928)" fill="#E6DED8"/>
        </g>
        <ellipse cx="9.48563" cy="9.54232" rx="9.48563" ry="9.54232" transform="matrix(-0.983809 0.179222 0.145873 0.989303 32.8799 14.0808)" fill="#271E15"/>
        <g filter="url(#filter24_dii_1185_2010)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3324 18.1036C15.278 17.7347 15.5258 17.3891 15.8927 17.3223L31.2019 14.5334C31.5867 14.4633 31.953 14.726 32.0101 15.113L32.7706 20.2706C33.3461 21.2459 33.747 22.3535 33.9246 23.5578C34.6651 28.58 31.2408 33.3845 26.2761 34.2889C21.3115 35.1934 16.6865 31.8552 15.946 26.833C15.7678 25.6247 15.8307 24.429 16.0982 23.2972L15.3324 18.1036Z" fill="#E6DED8"/>
        </g>

        <g filter="url(#filter25_ii_1185_2010)">
        <rect x="41.8789" y="40.5043" width="18.122" height="20.1676" rx="0.944422" fill="#0F0F0F"/>
        </g>
        <g filter="url(#filter26_ii_1185_2010)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M56.771 41.0362C56.771 40.5146 56.3482 40.0917 55.8266 40.0917L46.0528 40.0917C45.5312 40.0917 45.1084 40.5146 45.1084 41.0362V43.6849C45.1084 44.2769 44.6285 44.7568 44.0365 44.7568H41.3878C40.8662 44.7568 40.4434 45.1796 40.4434 45.7012V55.475C40.4434 55.9966 40.8662 56.4194 41.3878 56.4194H44.0365C44.6285 56.4194 45.1084 56.8993 45.1084 57.4913V60.14C45.1084 60.6616 45.5312 61.0844 46.0528 61.0844L55.8266 61.0844C56.3482 61.0844 56.771 60.6616 56.771 60.14V57.4913C56.771 56.8993 57.2509 56.4194 57.8429 56.4194H60.4916C61.0132 56.4194 61.436 55.9966 61.436 55.475V45.7012C61.436 45.1796 61.0132 44.7568 60.4916 44.7568H57.8429C57.2509 44.7568 56.771 44.2769 56.771 43.6849V41.0362Z" fill="#0F0F0F"/>
        </g>
        <g filter="url(#filter27_f_1185_2010)">
        <circle cx="50.9402" cy="51.2789" r="5.73703" fill="black"/>
        </g>
        <g filter="url(#filter28_ii_1185_2010)">
        <circle cx="50.9394" cy="51.8128" r="5.2031" fill="#141615"/>
        </g>
        <g filter="url(#filter29_f_1185_2010)">
        <circle cx="50.9394" cy="51.8128" r="5.09591" stroke="#232323" stroke-width="0.214376"/>
        </g>
        <g filter="url(#filter30_ii_1185_2010)">
        <circle cx="50.9401" cy="51.8129" r="3.23304" fill="#212121"/>
        </g>
        <g filter="url(#filter31_ii_1185_2010)">
        <circle cx="43.4754" cy="42.4645" r="0.52713" fill="#B2ADA5"/>
        </g>
        <g filter="url(#filter32_ii_1185_2010)">
        <circle cx="43.4754" cy="59.2555" r="0.52713" fill="#B2ADA5"/>
        </g>
        <g filter="url(#filter33_ii_1185_2010)">
        <circle cx="58.5965" cy="42.4645" r="0.52713" fill="#B2ADA5"/>
        </g>
        <g filter="url(#filter34_ii_1185_2010)">
        <circle cx="58.5965" cy="59.2555" r="0.52713" fill="#B2ADA5"/>
        </g>

        <foreignObject x={0} y={15} width={20} height={20} >
            <div style={{width:"100%", height:20, cursor:"pointer"}}
            onClick={()=>{
              applyBrake();
            }}
            ></div>
        </foreignObject>

        <foreignObject x={85} y={15} width={20} height={20}>
            <div style={{width:"100%", height:20, cursor:"pointer"}}
            onClick={()=>{
              releaseBrake();
            }}
            ></div>
        </foreignObject>

        <defs>
        <filter id="filter0_d_1185_2010" x="14.9813" y="13.8523" width="72.2002" height="56.3977" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="0.2"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.225 0 0 0 0 0.14625 0 0 0 0 0.0675 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2010"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2010" result="shape"/>
        </filter>
        <filter id="filter1_ii_1185_2010" x="16.7383" y="50.0634" width="7.67676" height="8.37705" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2010" result="effect2_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter2_iii_1185_2010" x="34.5312" y="16.1377" width="35.3896" height="18.1572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="3" dy="2"/>
        <feGaussianBlur stdDeviation="3.65"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.116667 0 0 0 0 0.0731597 0 0 0 0 0.0296528 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-2" dy="-1"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.286275 0 0 0 0 0.109804 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2010" result="effect2_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.41 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_1185_2010" result="effect3_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter3_d_1185_2010" x="6.68242" y="17.1934" width="11.0283" height="15.557" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="0.2"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.225 0 0 0 0 0.14625 0 0 0 0 0.0675 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2010"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2010" result="shape"/>
        </filter>
        <filter id="filter4_d_1185_2010" x="84.9969" y="17.1934" width="11.0283" height="15.557" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="0.2"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.225 0 0 0 0 0.14625 0 0 0 0 0.0675 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2010"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2010" result="shape"/>
        </filter>
        <filter id="filter5_d_1185_2010" x="23.7293" y="34.2391" width="17.9141" height="35.0997" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="0.2"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.225 0 0 0 0 0.14625 0 0 0 0 0.0675 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2010"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2010" result="shape"/>
        </filter>
        <filter id="filter6_ii_1185_2010" x="29.9219" y="59.7956" width="6.61035" height="7.30996" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2010" result="effect2_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter7_ii_1185_2010" x="29.9219" y="38.8154" width="6.61035" height="7.30996" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2010" result="effect2_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter8_d_1185_2010" x="60.743" y="34.2391" width="18.8936" height="35.0997" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="0.2"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.225 0 0 0 0 0.14625 0 0 0 0 0.0675 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2010"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2010" result="shape"/>
        </filter>
        <filter id="filter9_ii_1185_2010" x="66.9219" y="38.8154" width="6.61035" height="7.30996" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2010" result="effect2_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter10_ii_1185_2010" x="66.9219" y="59.7956" width="6.61035" height="7.30996" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2010" result="effect2_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter11_ii_1185_2010" x="76.1873" y="6.40022" width="11.7749" height="7.32492" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-1.3833"/>
        <feGaussianBlur stdDeviation="0.345824"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="1.3833"/>
        <feGaussianBlur stdDeviation="0.345824"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.170833 0 0 0 0 0.170833 0 0 0 0 0.170833 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2010" result="effect2_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter12_i_1185_2010" x="79.9395" y="7.81333" width="4.8584" height="6.24187" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1.3833"/>
        <feGaussianBlur stdDeviation="0.691648"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter13_i_1185_2010" x="80.2168" y="8.09105" width="4.30273" height="5.68643" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1.3833"/>
        <feGaussianBlur stdDeviation="0.691648"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter14_dii_1185_2010" x="73.5225" y="10.0754" width="16.6797" height="8.08549" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.691648"/>
        <feGaussianBlur stdDeviation="1.3833"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.2875 0 0 0 0 0.2875 0 0 0 0 0.2875 0 0 0 0.51 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2010"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2010" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.691648"/>
        <feGaussianBlur stdDeviation="0.345824"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.354167 0 0 0 0 0.354167 0 0 0 0 0.354167 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.691648"/>
        <feGaussianBlur stdDeviation="0.345824"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0916667 0 0 0 0 0.0916667 0 0 0 0 0.0916667 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_1185_2010" result="effect3_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter15_dii_1185_2010" x="72.0664" y="11.2221" width="19.3017" height="10.345" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.691648"/>
        <feGaussianBlur stdDeviation="1.3833"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.2875 0 0 0 0 0.2875 0 0 0 0 0.2875 0 0 0 0.51 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2010"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2010" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.691648"/>
        <feGaussianBlur stdDeviation="0.345824"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.425 0 0 0 0 0.425 0 0 0 0 0.425 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.691648"/>
        <feGaussianBlur stdDeviation="0.345824"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0916667 0 0 0 0 0.0916667 0 0 0 0 0.0916667 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_1185_2010" result="effect3_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter16_d_1185_2010" x="68.8428" y="14.0918" width="24.6719" height="24.889" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="1.3833"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.158333 0 0 0 0 0.0402431 0 0 0 0 0.0402431 0 0 0 0.82 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2010"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2010" result="shape"/>
        </filter>
        <filter id="filter17_dii_1185_2010" x="69.3037" y="13.5956" width="23.7597" height="24.858" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="1.3833"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.158333 0 0 0 0 0.0402431 0 0 0 0 0.0402431 0 0 0 0.82 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2010"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2010" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.691648"/>
        <feGaussianBlur stdDeviation="0.345824"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.94 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-0.345824" dy="0.345824"/>
        <feGaussianBlur stdDeviation="0.691648"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.63 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_1185_2010" result="effect3_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter18_ii_1185_2010" x="16.6375" y="4.91695" width="12.0933" height="8.00328" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-1.3833"/>
        <feGaussianBlur stdDeviation="0.345824"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="1.3833"/>
        <feGaussianBlur stdDeviation="0.345824"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.170833 0 0 0 0 0.170833 0 0 0 0 0.170833 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2010" result="effect2_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter19_i_1185_2010" x="19.9766" y="6.69275" width="4.85938" height="6.24235" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1.3833"/>
        <feGaussianBlur stdDeviation="0.691648"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter20_i_1185_2010" x="20.2539" y="6.9705" width="4.30371" height="5.68685" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1.3833"/>
        <feGaussianBlur stdDeviation="0.691648"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter21_dii_1185_2010" x="14.8858" y="8.49766" width="16.5801" height="8.8942" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.691648"/>
        <feGaussianBlur stdDeviation="1.3833"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.2875 0 0 0 0 0.2875 0 0 0 0 0.2875 0 0 0 0.51 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2010"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2010" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.691648"/>
        <feGaussianBlur stdDeviation="0.345824"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.354167 0 0 0 0 0.354167 0 0 0 0 0.354167 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.691648"/>
        <feGaussianBlur stdDeviation="0.345824"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0916667 0 0 0 0 0.0916667 0 0 0 0 0.0916667 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_1185_2010" result="effect3_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter22_dii_1185_2010" x="13.8379" y="9.53006" width="19.3408" height="11.3425" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.691648"/>
        <feGaussianBlur stdDeviation="1.3833"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.2875 0 0 0 0 0.2875 0 0 0 0 0.2875 0 0 0 0.51 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2010"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2010" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.691648"/>
        <feGaussianBlur stdDeviation="0.345824"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.425 0 0 0 0 0.425 0 0 0 0 0.425 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.691648"/>
        <feGaussianBlur stdDeviation="0.345824"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0916667 0 0 0 0 0.0916667 0 0 0 0 0.0916667 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_1185_2010" result="effect3_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter23_d_1185_2010" x="12.6338" y="12.7905" width="24.623" height="24.9408" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="1.3833"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.158333 0 0 0 0 0.0402431 0 0 0 0 0.0402431 0 0 0 0.82 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2010"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2010" result="shape"/>
        </filter>
        <filter id="filter24_dii_1185_2010" x="12.5586" y="11.7555" width="24.2334" height="25.4479" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="1.3833"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.158333 0 0 0 0 0.0402431 0 0 0 0 0.0402431 0 0 0 0.82 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1185_2010"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1185_2010" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.691648"/>
        <feGaussianBlur stdDeviation="0.345824"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.94 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-0.345824" dy="0.345824"/>
        <feGaussianBlur stdDeviation="0.691648"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.63 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_1185_2010" result="effect3_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter25_ii_1185_2010" x="40.9345" y="40.5043" width="20.0109" height="20.1676" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-1.88884"/>
        <feGaussianBlur stdDeviation="0.472211"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="1"/>
        <feGaussianBlur stdDeviation="0.472211"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.170833 0 0 0 0 0.170833 0 0 0 0 0.170833 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2010" result="effect2_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter26_ii_1185_2010" x="39.4989" y="40.0917" width="22.4735" height="20.9927" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-1.88884"/>
        <feGaussianBlur stdDeviation="0.472211"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="0.53594"/>
        <feGaussianBlur stdDeviation="0.472211"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.170833 0 0 0 0 0.170833 0 0 0 0 0.170833 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2010" result="effect2_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter27_f_1185_2010" x="44.6672" y="45.0059" width="12.5455" height="12.5459" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.26797" result="effect1_foregroundBlur_1185_2010"/>
        </filter>
        <filter id="filter28_ii_1185_2010" x="45.2004" y="46.6097" width="11.4781" height="10.4062" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-0.53594"/>
        <feGaussianBlur stdDeviation="0.472211"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="0.53594"/>
        <feGaussianBlur stdDeviation="0.472211"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.170833 0 0 0 0 0.170833 0 0 0 0 0.170833 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2010" result="effect2_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter29_f_1185_2010" x="45.2004" y="46.0738" width="11.4781" height="11.4781" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.26797" result="effect1_foregroundBlur_1185_2010"/>
        </filter>
        <filter id="filter30_ii_1185_2010" x="47.707" y="47.5079" width="6.46582" height="8.60984" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-1.07188"/>
        <feGaussianBlur stdDeviation="1.07188"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1.07188"/>
        <feGaussianBlur stdDeviation="1.07188"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.170833 0 0 0 0 0.170833 0 0 0 0 0.170833 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2010" result="effect2_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter31_ii_1185_2010" x="42.9482" y="41.7373" width="1.05469" height="1.75426" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2010" result="effect2_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter32_ii_1185_2010" x="42.9482" y="58.5284" width="1.05469" height="1.75426" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2010" result="effect2_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter33_ii_1185_2010" x="58.0693" y="41.7373" width="1.05469" height="1.75426" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2010" result="effect2_innerShadow_1185_2010"/>
        </filter>
        <filter id="filter34_ii_1185_2010" x="58.0693" y="58.5284" width="1.05469" height="1.75426" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.5"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1185_2010"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.2"/>
        <feGaussianBlur stdDeviation="0.1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1185_2010" result="effect2_innerShadow_1185_2010"/>
        </filter>
        <linearGradient id="paint0_linear_1185_2010" x1="7.2937" y1="33.8802" x2="0.5" y2="33.8802" gradientUnits="userSpaceOnUse">
        <stop stop-color="#504131"/>
        <stop offset="0.095" stop-color="#9A9794"/>
        <stop offset="0.361144" stop-color="white"/>
        <stop offset="0.53" stop-color="white"/>
        <stop offset="0.83" stop-color="#9A9794"/>
        <stop offset="0.945" stop-color="#504131"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1185_2010" x1="8.47834" y1="29.9456" x2="0.5" y2="29.9456" gradientUnits="userSpaceOnUse">
        <stop stop-color="#504131"/>
        <stop offset="0.095" stop-color="#9A9794"/>
        <stop offset="0.361144" stop-color="white"/>
        <stop offset="0.53" stop-color="white"/>
        <stop offset="0.83" stop-color="#9A9794"/>
        <stop offset="0.945" stop-color="#504131"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1185_2010" x1="6.7937" y1="5.51144" x2="-3.13496e-08" y2="5.51144" gradientUnits="userSpaceOnUse">
        <stop stop-color="#504131"/>
        <stop offset="0.095" stop-color="#9A9794"/>
        <stop offset="0.361144" stop-color="white"/>
        <stop offset="0.53" stop-color="white"/>
        <stop offset="0.83" stop-color="#9A9794"/>
        <stop offset="0.945" stop-color="#504131"/>
        </linearGradient>
        <linearGradient id="paint3_linear_1185_2010" x1="7.97834" y1="0.984533" x2="-3.68162e-08" y2="0.984533" gradientUnits="userSpaceOnUse">
        <stop stop-color="#504131"/>
        <stop offset="0.095" stop-color="#9A9794"/>
        <stop offset="0.361144" stop-color="white"/>
        <stop offset="0.53" stop-color="white"/>
        <stop offset="0.83" stop-color="#9A9794"/>
        <stop offset="0.945" stop-color="#504131"/>
        </linearGradient>
        <linearGradient id="paint4_linear_1185_2010" x1="51.7263" y1="17.1377" x2="51.7263" y2="32.2949" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFA600"/>
        <stop offset="0.0582281" stop-color="#412B11" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint5_linear_1185_2010" x1="12.3694" y1="24.8741" x2="10.6738" y2="24.8741" gradientUnits="userSpaceOnUse">
        <stop stop-color="#504131"/>
        <stop offset="0.095" stop-color="#9A9794"/>
        <stop offset="0.361144" stop-color="white"/>
        <stop offset="0.53" stop-color="white"/>
        <stop offset="0.83" stop-color="#9A9794"/>
        <stop offset="0.945" stop-color="#504131"/>
        </linearGradient>
        </defs>
        </svg>
    </div>
  )
}
