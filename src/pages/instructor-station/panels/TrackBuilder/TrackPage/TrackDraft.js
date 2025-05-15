
import React from 'react'
import './TrackDraft.css'
import ButtonComp from '../../../../../components/Instructor-station/UIComp/ButtonComp'
import OverViewHeaderComp from '../../../../../components/Instructor-station/UIComp/OverViewHeaderComp'
import ActionsCards from '../../../../../components/Instructor-station/UIComp/ActionsCards'
import { Icons } from '#framework'
import './../../ExercisePanel/Page/ExerciseDraft.css'
export default function TrackDraft() {
  const {track_preview,new_exercise_button_icon} = Icons.ISIcons;
    const CardData = [
        {
          id: 1,
          title: "Howrah Junction to Sealdah",
          lastRunDate: "2024-10-07",
          icon: track_preview
        },
        {
          id: 2,
          title: "Howrah Junction to Sealdah",
          lastRunDate: "2024-10-03",
          icon: track_preview
        },
        {
          id: 3,
          title: "Howrah Junction to Sealdah",
          lastRunDate: "2024-10-07",
          icon: track_preview
        },
        {
          id: 4,
          title: "Howrah Junction to Sealdah",
          lastRunDate: "2024-10-03",
          icon: track_preview
        },
        {
          id: 5,
          title: "Howrah Junction to Sealdah",
          lastRunDate: "2024-10-07",
          icon: track_preview
        },
        {
          id: 6,
          title: "Howrah Junction to Sealdah",
          lastRunDate: "2024-10-03",
          icon: track_preview
        }
      ];
  return (
    <div className='draft-div'>
      <div className='header-button'>
      <ButtonComp title={'New Track'} prefixIcon={new_exercise_button_icon} bntStyle={{"width":"13.61vw","height":"6vh","border-radius":"1.2vh","font-size":"var(--font-size-3)"}}/>
      </div>
      <div className='div-bar'>
      
      </div>
     <div className='draft-header'>
     <OverViewHeaderComp title={'Drafts'}/>
     </div>
     <div className='draft-cards-div'>
      {CardData?.map(x => {
        return <ActionsCards title={x.title} subtitle={x.lastRunDate} img={x.icon} cardtype={'track'}/>
      })}
     </div>
    </div>
  )
}
