import React, { useContext, useEffect, useRef } from 'react'
 import classes from './main.module.css';

import { BatteryVolt, Indication, InputPower, Panto, Pressure, VCB } from '../bombardier/home/home';
import ARCFooter from './footer/footer';
import DynamicContent from './dynamicContent/dynamicContent';
import SubSystem from '../../../components/DDU/subSystem/subSystem';
import { useDDUBTStore } from '../bombardier/store';
import { LocoMode } from '../../../components/DDU/locoMode/locoMode';
import CustomLineGraph from '../../../components/DDU/lineGraph/lineGraph';
import ARCTEBEGraph from '../../../components/DDU/TEBEGraph/ARCTEBEGraph';
import FunctionalKeys from './functonalKeys/FunctionalKeys';
import { useARCStore } from './store';
import { topics } from '../../../constant/topic';
import { ARCContext, ARCContextProvider } from './Context';
import { useData } from '../../../components/useData';

export const LGPairs=({data})=>{
  return(
    <div className={classes.lgPair}>
     {data?.map((item, index)=>{
      return(
        <span key={index}>{item?.title + item?.value}</span>
      )
     })}
    </div>
  )
}
export const LGAndDate=()=>{
  const {flg, alg, slg}=useContext(ARCContext);
  const lgData=[
    {
      title:"FLG1 : ",
      value: flg||0,
    },
    {
      title:"SLG1 : ",
      value: slg||0,
    },
    {
      title:"ALG1 : ",
      value: alg||0,
    },
    {
      title:"FLG2 : ",
      value: flg||0,
    },
    {
      title:"SLG2 : ",
      value: slg||0,
    },
    {
      title:"ALG2 : ",
      value: alg||0,
    },
  ];
  return(
    <div className={classes.lgAndDate}>
      <LGPairs data={lgData}/>
      <div className={classes.dateTime}>
            <span>29-Feb-2020</span>
            <span>11:11:25</span>
      </div>
    </div>
  )
}
export const SubSystems=({data})=>{
  const {handleActivateScreen}=useDDUBTStore();
  const subSystems = [
    {
      name: "MAIN",
      number: "SS01",
      operative: data?.SS01,
    },
    {
      name: "Bogie 1",
      number: "SS02",
      operative: data?.SS02,
    },
    {
      name: "Bogie 2",
      number: "SS03",
      // isolated: true,
      operative: data?.SS03,
    },
    {
      name: "MAIN",
      number: "SS04",
      // isolated: true,
      operative: data?.SS04,
    },
    {
      name: "MAIN",
      number: "SS05",
      operative: data?.SS05,
    },
    {
      name: "MAIN",
      number: "SS06",
      operative: data?.SS06,
    },
    {
      name: "MAIN",
      number: "SS07",
      operative: data?.SS07,
    },
    {
      name: "MAIN",
      number: "SS08",
      operative: data?.SS08,
    },
    {
      name: "MAIN",
      number: "SS09",
      operative: data?.SS09,
    },
    {
      name: "MAIN",
      number: "SS10",
      operative: data?.SS10,
    },
    {
      name: "MAIN",
      number: "SS11",
      operative: data?.SS11,
    },
    {
      name: "MAIN",
      number: "SS12",
      operative: data?.SS12,
    },
    {
      name: "MAIN",
      number: "SS13",
      operative: data?.SS13,
    },
    {
      name: "MAIN",
      number: "SS14",
      operative: data?.SS14,
    },
    {
      name: "MAIN",
      number: "SS15",
      operative: data?.SS15,
    },
    {
      name: "MAIN",
      number: "SS16",
      operative: data?.SS16,
    },
    {
      name: "MAIN",
      number: "SS17",
      operative: data?.SS17,
    },
    {
      name: "MAIN",
      number: "SS18",
      operative: data?.SS18,
    },
    {
      name: "MAIN",
      number: "SS19",
      operative: data?.SS19,
    },
    // {
    //   name: "MAIN",
    //   number: "SS20",
    //   operative: commonData?.SS19,
    // },
  ];
  return(
    <div className={classes.subSystems}>
        {subSystems?.map((item, index)=>{
          return(
            <SubSystem
            key={index}
            width={"2.3rem"}
            height={"100%"}
            number={item?.number}
            isOperative={item?.operative}
            isIsolated={item?.isolated}
            lineWidth={"70%"}
            onClick={()=>handleActivateScreen({type:"isolate SS", data:item})}
            />
          )
        })}
    </div>
  )
}

export const ARCContent=({ DDUType})=>{
  const data=useContext(ARCContext);
  return(
    <div className={classes.mainContent}>                 
            <section className={classes.content}>
            <Indication 
            label1={"O/C"}
            lable2={"PRIMARY"}
            color1={data?.overCurrent===1?"var(--color-red)":""}
            color2={data?.overCurrent===1?"var(--color-red)":""}

            />
            <Indication 
            label1={"E/F"}
            lable2={"POWER"}
            color1={data?.faultIndicator===1?"var(--color-red)":""}
            color2={data?.faultIndicator===1?"var(--color-red)":""}
            />
            <Indication 
            label1={"E/F"}
            lable2={"AUXILIARY"}
            color1={data?.faultIndicator===2?"var(--color-red)":""}
            color2={data?.faultIndicator===2?"var(--color-red)":""}
            />
            <Indication 
            label1={"E/F"}
            lable2={"CONTROL"}
            color1={data?.faultIndicator===3?"var(--color-red)":""}
            color2={data?.faultIndicator===3?"var(--color-red)":""}
            />
        <LGAndDate/>
        <LocoMode screen={DDUType} number={data?.master} direction={data?.reverser===1?"forward":"backward"}/>

        <Panto screen={DDUType} type={data?.vcb===1?'UP':"Down"} />
        <VCB screen={DDUType} type={data?.panto===1?'open':"closed"}/>
          
        <InputPower powerVal={data?.power||0} freqVal={data?.frequency||0} screen={"ARC"}/> 

        <div className={classes.arcGraph}>
              <ARCTEBEGraph data={[100, 75, 50 , 25, 0, -25, -50, -75, -100]} boggie1Val={data?.boggie1Val||0} boggie2Val={data?.boggie2Val||0}/>
              <div className={classes.arcVcat}>
                      <span className='fc-1 fs-4'>Vcat</span>
                      <CustomLineGraph 
                        screen={DDUType}
                      backgroundColor="var(--color-yellow)"
                        data={[30, 20, 10, 0]} 
                        pointerValue={data?.catenary_voltage||0}/>
                      <span className='fc-2 fs-2'>{data?.catenary_voltage||0} kV</span>
              </div>
              <div className={classes.arcVcat}>
                    <span className='fc-1 fs-4'>Ipri</span>
                      <CustomLineGraph 
                        screen={DDUType}
                        backgroundColor="var(--color-yellow)"
                        data={[ 300, 200, 100, 0]}
                        pointerValue={data?.primary_current||0}/>
                      <span className='fc-3 fs-2'>{data?.primary_current||0} A</span>
              </div>       
        </div>
        <div className={classes.dynamicWrapper}>
          <SubSystems data={data}/>
          <DynamicContent/>
        </div>
        <BatteryVolt value={data?.battey||0}/>
        <Pressure
            name={"BC"}
            value={"APPLIED"}
            color={"rgba(229, 57, 53, 1)"}
            />
        <Pressure
            name={"MR"}
            value={data?.mrPressure}
            unit={"kg/cm2"}
            color={"rgba(229, 57, 53, 1)"}
            />
            <Pressure
            name={"BP"}
            value={data?.bpPressure}
            unit={"kg/cm2"}
            color={"rgba(229, 57, 53, 1)"}
            />
            </section>
            <ARCFooter/>
    </div>
  )
}

export const  ARCMain = ({DDUType, callScreen}) => {
  const {brightness}=useARCStore();
  const heightRef = useRef(null);
   const {data:commonData}=useData(topics.ARCCOMMONVARIABLES);

    const scaleUI = () => {
      const wrapper = heightRef.current;
      if (wrapper&&callScreen !== "cab_replicate") {
        const scaleX =window.innerWidth / 1024;
        const scaleY = window.innerHeight / 728;
        const scale = Math.min(scaleX, scaleY);
         wrapper.style.transform = `scale(${scale})`;
      }
      else if(callScreen === "cab_replicate")
      {
        const scaleX =window.innerWidth/ 1000;
        const scaleY =window.innerHeight/1350;
        const scale = Math.min(scaleX, scaleY);
         wrapper.style.transform = `scale(${scale})`;
      }
    };
  
    useEffect(() => {
      scaleUI();
      window.addEventListener("resize", scaleUI);
      return () => window.removeEventListener("resize", scaleUI);
    }, []);

    console.log("commonData",commonData)
  return (
    <div className={classes.container}  style={{  filter: `brightness(${brightness}%)`,}} ref={heightRef}>
      <span>DRIVER INTERFACE UNIT</span>
      <div className={classes.contentWrapper}>
          <div className={classes.ARCContent}>
            <ARCContextProvider value={{...commonData}}>
            <ARCContent DDUType={DDUType}/>
            <FunctionalKeys/>
            </ARCContextProvider>            
            </div>
      </div>
    </div>
  )
}
