import React, { useState } from 'react'
import classes from './slaveScreen.module.css'
import SlaveIngHomeScreen from './slaveHomeScreen'
const SlaveScreen = () => {
  const [currentSlPage, setcurrentSlPage] = useState('selectSlaveLoco')
  return (
    <div className={classes.slaveScreendiv}>
      {
        currentSlPage==='slaveIngHomeScreen'?<SlaveIngHomeScreen/>:
        <div className={classes.slave}>
        <div className={classes.slaveHeader}>
          DISTRIBUTED POWER WIRELESS CONTROL SYSTEM
        </div>
        <div className={classes.slaveSubHeader}>
          SLAVE LOCO
        </div>

        <div className={classes.slavepages}>
          {/* pages */}
          {currentSlPage === 'selectSlaveLoco' ? <SelectSlaveLoco setcurrentSlPage={setcurrentSlPage} /> : null}
          {currentSlPage === 'slaveInaugurationProcess' ? <SlaveInaugurationProcess setcurrentSlPage={setcurrentSlPage} /> : null}
          {currentSlPage === 'continuityCheck' ? <ContinuityCheckPage setcurrentSlPage={setcurrentSlPage} /> : null}
          {currentSlPage === 'slaveingsuccesspage' ? <SlaveInaugurationSuccess setcurrentSlPage={setcurrentSlPage} /> : null}

        </div>
      </div>
      }
    </div>
  )
}

export default SlaveScreen;


const SelectSlaveLoco = ({ setcurrentSlPage }) => {
  const [currentOption, setcurrentOption] = useState('MASTER')

  const handleOk = () => {
    setcurrentSlPage('slaveInaugurationProcess')
  }
  const slaveoptions = [
    {
      id: 1,
      lable: 'MASTER'
    },
    {
      id: 1,
      lable: 'SLAVE-1'
    },
    {
      id: 1,
      lable: 'SLAVE-2'
    },
    {
      id: 1,
      lable: 'SLAVE-3'
    },
    {
      id: 1,
      lable: 'SLAVE-4'
    }
  ]
  return (
    <div className={classes.selectSlavediv}>
      <div className={classes.slaveOptionsDiv}>
        {slaveoptions.map(x => {
          return (
            <div onClick={() => { setcurrentOption(x.lable) }} className={classes.optionDiv} style={currentOption === x.lable ? { background: 'rgba(229, 57, 53, 1)' } : {}}>
              {x.lable}
            </div>
          )
        })}
      </div>
      <div className={classes.actionHeader}>
        SELECT SLAVE LOCO
      </div>
      <div className={classes.actionsButtons}>
        <button className={classes.actionButton} onClick={() => { handleOk() }}>OK</button>
        <button className={classes.actionButton}>CANCEL</button>
      </div>
    </div>
  )
}

const SlaveInaugurationProcess = ({ setcurrentSlPage }) => {
  const handlePage = () => {
    setcurrentSlPage('continuityCheck')
  }
  return (
    <div className={classes.s_ing_process}>
      <div onClick={() => { handlePage() }} className={classes.s_ing_progess}>
        INAUGURATION PROGRESS...
      </div>
    </div>
  )
}

const ContinuityCheckPage = ({ setcurrentSlPage }) => {
  const handleProgress = () => {
    setcurrentSlPage('slaveingsuccesspage')
  }
  return (
    <div className={classes.contunitypage}>
      <div className={classes.checkingprocess}>
      <div onClick={() => {handleProgress()}} className={classes.s_ing_progess} style={{background:'white'}}>
        BP CONTINUNITY CHECKING...
      </div>
      </div>
      <div className={classes.chekingfooter}>
      MONITER BP STATUS FOR VERIFICATION
      </div>
      
    </div>
  )
} 

const SlaveInaugurationSuccess = ({setcurrentSlPage}) => {
  
  return(
    <div className={classes.sl_ing_suceess}>
      <div  onClick={() => {setcurrentSlPage('slaveIngHomeScreen')}} className={classes.slinsuccesorfailstatus} style={{ background: 'white', color: 'black', border: '0.4vh solid black' }}>
        BP CONTINUITY CHECKED
      </div>
      <div className={classes.slinsuccesorfailResult} style={{ background: 'rgba(40, 167, 69, 1)' }}>
        <div>
          INAUGURATION
        </div>
        <div>
          SUCCESSFULL
        </div>
      </div>
      <div className={classes.slinsuccesorfailinfo}>
      </div>
      <div className={classes.slinsuccesorfailinfo} style={{ fontWeight: 700, fontSize: '3vh' }}>
        LOCO “31284” IS IN “SLAVE” MODE
      </div>
    </div>
  )
}