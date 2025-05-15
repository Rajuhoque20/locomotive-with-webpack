import React from 'react'
import classes from './selfTest.module.css'
import { Icons } from '#framework'
const SelfTest = ({setPage}) => {
  const handleClick = (x) => {
    setPage(x)
  }
 const tests = [
    {
        id:1,
        lable:'RADIO OK'
    },
    {
        id:2,
        lable:'CCU OK'
    },
    {
        id:3,
        lable:'DIU MVB OK'
    },
    {
        id:4,
        lable:'BIU-1 OK'
    },
    {
        id:5,
        lable:'BIU-2 OK'
    },
    {
        id:6,
        lable:'PRESSURE SENSOR OK'
    }
 ]

  return (
    <div className={classes.selftest_div}>
      <div className={classes.menuDiv}>
         MENU
      </div>
      <div className={classes.selftest_div_content}>
        <div className={classes.selftest_header}>
        DISTRIBUTED POWER WIRELESS CONTROL SYSTEM
        </div>
        <div className={classes.selftest_content}>
           <div onClick={() => handleClick('selectZone')} className={classes.tableHeader}>
           SELF TEST COMPLETED
           </div>
           <div className={classes.tabledata}>
            {
                tests?.map((x) => {
                    return(
                        <TestRows lable={x.lable}/>
                    )
                })
            }
             
           </div>
        </div>
      </div>
    </div>
  )
}

export default SelfTest;

const TestRows = ({lable,result}) => {
 const {correct_icon} = Icons.DDUIcons;
  return(
    <div className={classes.testRow}>
       <div className={classes.testRowLeft}>
        {lable}
       </div>
       <div className={classes.testRowRight}>
          <img src={correct_icon}/>
       </div>
    </div>
  )
}
