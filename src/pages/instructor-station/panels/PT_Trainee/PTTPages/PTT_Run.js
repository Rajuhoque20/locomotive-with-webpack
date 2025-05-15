import { useNavigate } from 'react-router-dom';
import ButtonComp from '../../../../../components/Instructor-station/UIComp/ButtonComp'
import './PTT_Run.css'
import { Icons } from '#framework';
import MR from '../../../../CabReplicaControl/CabReplicate/MR';
import Af from '../../../../CabReplicaControl/CabReplicate/Af';
import Speedometer from '../../../../CabReplicaControl/CabReplicate/Speedometer';
import BP from '../../../../CabReplicaControl/CabReplicate/BP';
import ParkingBreak from '../../../../CabReplicaControl/CabReplicate/ParkingBreak';
import UBA from '../../../../cab-replica/CabReplicate/UBA';
import U from '../../../../cab-replica/CabReplicate/U';
import Bogie1 from '../../../../cab-replica/CabReplicate/Bogie1';
import Bogie2 from '../../../../cab-replica/CabReplicate/Bogie2';
import BLkey from '../../../../CabReplicaControl/CabReplicate/BLkey';
// import { footPadelData } from '../../../../cab-replica/Main/utilityMethod';
import { EmergencyStopActionButton, IconWithName, SwitchComp } from '../../../../CabReplicaControl/Main/ControlPanel';
import  { Indicator, IndicatorBtn } from '../../../../CabReplicaControl/Main/PanelA';
import { replicaKeys } from '../../../../../constant/cabReplica';
import BrakeCylinder from '../../../../cab-replica/CabReplicate/BrakeCylinder';
import { useEffect, useRef, useState } from 'react';
import { Dpwcs_Home } from '../../../../DDU/DPWCS/dpwcs_home';
import { Medha_home } from '../../../../DDU/Medha/Medha_home';

export const PTT_Run = () => {
    const { foot_padel, foot_padel_inactive } = Icons.CRIcons
    const navigate = useNavigate();
    const { clockIcon } = Icons.ISIcons
    const { bpfl_icon1, bpfl_icon2 } = Icons.CRIcons
    const HandleStop = () => {
        navigate('/ptt-results')

    }
    const [bpflvalue, setbpflValue] = useState(false);
    const [emergencyStop, setEmergencyStop] = useState(false)
     const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
     const heightRef = useRef(null);
      useEffect(() => {
        const calculateDimension = () => {
          const { offsetHeight, offsetWidth } = heightRef.current;
          setDimensions({ width: offsetWidth, height: offsetHeight });
        };
        if (heightRef.current) {
          const resizeObserver = new ResizeObserver(calculateDimension);
          resizeObserver.observe(heightRef.current);
          // Cleanup observer on component unmount
          return () => resizeObserver.disconnect();
        }
      }, []);

    const leftActions = [
        {
            name: "LSDJ",
            color: "red",
            type: "indicator",
            //  value: data?.lsdj,
            key: replicaKeys.LSDJ,
        },
        {
            name: "LSAF",
            color: "red",
            type: "indicator",
            //  value: data?.lsdj,
            //  key: replicaKeys.LSDJ,
        },
        {
            name: "LSHD",
            color: "yellow",
            type: "indicator",
            //  value: data?.lsdj,
            //  key: replicaKeys.LSDJ,
        },
        {
            name: "BPCS",
            color: "blue",
            type: "button",
            //  value: data?.lsdj,
            //  key: replicaKeys.LSDJ,
        },
        {
            name: "BPPB",
            color: "red",
            type: "button",
            //  value: data?.lsdj,
            //  key: replicaKeys.LSDJ,
        },
        {
            name: "BPFA",
            color: "yellow",
            type: "button",
            //  value: data?.lsdj,
            //  key: replicaKeys.LSDJ,
        },
    ]
    const rightActions = [
        {
            name: "LSCE",
            color: "yellow",
            type: "indicator",
            //  value: data?.lsdj,
            // key: replicaKeys.LSDJ,
        },
        {
            name: "LSP",
            color: "yellow",
            type: "indicator",
            //  value: data?.lsdj,
            //  key: replicaKeys.LSDJ,
        },
        {
            name: "LSVW",
            color: "yellow",
            type: "indicator",
            //  value: data?.lsdj,
            //  key: replicaKeys.LSDJ,
        },
        {
            name: "BPVR",
            color: "yellow",
            type: "button",
            //  value: data?.lsdj,
            //  key: replicaKeys.LSDJ,
        },
        {
            name: "LSFI",
            color: "red",
            type: "button",
            //  value: data?.lsdj,
            //  key: replicaKeys.LSDJ,
        },
        {
            name: "BPFL",
            color: "yellow",
            type: "imgbutton",
            //  value: data?.lsdj,
            //  key: replicaKeys.LSDJ,
        },
    ]
    const firstRow = [
        {
            name: "ZPRD",
            label1: "FULL",
            label2: "",
            label3: "DIM",
            actualValue: true ? 1 : -1,
            //   key: replicaKeys.ZLC,
        },
        {
            name: "ZLFW",
            label1: "OFF",
            label2: "",
            label3: "ON",
            actualValue: true ? 1 : -1,
            //   key: replicaKeys.ZLC,
        },
        {
            name: "ZLFR",
            label1: "OFF",
            label2: "",
            label3: "ON",
            actualValue: true ? 1 : -1,
            //   key: replicaKeys.ZLC,
        },
        {
            name: "ZLC",
            label1: "OFF",
            label2: "",
            label3: "ON",
            actualValue: true ? 1 : -1,
            //   key: replicaKeys.ZLC,
        },
        {
            name: "ZLI",
            label1: "OFF",
            label2: "",
            label3: "ON",
            actualValue: true ? 1 : -1,
            //   key: replicaKeys.ZLC,
        },
        {
            name: "BLDJ",
            label1: "OFF",
            label2: "O",
            label3: "ON",
            actualValue: true ? 1 : -1,
            //   key: replicaKeys.ZLC,
        },
        {
            name: "ZLDD",
            label1: "OFF",
            label2: "",
            label3: "ON",
            actualValue: true ? 1 : -1,
            //   key: replicaKeys.ZLC,
        },
    ]
    const secoundRow = [
        {
            name: "BLCP",
            label1: "OFF",
            label2: "AUTO",
            label3: "MAIN",
            actualValue: true ? 1 : -1,
            //   key: replicaKeys.ZLC,
        },
        {
            name: "BLHO",
            label1: "ON",
            label2: "O",
            label3: "UP",
            actualValue: true ? 1 : -1,
            //   key: replicaKeys.ZLC,
        },
        {
            name: "ZTEL",
            label1: "OFF",
            label2: "",
            label3: "ON",
            actualValue: true ? 1 : -1,
            //   key: replicaKeys.ZLC,
        },
        {
            name: "ZBAN",
            label1: "OFF",
            label2: "",
            label3: "ON",
            actualValue: true ? 1 : -1,
            //   key: replicaKeys.ZLC,
        },
        {
            name: "ZPT",
            label1: "OFF",
            label2: "O",
            label3: "ON",
            actualValue: true ? 1 : -1,
            //   key: replicaKeys.ZLC,
        },
        {
            name: "BLPR",
            label1: "OFF",
            label2: "O",
            label3: "ON",
            actualValue: true ? 1 : -1,
            //   key: replicaKeys.ZLC,
        }
    ]
    console.log(dimensions)
    return (
        <div className='ptt-run-main-container'>
            <div className='ptt-run-actions'>
                <div className='run-section1'>
                    <div className='rs1-sec1'>
                        <div className='rs1-sec1-divs'>
                            <div className='rs1-sec1-divs-box'>
                                <BrakeCylinder type={'pt'} />
                            </div>
                            <div className='rs1-sec1-divs-box'>
                                <MR type={'pt'} />
                            </div>
                            <div className='rs1-sec1-divs-box'>
                                <Speedometer type={'pt'} />
                            </div>
                        </div>
                        <div className='rs1-sec1-divs'>
                            <div className='rs1-sec1-divs-box'>
                                <Af type={'pt'} />
                            </div>
                            <div className='rs1-sec1-divs-box'>
                                <BP type={'pt'} />
                            </div>
                            <div className='rs1-sec1-divs-box'>
                                <ParkingBreak type={'pt'} />
                            </div>
                        </div>
                    </div>
                    <div className='rs1-sec2'>
                        <div style={{ width: '40%', height: '100%' }}>
                            <UBA type={'pt'} />
                        </div>
                        <div style={{ width: "60%", height: '100%', display: 'flex', flexDirection: 'row' }}>
                            <div style={{ width: '33.33%', height: "100%" }}>
                                <U />
                            </div>
                            <div style={{ width: '33.33%', height: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Bogie1 />
                            </div>
                            <div style={{ width: '33.33%', height: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Bogie2 />
                            </div>
                        </div>
                    </div>
                    <div className='rs1-sec3'>
                        <div style={{ height: '100%', width: '70%', display: 'flex', flexDirection: 'row' }}>
                            <div style={{ height: "100%", width: '33%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1vh' }}>
                                <IconWithName
                                    key={1}
                                    name={'SANDING'}
                                    icon={true ? foot_padel : foot_padel_inactive}
                                />
                            </div>
                            <div style={{ height: "100%", width: '33%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1vh' }}>
                                <IconWithName
                                    key={2}
                                    name={'PVEF'}
                                    icon={true ? foot_padel : foot_padel_inactive}
                                />
                            </div>
                            <div style={{ height: "100%", width: '33%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1vh' }}>
                                <IconWithName
                                    key={3}
                                    name={'VIGILANCE'}
                                    icon={true ? foot_padel : foot_padel_inactive}
                                />
                            </div>

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30%', height: '100%' }}>
                            <BLkey type={'pt'} />
                        </div>
                    </div>

                </div>
                <div className='run-section2'>
                    <div className='rs2-buttons'>
                        {/* <PanelA/> */}
                        <div className='rs2-buttons-left'>
                            {
                                leftActions.map((item, index) => {
                                    if (item.type === 'indicator') {
                                        return (
                                            <Indicator
                                                key={index}
                                                name={item.name}
                                                color={item.color}
                                                type={item.type}
                                                value={item.value}
                                                valueKey={item.key}
                                            />
                                        )
                                    } else {
                                        return (
                                            <IndicatorBtn
                                                key={index}
                                                name={item.name}
                                                color={item.color}
                                                type={item.type}
                                                value={item.value}
                                                valueKey={item.key}
                                            />

                                        )
                                    }

                                })
                            }
                        </div>
                        <div className='rs2-buttons-right'>
                            {
                                rightActions.map((item, index) => {
                                    if (item.type === 'indicator') {
                                        return (
                                            <Indicator
                                                key={index}
                                                name={item.name}
                                                color={item.color}
                                                type={item.type}
                                                value={item.value}
                                                valueKey={item.key}
                                            />
                                        )
                                    } else if (item.type === 'button') {
                                        return (
                                            <IndicatorBtn
                                                key={index}
                                                name={item.name}
                                                color={item.color}
                                                type={item.type}
                                                value={item.value}
                                                valueKey={item.key}
                                            />

                                        )
                                    } else if (item.type === 'imgbutton') {
                                        return (
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    // gap: "0.5vh",
                                                }}
                                            >
                                                <img
                                                    tabIndex={0}
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter") {
                                                            setbpflValue((prev) => !prev);
                                                        }
                                                    }}
                                                    onClick={() => {
                                                        setbpflValue((prev) => !prev);
                                                    }}
                                                    src={bpflvalue ? bpfl_icon1 : bpfl_icon2}
                                                    style={{ objectFit: "cover", width: "7vmin" }}
                                                />
                                                <span style={{ color: "#fff", fontSize: "0.8vw" }}>BPFL</span>
                                            </div>
                                        )
                                    }

                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='run-section3'>
                    <div className="rs3-sec1" ref={heightRef}>
                           
                            {/* <Dpwcs_Home dimensions={dimensions}/> */}
                                    < Medha_home callScreen={true} />
                        
                            
                    </div>

                    <div className='rs3-sec2'>
                        <div className='rs3-sec2-sections'>
                            {firstRow?.map((item, index) => {
                                return (
                                    <SwitchComp
                                        key={index}
                                        name={item.name}
                                        label1={item.label1}
                                        label2={item.label2}
                                        label3={item.label3}
                                        actualValue={item.actualValue}
                                        valueKey={item.key}
                                    />
                                );
                            })}
                        </div>
                        <div className='rs3-sec2-sections'>
                            <div style={{ width: '15%' }}>

                            </div>
                            <div style={{ width: '85%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                {secoundRow?.map((item, index) => {
                                    return (
                                        <SwitchComp
                                            key={index}
                                            name={item.name}
                                            label1={item.label1}
                                            label2={item.label2}
                                            label3={item.label3}
                                            actualValue={item.actualValue}
                                            valueKey={item.key}
                                        />
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                    <div className='rs3-sec3'>

                    </div>
                    <div className='fixeddiv'>
                        <EmergencyStopActionButton emergencyStop={emergencyStop} setEmergencyStop={setEmergencyStop} />
                    </div>
                </div>
            </div>
            <div className='ptt-run-footer'>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1vh' }}>
                    <div style={{ color: 'white', fontWeight: '590', fontSize: '2.5vh' }}>
                        CNB2BPU_P_24_13TK02022024
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '2vh', fontWeight: '590', color: 'rgba(255, 255, 255, 0.45)', gap: '1vh' }}>
                        <img src={clockIcon} />
                        00:15:27
                    </div>
                </div>
                <div>
                    <ButtonComp onClick={() => HandleStop()} title={'Stop'} bntStyle={{ color: 'white', fontWeight: '590', background: 'rgba(156, 156, 156, 0.74)', 'backdrop-filter': 'blur(10vh)', height: '4.5vh', width: '12vh' }} />
                </div>
            </div>
        </div>
    )
}