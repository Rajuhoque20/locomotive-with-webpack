import React from "react";
import classes from './TEBEGraph.module.css';
import { mappedValueFn } from "../lineGraph/lineGraph";
export const RightPointer=({pointerPos, bgColor})=>{
    return(
        <div  className={classes.triangleRight} style={{borderLeft: `1.3vh solid ${bgColor}`, bottom:`${pointerPos}%`}}>
        </div>
    )
}
export const TEBEGraph=({data, pointerValue, })=>{
  const currentVal=pointerValue;
  const minVal=data[data.length-1];
  const maxVal=data[0];
  const pointerMin=1.5;
  const pointerMax=95;
  const pointerPos=mappedValueFn(minVal, maxVal, pointerMin, pointerMax, currentVal);
    return(
        <div className={classes.container}>
            <div className={classes.content}>
                    <div className={classes.pointerDiv}>
                        <span className="fc-5" style={{fontSize:"0.8rem"}}>TE</span>
                        <span className="fc-5" style={{fontSize:"0.8rem"}}>BE</span>             
                        <RightPointer bgColor={"rgba(40, 167, 69, 1)"} pointerPos={pointerPos}/>                          
                    </div>
                    <div className={classes.dataInfo}>
                        {data?.map((item, index)=>{
                            return(
                                <>
                                <div key={index} className={classes.eachInfo}>
                                        <span></span>
                                        <span className= 'fc-1' style={{fontSize:"0.8rem"}}>{item}</span>
                                </div>
                                </>
                            )
                        })}
                        <span className={classes.verticalLine}></span>
                    </div>
            </div>
        </div>
    )
}