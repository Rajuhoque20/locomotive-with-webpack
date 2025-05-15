import React, { useEffect, useRef, useState } from 'react'
import './LiveSimFaults.css'
import ButtonComp from '../../../../../../components/Instructor-station/UIComp/ButtonComp';
import { Icons } from '#framework';
import { useNavigate, useParams } from 'react-router-dom';
import { color } from 'chart.js/helpers';
import websocket from '../../../../../../services/Websocket';
import { useSimulatorStore } from '../../simulator-store';
const LiveSimFaults = ({ drag }) => {
    const { tabs, activeId, updateTab, } = useSimulatorStore(state => state);
    const activedata = tabs?.find(x => x.id === activeId)
    const { new_exercise_button_icon } = Icons.ISIcons;
    const navigate = useNavigate();
    const { id } = useParams();
    const handleNavigate = () => {
        navigate('/addfault', { state: { redirect: `/simulation/${id}` } })
    }
    const [activeFaultdata, setActiveFaultData] = useState([]);
    const [allFaultdata, setAllFaultData] = useState([]);
    const [prsetdata, setPrSetData] = useState([]);


    const activeFaultheaders = {
        headers: ['Date/Time', 'Fault Code', 'Fault Message', 'Trigger Location', 'Action'],
        keys: ['date/time', 'faultCode', 'faultMessage', 'triggerLocation', 'action']
    };
    const allFaultheaders = {
        headers: ['Start Date/Time', 'End Date/Time', 'Fault Code', 'Fault Message', 'Trigger Location'],
        keys: ['startdate/time', 'enddate/time', 'faultCode', 'faultMessage', 'triggerLocation']
    };
    const presetFaults = {
        headers: ['Start Date/Time', 'Fault Code', 'Fault Message', 'Trigger Location', 'Action'],
        keys: ['startdate/time', 'faultCode', 'faultMessage', 'triggerLocation', 'action']
    }
    const [data, setData] = useState([])
    const [activebutton, setActiveButton] = useState('Preset')
    const [activeHeaders, setactiveHeaders] = useState(activeFaultheaders)
    const handleActiveButton = (activeButton, activeHeaders, data) => {
        setActiveButton(activeButton)
        setactiveHeaders(activeHeaders)
    }
    const handleResolve = (id) => {
        const faultSources = {
            Preset: { data: prsetdata, setData: setPrSetData },
            ActiveFaults: { data: activeFaultdata, setData: setActiveFaultData }
        };
    
        const source = faultSources[activebutton];

        if (source) {
            const findFault = source.data.find((x) => x.id === id);
            if (!findFault) return;

            source.setData(prevData => prevData.filter(item => item.id !== id));
            
            websocket.publish('FE/BE/FAULT/ACTION/RESOLVE_FAULT', {
                fault: {
                    ...findFault,
                    triggered: false,
                    resolved: true,
                    preset: false,
                }
            });
        }
    };
    useEffect(() => {

        const topicMap = {
            'Preset': {
                topic: 'BE/FE/FAULT/PRESETFAULTS',
                stateSetter: setPrSetData,
                faultKey: 'preset'
            },
            'ActiveFaults': {
                topic: 'BE/FE/FAULT/ACTIVEFAULTS',
                stateSetter: setActiveFaultData,
                faultKey: 'activefaults'
            },
            'Resolved': {
                topic: 'BE/FE/FAULT/RESOLVEDFAULTS',
                stateSetter: setAllFaultData,
                faultKey: 'resolved'
            }
        };
        const config = topicMap[activebutton];
        if (!config) return;
        const topic = config.topic;
        const callback = (event) => {
            updateTab(
                activedata?.content?.sessionId,
                'faults',
                { ...activedata?.content?.faults, [config.faultKey]: event }
            );
            config.stateSetter(event);
        };
        websocket.subscribe(config.topic, callback);
        console.log('subscribed', config.topic)


        return () => {
            console.log('usubscribed', config.topic, topic)

            websocket.unsubscribeTopic(topic);
        };



    }, [activebutton]);


    useEffect(() => {
        const keys = {
            'Preset': prsetdata,
            'ActiveFaults': activeFaultdata,
            'Resolved': allFaultdata
        };

        const modified = keys[activebutton]?.map(({ startDate, startTime, fault, cause, location, frontendMessage, endDate, endTime, id }) => ({
            'startdate/time': startDate && startTime ? `${startDate}/${startTime}` : '',
            faultCode: fault,
            faultMessage: frontendMessage || '',
            triggerLocation: location || '',
            'enddate/time': endDate && endTime ? `${endDate}/${endTime}` : '',
            'date/time': startDate && startTime ? `${startDate}/${startTime}` : '',
            id: id
        })) || [];

        setData(modified);
    }, [prsetdata, allFaultdata, activeFaultdata]);

    useEffect(() => {
        const updateFaults = (event) => {
            const { sessionId, faults = {} } = activedata.content;
            updateTab(sessionId, 'faults', { ...faults, preset: event });

            const modified = event.map(({ startDate, startTime, fault, cause, location, frontendMessage, endDate, endTime, id }) => ({
                'startdate/time': startDate && startTime ? `${startDate}/${startTime}` : '',
                faultCode: fault,
                faultMessage: frontendMessage || '',
                triggerLocation: location || '',
                'enddate/time': endDate && endTime ? `${endDate}/${endTime}` : '',
                'date/time': startDate && startTime ? `${startDate}/${startTime}` : '',
                id: id

            }));

            setPrSetData(event);
            setData(modified);
        };

        websocket.subscribe('BE/FE/FAULT/PRESETFAULTS', updateFaults);

        return () => websocket.unsubscribeTopic('BE/FE/FAULT/PRESETFAULTS', updateFaults);
    }, []);

    // console.log('prsetdata', prsetdata)
    // console.log('activeFaultdata', activeFaultdata)
    // console.log('allFaultdata', allFaultdata)
    return (
        <div className='fault' style={drag ? { height: '73vh' } : {}}>
            <div className='fault_header_action'>
                <ButtonComp onClick={handleNavigate} prefixIcon={new_exercise_button_icon} title={'Add'} bntStyle={{ "width": "100%", "height": "6vh", "border-radius": "1.89vh", "fontSize": "var(--font-size-3)" }} />
            </div>
            <div className='fault_div'>
                <div className='fault_content' style={drag ? { height: '52vh' } : {}}>
                    <div className='fault_table_buttons'>
                        <button className={activebutton === 'Preset' ? 'fault_activebutton' : 'fault_deactivebutton'} onClick={() => handleActiveButton('Preset', presetFaults, prsetdata)}>Preset Faults</button>
                        <button className={activebutton === 'ActiveFaults' ? 'fault_activebutton' : 'fault_deactivebutton'} onClick={() => handleActiveButton('ActiveFaults', activeFaultheaders, activeFaultdata)}>Session Faults</button>
                        <button className={activebutton === 'Resolved' ? 'fault_activebutton' : 'fault_deactivebutton'} onClick={() => handleActiveButton('Resolved', allFaultheaders, allFaultdata)}>Resolved Faults</button>
                    </div>
                    <div className='fault_table_content'>
                        <div className="fault_table-container">
                            <table className="fault_custom-table">
                                <thead>
                                    <tr className="fault_table-header">
                                        {activeHeaders?.headers?.map((header, index) => (
                                            <th className='fth' key={index}>{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((item, rowIndex) => (
                                        <tr className="fault_table-data" key={rowIndex}>
                                            {activeHeaders?.keys?.map((header, colIndex) => (
                                                <td className='ftd' key={colIndex}>
                                                    <div style={(header === 'action' ? { display: 'flex', alignItems: 'center' } : {})

                                                    } className='fault_custom_data'>
                                                        {header === "faultMessage" && <span>{item?.messageCode || ''}</span>}
                                                        <p>{item[header]}</p>
                                                        {header === 'action' ? <ButtonComp onClick={() => handleResolve(item.id)} title={'Resolve Fault'} bntStyle={{ width: '10vw', height: '5vh', color: 'white', background: 'rgba(194, 190, 190, 0.36)', 'backdrop-filter': 'blur(100px)' }} /> : ''}
                                                    </div>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveSimFaults;

