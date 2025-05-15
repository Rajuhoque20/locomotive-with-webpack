import React, { useState } from 'react'
import classes from './slaveHomeScreen.module.css'
import { Icons } from '#framework';
const SlaveIngHomeScreen = ({ setcurrentDiv, setPage }) => {
    const { network_icon, enter_icon_a, clr_a_icon, ent_w_icon } = Icons.DDUIcons;
    const [currentButton, setCurrentButton] = useState('ENTER')
    const handleok = () => {
        setPage('')
    }
    const [buttonSection, setButtonSection] = useState('sectionA')
    const buttons = [
        {
            id: 1,
            lable: 'MODES'
        },
        {
            id: 2,
            lable: 'REBOOT'
        },
        {
            id: 3,
            lable: 'NEUTRAL SECTION'
        },
        {
            id: 4,
            lable: 'PANTO LOW'
        },
        {
            id: 5,
            lable: 'ENTER',
            icon: enter_icon_a
        }
    ]

    const headers = [
        {
            id: 1,
            lable: 'LOCONO'
        },
        {
            id: 2,
            lable: 'NODE'
        },
        {
            id: 3,
            lable: 'PANTO'
        },
        {
            id: 4,
            lable: 'VCB'
        },
        {
            id: 5,
            lable: 'TE/BE'
        },
        {
            id: 6,
            lable: 'SPEED'
        },
        {
            id: 7,
            lable: 'MR/FP'
        },
        {
            id: 8,
            lable: 'BP'
        },
        {
            id: 9,
            lable: 'BC1/BC2'
        },
        {
            id: 10,
            lable: 'PARKING B'
        },
        {
            id: 11,
            lable: 'AIRFLOW'
        }
    ]

    const masterSlavedata = [
        {
            id: 1,
            lable: 'MASTER',
            data: [
                {
                    id: 1,
                    lable: 'LOCONO',
                    value: '31282'
                },
                {
                    id: 2,
                    lable: 'NODE',
                    value: '596'
                },
                {
                    id: 3,
                    lable: 'PANTO',
                    value: 'UP'
                },
                {
                    id: 4,
                    lable: 'VCB',
                    value: 'ON'
                },
                {
                    id: 5,
                    lable: 'TE/BE',
                    value: '25'
                },
                {
                    id: 6,
                    lable: 'SPEED',
                    value: '5'
                },
                {
                    id: 7,
                    lable: 'MR/FP',
                    value: '8.2/6'
                },
                {
                    id: 8,
                    lable: 'BP',
                    value: '5.1',

                },
                {
                    id: 9,
                    lable: 'BC1/BC2',
                    value: '0.0/0.0'
                },
                {
                    id: 10,
                    lable: 'PARKING B',
                    value: '6.2'
                },
                {
                    id: 11,
                    lable: 'AIRFLOW',
                    value: '6.0'
                }
            ]
        },
        {
            id: 2,
            lable: 'SLAVE-1',
            data: [
                {
                    id: 1,
                    lable: 'LOCONO',
                    value: '31282'
                },
                {
                    id: 2,
                    lable: 'NODE',
                    value: '596'
                },
                {
                    id: 3,
                    lable: 'PANTO',
                    value: 'UP'
                },
                {
                    id: 4,
                    lable: 'VCB',
                    value: 'ON'
                },
                {
                    id: 5,
                    lable: 'TE/BE',
                    value: '25'
                },
                {
                    id: 6,
                    lable: 'SPEED',
                    value: '5'
                },
                {
                    id: 7,
                    lable: 'MR/FP',
                    value: '8.2/6'
                },
                {
                    id: 8,
                    lable: 'BP',
                    value: '5.1',

                },
                {
                    id: 9,
                    lable: 'BC1/BC2',
                    value: '0.0/0.0'
                },
                {
                    id: 10,
                    lable: 'PARKING B',
                    value: '6.2'
                },
                {
                    id: 11,
                    lable: 'AIRFLOW',
                    value: '6.0'
                }
            ]
        },
        {
            id: 3,
            lable: 'SLAVE-2',
            data: [
                {
                    id: 1,
                    lable: 'LOCONO',
                    value: '31282'
                },
                {
                    id: 2,
                    lable: 'NODE',
                    value: '596'
                },
                {
                    id: 3,
                    lable: 'PANTO',
                    value: 'UP'
                },
                {
                    id: 4,
                    lable: 'VCB',
                    value: 'ON'
                },
                {
                    id: 5,
                    lable: 'TE/BE',
                    value: '25'
                },
                {
                    id: 6,
                    lable: 'SPEED',
                    value: '5'
                },
                {
                    id: 7,
                    lable: 'MR/FP',
                    value: '8.2/6'
                },
                {
                    id: 8,
                    lable: 'BP',
                    value: '5.1',

                },
                {
                    id: 9,
                    lable: 'BC1/BC2',
                    value: '0.0/0.0'
                },
                {
                    id: 10,
                    lable: 'PARKING B',
                    value: '6.2'
                },
                {
                    id: 11,
                    lable: 'AIRFLOW',
                    value: '6.0'
                }
            ]
        },
        {
            id: 4,
            lable: 'SLAVE-3',
            data: [

            ]
        },
        {
            id: 5,
            lable: 'SLAVE-4',
            data: [

            ]
        }
    ]

    const sectionBButtonsA = [
        {
            id: 1,
            lable: 'SYNC'
        },
        {
            id: 2,
            lable: 'IND'
        },
        {
            id: 3,
            lable: 'BRAKE'
        },
        {
            id: 4,
            lable: 'IDLE'
        },
        {
            id: 5,
            lable: 'ISO'
        },
        {
            id: 6,
            lable: 'BK-OUT'
        }
    ]

    const sectionBButtonsB = [
        {
            id: 1,
            lable: 'ENTER',
            icon: ent_w_icon
        },
        {
            lable: 2,
            lable: 'HOME'
        }
    ]

    const sectionCButtonsA = [
        {
            id: 1,
            lable: 'SYSTEM',
            icon: ent_w_icon
        },
        {
            lable: 2,
            lable: 'LOCO'
        }
    ]

    const sectionCButtonsB = [
        {
            id: 1,
            lable: 'ESC'
        },
        {
            id: 2,
            lable: 'ENTER',
            icon: ent_w_icon
        },
        {
            lable: 3,
            lable: 'HOME'
        }
    ]

    const sectionDButtonsA = [
        {
            id: 1,
            lable: 'SLAVE-1'
        },
        {
            id: 2,
            lable: 'SLAVE-2'
        },
        {
            id: 3,
            lable: 'SLAVE-3'
        },
        {
            id: 4,
            lable: 'SLAVE-4'
        },
        {
            id: 5,
            lable: 'ALL'
        }
    ]

    const sectionDButtonsB = [
        {
            id: 1,
            lable: 'ESC'
        },
        {
            id: 2,
            lable: 'ENTER',
            icon: ent_w_icon
        },
        {
            lable: 3,
            lable: 'HOME'
        }
    ]

    const sectionEButtonsA = [
        {
            id: 1,
            lable: 'PANTO UP'
        },
        {
            id: 2,
            lable: 'PANTO DOWN'
        },
        {
            id: 3,
            lable: 'VBC ON'
        },
        {
            id: 4,
            lable: 'VBC OFF'
        }
    ]

    const sectionEButtonsB = [
        {
            id: 1,
            lable: 'ESC'
        },
        {
            id: 2,
            lable: 'ENTER',
            icon: ent_w_icon
        },
        {
            lable: 3,
            lable: 'HOME'
        }
    ]

    return (
        <div className={classes.sih_layout}>
            <div className={classes.ih_layout_sectionA}>


                <div className={classes.sA_partA}>


                    <div className={classes.sA_partA_columns}>
                        <div className={classes.sA_partA_columns_header}>
                            <div className={classes.syn}>
                                SYN
                            </div>
                        </div>

                        <div className={classes.sA_partA_columns_content}>

                            {
                                headers.map((x) => {
                                    return (
                                        <div className={classes.columns_contentkey}>
                                            {x.lable}
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>


                    {
                        masterSlavedata.map((x) => {
                            return (
                                <div className={classes.sA_partA_columns}>
                                    <div className={classes.sA_partA_columns_header}>
                                        <div className={classes.dataHeader}>
                                            {x.lable}
                                        </div>
                                    </div>

                                    <div className={classes.dataContent}>

                                        {
                                            x.data.map((x) => {
                                                return (
                                                    <div className={classes.columns_contentkey} style={{ 'justify-content': 'center' }}>
                                                        {x.value}
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


                <div className={classes.sA_partB}>



                    {
                        buttonSection === 'sectionA' ?
                            <div className={classes.sA_partBinnerdiv}>
                                <div className={classes.sA_partB_buttons}>
                                    {
                                        buttons.map((x) => {
                                            return (
                                                <div onClick={() => { 
                                                    setCurrentButton(x.lable);
                                                    x.lable==='MODES'&&setButtonSection('sectionB')
                                                    x.lable==='REBOOT'&&setButtonSection('sectionC')
                                                     }} style={currentButton === x.lable ? { background: 'rgba(229, 57, 53, 1)' } : {}} className={classes.sA_partB_button}>
                                                    {x.lable}
                                                    {x.icon ? <img src={x.icon} /> : null}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={classes.sA_partB_network}>
                                    <img src={network_icon} />
                                </div>
                            </div>
                            : null
                    }

                    {
                        buttonSection === 'sectionB' ?
                            <div className={classes.sA_partBinnerdiv}>
                                <div className={classes.sectionB_header}>MODES</div>

                                <div className={classes.sectionB_buttonsA}>
                                    {
                                        sectionBButtonsA.map((x) => {
                                            return (
                                                <div className={classes.typeAbutton}>
                                                    {x.lable}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={classes.sectionB_buttonsB}>
                                    {
                                        sectionBButtonsB.map((x) => {
                                            return (
                                                <div className={classes.typeBbutton}>
                                                    {x.lable}
                                                    {x.icon ? <img src={x.icon} /> : null}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            : null
                    }

                    {
                        buttonSection === 'sectionC' ?
                            <div className={classes.sA_partBinnerdiv}>
                                <div className={classes.sectionB_header} style={{ height: '15%' }}>REBOOT</div>

                                <div className={classes.sectionB_buttonsA} style={{ height: '31%' }}>
                                    {
                                        sectionCButtonsA.map((x) => {
                                            return (
                                                <div onClick={() => {setButtonSection('sectionD')}} className={classes.typeAbutton} style={{ height: '50%' }}>
                                                    {x.lable}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={classes.sectionB_buttonsB} style={{ height: '54%' }}>
                                    {
                                        sectionCButtonsB.map((x) => {
                                            return (
                                                <div className={classes.typeBbutton} style={{ height: '33.33%' }}>
                                                    {x.lable}
                                                    {x.icon ? <img src={x.icon} /> : null}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            : null
                    }

                    {
                        buttonSection === 'sectionD' ?
                            <div className={classes.sA_partBinnerdiv}>
                                <div className={classes.sectionB_header} style={{ height: '15%' }}>REBOOT</div>

                                <div className={classes.sectionB_buttonsA} style={{ height: '50%' }}>
                                    {
                                        sectionDButtonsA.map((x) => {
                                            return (
                                                <div onClick={() => {setButtonSection('sectionE')}} className={classes.typeAbutton} style={{ height: '20%' }}>
                                                    {x.lable}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={classes.sectionB_buttonsB} style={{ height: '35%' }}>
                                    {
                                        sectionDButtonsB.map((x) => {
                                            return (
                                                <div className={classes.typeBbutton} style={{ height: '33.33%' }}>
                                                    {x.lable}
                                                    {x.icon ? <img src={x.icon} /> : null}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            : null
                    }

                    {
                        buttonSection === 'sectionE' ?
                            <div className={classes.sA_partBinnerdiv}>
                                <div className={classes.sectionB_header} style={{ height: '15%' }}>IND-MODE</div>

                                <div className={classes.sectionB_buttonsA} style={{ height: '50%' }}>
                                    {
                                        sectionEButtonsA.map((x) => {
                                            return (
                                                <div className={classes.typeAbutton} style={{ height: '20%' }}>
                                                    {x.lable}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={classes.sectionB_buttonsB} style={{ height: '35%' }}>
                                    {
                                        sectionEButtonsB.map((x) => {
                                            return (
                                                <div className={classes.typeBbutton} style={{ height: '33.33%' }}>
                                                    {x.lable}
                                                    {x.icon ? <img src={x.icon} /> : null}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            : null
                    }


                </div>
            </div>
            <div className={classes.ih_layout_sectionB}>
                <div className={classes.sB_part} style={{ width: '80%', justifyContent: 'left', paddingLeft: '2vh' }}>
                    STATUS MESSAGE / FAULT MESSAGE OF SLAVES / SANDING VALUE STATUS
                </div>
                <div style={{ width: '1%' }}>

                </div>
                <div className={classes.sB_part} style={{ width: '19%' }}>
                    STATUS/FAULT
                </div>
                <div>

                </div>
            </div>
            <div className={classes.ih_layout_sectionC}>
                <CommissionDataContainer />
            </div>
        </div>
    )

}

const CommissionDataContainer = () => {
    const { opt_right_arrow, opt_top_button, opt_bottom_button, opt_home_button, opt_clr_button, opt_ent_button, clr_a_icon } = Icons.DDUIcons;
    const options = [
        {
            id: 1,
            lable: '1:VEHICLE DIAGNOSTICS',
            selected: true
        },
        {
            id: 1,
            lable: '2:INFORMATION TRAIN BUSCS',
            selected: false
        },
        {
            id: 1,
            lable: '3:PROCESS INFORMATION',
            selected: false
        }
    ]
    const optionHandleButtons = [
        {
            id: 1,
            lable: '',
            icon: null
        },
        {
            id: 2,
            lable: '',
            icon: opt_top_button
        },
        {
            id: 3,
            lable: '',
            icon: ''
        },
        {
            id: 4,
            lable: '',
            icon: opt_home_button
        },
        {
            id: 5,
            lable: '',
            icon: clr_a_icon
        },
        {
            id: 6,
            lable: '',
            icon: opt_ent_button
        },
        {
            id: 7,
            lable: '',
            icon: ''
        },
        {
            id: 8,
            lable: '',
            icon: opt_bottom_button
        },
        {
            id: 9,
            lable: '',
            icon: ''
        },
    ]
    return (
        <div className={classes.comm_container}>
            <div className={classes.cm_c_a}>
                <div className={classes.cm_c_a_row}>
                    <div className={classes.cm_c_a_row_img}>

                    </div>
                    <div className={classes.cm_c_a_row_content} style={{ fontWeight: 700 }}>
                        COMMISSIONING DATA:
                    </div>
                </div>
                {
                    options.map((x) => {
                        return (
                            <div className={classes.cm_c_a_row}>
                                <div className={classes.cm_c_a_row_img}>
                                    {x.selected ? <img src={opt_right_arrow} /> : null}
                                </div>
                                <div className={classes.cm_c_a_row_content}>
                                    {x.lable}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={classes.cm_c_b}>
                LOCO  31234
            </div>
            <div className={classes.cm_c_c}>
                <div className={classes.optionsbuttonscontainer}>
                    {
                        optionHandleButtons.map((x) => {
                            return (
                                <div className={classes.opt_button}>
                                    {x.icon ? <img src={x.icon} /> : null}
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}


export default SlaveIngHomeScreen;

