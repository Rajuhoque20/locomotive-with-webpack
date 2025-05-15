import { useState } from 'react';
import HistoryCards from '../../../../../components/Instructor-station/UIComp/HistoryCards'
import OverViewHeaderComp from '../../../../../components/Instructor-station/UIComp/OverViewHeaderComp'
import './PTIHistory.css'
import { useNavigate } from 'react-router-dom';
import { usePTIStore } from '../PTI-store';
import './../../ExercisePanel/Page/ExerciseHistory.css'
export const PTIHistory = () => {
    const {setActiveTab } = usePTIStore(state => state);
    const [activeKey, setActiveKey]=useState(localStorage.getItem("activeKey")||"1");
    const navigate = useNavigate();

    const historycards = [
        {
            title: 'Simulation 111',
            subtitle: '00001',
            img: null
        },
        {
            title: 'Simulation 112',
            subtitle: '00002',
            img: null
        }
    ]
    const handleClick = () => {
        navigate('/pti-results')
        setActiveTab('/pti-results')
        setActiveKey('3');
    }
    return (
        <div className='pti-history-main'>
            <div className='pti-history-header'>
                <OverViewHeaderComp title={'Report History'} filters={true} />
            </div>
            <div className='exercisehistory-cards'>
                {historycards?.map(x => {
                    return (
                        <HistoryCards handleResults={() => { handleClick() }} title={x.title} subtitle={`Session Code: ${x.subtitle}`} img={x.img} />
                    )
                })}
            </div>
        </div>
    )
}