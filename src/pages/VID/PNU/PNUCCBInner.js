import { Icons } from '#framework'
import React, { useContext, useEffect, useState } from 'react'
import CW3QRVCCB from './CW3QRVCCB';
import CCBInnerIsolationHandel from './CCBInnerIsolationHandel';
import CCBCOC from './CCBCOC';
import { PnumaticContext } from '../Context';
import EmergencyVigilance from './EmergencyVigilance';
import CCBBrakeFeedPipe from './CCBBrakeFeedPipe';
import CCBRotarySwitch from './CCBRotarySwitch';
import CCBDeadEngine from './CCBDeadEngine';
import CCBKeySwitch from './CCBKeySwitch';
import CCBParkingBrake from './CCBParkingBrake';
import CCBPassOrGoods from './CCBPassOrGoods';
import CustomTooltip from '../../../components/VID/CustomPopover/CustomTooltip';

export default function PNUCCBInner() {
    const {pnuCCBInnerBg, CCBPNGBG}=Icons.VIDIcons;
    const CCBData=useContext(PnumaticContext)

    const [imgLoaded, setImgLoaded] = useState(true);

useEffect(() => {
  const img = new Image();
  img.src = pnuCCBInnerBg;
  img.onload = () => setImgLoaded(false);
}, [pnuCCBInnerBg]);

  return (
    <>
    {imgLoaded?<div style={{ display:"flex", alignItems:"center", justifyContent:"center", height:"100%"}}>Loading...</div>:
    <svg width={420} height={700} viewBox='0 0 420 700' >
    <image href={pnuCCBInnerBg} x={0} y={0} width={420} height={700}  preserveAspectRatio="xMidYMid slice" />
    <foreignObject x={120} y={563} width={36} height={45}>
        <CW3QRVCCB width={36} height={45} data={CCBData?.c3w_qrv} valueLey={"c3w_qrv"}/>
    </foreignObject>

    <foreignObject x={86} y={481} width={50} height={40}>
        <CCBInnerIsolationHandel width={50} height={40}/>
    </foreignObject>

    <foreignObject x={242} y={202} width={20} height={20}>
      <CCBCOC width={20} height={20} data={CCBData?.sand1_cock||0} valueKey={"sand1_cock"}/>
    </foreignObject>

    <foreignObject x={264} y={202} width={20} height={20}>
      <CCBCOC width={20} height={20} data={CCBData?.sand2_cock||0} valueKey={"sand2_cock"}/>
    </foreignObject>

    <foreignObject x={284} y={207} width={20} height={20}>
      <CCBCOC width={20} height={20} data={1} valueKey={""}/>
    </foreignObject>

    <foreignObject x={302} y={207} width={20} height={20}>
      <CCBCOC width={20} height={20} data={CCBData?.vcb_cock||0} valueKey={"vcb_cock"}/>
    </foreignObject>

    <foreignObject x={341} y={207} width={20} height={20}>
      <CCBCOC width={20} height={20} data={CCBData?.pan2_cock||0} valueKey={"pan2_cock"}/>
    </foreignObject>

    <foreignObject x={361} y={207} width={20} height={20}>
      <CCBCOC width={20} height={20} data={CCBData?.pan1_cock||0} valueKey={"pan1_cock"}/>
    </foreignObject>

    <foreignObject x={178.5} y={202} width={18} height={22}>
        <EmergencyVigilance width={18} height={22} data={CCBData?.cock_74} valueKey={"cock_74"}/>
    </foreignObject>

    <foreignObject x={175} y={245} width={25} height={25}>
        <CCBBrakeFeedPipe width={25} height={25} data={CCBData?.cock_74} valueKey={"cock_74"}/>
    </foreignObject>

    <foreignObject x={342} y={162} width={22} height={22}>
        <CCBRotarySwitch width={22} height={22} data={CCBData?.switch_129_1} valueKey={"switch_129_1"}/>
    </foreignObject>

    <foreignObject x={364} y={405} width={22} height={22}>
        <CCBDeadEngine width={22} height={22} data={CCBData?.cock_47} valueKey={"cock_47"}/>
    </foreignObject>

    <foreignObject x={328.4} y={204} width={15} height={15}>
        <CCBKeySwitch width={15} height={15} data={CCBData?.ig_38_switch} valueKey={"ig_38_switch"}/>
    </foreignObject>

    <foreignObject x={37} y={180} width={20} height={20}>
        <CCBCOC width={20} height={20} data={CCBData?.filter_cubicle_coc} valueKey={"filter_cubicle_coc"}/>
    </foreignObject>

    <foreignObject x={37} y={203} width={20} height={20}>
        <CCBCOC width={20} height={20} data={CCBData?.traction_converter_1_coc} valueKey={"traction_converter_1_coc"}/>
    </foreignObject>

    <foreignObject x={37} y={228} width={20} height={20}>
        <CCBCOC width={20} height={20} data={CCBData?.traction_converter_2_coc} valueKey={"traction_converter_2_coc"}/>
    </foreignObject>

    <foreignObject x={43} y={133} width={65} height={65}>
        <CCBParkingBrake width={65} height={65} data={{apply:CCBData?.parking_brake_apply||0, release: CCBData?.parking_brake_release||0}} valueKey={{apply:"parking_brake_apply", release:"parking_brake_release"}}/>
    </foreignObject>

    <foreignObject x={88} y={368} width={25} height={25}>
        <CCBPassOrGoods width={25} height={25} data={0} valueKey={''}/>
    </foreignObject>

    <foreignObject x={147} y={302} width={30} height={43}>
      <CustomTooltip isWorking={CCBData?.pressure_switch_269_42===1} content={CCBData?.pressure_switch_269_42===1?"Normal":"Defective"}>
        <div style={{width:"100%", height:43, cursor:"pointer",}}></div>
      </CustomTooltip>
    </foreignObject>

    <foreignObject x={184} y={302} width={30} height={43}>
      <CustomTooltip isWorking={CCBData?.pressure_switch_269_2===1} content={CCBData?.pressure_switch_269_2===1?"Normal":"Defective"}>
        <div style={{width:"100%", height:43, cursor:"pointer",}}></div>
      </CustomTooltip>
    </foreignObject>

    <foreignObject x={287} y={302} width={30} height={43}>
      <CustomTooltip isWorking={CCBData?.pressure_switch_130_4_1===1} content={CCBData?.pressure_switch_130_4_1===1?"Normal":"Defective"}>
        <div style={{width:"100%", height:43, cursor:"pointer",}}></div>
      </CustomTooltip>
    </foreignObject>

    <foreignObject x={345} y={302} width={30} height={43}>
      <CustomTooltip isWorking={CCBData?.pressure_switch_130_4_2===1} content={CCBData?.pressure_switch_130_4_2===1?"Normal":"Defective"}>
        <div style={{width:"100%", height:43, cursor:"pointer",}}></div>
      </CustomTooltip>
    </foreignObject>

    <foreignObject x={137} y={130} width={20} height={32}>
      <CustomTooltip isWorking={CCBData?.pressure_switch_269_3===1} content={CCBData?.pressure_switch_269_3===1?"Normal":"Defective"}>
        <div style={{width:"100%", height:32, cursor:"pointer",}}></div>
      </CustomTooltip>
    </foreignObject>

    <foreignObject x={171} y={130} width={20} height={32}>
      <CustomTooltip  isWorking={CCBData?.pressure_switch_269_1===1} content={CCBData?.pressure_switch_269_1===1?"Normal":"Defective"}>
        <div style={{width:"100%", height:32, cursor:"pointer",}}></div>
      </CustomTooltip>
    </foreignObject>
    
</svg>
    }
    </>
    
  )
}
