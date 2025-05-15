import React, { useState } from 'react'
import classes from './medha_screen_1.module.css';
import { BorderHeaderComponent, BreakingIndicators, ControlsComponent, GearIndicators, MedhaSpeedometer, PantoIndicator, PercentageIndicator, TmComponent, UnicInfo1 } from '../MedhaComponents/MedhaComponentsStore';
import { useEffect } from 'react';
import { LocoStatus, SwitchTabs } from './SwitchTabs/switchTabs';
import { useWebSocketStore } from '../medhaDataStore';
import { MEDHA_TOPICS } from '../websocketTopics';
const { ms1_container, ms1_s1, ms1_s2, ms1_s3, ms1_child_container, ms1_s2_INactive, ms1_s2_Active, ms1_s1percentageVisibility, ms1_s3_s1, ms1_s3_s2, ms1_s3_s1indicatorsdiv,
    ms1_s3_s3, ms1_s3_s2_s1, ms1_s3_s2_s2, monitoringcontainer, label, high, critical, warning, normal, value, griditem, ms1_s3_s3_tabs
} = classes
export const Medha_screen_1 = ({ maintabs, selectedMainTab, routePath, setroutePath, upcommingRoutePath, setupcommingRoutePath }) => {
    const connectWebSocket = useWebSocketStore((state) => state.connectWebSocket);
    const unsubscribeWebSocket = useWebSocketStore((state) => state.unsubscribeWebSocket);
    const [payload, setPayload] = useState({
        trainNumber: 1,
        date: '26/04/2000',
        time: '11:11:11',
        bc: 'RELEASE',
        bp: '5.1',
        speed: 0,
        node: '710',
        te_be_bg_1: 0,
        te_be_bg_2: 0,
        mch: 0,
        ohe_i: 0,
        ohe_v: 0,
        parking_break: false,
        emergency_break: false,
        banking: false,
        simulation: false,
        te_limt: false,
        panto: true,
        tm1: false,
        tm2: false,
        tm3: false,
        tm4: false,
        tm5: false,
        tm6: false,
        b1dclv: 0,
        b2dclv: 0,
        c1c: 0,
        c2c: 0,
        bg1_tf_oiltemp: 0,
        bg2_tf_oiltemp: 0,
        battery_volt: 0,
        ohe_availability: false,
        reverser: false,
        blcp: false,
    })
    const { COMMONVARIABLES_DATA, HOMESCREEN_DATA } = useWebSocketStore()
    const [fullScreen, setFullScreen] = useState(false)
    const [ms_s2Options, setMs_s2Options] = useState([
        { id: 1, label: "LSP", active: false },
        { id: 2, label: "LSAF", active: false },
        { id: 3, label: "LSDJ", active: true },
        { id: 4, label: "BPCS", active: false },
        { id: 5, label: "LSVW", active: false },
        { id: 6, label: "LSCE", active: false },
        { id: 7, label: "BPPB", active: false },
        { id: 8, label: "FIRE", active: false },
        { id: 9, label: "SPARE", active: false }
    ]);
    const [tmData, settmData] = useState([
        {
            id: 1,
            lable: 'TM1'
        },
        {
            id: 2,
            lable: 'TM2'
        },
        {
            id: 3,
            lable: 'TM3'
        },
        {
            id: 4,
            lable: 'TM4'
        },
        {
            id: 5,
            lable: 'TM5'
        },
        {
            id: 6,
            lable: 'TM6'
        }
    ])
    const [ms1_s3_s1Indicators, setMs1_s3_s1Indicators] = useState(
        [
            {
                id: 1,
                indicator: 'PB',
                status:false
            },
            {
                id: 2,
                indicator: 'EB',
                status:false

            },
            {
                id: 3,
                indicator: 'REVERSER',
                status:false

            },
            {
                id: 4,
                indicator: 'BLCP',
                status:false

            },
            {
                id: 5,
                indicator: 'BANKING',
                status:false

            },
            {
                id: 6,
                indicator: 'SIMULATION',
                status:false

            },
            {
                id: 7,
                indicator: 'TE LIMIT',
                status:false

            },
            {
                id: 8,
                indicator: 'PANTO',
                status:false

            }
        ]
    )




    useEffect(() => {
        const { loco_no, date, time, a9, bpPressure, flg, speed, te_be_bogie_1, te_be_bogie_2, ohe_v, ohe_i,
            lsp, lsdj, bpcs, lsvw, lsce, bppb, fire, lsaf, spare } = COMMONVARIABLES_DATA;
        const {
            parking_brake, emergency_brake, reverser, blcp, banking, simulation,
            te_limit, panto, subsystem2, subsystem3, bg1oilpr, bg2oilpr,
            conv1oiltemp, conv2oiltemp, bg1oiltemp, bg2oiltemp, battery
        } = HOMESCREEN_DATA;
        setMs_s2Options([
            { id: 1, label: "LSP", active: lsp === 1 },
            { id: 2, label: "LSAF", active: lsaf === 1 },
            { id: 3, label: "LSDJ", active: lsdj === 1 },
            { id: 4, label: "BPCS", active: bpcs === 1 },
            { id: 5, label: "LSVW", active: lsvw === 1 },
            { id: 6, label: "LSCE", active: lsce === 1 },
            { id: 7, label: "BPPB", active: bppb === 1 },
            { id: 8, label: "FIRE", active: fire === 1 },
            { id: 9, label: "SPARE", active: spare === 1 }
        ])
        setMs1_s3_s1Indicators( [
            {
                id: 1,
                indicator: 'PB',
                status:parking_brake===1
            },
            {
                id: 2,
                indicator: 'EB',
                status:emergency_brake===1

            },
            {
                id: 3,
                indicator: 'REVERSER',
                status:(reverser===0 && 'off' || reverser===1 && 'auto' || reverser===2 && 'main' )

            },
            {
                id: 4,
                indicator: 'BLCP',
                status:(blcp===0 && 'off' || blcp===1 && 'auto' || blcp===2 && 'main' )

            },
            {
                id: 5,
                indicator: 'BANKING',
                status:banking===1

            },
            {
                id: 6,
                indicator: 'SIMULATION',
                status:simulation===1

            },
            {
                id: 7,
                indicator: 'TE LIMIT',
                status:te_limit===1

            },
            {
                id: 8,
                indicator: 'PANTO',
                status:panto===1

            }
        ])
        settmData([
            {
                id: 1,
                lable: 'TM1',
                status:subsystem2 === 1
            },
            {
                id: 2,
                lable: 'TM2',
                status:subsystem2 === 1

            },
            {
                id: 3,
                lable: 'TM3',
                status:subsystem2 === 1

            },
            {
                id: 4,
                lable: 'TM4',
                status:subsystem3 === 1

            },
            {
                id: 5,
                lable: 'TM5',
                status:subsystem3 === 1

            },
            {
                id: 6,
                lable: 'TM6',
                status:subsystem3 === 1

            }
        ])
        setPayload({
            trainNumber: loco_no,
            date: date,
            time: time,
            bc:[1,2].includes(a9) && 'RELEASED' || [3,4,5].includes(a9) && 'APPLIED' || [6].includes(a9) && 'NEUTRAL',
            bp: bpPressure?parseFloat(bpPressure?.toFixed(1)):0,
            speed: speed,
            node: flg,
            te_be_bg_1:te_be_bogie_1?  parseFloat(te_be_bogie_1?.toFixed(1)):0,
            te_be_bg_2:te_be_bogie_2? parseFloat(te_be_bogie_2?.toFixed(1)):0,
            mch: te_be_bogie_1?parseFloat(te_be_bogie_1.toFixed(1)):0 || te_be_bogie_2?parseFloat(te_be_bogie_2?.toFixed(1)):0,
            ohe_i: ohe_i?parseFloat(ohe_i?.toFixed(1)):0,
            ohe_v:  ohe_v?parseFloat(ohe_v?.toFixed(1)):0,
            b1dclv: 0,
            b2dclv: 0,
            c1c:conv1oiltemp,
            c2c:conv2oiltemp,
            bg1_tf_oiltemp:bg1oiltemp,
            bg2_tf_oiltemp:bg2oiltemp,
            battery_volt:battery,
            ohe_availability: panto === 1,
        })
    }, [COMMONVARIABLES_DATA, HOMESCREEN_DATA])

    useEffect(() => {
        connectWebSocket([
            { topic: MEDHA_TOPICS.COMMONVARIABLES, data: {} },
            { topic: MEDHA_TOPICS.HOMESCREEN, data: {} },

        ]);

        return () => {
            unsubscribeWebSocket();
        };
    }, []);


    useEffect(() => {
        if (['home-tab/MAIN MENU/VEHICLE DIAGNOSTICS/LOCO STATUS/',
            'home-tab/MAIN MENU/PROCESS INFORMATION/ENERGY CONSUMPTION/MONTHLY DATA/',
            'home-tab/MAIN MENU/PROCESS INFORMATION/SOFTWARE VERSIONS/',
            'home-tab/MAIN MENU/DIGITAL INPUT STATUS/',
            'home-tab/MAIN MENU/DIGITAL OUTPUT STATUS/'
        ].includes(routePath)) {
            setFullScreen(true);
        } else {
            setFullScreen(false);
        }
    }, [routePath]);



    return (
        <div className={ms1_container}>
            {

                <div className={ms1_child_container}>
                    {
                        !fullScreen && <div className={ms1_s1}>
                            <UnicInfo1 value={payload?.trainNumber} styles={{ position: 'absolute', top: '0%', left: '0%' }} />
                            <UnicInfo1 value={payload?.date} styles={{ position: 'absolute', top: '0%', left: '11%' }} />
                            <UnicInfo1 value={payload?.time} styles={{ position: 'absolute', top: '0%', left: '22%' }} />
                            <BorderHeaderComponent payload={{ value: payload?.bc, header: 'BC' }} style={{ position: 'absolute', left: '1%', top: '18%' }} />
                            <BorderHeaderComponent payload={{ value: payload?.bp, header: 'BP', value2: 'kg/cm2' }} style={{ position: 'absolute', left: '16%', top: '18%' }} />
                            <BorderHeaderComponent payload={{ value: `NODE:${payload?.node}` }} style={{ position: 'absolute', left: '1%', bottom: '5%', width: '23%', height: '20%' }} />

                            <BorderHeaderComponent payload={{ value: `TE-${payload?.mch || 0}`, header: 'MCH%' }} style={{ position: 'absolute', right: '1%', top: '7%', height: '20%' }} />
                            <BorderHeaderComponent payload={{ value: `${payload?.ohe_v || 0} KV`, header: 'OHE V' }} style={{ position: 'absolute', right: '1%', top: '40%', height: '20%' }} />
                            <BorderHeaderComponent payload={{ value: `${payload?.ohe_i || 0} A`, header: 'OHE I' }} style={{ position: 'absolute', right: '1%', bottom: '5%', height: '20%' }} />

                            <MedhaSpeedometer style={{ height: '100%', width: '25%', position: 'absolute', right: '40%'}} inputspeed={payload?.speed || 0} />
                            <PercentageIndicator percentage={payload?.te_be_bg_1 || 0} header={'TE/BE BG1'} style={{ position: 'absolute', right: '30%', top: '1%', height: '30vh' }} />
                            <PercentageIndicator percentage={payload?.te_be_bg_2 || 0} header={'TE/BE BG2'} style={{ position: 'absolute', right: '20%', top: '1%', height: '30vh' }} />
                            <div style={{ right: '29%', bottom: '2%' }} className={ms1_s1percentageVisibility}>
                                {`TE - ${payload?.te_be_bg_1 || 0}`}
                            </div>
                            <div style={{ right: '19%', bottom: '2%' }} className={ms1_s1percentageVisibility}>
                                {`TE - ${payload?.te_be_bg_2 || 0}`}

                            </div>
                        </div>
                    }
                    {
                        !fullScreen && <div className={ms1_s2}>
                            {
                                ms_s2Options.map((x) => {
                                    return (
                                        <div className={x.active ? ms1_s2_Active : ms1_s2_INactive}>{x.label} </div>
                                    )
                                })
                            }
                        </div>
                    }
                    {
                        (routePath === 'home-tab/' && !fullScreen) && <div className={ms1_s3}>
                            <div className={ms1_s3_s1}>
                                {
                                    ms1_s3_s1Indicators.map((x) => {
                                        return (
                                            <div className={ms1_s3_s1indicatorsdiv}>
                                                {
                                                    (x.indicator === 'PB' || x.indicator === 'EB') && <BreakingIndicators status={x.status} style={{ height: '10vh', width: '10vh' }} indicator={x.indicator} />
                                                }
                                                {
                                                    (x.indicator === 'REVERSER' || x.indicator === 'BLCP') && <GearIndicators status={x.status} type={x.indicator} style={{ height: '10vh' }} />
                                                }
                                                {
                                                    (x.indicator === 'BANKING' || x.indicator === 'SIMULATION' || x.indicator === 'TE LIMIT') && <ControlsComponent indicator={x.indicator} status={x.status} />
                                                }
                                                {
                                                    (x.indicator === 'PANTO') && <PantoIndicator status={x.status} />
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={ms1_s3_s2}>
                                <div className={ms1_s3_s2_s1}>
                                    {
                                        tmData.map((x) => {
                                            return (
                                                <div
                                                    style={{
                                                        height: "100%", width: '100%',
                                                        background: 'rgba(102, 102, 102, 1)',
                                                        border: '0.4vh solid rgba(30, 30, 30, 1)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}>
                                                    <TmComponent indicator={x.lable} status={x.status} style={{ height: '8vh', width: '8vh' }} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <div className={ms1_s3_s2_s2}>
                                    <div className={monitoringcontainer}>
                                        <div className={`${griditem} ${label}`}>BOGIE 1 DCLV</div>
                                        <div className={`${griditem} ${label} ${high}`}>{payload?.b1dclv}</div>
                                        <div className={`${griditem} ${label}`}>BOGIE 2 DCLV</div>
                                        <div className={`${griditem} ${label} ${high}`}>{payload?.b2dclv}</div>

                                        <div className={`${griditem} ${label}`}>CONV 1 COOLTEMP</div>
                                        <div className={`${griditem} ${label} ${high}`}>{payload?.c1c}</div>
                                        <div className={`${griditem} ${label}`}>CONV 2 COOLTEMP</div>
                                        <div className={`${griditem} ${label} ${high}`}>{payload?.c2c}</div>

                                        <div className={`${griditem} ${label}`}>BG 1 T/F OILTEMP</div>
                                        <div className={`${griditem} ${label} ${high}`}>{payload?.bg1_tf_oiltemp}</div>
                                        <div className={`${griditem} ${label}`}>BG 2 T/F OILTEMP</div>
                                        <div className={`${griditem} ${label} ${high}`}>{payload?.bg2_tf_oiltemp}</div>

                                        <div className={`${griditem} ${label}`}>BATTERY VOLT</div>
                                        <div className={`${griditem} ${label} ${high}`}>{payload?.battery_volt}</div>
                                        <div style={{ width: '200%' }} className={`${griditem} ${label}`}>{payload?.ohe_availability ? 'OHE AVAILABLE' : 'OHE NOT AVAILABLE'}</div>
                                    </div>
                                </div>

                            </div>
                            <div className={ms1_s3_s3}>
                                {
                                    maintabs.map((x) => {
                                        return (
                                            <div style={selectedMainTab?.id === x.id ? { fontSize: '2vh', border: '0.2vh solid rgb(7, 255, 238)' } : null} id={x.id} className={ms1_s3_s3_tabs}>
                                                {x.lable}
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    }
                    {
                        (routePath.includes('home-tab/MAIN MENU/') || ['home-tab/HELP/', 'home-tab/AC STATUS/',
                            'home-tab/TMS STATUS/', 'home-tab/MAIN MENU/', 'home-tab/BRW-MODE/',
                        ].includes(routePath) || routePath.includes('home-tab/DRIVER INFO/') || routePath.includes('home-tab/SETTINGS/')
                            || routePath.includes('home-tab/DATA-METERS/') || routePath.includes('home-tab/COM-STAT/') || routePath.includes('home-tab/ISOLATE/')) &&
                        <div style={fullScreen ? { height: '100%', width: '100%' } : {}} className={ms1_s3}>
                            <SwitchTabs
                                routePath={routePath}
                                setroutePath={setroutePath}
                                upcommingRoutePath={upcommingRoutePath}
                                setupcommingRoutePath={setupcommingRoutePath}
                            />
                        </div>

                    }
                </div>
            }


        </div>
    )
}

