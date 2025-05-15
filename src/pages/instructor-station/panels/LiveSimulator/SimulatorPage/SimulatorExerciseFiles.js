
import React from 'react'
import './SimulatorExerciseFiles.css'
import './../../ExercisePanel/Page/ExerciseFiles.css'
import ButtonComp from '../../../../../components/Instructor-station/UIComp/ButtonComp'
import OverViewHeaderComp from '../../../../../components/Instructor-station/UIComp/OverViewHeaderComp'
import ActionsCards from '../../../../../components/Instructor-station/UIComp/ActionsCards'
import { useSimulatorStore } from '../simulator-store'
import { Icons } from '#framework'
export default function SimulatorExerciseFiles() {
    const {icon_upload,train1,train2,train3} = Icons.ISIcons;
    const { addTab } = useSimulatorStore(state=>state);
    function handleRun(x) {
        addTab(x.title, "simulation", "/simulation");
      }
    const CardData = [
        {
            id: 1,
            title: "WAP varanasi toughalsarai",
            lastRunDate: "2024-10-07",
            icon: train1,
            cardtype: 'run'
        },
        {
            id: 2,
            title: "WAP kanpur mirzapur",
            lastRunDate: "2024-10-03",
            icon: train2,
            cardtype: 'run'
        },
        {
            id: 3,
            title: "WAP delhi prayagraj",
            lastRunDate: "2024-10-03",
            icon: train3,
            cardtype: 'run'
        },
        {
            id: 4,
            title: "WAP delhi prayagraj",
            lastRunDate: "2024-10-03",
            icon: train2,
            cardtype: 'run'
        },
    ];
    return (
        <div className='Container'>
            <div className='exercise-files-container'>
                <div className='exercise-action-header'>
                    <div className='exercise-header-button2'>
                        <ButtonComp title={'upload'} prefixIcon={icon_upload} bntStyle={{ "width": "9.51vw", "height": "6.95vh", "border-radius": "1.89vh", "color": "#FFFFFF", "background": "#5E5E5E2E","font-size":"1.73vh" }} />
                    </div>
                </div>

                <div className='exercise-div-bar'>

                </div>
                <div className='exercise-files-header'>
                    <OverViewHeaderComp title={'Your Files'} />
                </div>

                <div className='exercise-files-cards'>
                    {CardData?.map(x => {
                        return <ActionsCards id={x.id} title={x.title} subtitle={x.lastRunDate} img={x.icon} cardtype={x.cardtype} handleRun={()=>{handleRun(x)}}/>
                    })}
                </div>
            </div>
        </div>
    )
}
