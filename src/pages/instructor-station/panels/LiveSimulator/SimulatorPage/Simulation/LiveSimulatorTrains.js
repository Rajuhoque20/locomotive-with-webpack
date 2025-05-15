import React, { useEffect, useState } from 'react'
import './LiveSimulatorTrains.css'
import ButtonComp from '../../../../../../components/Instructor-station/UIComp/ButtonComp'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Icons } from '#framework';
import websocket from '../../../../../../services/Websocket';
import { useSimulatorStore } from '../../simulator-store';
import { Popover } from 'antd';
export default function LiveSimulatorTrains({ drag }) {
    const { tabs, activeId, updateTab, } = useSimulatorStore(state => state);
    const { new_exercise_button_icon, cancel_icon, enable_icon, disable_icon } = Icons.ISIcons;
    const activedata = tabs?.find(x => x.id === activeId)
    const { state } = useLocation();
    const [trains, setTrains] = useState()

    const [selectTrain,setSelectTrain ] = useState()
    useEffect(() => {
        setTrains(activedata?.content?.trains);
    }, [state?.reload])

    const navigate = useNavigate();
    const { id } = useParams();
    const handleNavigate = () => {
          navigate('/addTrain',{state:{redirect:`/simulation/${id}`}}) 
    }


    const handleDelete = () => {
        // if(selecteevent){
        //   let updated = events.find((x) => x.id === selecteevent.id)
        //   setevents((prevItems) =>
        //     prevItems.map((item) =>
        //       item.id === selecteevent.id ? { ...item,deleted:true } : item 
        //     )
        //   );
        //   updated['deleted'] = true
        //   websocket.publish('BE/FE/EVENT/EVENTLIST',{event:updated})
        //   setselecteevent()
        // }
    }


    return (
        <div className='livesimtrain_scenario_div' style={drag ? { height: '73vh'} : {}}>
            <div className='livesimtrain_header_actions'>
                <ButtonComp title={'Add'} prefixIcon={new_exercise_button_icon} bntStyle={{ "width": "6vw", "height": "4.5vh", fontSize: 'var(--font-size-4)' }} onClick={handleNavigate} />
                <ButtonComp onClick={() => { handleDelete() }} title={'Delete'} prefixIcon={cancel_icon} bntStyle={{
                    "width": "6vw", "height": "4.5vh", "background": selectTrain ? 'var(--Windows-Glass, rgba(224, 224, 232, 0.53))' : "rgba(125, 125, 128, 0.53)", "color": selectTrain ? 'rgb(255, 255, 255)' : " rgb(204, 204, 210)", fontSize: 'var(--font-size-4)',
                    "backdrop-filter": selectTrain ? "blur(100px)" : null
                }} />
            </div>
            <div className='livesimtrain_table'>
                <TrainTable drag={drag} setSelectTrain={setSelectTrain} selectTrain={selectTrain} />
            </div>

        </div>
    )
}

const TrainTable = ({ drag ,setSelectTrain,selectTrain}) => {
    const [trainPopover, setTrainPopOver] = useState()
    const { actioniconview } = Icons.ISIcons
    const services = [
        { id: 1, name: "Service 1", rake: 22, direction: "Up", location: "1195/22", speed: "50km/h" },
        { id: 2, name: "Service 2", rake: 22, direction: "Down", location: "1289/15", speed: "40km/h" },
        { id: 3, name: "Service 3", rake: 22, direction: "Up", location: "1195/22", speed: "50km/h" },
        { id: 4, name: "Service 4", rake: 22, direction: "Up", location: "1289/15", speed: "40km/h" },
        { id: 5, name: "Service 5", rake: 22, direction: "Up", location: "1195/22", speed: "50km/h" },
        { id: 6, name: "Service 6", rake: 22, direction: "Up", location: "1289/15", speed: "40km/h" },
        { id: 7, name: "Service 7", rake: 22, direction: "Up", location: "1289/15", speed: "40km/h" },
        { id: 8, name: "Service 8", rake: 22, direction: "Up", location: "1289/15", speed: "50km/h" }
    ];


    return (
        <div style={!drag ? { height: '70vh' } : {}} className='livesim_train_table_container'>
            <table className='livesimtrain_table'>
                <thead className='livesimtrain_table_header'>
                    <tr className='livesimtrain_table_header_row'>
                        <th className='livesimtrain_table_header_cell'>Name</th>
                        <th className='livesimtrain_table_header_cell'>Rake</th>
                        <th className='livesimtrain_table_header_cell'>Direction</th>
                        <th className='livesimtrain_table_header_cell'>Location</th>
                        <th className='livesimtrain_table_header_cell'>Speed</th>
                        <th className='livesimtrain_table_header_cell'></th>
                    </tr>
                </thead>
                <tbody className='livesimtrain_table_tbody'>
                    {services.map((service) => (
                        <tr
                            key={service.id}
                            className='livesimtrain_table_data_row'
                            onClick={() => {
                                if (selectTrain && selectTrain.id === service.id) {
                                    setSelectTrain(null);
                                } else {
                                    setSelectTrain(service);
                                }
                            }}
                            style={selectTrain && selectTrain.id === service.id?{
                                background: 'var(--Windows-Glass,rgba(5, 11, 45, 0.65))'
                            }:{}}
                        >
                            <td className='livesimtrain_table_data_cell'>{service.name}</td>
                            <td className='livesimtrain_table_data_cell'>{service.rake}</td>
                            <td className='livesimtrain_table_data_cell'>{service.direction}</td>
                            <td className='livesimtrain_table_data_cell'>{service.location}</td>
                            <td
                                onMouseLeave={() => {
                                    setTrainPopOver(null);
                                }}
                                className='livesimtrain_table_data_cell'>{service.speed}</td>
                            <td
                                onClick={(e) => {
                                    const newX = e.clientX;
                                    const newY = e.clientY;

                                    // If already open AND position is the same → close it
                                    if (trainPopover && trainPopover.x === newX && trainPopover.y === newY) {
                                        setTrainPopOver(null);
                                    } else {
                                        // Otherwise, update to new position
                                        setTrainPopOver({ x: newX, y: newY });
                                    }
                                }}
                                className='livesimtrain_table_data_cell'
                            >

                                <ButtonComp prefixIcon={actioniconview} bntStyle={{
                                    height: '5vh', width: '12vh',
                                    background: 'none',
                                }} />

                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            {trainPopover && (
                <div
                    className='livesimtrain_train_popover'
                    style={{
                        position: 'fixed',
                        top: trainPopover.y - 100,
                        left: trainPopover.x - 70,
                        zIndex: 9999,
                    }}
                    onMouseLeave={() => setTrainPopOver(null)}
                >
                    View On Map
                </div>
            )}

        </div>
    )
}
