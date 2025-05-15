import React from "react";
import classes from './operation.module.css';
import { BatteryVolt, Indication, InputPower, Panto, Pressure, TEBE, Vcat, VCB } from "../home/home";
import MasterLoco from "../../../../components/DDU/locoMode/masterLoco";
import SlaveLoco from "../../../../components/DDU/locoMode/slaveLoco";
import { useDDUBTStore } from "../store";
export const ContentHighLight=({screen})=>{
     const { commonData } =useDDUBTStore();
    return(
        <>
                <TEBE label1={"TE/BE"} lable2={"BOGIE 1"} value={commonData?.te_be_bogie_1||0} unit={"kN"}/>
                <TEBE label1={"TE/BE"} lable2={"BOGIE 2"} value={commonData?.te_be_bogie_2||0} unit={"kN"}/>
                <Vcat
                  name={"Vcat"}
                  value={commonData?.catenary_voltage||0}
                  unit={"kV"}
                  color={"rgba(30, 144, 255, 1)"}
                />
                <Vcat
                  name={"Ipris"}
                  value={commonData?.primary_current||0}
                  unit={"A"}
                  color={"rgba(255, 193, 7, 1)"}
                />
                <TEBE
                label1={"LOCO"}
                lable2={"SPEED"}
                value={commonData?.speed||0}
                unit={"Kmph"}
                />
                {screen==="maintenance"&&<>
                 <BatteryVolt value={commonData?.battery||0} />
                <Panto type={commonData?.panto===1?"UP":"DOWN"}/>
                <VCB type={commonData?.vcb===1?"open":'close'} />
                </>}
                 <MasterLoco locoNumber={commonData?.master} direction={commonData?.reverser}/>
                {commonData?.slave===1?<SlaveLoco locoNumber={commonData?.slave} direction={commonData?.reverser}/>:<div></div>}
        </>
    )
}
export const Operations=({children})=>{
     const { commonData } =useDDUBTStore();
    return(
        <div className={classes.container}>
                <ContentHighLight />
                {children}            
                 <BatteryVolt value={commonData?.battery||0} />
                <InputPower powerVal={commonData?.power||0} freqVal={commonData?.frequency||0}/>
                <Panto type={commonData?.panto===1?"UP":"DOWN"}/>
                <VCB type={commonData?.vcb===1?"open":'close'} />
               <Pressure
                name={"MR"}
                value={commonData?.mrPressure||0}
                unit={"kg/cm2"}
                color={"rgba(229, 57, 53, 1)"}
            />
            <Pressure
                name={"BP"}
                value={commonData?.bpPressure||0}
                unit={"kg/cm2"}
                color={"rgba(229, 57, 53, 1)"}
            />
              <Indication
                label1={"BC 1"}
                lable2={commonData?.a_9===3||commonData?.a_9===4||commonData?.a_9===5?"APPLIED":"RELEASED"}
                color1={"var(--color-white)"}
                color2={commonData?.a_9===3||commonData?.a_9===4||commonData?.a_9===5?"rgba(255, 193, 7, 1)":"rgba(40, 167, 69, 1)"}
            />
            <Indication
                label1={"BC 2"}
                lable2={commonData?.a_9===3||commonData?.a_9===4||commonData?.a_9===5?"APPLIED":"RELEASED"}
                color1={"var(--color-white)"}
                color2={commonData?.a_9===3||commonData?.a_9===4||commonData?.a_9===5?"rgba(255, 193, 7, 1)":"rgba(40, 167, 69, 1)"}
            />
        </div>
    )
}