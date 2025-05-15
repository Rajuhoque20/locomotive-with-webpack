import React from 'react'
import classes from './selectZone.module.css'
const SelectZone = ({setPage}) => {
    const onClick  = () => {
       setPage('inaugurationScreen')
    }
    const zones = [
        {
            id:1,
            lable:'DEFAULT'
        },
        {
            id:2,
            lable:'CR'
        },
        {
            id:3,
            lable:'ER'
        },
        {
            id:4,
            lable:'ECR'
        },
        {
            id:5,
            lable:'ECoR'
        },
        {
            id:6,
            lable:'KR'
        },
        {
            id:7,
            lable:'NR'
        },
        {
            id:8,
            lable:'NCR'
        },
        {
            id:9,
            lable:'NER'
        },
        {
            id:10,
            lable:'NWR'
        },        
        {
            id:11,
            lable:'NFR'
        },
        {
            id:12,
            lable:'SR'
        },
        {
            id:13,
            lable:'SCR'
        },
        {
            id:14,
            lable:'SECR'
        },
        {
            id:15,
            lable:'SER'
        },        {
            id:16,
            lable:'SWR'
        },
        {
            id:17,
            lable:'WR'
        },
        {
            id:18,
            lable:'WCR'
        },
        {
            id:19,
            lable:''
        },
        {
            id:20,
            lable:''
        }
    ]
  return (
    <div className={classes.selectZonediv}>
       <div className={classes.selectZoneContent} >
          <div className={classes.selectZoneHeader}>
              SELECT ZONE
          </div>
          <div className={classes.boxContainer}>
              {
                zones.map((x) => {
                    return(
                     <Box onClick={() => {onClick()}}  lable={x.lable}/>   
                    )
                })
              }
          </div>
       </div>
    </div>
  )
}

export default SelectZone;

const Box = ({lable,onClick = () => {}}) => {
  return(
    <div onClick={onClick} className={classes.selectZoneBox}>
      {lable}
    </div>
  )
}
