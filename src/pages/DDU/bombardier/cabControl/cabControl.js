import React, { useState } from 'react'
import classes from './cabControl.module.css';
import { BatteryVolt, Indication, InputPower, Panto, Pressure, VCB } from '../home/home';
import { LocoMode } from '../../../../components/DDU/locoMode/locoMode';
import { PasswordPage } from '../maintenance/maintenance';
import { Speedometer } from '../home/speedometer/speedometer';
import { TEBEGraph } from '../../../../components/DDU/TEBEGraph/TEBEGraph';
import CustomLineGraph from '../../../../components/DDU/lineGraph/lineGraph';
export const BottomContent=()=>{
    return(
        <>
                <Indication 
                label1={"O/C"}
                lable2={"PRIMARY"}
                />
                <Indication 
                label1={"E/F"}
                lable2={"POWER"}
                />
                 <Indication 
                label1={"E/F"}
                lable2={"AUXILIARY"}
                color1={"rgba(255, 193, 7, 1)"}
                color2={"rgba(255, 193, 7, 1)"}
                />
                <Indication 
                label1={"E/F"}
                lable2={"CONTROL"}
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
                <LocoMode
                type="S"
                number="30277"
                name="WAP7"
                activeCab={null}
                activeScreen={false}
                direction={null}
                />
        </>
    )
}

export const ControlScreen=()=>{
    return(
        <div className={classes.controlScreen}>
            <div className={classes.locoSpeed}>
                <Speedometer/>   
                <div></div>
            </div>
            <div className={classes.graph}>
                <div>
                    <div className='d-flex  justify-between py-2'>
                        <div className='d-flex align-center justify-center flex-col'>
                                <TEBEGraph data={[600, 500, 400, 300, 200, 100, 0, -100, -200, -300, -400, -500, -600]} pointerValue={300}/>
                                <span className='fc-1 fs-4' style={{margin:"auto", height:"10%"}}>BOGIE1</span>
                        </div>
                        <div className='d-flex align-center justify-center flex-col'>
                                <TEBEGraph data={[600, 500, 400, 300, 200, 100, 0, -100, -200, -300, -400, -500, -600]} pointerValue={300}/>
                                <span className='fc-1 fs-4' style={{margin:"auto", height:"10%"}}>BOGIE2</span>
                        </div>
                        <div className='d-flex flex-col align-center' >
                           
                                    <CustomLineGraph backgroundColor="rgba(30, 144, 255, 1)" data={[350, 300, 250, 200, 150, 100, 50, 0]} pointerValue={150}/>
                           
                                 
                                 <span className='fc-1 fs-4' style={{margin:"auto", height:"10%"}}>U</span>
                        </div>
                    
                    </div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={classes.throttle}>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default function CabControl() {
    const [tabContent, setTabContent]=useState("");
    const [password, setPassword]=useState("");
    const [isEntered, setIsEntered]=useState(false);
    
  return (
    <div className={classes.container}>
        {isEntered?
        <ControlScreen/>
        :
        <div className={classes.driving}>
            <span>DRIVING IS POSSIBLE FROM CURRENT CAB </span>
                <PasswordPage
                password={password} 
                setIsEntered={setIsEntered} 
                setPassword={setPassword}
                setTabContent={setTabContent}
                />
        </div>}
        <BottomContent/>
    </div>
  )
}
