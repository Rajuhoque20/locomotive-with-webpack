import React from 'react'
import { useState, useEffect } from 'react';

import classes from './kavach_home.module.css';
import { Icons } from '#framework';
import { ColorIndicator, KavachButtons, KavachSignalComponent, KavachSpeedoMeter, LedIndicator, MoveAuthority, RFComponent, SosCounter, TagComponent, TargetDistance } from './KavachComponents/kavach_components';
import { getBreak, getModes } from './KavachComponents/kavachComponentsCaluculationFunctions';
import { useKavachWebSocketStore } from './kavachDataStore';
import { KAVACH_TOPICS } from './kavachTpoics';
import websocket from '../../services/Websocket';

const { kavach_main_container, kavach_container, kavach_banner, kavach_power_indicator, kpi_cells, kavach_info_action, kavach_footer_action,
    kavach_footer_action_cells, kavach_as_1, kavach_as_2, kavach_as_s1, kavach_as_s2, kavach_as_s3, kavach_action_button, kavach_action_numeric_button,
    kavach_action_view, kavach_action_view_footer, kavach_action_view_footer_cells, kav_sec_1, kav_sec_2, kav_sec_a, kav_sec_b, kav_sec_c, kav_sec_d,
    kav_sec_a1, kav_sec_a2, kav_sec_a3, kav_sec_b1, kav_sec_b2, kav_sec_b3, kav_sec_2a, kav_sec_2b, kav_sec_2b1, kav_sec_2b2, kav_sec_2b1a, kav_sec_2b1b,
    kav_target_speed, kav_section_speed_loco_location, kav_loco_id, kav_date_time, kav_mode_indicators, kav_break_indicators, kav_signal_name, kav_signal_view,
    kavach_action_view_container, kavach_theme_selector, active_theme_button, inactive_theme_button, kavach_as_s2_container, kavach_stationary_container, ksc_header,
    ksc_action_1, ksc_action_2, ksc_action_3, ksc_action_1_cell, indicator_button_container, indicator_button_view, indicator_button_logo,
} = classes;


export const Kavach_home = () => {
    const { unsubscribeKavachWebSocket, connectKavachWebSocket, KAVACH_DATA, STATIONARY_DATA
    } = useKavachWebSocketStore();
    const { IRDMI, powersvg, commonsteelsvg, locosteelsvg, akncsteelsvg, sossteelsvg, hfsteelsvg, systemsteelsvg, leadingsteelsvg, nonleadingsteelsvg } = Icons.DDUIcons;
    const { top_icon, bottom_icon,
        e_return_icon, zero_icon, one_icon, two_icon, three_icon,
        four_icon, five_icon, six_icon, seven_icon, eight_icon, nine_icon,
        left_icon, right_icon, c_icon, m_icon, f_icon, o_icon, onoff_icon,
        brightuup_icon, brightdown_icon, standby, normalbrake, sosCounterlogo,
        healthoklogo, healthfaillogo, cancelbuttonlogo, tsracklogo
    } = Icons.DDUIcons;


    const [backlight, setBacklight] = useState(true)
    const [brightness, setBrightness] = useState(1);

    const [kavachTheme, setKavachTheme] = useState('default')

    const [common, setCommon] = useState(false)
    const [ack, setAck] = useState(false)
    const [sos, setSos] = useState(false)
    const [leading, setLeading] = useState(true)
    const [upcommingMode, setUpcommingMode] = useState()
    const [mode, setmode] = useState(
        {
            id: 1,
            lable: 'Stand By',
            key: 'SB',
            icon: standby,
        }
    )
    const [payload, setPayload] = useState({
        rfinfo: 'TId-537, Dir-RT Dist 731',
        rfvalue: 0,
        tagvalue: 0,
        message: 'System Self Test In Progress',
        dc: '0.0',
        trainLength: null,
        targetSpeed: '30',
        sectionSpeed: '100',
        location: '46.67',
        locoId: '27854',
        date: '26/04/2000',
        time: '00:00:00',
        signalName: 'UP R-HOME-L4'
    })
    const [breakmode, setbreakMode] = useState({
        id: 1,
        lable: 'Normal Brake',
        key: 'normalbrake',
        icon: normalbrake,
    },)

    const [stationaryPayload, setStationaryPaylod] = useState({
        sosIndicator: false,
        healthOk: false,
        healthFail: false,
        cancel: false,
        sosButton: false,
        tsrAck: false,
        counter: 0
    })

    const updateStationaryPayload = (key, value) => {
        setStationaryPaylod(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleBacklightOnOff = () => {
        setBacklight(prev => !prev);
    };

    const increaseBrightness = () => {
        setBrightness((prev) => Math.min(prev + 0.1, 1));
    };
    const decreaseBrightness = () => {
        setBrightness((prev) => Math.max(prev - 0.1, 0));
    };
    const numericFunctions = (key) => {
        const modeMap = {
            1: 'PT',
            2: 'RV',
            3: 'OV',
            4: 'SH',
            6: 'SR',
        };

        if (key in modeMap) {
            const mode = getModes(modeMap[key]);
            console.log('mode', mode, key)
            setUpcommingMode(mode);
        } else if (key === 9 && upcommingMode) {
            setmode(upcommingMode);
            const payload = {
                kavach_operation_mode: upcommingMode.key
            }
            websocket.publish('FE/BE/KAVACH', payload);
            setUpcommingMode(null);
        }
    };
    const changeKavachTheme = (theme) => {
        setKavachTheme(theme)
    }

    const numericKeys = [
        {
            id: 1,
            icon: one_icon
        },
        {
            id: 2,
            icon: two_icon
        },
        {
            id: 3,
            icon: three_icon
        },
        {
            id: 4,
            icon: four_icon
        },
        {
            id: 5,
            icon: five_icon
        },
        {
            id: 6,
            icon: six_icon
        },
        {
            id: 7,
            icon: seven_icon
        },
        {
            id: 8,
            icon: eight_icon
        },
        {
            id: 9,
            icon: nine_icon
        },
        {
            id: 0,
            icon: zero_icon
        }
    ]

    const rightactions = [
        {
            id: 1,
            icon: c_icon,
        },
        {
            id: 2,
            icon: left_icon,
        },
        {
            id: 3,
            icon: right_icon,

        },
        {
            id: 4,
            icon: top_icon,
        },
        {
            id: 5,
            icon: bottom_icon,
        },
        {
            id: 6,
            icon: e_return_icon,
        },
    ]

    const leftactions = [

        {
            id: 1,
            icon: onoff_icon,
            action: () => handleBacklightOnOff()
        },
        {
            id: 2,
            icon: o_icon
        },
        {
            id: 3,
            icon: brightuup_icon,
            action: () => increaseBrightness()

        },
        {
            id: 4,
            icon: brightdown_icon,
            action: () => decreaseBrightness()

        },
        {
            id: 5,
            icon: f_icon,
        },
        {
            id: 6,
            icon: m_icon,
        },

    ]

    const footerView = [
        {
            id: 1,
            lable: 'P_TRP',
            key: 'PT'
        },
        {
            id: 2,
            lable: 'REV',
            key: 'RV'
        },
        {
            id: 3,
            lable: 'OVRD',
            key: 'OV'
        },
        {
            id: 4,
            lable: 'SHNT',
            key: 'SH'
        },
        {
            id: 5,
            lable: 'MBT'
        },
        {
            id: 6,
            lable: 'SR',
            key: 'SR'
        },
        {
            id: 7,
            lable: 'CONFIG'
        },
        {
            id: 8,
            lable: ''
        },
        {
            id: 9,
            lable: 'CNFM'
        },
        {
            id: 10,
            lable: 'INFO'
        },


    ]

    useEffect(() => {
        connectKavachWebSocket([
            { topic: KAVACH_TOPICS.KAVACHDATA, data: null },
            { topic: KAVACH_TOPICS.SKAVACHDATA, data: null },

        ]);
        return () => {
            unsubscribeKavachWebSocket();
        };
    }, []);

    useEffect(() => {
        setPayload({
            rfinfo: `TId-${KAVACH_DATA.tag_id || 0}, Dir-${KAVACH_DATA.train_movement_direction || 'NA'} Dist ${KAVACH_DATA.next_tag_distance || 0}`,
            rfvalue: KAVACH_DATA.radio_signal_strength,
            tagvalue: KAVACH_DATA.passed_tags,
            message: KAVACH_DATA.system_generated_message,
            dc: KAVACH_DATA.deceleration_constant,
            trainLength: null,
            targetDistance: KAVACH_DATA.target_distance,
            targetSpeed: KAVACH_DATA.speed_limit,
            movementAuthority: KAVACH_DATA.movement_authority,
            sectionSpeed: KAVACH_DATA.sectional_speed_limit,
            location: KAVACH_DATA.absolute_location,
            locoId: KAVACH_DATA.train_number,
            date: KAVACH_DATA.date,
            time: KAVACH_DATA.time,
            signalName: 'UP R-HOME-L4',
            speedLimit: KAVACH_DATA.speed_limit,
            actualSpeed: KAVACH_DATA.speed,
            signalData: KAVACH_DATA.upcomingSignalData,
            tdDescription: KAVACH_DATA.target_distance_description,
            absoluteLocation: KAVACH_DATA.absolute_location
        })
        const currentMode = getModes(KAVACH_DATA.kavach_operation_mode)
        setmode(currentMode)
        const getbreakMode = getBreak(KAVACH_DATA.type_of_brake_applied)
        setbreakMode(getbreakMode)
    }, [KAVACH_DATA])

    useEffect(() => {
        setStationaryPaylod(
            {
                sosIndicator: STATIONARY_DATA.light_sos,
                healthOk: STATIONARY_DATA.light_health_ok,
                healthFail: STATIONARY_DATA.light_health_fail,
                cancel: STATIONARY_DATA.btn_cancel,
                sosButton: STATIONARY_DATA.btn_sos,
                tsrAck: STATIONARY_DATA.btn_tsr_ack,
                counter: STATIONARY_DATA.sos_counter
            }
        )        

    }, [STATIONARY_DATA])





    return (
        <div className={kavach_main_container} >
            <div className={kavach_container}>
                <div className={kavach_banner}>
                    <img src={IRDMI} />
                </div>

                {
                    kavachTheme === 'default' && <div className={kavach_power_indicator}>
                        <div className={kpi_cells}>
                            <LedIndicator status={KAVACH_DATA.kavach_status} type={'red'} />
                        </div>
                        <div className={kpi_cells}>
                            <img style={{ height: '100%', width: '100%' }} src={powersvg} />
                        </div>
                    </div>
                }

                {
                    kavachTheme === 'default' && <div className={kavach_info_action}>
                        <div className={kavach_as_1}>

                            <div className={kavach_as_s1}>
                                {
                                    leftactions.map((x) => {
                                        return (
                                            <div
                                                onClick={x.action ? x.action : null}
                                                className={kavach_action_button}>
                                                <img src={x.icon} />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div style={!backlight ? { background: 'black' } : {}} className={kavach_as_s2}>

                                {
                                    backlight &&
                                    <div
                                        style={{
                                            filter: `brightness(${brightness})`,
                                            transition: "filter 0.4s ease",
                                        }}
                                        className={kavach_as_s2_container}>
                                        <div className={kavach_action_view}>

                                            <div

                                                className={kavach_action_view_container}>

                                                <div className={kav_sec_1}>


                                                    <div className={kav_sec_a}>
                                                        <div className={kav_sec_a1}>
                                                            <TargetDistance value={payload.targetDistance} desc={payload.tdDescription} />
                                                        </div>
                                                        <div className={kav_sec_a2}>
                                                            <div style={{ height: '100%', width: '100%', padding: '5%' }}>
                                                                <KavachSpeedoMeter currentspeed={payload.actualSpeed} speedlimit={payload.speedLimit} />
                                                            </div>
                                                            <div className={kav_target_speed}>
                                                                {payload.targetSpeed}
                                                            </div>
                                                            <div className={kav_section_speed_loco_location}>
                                                                <div style={{ width: '100%', height: '50%', textAlign: 'center' }}>
                                                                    {payload.sectionSpeed}
                                                                </div>
                                                                <div style={{ width: '100%', height: '50%', textAlign: 'center' }}>
                                                                    {`LOC:${payload.absoluteLocation} KM`}
                                                                </div>
                                                            </div>
                                                            <div className={kav_loco_id}>
                                                                {payload.locoId}
                                                            </div>
                                                            <div className={kav_date_time}>
                                                                <div style={{ width: '100%', height: '50%', textAlign: 'right' }}>
                                                                    {payload.date}
                                                                </div>
                                                                <div style={{ width: '100%', height: '50%', textAlign: 'right' }}>
                                                                    {payload.time}
                                                                </div>
                                                            </div>

                                                            <div className={kav_mode_indicators}>
                                                                <img style={{ height: '100%', width: '100%' }} src={mode?.icon} />
                                                            </div>

                                                            <div className={kav_break_indicators}>
                                                                {breakmode && <img style={{ height: '100%', width: '100%' }} src={breakmode.icon} />}
                                                            </div>

                                                        </div>
                                                        <div className={kav_sec_a3}>
                                                            <MoveAuthority value={payload.movementAuthority} />
                                                        </div>
                                                    </div>

                                                    <div className={kav_sec_b}>
                                                        <div className={kav_sec_b1}>
                                                            {`DC ${payload.dc}`}
                                                        </div>
                                                        <div className={kav_sec_b2}>
                                                            {payload.trainLength ? `TL ${payload.trainLength} mts` : 'Invalid'}
                                                        </div>
                                                        <div className={kav_sec_b3}>
                                                            {mode?.lable}
                                                        </div>
                                                    </div>

                                                    <div className={kav_sec_c}>
                                                        {payload.message}
                                                    </div>

                                                    <div className={kav_sec_d}>

                                                    </div>

                                                </div>
                                                <div className={kav_sec_2}>
                                                    <div className={kav_sec_2a}>
                                                        <div className={kav_signal_view}><KavachSignalComponent signalData={payload.signalData} /></div>
                                                        <div className={kav_signal_name}> {payload.signalName} </div>
                                                    </div>

                                                    <div className={kav_sec_2b}>
                                                        <div className={kav_sec_2b1}>
                                                            <div className={kav_sec_2b1a}>
                                                                <RFComponent value={payload.rfvalue} />
                                                            </div>
                                                            <div className={kav_sec_2b1b}>
                                                                {payload.rfinfo}
                                                            </div>
                                                        </div>

                                                        <div className={kav_sec_2b2}>
                                                            <div style={{ position: 'absolute', top: '5%' }}>TAG</div>
                                                            <div style={{ height: '70%', width: '100%', position: 'absolute', bottom: '0%' }}><TagComponent value={payload.tagvalue} /></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div className={kavach_action_view_footer}>
                                            {
                                                footerView.map((x) => {
                                                    return (
                                                        <div
                                                            style={(upcommingMode && x.key && x?.key === upcommingMode?.key) ? { background: 'rgba(11, 48, 169, 1)' } : {}}
                                                            className={kavach_action_view_footer_cells}>
                                                            {
                                                                x.lable
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className={kavach_as_s3}>
                                {
                                    rightactions.map((x) => {
                                        return (
                                            <div className={kavach_action_button}>
                                                <img src={x.icon} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>


                        <div className={kavach_as_2}>
                            {
                                numericKeys.map((x) => {
                                    return (
                                        <div
                                            onClick={() => numericFunctions(x.id)}
                                            className={kavach_action_numeric_button}>
                                            <img src={x.icon} />
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                }

                {
                    kavachTheme === 'default' && <div className={kavach_footer_action}>

                        <div className={kavach_footer_action_cells}>

                            <div style={{ height: '50%', width: '100%', position: 'absolute', top: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                                <KavachButtons type={'black'} state={setCommon} />
                            </div>
                            <div style={{ height: '25%', width: '100%', position: 'absolute', bottom: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                <img style={{ height: '100%', width: '100%' }} src={commonsteelsvg} />
                            </div>
                        </div>


                        <div style={{ width: '30%' }} className={kavach_footer_action_cells}>
                            <div style={{ height: '30%', width: '100%', position: 'absolute', top: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }} >
                                <img style={{ height: '100%', width: '50%' }} src={leadingsteelsvg} />
                                <img style={{ height: '100%', width: '50%' }} src={nonleadingsteelsvg} />
                            </div>
                            <div style={{ height: '45%', width: '100%', position: 'absolute', top: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                <KavachButtons type={'leading'} state={setLeading} />
                            </div>
                            <div style={{ height: '25%', width: '100%', position: 'absolute', bottom: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                <img style={{ height: '100%', width: '100%' }} src={locosteelsvg} />
                            </div>


                        </div>




                        <div style={{ width: '20%' }} className={kavach_footer_action_cells}>

                            <div style={{ height: '50%', width: '100%', position: 'absolute', top: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                <KavachButtons style={{ height: '100%', width: '100%' }} type={'blue'} state={setAck} />
                            </div>
                            <div style={{ height: '25%', width: '100%', position: 'absolute', bottom: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                <img style={{ height: '100%', width: '100%' }} src={akncsteelsvg} />
                            </div>
                        </div>



                        <div className={kavach_footer_action_cells}>
                            <div style={{ height: '50%', width: '100%', position: 'absolute', top: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                <KavachButtons type={'red'} state={setSos} />

                            </div>
                            <div style={{ height: '25%', width: '100%', position: 'absolute', bottom: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                <img style={{ height: '100%', width: '100%' }} src={sossteelsvg} />
                            </div>

                        </div>



                        <div style={{ width: '20%' }} className={kavach_footer_action_cells}>


                            <div style={{ height: '17%', width: '100%', position: 'absolute', top: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={systemsteelsvg} />
                            </div>

                            <div style={{ height: '17%', width: '100%', position: 'absolute', top: '17%', display: 'flex', justifyContent: 'center' }} >
                                <LedIndicator type={'green'} status={true} />
                            </div>

                            <div style={{ height: '32%', width: '100%', position: 'absolute', top: '34%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src={hfsteelsvg} />
                            </div>

                            <div style={{ height: '17%', width: '100%', position: 'absolute', bottom: '17%', display: 'flex', justifyContent: 'center' }} >
                                <LedIndicator type={'green'} status={false} />

                            </div>

                            <div style={{ height: '17%', width: '100%', position: 'absolute', bottom: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={sossteelsvg} />
                            </div>


                        </div>
                    </div>
                }

                {
                    kavachTheme === 'stationary' &&
                    <div className={kavach_stationary_container}>
                        <div className={ksc_header}>
                            <div>  STATOPN MANGER’S OPERATION-CUM-INDICATION PANEL </div>
                            <div>  (SM-OCIP)</div>
                        </div>
                        <div className={ksc_action_1}>
                            <div style={{ height: '60%' }} className={ksc_action_1_cell}>
                                <SosCounter value={String(stationaryPayload.counter).padStart(6, '0')
                                } />
                            </div>
                            <div style={{ height: '30%' }} className={ksc_action_1_cell}>
                                <img style={{ height: '100%', width: '100%' }} src={sosCounterlogo} />
                            </div>

                        </div>
                        <div className={ksc_action_2}>
                            <div className={indicator_button_container}>
                                <div className={indicator_button_view}><ColorIndicator status={stationaryPayload.sosIndicator} color={'red'} /></div>
                                <div className={indicator_button_logo}><img style={{ height: '100%', width: '100%', objectFit: 'fill' }} src={sossteelsvg} /></div>
                            </div>
                            <div className={indicator_button_container}>
                                <div className={indicator_button_view}><ColorIndicator status={stationaryPayload.healthOk} color={'green'} /></div>
                                <div className={indicator_button_logo}><img style={{ height: '100%', width: '100%', objectFit: 'fill' }} src={healthoklogo} /></div>
                            </div>
                            <div className={indicator_button_container}>
                                <div className={indicator_button_view}><ColorIndicator status={stationaryPayload.healthFail} color={'red'} /></div>
                                <div className={indicator_button_logo}><img style={{ height: '100%', width: '100%', objectFit: 'fill' }} src={healthfaillogo} /></div>
                            </div>
                        </div>
                        <div className={ksc_action_3}>
                            <div className={indicator_button_container}>
                                <div className={indicator_button_view}><KavachButtons type={'blue'} state={setCommon} currentData={stationaryPayload.cancel} publishdata={{ type: 'scancel' }} /> </div>
                                <div className={indicator_button_logo}><img style={{ height: '100%', width: '100%', objectFit: 'fill' }} src={cancelbuttonlogo} /></div>
                            </div>
                            <div className={indicator_button_container}>
                                <div className={indicator_button_view}><KavachButtons type={'red'} state={setCommon} currentData={stationaryPayload.sosButton} publishdata={{ type: 'ssos' }} /> </div>
                                <div className={indicator_button_logo}><img style={{ height: '100%', width: '100%', objectFit: 'fill' }} src={sossteelsvg} /></div>
                            </div>
                            <div className={indicator_button_container}>
                                <div className={indicator_button_view}><KavachButtons type={'yellow'} state={setCommon} currentData={stationaryPayload.tsrAck} publishdata={{ type: 'ttskAck' }} /> </div>
                                <div className={indicator_button_logo}><img style={{ height: '100%', width: '100%', objectFit: 'fill' }} src={tsracklogo} /></div>
                            </div>
                        </div>
                    </div>
                }

                <div className={kavach_theme_selector}>
                    <div onClick={() => changeKavachTheme('default')} className={kavachTheme === 'default' ? active_theme_button : inactive_theme_button}>LP-OCIP</div>
                    <div onClick={() => changeKavachTheme('stationary')} className={kavachTheme === 'stationary' ? active_theme_button : inactive_theme_button}>SM-OCIP</div>
                </div>

            </div>
        </div>
    )
}



