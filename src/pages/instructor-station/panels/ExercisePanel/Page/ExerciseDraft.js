import React from 'react'
import './ExerciseDraft.css'
import ButtonComp from '../../../../../components/Instructor-station/UIComp/ButtonComp'
import OverViewHeaderComp from '../../../../../components/Instructor-station/UIComp/OverViewHeaderComp'
import ActionsCards from '../../../../../components/Instructor-station/UIComp/ActionsCards'
import { useExerciseStore } from '../store';
import { Icons } from '#framework'
export default function ExerciseDraft() {
  const {train1,train2,train3,new_exercise_button_icon} = Icons.ISIcons;
  const { addTab} = useExerciseStore(state=>state);
  function handleNewExcercise(){
    addTab('New Untitled Exercise',"exercise-panel","/new-exercise")
  }
  const CardData = [
    {
      id: 1,
      title: "WAP varanasi toughalsarai",
      lastRunDate: "2024-10-07",
      icon: train1
    },
    {
      id: 2,
      title: "WAP kanpur mirzapur",
      lastRunDate: "2024-10-03",
      icon: train2
    },
    {
      id: 3,
      title: "WAP delhi prayagraj",
      lastRunDate: "2024-10-03",
      icon: train3
    },
    {
      id: 4,
      title: "WAP delhi prayagraj",
      lastRunDate: "2024-10-03",
      icon: train2
    },
  ];
  return (
    <div className='draft-div'>
      <div className='header-button'>
      <ButtonComp onClick={() => {handleNewExcercise()}} title={'New Exercise'} prefixIcon={new_exercise_button_icon} bntStyle={{"width":"13.61vw","height":"6.5vh","border-radius":"1.2vh","font-size":"var(--font-size-3)"}}/>
      </div>
      <div className='div-bar'>
      
      </div>
     <div className='draft-header'>
     <OverViewHeaderComp title={'Drafts'}/>
     </div>
     <div className='draft-cards-div'>
      {CardData?.map(x => {
        return <ActionsCards title={x.title} subtitle={x.lastRunDate} img={x.icon}/>
      })}
     </div>
    </div>
  )
}
