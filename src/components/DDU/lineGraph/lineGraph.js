import React from 'react';
import './lineGraph.css';
export const mappedValueFn=(min1, max1, min2, max2, current)=>{
    const result=min2+((current-min1)/(max1-min1))*(max2-min2);
    return result;
  }
  export const LeftPointer=({pointerPos, bgColor})=>{
    return(
        <div className='triangle-left' style={{borderRight: `1.3vh solid ${bgColor}`, bottom:`${pointerPos}%`}}>
        </div>
    )
  }
const CustomLineGraph = ({backgroundColor="rgba(30, 144, 255, 1)", data, pointerValue, screen}) => {
  let bgColor=backgroundColor;
  const currentVal=pointerValue;
  const minValue=data[data.length-1];
  const maxValue=data[0];
  const point=mappedValueFn(minValue, maxValue, 0, 100, currentVal);
  const pointerPos=mappedValueFn(minValue, maxValue, 1.4, 95.5, currentVal);
  return (
   <div className='graph-wrapper'>
        <div className='data-info' style={{borderRight:screen==="ARC"?"var(--border-primary)":"auto"}}>
            {data?.map((item, index)=>{
                return(
                    <>
                    <div key={index} className='each-info'>
                            <span className='fc-1' style={{fontSize:"0.8rem",marginLeft:"auto"}}>{item}</span>
                            <span style={{width:screen==="ARC"?"4vw":""}}></span>
                    </div>
                    {index<data?.length-1&&<div key={index} className='each-info2'>
                            <span></span>
                            <span style={{width:screen==="ARC"?"2vw":""}}></span>
                    </div>}
                    </>
                )
            })}
        </div>
        {screen!=="ARC"&&<div className='cover' >
                <div style={{height:`${point}%`, background:bgColor}} ></div>
        </div>}
        <div className='pointer-div'>
            <LeftPointer pointerPos={pointerPos} bgColor={bgColor}/>
        </div>
   </div>
  );
};
export default CustomLineGraph;
