
import ButtonComp from '../../../../../../components/Instructor-station/UIComp/ButtonComp'
import './mimicPopup.css'
import React, { useState, useRef, useEffect } from 'react';
import { BidirectionalSignals, FourClTrafficSignals, ThreeClTrafficSignals, ThreeMaClTrafficSignals, TwoCLRepeat, TwoClStopWarner, TwoCLTrafficLight, WarnerSignal } from './AssetsComponents/Signals/signals';
import { Shunting } from './AssetsComponents/Signals/Shunting/shunting';
import { CallingSignal } from './AssetsComponents/Signals/Calling/callingSignal';
import websocket from '../../../../../../services/Websocket';
import { Icons } from '#framework';
import { DropdownById } from '../../../../../../components/Instructor-station/UIComp/DropDownMenu';
import InputSelect from '../../../../../../components/Instructor-station/UIComp/InputSelect';
export const PopUpcomp = ({ tracks, setTracks, signalData, setSignalpopup }) => {
    const shuntingData = signalData?.signalInfo?.state?.shunting;
    const signaldata = signalData?.signalInfo?.state;
    const callingData = signalData?.signalInfo?.state?.calling;
    const bidirectionData = signalData?.signalInfo?.state?.bidirection

    // bidirection: {
    //     visibledirections: [1],
    //     enabled: 0
    // }
    const [signal, setSignal] = useState(signaldata?.indication || 'red');
    const [shunting, setShunting] = useState(shuntingData?.indication || 'proceed');
    const [calling, setCalling] = useState(callingData?.indication || 'on')
    const [directional, setDirectional] = useState(bidirectionData?.enabled || 0)
    let states = ['red', 'green'];
    if (signaldata.type === '3CL') {
        states.push('yellow')
    }
    if (signaldata.type === '4CL') {
        states.push('yellow')
        states.push('twoyellow')
    }
    if (signaldata.type === '2CLRepeat') {
        states = ['green', 'yellow']
    }
    if (signaldata.type === '3Macl') {
        states = ['green', 'yellow', 'twoyellow']
    }
    if (signaldata.type === 'twoClStopWarner') {
        states = ['green', 'red', 'redgreen']

    }
    if (signaldata.type === 'warnerSignal') {
        states = ['red', 'green']
    }
    const shuntingStates = ['stop', 'procced']
    const callingStates = ['on', 'off']
    const directionalStates = [0]
    if (bidirectionData) {
        directionalStates.push(...bidirectionData?.visibledirections)
    }

    // const handleSave = (trackID, signalID, newState, newShunting, newCalling, newDirection) => {
    //     setTracks(prevTracks =>
    //         prevTracks.map(track =>
    //             track.id === trackID
    //                 ? {
    //                     ...track,
    //                     signals: track.signals.map(signal =>
    //                         signal.id === signalID
    //                             ? {
    //                                 ...signal,
    //                                 state: {
    //                                     ...signal.state,
    //                                     indication: newState,
    //                                     shunting: shuntingData
    //                                         ? {
    //                                             ...signal.state.shunting,
    //                                             indication: newShunting  // Corrected this part
    //                                         }
    //                                         : null,
    //                                     calling: callingData ?
    //                                         {
    //                                             ...signal.state.calling,
    //                                             indication: newCalling
    //                                         } : null,
    //                                     bidirection: bidirectionData ?
    //                                         {
    //                                             ...signal.state.bidirection,
    //                                             enabled: newDirection
    //                                         } : null
    //                                 }
    //                             }
    //                             : signal
    //                     )
    //                 }
    //                 : track
    //         )
    //     );
    //     setSignalpopup(null);
    // };


    const handleSave = (trackID, signalID, newState, newShunting, newCalling, newDirection) => {
        // Find the updated signal object before updating state
        let updatedSignal = null;

        const updatedTracks = tracks.map(track => {
            if (track.id === trackID) {
                return {
                    ...track,
                    signals: track.signals.map(signal => {
                        if (signal.id === signalID) {
                            updatedSignal = {
                                ...signal,
                                state: {
                                    ...signal.state,
                                    indication: newState,
                                    shunting: shuntingData
                                        ? {
                                            ...signal.state.shunting,
                                            indication: newShunting
                                        }
                                        : null,
                                    calling: callingData
                                        ? {
                                            ...signal.state.calling,
                                            indication: newCalling
                                        }
                                        : null,
                                    bidirection: bidirectionData
                                        ? {
                                            ...signal.state.bidirection,
                                            enabled: newDirection
                                        }
                                        : null
                                }
                            };
                            return updatedSignal;
                        }
                        return signal;
                    })
                };
            }
            return track;
        });

        // Update state with modified track data
        setTracks(updatedTracks);

        // Publish the updated signal object
        if (updatedSignal) {
            console.log("Publishing updated signal:", updatedSignal);
            websocket.publish('signals', { signal: updatedSignal });
        }

        setSignalpopup(null);
    };


    const handleSignalChange = (signal, e) => {
        e.stopPropagation();
        setSignal(signal);
    }

    const handleShuntingChange = (shunting, e) => {
        e.stopPropagation();
        setShunting(shunting);
    }

    const handleCallingChange = (calling, e) => {
        e.stopPropagation();
        setCalling(calling);
    }

    const handleDirectional = (direction, e) => {
        e.stopPropagation();
        setDirectional(direction)
    }

    const two_cl_containerstyle = {
        height: '46vh'
    }

    if (shuntingData && callingData) {
        two_cl_containerstyle.height = '65vh'
    }
    return (
        <div className='two_cl_container' style={shuntingData || callingData ? two_cl_containerstyle : null}>

            <div className='signalsDataview'>


                <div className='signalView'>
                    <div className='signalName'>
                        {signaldata?.type}
                    </div>
                    <div className='signal_list' >
                        {states.map((x, i) => {
                            return (
                                <div
                                    key={i} // Added key prop
                                    id={"signal" + i}
                                    onClick={(e) => handleSignalChange(x, e)}
                                    className={signal === x ? 'activeDivbox' : 'divBox'}
                                    style={{ width: `${100 / states.length}%`, overflow: "hidden" }}
                                >

                                    {
                                        signaldata.type === '2CL' ?
                                            <svg
                                                width="100%"
                                                height="100%" viewBox="0 0 500 500"
                                                style={{
                                                    top: 0,
                                                    left: 0,
                                                }}
                                            >
                                                <TwoCLTrafficLight
                                                    renderAs="svg"
                                                    state={x}
                                                    x={350}
                                                    y={450}
                                                    width={220} height={400}
                                                    angle={90}
                                                />
                                            </svg> : null
                                    }

                                    {
                                        signaldata.type === '3CL' ?
                                            <ThreeClTrafficSignals
                                                renderAs="svg"
                                                state={x}
                                                x={350}
                                                y={450}
                                                width={220} height={400}
                                                angle={90}
                                            />
                                            : null
                                    }
                                    {
                                        signaldata.type === '4CL' ?
                                            <FourClTrafficSignals
                                                renderAs="svg"
                                                state={x}
                                                x={350}
                                                y={450}
                                                width={220} height={400}
                                                angle={90}
                                            />
                                            : null
                                    }
                                    {
                                        signaldata.type === '2CLRepeat' ?
                                            <TwoCLRepeat
                                                renderAs="svg"
                                                state={x}
                                                x={350}
                                                y={450}
                                                width={220} height={400}
                                                angle={90}
                                            /> : null
                                    }
                                    {
                                        signaldata.type === '3Macl' ?
                                            <>
                                                <ThreeMaClTrafficSignals
                                                    renderAs="svg"
                                                    state={x}
                                                    x={350}
                                                    y={450}
                                                    width={220} height={400}
                                                    angle={90}
                                                />
                                            </> : null
                                    }
                                    {
                                        signaldata.type === 'twoClStopWarner' ?
                                            <>
                                                <TwoClStopWarner
                                                    renderAs="svg"
                                                    state={x}
                                                    x={350}
                                                    y={450}
                                                    width={220} height={400}
                                                    angle={90}
                                                />
                                            </> : null
                                    }
                                    {
                                        signaldata.type === 'warnerSignal' ?
                                            <>
                                                <WarnerSignal
                                                    renderAs="svg"
                                                    state={x}
                                                    x={350}
                                                    y={450}
                                                    width={220} height={400}
                                                    angle={90}
                                                />
                                            </> : null
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>
                {
                    bidirectionData ? <div className='signalView'>
                        <div className='signalName'>
                            Directional
                        </div>
                        <div className='signal_list' style={{ gap: '0.5vh' }}>
                            {
                                directionalStates.map((x) => {
                                    return (
                                        <div
                                            style={{ width: `${100 / 3}%` }}
                                            className={directional === x ? 'sactiveDivbox' : 'sdivBox'}
                                            onClick={(e) => { handleDirectional(x, e) }}
                                        >
                                            <BidirectionalSignals renderAs={'svg'} directions={directionalStates} enabledDirection={x} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div> : null
                }
                {
                    shuntingData ?
                        <div className='shuntingView'>
                            <div className='shuntingName'>Shunting</div>
                            <div className='shunting_list'>
                                {shuntingStates.map((x) => {
                                    return (
                                        <div
                                            style={{ width: `${100 / 2}%` }}
                                            onClick={(e) => handleShuntingChange(x, e)}
                                            className={shunting === x ? 'sactiveDivbox' : 'sdivBox'}
                                        >
                                            <Shunting type={x} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        : null

                }
                {
                    callingData ?
                        <div className='shuntingView'>
                            <div className='shuntingName'>Calling</div>
                            <div className='shunting_list'>
                                {callingStates.map((x) => {
                                    return (
                                        <div
                                            style={{ width: `${100 / 2}%` }}
                                            onClick={(e) => handleCallingChange(x, e)}
                                            className={calling === x ? 'sactiveDivbox' : 'sdivBox'}
                                        >
                                            <CallingSignal type={x} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        : null
                }
            </div>
            <div className='genric_popup_action'>
                <ButtonComp onClick={() => { handleSave(signalData.trackId, signalData.signal, signal, shunting, calling, directional) }} title={'Save State'} bntStyle={{ height: '5vh', width: '7vw' }} />
                <ButtonComp onClick={() => setSignalpopup(null)} title={'Cancel'} bntStyle={{ height: '5vh', width: '6vw', background: 'rgba(255, 255, 255, 0.37)', 'backdrop-filter': 'blur(100px)', color: 'white' }} />
            </div>
        </div>
    );
};

export const TESelectPopUpView = ({ setTepopup, setAddTePopUp, tePopup }) => {
    const { eventsIcon, trainopng } = Icons.ISIcons
    const handleEvent = () => {
        setAddTePopUp({
            type: 'event',
            data: tePopup
        })
        setTepopup(null)
    }
    const handleTrain = () => {
        setAddTePopUp({
            type: 'train',
            data: tePopup
        })
        setTepopup(null)
    }
    return (
        <div className="tepopupContainer">
            <div onClick={() => handleEvent()} className="tepopupButtons">
                <div style={{ height: '70%', width: '10%' }}>
                    <img style={{ height: '100%', width: '100%' }} src={eventsIcon} />
                </div>                <div className='tepopupButtonstext'>
                    {`Add Event at location - ${tePopup.value}`}
                </div>
            </div>
            <div onClick={() => handleTrain()} className="tepopupButtons">
                <div style={{ height: '70%', width: '10%' }}>
                    <img style={{ height: '100%', width: '100%' }} src={trainopng} />
                </div>
                <div className='tepopupButtonstext'>
                    {`Add Train at location - ${tePopup.value}`}
                </div>
            </div>
        </div>
    )
}

export const AddTePopupView = ({ addTePopUp, setAddTePopUp }) => {
    const { selected_radio_icon, unselected_radio_icon } = Icons.ISIcons;
    const [events, setEvents] = useState([])
    const [selectedevent,setselectedevent] = useState()
    useEffect(() => {
        const callback = (event) => {
            setEvents(event);
        };
        websocket.subscribe('BE/FE/EVENT/EVENTLIST', callback);

        return () => {
            websocket.unsubscribeTopic('BE/FE/EVENT/EVENTLIST');
        };
    }, []);

    const options = events?.map((x => {
        return{
            label:x.eventName,
            id:x.id,
            data:x.data
        }
    }))

    const [directionData, setDirectionData] = useState({
        up: false,
        down: false
    })
    const updateDirection = (dir) => {
        setDirectionData(prev => {
            const isAlreadyTrue = prev[dir];

            if (isAlreadyTrue) {
                return { up: false, down: false };
            }

            return {
                up: dir === 'up',
                down: dir === 'down'
            };
        });
    };
    const saveChanges = () => {
                if(selectedevent){
                  let updated = events.find((x) => x.id === selectedevent)
                  updated['enabled'] = true
                  updated['deleted'] = false
                  updated['location'] = addTePopUp.data.value
                  websocket.publish('BE/FE/EVENT/EVENTLIST',{event:updated})
                  console.log('addeventfromtrackLayout',{event:updated})
                }
        setAddTePopUp(null)
    }
    const cancel = () => {
        setAddTePopUp(null)
    }
    return (
        <div className='addtePopContainer'>
            <div className='addtePopContainerInner'>
                <div className='addtePopContainerInner2'>
                    {
                        addTePopUp.type === 'event' &&
                        <div className='addteactions'>
                            <div className='addteactionView'>
                                <div className='addteleft'>
                                    Select Event
                                </div>
                                <div className='addteright'>
                                    <DropdownById selected={selectedevent} onSelect={setselectedevent} options={options} style={{ width: '100%' }} dropdownStyle={{ width: '100%' }} />
                                </div>
                            </div>

                            <div className='addteactionView'>
                                <div className='addteleft'>
                                    Location
                                </div>
                                <div className='addteright'>
                                    <div className='addteselecetdInfo'>
                                        {addTePopUp.data.value}
                                    </div>
                                </div>
                            </div>
                        </div>

                    }

                    {
                        addTePopUp.type === 'train' &&
                        <div className='addteactions'>
                            <div className='addteactionView'>
                                <div className='addteleft'>
                                    Location
                                </div>
                                <div className='addteright'>
                                    <div className='addteselecetdInfo'>
                                        {addTePopUp.data.value}
                                    </div>
                                </div>

                            </div>

                            <div className='addteactionView'>
                                <div className='addteleft'>
                                    Speed
                                </div>
                                <div className='addteright'>
                                    <InputSelect style={{ width: '100%', background: 'var(--Windows-Glass,rgba(17, 6, 36, 0.519))', 'box-shadow': 'inset 0 4px 8px rgba(0, 0, 0, 0.4)' }} />
                                </div>

                            </div>
                            <div className='addteactionView'>
                                <div className='addteleft'>
                                    Direction
                                </div>
                                <div className='addteright'>
                                    <div className='addterightactions'>
                                        <ButtonComp onClick={() => updateDirection('up')} prefixIcon={directionData.up ? selected_radio_icon : unselected_radio_icon} title={'Up'} bntStyle={{ width: '4vw', height: '5vh', background: 'none', color: 'white' }} />
                                        <ButtonComp onClick={() => updateDirection('down')} prefixIcon={directionData.down ? selected_radio_icon : unselected_radio_icon} title={'Down'} bntStyle={{ width: '4vw', height: '5vh', background: 'none', color: 'white' }} />
                                    </div>
                                </div>
                            </div>

                        </div>

                    }

                    <div className='addteFooter'>
                        <ButtonComp onClick={() => saveChanges()} title={'Save Changes'} bntStyle={{ height: '4.5vh', width: '7vw' }} />
                        <ButtonComp onClick={() => cancel()} title={'cancel'} bntStyle={{ height: '4.5vh', width: '4vw', background: 'none', color: 'white', 'backdrop-filter': 'blur(100vh)' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}