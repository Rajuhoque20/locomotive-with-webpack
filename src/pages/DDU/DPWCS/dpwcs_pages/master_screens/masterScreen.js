import React from 'react'
import classes from './masterScreen.module.css'
const MasterScreen = ({setPage}) => {
  const handleOk = () => {
    setPage('wagon')
  }
  const slaves = [
    {
      id: 1,
      lable: 'SLAVE - 1',
      values: ['310001', '310002', ''],
      selected: '310001'
    },
    {
      id: 2,
      lable: 'SLAVE - 2',
      values: ['310001', '310002', ''],
      selected: '310001'
    },
    {
      id: 3,
      lable: 'SLAVE - 3',
      values: ['310001', '310002', ''],
      selected: '310001'
    },
    {
      id: 4,
      lable: 'SLAVE - 4',
      values: ['310001', '310002', ''],
      selected: '310001'
    }
  ]
  return (
    <div className={classes.masterscreendiv}>
      <div className={classes.masterscreen}>
        <div className={classes.masterscreenHeader}>
          DISTRIBUTED POWER WIRELESS CONTROL SYSTEM
        </div>
        <div className={classes.masterscreenSubHeader}>
          MASTER:<div className={classes.shvalue}>31284</div>
        </div>
        <div className={classes.masterscreenTable}>
          <div className={classes.tableHeader}>
            <div >
              SEARCHING SLAVE LOCO...
            </div>
            <div >
              SELECTED SLAVE
            </div>
          </div>
          <div className={classes.tableContent}>
            {
              slaves.map((x) => { return <MasterTableOneRow /> })
            }
          </div>
        </div>
        <div className={classes.masterscreenFooter}>
          <div className={classes.masterscreenFooterleft}>
             PRESS OK TO CONFIRM
          </div>
          <div className={classes.masterscreenFooterright}>
          <button className={classes.mode_action_button}> CANCEL</button>
          <button onClick={() => {handleOk()}} className={classes.mode_action_button}> OK</button>
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default MasterScreen;

const MasterTableOneRow = ({ }) => {
  let data = {}
  data['lable'] = 'SLAVE - 1'
  data['values'] = ['310001', '310002', '']
  data['selected'] = '310001'
  return (
    <div className={classes.tablerow}>
      <div className={classes.tableleft}>
        <div className={classes.tableleftlable}>
          {data.lable}
        </div>
        <div className={classes.tableleftvalues}>
          {data.values.map((x => {
            return (
              <div className={classes.valuecell}>
                {x}
              </div>
            )
          }))}
        </div>
      </div>
      <div className={classes.tableright}>
        {data.selected}
      </div>
    </div>
  )
}
