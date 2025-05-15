import React from 'react'
import classes from './VehicleDiagnostics.module.css';
import { Icons } from '#framework';
import { useARCStore } from '../../../store';
export default function VehicleDiagnostics({data, title, loco}) {
     const {pixyScreenPointer}=useARCStore();
    const {arrow_right_yellow_icon}=Icons.DDUIcons;
  return (
    <div className={classes.container}>
        <div className={classes.titleDiv}>
            <div>
                <span></span>
                <span>{title}</span>
            </div>
            <span>{loco}</span>
        </div>
        <div className={classes.dataInfo}>
        {
            data?.map((item, index)=>{
                return(
                    <div>
                            <div>
                                <span>
                                    {index===pixyScreenPointer&&<img src={arrow_right_yellow_icon}/>}
                                </span>
                                <span>{index+1}. {item.name}</span>
                            </div>
                            <span>{item.value}</span>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}
