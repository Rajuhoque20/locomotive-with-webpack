import React, { useEffect, useRef, useState } from 'react'
import classes from './RotarySwich.module.css';
import { rotateFn } from '../../cab-replica/CabReplicate/CabUtility';
import { updateVIDData } from '../VIDUtility';
const SwitchDesc=({title})=>{
    return(
        <div className={classes.switchDesc}>
            <span>{title}</span>
        </div>
    )
}

export default function RotarySwitchDesc({ item}){
    return(
        <div className='d-flex flex-col justify-between' style={{width:"15%", height:"100%"}}>
            <div className={classes.rotarySwitch}>
            <RotarySwitch type={item?.type} value={item?.value} valueKey={item.key}/>
            </div>
            <SwitchDesc title={item?.title}/>
        </div>
    )
}

let isDragging=false, initialX=0, initialY=0;
export  function RotarySwitch({type=2, value=0, valueKey}) {
    const dialRef=useRef(null);
      const prevDataRef = useRef(value);
      const hasMoved = useRef(false);
      const [pos, setPos] = useState(value===0?1:value===1?2:3);
     
      const onMouseDown = (event) => {
        isDragging=true;
        initialX=event.clientX;
        initialY=event.clientY;
      };

      useEffect(()=>{
        if(value===0)
        {
          rotateFn(dialRef, 0, prevDataRef);
        }
        else if(value===1)
        {
          setPos(2);
          rotateFn(dialRef, 90, prevDataRef);
        }
        else if (value===2)
        {
          setPos(3);
          rotateFn(dialRef, -90, prevDataRef);
        }
      },[value])
    
      const moveDial = (currentX, currentY) => {
        if (pos === 1) {
            if(currentX<initialX)
            {
                setPos(2);
                rotateFn(dialRef, 90, prevDataRef);
                updateVIDData(valueKey, 1);
            }
            else
            {
                setPos(3);
                rotateFn(dialRef, -90, prevDataRef);
                updateVIDData(valueKey, 2);
            }
        }
         else if (pos === 2&&currentY>initialY) {
          setPos(1);
          rotateFn(dialRef, 0, prevDataRef);
          updateVIDData(valueKey, 0);
        } 
        else if (pos === 3&&currentY>initialY) {
          setPos(1);
          rotateFn(dialRef, 0, prevDataRef);
          updateVIDData(valueKey, 0);
        }
      };
     
      const onMouseMove = (event) => {
        if (!isDragging || hasMoved.current) {
          return;
        }
        hasMoved.current = true;
        const currentX = event.clientX;
        const currentY = event.clientY;
        moveDial(currentX, currentY);
      };

      const onMouseUp = () => {
        isDragging=false;
        hasMoved.current = false;
      };

      useEffect(() => {
        const svg = dialRef.current;
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

    const dialStyle = {
        transformOrigin: "45px 41px",
        cursor: "pointer",
      };
    
  return (
    <svg width="100%" height="100%" viewBox="0 0 90 91" fill="none" preserveAspectRatio='none'>
<g filter="url(#filter0_diiii_76_10962)">
<rect x="7.54297" y="1.96368" width="75" height="75" rx="6.49646" fill="url(#paint0_linear_76_10962)"/>
<rect x="7.54297" y="1.96368" width="75" height="75" rx="6.49646" fill="#1E1E1E" fill-opacity="0.7"/>
</g>

<text 
x={45}
 y={16}
 textAnchor="middle"
 alignmentBaseline='middle'
 fill='#fff'
 fontSize={11}
>{type===2?"0":"Norm"}</text>
<g filter="url(#filter2_i_76_10962)">
<path d="M17.6212 34.0847V45.3019H15.499V34.0847H17.6212Z" fill="white"/>
</g>
{type===3&&<g filter="url(#filter3_i_76_10962)">
<path d="M70.8242 34.0847V45.3019H68.702V34.0847H70.8242ZM75.0431 34.0847V45.3019H72.9209V34.0847H75.0431Z" fill="white"/>
</g>}
<g filter="url(#filter5_ddii_76_10962)">
<ellipse cx="45.0472" cy="40.5464" rx="15.1185" ry="15.1185" fill="url(#paint1_linear_76_10962)"/>
</g>
<g filter="url(#filter6_ii_76_10962)">
<ellipse cx="45.0466" cy="40.5464" rx="13.4949" ry="13.4949" fill="url(#paint2_linear_76_10962)"/>
</g>
<g filter="url(#filter7_iiii_76_10962)">
<ellipse cx="45.0485" cy="40.5464" rx="12.2955" ry="12.2955" fill="url(#paint3_radial_76_10962)"/>
<ellipse cx="45.0485" cy="40.5464" rx="12.2955" ry="12.2955" fill="#1E1E1E" fill-opacity="0.7"/>
</g>
<g filter="url(#filter8_diiii_76_10962)">
<circle cx="45.0487" cy="40.5465" r="9.99788" fill="url(#paint4_radial_76_10962)"/>
<circle cx="45.0487" cy="40.5465" r="9.99788" fill="#1E1E1E" fill-opacity="0.7"/>
</g>

<g ref={dialRef} style={dialStyle}>
<g filter="url(#filter9_diiii_76_10962)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M52.7598 40.5467C52.7598 45.1555 49.5215 49.5671 49.5215 54.1758L49.5215 69.8592C49.5215 71.2399 48.4022 72.3592 47.0215 72.3592L43.0652 72.3592C41.6845 72.3592 40.5652 71.2399 40.5652 69.8592L40.5652 54.1758C40.5652 49.567 37.327 45.1555 37.327 40.5467C37.327 39.7204 37.4569 38.9244 37.6974 38.178C38.9573 34.2679 42.2025 30.6722 42.2025 26.5641C42.2025 26.3665 42.3627 26.2064 42.5603 26.2064L47.5265 26.2064C47.7241 26.2064 47.8843 26.3665 47.8843 26.5641C47.8843 30.6722 51.1295 34.2679 52.3894 38.178C52.6299 38.9244 52.7598 39.7204 52.7598 40.5467Z" fill="url(#paint5_linear_76_10962)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M52.7598 40.5467C52.7598 45.1555 49.5215 49.5671 49.5215 54.1758L49.5215 69.8592C49.5215 71.2399 48.4022 72.3592 47.0215 72.3592L43.0652 72.3592C41.6845 72.3592 40.5652 71.2399 40.5652 69.8592L40.5652 54.1758C40.5652 49.567 37.327 45.1555 37.327 40.5467C37.327 39.7204 37.4569 38.9244 37.6974 38.178C38.9573 34.2679 42.2025 30.6722 42.2025 26.5641C42.2025 26.3665 42.3627 26.2064 42.5603 26.2064L47.5265 26.2064C47.7241 26.2064 47.8843 26.3665 47.8843 26.5641C47.8843 30.6722 51.1295 34.2679 52.3894 38.178C52.6299 38.9244 52.7598 39.7204 52.7598 40.5467Z" fill="#1E1E1E" fill-opacity="0.7"/>
</g>
<g filter="url(#filter10_diiii_76_10962)">
<path d="M42.2041 21.8671C42.2041 20.2981 43.476 19.0262 45.045 19.0262C46.614 19.0262 47.8859 20.2981 47.8859 21.8671V28.7572H42.2041V21.8671Z" fill="url(#paint6_linear_76_10962)"/>
<path d="M42.2041 21.8671C42.2041 20.2981 43.476 19.0262 45.045 19.0262C46.614 19.0262 47.8859 20.2981 47.8859 21.8671V28.7572H42.2041V21.8671Z" fill="#1E1E1E" fill-opacity="0.7"/>
</g>
<g filter="url(#filter11_ii_76_10962)">
<ellipse cx="45.0448" cy="40.547" rx="4.53215" ry="4.53215" fill="url(#paint7_linear_76_10962)"/>
</g>
<g filter="url(#filter12_f_76_10962)">
<circle cx="45.0451" cy="40.5468" r="3.90255" fill="#151515"/>
<circle cx="45.0451" cy="40.5468" r="3.82583" stroke="url(#paint8_linear_76_10962)" stroke-width="0.153459"/>
</g>
<ellipse cx="45.0454" cy="40.546" rx="3.75928" ry="3.75928" fill="url(#paint9_radial_76_10962)" fill-opacity="0.2"/>
<g filter="url(#filter13_f_76_10962)">
<path d="M48.7469 40.5462C48.7469 42.5902 47.0899 44.2472 45.0459 44.2472C43.0019 44.2472 41.3449 42.5902 41.3449 40.5462C41.3449 38.5022 43.0019 36.8452 45.0459 36.8452C47.0899 36.8452 48.7469 38.5022 48.7469 40.5462Z" stroke="url(#paint10_linear_76_10962)" stroke-width="0.209395"/>
</g>
<g filter="url(#filter14_f_76_10962)">
<path d="M48.7469 40.5462C48.7469 42.5902 47.0899 44.2472 45.0459 44.2472C43.0019 44.2472 41.3449 42.5902 41.3449 40.5462C41.3449 38.5022 43.0019 36.8452 45.0459 36.8452C47.0899 36.8452 48.7469 38.5022 48.7469 40.5462Z" stroke="url(#paint11_linear_76_10962)" stroke-width="0.209395"/>
</g>
<g filter="url(#filter15_f_76_10962)">
<path d="M48.7469 40.5462C48.7469 42.5902 47.0899 44.2472 45.0459 44.2472C43.0019 44.2472 41.3449 42.5902 41.3449 40.5462C41.3449 38.5022 43.0019 36.8452 45.0459 36.8452C47.0899 36.8452 48.7469 38.5022 48.7469 40.5462Z" stroke="url(#paint12_linear_76_10962)" stroke-width="0.209395"/>
</g>
<g filter="url(#filter16_f_76_10962)">
<path d="M48.7469 40.5462C48.7469 42.5902 47.0899 44.2472 45.0459 44.2472C43.0019 44.2472 41.3449 42.5902 41.3449 40.5462C41.3449 38.5022 43.0019 36.8452 45.0459 36.8452C47.0899 36.8452 48.7469 38.5022 48.7469 40.5462Z" stroke="url(#paint13_linear_76_10962)" stroke-width="0.209395"/>
</g>
<g filter="url(#filter17_f_76_10962)">
<path d="M48.7469 40.5462C48.7469 42.5902 47.0899 44.2472 45.0459 44.2472C43.0019 44.2472 41.3449 42.5902 41.3449 40.5462C41.3449 38.5022 43.0019 36.8452 45.0459 36.8452C47.0899 36.8452 48.7469 38.5022 48.7469 40.5462Z" stroke="url(#paint14_linear_76_10962)" stroke-width="0.209395"/>
</g>
</g>

<defs>
<filter id="filter0_diiii_76_10962" x="0.194979" y="-1.0052" width="89.696" height="91.5669" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="6.24999"/>
<feGaussianBlur stdDeviation="3.674"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0375 0 0 0 0 0.0375 0 0 0 0 0.0375 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_76_10962"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_76_10962" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="2.96888"/>
<feGaussianBlur stdDeviation="1.48444"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.3125 0 0 0 0 0.3125 0 0 0 0 0.3125 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-2.96888"/>
<feGaussianBlur stdDeviation="3.006"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_76_10962" result="effect3_innerShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.96888"/>
<feGaussianBlur stdDeviation="1.48444"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect3_innerShadow_76_10962" result="effect4_innerShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3.71111"/>
<feGaussianBlur stdDeviation="1.48444"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.12549 0 0 0 0 0.129412 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect4_innerShadow_76_10962" result="effect5_innerShadow_76_10962"/>
</filter>
<filter id="filter1_i_76_10962" x="28.2334" y="7.63818" width="32.3076" height="9.57871" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.08274"/>
<feGaussianBlur stdDeviation="0.812057"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.125 0 0 0 0 0.125 0 0 0 0 0.125 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_76_10962"/>
</filter>
<filter id="filter2_i_76_10962" x="15.499" y="34.0847" width="2.12207" height="12.3" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.08274"/>
<feGaussianBlur stdDeviation="0.812057"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.125 0 0 0 0 0.125 0 0 0 0 0.125 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_76_10962"/>
</filter>
<filter id="filter3_i_76_10962" x="68.7021" y="34.0847" width="6.34082" height="12.3" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.08274"/>
<feGaussianBlur stdDeviation="0.812057"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.125 0 0 0 0 0.125 0 0 0 0 0.125 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_76_10962"/>
</filter>
<filter id="filter4_i_76_10962" x="24.4883" y="58.7915" width="18.5752" height="12.2394" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.08274"/>
<feGaussianBlur stdDeviation="0.812057"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.125 0 0 0 0 0.125 0 0 0 0 0.125 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_76_10962"/>
</filter>
<filter id="filter5_ddii_76_10962" x="12.6048" y="10.9913" width="64.8851" height="71.3813" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="9.38377"/>
<feGaussianBlur stdDeviation="8.66195"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0 0.172549 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="0.721829" operator="erode" in="SourceAlpha" result="effect2_dropShadow_76_10962"/>
<feOffset dy="-5.0528"/>
<feGaussianBlur stdDeviation="5.0528"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0583333 0 0 0 0 0.0583333 0 0 0 0 0.0583333 0 0 0 0.72 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_76_10962" result="effect2_dropShadow_76_10962"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_76_10962" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="12.9929"/>
<feGaussianBlur stdDeviation="2.5264"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect3_innerShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.721829" dy="42.5879"/>
<feGaussianBlur stdDeviation="7.5792"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect3_innerShadow_76_10962" result="effect4_innerShadow_76_10962"/>
</filter>
<filter id="filter6_ii_76_10962" x="31.5518" y="23.4785" width="26.9902" height="34.8938" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4.33097"/>
<feGaussianBlur stdDeviation="3.68133"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-5.41372"/>
<feGaussianBlur stdDeviation="1.78653"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.341667 0 0 0 0 0.341667 0 0 0 0 0.341667 0 0 0 0.34 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_76_10962" result="effect2_innerShadow_76_10962"/>
</filter>
<filter id="filter7_iiii_76_10962" x="32.1279" y="28.2509" width="25.4658" height="24.5911" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.25"/>
<feGaussianBlur stdDeviation="0.624999"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.3125 0 0 0 0 0.3125 0 0 0 0 0.3125 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.25"/>
<feGaussianBlur stdDeviation="0.624999"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_76_10962" result="effect2_innerShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.624999"/>
<feGaussianBlur stdDeviation="1.25"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_76_10962" result="effect3_innerShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.624999"/>
<feGaussianBlur stdDeviation="1.25"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect3_innerShadow_76_10962" result="effect4_innerShadow_76_10962"/>
</filter>
<filter id="filter8_diiii_76_10962" x="31.3008" y="26.7986" width="27.4961" height="27.4957" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.875"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0375 0 0 0 0 0.0375 0 0 0 0 0.0375 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_76_10962"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_76_10962" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.25"/>
<feGaussianBlur stdDeviation="0.624999"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.3125 0 0 0 0 0.3125 0 0 0 0 0.3125 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.25"/>
<feGaussianBlur stdDeviation="0.624999"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_76_10962" result="effect3_innerShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.624999"/>
<feGaussianBlur stdDeviation="1.25"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect3_innerShadow_76_10962" result="effect4_innerShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.624999"/>
<feGaussianBlur stdDeviation="1.25"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect4_innerShadow_76_10962" result="effect5_innerShadow_76_10962"/>
</filter>
<filter id="filter9_diiii_76_10962" x="29.9792" y="22.6084" width="30.1286" height="60.8488" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.75"/>
<feGaussianBlur stdDeviation="3.674"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_76_10962"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_76_10962" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1.25"/>
<feGaussianBlur stdDeviation="0.624999"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.3125 0 0 0 0 0.3125 0 0 0 0 0.3125 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-1.25"/>
<feGaussianBlur stdDeviation="0.624999"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_76_10962" result="effect3_innerShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.25"/>
<feGaussianBlur stdDeviation="0.624999"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect3_innerShadow_76_10962" result="effect4_innerShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1.25"/>
<feGaussianBlur stdDeviation="0.624999"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.12549 0 0 0 0 0.129412 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect4_innerShadow_76_10962" result="effect5_innerShadow_76_10962"/>
</filter>
<filter id="filter10_diiii_76_10962" x="34.8561" y="17.7762" width="20.3776" height="27.9778" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="9.64887"/>
<feGaussianBlur stdDeviation="3.674"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0375 0 0 0 0 0.0375 0 0 0 0 0.0375 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_76_10962"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_76_10962" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1.25"/>
<feGaussianBlur stdDeviation="0.624999"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.3125 0 0 0 0 0.3125 0 0 0 0 0.3125 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-1.25"/>
<feGaussianBlur stdDeviation="0.624999"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_76_10962" result="effect3_innerShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.25"/>
<feGaussianBlur stdDeviation="0.624999"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect3_innerShadow_76_10962" result="effect4_innerShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1.25"/>
<feGaussianBlur stdDeviation="0.624999"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.12549 0 0 0 0 0.129412 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect4_innerShadow_76_10962" result="effect5_innerShadow_76_10962"/>
</filter>
<filter id="filter11_ii_76_10962" x="40.5127" y="32.4418" width="9.06445" height="16.9684" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4.33097"/>
<feGaussianBlur stdDeviation="3.68133"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_76_10962"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-5.41372"/>
<feGaussianBlur stdDeviation="1.78653"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.341667 0 0 0 0 0.341667 0 0 0 0 0.341667 0 0 0 0.34 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_76_10962" result="effect2_innerShadow_76_10962"/>
</filter>
<filter id="filter12_f_76_10962" x="41.1164" y="36.6181" width="7.85704" height="7.85746" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.0130872" result="effect1_foregroundBlur_76_10962"/>
</filter>
<filter id="filter13_f_76_10962" x="41.0657" y="36.566" width="7.96032" height="7.96038" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.087248" result="effect1_foregroundBlur_76_10962"/>
</filter>
<filter id="filter14_f_76_10962" x="41.1094" y="36.6097" width="7.87307" height="7.87313" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.065436" result="effect1_foregroundBlur_76_10962"/>
</filter>
<filter id="filter15_f_76_10962" x="41.1094" y="36.6097" width="7.87307" height="7.87313" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.065436" result="effect1_foregroundBlur_76_10962"/>
</filter>
<filter id="filter16_f_76_10962" x="41.1094" y="36.6097" width="7.87307" height="7.87313" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.065436" result="effect1_foregroundBlur_76_10962"/>
</filter>
<filter id="filter17_f_76_10962" x="41.1094" y="36.6097" width="7.87307" height="7.87313" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.065436" result="effect1_foregroundBlur_76_10962"/>
</filter>
<linearGradient id="paint0_linear_76_10962" x1="-8.54646" y1="61.3183" x2="82.543" y2="40.689" gradientUnits="userSpaceOnUse">
<stop stop-color="#313131"/>
<stop offset="1" stop-color="#1D2021"/>
</linearGradient>
<linearGradient id="paint1_linear_76_10962" x1="45.0472" y1="25.4279" x2="45.0472" y2="55.6649" gradientUnits="userSpaceOnUse">
<stop stop-color="#171717"/>
<stop offset="0.0325425" stop-color="#171717"/>
<stop offset="1" stop-color="#2B2B2D"/>
</linearGradient>
<linearGradient id="paint2_linear_76_10962" x1="45.0466" y1="27.0515" x2="45.0466" y2="54.0413" gradientUnits="userSpaceOnUse">
<stop stop-color="#525159"/>
<stop offset="1" stop-color="#232426"/>
</linearGradient>
<radialGradient id="paint3_radial_76_10962" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45.0485 39.4665) rotate(6.87122) scale(12.3845 12.3845)">
<stop stop-color="#474747"/>
<stop offset="1" stop-color="#1D2021"/>
</radialGradient>
<radialGradient id="paint4_radial_76_10962" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45.0487 39.6684) rotate(6.87122) scale(10.0702)">
<stop stop-color="#474747"/>
<stop offset="1" stop-color="#1D2021"/>
</radialGradient>
<linearGradient id="paint5_linear_76_10962" x1="40.5464" y1="9.59246" x2="72.3167" y2="51.484" gradientUnits="userSpaceOnUse">
<stop stop-color="#313131"/>
<stop offset="1" stop-color="#1D2021"/>
</linearGradient>
<linearGradient id="paint6_linear_76_10962" x1="40.9852" y1="26.7272" x2="48.1151" y2="25.7844" gradientUnits="userSpaceOnUse">
<stop stop-color="#313131"/>
<stop offset="1" stop-color="#1D2021"/>
</linearGradient>
<linearGradient id="paint7_linear_76_10962" x1="45.0448" y1="36.0148" x2="45.0448" y2="45.0791" gradientUnits="userSpaceOnUse">
<stop stop-color="#525159"/>
<stop offset="1" stop-color="#232426"/>
</linearGradient>
<linearGradient id="paint8_linear_76_10962" x1="45.0451" y1="36.6442" x2="47.7729" y2="43.7555" gradientUnits="userSpaceOnUse">
<stop stop-color="#414141"/>
<stop offset="0.223759" stop-color="white"/>
<stop offset="0.755" stop-color="#414141"/>
<stop offset="1" stop-color="#6B6B6B"/>
</linearGradient>
<radialGradient id="paint9_radial_76_10962" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45.0454 40.546) rotate(90) scale(3.75928 3.75928)">
<stop/>
<stop offset="1" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint10_linear_76_10962" x1="45.0459" y1="36.7405" x2="45.0459" y2="44.3519" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0.41"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint11_linear_76_10962" x1="45.0459" y1="36.7405" x2="45.0459" y2="44.3519" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0.41"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint12_linear_76_10962" x1="45.0459" y1="36.7405" x2="45.0459" y2="44.3519" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0.41"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint13_linear_76_10962" x1="45.0459" y1="36.7405" x2="45.0459" y2="44.3519" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0.41"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint14_linear_76_10962" x1="45.0459" y1="36.7405" x2="45.0459" y2="44.3519" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0.41"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
</defs>
</svg>

  )
}
