import React, { useEffect, useRef } from 'react'
import { rotateFn } from '../../cab-replica/CabReplicate/CabUtility';
import { updateVIDData } from '../VIDUtility';

export default function CCBIsolationHandelOuter({width=50, height=50, data=0, valueKey=''}) {
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
                    rotateFn(handleRef,-90,prevDataRef);
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
                    rotateFn(handleRef,-90,prevDataRef);
                    updateVIDData(valueKey, 1);
                }
            }

  return (
    <div style={{width:width, height:height}} >
            <svg width="100%" height="100%" style={{cursor:"pointer"}} onClick={clickHandler} viewBox="0 0 167 228" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="52.8965" y="152.916" width="60.3961" height="18.766" fill="#686769"/>
            <rect x="52.8965" y="152.916" width="40.3848" height="18.766" fill="url(#paint0_linear_1324_4023)"/>
            <path d="M120.401 7.50099C120.401 3.63499 123.535 0.500977 127.401 0.500977H159.424C163.29 0.500977 166.424 3.63498 166.424 7.50098V164.683C166.424 168.549 163.29 171.683 159.424 171.683H127.401C123.535 171.683 120.401 168.549 120.401 164.683V7.50099Z" fill="url(#paint1_linear_1324_4023)"/>
            <path d="M127.207 0.500977C131.073 0.500977 134.207 3.63498 134.207 7.50098V164.683C134.207 168.549 131.073 171.683 127.207 171.683H109.725V165.991C109.725 161.573 106.143 157.991 101.725 157.991H63.7397C59.3215 157.991 55.7397 161.573 55.7397 165.991V171.683H38.2593C34.3933 171.683 31.2593 168.549 31.2593 164.683V7.50098C31.2593 3.63499 34.3933 0.500977 38.2593 0.500977H127.207Z" fill="#A4A3AC"/>
            <g filter="url(#filter0_ii_1324_4023)">
            <ellipse cx="45.0362" cy="14.6981" rx="6.2667" ry="8.73518" fill="#9E9990"/>
            </g>
            <g filter="url(#filter1_ii_1324_4023)">
            <path d="M46.6624 9.95996H43.4099C43.1211 9.95996 42.863 10.1402 42.7636 10.4113L41.2951 14.4149C41.2395 14.5665 41.2389 14.7329 41.2935 14.8848L42.7654 18.9803C42.8636 19.2536 43.1228 19.4359 43.4133 19.4359H46.6591C46.9495 19.4359 47.2087 19.2536 47.307 18.9803L48.7788 14.8848C48.8334 14.7329 48.8329 14.5665 48.7773 14.4149L47.3088 10.4113C47.2093 10.1402 46.9512 9.95996 46.6624 9.95996Z" fill="#979186"/>
            </g>
            <g filter="url(#filter2_ii_1324_4023)">
            <ellipse cx="120.463" cy="14.6981" rx="7.1703" ry="8.73518" fill="#9E9990"/>
            </g>
            <g filter="url(#filter3_ii_1324_4023)">
            <path d="M122.416 9.95996H118.51C118.233 9.95996 117.982 10.1263 117.875 10.382L116.195 14.3859C116.124 14.5547 116.123 14.7448 116.193 14.9141L117.877 19.0093C117.983 19.2674 118.234 19.4359 118.513 19.4359H122.413C122.692 19.4359 122.943 19.2674 123.049 19.0093L124.733 14.9141C124.803 14.7448 124.802 14.5547 124.731 14.3859L123.051 10.382C122.944 10.1263 122.693 9.95996 122.416 9.95996Z" fill="#979186"/>
            </g>
            <g filter="url(#filter4_ii_1324_4023)">
            <ellipse cx="43.6131" cy="148.689" rx="6.2667" ry="8.73518" fill="#9E9990"/>
            </g>
            <g filter="url(#filter5_ii_1324_4023)">
            <path d="M45.2393 143.951H41.9868C41.698 143.951 41.4399 144.131 41.3405 144.403L39.872 148.406C39.8164 148.558 39.8158 148.724 39.8704 148.876L41.3423 152.971C41.4405 153.245 41.6997 153.427 41.9902 153.427H45.236C45.5264 153.427 45.7856 153.245 45.8839 152.971L47.3557 148.876C47.4103 148.724 47.4098 148.558 47.3542 148.406L45.8857 144.403C45.7862 144.131 45.5281 143.951 45.2393 143.951Z" fill="#979186"/>
            </g>
            <g filter="url(#filter6_ii_1324_4023)">
            <ellipse cx="119.04" cy="148.689" rx="7.1703" ry="8.73518" fill="#9E9990"/>
            </g>

            <g filter="url(#filter7_ii_1324_4023)">
            <path d="M120.993 143.951H117.087C116.809 143.951 116.559 144.118 116.452 144.373L114.772 148.377C114.701 148.546 114.7 148.736 114.77 148.905L116.454 153C116.56 153.259 116.811 153.427 117.09 153.427H120.99C121.269 153.427 121.52 153.259 121.626 153L123.31 148.905C123.38 148.736 123.379 148.546 123.308 148.377L121.628 144.373C121.521 144.118 121.27 143.951 120.993 143.951Z" fill="#979186"/>
            </g>
            
            <g ref={handleRef} style={{transformOrigin:"35px 65px"}}>
            <path d="M45.0879 30.5908H58.8578L73.089 43.7461V56.9015V70.0568L58.8578 83.2121H44.9204L45.0879 30.5908Z" fill="url(#paint2_linear_1324_4023)"/>
            <path d="M19.7703 37.7064L45.0926 30.5908L59.3238 43.7461V56.9015V70.0568L45.0926 83.2121L19.7703 76.0965V37.7064Z" fill="#5B5962"/>
            <path d="M26.1726 30.5908H44.7735L56.4313 52.1439C58.037 55.1124 58.037 58.6905 56.4314 61.659L44.7735 83.2121H26.1726L14.5147 61.659C12.9091 58.6905 12.9091 55.1124 14.5147 52.1439L26.1726 30.5908Z" fill="url(#paint3_linear_1324_4023)"/>
            
            <g filter="url(#filter8_i_1324_4023)">
            <path d="M14.6726 30.5908H33.2735L44.9313 52.1439C46.537 55.1124 46.537 58.6905 44.9314 61.659L33.2735 83.2121H14.6726L3.01472 61.659C1.40909 58.6905 1.40909 55.1124 3.01472 52.1439L14.6726 30.5908Z" fill="#767676"/>
            </g>
            <g filter="url(#filter9_i_1324_4023)">
            <path d="M34.1943 161.486L49.5176 169.587C61.2454 175.787 69.1371 187.397 70.585 200.584L70.6631 201.298C72.2183 208.381 71.4851 215.775 68.5693 222.414L68.2695 223.097H20.9551V83.2119H34.1943V161.486Z" fill="#767676"/>
            </g>
            <path d="M31.4666 162.947L46.1443 170.91C57.705 177.182 65.4649 188.934 66.864 202.012C68.3316 208.871 67.6382 216.017 64.8787 222.466L64.6082 223.097H20.0144V83.2119H31.4666V162.947Z" fill="#767676"/>
            <g filter="url(#filter10_i_1324_4023)">
            <rect x="14.6816" y="83.2119" width="5.33269" height="139.884" fill="#767676"/>
            </g>
            <g filter="url(#filter11_i_1324_4023)">
            <path d="M14.6816 223.098H68.2935L64.0241 227.411H18.951L14.6816 223.098Z" fill="#767676"/>
            </g>
            <g filter="url(#filter12_i_1324_4023)">
            <path d="M18.951 227.411H20.0143V223.096H14.6816L18.951 227.411Z" fill="#767676"/>
            </g>
            </g>

            <defs>
            <filter id="filter0_ii_1324_4023" x="38.7695" y="5.27445" width="12.5334" height="18.5034" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="0.344223"/>
            <feGaussianBlur stdDeviation="0.60239"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_4023"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-0.688446"/>
            <feGaussianBlur stdDeviation="0.344223"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_innerShadow_1324_4023" result="effect2_innerShadow_1324_4023"/>
            </filter>
            <filter id="filter1_ii_1324_4023" x="40.2529" y="8.95996" width="10.5664" height="12.4756" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-1" dy="-1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.59 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_4023"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_innerShadow_1324_4023" result="effect2_innerShadow_1324_4023"/>
            </filter>
            <filter id="filter2_ii_1324_4023" x="113.293" y="5.27445" width="14.3406" height="18.5034" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="0.344223"/>
            <feGaussianBlur stdDeviation="0.60239"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_4023"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-0.688446"/>
            <feGaussianBlur stdDeviation="0.344223"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_innerShadow_1324_4023" result="effect2_innerShadow_1324_4023"/>
            </filter>
            <filter id="filter3_ii_1324_4023" x="115.141" y="8.95996" width="11.6438" height="12.4756" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-1" dy="-1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.59 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_4023"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_innerShadow_1324_4023" result="effect2_innerShadow_1324_4023"/>
            </filter>
            <filter id="filter4_ii_1324_4023" x="37.3464" y="139.266" width="12.5334" height="18.5034" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="0.344223"/>
            <feGaussianBlur stdDeviation="0.60239"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_4023"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-0.688446"/>
            <feGaussianBlur stdDeviation="0.344223"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_innerShadow_1324_4023" result="effect2_innerShadow_1324_4023"/>
            </filter>
            <filter id="filter5_ii_1324_4023" x="38.8298" y="142.951" width="10.5664" height="12.4756" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-1" dy="-1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.59 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_4023"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_innerShadow_1324_4023" result="effect2_innerShadow_1324_4023"/>
            </filter>
            <filter id="filter6_ii_1324_4023" x="111.87" y="139.266" width="14.3406" height="18.5034" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="0.344223"/>
            <feGaussianBlur stdDeviation="0.60239"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_4023"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-0.688446"/>
            <feGaussianBlur stdDeviation="0.344223"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_innerShadow_1324_4023" result="effect2_innerShadow_1324_4023"/>
            </filter>
            <filter id="filter7_ii_1324_4023" x="113.718" y="142.951" width="11.6438" height="12.4756" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-1" dy="-1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.59 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_4023"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_innerShadow_1324_4023" result="effect2_innerShadow_1324_4023"/>
            </filter>
            <filter id="filter8_i_1324_4023" x="-1.18945" y="30.5908" width="47.325" height="52.6211" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-3"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.56 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_4023"/>
            </filter>
            <filter id="filter9_i_1324_4023" x="20.4551" y="83.2119" width="51.0049" height="139.885" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-0.5"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.56 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_4023"/>
            </filter>
            <filter id="filter10_i_1324_4023" x="11.6816" y="83.2119" width="8.33276" height="139.884" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-3"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.56 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_4023"/>
            </filter>
            <filter id="filter11_i_1324_4023" x="14.6816" y="222.098" width="53.6118" height="5.31348" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.56 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_4023"/>
            </filter>
            <filter id="filter12_i_1324_4023" x="11.6816" y="223.096" width="8.33276" height="4.31543" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-3"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.56 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1324_4023"/>
            </filter>
            <linearGradient id="paint0_linear_1324_4023" x1="73.0889" y1="152.916" x2="73.0889" y2="171.682" gradientUnits="userSpaceOnUse">
            <stop stop-color="#535358"/>
            <stop offset="1" stop-color="#93929C"/>
            </linearGradient>
            <linearGradient id="paint1_linear_1324_4023" x1="143.412" y1="0.500977" x2="143.412" y2="171.683" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4B4C55"/>
            <stop offset="0.163574" stop-color="#73747C"/>
            <stop offset="0.873844" stop-color="#83848D"/>
            <stop offset="1" stop-color="#4B4C55"/>
            </linearGradient>
            <linearGradient id="paint2_linear_1324_4023" x1="59.0047" y1="30.5908" x2="59.0047" y2="83.2121" gradientUnits="userSpaceOnUse">
            <stop stop-color="#3F3E45"/>
            <stop offset="0.282012" stop-color="#848188"/>
            <stop offset="0.810968" stop-color="#848188"/>
            <stop offset="1" stop-color="#3F3E45"/>
            </linearGradient>
            <linearGradient id="paint3_linear_1324_4023" x1="35.473" y1="30.5908" x2="35.473" y2="83.2121" gradientUnits="userSpaceOnUse">
            <stop stop-color="#1E1E1E"/>
            <stop offset="0.490385" stop-color="#373737"/>
            <stop offset="1" stop-color="#1E1E1E"/>
            </linearGradient>
            </defs>
            </svg>
    </div>
  )
}
