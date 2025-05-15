import React from 'react'
import './ActionsCards.css'
import ButtonComp from './ButtonComp';
import { Icons } from '#framework'; 
const {card_more_icon} = Icons.ISIcons;
const ActionsCards = ({id,title,subtitle,img,cardtype,handleRun = () =>{},cardStyle}) => {
  let styles = cardStyle
  if(cardtype && cardtype === 'track'){
    styles = {"width":"25vw"}
  }
  return (
    <div  key={id} className='cards-div' styles={styles}>
     <div className='cards-titles'>
       <div className='card-title'>
       {title}
       </div>
       <div className='card-subtitle'>
       {subtitle}
       </div>
     </div>
     <div className='actioncard-image'>
      <img src={img}/>
     </div>
     <div className='card-bar'>

     </div>
      {
        !cardtype?
        <div className='actionButtons'>
        <ButtonComp title={'Edit'} bntStyle={{"height":"6vh","width":"18.12vw","color":"rgb(255, 255, 255)","background":"#938b8b",'font-size':'var(--font-size-3)'}}/>
        <ButtonComp prefixIcon={card_more_icon} bntStyle={{  "width": "6.07vw","height": "6vh","background":"none"}}/>
       </div>:'' 
      }
      {
       cardtype && cardtype === 'run'?
       <ButtonComp onClick = {handleRun} title={'Run'} bntStyle={{"height":"6.5vh","width":"23vw","color":"rgb(255, 255, 255)","background":"#938b8b","border-radius":"1.92vh"}} />
       :''
      }
      {
       cardtype && cardtype === 'track'?
       <div className='actionButtons'>
       <ButtonComp title={'Edit Track'} bntStyle={{"height":"6vh","width":"18.12vw","color":"rgb(255, 255, 255)","background":"#938b8b",'font-size':'var(--font-size-3)','border-radius':'1.2vh'}}/>
       <ButtonComp prefixIcon={card_more_icon} bntStyle={{  "width": "6.07vw","height": "6vh","background":"none"}}/>
      </div>
       :''
      }
      {
        
        cardtype && cardtype === 'track-delete'?
        <ButtonComp title={'Edit Track'} bntStyle={{"height":"6vh","width":"24.20vw","color":"rgb(255, 255, 255)","background":"#938b8b",'font-size':'var(--font-size-3)','border-radius':'1.2vh'}}/>
        :''
      }

    </div>
  )
}

export default ActionsCards;
