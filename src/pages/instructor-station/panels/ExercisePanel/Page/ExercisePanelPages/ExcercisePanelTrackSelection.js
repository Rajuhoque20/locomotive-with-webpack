import React, { useState } from 'react'
import './ExcercisePanelTrackSelection.css'
import Dropdown from '../../../../../../components/Instructor-station/UIComp/DropDownMenu';
import { Icons } from '#framework';
import ButtonComp from '../../../../../../components/Instructor-station/UIComp/ButtonComp';
import { CustomCheckbox } from '../../../LiveSimulator/SimulatorPage/Simulation/AddFault';
import RangePicker from '../../../../../../components/Instructor-station/UIComp/RangePicker';
import InputSelect from '../../../../../../components/Instructor-station/UIComp/InputSelect';
import { CustomSwitch } from '../../../LiveSimulator/SimulatorPage/Simulation/LiveSimulationManagement';

const ExcercisePanelTrackSelection = () => {
    const [currentdiv, setCurrentDiv] = useState('')
    const [tableadddiv, settableadddiv] = useState('table')
    const { route_icon, train_route, station_icon, journey_icon, left_arrow, settings_icon, selected_radio_icon, unselected_radio_icon, route_small_icon } = Icons.ISIcons;
    const [route, setRoute] = useState('suggested')
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

    let buttonsdata = []
    for (let i = 200; i < 300; i++) {
        buttonsdata.push({
            lable: i,
            id: buttonsdata.length
        })
    }
    const handleCurrentDiv = (x) => {
        setCurrentDiv(x)
    }
    const handleBackoption = () => {
        setCurrentDiv('')
        settableadddiv('table')
    }
    const handleRoute = (x) => {
        setRoute(x)
    }
    const changetableAddDiv = (x) => {
        settableadddiv(x)
    }
    console.log('currentdiv', currentdiv)
    const selectionOptions = [
        {
            lable: 'Itinerary',
            icon: route_icon
        },
        {
            lable: 'Train',
            icon: train_route
        },
        {
            lable: 'Stations',
            icon: station_icon
        },
        {
            lable: 'Services',
            icon: journey_icon
        }
    ]

    const routeforms = [
        {
            title: 'Route 1',
            subtitle: '78.9 km',
            seleted: false
        },
        {
            title: 'Route 2',
            subtitle: '78.9 km',
            seleted: false
        },
        {
            title: 'Route 3',
            subtitle: '78.9 km',
            seleted: false
        },
        {
            title: 'Route 4',
            subtitle: '78.9 km',
            seleted: false
        },
        {
            title: 'Route 5',
            subtitle: '78.9 km',
            seleted: false
        }
    ]


    const stationHeaders = [
        {
            id: 1,
            label: 'Name',
            key: 'name'
        },
        {
            id: 2,
            label: 'Stop Duration',
            key: 'duration'
        },
        {
            id: 3,
            label: 'Stop Location',
            key: 'location'
        },
        {
            id: 4,
            label: '',
            key: 'icon'
        }
    ]

    const stationData = [
        {
            id: 1,
            name: 'Station A',
            duration: '00:00:00',
            location: '1195/22'
        },
        {
            id: 2,
            name: 'Station B',
            duration: '00:00:00',
            location: '1195/22'
        },
        {
            id: 3,
            name: 'Station C',
            duration: '00:00:00',
            location: '1195/22'
        },
        // {
        //     id:4,
        //     name:'Station D',
        //     duration:'00:00:00',
        //     location:'1195/22'
        // },
        // {
        //     id: 5,
        //     name: 'Station A',
        //     duration: '00:00:00',
        //     location: '1195/22'
        // },
        // {
        //     id: 6,
        //     name: 'Station B',
        //     duration: '00:00:00',
        //     location: '1195/22'
        // }, 
        // {
        //     id: 7,
        //     name: 'Station C',
        //     duration: '00:00:00',
        //     location: '1195/22'
        // },
        // {
        //     id:8,
        //     name:'Station D',
        //     duration:'00:00:00',
        //     location:'1195/22'
        // },
        // {
        //     id: 9,
        //     name: 'Station B',
        //     duration: '00:00:00',
        //     location: '1195/22'
        // },
        // {
        //     id:8,
        //     name:'Station D',
        //     duration:'00:00:00',
        //     location:'1195/22'
        // },
        // {
        //     id: 9,
        //     name: 'Station B',
        //     duration: '00:00:00',
        //     location: '1195/22'
        // }
    ]

    const serviceHeaders = [

        {
            id: 1,
            label: 'Name',
            key: 'name'
        },
        {
            id: 2,
            label: 'Rake',
            key: 'rake'
        },
        {
            id: 3,
            label: 'Location',
            key: 'location'
        },
        {
            id: 4,
            label: 'Speed',
            key: 'speed'
        },
        {
            id: 5,
            label: '',
            key: 'icon'
        }

    ]
    const serviceData = [
        {
            id: 1,
            name: 'Station A',
            rake: '22',
            location: '1195/22',
            speed: '100 km'
        }
    ]

    const trainHeader = [
        {
            id: 1,
            label: 'Name',
            key: 'name'
        },
        {
            id: 2,
            label: 'Location',
            key: 'location'
        },
        {
            id: 3,
            label: '',
            key: ''
        },
    ]

    const traindata = [
        {
            id: 1,
            name: 'Train',
            location: '1195/22'
        }
    ]
    return (
        <div className='track_selection_div'>

            <div className='selection_options_div'>
                {
                    currentdiv === '' ?
                        <div className='selection_options'>
                            <div className='selection_options_header'>
                                <div className='header_text'>
                                    Select Track
                                </div>
                                <div className='header_dropdown'>
                                    <Dropdown style={{ width: '40vh' }} options={['Varnasi Junction To Mughalsarai']} defaultcontent={'Varnasi Junction To Mughalsarai'} dropdownStyle={{ width: '40vh', background: 'none' }} />
                                </div>
                            </div>

                            <div className='selection_options_content'>
                                {
                                    selectionOptions.map((x) => {
                                        return (
                                            <div onClick={() => { handleCurrentDiv(x.lable) }} className='selectionoptions'>
                                                <img src={x.icon} />
                                                {x.lable}
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                        : null
                }
                {
                    currentdiv === 'Itinerary' ?
                        <div className='outerlayer'>
                            <div className='outerlayerheader'>
                                <ButtonComp onClick={() => { handleBackoption() }} prefixIcon={left_arrow} title={'Back'} bntStyle={{ width: '5vw', height: '5vh', color: 'white', background: 'rgba(255, 255, 255, 0.512)', 'backdrop-filter': 'blur(100px)', 'border-radius': '5vh' }} />
                                {currentdiv}
                                <img src={settings_icon} />
                                <div style={{ width: "100%", border: "0.1vh solid rgba(255, 255, 255, 0.512)", height: '0.1vh' }}> </div>
                            </div>

                            <div className='outerlayercontent'>


                                <div className='tabswitch'>
                                    <div className='lefttabswitch'>
                                        <ButtonComp onClick={() => { handleRoute('suggested') }} prefixIcon={route === 'suggested' ? selected_radio_icon : unselected_radio_icon} bntStyle={{ width: '3vh', height: '3vh', background: 'none' }} />
                                        Suggested route
                                    </div>
                                    <div className='righttabswitch'>
                                        <ButtonComp onClick={() => { handleRoute('custom') }} prefixIcon={route === 'custom' ? selected_radio_icon : unselected_radio_icon} bntStyle={{ width: '3vh', height: '3vh', background: 'none' }} />
                                        Custom route
                                    </div>
                                </div>

                                {
                                    route === 'suggested' ?
                                        <div className='tabswitch_contents'>

                                            <div className='routes_div'>
                                                {routeforms?.map((x) => {
                                                    return (
                                                        <Routesforms title={x.title} subtitle={x.subtitle} seleted={x.seleted} />
                                                    )
                                                })}

                                            </div>


                                            <div className='route_segments_div'>
                                                <div className='route_segments_div_header'>
                                                    Segments
                                                </div>
                                                <div className='segments_data'>
                                                    {
                                                        buttonsdata?.map(x => {
                                                            return (
                                                                <ButtonComp title={`${x.lable}`} bntStyle={{ color: 'white', height: '4vh', width: '4vw', background: 'var(--Windows-Glass, rgba(19, 17, 39, 0.139))', ' backdrop-filter': 'blur(100px)' }} />
                                                            )
                                                        })
                                                    }

                                                </div>
                                            </div>

                                        </div>
                                        : null
                                }

                                {
                                    route === 'custom' ?

                                        <div className='tabswitch_contents'>
                                            <div className='customtab_div'>
                                                <div className='customtabheader'>Segments</div>
                                                <div className='customtab_dropdown'>
                                                    <Dropdown defaultcontent={'Add Segment'} options={buttonsdata.map(x => { return x.lable })} />
                                                </div>
                                                <div className='customtab_content'></div>
                                            </div>
                                        </div>

                                        : null
                                }

                            </div>
                        </div>
                        : null
                }

                {
                    currentdiv === 'Train' ?
                        <div className='outerlayer'>
                            <div className='outerlayerheader'>
                                <ButtonComp onClick={() => { handleBackoption() }} prefixIcon={left_arrow} title={'Back'} bntStyle={{ width: '5vw', height: '5vh', color: 'white', background: 'rgba(255, 255, 255, 0.512)', 'backdrop-filter': 'blur(100px)', 'border-radius': '5vh' }} />
                                {currentdiv}
                                <img src={settings_icon} />
                                <div style={{ width: "100%", border: "0.1vh solid rgba(255, 255, 255, 0.512)", height: '0.1vh' }}> </div>
                            </div>
                            <div className='outerlayercontent'>
                                <div className='tstraindiv'>
                                    <div className='tstraindivHeader'>
                                        Start session with Shunting Operation
                                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1vh' }}>  <CustomSwitch /> </div>
                                    </div>
                                    <div className='stationTable' style={traindata?.length <= 6 ? { height: `${(traindata?.length * 10)}vh` } : {}}>
                                        <TrackSelectionTable headers={trainHeader} data={traindata} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        : null
                }

                {
                    currentdiv === 'Stations' ?
                        <div className='outerlayer'>
                            <div className='outerlayerheader'>
                                <ButtonComp onClick={() => { handleBackoption() }} prefixIcon={left_arrow} title={'Back'} bntStyle={{ width: '5vw', height: '5vh', color: 'white', background: 'rgba(255, 255, 255, 0.512)', 'backdrop-filter': 'blur(100px)', 'border-radius': '5vh' }} />
                                {currentdiv}
                                <img src={settings_icon} />
                                <div style={{ width: "100%", border: "0.1vh solid rgba(255, 255, 255, 0.512)", height: '0.1vh' }}> </div>
                            </div>
                            <div className='outerlayercontent'>
                                {tableadddiv === 'table' ?

                                    <div className='stationContent'>

                                        <div className='stationTable' style={stationData?.length <= 6 ? { height: `${(stationData?.length * 10) + 7}vh` } : {}}>
                                            <TrackSelectionTable headers={stationHeaders} data={stationData} />
                                        </div>

                                        <div className='stationfooter'>
                                            <ButtonComp onClick={() => { changetableAddDiv('add') }} title={'Add Station'} bntStyle={{ width: '10vw', height: '5vh', background: 'var(--Windows-Glass, rgba(208, 207, 215, 0.379)', ' backdrop-filter': 'blur(100px)', color: 'white' }} />
                                        </div>

                                    </div>
                                    : null
                                }
                                {
                                    tableadddiv === 'add' ?
                                        <div className='addStationDiv'>
                                            <div className='addStationForms'>
                                                <div className='addStationform'>
                                                    <div className='addStationformleft'>
                                                        Station
                                                    </div>
                                                    <div className='addStationformright' >
                                                        <Dropdown options={['Station A', 'Station B']} dropdownStyle={{ height: 'auto', 'max-height': '40vh', backdropFilter: 'blur(10vh)', background: 'var(--Windows-Glass, rgba(22, 17, 56, 0.218))' }} />
                                                    </div>
                                                </div>

                                                <div className='addStationform'>
                                                    <div className='addStationformleft'>
                                                        Duration
                                                    </div>
                                                    <div className='addStationformright'>
                                                        <div style={{ width: '80%' }}>
                                                            <RangePicker />
                                                        </div>
                                                        <div style={{ width: '10vh' }}>
                                                            <InputSelect />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='addStationform'>
                                                    <div className='addStationformleft'>
                                                        Stop Location
                                                    </div>
                                                    <div className='addStationformright'>
                                                        <input placeholder='Enter Location' className='inputview' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='addStationDivfooter'>
                                                <ButtonComp title={'Add'} bntStyle={{ width: '4vw', height: '5vh' }} />
                                                <ButtonComp onClick={() => { changetableAddDiv('table') }} title={'Cancel'} bntStyle={{ width: '5vw', height: '5vh', color: 'white', backdropFilter: 'blur(10vh)', background: 'none' }} />

                                            </div>
                                        </div>

                                        : null
                                }


                            </div>
                        </div>
                        : null
                }

                {
                    currentdiv === 'Services' ?
                        <div className='outerlayer'>
                            <div className='outerlayerheader'>
                                <ButtonComp onClick={() => { handleBackoption() }} prefixIcon={left_arrow} title={'Back'} bntStyle={{ width: '5vw', height: '5vh', color: 'white', background: 'rgba(255, 255, 255, 0.512)', 'backdrop-filter': 'blur(100px)', 'border-radius': '5vh' }} />
                                {currentdiv}
                                <img src={settings_icon} />
                                <div style={{ width: "100%", border: "0.1vh solid rgba(255, 255, 255, 0.512)", height: '0.1vh' }}> </div>
                            </div>
                            <div className='outerlayercontent'>
                                {tableadddiv === 'table' ?

                                    <div className='stationContent'>

                                        <div className='stationTable' style={stationData?.length <= 6 ? { height: `${(stationData?.length * 10) + 7}vh` } : {}}>
                                            <TrackSelectionTable headers={serviceHeaders} data={serviceData} />

                                        </div>

                                        <div className='stationfooter'>
                                            <ButtonComp onClick={() => { changetableAddDiv('add') }} title={'Add Train'} bntStyle={{ width: '10vw', height: '5vh', background: 'var(--Windows-Glass, rgba(208, 207, 215, 0.379)', ' backdrop-filter': 'blur(100px)', color: 'white' }} />
                                        </div>

                                    </div>
                                    : null
                                }

                                {
                                    tableadddiv === 'add' ?
                                        <div className='addStationDiv' style={{ height: '100%' }}>
                                            <div className='addStationForms' style={{ height: '60vh' }}>
                                                <div className='addStationform'>
                                                    <div className='addStationformleft'>
                                                        Locomotive Type
                                                    </div>
                                                    <div className='addStationformright' >
                                                        <Dropdown options={['WPA 7', 'WPA 8']} dropdownStyle={{ height: 'auto', 'max-height': '40vh', backdropFilter: 'blur(10vh)', background: 'var(--Windows-Glass, rgba(22, 17, 56, 0.218))' }} />
                                                    </div>
                                                </div>

                                                <div className='addStationform'>
                                                    <div className='addStationformleft'>
                                                        Train Type
                                                    </div>
                                                    <div className='addStationformright' >
                                                        <Dropdown options={['Passenger', 'Goods']} dropdownStyle={{ height: 'auto', 'max-height': '40vh', backdropFilter: 'blur(10vh)', background: 'var(--Windows-Glass, rgba(22, 17, 56, 0.218))' }} />
                                                    </div>
                                                </div>

                                                <div className='addStationform'>
                                                    <div className='addStationformleft'>
                                                        Rake
                                                    </div>
                                                    <div className='addStationformright'>
                                                        <div style={{ width: '80%' }}>
                                                            <RangePicker minRange={0} maxRange={20} defaultValue={10} />
                                                        </div>
                                                        <div style={{ width: '10vh' }}>
                                                            <InputSelect />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='addStationform'>
                                                    <div className='addStationformleft'>
                                                        Speed
                                                    </div>
                                                    <div className='addStationformright'>
                                                        <div style={{ width: '12vw' }}>
                                                            <InputSelect />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='addStationform'>
                                                    <div className='addStationformleft'>
                                                        Direction
                                                    </div>
                                                    <div style={{ gap: '5%' }} className='addStationformright'>
                                                        <ButtonComp onClick={() => updateDirection('up')} prefixIcon={directionData.up ? selected_radio_icon : unselected_radio_icon} title={'Up'} bntStyle={{ width: '4vw', height: '5vh', background: 'none', color: 'white' }} />
                                                        <ButtonComp onClick={() => updateDirection('down')} prefixIcon={directionData.down ? selected_radio_icon : unselected_radio_icon} title={'Down'} bntStyle={{ width: '4vw', height: '5vh', background: 'none', color: 'white' }} />
                                                    </div>
                                                </div>
                                                <div className='addStationform'>
                                                    <div className='addStationformleft'>
                                                        Location
                                                    </div>
                                                    <div className='addStationformright'>
                                                        <input placeholder='Enter Location' className='inputview' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='addStationDivfooter' style={{ height: '11vh' }}>
                                                <ButtonComp title={'Add'} bntStyle={{ width: '4vw', height: '5vh' }} />
                                                <ButtonComp onClick={() => { changetableAddDiv('table') }} title={'Cancel'} bntStyle={{ width: '5vw', height: '5vh', color: 'white', backdropFilter: 'blur(10vh)', background: 'none' }} />
                                            </div>
                                        </div>

                                        : null
                                }
                            </div>
                        </div>
                        : null
                }
            </div>

            <div className='selectionview'>
                <div className='selectionview_div'>

                </div>
                <div className='selectiofooternview'>
                    <div className='sfooterHeader'>
                        Total Simulation Time
                    </div>
                    <div className='sfootertimer'>
                        00:60:57 Hours
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExcercisePanelTrackSelection;


const Routesforms = ({ title, subtitle, seleted }) => {
    const { route_small_icon } = Icons.ISIcons;
    return (
        <div className='routeform'>
            <div className='routeformleft'>
                <img src={route_small_icon} />
                <div className='routeformtitles'>
                    <div className='routeformtitle'>
                        {title ? title : 'Title'}
                    </div>
                    <div className='routeformsubtitle'>
                        {subtitle ? subtitle : 'subtitle'}
                    </div>
                </div>
            </div>
            <div className='routeformright'>
                <CustomCheckbox />
            </div>

        </div>
    )
}

const TrackSelectionTable = ({ headers, data }) => {
    const { card_more_icon } = Icons.ISIcons;
    console.log("table data", data, headers)
    return (
        <div className="d_table-container">
            <table className='d_table' >
                <thead >
                    <tr className='d_table_row' style={{ height: '7vh', borderBottom: '0.5vh solid rgba(255, 255, 255, 0.208)', background: 'none', backdropFilter: 'blur(10vh)' }}>
                        {headers?.map((header) => (
                            <th
                                key={header.id}
                                className='d_table_header'
                            >
                                {header.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((row, rowIndex) => (
                        <tr className='d_table_data_row'
                            key={rowIndex}
                        >
                            {headers?.map((header) => (
                                <td
                                    key={header.id}
                                    className='d_table_data'
                                >
                                    {
                                        header.key === 'icon' ? <ButtonComp prefixIcon={card_more_icon} bntStyle={{ width: '4vh', height: '4vh', background: 'none' }} /> : row[header.key] || null

                                    }
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );

}

