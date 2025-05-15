import React ,{useState} from 'react'
import classes from './inaugurationScreen.module.css'
const InaugurationScreen = ({setPage}) => {
    const [currentScreen,setCurrentScreen] = useState('MASTER')
    const selectScreen = (x) => {
      setCurrentScreen(x)
    }
    const handleOk = () => {
      if(currentScreen=='MASTER'){
        setPage('masterscreen')
      }
      if(currentScreen === 'SLAVE'){
        setPage('slavescreen')

      }
    }
  const screen = [
    {
      id:1,
      lable:'MASTER'
    },
    {
      id:2,
      lable:'SLAVE'
    }
  ]
  return (
    <div className={classes.in_screen_div}>
      <div className={classes.innerScreen}>
        <div className={classes.inScreenHeader1}>
        DISTRIBUTED POWER WIRELESS CONTROL SYSTEM
        </div>
        <div className={classes.inScreenHeader2}>
        INAUGURATION PROCESS
        </div>
        <div className={classes.inScreenSelection}>
          {
            screen.map((x) => <ScreenButton lable={x.lable} selected={currentScreen === x.lable?true:false} onClick={() => {selectScreen(x.lable)}}/>)
          }
       </div>
       <div className={classes.inScreenActions}>
          <button onClick={() => handleOk()} className={classes.mode_action_button} > OK</button>
          <button className={classes.mode_action_button}> CANCEL</button>
       </div>
       <div className={classes.inScreenFooter}>
       SELECT LOCO IN EITHER MASTER/SLAVE MODE
       </div>
      </div>
    </div>
  )
}

export default InaugurationScreen;

const ScreenButton = ({lable,selected,onClick = () => {}}) => {
  return(
   <div onClick={onClick} className={classes.mode_Button} style={selected?{}:{background:'none'}}>
     <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
     {lable}
     </div>
   </div>
  )
}

