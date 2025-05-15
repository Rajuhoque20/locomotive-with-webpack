import React from 'react'
import './TrackDeletedFiles.css'
import OverViewHeaderComp from '../../../../../components/Instructor-station/UIComp/OverViewHeaderComp'
import ActionsCards from '../../../../../components/Instructor-station/UIComp/ActionsCards'
import { Icons } from '#framework';
import './../../ExercisePanel/Page/ExerciseDeletedFiles.css'
export default function TrackDeletedFiles() {
  const {track_preview} = Icons.ISIcons;
  const CardData = [
    {
      id: 1,
      title: "WAP varanasi toughalsarai",
      lastRunDate: "2024-10-07",
      icon: track_preview
    },
    {
      id: 2,
      title: "WAP kanpur mirzapur",
      lastRunDate: "2024-10-03",
      icon: track_preview
    }
  ];
  return (
    <div className='deletefiles-div'> 
      <div className='deletefiles-header'>
      <OverViewHeaderComp title={'Deleted Files'}/>
      </div>
      <div className='deletefiles-cards'>
      {CardData?.map(x => {
        return <ActionsCards title={x.title} subtitle={x.lastRunDate} img={x.icon} cardtype={'track-delete'}/>
      })}
      </div>
    </div>
  )
}
