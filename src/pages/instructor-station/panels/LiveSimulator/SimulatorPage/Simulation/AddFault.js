import React, { useEffect, useState } from 'react'
import './AddFault.css'
import { Dropdown, Button } from "antd";
import ButtonComp from '../../../../../../components/Instructor-station/UIComp/ButtonComp';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icons } from '#framework';
import websocket from '../../../../../../services/Websocket';
const AddFault = () => {
    const { state } = useLocation();
    const navigate = useNavigate();


    const [faults, setFaults] = useState([])
    const [faultSubSystemData, setfaultSubSystemData] = useState([])
    const [triggerFault, setTriggerFault] = useState()
    const [currentDiv, setCurrentDiv] = useState('buttons')
    const [currentButtonData, setButtonData] = useState()
    const [currentSS,setCurrentSS] = useState()
    const [trigger, setTrigger] = useState({
        triggerNow: false,
        location: false
    })


    const { back_icon, angle_down } = Icons.ISIcons;
    const items = [
        {
            key: '1',
            label: (
                <div className='triggerOptions'>
                    <CustomCheckbox onChange={() => { handleTrigger('triggerNow') }} checked={trigger.triggerNow} />
                    Trigger Now
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div className='triggerOptions' >
                    <CustomCheckbox onChange={() => { handleTrigger('location') }} checked={trigger.location} />
                    Give Location
                </div>
            ),
        }
    ];
    const headers =
    [
        {
            header: 'Fault Code',
            key: 'faultCode'
        },
        {
            header: 'Frontend Message',
            key: 'frontEndMessage'
        },
        {
            header: 'Backend Message',
            key: 'backEndMessages'
        },
        {
            header: 'Cause',
            key: 'causes'
        }
    ]

    const handleClick = (currentdiv, payload) => {
        // console.log('hitting',currentdiv,payload)
        if (currentdiv) {
            setCurrentDiv(currentdiv)
        }
        setCurrentSS(payload.subSystemName)
    }

    useEffect(() => {
        const callback = (event) => {
            setfaultSubSystemData(event)
        };
        const topic = `BE/FE/FAULT/SUBSYSTEMLIST/${currentSS}`;
      
        websocket.subscribe(topic, callback);

        return () => {
            websocket.unsubscribeTopic(topic);
        };
    },[currentSS])

    const handleTrigger = (key) => {
        setTrigger((prev) => {
            const updatedState = Object.keys(prev).reduce((acc, currKey) => {
                acc[currKey] = currKey === key ? true : false;
                return acc;
            }, {});
            return updatedState;
        });
    };
    
    const handleback = () => {
        setCurrentDiv('buttons')
    }

    useEffect(() => {
        const callback = (event) => {
            setFaults(event)        //   setevents(event);
            //   updateTab(activedata?.content?.sessionId, 'events', event);
        };
        websocket.subscribe('BE/FE/FAULT/SUBSYSTEMLIST', callback);

        return () => {
            websocket.unsubscribeTopic('BE/FE/FAULT/SUBSYSTEMLIST');
        };
    }, []);

    const handleTriggerButton = () => {
        if (triggerFault) {
            const findFault = faultSubSystemData.find(x => x.id === triggerFault.faultId)
            console.log('fffg',findFault)
            if (findFault) {
                const backendMessage = findFault.backgroundmessages.find(x => x.id === triggerFault.backendmsgId)
                if (backendMessage) {
                    const cause = backendMessage.causes.find(x => x.id === triggerFault.causeId)
                    websocket.publish('BE/FE/FAULT/TRIGGERLIST', {
                        fault: {
                            fault_number: findFault.faultnumber,
                            cause: cause?.cause,
                            location: triggerFault?.location || '',
                            frontendMessage:findFault.frontendMessages
                        }
                    })
                }
            }

        }
         navigate(state?.redirect, { state: { activeTab: 'faults' } })

    }

    const handleCancel = () => {
        navigate(state?.redirect, { state: { activeTab: 'faults' } })
    }
    return (
        <div className='add_fault'>
            <div className="fault_content_dynamic_div">
                {currentDiv === 'buttons' ? (
                    <div className="add_fault_content">
                        {faults.map((x) => (
                            <button
                                key={x.id}
                                id={x.subSystemName}
                                className="fault_actions"
                                onClick={() => handleClick('buttons_data', x)}
                            >
                                {x.subSystemName}
                            </button>
                        ))}
                    </div>
                ) : null}

                {currentDiv === 'buttons_data' ? (
                    <div className="buttons_data_div">
                        <div className="buttons_data_actions">
                            <ButtonComp onClick={() => (handleback())} prefixIcon={back_icon} title={'Back'} bntStyle={{ "height": "6vh", "width": "6vw", "color": "white", "background": "rgba(255, 255, 255, 0.348)", "border-radius": "78vh", fontSize: "var(--font-size-3)" }} />
                            <div style={{
                                "fontFamily": "SF Pro",
                                "fontSize": "var(--font-size-3)",
                                "fontWeight": 590,
                                "lineHeight": "3.79vh",
                                "textAlign": "left",
                                "color": "white",
                                "width": "3.14vw",
                                "height": "3.79vh"
                            }}>{currentButtonData}</div>
                        </div>
                        <div className='buttons_data_content'>
                            <FaultTable headers={headers} faults_data={faultSubSystemData} setTriggerFault={setTriggerFault} setfaultSubSystemData={setfaultSubSystemData} faultSubSystemData={faultSubSystemData} />
                        </div>
                    </div>
                ) : null}
            </div>
            <div className='add_fault_footer_action'>

                {
                    !trigger.location ?
                        <Dropdown
                            overlayClassName='dropdown-custom-class'

                            menu={{
                                items,
                            }}
                            placement="bottomRight"
                        >
                            <div className='trigger_actions'

                            >
                                <div className='trigger_button'>
                                    <ButtonComp onClick={trigger.triggerNow ? () => (handleTriggerButton()) : () => { }} title={'Trigger'} bntStyle={{ "width": "5.9vw", "height": "6vh", "color": "black", "border-radius": "1vh 0 0 1vh", 'font-size': 'var(--font-size-3)' }} />
                                </div>
                                <div className='trigger_arrow_button'>
                                    <ButtonComp prefixIcon={angle_down} bntStyle={{ "height": "6vh", "width": "3.51vw", "border-radius": "0 1vh 1vh 0", "color": "black", 'font-size': 'var(--font-size-3)' }} />
                                </div>
                            </div>
                        </Dropdown> :
                        <div className='locationaddview'>
                            <div className='dropandtrigger'>
                                <input onChange={(e) => triggerFault ? setTriggerFault({ ...triggerFault, location: e.target.value }) : null} className='inputstylediv' style={{ "border-radius": "1vh 0 0 1vh", "height": '6vh' }} placeholder={'Location'}></input>
                                <Dropdown
                                    overlayClassName='dropdown-custom-class'

                                    menu={{
                                        items,
                                    }}
                                    placement="bottomRight"
                                >

                                    <div className='trigger_arrow_button'>
                                        <ButtonComp prefixIcon={angle_down} bntStyle={{ "height": "6vh", "width": "3.51vw", "border-radius": "0 1vh 1vh 0", "color": "black", 'font-size': 'var(--font-size-3)' }} />
                                    </div>
                                </Dropdown>
                            </div>
                            <ButtonComp onClick={() => (handleTriggerButton())} title={'Save Changes'} bntStyle={{ "width": "9vw", "height": "6vh", "color": "black", "border-radius": "1vh", 'font-size': 'var(--font-size-3)' }} />
                        </div>

                }
                <div className='cancel_button'>
                    <ButtonComp onClick={() => (handleCancel())} title={'Cancel'} bntStyle={{ "height": "6vh", "width": "5.9vw", "border-radius": "1vh", "background": "rgba(255, 255, 255, 0.348)", "color": "#FFFFFF", 'font-size': 'var(--font-size-3)' }} />
                </div>
            </div>
        </div>
    )
}

export default AddFault;
// ({headers,faults_data})

export function FaultTable({ headers, faults_data, setTriggerFault, faultSubSystemData, setfaultSubSystemData }) {
    const [faults, setFaults] = useState(faults_data);
    useEffect(() => {
        setFaults(faults_data)
    }, [faults_data])
    useEffect(() => {
        setfaultSubSystemData(faults)
    }, [faults])
    const [activeFault, setActiveFault] = useState()
    // console.log('updatedcause', faults, activeFault)
    // const handleCauseChange = (faultIndex, msgIndex, causeIndex) => {
    //     const updatedFaults = faults.map((fault, fIndex) => {
    //         if (fIndex === faultIndex) {
    //             const updatedMessages = fault.backgroundmessages.map((message, mIndex) => {
    //                 if (mIndex === msgIndex) {
    //                     const updatedCauses = message.causes.map((cause, cIndex) => {
    //                         if (cIndex === causeIndex) {
    //                             return { ...cause, selected: !cause.selected };
    //                         }
    //                         return cause;
    //                     });
    //                     return { ...message, causes: updatedCauses };
    //                 }
    //                 return message;
    //             });

    //             const updatedFault = { ...fault, backgroundmessages: updatedMessages };

    //             // Update activeFault with the modified fault
    //             setActiveFault(updatedFault);

    //             return updatedFault;
    //         }
    //         return fault;
    //     });

    //     setFaults(updatedFaults);
    // };

    const handleCauseChange = (faultId, msgId, causeId) => {

        const updatedFaults = faults.map((fault, fIndex) => {
            if (fault.id === faultId) {
                const updatedMessages = fault.backgroundmessages.map((message, mIndex) => {
                    if (message.id === msgId) {
                        const updatedCauses = message.causes.map((cause, cIndex) => {
                            if (cause.id === causeId) {
                                return { ...cause, selected: !cause.selected };
                            }
                            return cause;
                        });
                        return { ...message, causes: updatedCauses };
                    }
                    return message;
                });

                const updatedFault = { ...fault, backgroundmessages: updatedMessages };

                // Update activeFault with the modified fault
                setActiveFault(updatedFault);

                return updatedFault;
            }
            return fault;
        });
        setTriggerFault({
            faultId: faultId,
            backendmsgId: msgId,
            causeId: causeId
        })
        setFaults(updatedFaults);
    };

    return (
        <div className='f_table_container'>
            <table className="fault_table_view">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th className="f_table_header" key={index}>
                                {header.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {faults.map((fault, faultIndex) => (
                        <tr className='f_table_body_row' key={faultIndex}>

                            <td className="table_cell">{fault.faultnumber}</td>
                            <td className="table_cell">{fault.frontendMessages}</td>
                            <td className="table_cell" style={{ padding: 0 }}>
                                {fault?.backgroundmessages?.map((message, msgIndex) => (
                                    <div key={msgIndex} className="backend_message" style={{ height: `${100 / fault.backgroundmessages.length}%` }}>
                                        {message.message}
                                    </div>
                                ))}
                            </td>
                            <td className="table_cell" style={{ padding: 0 }}>
                                {fault?.backgroundmessages?.map((message, msgIndex) => (
                                    <div key={msgIndex} className="cause_message">
                                        {message.causes.map((cause, causeIndex) => (
                                            <div key={causeIndex} className="cause_label">
                                                <span className="truncated-textcause">
                                                    {cause.cause.length > 30 ? `${cause.cause.substring(0, 30)}...` : cause.cause}
                                                    {cause.cause.length > 30 && <span className="tooltipcause">{cause.cause}</span>}
                                                </span>
                                                <CustomCheckbox onChange={() => handleCauseChange(fault.id, message.id, cause.id)} />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export function CustomCheckbox({ checked: initialChecked, onChange, label, height, width }) {
    return (
        <label className="custom-checkbox-wrapper" style={{ height, width }}>
            <input
                type="checkbox"
                className="custom-checkbox-input"
                checked={initialChecked}
                onChange={onChange}
            />
            <span className="custom-checkbox-box" />
            {label && <span className="custom-checkbox-label">{label}</span>}
        </label>
    );
};
