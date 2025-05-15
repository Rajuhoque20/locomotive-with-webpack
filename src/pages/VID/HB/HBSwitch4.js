import React, { useEffect, useRef, useState } from 'react'
import classes from './HB.module.css';
import { updateVIDData } from '../VIDUtility';
export const HBSwitch4WithDesc=({width="100%", height="100%",description, value, valueKey})=>{
    return(
        <div width={width} height={height} className='d-flex flex-col align-center justify-center' style={{maxWidth:width}}>
            <HBSwitch4 height='70%' width='100%' value={value} valueKey={valueKey}/>
            <div className={`${classes.description} ${'d-flex flex-col align-center justify-center'}`} style={{maxWidth:"100%", height:"35%", padding:"0.1rem",}}>
                <span>{description}</span>
            </div>
        </div>
    )
}

let isDragging=false, initialX=0, initialY=0;
export  function HBSwitch4({width="100%", height="100%", value=0, valueKey}) {
              const switchRef=useRef(null);
              const hasMoved = useRef(false);
              const [pos, setPos] = useState(value);
      
              useEffect(()=>{
                if(value===1)
                {
                    switchRef.current.setAttribute("transform", "rotate(0,66, 55)");
                }
                else
                {
                    switchRef.current.setAttribute("transform", "rotate(180,66, 55)")
                }
              },[value])
      
              const onMouseDown = (event) => {
                isDragging=true;
                initialX=event.clientX;
                initialY=event.clientY;
              };
            
              const moveDial = (currentY) => {
              
                  if (pos === 1&&currentY>initialY) {
                  setPos(0);
                  // moveFn(switchRef, 45, prevDataRef);
                  switchRef.current.setAttribute("transform", "rotate(180,66, 55)")
                  updateVIDData(valueKey, 0);
                } 
                else if (pos === 0&&currentY<initialY) {
                  setPos(1);
                  switchRef.current.setAttribute("transform", "rotate(0,66, 55)")
                  updateVIDData(valueKey, 1);
                }
              };
             
              const onMouseMove = (event) => {
                if (!isDragging || hasMoved.current) {
                  return;
                }
                hasMoved.current = true;
                const currentY = event.clientY;
                moveDial( currentY);
              };
        
              const onMouseUp = () => {
                isDragging=false;
                hasMoved.current = false;
              };
        
              useEffect(() => {
                const svg = switchRef.current;
                svg.addEventListener("mousedown", onMouseDown);
                svg.addEventListener("mousemove", onMouseMove);
                svg.addEventListener("mouseup", onMouseUp);
                svg.addEventListener("mouseleave", () => {
                  if (isDragging) onMouseUp();
                });
                
                return () => {
                  svg.removeEventListener("mousedown", onMouseDown);
                  svg.removeEventListener("mousemove", onMouseMove);
                  svg.removeEventListener("mouseup", onMouseUp);
                  svg.removeEventListener("mouseleave", () => {
                    if (isDragging) onMouseUp();
                  });
                };
              }, [isDragging, initialX, initialY]);

  return (
    <svg width={width} height={height} viewBox="0 0 118 116" fill="none">
<g filter="url(#filter0_i_749_262886)">
<rect width="13.25" height="26.6424" transform="matrix(1 0 0 -1 4.87207 115.099)" fill="#E3E3E3"/>
</g>
<rect x="4.87207" y="4.14062" width="13.25" height="22.0794" fill="#E3E3E3"/>
<g filter="url(#filter1_f_749_262886)">
<mask id="path-3-inside-1_749_262886" fill="white">
<path d="M4.87207 4.14062H18.1221V26.22H4.87207V4.14062Z"/>
</mask>
<path d="M4.87207 5.05038H18.1221V3.23087H4.87207V5.05038ZM18.1221 25.3103H4.87207V27.1298H18.1221V25.3103Z" fill="white" mask="url(#path-3-inside-1_749_262886)"/>
</g>
<rect width="13.906" height="23.4985" transform="matrix(1 0 0 -1 4.21582 53.2184)" fill="#F4F0F0"/>
<rect width="13.906" height="2.55311" transform="matrix(1 0 0 -1 4.21582 32.2731)" fill="#973749"/>
<g filter="url(#filter2_d_749_262886)">
<rect x="4.21582" y="53.2184" width="13.906" height="35.4242" fill="#F4F0F0"/>
</g>
<path d="M4.21582 29.72H18.1218V26.2201H4.87183L4.21582 29.72Z" fill="#CDCDCD"/>
<path d="M4.87207 4.14062H18.1221V0.909002H5.92169L4.87207 4.14062Z" fill="#F4F0F0"/>

<g filter="url(#filter3_i_749_262886)">
<rect x="7.22461" y="48.4644" width="7.73721" height="18.2969" rx="3.03251" fill="#8E8E8E"/>
</g>
<rect width="6.61136" height="17.5437" rx="3.03251" transform="matrix(1 0 0 -1 7.88672 64.3352)" fill="url(#paint0_linear_749_262886)"/>

<g filter="url(#filter4_i_749_262886)">
<rect x="4.69727" y="37.7312" width="13.4248" height="12.6791" rx="3.03251" fill="url(#paint1_linear_749_262886)"/>
</g>
<g filter="url(#filter5_i_749_262886)">
<rect x="5.2041" y="80.4506" width="4.70801" height="2.94574" fill="#F4F0F0"/>
</g>
<g filter="url(#filter6_i_749_262886)">
<rect x="7.00684" y="80.4506" width="2.90489" height="2.94574" fill="#973749"/>
</g>
<circle cx="14.3397" cy="80.9033" r="3.53985" fill="#636363"/>

<g filter="url(#filter7_i_749_262886)">
<rect width="30.6251" height="26.6424" transform="matrix(1 0 0 -1 19.5166 115.162)" fill="#E3E3E3"/>
</g>
<rect x="19.5166" y="4.20325" width="30.6251" height="22.0794" fill="#E3E3E3"/>

<g filter="url(#filter8_f_749_262886)">
<mask id="path-18-inside-2_749_262886" fill="white">
<path d="M19.5166 4.20325H50.1417V26.2827H19.5166V4.20325Z"/>
</mask>
<path d="M19.5166 5.113H50.1417V3.29349H19.5166V5.113ZM50.1417 25.3729H19.5166V27.1924H50.1417V25.3729Z" fill="white" mask="url(#path-18-inside-2_749_262886)"/>
</g>
<rect width="32.1414" height="23.4985" transform="matrix(1 0 0 -1 18 53.281)" fill="#F4F0F0"/>
<rect width="32.1414" height="2.55311" transform="matrix(1 0 0 -1 18 32.3357)" fill="#973749"/>
<g filter="url(#filter9_d_749_262886)">
<rect x="18" y="53.281" width="32.1414" height="35.4242" fill="#F4F0F0"/>
</g>
<path d="M18 29.7826H50.1414V26.2827H19.5163L18 29.7826Z" fill="#CDCDCD"/>
<path d="M19.5166 4.20325H50.1417V0.971624H19.5166V4.20325Z" fill="#F4F0F0"/>

<g filter="url(#filter11_iii_749_262886)">
<circle cx="34.1253" cy="10.3379" r="6.34695" fill="#F4F0F0"/>
</g>
<g filter="url(#filter12_ii_749_262886)">
<circle cx="34.126" cy="10.3378" r="4.85938" fill="#CCCCCC"/>
</g>
<g filter="url(#filter13_i_749_262886)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.4528 10.7993V15.296H34.5913V10.7993H38.9845V9.66084H34.5913V5.37976H33.4528V9.66084H29.2656V10.7993H33.4528Z" fill="#AAAAAA"/>
</g>
<g filter="url(#filter14_iii_749_262886)">
<circle cx="34.1253" cy="103.259" r="6.34695" fill="#C2C2C2"/>
</g>
<g filter="url(#filter15_ii_749_262886)">
<circle cx="34.126" cy="103.259" r="4.85938" fill="#CCCCCC"/>
</g>
<g filter="url(#filter16_i_749_262886)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.4528 103.721V108.217H34.5913V103.721H38.9845V102.582H34.5913V98.3009H33.4528V102.582H29.2656V103.721H33.4528Z" fill="#AAAAAA"/>
</g>
<g filter="url(#filter17_i_749_262886)">
<rect x="20.2832" y="80.5132" width="14.7287" height="2.94574" fill="#F4F0F0"/>
</g>
<g filter="url(#filter18_i_749_262886)">
<rect x="25.9238" y="80.5132" width="9.08776" height="2.94574" fill="#973749"/>
</g>
<circle cx="42.8367" cy="80.9659" r="3.53985" fill="#636363"/>
<g filter="url(#filter19_i_749_262886)">
<rect width="30.6251" height="26.6424" transform="matrix(1 0 0 -1 83.7998 115.162)" fill="#E3E3E3"/>
</g>
<rect x="82.2832" y="4.20325" width="32.141" height="22.0794" fill="#E3E3E3"/>
<g filter="url(#filter20_f_749_262886)">
<mask id="path-38-inside-3_749_262886" fill="white">
<path d="M82.2842 4.20325H114.425V26.2827H82.2842V4.20325Z"/>
</mask>
<path d="M82.2842 5.113H114.425V3.29349H82.2842V5.113ZM114.425 25.3729H82.2842V27.1924H114.425V25.3729Z" fill="white" mask="url(#path-38-inside-3_749_262886)"/>
</g>

<rect width="32.1414" height="23.4985" transform="matrix(1 0 0 -1 82.2832 53.2811)" fill="#F4F0F0"/>
<rect width="32.1414" height="2.55311" transform="matrix(1 0 0 -1 82.2832 32.3357)" fill="#973749"/>
<g filter="url(#filter21_d_749_262886)">
<rect x="82.2832" y="53.2811" width="32.1414" height="35.4242" fill="#F4F0F0"/>
</g>
<path d="M82.2832 29.7826H114.425V26.2827H82.2832V29.7826Z" fill="#CDCDCD"/>
<path d="M82.2842 4.20325H114.425V0.971624H82.2842V4.20325Z" fill="#F4F0F0"/>

<g filter="url(#filter23_iii_749_262886)">
<circle cx="98.4085" cy="10.3379" r="6.34695" fill="#F4F0F0"/>
</g>

<g filter="url(#filter24_ii_749_262886)">
<circle cx="98.4092" cy="10.3378" r="4.85938" fill="#CCCCCC"/>
</g>
<g filter="url(#filter25_i_749_262886)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M97.7351 10.7993V15.296H98.8736V10.7993H103.267V9.66084H98.8736V5.37976H97.7351V9.66084H93.5479V10.7993H97.7351Z" fill="#AAAAAA"/>
</g>
<g filter="url(#filter26_iii_749_262886)">
<circle cx="98.4085" cy="103.259" r="6.34695" fill="#C2C2C2"/>
</g>
<g filter="url(#filter27_ii_749_262886)">
<circle cx="98.4092" cy="103.259" r="4.85938" fill="#CCCCCC"/>
</g>
<g filter="url(#filter28_i_749_262886)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M97.7351 103.721V108.217H98.8736V103.721H103.267V102.582H98.8736V98.301H97.7351V102.582H93.5479V103.721H97.7351Z" fill="#AAAAAA"/>
</g>
<g filter="url(#filter29_i_749_262886)">
<rect x="84.5664" y="80.5132" width="14.7287" height="2.94574" fill="#F4F0F0"/>
</g>


<g filter="url(#filter30_i_749_262886)">
<rect x="90.207" y="80.5132" width="9.08776" height="2.94574" fill="#973749"/>
</g>
<circle cx="107.12" cy="80.966" r="3.53985" fill="#636363"/>
<g filter="url(#filter31_i_749_262886)">
<rect width="30.6251" height="26.6424" transform="matrix(1 0 0 -1 51.6582 115.162)" fill="#E3E3E3"/>
</g>
<rect x="50.1416" y="4.20325" width="32.141" height="22.0794" fill="#E3E3E3"/>

<g filter="url(#filter32_f_749_262886)">
<mask id="path-58-inside-4_749_262886" fill="white">
<path d="M50.1416 4.20325H82.2826V26.2827H50.1416V4.20325Z"/>
</mask>
<path d="M50.1416 5.113H82.2826V3.29349H50.1416V5.113ZM82.2826 25.3729H50.1416V27.1924H82.2826V25.3729Z" fill="white" mask="url(#path-58-inside-4_749_262886)"/>
</g>
<rect width="32.1414" height="23.4985" transform="matrix(1 0 0 -1 50.1416 53.2811)" fill="#F4F0F0"/>

<rect width="32.1414" height="2.55311" transform="matrix(1 0 0 -1 50.1416 32.3357)" fill="#973749"/>
<g filter="url(#filter33_d_749_262886)">
<rect x="50.1416" y="53.2811" width="32.1414" height="35.4242" fill="#F4F0F0"/>
</g>

<path d="M50.1416 29.7826H82.283V26.2827H50.1416V29.7826Z" fill="#CDCDCD"/>
<path d="M50.1416 4.20325H82.2826V0.971624H50.1416V4.20325Z" fill="#F4F0F0"/>


<g filter="url(#filter35_iii_749_262886)">
<circle cx="66.2669" cy="10.3379" r="6.34695" fill="#F4F0F0"/>
</g>

<g filter="url(#filter36_ii_749_262886)">
<circle cx="66.2676" cy="10.3378" r="4.85938" fill="#CCCCCC"/>
</g>
<g filter="url(#filter37_i_749_262886)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M65.5944 10.7993V15.296H66.7329V10.7993H71.1261V9.66084H66.7329V5.37976H65.5944V9.66084H61.4072V10.7993H65.5944Z" fill="#AAAAAA"/>
</g>
<g filter="url(#filter38_iii_749_262886)">
<circle cx="66.2669" cy="103.259" r="6.34695" fill="#C2C2C2"/>
</g>
<g filter="url(#filter39_ii_749_262886)">
<circle cx="66.2676" cy="103.259" r="4.85938" fill="#CCCCCC"/>
</g>
<g filter="url(#filter40_i_749_262886)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M65.5944 103.721V108.217H66.7329V103.721H71.1261V102.582H66.7329V98.301H65.5944V102.582H61.4072V103.721H65.5944Z" fill="#AAAAAA"/>
</g>



<g filter="url(#filter42_i_749_262886)">
<rect x="52.4248" y="80.5132" width="14.7287" height="2.94574" fill="#F4F0F0"/>
</g>
<g filter="url(#filter43_i_749_262886)">
<rect x="58.0654" y="80.5132" width="9.08776" height="2.94574" fill="#973749"/>
</g>
<circle cx="74.9783" cy="80.966" r="3.53985" fill="#636363"/>
<g ref={switchRef} style={{cursor:"pointer"}}>
<g filter="url(#filter10_i_749_262886)">
<rect x="24.9541" y="48.527" width="17.8832" height="18.2969" rx="3.03251" fill="#8E8E8E"/>
</g>
<rect width="15.281" height="17.5437" rx="3.03251" transform="matrix(1 0 0 -1 26.4844 64.3978)" fill="url(#paint2_linear_749_262886)"/>
<g filter="url(#filter34_i_749_262886)">
<rect x="57.0957" y="48.5271" width="17.8832" height="18.2969" rx="3.03251" fill="#8E8E8E"/>
</g>
<rect width="15.281" height="17.5437" rx="3.03251" transform="matrix(1 0 0 -1 58.626 64.3979)" fill="url(#paint4_linear_749_262886)"/>
<g filter="url(#filter41_i_749_262886)">
<rect x="18.5752" y="37.7938" width="95.3851" height="12.6791" rx="3.03251" fill="url(#paint5_linear_749_262886)"/>
</g>
<g filter="url(#filter22_i_749_262886)">
<rect x="89.2373" y="48.5271" width="17.8832" height="18.2969" rx="3.03251" fill="#8E8E8E"/>
</g>
<rect width="15.281" height="17.5437" rx="3.03251" transform="matrix(1 0 0 -1 90.7676 64.3979)" fill="url(#paint3_linear_749_262886)"/>
</g>

<defs>
<filter id="filter0_i_749_262886" x="4.87207" y="87.8504" width="13.25" height="27.249" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.606502"/>
<feGaussianBlur stdDeviation="0.303251"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter1_f_749_262886" x="4.26557" y="3.53412" width="14.463" height="23.2925" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.303251" result="effect1_foregroundBlur_749_262886"/>
</filter>
<filter id="filter2_d_749_262886" x="0.758756" y="53.2184" width="20.8204" height="44.0365" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5.15527"/>
<feGaussianBlur stdDeviation="1.72853"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_749_262886"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_749_262886" result="shape"/>
</filter>
<filter id="filter3_i_749_262886" x="7.22461" y="48.4644" width="7.7373" height="18.2969" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="2.03178"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter4_i_749_262886" x="4.69727" y="37.7312" width="13.4248" height="13.9527" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4.54877"/>
<feGaussianBlur stdDeviation="0.636828"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter5_i_749_262886" x="5.2041" y="80.4506" width="4.70801" height="3.24905" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.303251"/>
<feGaussianBlur stdDeviation="0.303251"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter6_i_749_262886" x="7.00684" y="80.4506" width="2.90527" height="3.5523" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.606502"/>
<feGaussianBlur stdDeviation="0.303251"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter7_i_749_262886" x="19.5166" y="87.913" width="30.625" height="27.249" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.606502"/>
<feGaussianBlur stdDeviation="0.303251"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter8_f_749_262886" x="18.9101" y="3.59674" width="31.838" height="23.2925" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.303251" result="effect1_foregroundBlur_749_262886"/>
</filter>
<filter id="filter9_d_749_262886" x="14.5429" y="53.281" width="39.0557" height="44.0365" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5.15527"/>
<feGaussianBlur stdDeviation="1.72853"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_749_262886"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_749_262886" result="shape"/>
</filter>
<filter id="filter10_i_749_262886" x="24.9541" y="48.527" width="17.8828" height="18.2969" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="2.03178"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter11_iii_749_262886" x="27.2091" y="3.42172" width="13.8328" height="13.2631" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_749_262886" result="effect2_innerShadow_749_262886"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_749_262886" result="effect3_innerShadow_749_262886"/>
</filter>
<filter id="filter12_ii_749_262886" x="28.6974" y="5.47839" width="10.8572" height="9.71875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_749_262886" result="effect2_innerShadow_749_262886"/>
</filter>
<filter id="filter13_i_749_262886" x="29.2656" y="5.37976" width="10.0034" height="9.91626" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.284624"/>
<feGaussianBlur stdDeviation="0.142312"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter14_iii_749_262886" x="27.2091" y="96.3429" width="13.8328" height="13.2631" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_749_262886" result="effect2_innerShadow_749_262886"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_749_262886" result="effect3_innerShadow_749_262886"/>
</filter>
<filter id="filter15_ii_749_262886" x="28.6974" y="98.3997" width="10.8572" height="9.71875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_749_262886" result="effect2_innerShadow_749_262886"/>
</filter>
<filter id="filter16_i_749_262886" x="29.2656" y="98.3009" width="10.0034" height="9.91626" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.284624"/>
<feGaussianBlur stdDeviation="0.142312"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter17_i_749_262886" x="20.2832" y="80.5132" width="14.7285" height="3.24905" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.303251"/>
<feGaussianBlur stdDeviation="0.303251"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter18_i_749_262886" x="25.9238" y="80.5132" width="9.08789" height="3.5523" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.606502"/>
<feGaussianBlur stdDeviation="0.303251"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter19_i_749_262886" x="83.7998" y="87.9132" width="30.625" height="27.249" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.606502"/>
<feGaussianBlur stdDeviation="0.303251"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter20_f_749_262886" x="81.6777" y="3.59674" width="33.3536" height="23.2925" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.303251" result="effect1_foregroundBlur_749_262886"/>
</filter>
<filter id="filter21_d_749_262886" x="78.8261" y="53.2811" width="39.0557" height="44.0365" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5.15527"/>
<feGaussianBlur stdDeviation="1.72853"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_749_262886"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_749_262886" result="shape"/>
</filter>
<filter id="filter22_i_749_262886" x="89.2373" y="48.5271" width="17.8828" height="18.2969" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="2.03178"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter23_iii_749_262886" x="91.4923" y="3.42172" width="13.8328" height="13.2631" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_749_262886" result="effect2_innerShadow_749_262886"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_749_262886" result="effect3_innerShadow_749_262886"/>
</filter>
<filter id="filter24_ii_749_262886" x="92.9806" y="5.47839" width="10.8572" height="9.71875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_749_262886" result="effect2_innerShadow_749_262886"/>
</filter>
<filter id="filter25_i_749_262886" x="93.5479" y="5.37976" width="10.0034" height="9.91626" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.284624"/>
<feGaussianBlur stdDeviation="0.142312"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter26_iii_749_262886" x="91.4923" y="96.343" width="13.8328" height="13.2631" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_749_262886" result="effect2_innerShadow_749_262886"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_749_262886" result="effect3_innerShadow_749_262886"/>
</filter>
<filter id="filter27_ii_749_262886" x="92.9806" y="98.3998" width="10.8572" height="9.71875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_749_262886" result="effect2_innerShadow_749_262886"/>
</filter>
<filter id="filter28_i_749_262886" x="93.5479" y="98.301" width="10.0034" height="9.91626" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.284624"/>
<feGaussianBlur stdDeviation="0.142312"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter29_i_749_262886" x="84.5664" y="80.5132" width="14.7285" height="3.24905" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.303251"/>
<feGaussianBlur stdDeviation="0.303251"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter30_i_749_262886" x="90.207" y="80.5132" width="9.08789" height="3.5523" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.606502"/>
<feGaussianBlur stdDeviation="0.303251"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter31_i_749_262886" x="51.6582" y="87.9132" width="30.625" height="27.249" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.606502"/>
<feGaussianBlur stdDeviation="0.303251"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter32_f_749_262886" x="49.5351" y="3.59674" width="33.3536" height="23.2925" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.303251" result="effect1_foregroundBlur_749_262886"/>
</filter>
<filter id="filter33_d_749_262886" x="46.6845" y="53.2811" width="39.0557" height="44.0365" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5.15527"/>
<feGaussianBlur stdDeviation="1.72853"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_749_262886"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_749_262886" result="shape"/>
</filter>
<filter id="filter34_i_749_262886" x="57.0957" y="48.5271" width="17.8828" height="18.2969" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="2.03178"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter35_iii_749_262886" x="59.3507" y="3.42172" width="13.8328" height="13.2631" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_749_262886" result="effect2_innerShadow_749_262886"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_749_262886" result="effect3_innerShadow_749_262886"/>
</filter>
<filter id="filter36_ii_749_262886" x="60.839" y="5.47839" width="10.8572" height="9.71875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_749_262886" result="effect2_innerShadow_749_262886"/>
</filter>
<filter id="filter37_i_749_262886" x="61.4072" y="5.37976" width="10.0034" height="9.91626" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.284624"/>
<feGaussianBlur stdDeviation="0.142312"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter38_iii_749_262886" x="59.3507" y="96.343" width="13.8328" height="13.2631" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_749_262886" result="effect2_innerShadow_749_262886"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_749_262886" result="effect3_innerShadow_749_262886"/>
</filter>
<filter id="filter39_ii_749_262886" x="60.839" y="98.3998" width="10.8572" height="9.71875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_749_262886" result="effect2_innerShadow_749_262886"/>
</filter>
<filter id="filter40_i_749_262886" x="61.4072" y="98.301" width="10.0034" height="9.91626" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.284624"/>
<feGaussianBlur stdDeviation="0.142312"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter41_i_749_262886" x="18.5752" y="37.7938" width="95.3848" height="13.9527" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4.54877"/>
<feGaussianBlur stdDeviation="0.636828"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter42_i_749_262886" x="52.4248" y="80.5132" width="14.7285" height="3.24905" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.303251"/>
<feGaussianBlur stdDeviation="0.303251"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<filter id="filter43_i_749_262886" x="58.0654" y="80.5132" width="9.08789" height="3.5523" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.606502"/>
<feGaussianBlur stdDeviation="0.303251"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_262886"/>
</filter>
<linearGradient id="paint0_linear_749_262886" x1="3.70243" y1="17.5437" x2="5.00454" y2="1.9977" gradientUnits="userSpaceOnUse">
<stop stop-color="#313131"/>
<stop offset="0.428022" stop-color="#373737"/>
<stop offset="0.716949" stop-color="#212121"/>
<stop offset="1" stop-color="#1D2021"/>
</linearGradient>
<linearGradient id="paint1_linear_749_262886" x1="12.2153" y1="50.4103" x2="12.5523" y2="39.1062" gradientUnits="userSpaceOnUse">
<stop stop-color="#313131"/>
<stop offset="0.428022" stop-color="#0C0C0C"/>
<stop offset="0.716949" stop-color="#525252"/>
<stop offset="1" stop-color="#1D2021"/>
</linearGradient>
<linearGradient id="paint2_linear_749_262886" x1="8.55752" y1="17.5437" x2="9.12409" y2="1.90917" gradientUnits="userSpaceOnUse">
<stop stop-color="#313131"/>
<stop offset="0.428022" stop-color="#373737"/>
<stop offset="0.716949" stop-color="#212121"/>
<stop offset="1" stop-color="#1D2021"/>
</linearGradient>
<linearGradient id="paint3_linear_749_262886" x1="8.55752" y1="17.5437" x2="9.12409" y2="1.90917" gradientUnits="userSpaceOnUse">
<stop stop-color="#313131"/>
<stop offset="0.428022" stop-color="#373737"/>
<stop offset="0.716949" stop-color="#212121"/>
<stop offset="1" stop-color="#1D2021"/>
</linearGradient>
<linearGradient id="paint4_linear_749_262886" x1="8.55752" y1="17.5437" x2="9.12409" y2="1.90917" gradientUnits="userSpaceOnUse">
<stop stop-color="#313131"/>
<stop offset="0.428022" stop-color="#373737"/>
<stop offset="0.716949" stop-color="#212121"/>
<stop offset="1" stop-color="#1D2021"/>
</linearGradient>
<linearGradient id="paint5_linear_749_262886" x1="71.9918" y1="50.4729" x2="72.0393" y2="39.159" gradientUnits="userSpaceOnUse">
<stop stop-color="#313131"/>
<stop offset="0.428022" stop-color="#0C0C0C"/>
<stop offset="0.716949" stop-color="#525252"/>
<stop offset="1" stop-color="#1D2021"/>
</linearGradient>
</defs>
</svg>

  )
}
