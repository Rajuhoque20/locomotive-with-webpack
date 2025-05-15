import React, { useContext } from 'react'
import PNU from './PNU'
import PNUCCBInner from './PNUCCBInner'
import CW3QRVCCB from './CW3QRVCCB'
import CCBRotarySwitch from './CCBRotarySwitch'
import { PnumaticContext } from '../Context'
import CCBParkingBrake from './CCBParkingBrake'
import CCBIsolationHandelOuter from './CCBIsolationHandelOuter'

export default function PNUCCB() {
  const CCBData=useContext(PnumaticContext);
  
  
  return (
    <svg width={"100%"} height={"100%"}  style={{marginBottom:"1rem",}}  viewBox='0 0 1450 700'>
            <foreignObject x={520} y={0} width={420} height={700} >
                <PNUCCBInner/>
            </foreignObject>

            <foreignObject x={1070} y={100} width={60} height={60}>
                    <CCBRotarySwitch width={60} height={60} data={CCBData?.switch_129_1} valueKey={"switch_129_1"}/>
             </foreignObject>

             <path
            d="M1060 90H1140V170H1060V140L885,170L1060 130Z"
             fill='none'
             stroke='#fff'
             strokeWidth={0.5}
            />

             <foreignObject x={120} y={130} width={150} height={100} >
                    <CCBParkingBrake width={150} height={100} data={{apply:CCBData?.parking_brake_apply||0, release: CCBData?.parking_brake_release||0}} valueKey={{apply:"parking_brake_apply", release:"parking_brake_release"}}/>
             </foreignObject>

             <path
            d="M280 120H110V240H280V175L560,165L280 165Z"
             fill='none'
             stroke='#fff'
             strokeWidth={0.5}
            />

             

             <foreignObject x={250} y={630} width={60} height={60}>
                    <CW3QRVCCB width={60} height={60} data={CCBData?.c3w_qrv} valueKey={"c3w_qrv"}/>
             </foreignObject>

             <path
            d="M320 620H245V700H320V670L640,600L320 660Z"
             fill='none'
             stroke='#fff'
             strokeWidth={0.5}
            />

             

             <foreignObject x={210} y={450} width={150} height={100} >
                    <CCBIsolationHandelOuter width={150} height={100} data={CCBData?.c3w_isolation_handle} valueKey={'c3w_isolation_handle'}/>
             </foreignObject>
             <path
            d="M350 430H230V540H350V510L600,500L350 500Z"
             fill='none'
             stroke='#fff'
             strokeWidth={0.5}
            />

          <g>
            <circle
            cx={1050}
            cy={45}
            r={3}
            fill='#fff'
            />
            <path
            d={"M1047 45H770V198"}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='767,198 770,203 773,198'
            fill='#fff'
            />
            <text 
            x={1082}
            y={45}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >Sander 2</text>
          </g>

          <g>
            <circle
            cx={1050}
            cy={70}
            r={3}
            fill='#fff'
            />
            <path
            d={"M1047 70H795V198"}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='792,198 795,203 798,198'
            fill='#fff'
            />
            <text 
            x={1082}
            y={70}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >Sander 2</text>
          </g>

          <g>
            <circle
            cx={1050}
            cy={195}
            r={3}
            fill='#fff'
            />
            <path
            d={"M1047 195H832V203"}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='829,203 832,208 835,203'
            fill='#fff'
            />
            <text 
            x={1082}
            y={195}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >VCB COC</text>
          </g>

        <g>
            <circle
            cx={1180}
            cy={130}
            r={3}
            fill='#fff'
            />
            <line
            x1={1177}
            y1={130}
            x2={1140}
            y2={130}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='1140,127 1135,130 1140,133'
            fill='#fff'
            />
            <text 
            x={1300}
            y={130}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >129.1 24 Rotary switch, pantograph selection</text>
          </g>
          
          <g>
            <circle
            cx={1050}
            cy={230}
            r={3}
            fill='#fff'
            />
            <line
            x1={1047}
            y1={230}
            x2={860}
            y2={230}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='860,227 855,230 860,233'
            fill='#fff'
            />
            <text 
            x={1093}
            y={230}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >38 key switch</text>
          </g>
          

          <g>
            <circle
            cx={1050}
            cy={420}
            r={3}
            fill='#fff'
            />
            <line
            x1={1047}
            y1={420}
            x2={910}
            y2={420}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='910,417 905,420 910,423'
            fill='#fff'
            />
            <text 
            x={1100}
            y={420}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >47  DEAD ENGINE</text>
          </g>

          <g>
            <circle
            cx={1050}
            cy={300}
            r={3}
            fill='#fff'
            />
            <path
            d={'M1047 300H852V275'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='849,275 852,270 855,275'
            fill='#fff'
            />
            <text 
            x={1105}
            y={300}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
          Pressure gauge {"("+(CCBData?.pressure_gauge||0)+")"}
            </text>
          </g>

          <g>
            <circle
            cx={1050}
            cy={255}
            r={3}
            fill='#fff'
            />
            <path
            d={'M1047 255H890V245'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='887,245 890,240 893,245'
            fill='#fff'
            />
            <text 
            x={1086}
            y={255}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
          Pan 1 COC
            </text>
          </g>

          <g>
            <circle
            cx={1050}
            cy={280}
            r={3}
            fill='#fff'
            />
            <path
            d={'M1047 280H872V245'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='869,245 872,240 875,245'
            fill='#fff'
            />
            <text 
            x={1086}
            y={280}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
          Pan 2 COC
            </text>
          </g>

          <g>
            <circle
            cx={1050}
            cy={360}
            r={3}
            fill='#fff'
            />
            <path
            d={'M1047 360H880V350'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='877,350 880,345 883,350'
            fill='#fff'
            />
            <text 
            x={1153}
            y={360}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
           130.4/2 5 Pressure switch pantograph 2
            </text>
          </g>

          
          <g>
            <circle
            cx={1050}
            cy={390}
            r={3}
            fill='#fff'
            />
            <path
            d={'M1047 390H820V350'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='817,350 820,345 823,350'
            fill='#fff'
            />
            <text 
            x={1153}
            y={390}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
           130.4/1 4 Pressure switch pantograph 1
            </text>
          </g>

          <g>
            <circle
            cx={125}
            cy={260}
            r={3}
            fill='#fff'
            />
            <line
            x1={125}
            y1={200}
            x2={125}
            y2={257}
            stroke='#fff'

            />
            <polygon
            points='122,200 125,195 128,200'
            fill='#fff'
            />
            <text 
            x={122}
            y={280}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
           <tspan x={122}>Parking brake </tspan>
           <tspan x={122} dy={20}>apply</tspan>
            </text>
          </g>

          <g>
            <circle
            cx={260}
            cy={260}
            r={3}
            fill='#fff'
            />
            <line
            x1={260}
            y1={200}
            x2={260}
            y2={257}
            stroke='#fff'

            />
            <polygon
            points='257,200 260,195 263,200'
            fill='#fff'
            />
            <text 
            x={260}
            y={280}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
           <tspan x={260}>Parking brake </tspan>
           <tspan x={260} dy={20}>release</tspan>
            </text>
          </g>

          <g>
            <circle
            cx={507}
            cy={265}
            r={3}
            fill='#fff'
            />
            <path
            d={'M510 265H707V238'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='704,238 707,233 710,238'
            fill='#fff'
            />
            <text 
            x={440}
            y={265}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
            74 (EMERGENCY/ VIG.)
            </text>
          </g>

          <g>
            <circle
            cx={507}
            cy={310}
            r={3}
            fill='#fff'
            />
            <path
            d={'M510 310H707V295'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='704,295 707,290 710,295'
            fill='#fff'
            />
            <text 
            x={440}
            y={310}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
           136 (BRAKE FEED PIPE)
            </text>
          </g>

          <g>
            <circle
            cx={507}
            cy={360}
            r={3}
            fill='#fff'
            />
            <path
            d={'M510 360H685V350'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='682,350 685,345 688,350'
            fill='#fff'
            />
            <text 
            x={389}
            y={360}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
          269.42 (23) Pressure switch, brake feed pipe
            </text>
          </g>

          <g>
            <circle
            cx={507}
            cy={393}
            r={3}
            fill='#fff'
            />
            <path
            d={'M510 393H720V350'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='717,350 720,345 723,350'
            fill='#fff'
            />
            <text 
            x={403}
            y={393}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
          269.2 (11) Pressure switch direct brake
            </text>
          </g>

          <g>
            <circle
            cx={507}
            cy={214}
            r={3}
            fill='#fff'
            />
            <path
            d={'M510 214H557'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='557, 211 562, 214 557, 217'
            fill='#fff'
            />
            <text 
            x={450}
            y={214}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
          traction converter 1
            </text>
          </g>

          <g>
            <circle
            cx={507}
            cy={240}
            r={3}
            fill='#fff'
            />
            <path
            d={'M510 240H557'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='557, 237 562, 240 557, 243'
            fill='#fff'
            />
            <text 
            x={450}
            y={240}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
          traction converter 2
            </text>
          </g>

          <g>
            <circle
            cx={507}
            cy={190}
            r={3}
            fill='#fff'
            />
            <path
            d={'M510 190H557'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='557, 187 562, 190 557, 193'
            fill='#fff'
            />
            <text 
            x={467}
            y={190}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
         Filter cubical
            </text>
          </g>

          <g>
            <circle
            cx={190}
            cy={660}
            r={3}
            fill='#fff'
            />
            <path
            d={'M193 660H245'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='245, 657 250, 660 245, 663'
            fill='#fff'
            />
            <text 
            x={150}
            y={660}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
        C3W QRV {"("+CCBData?.c3w_qrv+")"}
            </text>
          </g>

          <g>
            <circle
            cx={190}
            cy={485}
            r={3}
            fill='#fff'
            />
            <path
            d={'M193 485H230'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='230, 482 235, 485 230, 488'
            fill='#fff'
            />
            <text 
            x={128}
            y={485}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
        C3W isolation handel
            </text>
          </g>

          <g>
            <circle
            cx={507}
            cy={70}
            r={3}
            fill='#fff'
            />
            <path
            d={'M510 70H665V130'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='662, 130 665, 135 668, 130'
            fill='#fff'
            />
            <text 
            x={407}
            y={70}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
         269.3 8 Pressure switch parking brake
            </text>
          </g>

          <g>
            <circle
            cx={507}
            cy={35}
            r={3}
            fill='#fff'
            />
            <path
            d={'M510 35H700V130'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='697, 130 700, 135 703, 130'
            fill='#fff'
            />
            <text 
            x={395}
            y={35}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
         269.1 (6) Pressure switch emergency brake
            </text>
          </g>

          

            

             

         </svg>
  )
}
