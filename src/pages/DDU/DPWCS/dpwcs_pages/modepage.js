import React ,{useState} from 'react'
import classes from  './modepage.module.css'
const Modepage = ({setPage}) => {
  const [currentMode,setCurrentMode] = useState('DPWCS')
  const selectMode = (x) => {
    setCurrentMode(x)
  }
  const modes = [
    {
        id:1,
        lable:`DPWCS`
    },
    {
        id:1,
        lable:`DDU`
    }
  ]
  return (
    <div className={classes.mode_div}>
       <div className={classes.mode_header}>
        SELECT MODE
       </div>
       <div className={classes.mode_selection}>
         {modes.map(x  => {
            return(
                <ModeButton onClick={() => {selectMode(x.lable)}} lable={x.lable} selected={currentMode === x.lable?true:false}/>
            )
         })}
       </div>
       <div className={classes.mode_actions}>
          <button className={classes.mode_action_button} onClick={currentMode==='DPWCS'?()=>setPage("password-page"):null}> OK</button>
          <button className={classes.mode_action_button}> CANCEL</button>
       </div>
    </div>
  )
}

export default Modepage;

const ModeButton = ({lable,selected,onClick = () => {}}) => {
   return(
    <div onClick={onClick} className={classes.mode_Button} style={selected?{}:{background:'none'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      {lable}
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
       MODE
      </div>
    </div>
   )
}
