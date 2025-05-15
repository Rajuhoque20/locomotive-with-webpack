import React, { useEffect, useState } from 'react'
import classes from './pixySwitchTab.module.css'
import { PixyCommisionDataTabs, PixyDiagnosticDataSetTabs, pixymainmenulist, pixymainTabs, PixyMSITabs, PixyProcessInformatioTabs } from '../../TabsData/tabs';
import { useInchingMode, useLocoSSStore, useVDBrowseMode } from '../../MiddlewareFunctions/medha_pixy_stores';
import { UnicInfo1 } from '../../MedhaComponents/MedhaComponentsStore';
const { pixy_switch_tab_container, pixy_switch_tab_container_inner, pixy_home_container, pixy_data_container, pixy_footer_container, pixy_data_conteiner_inner, pixyunicmenu,
    pixy_home_view, pixy_home_data_view, pixy_Main_menu_view, pixy_mmv_content, pixy_mmv_footer, pixy_mmv_divs, pixy_mmv_divs_data, pixy_vs_bm_home, pixy_vs_bm_home_footer,
    pixy_vs_bm_home_data, pixy_vdbm_data_view, pixy_vdbm_data_view_header, pixy_vdbm_data_view_header_cell, empty_pixy_vdbm_loco, pixy_vdbm_data_view_content, pixy_itb_view,
    pixy_itb_view_header, pixy_itb_view_content, pixy_itb_view_foolter, pixy_itb_view_content_List, pixy_pi_menu_view, pixy_pi_menu_view_header_data, pixy_table_header_row_cell,
    pixy_pi_ec_data_view_row, pixy_pi_menu_view_content, pixy_pi_menu_view_footer, pixy_table_main_container, pixy_table_inner_container, pixy_table_header_row, pixy_table_data_container,
    pixy_table_data_container_cell, pixy_table_data_container_row, pixy_node__sim_info_container, pixy_node_sim_info_header, pixy_node_sim_info_data_view, pixy_node_sim_info_data_cell,
    pixy_sv_container, pixy_sv_header, pixy_sv_content, pixy_sv_footer_instruction, pixy_sv_footer, pixy_sv_content_tables, pixy_svt_container, pixy_svt_header_row, pixy_svt_data_row,
    pixy_svt_data_cell, pixy_inchingmode_view, pixy_icm_header, pixy_icm_conditions, pixy_icm_footer, pixy_inchingmode_error, pixy_imtest_container, pixy_imtest_header, pixy_imtest_actions,
    pixy_imtest_actions_instruction, pixy_imtest_actions_footer, pixy_imtest_actions_row, pixy_imtest_actions_row_cell
} = classes;

export const PixySwitchTab = ({ routePath, upcommingRoutePath }) => {
    const componentsMap = {
        'homepixy-tab/': PixyHome,
        'homepixy-tab/MAIN MENU/': PixyMainMenuView,
        'homepixy-tab/MAIN MENU/VEHICLE DIAGNOSTICS/': PixyVEHICLEDIAGNOSTICS,
        'homepixy-tab/MAIN MENU/VEHICLE DIAGNOSTICS/BROWSE MODE/': PixyVDBROWSEMode,
        'homepixy-tab/MAIN MENU/INFORMATION TRAIN BUS/': InformationTrainBus,
        'homepixy-tab/MAIN MENU/PROCESS INFORMATION/': ProcessInformation,
        'homepixy-tab/MAIN MENU/PROCESS INFORMATION/ENERGY CONSUMPTION/': EnergyConsumptionView,
        'homepixy-tab/MAIN MENU/PROCESS INFORMATION/COMMISSION DATA/': CommissionData,
        'homepixy-tab/MAIN MENU/PROCESS INFORMATION/COMMISSION DATA/DIAGNOSTIC DATA SET/': DiagnosticDataSet,
        'homepixy-tab/MAIN MENU/PROCESS INFORMATION/COMMISSION DATA/DIAGNOSTIC DATA SET/ENTER ARCHIVE/': ArchiveFaults,
        'homepixy-tab/MAIN MENU/PROCESS INFORMATION/COMMISSION DATA/DIAGNOSTIC DATA SET/ALL ACTIVE FAULTS/': AllActiveFaults,
        'homepixy-tab/MAIN MENU/PROCESS INFORMATION/COMMISSION DATA/DIAGNOSTIC DATA SET/ALL INACTIVE FAULTS/': AllInActiveFaults,
        'homepixy-tab/MAIN MENU/PROCESS INFORMATION/COMMISSION DATA/NODE INFORMATION/': NodeInformation,
        'homepixy-tab/MAIN MENU/PROCESS INFORMATION/COMMISSION DATA/SIMULATION/': SimulationInformation,
        'homepixy-tab/MAIN MENU/PROCESS INFORMATION/MSI/': MSIview,
        'homepixy-tab/MAIN MENU/PROCESS INFORMATION/MSI/MOTOR TEMPRETURES/': TractonMotorTempreture,
        'homepixy-tab/MAIN MENU/PROCESS INFORMATION/MSI/SOFTWARE VERSIONS/': SoftwareVersions,
        'homepixy-tab/MAIN MENU/PROCESS INFORMATION/MSI/INCHING MODE INFORMATION/': InchingMode,
        'homepixy-tab/MAIN MENU/PROCESS INFORMATION/MSI/INCHING MODE INFORMATION/ERROR/': InchningModeError,
        'homepixy-tab/MAIN MENU/PROCESS INFORMATION/MSI/INCHING MODE INFORMATION/TEST/': InchingModeTest
    };

    const getComponent = () => {
        if (routePath.includes('homepixy-tab/MAIN MENU/VEHICLE DIAGNOSTICS/SSMODE/')) {
            return PixyLOCOSUBSYSTEMMODE;
        }
        if (routePath.includes('homepixy-tab/MAIN MENU/VEHICLE DIAGNOSTICS/BROWSE MODE/BMV/')) {
            return PixyVDBMView;
        }
        return componentsMap[routePath] || null;
    };

    const Component = getComponent();

    return (
        <div className={pixy_switch_tab_container}>
            <div className={pixy_switch_tab_container_inner}>
                {Component && <Component routePath={routePath} upcommingRoutePath={upcommingRoutePath} />}
            </div>
        </div>
    );
};

const PixyHome = ({ routePath, upcommingRoutePath }) => {
    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    <div className={pixy_home_view}>
                        <div className={pixy_home_data_view}>
                            <div style={{ width: '50%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'left', paddingLeft: '10%' }} >
                                29/02/2020
                            </div>
                            <div style={{ width: '50%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'right', paddingRight: '10%' }} >
                                18:17:43
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [...pixymainTabs, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.lable}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const PixyMainMenuView = ({ routePath, upcommingRoutePath }) => {
    const pmmvPath = 'homepixy-tab/MAIN MENU/'
    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    <div className={pixy_Main_menu_view}>
                        <div className={pixy_mmv_content}>
                            <div className={pixy_mmv_divs}>
                                <div className={pixy_mmv_divs_data}>
                                    MAIN MENU
                                </div>
                                {
                                    pixymainmenulist.map((x) => {
                                        return (
                                            <div style={upcommingRoutePath === pmmvPath + `${x.lable}/` ? { fontWeight: '700', fontSize: '2vh' } : { fontWeight: '500', fontSize: '1.8vh' }} className={pixy_mmv_divs_data}>
                                                {`${x.id}:${x.lable}`}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={pixy_mmv_divs}>
                                <div className={pixy_mmv_divs_data}>
                                    LOCO NUMBER
                                </div>
                                {
                                    <div style={{ fontWeight: '500', fontSize: '1.8vh' }} className={pixy_mmv_divs_data}>
                                        {`LOCO 31234`}
                                    </div>
                                }
                            </div>
                        </div>
                        <div className={pixy_mmv_footer}>
                            PRESS NUMBER KEYS TO SELECT
                        </div>
                    </div>
                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [...pixymainmenulist, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.id}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const PixyVEHICLEDIAGNOSTICS = ({ routePath, upcommingRoutePath }) => {
    const { currentData, locoInfo } = useLocoSSStore();
    const pixyVD = 'homepixy-tab/MAIN MENU/VEHICLE DIAGNOSTICS/'
    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    <div className={pixy_Main_menu_view}>
                        <div className={pixy_mmv_content}>
                            <div className={pixy_mmv_divs}>
                                <div className={pixy_mmv_divs_data}>
                                    VEHICLE DIAGNOSTICS :
                                </div>
                                {
                                    locoInfo.map((x) => {
                                        return (
                                            <div style={upcommingRoutePath === pixyVD + `SSMODE/${x.loconumber}${x.id}` ? { fontWeight: '700', fontSize: '2vh' } : { fontWeight: '500', fontSize: '1.8vh' }} className={pixy_mmv_divs_data}>
                                                {`${x.id}. ${x.lable} ${x.loconumber}`}
                                            </div>
                                        )
                                    })
                                }

                                <div style={upcommingRoutePath === pixyVD + `${'BROWSE MODE'}/` ? { fontWeight: '700', fontSize: '2vh' } : { fontWeight: '500', fontSize: '1.8vh' }} className={pixy_mmv_divs_data}>
                                    {`${locoInfo.length + 1}. ${'BROWSE MODE'}`}
                                </div>
                            </div>
                            <div className={pixy_mmv_divs}>
                                <div className={pixy_mmv_divs_data}>
                                    LOCO STATUS
                                </div>
                                {
                                    locoInfo.map((x) => {
                                        return (
                                            <div style={{ fontWeight: '500', fontSize: '1.8vh' }} className={pixy_mmv_divs_data}>
                                                {`${x.status}`}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={pixy_mmv_footer}>
                            PRESS NUMBER KEYS TO SELECT
                        </div>
                    </div>
                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [...pixymainmenulist, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.id}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const PixyLOCOSUBSYSTEMMODE = ({ routePath, upcommingRoutePath }) => {
    const { currentData, locoInfo, setCuurentInfo, currentInfo } = useLocoSSStore();
    const splitted = routePath.split('/')
    const getId = splitted[splitted.length - 1]
    const letgetData = locoInfo.find(x => `${x.loconumber}${x.id}` === `${getId}`)
    const [subsystem, setSubsystem] = useState(currentData[0])
    useEffect(() => {
        setCuurentInfo({ ...letgetData, data: currentData, visible: currentData[0] })
    }, [])
    console.log(currentInfo)
    useEffect(() => {
        setSubsystem(currentInfo.visible)
    }, [currentInfo])
    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    <div className={pixy_Main_menu_view}>
                        <div className={pixy_mmv_content}>
                            <div className={pixy_mmv_divs}>
                                <div className={pixy_mmv_divs_data}>
                                    {`LOCO NUMBER : ${letgetData.loconumber}`}
                                </div>

                                <div className={pixy_mmv_divs_data}>
                                    {subsystem.subsystem}
                                </div>
                            </div>
                            <div className={pixy_mmv_divs}>
                                <div className={pixy_mmv_divs_data}>
                                    SUB-SYSTEM STATUS
                                </div>
                                <div className={pixy_mmv_divs_data}>
                                    {subsystem.status}
                                </div>
                            </div>
                        </div>
                        <div className={pixy_mmv_footer}>
                            {'<UP> : PREVIOUS, <DOWN> : NEXT'}
                        </div>
                    </div>
                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [{ id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.id}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const PixyVDBROWSEMode = ({ routePath, upcommingRoutePath }) => {
    const { browseLocos } = useVDBrowseMode()
    const VDBMpath = 'homepixy-tab/MAIN MENU/VEHICLE DIAGNOSTICS/BROWSE MODE/BMV/'
    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    <div className={pixy_vs_bm_home}>
                        <div className={pixy_vs_bm_home_data}>
                            <div>
                                DIAGNOSTICS : BROWSE MODE
                            </div>

                            {
                                browseLocos.map((x) => {
                                    const selected = VDBMpath + `${x.trainNumber}${x.id}` === upcommingRoutePath
                                    return (
                                        <div style={selected ? { fontWeight: '590', fontSize: '2.5vh' } : { fontWeight: '400' }}>{`${x.id}. LOCO ${x.trainNumber}:${x.fault}/${x.message}`}</div>

                                    )
                                })
                            }
                        </div>
                        <div className={pixy_vs_bm_home_footer}>
                            {'PRESS CANCEL (C) TO GO TO PREVIOUS SCREEN'}
                        </div>
                    </div>
                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [...browseLocos, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.id}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const PixyVDBMView = ({ routePath, upcommingRoutePath }) => {
    const [currentData, setCurrentData] = useState()

    const { visible, currentBML, setVisibleInfo, setcurrentBML, browseLocos, setcurrentBMLLocoSS, currentBMLLocoSS } = useVDBrowseMode()
    useEffect(() => {
        setCurrentData((prevData) => ({
            currentLocoInfo: prevData?.currentLocoInfo ?? currentBML,
            locoSSInfo: prevData?.locoSSInfo ?? currentBMLLocoSS,
            visible: visible
        }));
    }, [visible, currentBML, currentBMLLocoSS]);



    console.log('currentData', currentData)
    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    {
                        currentData?.locoSSInfo.length > 0 &&
                        <div className={pixy_vdbm_data_view}>
                            <div className={pixy_vdbm_data_view_header}>
                                <div className={pixy_vdbm_data_view_header_cell}>
                                    {`LOCO NO:${currentData?.currentLocoInfo?.trainNumber}`}
                                </div>
                                <div className={pixy_vdbm_data_view_header_cell}>
                                    {`BROWSE LOCO ${currentData?.currentLocoInfo?.id} `}
                                </div>
                                <div className={pixy_vdbm_data_view_header_cell}>
                                    {`${currentData?.locoSSInfo?.findIndex((item) => item.id === currentData?.visible?.id) + 1}/${currentBMLLocoSS.length}`}
                                </div>
                            </div>
                            <div className={pixy_vdbm_data_view_content}>{`FC:${currentData.visible.fc}`} </div>
                            <div className={pixy_vdbm_data_view_content}>{`${currentData.visible.subsystem}:${currentData.visible.message}`} </div>
                            <div className={pixy_vdbm_data_view_content}> {`${currentData.visible.status}`}</div>


                        </div>
                    }
                    {
                        currentData?.locoSSInfo.length == 0 && <div className={empty_pixy_vdbm_loco}>
                            <div style={{ fontSize: '2vh', fontWeight: '700', color: 'white' }}>SECOND LOCO DOES NOT EXISTING!</div>
                            <div style={{ fontSize: '2vh', fontWeight: '400', color: 'white' }}>{`WAIT OR PRESS <CANCEL>`}</div>
                        </div>
                    }
                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [{ id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.id}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const InformationTrainBus = ({ routePath, upcommingRoutePath }) => {
    const TrainBusInfo = [
        {
            id: 1,
            trainNumber: '31427'
        },
        {
            id: 2,
            trainNumber: '0000000'
        }
    ]
    const oddIds = TrainBusInfo.filter(item => item.id % 2 !== 0);
    const evenIds = TrainBusInfo.filter(item => item.id % 2 === 0);
    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    <div className={pixy_itb_view}>
                        <div className={pixy_itb_view_header}>
                            TRAIN CONFIGURATION
                        </div>
                        <div className={pixy_itb_view_content}>
                            <div className={pixy_itb_view_content_List}>
                                {
                                    oddIds.map((x) => {
                                        return (
                                            <div>
                                                {`${x.id}. LOCO ${x.trainNumber}`}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={pixy_itb_view_content_List}>
                                {
                                    evenIds.map((x) => {
                                        return (
                                            <div>
                                                {`${x.id}. LOCO ${x.trainNumber}`}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={pixy_itb_view_foolter}>
                            {`PRESS CANCEL (C) TO GO TO PREVIOUS SCREEN`}
                        </div>
                    </div>
                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [{ id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.id}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const ProcessInformation = ({ routePath, upcommingRoutePath }) => {
    const pIpath = 'homepixy-tab/MAIN MENU/PROCESS INFORMATION/'
    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    <div className={pixy_pi_menu_view}>
                        <div className={pixy_pi_menu_view_content}>
                            <div style={{ paddingLeft: '2.5%', fontWeight: '700' }} className={pixy_pi_menu_view_header_data}>
                                PROCESS INFORMATION:
                            </div>
                            {
                                PixyProcessInformatioTabs.map((x) => {
                                    return (<div style={pIpath + (x.lable === 'MOTOR TEMPRETURE / SOFTWARE VERSION / INCHING MODE' ? 'MSI/' : `${x.lable}/`) === upcommingRoutePath ? { fontWeight: '700' } : {}} className={pixy_pi_menu_view_header_data}> {`${x.id}. ${x.lable}`}</div>)
                                }
                                )
                            }
                        </div>
                        <div className={pixy_pi_menu_view_footer}>
                            PRESS NUMBER KEYS TO SELECT
                        </div>

                    </div>
                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [...PixyProcessInformatioTabs, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.id}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const EnergyConsumptionView = ({ routePath, upcommingRoutePath }) => {
    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    <div className={pixy_pi_menu_view}>
                        <div className={pixy_pi_menu_view_content}>
                            <div style={{ paddingLeft: '2.5%', fontWeight: '700' }} className={pixy_pi_menu_view_header_data}>
                                ENERGY CONSUMPTION:
                            </div>
                            <div className={pixy_pi_ec_data_view_row}>
                                <div>ENERGY COUNTER:</div> <div style={{ fontWeight: '700' }}>31427</div>
                            </div>
                            <div className={pixy_pi_ec_data_view_row}>
                                <div>CONSUMED IN KWH:</div> <div style={{ fontWeight: '700' }}>2001.6</div>
                            </div>
                            <div className={pixy_pi_ec_data_view_row}>
                                <div>REGENRATED IN KWH:</div> <div style={{ fontWeight: '700' }}>38.5</div>
                            </div>
                        </div>

                        <div className={pixy_pi_menu_view_footer}>
                            PRESS CANCEL (C) TO GO TO PREVIOUS SCREEN
                        </div>

                    </div>
                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [{ id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.id}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const CommissionData = ({ routePath, upcommingRoutePath }) => {
    const cDpath = 'homepixy-tab/MAIN MENU/PROCESS INFORMATION/COMMISSION DATA/'
    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    <div className={pixy_pi_menu_view}>
                        <div className={pixy_pi_menu_view_content}>
                            <div style={{ paddingLeft: '2.5%', fontWeight: '700' }} className={pixy_pi_menu_view_header_data}>
                                COMMISSIONING DATA:
                            </div>
                            {
                                PixyCommisionDataTabs.map((x) => {
                                    return (<div style={cDpath + `${x.lable}/` === upcommingRoutePath ? { fontWeight: '700' } : {}} className={pixy_pi_menu_view_header_data}> {`${x.id}. ${x.lable}`}</div>)
                                }
                                )
                            }
                        </div>
                        <div className={pixy_pi_menu_view_footer}>
                            PRESS NUMBER KEYS TO SELECT
                        </div>

                    </div>
                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [...PixyCommisionDataTabs, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.id}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const DiagnosticDataSet = ({ routePath, upcommingRoutePath }) => {

    const sSpath = 'homepixy-tab/MAIN MENU/PROCESS INFORMATION/COMMISSION DATA/DIAGNOSTIC DATA SET/'
    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    <div className={pixy_pi_menu_view}>
                        <div className={pixy_pi_menu_view_content}>
                            <div style={{ paddingLeft: '2.5%', fontWeight: '700' }} className={pixy_pi_menu_view_header_data}>
                                DIAGNOSTIC DATA SET:
                            </div>
                            {
                                PixyDiagnosticDataSetTabs.map((x) => {
                                    return (<div style={sSpath + `${x.lable}/` === upcommingRoutePath ? { fontWeight: '700' } : {}} className={pixy_pi_menu_view_header_data}> {`${x.id}. ${x.lable}`}</div>)
                                }
                                )
                            }
                        </div>
                        <div className={pixy_pi_menu_view_footer}>
                            PRESS NUMBER KEYS TO SELECT
                        </div>

                    </div>
                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [...PixyDiagnosticDataSetTabs, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.id}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const ArchiveFaults = () => {
    const archiveFaults = []

    return (<DiagnosticDataSetTableComponent />)
}

const AllActiveFaults = () => {
    const allActiveFaults = []

    return (<DiagnosticDataSetTableComponent />)
}

const AllInActiveFaults = () => {
    const allInActiveFaults = []

    return (<DiagnosticDataSetTableComponent />)
}

const DiagnosticDataSetTableComponent = ({ payload }) => {

    const faultData = [
        {
            id: 1,
            faultCode: "29862",
            faultNumber: "F1407P2",
            faultMessage: "ACC2 - DOP3 COMM FAIL",
            frequency: 1,
            status: "INACTIVE",
            date: "29/02/2020",
            time: "17:23:50"
        },
        {
            id: 2,
            faultCode: "29861",
            faultNumber: "F1407P2",
            faultMessage: " ACC2 - DOP2 COMM FAIL",
            frequency: 1,
            status: "INACTIVE",
            date: "29/02/2020",
            time: "17:23:50"
        },
        {
            id: 3,
            faultCode: "29861",
            faultNumber: "F1407P2",
            faultMessage: " ACC2 - DOP2 COMM FAIL",
            frequency: 1,
            status: "INACTIVE",
            date: "29/02/2020",
            time: "17:23:50"
        },
        {
            id: 4,
            faultCode: "29860",
            faultNumber: "F1407P2",
            faultMessage: "ACC2 - DOP1 COMM FAIL",
            frequency: 1,
            status: "INACTIVE",
            date: "29/02/2020",
            time: "17:22:45"
        },
        {
            id: 5,
            faultCode: "29859",
            faultNumber: "F1407P2",
            faultMessage: "ACC1 - DOP3 COMM FAIL",
            frequency: 1,
            status: "INACTIVE",
            date: "29/02/2020",
            time: "17:21:30"
        },
        {
            id: 6,
            faultCode: "29858",
            faultNumber: "F1407P2",
            faultMessage: " ACC1 - DOP2 COMM FAIL",
            frequency: 1,
            status: "INACTIVE",
            date: "29/02/2020",
            time: "17:20:15"
        },
        {
            id: 7,
            faultCode: "29857",
            faultNumber: "F1407P2",
            faultMessage: "ACC1 - DOP1 COMM FAIL",
            frequency: 1,
            status: "INACTIVE",
            date: "29/02/2020",
            time: "17:19:00"
        }
    ]


    const headers = [
        {
            id: 1,
            lable: 'DATE & TIME',
            width: '13'
        },
        {
            id: 2,
            lable: 'FAULT CODE',
            width: '13'
        },
        {
            id: 3,
            lable: 'FAULT MESSAGE',
            width: '48'
        },
        {
            id: 4,
            lable: 'FREQUENCY',
            width: '13'
        },
        {
            id: 5,
            lable: 'STATUS',
            width: '13'
        },
    ]

    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    <div className={pixy_table_main_container}>
                        <div className={pixy_table_inner_container}>

                            <div className={pixy_table_header_row}>
                                {
                                    headers.map((x) => {
                                        return (
                                            <div style={{ width: `${x.width}%`, borderRight: '0.1vh solid rgba(30, 144, 255, 1)', borderBottom: '0.1vh solid rgba(30, 144, 255, 1)' }} key={x.id} className={pixy_table_header_row_cell}>{x.lable}</div>
                                        )
                                    })
                                }
                            </div>

                            <div className={pixy_table_data_container}>
                                {
                                    faultData.map((x) => {
                                        return (
                                            <div className={pixy_table_data_container_row}>
                                                <div style={{ width: '13%', borderRight: '0.1vh solid rgba(30, 144, 255, 1)' }} className={pixy_table_data_container_cell}>
                                                    <div >
                                                        {x.date}
                                                    </div>
                                                    <div>
                                                        {x.time}
                                                    </div>
                                                </div>
                                                <div style={{ width: '13%', borderRight: '0.1vh solid rgba(30, 144, 255, 1)' }} className={pixy_table_data_container_cell}>
                                                    {x.faultCode}
                                                </div>
                                                <div style={{ width: '48%', borderRight: '0.1vh solid rgba(30, 144, 255, 1)' }} className={pixy_table_data_container_cell}>
                                                    <div>
                                                        {`[${x.faultNumber}]`}
                                                    </div>
                                                    <div>
                                                        {`MCC:${x.faultMessage}`}
                                                    </div>
                                                </div>
                                                <div style={{ width: '13%', borderRight: '0.1vh solid rgba(30, 144, 255, 1)' }} className={pixy_table_data_container_cell}>
                                                    {x.frequency}
                                                </div>
                                                <div style={{ width: '13%' }} className={pixy_table_data_container_cell}>
                                                    {x.status}
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [{ id: 1, lable: 'Page Up' }, { id: 2, lable: 'Page Down' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.lable}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const NodeInformation = ({ routePath, upcommingRoutePath }) => {
    const data = [
        {
            id: 1,
            lable1: 'MCC1 NODE',
            lable2: 'MCC2 NODE',
            lable1data: '710',
            lable2data: '710'
        },
        {
            id: 2,
            lable1: 'SLV NODE',
            lable2: 'SPARE2 NODE',
            lable1data: '0',
            lable2data: '0'
        },
        {
            id: 3,
            lable1: 'SPARE2 NODE',
            lable2: 'SPARE3 NODE',
            lable1data: '0',
            lable2data: '0'
        }
    ]
    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    <div className={pixy_node__sim_info_container}>
                        <div className={pixy_node_sim_info_header}>
                            NODE INFORMATION:
                        </div>
                        {
                            data.map((x) => {
                                return (
                                    <div className={pixy_node_sim_info_data_view}>
                                        <div style={{ width: '20%' }} className={pixy_node_sim_info_data_cell}>
                                            {x.lable1}
                                        </div>
                                        <div style={{ width: '30%', fontWeight: '700' }} className={pixy_node_sim_info_data_cell}>
                                            {x.lable1data}
                                        </div>
                                        <div style={{ width: '20%' }} className={pixy_node_sim_info_data_cell}>
                                            {x.lable2}
                                        </div>
                                        <div style={{ width: '30%', fontWeight: '700' }} className={pixy_node_sim_info_data_cell}>
                                            {x.lable2data}

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [{ id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.id}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const SimulationInformation = ({ routePath, upcommingRoutePath }) => {
    const data = [
        {
            id: 1,
            lable1: 'OHE VOLT (KV)',
            lable2: 'MCC1 NODE',
            lable1data: '710',
            lable2data: '710'
        },
        {
            id: 2,
            lable1: 'LOCO SPEED',
            lable2: 'MCC2 NODE',
            lable1data: '0',
            lable2data: '0'
        },
        {
            id: 3,
            lable1: 'TE/BE BG1 (KN)',
            lable2: 'TE/BE BG2 (KN)',
            lable1data: '0',
            lable2data: '0'
        }
    ]
    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    <div className={pixy_node__sim_info_container}>
                        <div className={pixy_node_sim_info_header}>
                            SIMULATION:
                        </div>
                        {
                            data.map((x) => {
                                return (
                                    <div className={pixy_node_sim_info_data_view}>
                                        <div style={{ width: '20%' }} className={pixy_node_sim_info_data_cell}>
                                            {x.lable1}
                                        </div>
                                        <div style={{ width: '30%', fontWeight: '700' }} className={pixy_node_sim_info_data_cell}>
                                            {x.lable1data}
                                        </div>
                                        <div style={{ width: '20%' }} className={pixy_node_sim_info_data_cell}>
                                            {x.lable2}
                                        </div>
                                        <div style={{ width: '30%', fontWeight: '700' }} className={pixy_node_sim_info_data_cell}>
                                            {x.lable2data}

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [{ id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.id}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const MSIview = ({ routePath, upcommingRoutePath }) => {
    const MSIpath = 'homepixy-tab/MAIN MENU/PROCESS INFORMATION/MSI/'
    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    <div className={pixy_pi_menu_view}>
                        <div className={pixy_pi_menu_view_content}>
                            <div style={{ paddingLeft: '2.5%', fontWeight: '700' }} className={pixy_pi_menu_view_header_data}>
                                MOTOR TEMPRETURE / SOFTWARE VERSION / INCHING MODE:
                            </div>
                            {
                                PixyMSITabs.map((x) => {
                                    return (<div style={MSIpath + `${x.lable}/` === upcommingRoutePath ? { fontWeight: '700' } : {}} className={pixy_pi_menu_view_header_data}> {`${x.id}. ${x.lable}`}</div>)
                                }
                                )
                            }
                        </div>
                        <div className={pixy_pi_menu_view_footer}>
                            PRESS NUMBER KEYS TO SELECT
                        </div>

                    </div>
                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [...PixyMSITabs, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.id}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const TractonMotorTempreture = ({ routePath, upcommingRoutePath }) => {
    const data = [
        {
            id: 1,
            lable1: 'TM1 STATOR TEMP',
            lable2: 'TM2 STATOR TEMP',
            lable1data: '80',
            lable2data: '80'
        },
        {
            id: 2,
            lable1: 'TM3 STATOR TEMP',
            lable2: 'TM4 STATOR TEMP',
            lable1data: '80',
            lable2data: '80'
        },
        {
            id: 3,
            lable1: 'TM5 STATOR TEMP',
            lable2: 'TM6 STATOR TEMP',
            lable1data: '80',
            lable2data: '80'
        }
    ]
    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    <div className={pixy_node__sim_info_container}>
                        <div className={pixy_node_sim_info_header}>
                            TRACTION MOTOR TEMPRESTURE:
                        </div>
                        {
                            data.map((x) => {
                                return (
                                    <div className={pixy_node_sim_info_data_view}>
                                        <div style={{ width: '20%' }} className={pixy_node_sim_info_data_cell}>
                                            {x.lable1}
                                        </div>
                                        <div style={{ width: '30%', fontWeight: '700' }} className={pixy_node_sim_info_data_cell}>
                                            {x.lable1data}
                                        </div>
                                        <div style={{ width: '20%' }} className={pixy_node_sim_info_data_cell}>
                                            {x.lable2}
                                        </div>
                                        <div style={{ width: '30%', fontWeight: '700' }} className={pixy_node_sim_info_data_cell}>
                                            {x.lable2data}

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [{ id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.id}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export const SoftwareVersions = ({ }) => {

    const vc1 = [
        {
            lable1: 'MCC1',
            lable1data: '01.01',
            lable2: 'DIP1',
            lable2data: '01.00',
            lable3: 'DIP2',
            lable3data: '01.00',
            lable4: 'DIP3',
            lable4data: '01.00',
        },
        {
            lable1: 'ACC',
            lable1data: '01.06',
            lable2: 'DOP1',
            lable2data: '01.00',
            lable3: 'DOP2',
            lable3data: '01.00',
            lable4: 'DOP3',
            lable4data: '01.00',
        },
        {
            lable1: 'TCN',
            lable1data: '01.06',
            lable2: 'DMC',
            lable2data: '01.00',
            lable3: 'IDL',
            lable3data: '01.00',
            lable4: 'MC',
            lable4data: '01.00',
        },
        {
            lable1: 'LRMS',
            lable1data: 'NA',
            lable2: 'TFT',
            lable2data: '01.00',
            lable3: 'TFTKEYPAD',
            lable3data: '01.00',
            lable4: 'SPARE',
            lable4data: 'NA',
        },
        {
            lable1: 'SPARE',
            lable1data: 'NA',
            lable2: 'SPARE',
            lable2data: 'NA',
            lable3: 'SPARE',
            lable3data: 'NA',
            lable4: 'SPARE',
            lable4data: 'NA',
        }
    ]

    const vc2 = [
        {
            lable1: 'MCC1',
            lable1data: '01.01',
            lable2: 'DIP1',
            lable2data: '01.00',
            lable3: 'DIP2',
            lable3data: '01.00',
            lable4: 'DIP3',
            lable4data: '01.00',
        },
        {
            lable1: 'ACC',
            lable1data: '01.06',
            lable2: 'DOP1',
            lable2data: '01.00',
            lable3: 'DOP2',
            lable3data: '01.00',
            lable4: 'DOP3',
            lable4data: '01.00',
        },
        {
            lable1: 'TCN',
            lable1data: '01.06',
            lable2: 'DMC',
            lable2data: '01.00',
            lable3: 'IDL',
            lable3data: '01.00',
            lable4: 'MC',
            lable4data: '01.00',
        },
        {
            lable1: 'LRMS',
            lable1data: 'NA',
            lable2: 'TFT',
            lable2data: '01.00',
            lable3: 'TFTKEYPAD',
            lable3data: '01.00',
            lable4: 'SPARE',
            lable4data: 'NA',
        },
        {
            lable1: 'SPARE',
            lable1data: 'NA',
            lable2: 'SPARE',
            lable2data: 'NA',
            lable3: 'SPARE',
            lable3data: 'NA',
            lable4: 'SPARE',
            lable4data: 'NA',
        }
    ]

    const tclc = [
        {
            lable1: 'ACT1',
            lable1data: '01.01',
            lable2: 'ACT2',
            lable2data: '01.00',
            lable3: 'ACT3',
            lable3data: '01.00',
            lable4: 'ACT4',
            lable4data: '01.00',
        },
        {
            lable1: 'ACT5',
            lable1data: '01.06',
            lable2: 'ACT16',
            lable2data: '01.00',
            lable3: 'TMC1',
            lable3data: '01.00',
            lable4: 'TMC2',
            lable4data: '01.00',
        },
        {
            lable1: 'TMC3',
            lable1data: '01.06',
            lable2: 'TMC4',
            lable2data: '01.00',
            lable3: 'TMC5',
            lable3data: '01.00',
            lable4: 'TMC6',
            lable4data: '01.00',
        },
        {
            lable1: 'ALC11',
            lable1data: 'NA',
            lable2: 'ALC12',
            lable2data: '01.00',
            lable3: 'ALC21',
            lable3data: '01.00',
            lable4: 'ALC22',
            lable4data: 'NA',
        },
        {
            lable1: 'LC11',
            lable1data: 'NA',
            lable2: 'LC12',
            lable2data: 'NA',
            lable3: 'LC21',
            lable3data: 'NA',
            lable4: 'LC22',
            lable4data: 'NA',
        }
    ]

    const acversions = [
        {
            lable1: 'AC1CTRL',
            lable1data: '01.01',
            lable2: 'AC2CTRL',
            lable2data: '01.00',
            lable3: 'AC3CTRL',
            lable3data: '01.00',
            lable4: 'SPARE',
            lable4data: '01.00',
        },
        {
            lable1: 'AC1DSP',
            lable1data: '01.06',
            lable2: 'AC2DSP',
            lable2data: '01.00',
            lable3: 'AC3DSP',
            lable3data: '01.00',
            lable4: 'SPARE',
            lable4data: '01.00',
        },
    ]

    return (
        <div className={pixy_sv_container}>
            <div className={pixy_sv_header}>
                <UnicInfo1 value={'31427'} styles={{ height: '100%' }} />
                <UnicInfo1 value={'26/04/2000'} styles={{ height: '100%' }} />
                <UnicInfo1 value={'18:17:43'} styles={{ height: '100%' }} />
            </div>
            <div className={pixy_sv_content}>

                <div className={pixy_sv_content_tables}>
                    <div style={{ height: '28.56%', width: '100%' }}>
                        <SoftwareVersionsTable payload={{ header: 'VCU1 SOFTWARE VERSIONS', data: vc1 }} background={true} />
                    </div>
                    <div style={{ height: '28.56%', width: '100%' }}>
                        <SoftwareVersionsTable payload={{ header: 'VCU2 SOFTWARE VERSIONS', data: vc2 }} background={false} />

                    </div>
                    <div style={{ height: '28.56%', width: '100%' }}>
                        <SoftwareVersionsTable payload={{ header: 'TC AND LC SOFTWARE VERSIONS', data: tclc }} background={false} />

                    </div>
                    {/* '14.32%' */}
                    <div style={{ height: '28.56%', width: '100%' }}>
                        <SoftwareVersionsTable payload={{ header: 'AC SOFTWARE VERSIONS', data: acversions }} background={false} />
                    </div>
                </div>

            </div>
            <div className={pixy_sv_footer_instruction}>
                PRESS (C) TO GO TO PREVIOUS SCREEN
            </div>
            <div className={pixy_sv_footer}>
                {
                    [{ id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.id}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const SoftwareVersionsTable = ({ payload, background, rowStyle }) => {
    return (
        <div className={pixy_svt_container}>
            <div style={{ background: background ? 'rgba(10, 71, 163, 1)' : 'none' }} className={pixy_svt_header_row}>
                {payload.header}
            </div>
            {
                payload.data.map((x) => {
                    return (
                        <div className={pixy_svt_data_row}>

                            <div className={pixy_svt_data_cell}>{x.lable1}</div>
                            <div style={{ color: 'rgba(40, 167, 69, 1)' }} className={pixy_svt_data_cell}>{x.lable1data}</div>

                            <div className={pixy_svt_data_cell}>{x.lable2}</div>
                            <div style={{ color: 'rgba(40, 167, 69, 1)' }} className={pixy_svt_data_cell}>{x.lable2data}</div>

                            <div className={pixy_svt_data_cell}>{x.lable3}</div>
                            <div style={{ color: 'rgba(40, 167, 69, 1)' }} className={pixy_svt_data_cell}>{x.lable3data}</div>

                            <div className={pixy_svt_data_cell}>{x.lable4}</div>
                            <div style={{ color: 'rgba(40, 167, 69, 1)' }} className={pixy_svt_data_cell}>{x.lable4data}</div>

                        </div>
                    )
                })
            }
        </div>
    )
}

const InchingMode = ({ }) => {
    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    <div className={pixy_inchingmode_view}>
                        <div className={pixy_icm_header}>
                            INCHING MODE ENTRY CONDITIONS
                        </div>
                        <div style={{ height: '15%', background: 'none', fontSize: '2vh', fontWeight: '400', border: 'none' }} className={pixy_icm_header}>
                            INCHING MODE ENTRY CONDITIONS:
                        </div>
                        <div className={pixy_icm_conditions}>
                            <div>
                                LOCO SPEED ZERO
                            </div>
                            <div>
                                PAN RAISED, VCB CLOSED, ZTEL SW CLOSED, THROTTLE IDLE
                            </div>
                            <div>
                                REVERSER MOVED
                            </div>
                        </div>
                        <div className={pixy_icm_footer}>
                            PRESS(C) TO GO TO PREVIOUS SCREEN
                        </div>
                    </div>
                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [{ id: 1, lable: 'START TEST' }, { id: 2, lable: 'END TEST' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.lable}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const InchningModeError = () => {
    const { errors } = useInchingMode();

    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    <div className={pixy_inchingmode_error}>
                        {
                            errors.map((x) => {
                                return (
                                    <div>{x}</div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [{ id: 1, lable: 'END TEST' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id ? `${x.lable}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const InchingModeTest = () => {
        const {inchingTestPayload,setErrors,actualSpeed,setSpeed} = useInchingMode();
        
    return (
        <div className={pixy_home_container}>
            <div className={pixy_data_container}>
                <div className={pixy_data_conteiner_inner}>
                    <div className={pixy_imtest_container}>
                        <div className={pixy_imtest_header}>
                            INCHING MODE
                        </div>
                        <div className={pixy_imtest_actions}>
                            <div className={pixy_imtest_actions_row}>
                                <div style={{ paddingRight: '1%', justifyContent: 'right', width: '52%' }} className={pixy_imtest_actions_row_cell}>
                                    SET SPEED :
                                </div>
                                <div style={ { width: '48%', paddingLeft: '1%', background: 'rgba(10, 71, 163, 1)', border: '0.1vh solid rgba(30, 144, 255, 1)' }} className={pixy_imtest_actions_row_cell}>
                                    {setSpeed}
                                </div>
                            </div>
                            <div className={pixy_imtest_actions_row}>
                                <div style={{ paddingRight: '1%', justifyContent: 'right', width: '52%' }} className={pixy_imtest_actions_row_cell}>
                                    ACTUAL SPEED :
                                </div>
                                <div style={{ width: '48%', paddingLeft: '1%' }} className={pixy_imtest_actions_row_cell}>
                                    {actualSpeed}
                                </div>
                            </div>
                        </div>
                        <div className={pixy_imtest_actions_instruction}>
                            RANGE 0.5 KMPH TO 1.5 KMPH
                        </div>
                        <div style={{ height: '25%' }}>

                        </div>
                        <div className={pixy_imtest_actions_footer}>
                            {
                                `PRESS UP, DOWN, SOFT KEYS FOR SPEED ENTRY (<) TO DELETE, (E) TO UPDATE, (C) TO END TEST`
                            }
                        </div>
                    </div>

                </div>
            </div>
            <div className={pixy_footer_container}>
                {
                    [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 0 }].map((x) => {
                        return (
                            <div className={pixyunicmenu}>
                                {
                                    x.id === 0 ? `.${x.id}` : `${x.id}`
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}