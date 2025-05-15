import React from 'react'
import './SimulatorHistory.css'
import './../../ExercisePanel/Page/ExerciseHistory.css'
import HistoryCards from '../../../../../components/Instructor-station/UIComp/HistoryCards'
import OverViewHeaderComp from '../../../../../components/Instructor-station/UIComp/OverViewHeaderComp'
import { useSimulatorStore } from "../simulator-store";
export default function SimulatorHistory() {
  const { addTab } = useSimulatorStore(state=>state);
  function handleviewResults(x) {
    addTab(x.title, "simulation-results", "/simulation-results");
  }
  const historycards = [
    {
      title:'Simulation 111',
      subtitle:'00001',
      img:null
    },
    {
      title:'Simulation 112',
      subtitle:'00002',
      img:null
    }
  ]
  return (
    <div className='exercisehistory-div'>
      <div className='exercisehistory-header'>
       <OverViewHeaderComp title={'Simulation History'}/>
      </div>
      <div className='exercisehistory-cards'> 
         {historycards?.map(x => {
          return(
            <HistoryCards  title={x.title} subtitle={`Session Code: ${x.subtitle}`} img={x.img} handleResults={() =>{handleviewResults(x)}}/>
          )
         })}
        </div>
    </div>
  )
}
