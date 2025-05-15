import React from 'react'
import './TrackFiles.css'
import ButtonComp from '../../../../../components/Instructor-station/UIComp/ButtonComp'
import OverViewHeaderComp from '../../../../../components/Instructor-station/UIComp/OverViewHeaderComp'
import ActionsCards from '../../../../../components/Instructor-station/UIComp/ActionsCards'
import { Icons } from '#framework'
import './../../ExercisePanel/Page/ExerciseFiles.css'
export default function TrackFiles() {
  const {track_preview,icon_upload,new_exercise_button_icon} = Icons.ISIcons;
    const CardData = [
        {
            id: 1,
            title: "New Untitled Track1",
            lastRunDate: "2024-10-07",
            icon: track_preview,
        },
        {
            id: 2,
            title: "New Untitled Track2",
            lastRunDate: "2024-10-03",
            icon: track_preview,
        },
        {
          id: 3,
          title: "New Untitled Track1",
          lastRunDate: "2024-10-07",
          icon: track_preview,
      },
      {
          id: 4,
          title: "New Untitled Track2",
          lastRunDate: "2024-10-03",
          icon: track_preview,
      },
      {
        id: 5,
        title: "New Untitled Track1",
        lastRunDate: "2024-10-07",
        icon: track_preview,
    },
    {
        id: 6,
        title: "New Untitled Track2",
        lastRunDate: "2024-10-03",
        icon: track_preview,
    },

      ]
  return (
    <div className='Container'>
      <div className='exercise-files-container'>
       <div className='exercise-action-header'>
          <div className='exercise-header-button1'>
          <ButtonComp title={'New Track'} prefixIcon={new_exercise_button_icon} bntStyle={{"width":"13.61vw","height":"6vh","border-radius":"1.2vh",'font-size':'var(--font-size-3)'}}/>
          </div>
          <div className='exercise-header-button2'>
          <ButtonComp title={'upload'} prefixIcon={icon_upload} bntStyle={{"width":"9.51vw","height":"6.5vh","border-radius":"1.2vh","color":"#FFFFFF", "background": "#5E5E5E2E",'font-size':'var(--font-size-3)'}}/>
            </div>
       </div>

       <div className='exercise-div-bar'>
      
      </div>
      <div className='exercise-files-header'>
      <OverViewHeaderComp title={'Your Files'}/>
      </div>
       
      <div className='exercise-files-cards'>
      {CardData?.map(x => {
        return <ActionsCards title={x.title} subtitle={x.lastRunDate} img={x.icon} cardtype={'track'}/>
      })}
      </div>
      </div>
    </div>
  )
}
