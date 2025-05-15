import React, { useEffect, useState } from 'react'
import classes from './../switchTabs.module.css'
import { auxConverterCTestmenu, blowerTestMenus, ContactrelayMenu, crLineConveretersMenu, dcAuxConmenu, dcLinktestMenus, dotTestTypes, generalTestTypes, lcDcTestMenu, meterTestTypes, selfTestMenus } from '../../../TabsData/tabs';
import { SelfTest } from '../../../MiddlewareFunctions/medha_default_stores';
const {
    mmv_container, mmv_container_inner, mmv_container_s1, mmv_container_inner_header, mmv_container_inner_content, mmv_container_inner_content_table,
    mmv_container_s2, mmv_container_s3, unicmenu, stc_container, stc_container_data_view, stc_container_footer_info, stc_container_footer_menu,
    stc_conditions_header, stc_conditions_container, stc_conditions_container_header, stc_inner_conditions, stc_completions_container, dot_channel_view,
    dot_channel_row, dot_channel_cell, autotestRow, gtmt_view, gtmt_outputview, gtmt_feedbackview, gtmt_header_view, gtmttest_container, gmt_test_rows,
    gmt_test_cell,

} = classes;

const SelfTestConditionView = ({ payload }) => {
    return (
        <div className={stc_container}>
            <div className={stc_container_data_view}>
                <div className={stc_conditions_header}>
                    {payload.header}
                </div>
                <div className={stc_conditions_container}>
                    <div className={stc_conditions_container_header}>
                        {payload.header2}
                    </div>
                    <div className={stc_inner_conditions}>
                        {
                            payload.conditions.map((x) => {
                                return (
                                    <div>
                                        {x}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={stc_container_footer_info}>
                PRESS (START TEST) TO START TEST MODE
            </div>
            <div className={stc_container_footer_menu}>
                {
                    [{ id: 1, lable: 'START TEST' }, { id: 2, lable: 'END TEST' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.lable}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const SelfTestCompletionandErrorView = ({ payload }) => {
    return (
        <div className={stc_container}>
            <div className={stc_container_data_view}>
                <div className={stc_conditions_header}>
                    {payload.header}
                </div>
                <div className={stc_conditions_container}>
                    <div className={stc_completions_container}>
                        {
                            payload.status.map((x) => {
                                return (
                                    <div>
                                        {x}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={stc_container_footer_info}>
                PRESS (END TEST) TO END TEST MODE
            </div>
            <div className={stc_container_footer_menu}>
                {
                    [{ id: 1, lable: 'END TEST' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.lable}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const MTEnterValue = ({ header, condition }) => {
    const { meterValue } = SelfTest();
    return (
        <div className={stc_container}>
            <div className={stc_container_data_view}>
                <div className={stc_conditions_header}>
                    {header}
                </div>
                <div className={stc_conditions_container}>
                    <div className={dot_channel_view}>
                        <div className={dot_channel_row}>
                            <div style={{ justifyContent: 'right', paddingRight: '4%' }} className={dot_channel_cell}>
                                PLEASE ENTER VALUE THE:
                            </div>
                            <div style={{ paddingLeft: '4%', border: '0.1vh solid rgba(30, 144, 255, 1)', background: 'rgba(10, 71, 163, 1)' }} className={dot_channel_cell}>
                                {meterValue}
                            </div>

                        </div>
                        <div className={dot_channel_row}>
                            <div style={{ justifyContent: 'right', paddingRight: '4%' }} className={dot_channel_cell}>
                            </div>
                            <div style={{ paddingLeft: '4%' }} className={dot_channel_cell}>
                                {condition}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className={stc_container_footer_info}>
                {`PRESS (<) TO DELETE, (E) TO UPDATE, (C) TO END TEST`}
            </div>
            <div className={stc_container_footer_menu}>
                {
                    [{ id: 1 }, { id: 2 }, { id: 3, }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 0 }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.id}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const MTProgressView = ({ header, progress, info, value = true }) => {
    const { meterValue } = SelfTest();
    return (
        <div className={stc_container}>
            <div className={stc_container_data_view}>
                <div className={stc_conditions_header}>
                    {header}
                </div>
                <div className={stc_conditions_container}>
                    <div style={{ padding: '2%' }} className={dot_channel_view}>
                        <div className={dot_channel_row}>
                            <div style={{ justifyContent: 'left', paddingLeft: '1%' }} className={dot_channel_cell}>
                                {progress}
                            </div>
                            <div className={dot_channel_cell}>
                            </div>

                        </div>
                        {
                            value &&
                            <div style={{ height: '30%' }} className={dot_channel_row}>
                                <div style={{ justifyContent: 'left', paddingLeft: '1%', color: 'rgba(40, 167, 69, 1)' }} className={dot_channel_cell}>
                                    {`ENTERED SPEED VALUE:${meterValue}`}
                                </div>
                                <div className={dot_channel_cell}>
                                </div>

                            </div>

                        }

                        <div className={dot_channel_row}>
                            <div style={{ justifyContent: 'left', paddingLeft: '1%' }} className={dot_channel_cell}>
                                {info}
                            </div>
                            <div className={dot_channel_cell}>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
            <div className={stc_container_footer_info}>
                {`PRESS(END TEST) TO END TEST`}
            </div>
            <div className={stc_container_footer_menu}>
                {
                    [{ id: '' }, { id: '' }, { id: '', }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: 0, lable: 'END TEST' }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.lable}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const DcLinkTestCompletion = ({ header, progress }) => {
    return (
        <div className={stc_container}>
            <div className={stc_container_data_view}>
                <div className={stc_conditions_header}>
                    {header}
                </div>
                <div className={stc_conditions_container}>
                    <div style={{ padding: '5%' }} className={dot_channel_view}>
                        <div className={dot_channel_row}>
                            <div style={{ justifyContent: 'center', paddingLeft: '1%', width: '100%' }} className={dot_channel_cell}>
                                {progress}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={stc_container_footer_info}>
                {`PRESS(END TEST) TO END TEST`}
            </div>
            <div className={stc_container_footer_menu}>
                {
                    [{ id: 1, lable: 'END TEST' }, { id: '' }, { id: '', }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: 0 }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.lable}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const GenralMenuView = ({ componentPath, header, upcommingRoutePath }) => {
    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            {header}
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    generalTestTypes.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...generalTestTypes, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const GenralAutoTestView = ({ header, progress }) => {
    const prgressArray = [
        {
            id: 1,
            progress: ''
        },
        {
            id: 2,
            progress: ''
        },
        {
            id: 3,
            progress: ''
        },
        {
            id: 4,
            progress: progress
        },
        {
            id: 5,
            progress: ''
        },
        {
            id: 6,
            progress: ''
        },
        {
            id: 7n,
            progress: ''
        }
    ]
    return (
        <div className={stc_container}>
            <div className={stc_container_data_view}>
                <div className={stc_conditions_header}>
                    {header}
                </div>
                <div className={stc_conditions_container}>
                    <div style={{ padding: '0' }} className={dot_channel_view}>
                        <div style={{ height: '100%', width: '100%' }}>
                            {
                                prgressArray.map((x) => {
                                    return (
                                        <div style={{ height: `${100 / prgressArray.length}%` }} className={autotestRow}>
                                            {x.progress}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={stc_container_footer_info}>
                {`PRESS(END TEST) TO END TEST`}
            </div>
            <div className={stc_container_footer_menu}>
                {
                    [{ id: 1, lable: 'END TEST' }, { id: '' }, { id: '', }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.lable}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const GenralManualTest = ({ header }) => {
    const { LcoutPutTest,feedBackStatusTest,testsection ,testcurrentId} = SelfTest();
    
    return (
        <div className={stc_container}>
            <div className={stc_container_data_view}>
                <div className={stc_conditions_header}>
                    {header}
                </div>
                <div className={stc_conditions_container}>
                    <div style={{ padding: '0' }} className={dot_channel_view}>
                        <div style={{ height: '100%', width: '100%'}}>
                            <div className={gtmt_view}>
                                <div className={gtmt_outputview}>
                                    <div className={gtmt_header_view}>OUT PUT</div>
                                    <div style={{ height: '83.34%' }} className={gtmttest_container}>
                                        {
                                            LcoutPutTest.map((x) => {
                                               
                                                return (
                                                    <div className={gmt_test_rows}>
                                                        <div style={{ width: '70%', borderRight: '0.1vh solid rgba(135, 206, 250, 1)' ,justifyContent:'left'}} className={gmt_test_cell}>
                                                            {x.test}
                                                        </div>
                                                        <div  style={{ width: '30%',background:x.id === testcurrentId && testsection === 'output'?'rgba(30, 144, 255, 1)':'none' }} className={gmt_test_cell}>
                                                            {x.status}
                                                        </div>
                                                    </div>

                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className={gtmt_feedbackview}>
                                    <div className={gtmt_header_view}>FEEDBACK STATUS</div>
                                    <div style={{ height: '83.33%', width: '100%', display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ height: '100%', width: '50%', borderRight: '0.1vh solid rgba(135, 206, 250, 1)' }} className={gtmttest_container}>
                                            {
                                                feedBackStatusTest.slice(0,5).map((x) => {
                                                    return (
                                                        <div className={gmt_test_rows}>
                                                            <div style={{ width: '70%', borderRight: '0.1vh solid rgba(135, 206, 250, 1)',justifyContent:'left' }} className={gmt_test_cell}>
                                                            {x.test}

                                                            </div>
                                                            <div style={{ width: '30%',background:x.id === testcurrentId && testsection === 'feedback'?'rgba(30, 144, 255, 1)':'none'  }} className={gmt_test_cell}>
                                                            {x.status}

                                                            </div>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </div>

                                        <div style={{ height: '100%', width: '50%', borderRight: '0.1vh solid rgba(135, 206, 250, 1)' }} className={gtmttest_container}>
                                            {
                                                [...feedBackStatusTest,    {
                                                    id:10,
                                                    test:'',
                                                    status:''
                                                  },
                                                  {
                                                    id:9,
                                                    test:'',
                                                    status:''
                                                  },
                                                  {
                                                    id:10,
                                                    test:'',
                                                    status:''
                                                  }].slice(5,10).map((x) => {
                                                    return (
                                                        <div className={gmt_test_rows}>
                                                            <div style={{ width: '70%', borderRight: '0.1vh solid rgba(135, 206, 250, 1)',justifyContent:'left' }} className={gmt_test_cell}>
                                                            {x.test}

                                                            </div>
                                                            <div style={{ width: '30%' ,background:x.id === testcurrentId && testsection === 'feedback'?'rgba(30, 144, 255, 1)':'none' }} className={gmt_test_cell}>
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
                            <div style={{ height: '14.28%', width: '100%', textAlign: 'left', paddingLeft: '1%' }}>
                                --
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={stc_container_footer_info}>
                {`PRESS(END TEST) TO END TEST`}
            </div>
            <div className={stc_container_footer_menu}>
                {
                    [{ id: 1, lable: 'ON' }, { id: 2, lable: 'OFF' }, { id: '', }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: 0, lable: 'END TEST' }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.lable}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


const AcManualTest = ({ header }) => {
    const { AcoutPutTest,AcfeedBackStatusTest,testsection ,testcurrentId} = SelfTest();
    
    return (
        <div className={stc_container}>
            <div className={stc_container_data_view}>
                <div className={stc_conditions_header}>
                    {header}
                </div>
                <div className={stc_conditions_container}>
                    <div style={{ padding: '0' }} className={dot_channel_view}>
                        <div style={{ height: '100%', width: '100%'}}>
                            <div className={gtmt_view}>
                                <div className={gtmt_outputview}>
                                    <div className={gtmt_header_view}>OUT PUT</div>
                                    <div style={{ height: '83.34%' }} className={gtmttest_container}>
                                        {
                                            [...AcoutPutTest,
                                                   {
                                                    id:3,
                                                    test:'',
                                                    status:''
                                                  },
                                                  {
                                                    id:4,
                                                    test:'',
                                                    status:''
                                                  },
                                                  {
                                                    id:5,
                                                    test:'',
                                                    status:''
                                                  }
                                            ].map((x) => {
                                               
                                                return (
                                                    <div  className={gmt_test_rows}>
                                                        <div style={{ width: '70%', borderRight: '0.1vh solid rgba(135, 206, 250, 1)' ,justifyContent:'left'}} className={gmt_test_cell}>
                                                            {x.test}
                                                        </div>
                                                        <div  style={{ width: '30%',background:x.id === testcurrentId && testsection === 'output'?'rgba(30, 144, 255, 1)':'none' }} className={gmt_test_cell}>
                                                            {x.status}
                                                        </div>
                                                    </div>

                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className={gtmt_feedbackview}>
                                    <div className={gtmt_header_view}>FEEDBACK STATUS</div>
                                    <div style={{ height: '83.33%', width: '100%', display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ height: '100%', width: '100%', borderRight: '0.1vh solid rgba(135, 206, 250, 1)' }} className={gtmttest_container}>
                                            {
                                                [...AcfeedBackStatusTest,
                                                    {
                                                        id:3,
                                                        test:'',
                                                        status:''
                                                      },
                                                      {
                                                        id:4,
                                                        test:'',
                                                        status:''
                                                      },
                                                      {
                                                        id:5,
                                                        test:'',
                                                        status:''
                                                      }
                                                ].slice(0,5).map((x) => {
                                                    return (
                                                        <div className={gmt_test_rows}>
                                                            <div style={{ width: '70%', borderRight: '0.1vh solid rgba(135, 206, 250, 1)',justifyContent:'left' }} className={gmt_test_cell}>
                                                            {x.test}

                                                            </div>
                                                            <div style={{ width: '30%',background:x.id === testcurrentId && testsection === 'feedback'?'rgba(30, 144, 255, 1)':'none'  }} className={gmt_test_cell}>
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
                            <div style={{ height: '14.28%', width: '100%', textAlign: 'left', paddingLeft: '1%' }}>
                                --
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={stc_container_footer_info}>
                {`PRESS(END TEST) TO END TEST`}
            </div>
            <div className={stc_container_footer_menu}>
                {
                    [{ id: 1, lable: 'ON' }, { id: 2, lable: 'OFF' }, { id: '', }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: 0, lable: 'END TEST' }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.lable}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export const SelfTestMenu = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/SELF TEST/'
    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            SELF TESTS MENU
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    selfTestMenus.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...selfTestMenus, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export const DitConditions = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM DIGITAL INPUTS TEST',
        header2: 'DIGITAL INPUTS CHANNEL TEST ENTRY :',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}

export const DitCompletionView = () => {
    const payload = {
        status: [
            'ALL DIGITAL INPUT CHANNELS ARE HELATHY'
        ],
        header: 'DIGITAL INPUT TEST'
    }
    return (
        <SelfTestCompletionandErrorView payload={payload} />
    )
}

export const DitERRORView = () => {
    const { selfTestErrors } = SelfTest();
    const payload = {
        status: selfTestErrors,
        header: 'IMPROPER TEST CONDITIONS'
    }
    return (
        <SelfTestCompletionandErrorView payload={payload} />
    )
}

export const DotConditionsView = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM DIGITAL OUTPUTS TEST',
        header2: 'DIGITAL OUTPUTS TEST ENTRY:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'REVERSER SHOULD BE CENTERED'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}

export const DotERRORView = () => {
    const { selfTestErrors } = SelfTest();
    const payload = {
        status: selfTestErrors,
        header: 'IMPROPER TEST CONDITIONS'
    }
    return (
        <SelfTestCompletionandErrorView payload={payload} />
    )
}

export const DotTestTypesMenu = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/TEST TYPES/'
    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            DIGITAL OUTPUT TEST TYPES
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    dotTestTypes.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...dotTestTypes, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export const DotChannelView = () => {
    const { dotChannels, selectedChannel } = SelfTest();
    const [currentChannel, setCurrentChanel] = useState(dotChannels[0])
    useEffect(() => {
        const currentChannel = dotChannels.find((x) => x.id === selectedChannel)
        setCurrentChanel(currentChannel)
    }, [dotChannels, selectedChannel])
    return (
        <div className={stc_container}>
            <div className={stc_container_data_view}>
                <div className={stc_conditions_header}>
                    MANUAL DIGITAL OUTPUTS TEST RESULT
                </div>
                <div className={stc_conditions_container}>
                    <div className={dot_channel_view}>
                        <div className={dot_channel_row}>
                            <div style={{ justifyContent: 'right', paddingRight: '4%' }} className={dot_channel_cell}>
                                CHANNEL NO:
                            </div>
                            <div style={{ color: 'rgba(40, 167, 69, 1)' }} className={dot_channel_cell}>
                                {currentChannel?.id}
                            </div>

                        </div>
                        <div className={dot_channel_row}>
                            <div style={{ justifyContent: 'right', paddingRight: '4%' }} className={dot_channel_cell}>
                                CHANNEL NAME:
                            </div>
                            <div style={{ color: 'rgba(40, 167, 69, 1)' }} className={dot_channel_cell}>
                                {currentChannel?.name}
                            </div>
                        </div>
                        <div className={dot_channel_row}>
                            <div style={{ justifyContent: 'right', paddingRight: '4%' }} className={dot_channel_cell}>
                                CHANNEL STATUS:
                            </div>
                            <div style={{ color: 'rgba(40, 167, 69, 1)' }} className={dot_channel_cell}>
                                {currentChannel?.status ? currentChannel.status : 'FEEDBACK IS NOT AVAILABLE'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={stc_container_footer_info}>
                PRESS (END TEST) TO END TEST MODE
            </div>
            <div className={stc_container_footer_menu}>
                {
                    [{ id: 1, lable: 'ON' }, { id: 2, lable: 'OFF' }, { id: 3, lable: 'RANDOM' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: 0, lable: 'END TEST' }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.lable}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export const RandomChannelSelection = () => {
    const { selectedChannel } = SelfTest();
    return (
        <div className={stc_container}>
            <div className={stc_container_data_view}>
                <div className={stc_conditions_header}>
                    MANUAL DIGITAL OUTPUTS TEST RESULT
                </div>
                <div className={stc_conditions_container}>
                    <div className={dot_channel_view}>
                        <div className={dot_channel_row}>
                            <div style={{ justifyContent: 'right', paddingRight: '4%' }} className={dot_channel_cell}>
                                PLEASE ENTER VALUE THE:
                            </div>
                            <div style={{ paddingLeft: '4%', border: '0.1vh solid rgba(30, 144, 255, 1)', background: 'rgba(10, 71, 163, 1)' }} className={dot_channel_cell}>
                                {selectedChannel}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className={stc_container_footer_info}>
                {`PRESS (<) TO DELETE, (E) TO UPDATE, (C) TO END TEST`}
            </div>
            <div className={stc_container_footer_menu}>
                {
                    [{ id: 1 }, { id: 2 }, { id: 3, }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 0 }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.id}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export const SfDmConditionsView = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM METERS TEST',
        header2: 'METERS TEST ENTRY:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'REVERSER SHOULD BE CENTERED'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}

export const SfDmErrorView = () => {
    const { selfTestErrors } = SelfTest();
    const payload = {
        status: selfTestErrors,
        header: 'IMPROPER TEST CONDITIONS'
    }
    return (
        <SelfTestCompletionandErrorView payload={payload} />
    )
}

export const MetersTestTypesMenu = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/'
    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            TYPES OF METERS TEST
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    meterTestTypes.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...meterTestTypes, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export const SpeedMeterTest = () => {
    return (
        <MTEnterValue header={'SPEED METER TEST'} condition={'ENTER THE VALUE <= 180'} />
    )
}

export const SpeedMeterProgress = () => {
    return (
        <MTProgressView header={'SPEED METER TEST'} progress={'SPEED METER TEST IS SUCCESS'} info={'VISUALLY CHECK THE SPEED METER FOR VERIFICATION'} />
    )
}

// 

export const B1TETest = () => {
    return (
        <MTEnterValue header={'BOGIE1 TE METER TEST'} condition={'ENTER THE VALUE <= 100%'} />
    )
}

export const B1TEMeterProgress = () => {
    return (
        <MTProgressView header={'BOGIE1 TE METER TEST'} progress={'BOGIE! TE METER TEST IS SUCCESS'} info={'VISUALLY CHECK THE BOGIE1 TE METER FOR VERIFICATION'} />
    )
}

// 

export const B1BETest = () => {
    return (
        <MTEnterValue header={'BOGIE1 BE METER TEST'} condition={'ENTER THE VALUE <= 100%'} />
    )
}

export const B1BEMeterProgress = () => {
    return (
        <MTProgressView header={'BOGIE1 BE METER TEST'} progress={'BOGIE1 BE METER TEST IS SUCCESS'} info={'VISUALLY CHECK THE BOGIE1 BE METER FOR VERIFICATION'} />
    )
}

// 
export const B2TETest = () => {
    return (
        <MTEnterValue header={'BOGIE2 TE METER TEST'} condition={'ENTER THE VALUE <= 100%'} />
    )
}

export const B2TEMeterProgress = () => {
    return (
        <MTProgressView header={' BOGIE2 TE METER TEST'} progress={'BOGIE2 TE METER TEST IS SUCCESS'} info={'VISUALLY CHECK THE BOGIE2 TE METER FOR VERIFICATION'} />
    )
}
// 

export const B2BETest = () => {
    return (
        <MTEnterValue header={'BOGIE2 BE METER TEST'} condition={'ENTER THE VALUE <= 100%'} />
    )
}

export const B2BEMeterProgress = () => {
    return (
        <MTProgressView header={'BOGIE2 BE METER TEST'} progress={'BOGIE2 BE METER TEST IS SUCCESS'} info={'VISUALLY CHECK THE BOGIE2 BE METER FOR VERIFICATION'} />
    )
}


export const LampTest = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM LAMPS TEST',
        header2: 'LAMPS TEST ENTRY :',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'REVERSER SHOULD BE CENTERD'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}

export const LampTestView = () => {
    return (
        <MTProgressView header={'LAMPS TEST'} progress={'LAMPS TEST IS SUCCESS'} info={'VISUALLY CHECK THE LAMPS FOR VERIFICATION'} value={false} />
    )
}

export const DClinkMenu = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/'
    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            TYPES OF DC LINK CHARGING TEST
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    dcLinktestMenus.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...dcLinktestMenus, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export const LCDCTEST = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/'
    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            LINE CONVERTER DC LINK TEST
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    lcDcTestMenu.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...lcDcTestMenu, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}



export const B1LC1DCLINKTEST = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM BOGIE1-LC1 SC LINK TEST',
        header2: 'LC DC LINK TEST ENTRY:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'REVERSER SHOULD BE CENTERED, THROTTLE IDLE,VCB OPEN'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}

export const B1LC1DCLINKTESTVIEW = () => {

    return (
        <DcLinkTestCompletion header={'BOGIE1-LC1 DC LINK TEST RESULTS'} progress={'BOGIE1 LC1 DC DISCHARGE TEST SUCCESS'} />
    )
}

export const B1LC1DCLINKTESTERROR = () => {
    const { selfTestErrors } = SelfTest();
    const payload = {
        status: selfTestErrors,
        header: 'IMPROPER TEST CONDITIONS'
    }
    return (
        <SelfTestCompletionandErrorView payload={payload} />
    )
}


export const B1LC2DCLINKTEST = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM BOGIE1-LC2 SC LINK TEST',
        header2: 'LC DC LINK TEST ENTRY:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'REVERSER SHOULD BE CENTERED, THROTTLE IDLE,VCB OPEN'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}

export const B1LC2DCLINKTESTVIEW = () => {

    return (
        <DcLinkTestCompletion header={'BOGIE1-LC2 DC LINK TEST RESULTS'} progress={'BOGIE1 LC2 DC DISCHARGE TEST SUCCESS'} />
    )
}

export const B1LC2DCLINKTESTERROR = () => {
    const { selfTestErrors } = SelfTest();
    const payload = {
        status: selfTestErrors,
        header: 'IMPROPER TEST CONDITIONS'
    }
    return (
        <SelfTestCompletionandErrorView payload={payload} />
    )
}


export const B2LC1DCLINKTEST = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM BOGIE2-LC1 SC LINK TEST',
        header2: 'LC DC LINK TEST ENTRY:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'REVERSER SHOULD BE CENTERED, THROTTLE IDLE,VCB OPEN'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}

export const B2LC1DCLINKTESTVIEW = () => {

    return (
        <DcLinkTestCompletion header={'BOGIE2-LC1 DC LINK TEST RESULTS'} progress={'BOGIE2 LC1 DC DISCHARGE TEST SUCCESS'} />
    )
}

export const B2LC1DCLINKTESTERROR = () => {
    const { selfTestErrors } = SelfTest();
    const payload = {
        status: selfTestErrors,
        header: 'IMPROPER TEST CONDITIONS'
    }
    return (
        <SelfTestCompletionandErrorView payload={payload} />
    )
}

export const B2LC2DCLINKTEST = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM BOGIE2-LC2 SC LINK TEST',
        header2: 'LC DC LINK TEST ENTRY:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'REVERSER SHOULD BE CENTERED, THROTTLE IDLE,VCB OPEN'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}

export const B2LC2DCLINKTESTVIEW = () => {

    return (
        <DcLinkTestCompletion header={'BOGIE2-LC2 DC LINK TEST RESULTS'} progress={'BOGIE2 LC2 DC DISCHARGE TEST SUCCESS'} />
    )
}

export const B2LC2DCLINKTESTERROR = () => {
    const { selfTestErrors } = SelfTest();
    const payload = {
        status: selfTestErrors,
        header: 'IMPROPER TEST CONDITIONS'
    }
    return (
        <SelfTestCompletionandErrorView payload={payload} />
    )
}

export const DClinkAuxConverterMenu = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/'
    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            TYPES OF DC LINK CHARGING TEST
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    dcAuxConmenu.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...dcAuxConmenu, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' },].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export const AC1DCLINKTEST = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM AUX. CONVERTER 1 DC LINK TEST',
        header2: 'AC DC LINK TEST ENTRY:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'REVERSER SHOULD BE CENTERED, THROTTLE IDLE'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}

export const AC1DCLINKTESTVIEW = () => {

    return (
        <DcLinkTestCompletion header={'AUX. CONVERTER 1 DC LINK TEST'} progress={'AUXILIARY CONVERTER DC LINK TEST IS SUCCESS'} />
    )
}

export const AC1DCLINKTESTERROR = () => {
    const { selfTestErrors } = SelfTest();
    const payload = {
        status: selfTestErrors,
        header: 'IMPROPER TEST CONDITIONS'
    }
    return (
        <SelfTestCompletionandErrorView payload={payload} />
    )
}



export const AC2DCLINKTEST = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM AUX. CONVERTER 2 DC LINK TEST',
        header2: 'AC DC LINK TEST ENTRY:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'REVERSER SHOULD BE CENTERED, THROTTLE IDLE'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}

export const AC2DCLINKTESTVIEW = () => {

    return (
        <DcLinkTestCompletion header={'AUX. CONVERTER 2 DC LINK TEST'} progress={'AUXILIARY CONVERTER DC LINK TEST IS SUCCESS'} />
    )
}

export const AC2DCLINKTESTERROR = () => {
    const { selfTestErrors } = SelfTest();
    const payload = {
        status: selfTestErrors,
        header: 'IMPROPER TEST CONDITIONS'
    }
    return (
        <SelfTestCompletionandErrorView payload={payload} />
    )
}


export const AC3DCLINKTEST = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM AUX. CONVERTER 2 DC LINK TEST',
        header2: 'AC DC LINK TEST ENTRY:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'REVERSER SHOULD BE CENTERED, THROTTLE IDLE'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}

export const AC3DCLINKTESTVIEW = () => {

    return (
        <DcLinkTestCompletion header={'AUX. CONVERTER 2 DC LINK TEST'} progress={'AUXILIARY CONVERTER DC LINK TEST IS SUCCESS'} />
    )
}

export const AC3DCLINKTESTERROR = () => {
    const { selfTestErrors } = SelfTest();
    const payload = {
        status: selfTestErrors,
        header: 'IMPROPER TEST CONDITIONS'
    }
    return (
        <SelfTestCompletionandErrorView payload={payload} />
    )
}

export const BloweTestMenus = ({ upcommingRoutePath }) => {

    const componentPath = 'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/'
    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            TYPES OF BLOWERS TEST
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    blowerTestMenus.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...blowerTestMenus, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export const OilCollerTestConditions = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM OIL COOLER BLOWER TEST',
        header2: 'OLI COOLER BLOWER TEST ENTRY:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'PAN RAISED, VCB CLOSED REVERSER SHOULD BE CENTERED, THROTTLE IDLE'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}

export const OilCollerTestView = () => {

    return (
        <DcLinkTestCompletion header={'OLI COOLER BLOWER TEST'} progress={'OLI COOLER BLOWER TEST IS SUCCESS'} />
    )
}

export const OilCollerError = () => {
    const { selfTestErrors } = SelfTest();
    const payload = {
        status: selfTestErrors,
        header: 'IMPROPER TEST CONDITIONS'
    }
    return (
        <SelfTestCompletionandErrorView payload={payload} />
    )
}



export const SFTMTestConditions = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM TRACTION MOTOR BLOWER TEST',
        header2: 'TRACTION MOTOR BLOWER TEST ENTRY:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'PAN RAISED, VCB CLOSED REVERSER SHOULD BE CENTERED, THROTTLE IDLE'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}

export const SFTMTestView = () => {

    return (
        <DcLinkTestCompletion header={'TRACTION MOTOR BLOWER TEST'} progress={'TRACTION MOTOR BLOWER TEST IS SUCCESS'} />
    )
}

export const SFTMError = () => {
    const { selfTestErrors } = SelfTest();
    const payload = {
        status: selfTestErrors,
        header: 'IMPROPER TEST CONDITIONS'
    }
    return (
        <SelfTestCompletionandErrorView payload={payload} />
    )
}



export const SFTOTestConditions = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM TRANSFORMER OIL PUMP TEST',
        header2: 'TRANSFORMER OIL PUMP TEST ENTRY:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'PAN RAISED, VCB CLOSED REVERSER SHOULD BE CENTERED, THROTTLE IDLE'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}

export const SFTOTestView = () => {

    return (
        <DcLinkTestCompletion header={'TRANSFORMER OIL PUMP TEST'} progress={'TRANSFORMER OIL PUMP TEST IS SUCCESS'} />
    )
}

export const SFTOError = () => {
    const { selfTestErrors } = SelfTest();
    const payload = {
        status: selfTestErrors,
        header: 'IMPROPER TEST CONDITIONS'
    }
    return (
        <SelfTestCompletionandErrorView payload={payload} />
    )
}



export const SFCOTestConditions = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM CONVERTER OIL PUMP TEST',
        header2: 'CONVERTER OIL PUMP TEST ENTRY:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'PAN RAISED, VCB CLOSED REVERSER SHOULD BE CENTERED, THROTTLE IDLE'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}

export const SFCOTestView = () => {

    return (
        <DcLinkTestCompletion header={'CONVERTER OIL PUMP TEST'} progress={'CONVERTER OIL PUMP TEST IS SUCCESS'} />
    )
}

export const SFCOError = () => {
    const { selfTestErrors } = SelfTest();
    const payload = {
        status: selfTestErrors,
        header: 'IMPROPER TEST CONDITIONS'
    }
    return (
        <SelfTestCompletionandErrorView payload={payload} />
    )
}


export const SFSBTestConditions = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM SCAVENGE BLOWER TEST',
        header2: 'SCAVENGE BLOWER TEST ENTRY:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'PAN RAISED, VCB CLOSED REVERSER SHOULD BE CENTERED, THROTTLE IDLE'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}

export const SFSBTestView = () => {

    return (
        <DcLinkTestCompletion header={'SCAVENGE BLOWER TEST'} progress={'SCAVENGE BLOWER TEST IS SUCCESS'} />
    )
}

export const SFSBError = () => {
    const { selfTestErrors } = SelfTest();
    const payload = {
        status: selfTestErrors,
        header: 'IMPROPER TEST CONDITIONS'
    }
    return (
        <SelfTestCompletionandErrorView payload={payload} />
    )
}

export const ContactorsandRelaysTestMenu = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/'
    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            CONTACTORS AND RELAYS TEST
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    ContactrelayMenu.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...ContactrelayMenu, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export const SFVCUTestConditions = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM CONTACTORS AND RELAYS TEST',
        header2: 'CONTACTORS AND RELAYS TEST ENTRY:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'REVERSER SHOULD BE CENTERED, THROTTLE IDLE'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}

export const SFVCUTestView = () => {

    return (
        <DcLinkTestCompletion header={'CONTACTORS AND RELAYS TEST RESULTS'} progress={'CONTACTORS AND RELAYS TEST SUCCESS'} />
    )
}

export const SFVCUError = () => {
    const { selfTestErrors } = SelfTest();
    const payload = {
        status: selfTestErrors,
        header: 'IMPROPER TEST CONDITIONS'
    }
    return (
        <SelfTestCompletionandErrorView payload={payload} />
    )
}


export const LCContactorsTestMenu = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/'
    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            LC CONTACTORS TEST
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    crLineConveretersMenu.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...crLineConveretersMenu, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export const LCB1LC1CT_MENU = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC1CONTACTORS TEST/'
    return (
        <GenralMenuView header={'BOGIE1 LC1 TEST MENU'} componentPath={componentPath} upcommingRoutePath={upcommingRoutePath} />
    )
}
export const LCB1LC2CT_MENU = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC2CONTACTORS TEST/'
    return (
        <GenralMenuView header={'BOGIE1 LC2 TEST MENU'} componentPath={componentPath} upcommingRoutePath={upcommingRoutePath} />
    )
}
export const LCB2LC1CT_MENU = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC1CONTACTORS TEST/'
    return (
        <GenralMenuView header={'BOGIE2 LC1 TEST MENU'} componentPath={componentPath} upcommingRoutePath={upcommingRoutePath} />
    )
}
export const LCB2LC2CT_MENU = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC2CONTACTORS TEST/'
    return (
        <GenralMenuView header={'BOGIE2 LC2 TEST MENU'} componentPath={componentPath} upcommingRoutePath={upcommingRoutePath} />
    )
}

export const LCB1LC1CT_ManualTest = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM LC CONTACTORS TEST',
        header2: 'LC CONTACTORS TEST:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'REVERSER SHOULD BE CENTERED, THROTTLE IDLE,VCB OPEN'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}
export const LCB1LC2CT_ManualTest = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM LC CONTACTORS TEST',
        header2: 'LC CONTACTORS TEST:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'REVERSER SHOULD BE CENTERED, THROTTLE IDLE,VCB OPEN'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}
export const LCB2LC1CT_ManualTest = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM LC CONTACTORS TEST',
        header2: 'LC CONTACTORS TEST:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'REVERSER SHOULD BE CENTERED, THROTTLE IDLE,VCB OPEN'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}
export const LCB2LC2CT_ManualTest = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM LC CONTACTORS TEST',
        header2: 'LC CONTACTORS TEST:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'REVERSER SHOULD BE CENTERED, THROTTLE IDLE,VCB OPEN'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}

export const GneralLCACCTERRORVIEW = () => {
    const { selfTestErrors } = SelfTest();
    const payload = {
        status: selfTestErrors,
        header: 'IMPROPER TEST CONDITIONS'
    }
    return (
        <SelfTestCompletionandErrorView payload={payload} />
    )
}

export const LCB1LC1CT_AutoTest = () => {
    return (
        <GenralAutoTestView header={'BOGIE1 LC1 CONTACTORS TEST'} progress={'BOGIE1 LC1 CONTACTORS TEST SUCCESS'} />
    )
}
export const LCB1LC2CT_AutoTest = () => {
    return (
        <GenralAutoTestView header={'BOGIE1 LC2 CONTACTORS TEST'} progress={'BOGIE1 LC2 CONTACTORS TEST SUCCESS'} />
    )
}
export const LCB2LC1CT_AutoTest = () => {
    return (
        <GenralAutoTestView header={'BOGIE2 LC1 CONTACTORS TEST'} progress={'BOGIE2 LC1 CONTACTORS TEST SUCCESS'} />
    )
}
export const LCB2LC2CT_AutoTest = () => {
    return (
        <GenralAutoTestView header={'BOGIE2 LC2 CONTACTORS TEST'} progress={'BOGIE2 LC2 CONTACTORS TEST SUCCESS'} />
    )
}


export const LCB1LC1CT_ManualTest_Progress = () => {
    return (
        <GenralManualTest header={'BOGIE1 LC1 CONTACTORS TEST'} />
    )
}
export const LCB1LC2CT_ManualTest_Progress = () => {
    return (
        <GenralManualTest header={'BOGIE1 LC2 CONTACTORS TEST'} />
    )
}
export const LCB2LC1CT_ManualTest_Progress = () => {
    return (
        <GenralManualTest header={'BOGIE2 LC1 CONTACTORS TEST'} />
    )
}
export const LCB2LC2CT_ManualTest_Progress = () => {
    return (
        <GenralManualTest header={'BOGIE2 LC2 CONTACTORS TEST'} />
    )
}

export const  SfAcTestmenus = ({upcommingRoutePath}) => {
    
    const componentPath = 'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/'
    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            AC CONTACTORS TEST
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    auxConverterCTestmenu.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...auxConverterCTestmenu, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export const SFAC1_MENU = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC1 CONTACTORS TEST/'
    return (
        <GenralMenuView header={'AC1 CONTACTORS TEST'} componentPath={componentPath} upcommingRoutePath={upcommingRoutePath} />
    )
}
export const SFAC2_MENU = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC2 CONTACTORS TEST/'
    return (
        <GenralMenuView header={'AC2 CONTACTORS TEST'} componentPath={componentPath} upcommingRoutePath={upcommingRoutePath} />
    )
}
export const SFAC3_MENU = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC3 CONTACTORS TEST/'
    return (
        <GenralMenuView header={'AC3 CONTACTORS TEST'} componentPath={componentPath} upcommingRoutePath={upcommingRoutePath} />
    )
}

export const SFAC1_ManualTest = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM AC CONTACTORS TEST',
        header2: 'AC CONTACTORS TEST:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'REVERSER SHOULD BE CENTERED, THROTTLE IDLE,VCB OPEN'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}
export const SFAC2_ManualTest = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM AC CONTACTORS TEST',
        header2: 'AC CONTACTORS TEST:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'REVERSER SHOULD BE CENTERED, THROTTLE IDLE,VCB OPEN'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}
export const SFAC3_ManualTest = () => {
    const payload = {
        header: 'ENTRY CONDITIONS TO PERFORM AC CONTACTORS TEST',
        header2: 'AC CONTACTORS TEST:',
        conditions: [
            'LOCO SPEED SHOULD BE ZERO',
            'REVERSER SHOULD BE CENTERED, THROTTLE IDLE,VCB OPEN'
        ]
    }
    return (
        <SelfTestConditionView payload={payload} />
    )
}


export const SFAC1_AutoTest = () => {
    return (
        <GenralAutoTestView header={'AC1 CONTACTORS TEST'} progress={'AC1 CONTACTORS TEST TEST SUCCESS'} />
    )
}
export const SFAC2_AutoTest = () => {
    return (
        <GenralAutoTestView header={'AC2 CONTACTORS TEST'} progress={'AC2 CONTACTORS TEST SUCCESS'} />
    )
}
export const SFAC3_AutoTest = () => {
    return (
        <GenralAutoTestView header={'AC3 CONTACTORS TEST'} progress={'AC3 CONTACTORS TEST SUCCESS'} />
    )
}

export const SFAC1_ManualTest_Progress = () => {
   return(
    <AcManualTest header={'AC1 CONTACTORS TEST'}/>
   )
}
export const SFAC2_ManualTest_Progress = () => {
    return(
     <AcManualTest header={'AC2 CONTACTORS TEST'}/>
    )
 }
 export const SFAC3_ManualTest_Progress = () => {
    return(
     <AcManualTest header={'AC3 CONTACTORS TEST'}/>
    )
 }

















