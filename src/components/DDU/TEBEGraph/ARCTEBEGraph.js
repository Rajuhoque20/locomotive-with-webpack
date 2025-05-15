import React from 'react'
import classes from './ARCTEBEGraph.module.css';
import { LeftPointer, mappedValueFn } from '../lineGraph/lineGraph';
import { RightPointer } from './TEBEGraph';
export default function ARCTEBEGraph({data, boggie1Val=0, boggie2Val=0}) {

    const minValue=data[data?.length-1];
    const maxValue=data[0];
    const leftPointerPos=mappedValueFn(minValue, maxValue, 1, 95.7, boggie1Val);
    const rightPointerPos=mappedValueFn(minValue, maxValue, 1, 95.7, boggie2Val);

  return (
    <div className={classes.container}>
       
       
        <div className={classes.grapWrapper}>
            <div>
                <span className='fc-1 fs-4'>W</span>
                <span className='fc-2 fs-4'>TE/BE</span>
                <span className='fc-1 fs-4'>X</span>
            </div>
            <div className={classes.graphContainer}>
                    <div className={classes.leftPointerDiv}>
                    <RightPointer pointerPos={leftPointerPos} bgColor={"var(--color-green)"}/>
                    </div>
                     <div>
                        {data?.map((item, index)=>{
                            return(
                                <>
                                 <div className={classes.info1}>
                                    <span></span>
                                    <span className='fc-1' style={{fontSize:"0.8rem"}}>{item}</span>
                                    <span></span>
                                 </div>
                                 {index!==data?.length-1&&<div className={classes.info2}>
                                    <span></span>
                                    <span ></span>
                                    <span></span>
                                 </div>}

                                </>
                               
                            )
                        })}

                     </div>
                    <div className={classes.rightPointerDiv}>
                        <LeftPointer pointerPos={rightPointerPos} bgColor={"var(--color-yellow)"}/>
                    </div>
            </div>
            <div>
                <span className='fc-2 fs-4'>{boggie1Val}</span>
                <span className='fc-1 fs-4'>kN</span>
                <span className='fc-3 fs-4'>{boggie2Val}</span>
            </div>
        </div>
       
        
        

    </div>
  )
}
