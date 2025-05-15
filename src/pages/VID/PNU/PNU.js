import React, { useContext } from 'react'
import classes from './PNU.module.css';
import { Icons } from '#framework';
import SanderComp from './SanderComp';
import COCComp from './COCComp';
import ParkingBrake from './ParkingBrake';
import RotarySwitch from './RotarySwitch';
import IsolatingCock from './IsolatingCock';
import KeySwitch from './KeySwitch';
import BrakeFeedPipe from './BrakeFeedPipe';
import { PnumaticContext } from '../Context';
import CustomTooltip from '../../../components/VID/CustomPopover/CustomTooltip';

 const PNU=()=> {
  const {pnu_image, isolation_handel_active, isolation_handel_inactive}=Icons.VIDIcons;
  const E70Data=useContext(PnumaticContext);

  return (
    <div className={classes.containerWrapper}>
      <div className={classes.container}>
        <svg width={"100%"} height={"100%"} viewBox='0 0 400 800' preserveAspectRatio='none' >
          <foreignObject x={-15} y={0} width={430} height={800} style={{zIndex:100}}>
            <div className='d-flex align-center justify-center' style={{width:"100%",height:800}}>
            <img src={pnu_image} style={{width:"96%",height:"100%", objectFit:"fill",}} />
            </div>
          </foreignObject>
          <foreignObject x={32} y={179} width={25} height={32}>
            <RotarySwitch width={25} height={32} data={E70Data?.switch_129_1||0} valueKey={"switch_129_1"}/>
          </foreignObject>

          <foreignObject x={170} y={253} width={100} height={100}>
            <IsolatingCock width={100} height={100} data={E70Data?.cock_74||0} valueKey={"cock_74"}/>
          </foreignObject>

          <foreignObject x={290} y={253} width={100} height={100}>
            <IsolatingCock width={100} height={100} data={E70Data?.pneumatic_panel_e70?.isolating_cock_293_2||0} valueKey={"isolating_cock_293_2"}/>
          </foreignObject>

          <foreignObject x={259} y={380} width={20} height={20}>
            <COCComp width={20} height={20} data={E70Data?.pan1_cock||0} valueKey={"pan1_cock"}/>
          </foreignObject>

          <foreignObject x={360} y={380} width={20} height={20}>
            <COCComp width={20} height={20} data={E70Data?.pan2_cock||0} valueKey={"pan2_cock"}/>
          </foreignObject>

          <foreignObject x={145} y={556} width={30} height={30}>
            <SanderComp width={30} height={30} data={E70Data?.cock_47||0} valueKey={"cock_47"}/>
          </foreignObject>

          <foreignObject x={16} y={515} width={30} height={85}>
           <img src={E70Data?.c3w_isolation_handle===1? isolation_handel_active:isolation_handel_inactive} style={{width:"100%", height:E70Data?.c3w_isolation_handle===1?85:50}}/>
          </foreignObject>

          <foreignObject x={306} y={431} width={25} height={25}>
            <KeySwitch width={25} height={25} data={E70Data?.ig_38_switch||0} valueKey={"ig_38_switch"}/>
          </foreignObject>

          <foreignObject x={240} y={450} width={85} height={70}>
            <ParkingBrake width={85} height={70} data={{apply:E70Data?.parking_brake_apply||0, release: E70Data?.parking_brake_release||0}} valueKey={{apply:"parking_brake_apply", release:"parking_brake_release"}}/>
          </foreignObject>

          <foreignObject x={360} y={430} width={20} height={20}>
            <COCComp width={20} height={20} data={E70Data?.vcb_cock||0} valueKey={"vcb_cock"}/>
          </foreignObject>

          <foreignObject x={100} y={620} width={20} height={20}>
            <SanderComp width={20} height={20} data={E70Data?.sand1_cock||0} valueKey={"sand1_cock"}/>
          </foreignObject>

          <foreignObject x={123} y={620} width={20} height={20}>
            <SanderComp width={20} height={20}  data={E70Data?.sand2_cock||0} valueKey={"sand2_cock"}/>
          </foreignObject>

          <foreignObject x={286} y={526} width={50} height={15}>
            <BrakeFeedPipe width={50} height={13} data={E70Data?.cock_136||0} valueKey={"cock_136"}/>
          </foreignObject>

          <foreignObject x={27} y={222} width={39} height={34}>
            <CustomTooltip isWorking={E70Data?.pneumatic_panel_e70?.pressure_switch_269_41===1} content={E70Data?.pneumatic_panel_e70?.pressure_switch_269_41===1?"Normal":"Defective"}>
              <div style={{width:"100%", height:34, cursor:"pointer", }}></div>
            </CustomTooltip>
          </foreignObject>

          <foreignObject x={72} y={222} width={39} height={34}>
            <CustomTooltip isWorking={E70Data?.pneumatic_panel_e70?.pressure_switch_269_5===1} content={E70Data?.pneumatic_panel_e70?.pressure_switch_269_5===1?"Normal":"Defective"}>
              <div style={{width:"100%", height:34, cursor:"pointer", }}></div>
            </CustomTooltip>
            </foreignObject>

            <foreignObject x={118} y={222} width={39} height={34}>
            <CustomTooltip isWorking={E70Data?.pressure_switch_269_42===1} content={E70Data?.pressure_switch_269_42===1?"Normal":"Defective"}>
              <div style={{width:"100%", height:34, cursor:"pointer", }}></div>
            </CustomTooltip>
          </foreignObject>

          <foreignObject x={162} y={222} width={39} height={34}>
            <CustomTooltip  isWorking={E70Data?.pressure_switch_269_3===1} content={E70Data?.pressure_switch_269_3===1?"Normal":"Defective"}>
              <div style={{width:"100%", height:34, cursor:"pointer", }}></div>
            </CustomTooltip>
          </foreignObject>

          <foreignObject x={208} y={222} width={39} height={34}>
            <CustomTooltip isWorking={E70Data?.pneumatic_panel_e70?.pressure_switch_172_4===1} content={E70Data?.pneumatic_panel_e70?.pressure_switch_172_4===1?"Normal":"Defective"}>
              <div style={{width:"100%", height:34, cursor:"pointer", }}></div>
            </CustomTooltip>
          </foreignObject>

          <foreignObject x={252} y={222} width={39} height={34}>
            <CustomTooltip isWorking={E70Data?.pressure_switch_269_1===1} content={E70Data?.pressure_switch_269_1===1?"Normal":"Defective"}>
              <div style={{width:"100%", height:34, cursor:"pointer", }}></div>
            </CustomTooltip>
          </foreignObject>

          <foreignObject x={298} y={222} width={39} height={34}>
            <CustomTooltip isWorking={E70Data?.pressure_switch_130_4_2===1} content={E70Data?.pressure_switch_130_4_2===1?"Normal":"Defective"}>
              <div style={{width:"100%", height:34, cursor:"pointer", }}></div>
            </CustomTooltip>
          </foreignObject>

          <foreignObject x={343} y={222} width={39} height={34}>
            <CustomTooltip isWorking={E70Data?.pressure_switch_130_4_1===1} content={E70Data?.pressure_switch_130_4_1===1?"Normal":"Defective"}>
              <div style={{width:"100%", height:34, cursor:"pointer"}}></div>
            </CustomTooltip>
          </foreignObject>

          <foreignObject x={150} y={268} width={39} height={34}>
            <CustomTooltip isWorking={E70Data?.pressure_switch_269_2===1} content={E70Data?.pressure_switch_269_2===1?"Normal":"Defective"}>
              <div style={{width:"100%", height:34, cursor:"pointer",}}></div>
            </CustomTooltip>
          </foreignObject>
        </svg>
      </div>
    </div>
  )
}
export default PNU;