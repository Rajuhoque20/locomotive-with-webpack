import React, { lazy, Suspense } from 'react'
import classes from './Layout.module.css';
import { useVIDStore } from './store';
import { PnumaticContext } from './Context';

const HB1Main = lazy(() => import('./HB/HB1Main'));
const HB2Main = lazy(() => import('./HB/HB2Main'));
const SB1Main = lazy(() => import('./SB1/SB1Main'));
const SB2 = lazy(() => import('./SB2/SB2'));
const PNUMain = lazy(() => import('./PNU/PNUMain'));
const FilterCubicleMain = lazy(() => import('./filterCubical/filterCubicleMain'));

export default function Layout({
  data
}) {
   const {navPage}=useVIDStore();
   const SB1Data={
    switch_152:data?.switch_152,
    switch_160:data?.switch_160,
    switch_154:data?.switch_154,
    switch_237_1:data?.switch_237_1,
    key_179:data?.key_179,
    vcu_reset:data?.vcu_reset,
    mcb_127_3_1:data?.mcb_127_3_1,
    mcb_127_12:data?.mcb_127_12,
    mcb_127_91_1:data?.mcb_127_91_1,
    mcb_310_1_1:data?.mcb_310_1_1,
    mcb_127_1_1:data?.mcb_127_1_1,
    mcb_127_11_1:data?.mcb_127_11_1,
    mcb_127_2_1: data?.mcb_127_2_1,
    mcb_127_22_1: data?.mcb_127_22_1,
    mcb_127_9_1: data?.mcb_127_9_1,
    mcb_127_9_2: data?.mcb_127_9_2,
    headlight_contactor:data?.headlight_contactor
   };

   const SB2Data={
    mcb_127_81:data?.mcb_127_81,
    mcb_127_15:data?.mcb_127_15,
    mcb_127_7:data?.mcb_127_7,
    mcb_127_82:data?.mcb_127_82,
    mcb_48_1:data?.mcb_48_1,
    mcb_127_3_2:data?.mcb_127_3_2,
    mcb_127_91_2:data?.mcb_127_91_2,
    mcb_310_7_1:data?.mcb_310_7_1,
    mcb_310_1_2:data?.mcb_310_1_2,
    mcb_310_4:data?.mcb_310_4,
    mcb_127_1_2:data?.mcb_127_1_2,
    mcb_127_11_2:data?.mcb_127_11_2,
    mcb_127_2_2:data?.mcb_127_2_2,
    mcb_127_22_2:data?.mcb_127_22_2,
    mcb_127_22_3:data?.mcb_127_22_3,
    mcb_127_9_3: data?.mcb_127_9_3,
    mcb_127_9_4: data?.mcb_127_9_4,
    mcb_127_92:data?.mcb_127_92,
    mcb_110:data?.mcb_110 , 
    mcb_112_1:data?.mcb_112_1,
   };

   const filterCubicleData={
    contactor_filter_adaption:data?.mcb_8_2,
    contactor_filter_ON_OFF:data?.mcb_8_1, 
    contactor_discharging_resistor:data?.mcb_8_41,
   };

       

       
   const HB1Data={
    mcbThree:[
      {
        value:data?.mcb_62_1_1,
        key:"mcb_62_1_1",
        title:"62.1/1-Circuit breaker oil pump transformer",
        width:"15%",
      },
      {
        value:data?.mcb_63_1_1,
        key:"mcb_63_1_1",
        title:"63.1/1-Circuit breaker oil pump converter",
        width:"15%",
      },
      {
        value:data?.mcb_47_1_1,
        key:"mcb_47_1_1",
        title:"47.1/1-Circuit breaker, main compressor",
        width:"15%",
      },
      {
        key:"mcb_53_1_1",
        value:data?.mcb_53_1_1,
        title:"53.1/1-Circuit breaker, traction motor blower ",
        width:"15%",
      },
      {
        value:data?.mcb_55_1_1,
        key:"mcb_55_1_1",
        title:"55.1/1-Circuit breaker, scavenge blower to traction motor blower  and oil cooling unit",
        width:"20%",
      },
      {
        value:data?.mcb_59_1_1,
        key:"mcb_59_1_1",
        title:"59.1/1-Circuit breaker, oil cooling unit, transformer/converter ",
        width:"18%",
      }
    ],
    mcbTwo:[
      {
        value:data?.mcb_54_1_1,
        key:"mcb_54_1_1",
        title:"54.1/1-Circuit breaker, machine room blower",
      },
      {
        value:data?.mcb_56_1_1,
        key:"mcb_56_1_1",
        title:"56.1/1-Circuit breaker, scavenge blower to machine room blower",
      },
    ],
    mcbOne:[
      {
        value:data?.mcb_69_61,
        key:"mcb_69_61",
        title:"69.61-Circuit breaker,cab ventilation",
      },
      {
        value:data?.mcb_69_62,
        key:"mcb_69_62",
        title:"69.62-Circuit breaker, cab heater",
      },
      {
        value:data?.mcb_69_71,
        key:"mcb_69_71",
        title:"69.71-Circuit breaker, crew fan ",
      }
    ],
    auxiliary_contactor:[
      {
        value:data?.mcb_52_3_4,
        key:"mcb_52_3_4",
      },
      {
        value:data?.mcb_52_3_5,
        key:"mcb_52_3_5",
      },
    ],
    contactor_oil_pump:[
      {
        value:data?.mcb_52_4,
        key:"mcb_52_4",
      },
      {
        value:data?.mcb_52_4,
        key:"mcb_52_5",
      },
    ],
    contactor_main_pressure:{
      value:data?.mcb_47_2,
      valueKey:"mcb_47_2"
    },
    fuse_auxiliary:{
      value:data?.auxiliary_fuse,
      key:"auxiliary_fuse",
      
    }
   };

   const HB2Data={
    mcbThree:[
      {
        value:data?.mcb_62_1_2,
        key:"mcb_62_1_2",
        title:"62./12-Circuit breaker, transformer oil pump",
        width:"15%",
      },
      {
        value:data?.mcb_63_1_2,
        key:"mcb_63_1_2",
        title:"63.1/2-Circuit breaker, converter oil pump",
        width:"15%",
      },
      {
        value:data?.mcb_47_1_2,
        key:"mcb_47_1_2",
        title:"47.1/2-Circuit breaker, main compressor",
        width:"15%",
      },
      {
        key:"mcb_53_1_2",
        value:data?.mcb_53_1_2,
        title:"53.1/2-Circuit breaker traction motor blower",
        width:"15%",
      },
      {
        value:data?.mcb_55_1_2,
        key:"mcb_55_1_2",
        title:"55.1/2-Circuit breaker, scavenge blower to traction motor blower and oil cooling unit",
        width:"20%",
      },
      {
        value:data?.mcb_59_1_2,
        key:"mcb_59_1_2",
        title:"59.1/2-Circuit breaker, oil cooling unit, transformer/converter",
        width:"18%",
      }
    ],
    mcbTwo:[
      {
        value:data?.mcb_54_1_2,
        key:"mcb_54_1_2",
        title:"54.1/2-Circuit breaker, machine room blower",
      },
      {
        value:data?.mcb_56_1_2,
        key:"mcb_56_1_2",
        title:"56.1/2-Circuit breaker, scavenge blower to machine room blower",
      },
    ],

    contactor_scavenge_blower:[
      {
        value:data?.mcb_52_4_1,
        valueKey:"mcb_52_4_1",
      },
      {
        value:data?.mcb_52_4_2,
        valueKey:"mcb_52_4_2",
      },
    ],
    contactor_oil_pump:[
      {
        value:data?.mcb_52_5_1,
        key:"mcb_52_5_1",
      },
      {
        value:data?.mcb_52_5_2,
        key:"mcb_52_5_2",
      },
    ],
    auxiliary_contactor:[
      {
        value:data?.mcb_52_6_1,
        key:"mcb_52_6_1",
      },
      {
        value:data?.mcb_52_6_2,
        key:"mcb_52_6_2",
      },
    ],
    contactor_main_pressure:{
      value:data?.mcb_47_2_2,
      valueKey:"mcb_47_2_2"
    },
   };

   const PneumaticPanelData = {
    pneumatic_panel_type:data?.pneumatic_panel_type||"E70",
    sand1_cock: data?.sand1_cock || 0,
    sand2_cock: data?.sand2_cock || 0,
    switch_129_1: data?.switch_129_1 || 0,
    filter_cubicle_coc: data?.filter_cubicle_coc || 0,
    pan1_cock: data?.pan1_cock || 0,
    pan2_cock: data?.pan2_cock || 0,
    vcb_cock: data?.vcb_cock || 0,
    traction_converter_1_coc: data?.traction_converter_1_coc || 0,
    traction_converter_2_coc: data?.traction_converter_2_coc || 0,
    ig_38_switch: data?.ig_38_switch || 0,
    parking_brake_apply: data?.parking_brake_apply || 0,
    parking_brake_release: data?.parking_brake_release || 0,
    cock_136: data?.cock_136 || 0,
    cock_74: data?.cock_74 || 0,
    cock_47: data?.cock_47 || 0,
    c3w_isolation_handle: data?.c3w_isolation_handle || 0,
    c3w_qrv: data?.c3w_qrv || 0,
    pneumatic_panel_e70:  data?.pneumatic_panel_e70,
    pressure_switch_130_4_1:data?.pressure_switch_130_4_1||0,
    pressure_switch_130_4_2:data?.pressure_switch_130_4_2||0,
    pressure_switch_269_1:data?.pressure_switch_269_1||0,
    pressure_switch_269_2:data?.pressure_switch_269_2||0,
    pressure_switch_269_3:data?.pressure_switch_269_3||0,
    pressure_switch_269_42:data?.pressure_switch_269_42||0,
  }

 


  
  return (
    <div className={classes.containerWrapper} >
             <div className={classes.container} style={{width:navPage==="PNU"?"100%":"auto"}}> 
                 <Suspense fallback={<div>{"Loading..."}</div>}>
                      {navPage==="HB1"&&<HB1Main type={"HB1"} data={HB1Data}/>}
                      {navPage==="HB2"&&<HB2Main type={"HB2"} data={HB2Data}/>}
                      {navPage==="SB1"&&<SB1Main data={SB1Data}/>}
                      {navPage==="SB2"&&<SB2 data={SB2Data}/>}
                      {navPage==="PNU"&&
                      <PnumaticContext.Provider value={{...PneumaticPanelData}}>
                         <PNUMain />
                      </PnumaticContext.Provider>
                     }
                      {navPage==="FILTER_CUBICAL"&&<FilterCubicleMain data={filterCubicleData}/>}     
                 </Suspense>                               
             </div>
    </div>
  )
}
