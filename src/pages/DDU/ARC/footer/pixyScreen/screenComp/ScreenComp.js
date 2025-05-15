import React from 'react'
import classes from './ScreenComp.module.css';
import { Icons } from '#framework';
import { useARCStore } from '../../../store';
export default function ScreenComp({title,  loco, data}) {
    const {arrow_right_yellow_icon}=Icons.DDUIcons;
    const {pixyScreenPointer}=useARCStore();
  return (
    <div className={classes.container}>
        <div className={classes.titleDiv}>
            <div>
                <span></span>
                {title&&<span>{title} :</span>}
            </div>
            <span>{loco}</span>
        </div>
        <div className={classes.dataInfo}>
        {
            data?.map((item, index)=>{
                return(
                    <div>
                        <span>
                             {index===pixyScreenPointer&&<img src={arrow_right_yellow_icon}/>}
                        </span>
                        <span>{index+1}. {item}</span>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}
