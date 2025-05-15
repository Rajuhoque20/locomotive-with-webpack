import React, { useState } from 'react'
import './AddTrain.css'
import InputSelect from '../../../../../../components/Instructor-station/UIComp/InputSelect'
import ButtonComp from '../../../../../../components/Instructor-station/UIComp/ButtonComp'
import { Icons } from '#framework'
import { useLocation, useNavigate } from 'react-router-dom'
export const AddTrain = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { selected_radio_icon, unselected_radio_icon } = Icons.ISIcons;
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
        navigate(state?.redirect, { state: { activeTab: 'trains' } })

    }
    const cancel = () => {
        navigate(state?.redirect, { state: { activeTab: 'trains' } })
    }
    return (
        <div className='addTrain_container'>
            <div className='addTrain_inner_container'>
                <div className='addTrainActionView'>
                    <div className='addTrainleft'>
                        Location
                    </div>
                    <div className='addTrainright'>
                        <input className='addTrainInfoView' />
                    </div>
                </div>
                <div className='addTrainActionView'>
                    <div className='addTrainleft'>
                        Speed
                    </div>
                    <div className='addTrainright'>
                        <InputSelect style={{ width: '30%', background: 'var(--Windows-Glass,rgba(17, 6, 36, 0.519))', 'box-shadow': 'inset 0 4px 8px rgba(0, 0, 0, 0.4)' }} />
                    </div>
                </div>
                <div className='addTrainActionView'>
                    <div className='addTrainleft'>
                        Direction
                    </div>
                    <div className='addTrainright'>
                        <div className='addterightactions'>
                            <ButtonComp onClick={() => updateDirection('up')} prefixIcon={directionData.up ? selected_radio_icon : unselected_radio_icon} title={'Up'} bntStyle={{ width: '4vw', height: '5vh', background: 'none', color: 'white' }} />
                            <ButtonComp onClick={() => updateDirection('down')} prefixIcon={directionData.down ? selected_radio_icon : unselected_radio_icon} title={'Down'} bntStyle={{ width: '4vw', height: '5vh', background: 'none', color: 'white' }} />
                        </div>
                    </div>
                </div>

                <div className='addTrainFooterAction'>
                    <ButtonComp onClick={() => saveChanges()} title={'Save Changes'} bntStyle={{ height: '4.5vh', width: '7vw' }} />
                    <ButtonComp onClick={() => cancel()} title={'cancel'} bntStyle={{ height: '4.5vh', width: '4.5vw', background: 'none', color: 'white', 'backdrop-filter': 'blur(100vh)' }} />
                </div>
            </div>
        </div>
    )
}

