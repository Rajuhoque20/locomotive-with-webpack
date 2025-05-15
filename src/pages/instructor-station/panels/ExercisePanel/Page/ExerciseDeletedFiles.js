import React from 'react'
import './ExerciseDeletedFiles.css'
import OverViewHeaderComp from '../../../../../components/Instructor-station/UIComp/OverViewHeaderComp'
import ActionsCards from '../../../../../components/Instructor-station/UIComp/ActionsCards'
import { Icons } from '#framework'
export default function ExerciseDeletedFiles() {
  const {train1,train2,train3} = Icons.ISIcons;
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
    <div className='deletefiles-div'> 
      <div className='deletefiles-header'>
      <OverViewHeaderComp title={'Deleted Files'}/>
      </div>
      <div className='deletefiles-cards'>
      {CardData?.map(x => {
        return <ActionsCards title={x.title} subtitle={x.lastRunDate} img={x.icon}/>
      })}
      </div>
    </div>
  )
}
