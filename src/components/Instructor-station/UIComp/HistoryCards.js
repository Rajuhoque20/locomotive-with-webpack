import React from 'react'
import './HistoryCards.css'
import history_card from '../../../assets/Instructor-station/Icons/history-card.svg'
import ButtonComp from './ButtonComp'
const HistoryCards = ({title,subtitle,img,handleResults = () =>{}}) => {
  return (
    <div className='history-card-div'>
       <div className='history-header-div'>
          <div className='history-header-title'>
           {title?title:'Simulation 111'}
          </div>
          <div className='history-header-subtitle'>
          {subtitle?subtitle:'Session Code : 12345'}
            </div>
       </div>
       <div className='history-img'>
          <img src={img?img:history_card}/>
       </div>
       <div className='histort-cards-bar'>

       </div>
       <div className='history-button'>
         <ButtonComp onClick={handleResults} bntStyle={{"height":"6.86vh","width":"14.5vw","background":"#949494","color":"#FFFFFF","font-size":"2vh"}} title={'View Results'} />
       </div>
    </div>
  )
}

export default HistoryCards;
