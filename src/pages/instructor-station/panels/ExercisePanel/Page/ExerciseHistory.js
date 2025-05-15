import React from 'react'
import './ExerciseHistory.css'
import HistoryCards from '../../../../../components/Instructor-station/UIComp/HistoryCards'
import OverViewHeaderComp from '../../../../../components/Instructor-station/UIComp/OverViewHeaderComp'
export default function ExerciseHistory() {
  const historycards = [
    {
      title:null,
      subtitle:null,
      img:null
    },
    {
      title:null,
      subtitle:null,
      img:null
    },
    {
      title:null,
      subtitle:null,
      img:null
    },
    {
      title:null,
      subtitle:null,
      img:null
    },
    {
      title:null,
      subtitle:null,
      img:null
    },
    {
      title:null,
      subtitle:null,
      img:null
    },
  ]
  return (
    <div className='exercisehistory-div'>
      <div className='exercisehistory-header'>
       <OverViewHeaderComp title={'Simulation History'}/>
      </div>
      <div className='exercisehistory-cards'> 
         {historycards?.map(x => {
          return(
            <HistoryCards title={x.title} subtitle={x.subtitle} img={x.img}/>
          )
         })}
        </div>
    </div>
  )
}
