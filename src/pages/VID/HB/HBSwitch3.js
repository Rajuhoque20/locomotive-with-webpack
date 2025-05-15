import React, { useEffect, useRef, useState } from 'react'
import classes from './HB.module.css';
import { moveFn } from '../../cab-replica/CabReplicate/CabUtility';
import { updateVIDData } from '../VIDUtility';
export const HBSwitch3WithDesc=({description, width, value, valueKey})=>{
    return(
    <div className='d-flex flex-col align-center justify-center' style={{width:width, }}>
        <HBSwitch3 height='70%' width='50%' value={value} valueKey={valueKey}/>
        <div className={`${classes.description} ${'d-flex flex-col align-center justify-center'}`} style={{background:"#000", height:"30%", width:"90%"}}>
            <span>{description}</span>
        </div>
    </div>
    )
}

let isDragging=false, initialX=0, initialY=0;
export  function HBSwitch3({width="100%", height="100%", value=0, valueKey}) {
  
          const switchRef=useRef(null);
          const hasMoved = useRef(false);
          const [pos, setPos] = useState(value);
  
          useEffect(()=>{
                          if(value===1)
                          {
                            switchRef.current.setAttribute("transform", "rotate(0,35, 55)")
                          }
                          else
                          {
                            switchRef.current.setAttribute("transform", "rotate(180,35, 55)")
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
              switchRef.current.setAttribute("transform", "rotate(180,35, 55)")
              updateVIDData(valueKey, 0);
            } 
            else if (pos === 0&&currentY<initialY) {
              setPos(1);
              switchRef.current.setAttribute("transform", "rotate(0,35, 55)")
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
    <svg width={width} height={height} viewBox="0 0 55 116" fill="none" preserveAspectRatio='none'>
<g filter="url(#filter0_i_749_263087)">
<rect width="13.25" height="26.6424" transform="matrix(1 0 0 -1 4.87207 115.29)" fill="#E3E3E3"/>
</g>
<rect x="4.87207" y="4.33093" width="13.25" height="22.0794" fill="#E3E3E3"/>
<g filter="url(#filter1_f_749_263087)">
<mask id="path-3-inside-1_749_263087" fill="white">
<path d="M4.87207 4.33093H18.1221V26.4103H4.87207V4.33093Z"/>
</mask>
<path d="M4.87207 5.24069H18.1221V3.42118H4.87207V5.24069ZM18.1221 25.5006H4.87207V27.3201H18.1221V25.5006Z" fill="white" mask="url(#path-3-inside-1_749_263087)"/>
</g>
<rect width="13.906" height="23.4985" transform="matrix(1 0 0 -1 4.21582 53.4087)" fill="#F4F0F0"/>
<rect width="13.906" height="2.55311" transform="matrix(1 0 0 -1 4.21582 32.4634)" fill="#973749"/>
<g filter="url(#filter2_d_749_263087)">
<rect x="4.21582" y="53.4087" width="13.906" height="35.4242" fill="#F4F0F0"/>
</g>

<path d="M4.21582 29.9103H18.1218V26.4104H4.87183L4.21582 29.9103Z" fill="#CDCDCD"/>
<path d="M4.87207 4.33093H18.1221V1.09931H5.92169L4.87207 4.33093Z" fill="#F4F0F0"/>
<g filter="url(#filter3_i_749_263087)">
<rect x="7.22461" y="48.6547" width="7.73721" height="18.2969" rx="3.03251" fill="#8E8E8E"/>
</g>
<rect width="6.61136" height="17.5437" rx="3.03251" transform="matrix(1 0 0 -1 7.88672 64.5255)" fill="url(#paint0_linear_749_263087)"/>
<g filter="url(#filter4_i_749_263087)">
<rect x="4.69727" y="37.9215" width="13.4248" height="12.6791" rx="3.03251" fill="url(#paint1_linear_749_263087)"/>
</g>
<g filter="url(#filter5_i_749_263087)">
<rect x="5.2041" y="80.6409" width="4.70801" height="2.94574" fill="#F4F0F0"/>
</g>
<g filter="url(#filter6_i_749_263087)">
<rect x="7.00684" y="80.6409" width="2.90489" height="2.94574" fill="#973749"/>
</g>
<circle cx="14.3397" cy="81.0936" r="3.53985" fill="#636363"/>
<g filter="url(#filter7_i_749_263087)">
<rect width="30.6251" height="26.6424" transform="matrix(1 0 0 -1 20.623 115.352)" fill="#E3E3E3"/>
</g>
<rect x="19.1064" y="4.39355" width="32.141" height="22.0794" fill="#E3E3E3"/>
<g filter="url(#filter8_f_749_263087)">
<mask id="path-18-inside-2_749_263087" fill="white">
<path d="M19.1064 4.39355H51.2475V26.473H19.1064V4.39355Z"/>
</mask>
<path d="M19.1064 5.30331H51.2475V3.4838H19.1064V5.30331ZM51.2475 25.5632H19.1064V27.3827H51.2475V25.5632Z" fill="white" mask="url(#path-18-inside-2_749_263087)"/>
</g>


<rect width="32.1414" height="23.4985" transform="matrix(1 0 0 -1 19.1064 53.4714)" fill="#F4F0F0"/>
<rect width="32.1414" height="2.55311" transform="matrix(1 0 0 -1 19.1064 32.526)" fill="#973749"/>
<g filter="url(#filter9_d_749_263087)">
<rect x="19.1064" y="53.4714" width="32.1414" height="35.4242" fill="#F4F0F0"/>
</g>
<path d="M19.1064 29.9729H51.2478V26.4731H19.1064V29.9729Z" fill="#CDCDCD"/>
<path d="M19.1064 4.39355H51.2475V1.16193H19.1064V4.39355Z" fill="#F4F0F0"/>

<g filter="url(#filter11_iii_749_263087)">
<circle cx="35.2317" cy="10.5282" r="6.34695" fill="#F4F0F0"/>
</g>
<g filter="url(#filter12_ii_749_263087)">
<circle cx="35.2324" cy="10.5281" r="4.85938" fill="#CCCCCC"/>
</g>

<g filter="url(#filter13_i_749_263087)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.5593 10.9896V15.4863H35.6978V10.9896H40.091V9.85115H35.6978V5.57007H34.5593V9.85115H30.3721V10.9896H34.5593Z" fill="#AAAAAA"/>
</g>
<g filter="url(#filter14_iii_749_263087)">
<circle cx="35.2317" cy="103.449" r="6.34695" fill="#C2C2C2"/>
</g>
<g filter="url(#filter15_ii_749_263087)">
<circle cx="35.2324" cy="103.449" r="4.85938" fill="#CCCCCC"/>
</g>
<g filter="url(#filter16_i_749_263087)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.5593 103.911V108.408H35.6978V103.911H40.091V102.772H35.6978V98.4913H34.5593V102.772H30.3721V103.911H34.5593Z" fill="#AAAAAA"/>
</g>

<g filter="url(#filter19_i_749_263087)">
<rect x="27.0303" y="80.7035" width="9.08776" height="2.94574" fill="#973749"/>
</g>
<circle cx="43.9432" cy="81.1563" r="3.53985" fill="#636363"/>

<g ref={switchRef} style={{cursor:"pointer"}}>
      <g filter="url(#filter10_i_749_263087)">
    <rect x="26.0605" y="48.7174" width="17.8832" height="18.2969" rx="3.03251" fill="#8E8E8E"/>
    </g>
    <rect width="15.281" height="17.5437" rx="3.03251" transform="matrix(1 0 0 -1 27.5908 64.5883)" fill="url(#paint2_linear_749_263087)"/>
    <g filter="url(#filter17_i_749_263087)">
    <rect x="19.6924" y="37.9841" width="31.0797" height="12.6791" rx="3.03251" fill="url(#paint3_linear_749_263087)"/>
    </g>
    <g filter="url(#filter18_i_749_263087)">
    <rect x="21.3896" y="80.7035" width="14.7287" height="2.94574" fill="#F4F0F0"/>
    </g>
</g>
<defs>
<filter id="filter0_i_749_263087" x="4.87207" y="88.0407" width="13.25" height="27.249" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.606502"/>
<feGaussianBlur stdDeviation="0.303251"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_263087"/>
</filter>
<filter id="filter1_f_749_263087" x="4.26557" y="3.72443" width="14.463" height="23.2925" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.303251" result="effect1_foregroundBlur_749_263087"/>
</filter>
<filter id="filter2_d_749_263087" x="0.758756" y="53.4087" width="20.8204" height="44.0365" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5.15527"/>
<feGaussianBlur stdDeviation="1.72853"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_749_263087"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_749_263087" result="shape"/>
</filter>
<filter id="filter3_i_749_263087" x="7.22461" y="48.6547" width="7.7373" height="18.2969" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="2.03178"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_263087"/>
</filter>
<filter id="filter4_i_749_263087" x="4.69727" y="37.9215" width="13.4248" height="13.9527" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4.54877"/>
<feGaussianBlur stdDeviation="0.636828"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_263087"/>
</filter>
<filter id="filter5_i_749_263087" x="5.2041" y="80.6409" width="4.70801" height="3.24905" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.303251"/>
<feGaussianBlur stdDeviation="0.303251"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_263087"/>
</filter>
<filter id="filter6_i_749_263087" x="7.00684" y="80.6409" width="2.90527" height="3.5523" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.606502"/>
<feGaussianBlur stdDeviation="0.303251"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_263087"/>
</filter>
<filter id="filter7_i_749_263087" x="20.623" y="88.1035" width="30.625" height="27.249" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.606502"/>
<feGaussianBlur stdDeviation="0.303251"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_263087"/>
</filter>
<filter id="filter8_f_749_263087" x="18.4999" y="3.78705" width="33.3536" height="23.2925" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.303251" result="effect1_foregroundBlur_749_263087"/>
</filter>
<filter id="filter9_d_749_263087" x="15.6494" y="53.4714" width="39.0557" height="44.0365" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5.15527"/>
<feGaussianBlur stdDeviation="1.72853"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_749_263087"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_749_263087" result="shape"/>
</filter>
<filter id="filter10_i_749_263087" x="26.0605" y="48.7174" width="17.8828" height="18.2969" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="2.03178"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_263087"/>
</filter>
<filter id="filter11_iii_749_263087" x="28.3155" y="3.61203" width="13.8328" height="13.2631" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_263087"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_749_263087" result="effect2_innerShadow_749_263087"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_749_263087" result="effect3_innerShadow_749_263087"/>
</filter>
<filter id="filter12_ii_749_263087" x="29.8038" y="5.6687" width="10.8572" height="9.71875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_263087"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_749_263087" result="effect2_innerShadow_749_263087"/>
</filter>
<filter id="filter13_i_749_263087" x="30.3721" y="5.57007" width="10.0034" height="9.91626" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.284624"/>
<feGaussianBlur stdDeviation="0.142312"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_263087"/>
</filter>
<filter id="filter14_iii_749_263087" x="28.3155" y="96.5333" width="13.8328" height="13.2631" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_263087"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_749_263087" result="effect2_innerShadow_749_263087"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_749_263087" result="effect3_innerShadow_749_263087"/>
</filter>
<filter id="filter15_ii_749_263087" x="29.8038" y="98.5901" width="10.8572" height="9.71875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_263087"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.569248"/>
<feGaussianBlur stdDeviation="0.569248"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_749_263087" result="effect2_innerShadow_749_263087"/>
</filter>
<filter id="filter16_i_749_263087" x="30.3721" y="98.4913" width="10.0034" height="9.91626" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.284624"/>
<feGaussianBlur stdDeviation="0.142312"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_263087"/>
</filter>
<filter id="filter17_i_749_263087" x="19.6924" y="37.9841" width="31.0801" height="13.9527" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4.54877"/>
<feGaussianBlur stdDeviation="0.636828"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_263087"/>
</filter>
<filter id="filter18_i_749_263087" x="21.3896" y="80.7035" width="14.7285" height="3.24905" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.303251"/>
<feGaussianBlur stdDeviation="0.303251"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_263087"/>
</filter>
<filter id="filter19_i_749_263087" x="27.0303" y="80.7035" width="9.08789" height="3.5523" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.606502"/>
<feGaussianBlur stdDeviation="0.303251"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_749_263087"/>
</filter>
<linearGradient id="paint0_linear_749_263087" x1="3.70243" y1="17.5437" x2="5.00454" y2="1.9977" gradientUnits="userSpaceOnUse">
<stop stop-color="#313131"/>
<stop offset="0.428022" stop-color="#373737"/>
<stop offset="0.716949" stop-color="#212121"/>
<stop offset="1" stop-color="#1D2021"/>
</linearGradient>
<linearGradient id="paint1_linear_749_263087" x1="12.2153" y1="50.6006" x2="12.5523" y2="39.2965" gradientUnits="userSpaceOnUse">
<stop stop-color="#313131"/>
<stop offset="0.428022" stop-color="#0C0C0C"/>
<stop offset="0.716949" stop-color="#525252"/>
<stop offset="1" stop-color="#1D2021"/>
</linearGradient>
<linearGradient id="paint2_linear_749_263087" x1="8.55752" y1="17.5437" x2="9.12409" y2="1.90917" gradientUnits="userSpaceOnUse">
<stop stop-color="#313131"/>
<stop offset="0.428022" stop-color="#373737"/>
<stop offset="0.716949" stop-color="#212121"/>
<stop offset="1" stop-color="#1D2021"/>
</linearGradient>
<linearGradient id="paint3_linear_749_263087" x1="37.0973" y1="50.6632" x2="37.243" y2="39.351" gradientUnits="userSpaceOnUse">
<stop stop-color="#313131"/>
<stop offset="0.428022" stop-color="#0C0C0C"/>
<stop offset="0.716949" stop-color="#525252"/>
<stop offset="1" stop-color="#1D2021"/>
</linearGradient>
</defs>
</svg>

  )
}
