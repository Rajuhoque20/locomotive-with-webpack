import React from 'react'
import classes from './activateScreen.module.css';
import { LocoMode } from '../../../../components/DDU/locoMode/locoMode';
import { BatteryVolt, Indication, InputPower, Panto, Pressure, VCB } from '../home/home';
import IsolateSS from './isolateSS/isolateSS';
import { useDDUBTStore } from '../store';
export default function ActivateScreen() {
    const {activateScreen, handleActivateScreen}=useDDUBTStore();
    const handleClickNo=()=>{
        handleActivateScreen(null);
    }
    const handleClickYes=()=>{
        if(activateScreen.type==="isolate SS")
        {

        }
        handleActivateScreen(null);
    }
    let title=activateScreen?.type==="isolate SS"?`DO YOU WANT TO ISOLATE SUB SYSTEM ${activateScreen?.data?.number } (${activateScreen?.data?.name})?`:
    activateScreen?.type==="activate sanding"?`DO YOU WANT TO ACTIVATE SANDING ?`:
    activateScreen?.type==="apply parking brake"?`DO YOU WANT TO APPLY PARKING BRAKE ?`:"";
  return (
    <div className={classes.container}>
                <IsolateSS 
                title={title}
                onNo={handleClickNo}
                onYes={handleClickYes}
                />
                <LocoMode
                 type="M"
                 number="30277"
                 name="WAP7"
                 activeCab={2}
                 activeScreen={true}
                 direction="forward"
                />
                <LocoMode
                type="S"
                number="30277"
                name="WAP7"
                activeCab={null}
                activeScreen={false}
                direction={null}
                />
                <BatteryVolt value={109.9}/>
                <InputPower powerVal={34.9} freqVal={49.0}/>
                <Panto type="UP"/>
                <VCB type={"open"}/>
                <Pressure
                name={"MR"}
                value={"<6.4"}
                unit={"kg/cm2"}
                color={"rgba(229, 57, 53, 1)"}
                />
                 <Pressure
                name={"BP"}
                value={"2.5"}
                unit={"kg/cm2"}
                color={"rgba(229, 57, 53, 1)"}
                />           
                 <Indication 
                label1={"BC 1"}
                lable2={"RELEASED"}
                color1={"var(--color-white)"}
                color2={"rgba(40, 167, 69, 1)"}
                />
                <Indication 
                label1={"BC 2"}
                lable2={"APPLIED"}
                color1={"var(--color-white)"}
                color2={"rgba(255, 193, 7, 1)"}
                />
    </div>
  )
}
