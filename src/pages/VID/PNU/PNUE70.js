import React, { useContext } from 'react'
import PNU from './PNU'
import ParkingBrake from './ParkingBrake'
import BrakeFeedPipe from './BrakeFeedPipe'
import IsolationHandel from './IsolationHandel'
import RotarySwitch from './RotarySwitch'
import { Icons } from '#framework'
import COCComp from './COCComp';
import { PnumaticContext } from '../Context'

 const PNUE70=()=>{
   const PneumaticPanelData=useContext(PnumaticContext);

  //  console.log("PneumaticPanelData",PneumaticPanelData)
  const {pnu_cock_bg}=Icons.VIDIcons;
  return(
    <svg width={"100%"} height={"100%"}  style={{marginBottom:"1rem",}}  viewBox='0 0 1450 700'>
            <foreignObject x={580} y={0} width={280} height={700} >
                <PNU/>
            </foreignObject>

            <g>
            <circle
            cx={557}
            cy={55}
            r={3}
            fill='#fff'
            />
            <path
            d={"M560 55H710V205"}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='707,205 710,210 713,205'
            fill='#fff'
            />
            <text 
            x={455}
            y={55}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >269.3 8 Pressure switch parking brake  </text>
          </g>

          <g>
            <circle
            cx={557}
            cy={80}
            r={3}
            fill='#fff'
            />
            <path
            d={"M560 80H680V205"}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='677,205 680,210 683,205'
            fill='#fff'
            />
            <text 
            x={445}
            y={80}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >269.42 23 Pressure switch, brake feed pipe   </text>
          </g>

          <g>
            <circle
            cx={557}
            cy={110}
            r={3}
            fill='#fff'
            />
            <path
            d={"M560 110H647V205"}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='643,205 647,210 650,205'
            fill='#fff'
            />
            <text 
            x={445}
            y={110}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >269.5 22 Pressure switch, vigilance control  </text>
          </g>

          <g>
            <circle
            cx={557}
            cy={140}
            r={3}
            fill='#fff'
            />
            <path
            d={"M560 140H617V205"}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='614,205 617,210 620,205'
            fill='#fff'
            />
            <text 
            x={445}
            y={140}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >269.41 21 Pressure switch, flow indication  </text>
          </g>

            <g>
            <circle
            cx={880}
            cy={55}
            r={3}
            fill='#fff'
            />
            <path
            d={"M877 55H740V205"}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='737,205 740,210 743,205'
            fill='#fff'
            />
            <text 
            x={990}
            y={55}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >172.4 7 Pressure switch auxiliary compressor  </text>
          </g>
          
            <g>
            <circle
            cx={880}
            cy={110}
            r={3}
            fill='#fff'
            />
            <path
            d={"M877 110H770V205"}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='767,205 770,210 773,205'
            fill='#fff'
            />
            <text 
            x={990}
            y={110}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >269.1 6 Pressure switch emergency brake  </text>
          </g>

            <g>
            <circle
            cx={880}
            cy={160}
            r={3}
            fill='#fff'
            />
            <path
            d={"M877 160H800V205"}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='797,205 800,210 803,205'
            fill='#fff'
            />
            <text 
            x={985}
            y={160}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >130.4/2 5 Pressure switch pantograph 2  </text>
          </g>

            <g>
            <circle
            cx={880}
            cy={190}
            r={3}
            fill='#fff'
            />
            <path
            d={"M877 190H832V205"}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='829,205 832,210 835,205'
            fill='#fff'
            />
            <text 
            x={985}
            y={190}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >130.4/1 4 Pressure switch pantograph 1  </text>
            </g>

          <g>
            <circle
            cx={880}
            cy={220}
            r={3}
            fill='#fff'
            />
            <path
            d={"M877 220H700V240"}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='697,240 700,245 703,240'
            fill='#fff'
            />
            <text 
            x={980}
            y={220}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >269.2 11 Pressure switch direct brake </text>
          </g>

            <g>
            <circle
            cx={880}
            cy={255}
            r={3}
            fill='#fff'
            />
            <line
            x1={877}
            y1={255}
            x2={760}
            y2={255}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='760,252 755,255 760,258'
            fill='#fff'
            />
            <text 
            x={1058}
            y={255}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >237.3 10 Isolating cock on emergency brake/vigilance control COC 74</text>
          </g>

            <g>
            <circle
            cx={880}
            cy={275}
            r={3}
            fill='#fff'
            />
            <line
            x1={877}
            y1={275}
            x2={850}
            y2={275}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='850,272 845,275 850,278'
            fill='#fff'
            />
            <text 
            x={1020}
            y={275}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >293.2 9 Isolating cock brake pipe control system (E70)</text>
          </g>

          

            <g>
            <circle
            cx={880}
            cy={380}
            r={3}
            fill='#fff'
            />
            <line
            x1={877}
            y1={380}
            x2={850}
            y2={380}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='850,377 845,380 850,383'
            fill='#fff'
            />
            <text 
            x={910}
            y={380}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >VCB COC</text>
          </g>

          <g>
            <circle
            cx={1075}
            cy={327}
            r={3}
            fill='#fff'
            />
            <line
            x1={1075}
            y1={330}
            x2={1075}
            y2={405}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='1072,405 1075,410 1078,405'
            fill='#fff'
            />
            <text 
            x={1075}
            y={315}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >Parking brake apply</text>
          </g>

          <g>
            <circle
            cx={880}
            cy={305}
            r={3}
            fill='#fff'
            />
            <path
            d={"M877 305H767V330"}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='764,330 767,335 770,330'
            fill='#fff'
            />
            <text 
            x={915}
            y={305}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >Pan 1 COC</text>
          </g>

          <g>
            <circle
            cx={880}
            cy={325}
            r={3}
            fill='#fff'
            />
            <path
            d={"M877 325H834V330"}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='831,330 834,335 837,330'
            fill='#fff'
            />
            <text 
            x={915}
            y={325}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >Pan 2 COC</text>
          </g>

          <g>
            <circle
            cx={880}
            cy={360}
            r={3}
            fill='#fff'
            />
            <path
            d={"M877 360H800V370"}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='797,370 800,375 803,370'
            fill='#fff'
            />
            <text 
            x={927}
            y={360}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >IG 38 key switch</text>
          </g>

          <g>
            <circle
            cx={880}
            cy={410}
            r={3}
            fill='#fff'
            />
            <path
            d={'M877 410H780V400'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='777,400 780,395 783,400'
            fill='#fff'
            />
            <text 
            x={927}
            y={410}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
             Pressure gauge {"("+(PneumaticPanelData?.pneumatic_panel_e70?.pressure_gauge||0) +")"}
            </text>
          </g>

            <foreignObject x={200} y={30} width={90} height={180}>
              <img src={pnu_cock_bg} style={{width:90, height:180, objectFit:"fill"}} />
            </foreignObject>

            <path
            d="M300 20H193V220H300V175L590,185L300 165Z"
             fill='none'
             stroke='#fff'
             strokeWidth={0.5}
            />

            <foreignObject x={201} y={65} width={40} height={35}>
              <COCComp width={40} height={35} data={PneumaticPanelData?.pneumatic_panel_e70?.wheel_flange_lubrication_coc||0}  valueKey={"wheel_flange_lubrication_coc"}/>
            </foreignObject>

            <g>
            <circle
            cx={150}
            cy={80}
            r={3}
            fill='#fff'
            />
            <line
            x1={150}
            y1={80}
            x2={200}
            y2={80}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='200,77 205,80 200,83'
            fill='#fff'
            />
            <text 
            x={100}
            y={77}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
              <tspan x={103}>Wheel flange</tspan>
              <tspan  x={95} dy={14}> lubrication COC</tspan>
            </text>
          </g>

            <foreignObject x={201} y={100} width={40} height={35}>
              <COCComp width={40} height={35} data={PneumaticPanelData?.traction_converter_1_coc||0} valueKey={"traction_converter_1_coc"}/>
            </foreignObject>

            <g>
            <circle
            cx={150}
            cy={115}
            r={3}
            fill='#fff'
            />
            <line
            x1={150}
            y1={115}
            x2={200}
            y2={115}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='200,112 205,115 200,118'
            fill='#fff'
            />
            <text 
            x={100}
            y={112}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
              <tspan x={115}>Traction</tspan>
              <tspan  x={95} dy={14}> converter 1 COC </tspan>
            </text>
          </g>

            <foreignObject x={201} y={135} width={40} height={35}>
              <COCComp width={40} height={35} data={PneumaticPanelData?.filter_cubicle_coc||0} valueKey={"filter_cubicle_coc"}/>
            </foreignObject>

            <g>
            <circle
            cx={150}
            cy={150}
            r={3}
            fill='#fff'
            />
            <line
            x1={150}
            y1={150}
            x2={200}
            y2={150}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='200,147 205,150 200,153'
            fill='#fff'
            />
            <text 
            x={94}
            y={150}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
              
              Filter cubical COC
            </text>
          </g>
            

            <foreignObject x={201} y={170} width={40} height={35}>
              <COCComp width={40} height={35} data={PneumaticPanelData?.traction_converter_2_coc||0} valueKey={"traction_converter_2_coc"}/>
            </foreignObject>

            <g>
            <circle
            cx={150}
            cy={185}
            r={3}
            fill='#fff'
            />
            <line
            x1={150}
            y1={185}
            x2={200}
            y2={185}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='200,182 205,185 200,188'
            fill='#fff'
            />
            <text 
            x={100}
            y={182}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
              <tspan x={115}>Traction</tspan>
              <tspan  x={95} dy={14}> converter 2 COC</tspan>
            </text>
          </g>

            <foreignObject x={450} y={220} width={60} height={90}>
              <RotarySwitch width={60} height={90} data={PneumaticPanelData?.switch_129_1||0} valueKey={"switch_129_1"}/>
            </foreignObject>

            <path
            d="M535 210H440V330H535V290L605 200L535 275Z"
             fill='none'
             stroke='#fff'
             strokeWidth={0.5}
            />

          <g>
            <circle
            cx={400}
            cy={280}
            r={3}
            fill='#fff'
            />
            <line
            x1={400}
            y1={280}
            x2={445}
            y2={280}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='445,277 450,280 445,283'
            fill='#fff'
            />
            <text 
            x={280}
            y={280}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
              129.1 24 Rotary switch, pantograph selection
            </text>
          </g>

          <g>
            <circle
            cx={560}
            cy={353}
            r={3}
            fill='#fff'
            />
            <line
            x1={560}
            y1={353}
            x2={655}
            y2={353}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='655,350 660,353 655,356'
            fill='#fff'
            />
            <text 
            x={500}
            y={353}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
              70 (E70 BRAKE PIPE)
            </text>
          </g>

          <g>
            <circle
            cx={560}
            cy={445}
            r={3}
            fill='#fff'
            />
            <line
            x1={560}
            y1={445}
            x2={618}
            y2={445}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='618,442 623,445 618,448'
            fill='#fff'
            />
            <text 
            x={495}
            y={445}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
              Passengers and Goods
            </text>
          </g>

          <g>
            <circle
            cx={560}
            cy={485}
            r={3}
            fill='#fff'
            />
            <line
            x1={560}
            y1={485}
            x2={677}
            y2={485}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='677,482 682,485 677,488'
            fill='#fff'
            />
            <text 
            x={507}
            y={485}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
             47  DEAD ENGINE
            </text>
          </g>

          <g>
            <circle
            cx={560}
            cy={505}
            r={3}
            fill='#fff'
            />
            <line
            x1={560}
            y1={505}
            x2={645}
            y2={505}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='645,502 650,505 645,508'
            fill='#fff'
            />
            <text 
            x={515}
            y={505}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
             C3W QRV {"( "+(PneumaticPanelData?.c3w_qrv||0) +" )"}
            </text>
          </g>

          <g>
            <circle
            cx={560}
            cy={570}
            r={3}
            fill='#fff'
            />
            <path
            d={'M560 570H660V538'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='657,538 660,533 663,538'
            fill='#fff'
            />
            <text 
            x={528}
            y={570}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
             sander 1
            </text>
          </g>

          <g>
            <circle
            cx={560}
            cy={600}
            r={3}
            fill='#fff'
            />
            <path
            d={'M560 600H675V538'}
           fill='none'
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='672,538 675,533 678,538'
            fill='#fff'
            />
            <text 
            x={528}
            y={600}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >
             sander 2
            </text>
          </g>

            <foreignObject x={100} y={400} width={300} height={150}>
              <IsolationHandel width={300} height={150} data={PneumaticPanelData?.c3w_isolation_handle||0} valueKey={"c3w_isolation_handle"}/>
            </foreignObject>

            <path
           d="M300 380H193V580H300V470H600L300 460Z"
             fill='none'
             stroke='#fff'
             strokeWidth={0.5}
            />

          <g>
            <circle
            cx={150}
            cy={450}
            r={3}
            fill='#fff'
            />
            <line
            x1={150}
            y1={450}
            x2={200}
            y2={450}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='200,447 205,450 200,453'
            fill='#fff'
            />
            <text 
            x={90}
            y={450}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >C3W isolation handel</text>
          </g>

            <foreignObject x={1070} y={390} width={130} height={90}>
              <ParkingBrake width={125} height={90} data={{apply:PneumaticPanelData?.parking_brake_apply||0, release: PneumaticPanelData?.parking_brake_release||0}} valueKey={{apply:"parking_brake_apply", release:"parking_brake_release"}}/>
            </foreignObject>
            <path
          d='M1045 370H1240V500H1045V430L795 435L1045 420Z'
           fill='none'
          stroke='#fff'
          strokeWidth={0.5}
          />

        <g>
            <circle
            cx={1270}
            cy={423}
            r={3}
            fill='#fff'
            />
            <line
            x1={1267}
            y1={423}
            x2={1200}
            y2={423}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='1200,420 1195,423 1200,426'
            fill='#fff'
            />
            <text 
            x={1340}
            y={423}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >Parking brake release</text>
          </g>


            <foreignObject x={1050} y={580} width={170} height={50}>
              <BrakeFeedPipe width={170} height={50} data={PneumaticPanelData?.cock_136||0} valueKey={"cock_136"}/>
            </foreignObject>
            <path
          d='M1045 570H1240V640H1045V610L795 460L1045 595Z'
           fill='none'
          stroke='#fff'
          strokeWidth={0.5}
          />

        <g>
            <circle
            cx={1270}
            cy={600}
            r={3}
            fill='#fff'
            />
            <line
            x1={1267}
            y1={600}
            x2={1230}
            y2={600}
            stroke='#fff'
            strokeWidth={1}
            />
            <polygon
            points='1230,597 1225,600 1230,603'
            fill='#fff'
            />
            <text 
            x={1340}
            y={600}
            alignmentBaseline='middle'
            textAnchor='middle'
            fontSize={11}
            fill='#fff'
            >136 (BREAK FEED PIPE)</text>
          </g>
          
         </svg>
  )
}
export default PNUE70;
