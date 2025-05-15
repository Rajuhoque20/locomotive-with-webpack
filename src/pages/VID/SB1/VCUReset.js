import React, { useEffect, useState } from 'react'
import { updateVIDData } from '../VIDUtility';

export default function VCUReset({data}) {
    const [isActive,setIsActive]=useState(true);

    useEffect(()=>{
        setIsActive(data?true:false);
    },[data])

  return (
    <svg width="100%" height="100%" viewBox="0 0 46 103" fill="none">
<g filter="url(#filter0_ddii_729_234885)">
<rect x="3.4541" y="24.1587" width="38.656" height="38.656" rx="19.328" fill="url(#paint0_linear_729_234885)"/>
</g>
<g filter="url(#filter1_d_729_234885)">
<rect x="6.41797" y="27.1223" width="32.7288" height="32.7288" rx="16.3644" fill="url(#paint1_linear_729_234885)"/>
</g>
<g filter="url(#filter2_d_729_234885)">
<rect x="6.41797" y="27.1223" width="32.7288" height="32.7288" rx="16.3644" fill="url(#pattern0_729_234885)" shape-rendering="crispEdges"/>
<rect x="6.41797" y="27.1223" width="32.7288" height="32.7288" rx="16.3644" fill="#9F7C00" style={{mixBlendMode:"multiply"}} shape-rendering="crispEdges"/>
</g>
<foreignObject x="5.06403" y="25.7694" width="35.4344" height="35.4347" 
onClick={()=>{
    updateVIDData("vcu_reset", isActive?0:1);
}} 
style={{cursor:"pointer"}}
>
    <div  style={{backdropFilter:"blur(0.68px)", clipPath:"url(#bgblur_0_729_234885_clip_path)", height:"100%",width:"100%", }}>
     </div>
</foreignObject>
<circle data-figma-bg-blur-radius="1.35296" cx="22.7814" cy="43.4867" r="16.2511" fill="url(#paint2_linear_729_234885)" stroke="url(#paint3_linear_729_234885)" stroke-width="0.226497"/>

<g 
    onClick={()=>{
        updateVIDData("vcu_reset", isActive?0:1);
    }} 
   style={{cursor:"pointer"}}
    >
<g filter="url(#filter4_f_729_234885)">
<circle cx="22.7817" cy="43.4867" r="13.9899" stroke="url(#paint4_linear_729_234885)" stroke-width="1.35296"/>
</g>
<circle cx="22.7814" cy="43.4867" r="14.1398" fill="url(#paint5_radial_729_234885)"/>
<g filter="url(#filter5_f_729_234885)">
<circle cx="22.7814" cy="43.4867" r="13.9235" stroke="#2D2D2D" stroke-width="0.432539"/>
</g>
<rect x="8.76953" y="29.4741" width="28.0253" height="28.0253" rx="14.0127" fill={`url(${isActive?"#paint6_linear_729_234900":"#paint6_linear_729_234885"})`}/>
<g filter="url(#filter6_f_729_234885)">
<rect x="9.02914" y="29.7335" width="27.5065" height="27.5065" rx="13.6261" stroke="url(#paint7_linear_729_234885)" stroke-width="0.773121"/>
</g>
</g>

<g filter="url(#filter7_iii_729_234885)">
<rect x="29.2148" y="67.6465" width="34.8656" height="12.8656" rx="2.09273" transform="rotate(90 29.2148 67.6465)" fill="url(#paint8_linear_729_234885)"/>
<rect x="29.2148" y="67.6465" width="34.8656" height="12.8656" rx="2.09273" transform="rotate(90 29.2148 67.6465)" fill="#1E1E1E" fill-opacity="0.7"/>
<path d="M21.2523 96.2193L25.2822 97.7327L25.2822 98.4981L21.2523 100.017L21.2523 99.3099L24.6038 98.1154L21.2523 96.9151L21.2523 96.2193ZM23.2586 95.8869C22.8643 95.8869 22.5106 95.796 22.1975 95.6143C21.8844 95.4288 21.6408 95.1795 21.4669 94.8663C21.2891 94.5494 21.2001 94.2034 21.2001 93.8284C21.2001 93.3994 21.3065 93.0186 21.5191 92.6861C21.7278 92.3498 22.0255 92.1063 22.412 91.9556L22.412 92.7499C22.1994 92.8543 22.0409 92.9993 21.9365 93.1848C21.8322 93.3704 21.78 93.5849 21.78 93.8284C21.78 94.0952 21.8399 94.3329 21.9597 94.5416C22.0796 94.7504 22.2516 94.9147 22.4758 95.0345C22.7 95.1505 22.9609 95.2085 23.2586 95.2085C23.5562 95.2085 23.8172 95.1505 24.0414 95.0345C24.2656 94.9147 24.4395 94.7504 24.5632 94.5416C24.6831 94.3329 24.743 94.0952 24.743 93.8284C24.743 93.5849 24.6908 93.3704 24.5864 93.1848C24.482 92.9993 24.3236 92.8543 24.1109 92.7499L24.1109 91.9556C24.4975 92.1063 24.7952 92.3498 25.0039 92.6861C25.2126 93.0186 25.317 93.3994 25.317 93.8284C25.317 94.2073 25.23 94.5532 25.0561 94.8663C24.8783 95.1795 24.6328 95.4288 24.3197 95.6143C24.0066 95.796 23.6529 95.8869 23.2586 95.8869ZM21.2523 90.5266L23.821 90.5266C24.1264 90.5266 24.3564 90.4474 24.511 90.2889C24.6657 90.1265 24.743 89.9023 24.743 89.6163C24.743 89.3263 24.6657 89.1021 24.511 88.9436C24.3564 88.7813 24.1264 88.7001 23.821 88.7001L21.2523 88.7001L21.2523 88.0391L23.8094 88.0391C24.138 88.0391 24.4163 88.1106 24.6444 88.2536C24.8725 88.3967 25.0426 88.588 25.1547 88.8277C25.2668 89.0673 25.3228 89.3321 25.3228 89.6221C25.3228 89.912 25.2668 90.1768 25.1547 90.4164C25.0426 90.6522 24.8725 90.8397 24.6444 90.9789C24.4163 91.118 24.138 91.1876 23.8094 91.1876L21.2523 91.1876L21.2523 90.5266ZM25.2822 83.579L23.6703 84.5067L23.6703 85.0112L25.2822 85.0112L25.2822 85.6722L21.2523 85.6722L21.2523 84.2806C21.2523 83.9713 21.3065 83.7104 21.4147 83.4978C21.5229 83.2813 21.6679 83.1209 21.8496 83.0165C22.0313 82.9083 22.2342 82.8542 22.4584 82.8542C22.7213 82.8542 22.9609 82.9315 23.1774 83.0861C23.39 83.2369 23.535 83.4707 23.6123 83.7877L25.2822 82.7904L25.2822 83.579ZM23.1426 85.0112L23.1426 84.2806C23.1426 84.0332 23.0808 83.8476 22.9571 83.7239C22.8334 83.5964 22.6671 83.5326 22.4584 83.5326C22.2497 83.5326 22.0873 83.5944 21.9713 83.7181C21.8515 83.8418 21.7916 84.0293 21.7916 84.2806L21.7916 85.0112L23.1426 85.0112ZM23.6065 79.0804C23.7263 79.0804 23.8346 79.0881 23.9312 79.1036L23.9312 81.5447C24.1863 81.5254 24.3912 81.4307 24.5458 81.2606C24.7005 81.0905 24.7778 80.8817 24.7778 80.6343C24.7778 80.2787 24.6289 80.0274 24.3313 79.8806L24.3313 79.1674C24.6251 79.264 24.8667 79.4399 25.0561 79.695C25.2416 79.9463 25.3344 80.2594 25.3344 80.6343C25.3344 80.9397 25.2668 81.2142 25.1315 81.4577C24.9923 81.6974 24.799 81.8868 24.5516 82.026C24.3004 82.1613 24.0104 82.2289 23.6819 82.2289C23.3533 82.2289 23.0653 82.1632 22.8179 82.0318C22.5666 81.8965 22.3734 81.709 22.2381 81.4693C22.1028 81.2258 22.0351 80.9475 22.0351 80.6343C22.0351 80.3328 22.1008 80.0642 22.2323 79.8284C22.3637 79.5926 22.5492 79.409 22.7889 79.2775C23.0247 79.1461 23.2972 79.0804 23.6065 79.0804ZM23.3977 79.7704C23.1542 79.7743 22.959 79.8612 22.8121 80.0313C22.6652 80.2014 22.5918 80.4121 22.5918 80.6633C22.5918 80.8914 22.6652 81.0866 22.8121 81.249C22.9551 81.4113 23.1503 81.508 23.3977 81.5389L23.3977 79.7704ZM25.3344 77.2702C25.3344 77.5214 25.29 77.7476 25.201 77.9486C25.1083 78.1457 24.9846 78.3023 24.83 78.4183C24.6715 78.5342 24.4956 78.5961 24.3023 78.6038L24.3023 77.9196C24.4376 77.908 24.5516 77.8442 24.6444 77.7283C24.7333 77.6084 24.7778 77.4596 24.7778 77.2818C24.7778 77.0962 24.743 76.9532 24.6734 76.8527C24.5999 76.7483 24.5072 76.6961 24.3951 76.6961C24.2752 76.6961 24.1863 76.7541 24.1283 76.8701C24.0704 76.9822 24.0066 77.1619 23.937 77.4093C23.8713 77.649 23.8075 77.8442 23.7456 77.995C23.6838 78.1457 23.5891 78.2772 23.4615 78.3893C23.334 78.4975 23.1658 78.5516 22.9571 78.5516C22.787 78.5516 22.6324 78.5014 22.4932 78.4009C22.3502 78.3004 22.2381 78.1573 22.1569 77.9718C22.0757 77.7824 22.0351 77.5659 22.0351 77.3224C22.0351 76.959 22.1279 76.6672 22.3134 76.4468C22.4951 76.2226 22.7445 76.1028 23.0614 76.0873L23.0614 76.7483C22.9184 76.7599 22.8044 76.8179 22.7193 76.9223C22.6343 77.0267 22.5918 77.1677 22.5918 77.3456C22.5918 77.5195 22.6246 77.6529 22.6903 77.7457C22.7561 77.8384 22.843 77.8848 22.9513 77.8848C23.0363 77.8848 23.1078 77.8539 23.1658 77.792C23.2238 77.7302 23.2702 77.6548 23.305 77.5659C23.3359 77.477 23.3765 77.3456 23.4267 77.1716C23.4886 76.9397 23.5524 76.7503 23.6181 76.6034C23.6799 76.4526 23.7727 76.3231 23.8964 76.2149C24.0201 76.1066 24.1844 76.0506 24.3893 76.0467C24.571 76.0467 24.7333 76.097 24.8763 76.1975C25.0194 76.298 25.1315 76.441 25.2126 76.6266C25.2938 76.8082 25.3344 77.0228 25.3344 77.2702ZM23.6065 72.4043C23.7263 72.4043 23.8346 72.412 23.9312 72.4275L23.9312 74.8686C24.1863 74.8493 24.3912 74.7546 24.5458 74.5845C24.7005 74.4144 24.7778 74.2057 24.7778 73.9583C24.7778 73.6026 24.6289 73.3514 24.3313 73.2045L24.3313 72.4913C24.6251 72.5879 24.8667 72.7638 25.0561 73.0189C25.2416 73.2702 25.3344 73.5833 25.3344 73.9583C25.3344 74.2636 25.2668 74.5381 25.1315 74.7816C24.9923 75.0213 24.799 75.2107 24.5516 75.3499C24.3004 75.4852 24.0104 75.5528 23.6819 75.5528C23.3533 75.5528 23.0653 75.4871 22.8179 75.3557C22.5666 75.2204 22.3734 75.0329 22.2381 74.7932C22.1028 74.5497 22.0351 74.2714 22.0351 73.9583C22.0351 73.6567 22.1008 73.3881 22.2323 73.1523C22.3637 72.9165 22.5492 72.7329 22.7889 72.6014C23.0247 72.47 23.2972 72.4043 23.6065 72.4043ZM23.3977 73.0943C23.1542 73.0982 22.959 73.1851 22.8121 73.3552C22.6652 73.5253 22.5918 73.736 22.5918 73.9872C22.5918 74.2153 22.6652 74.4105 22.8121 74.5729C22.9551 74.7352 23.1503 74.8319 23.3977 74.8628L23.3977 73.0943ZM22.6266 70.9826L24.3951 70.9826C24.5149 70.9826 24.6019 70.9555 24.656 70.9014C24.7063 70.8434 24.7314 70.7468 24.7314 70.6115L24.7314 70.2056L25.2822 70.2056L25.2822 70.7275C25.2822 71.0251 25.2126 71.2532 25.0735 71.4117C24.9343 71.5702 24.7082 71.6494 24.3951 71.6494L22.6266 71.6494L22.6266 72.0263L22.0873 72.0263L22.0873 71.6494L21.2929 71.6494L21.2929 70.9826L22.0873 70.9826L22.0873 70.2056L22.6266 70.2056L22.6266 70.9826Z" fill="white"/>
</g>
<defs>
<filter id="filter0_ddii_729_234885" x="0.361619" y="21.5816" width="44.8412" height="46.0007" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.67509"/>
<feGaussianBlur stdDeviation="1.54624"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0 0.172549 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_729_234885"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="0.128853" operator="erode" in="SourceAlpha" result="effect2_dropShadow_729_234885"/>
<feOffset dy="-0.901974"/>
<feGaussianBlur stdDeviation="0.901974"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0583333 0 0 0 0 0.0583333 0 0 0 0 0.0583333 0 0 0 0.72 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_729_234885" result="effect2_dropShadow_729_234885"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_729_234885" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.31936"/>
<feGaussianBlur stdDeviation="0.450987"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect3_innerShadow_729_234885"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.128853" dy="7.60235"/>
<feGaussianBlur stdDeviation="1.35296"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect3_innerShadow_729_234885" result="effect4_innerShadow_729_234885"/>
</filter>
<filter id="filter1_d_729_234885" x="2.42351" y="23.1279" width="40.7174" height="40.7177" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="2.57707" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_729_234885"/>
<feOffset/>
<feGaussianBlur stdDeviation="0.708694"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.72 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_729_234885"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_729_234885" result="shape"/>
</filter>
<filter id="filter2_d_729_234885" x="2.42351" y="23.1279" width="40.7174" height="40.7177" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="2.57707" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_729_234885"/>
<feOffset/>
<feGaussianBlur stdDeviation="0.708694"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.72 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_729_234885"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_729_234885" result="shape"/>
</filter>

<clipPath id="bgblur_0_729_234885_clip_path" transform="translate(-5.06403 -25.7694)"><circle cx="22.7814" cy="43.4867" r="16.2511"/>
</clipPath><filter id="filter4_f_729_234885" x="7.72867" y="28.4338" width="30.1061" height="30.1059" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.19328" result="effect1_foregroundBlur_729_234885"/>
</filter>
<filter id="filter5_f_729_234885" x="8.20906" y="28.9144" width="29.1444" height="29.1446" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.216269" result="effect1_foregroundBlur_729_234885"/>
</filter>
<filter id="filter6_f_729_234885" x="8.25602" y="28.9604" width="29.0524" height="29.0527" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.19328" result="effect1_foregroundBlur_729_234885"/>
</filter>
<filter id="filter7_iii_729_234885" x="13.7337" y="66.6001" width="17.5739" height="38.0048" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3.13909" dy="4.18546"/>
<feGaussianBlur stdDeviation="1.04636"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="multiply" in2="shape" result="effect1_innerShadow_729_234885"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-2.61591" dy="-1.04636"/>
<feGaussianBlur stdDeviation="2.19736"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.208333 0 0 0 0 0.208333 0 0 0 0 0.208333 0 0 0 1 0"/>
<feBlend mode="multiply" in2="effect1_innerShadow_729_234885" result="effect2_innerShadow_729_234885"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.523182" dy="3.13909"/>
<feGaussianBlur stdDeviation="1.04636"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.658333 0 0 0 0 0.658333 0 0 0 0 0.658333 0 0 0 0.25 0"/>
<feBlend mode="multiply" in2="effect2_innerShadow_729_234885" result="effect3_innerShadow_729_234885"/>
</filter>
<linearGradient id="paint0_linear_729_234885" x1="22.7821" y1="24.1587" x2="22.7821" y2="62.8147" gradientUnits="userSpaceOnUse">
<stop stop-color="#171717"/>
<stop offset="0.0325425" stop-color="#171717"/>
<stop offset="1" stop-color="#2B2B2D"/>
</linearGradient>


<linearGradient id="paint1_linear_729_234885" x1="24.8347" y1="11.9189" x2="1.65297" y2="45.0805" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stop-color="#131517"/>
</linearGradient>
<linearGradient id="paint2_linear_729_234885" x1="23.6809" y1="13.3596" x2="32.0724" y2="64.7419" gradientUnits="userSpaceOnUse">
<stop stop-color="#EDEDED" stop-opacity="0.24"/>
<stop offset="0.458333" stop-color="#262526" stop-opacity="0.68"/>
<stop offset="0.774091" stop-color="#161616" stop-opacity="0.11"/>
<stop offset="1" stop-color="#585659" stop-opacity="0.67"/>
</linearGradient>
<linearGradient id="paint3_linear_729_234885" x1="22.7814" y1="27.1223" x2="22.7814" y2="40.4565" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.994792"/>
</linearGradient>
<linearGradient id="paint4_linear_729_234885" x1="13.7688" y1="28.8203" x2="26.7679" y2="59.6335" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.46"/>
<stop offset="1" stop-color="#666666" stop-opacity="0.88"/>
</linearGradient>
<radialGradient id="paint5_radial_729_234885" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22.7814 43.8353) rotate(69.1066) scale(13.2925 13.2926)">
<stop stop-color="#2E3335"/>
<stop offset="1" stop-color="#1E2022"/>
</radialGradient>
<linearGradient id="paint6_linear_729_234885" x1="29.2075" y1="55.3876" x2="17.053" y2="31.0787" gradientUnits="userSpaceOnUse">
<stop stop-color="#A36E09"/>
<stop offset="1" stop-color="#FFC700"/>
</linearGradient>

<linearGradient id="paint6_linear_729_234900"  x1="29.2075" y1="55.3876" x2="17.053" y2="31.0787" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFC700"/>
<stop offset="1" stop-color="#000"/>
</linearGradient>

<linearGradient id="paint7_linear_729_234885" x1="30.4889" y1="32.0259" x2="14.8648" y2="54.8615" gradientUnits="userSpaceOnUse">
<stop stop-color="#EEDFAA"/>
<stop offset="1" stop-color="#29290C"/>
</linearGradient>
<linearGradient id="paint8_linear_729_234885" x1="21.7353" y1="77.8282" x2="54.0719" y2="57.982" gradientUnits="userSpaceOnUse">
<stop stop-color="#313131"/>
<stop offset="1" stop-color="#1D2021"/>
</linearGradient>
</defs>
</svg>
  )
}
