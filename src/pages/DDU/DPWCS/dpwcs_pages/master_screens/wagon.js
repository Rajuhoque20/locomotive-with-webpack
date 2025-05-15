import React, { useState } from 'react'
import classes from './wagon.module.css'
import { Icons } from '#framework'
const Wagon = ({ setPage }) => {
  const [currentDiv, setcurrentDiv] = useState('wagonEntry')
  console.log('currentDiv', currentDiv)
  return (
    <div className={classes.wagondiv} style={['inaugurationHome'].includes(currentDiv) ? { padding: '1vh' } : {}}>
      {
        ['inaugurationHome'].includes(currentDiv) ? <InaugurationHome setPage={setPage} /> :

          <div className={classes.wagon}>

            <div className={classes.wagonHeader}>
              DISTRIBUTED POWER WIRELESS CONTROL SYSTEM
            </div>
            <div className={classes.wagonSubHeader}>
              MASTER LOCO
            </div>

            <div className={classes.wagonpages}>
              {/* pages */}
              {currentDiv === 'wagonEntry' && <WagonEntry setcurrentDiv={setcurrentDiv} />}
              {currentDiv === 'wagonConfirmation' && <WagonConfirmation setcurrentDiv={setcurrentDiv} />}
              {currentDiv === 'communicationCheking' && <ComunicationChecking setcurrentDiv={setcurrentDiv} />}
              {currentDiv === 'comEstablishScreen' && <CommunicationEstablish setcurrentDiv={setcurrentDiv} />}
              {currentDiv === 'moniterVerification' && <VerficationMoniter setcurrentDiv={setcurrentDiv} />}
              {currentDiv === 'inaugurationSuccess' && <InaugurationSuccess setcurrentDiv={setcurrentDiv} />}
              {currentDiv === 'inaugurationFail' && <InaugurationFail setcurrentDiv={setcurrentDiv} />}
              {currentDiv === 'inaugurationHome' && <InaugurationHome setcurrentDiv={setcurrentDiv} />}
            </div>
          </div>
      }

    </div>
  )
}

export default Wagon;

const WagonEntry = ({ setcurrentDiv }) => {
  const { up_button, down_button, gp_enter_icon } = Icons.DDUIcons;
  const wagontypes = [
    {
      id: 1,
      lable: 'BOXN'
    },
    {
      id: 2,
      lable: 'BOBN'
    },
    {
      id: 3,
      lable: 'BOXNHI'
    },
    {
      id: 4,
      lable: 'TYPE-4'
    },
    {
      id: 5,
      lable: 'TYPE-5'
    }
  ]
  const [password, setPassword] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setPassword(""); // Clear the password
    } else if (value === "E") {
      alert(`Password Entered: ${password}`);
      // setPage('self-test')
    } else {
      setPassword((prev) => prev + value); // Append the number
    }
  };

  const handlepopUpOk = () => {
    setcurrentDiv('wagonConfirmation')
  }
  const buttons = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    "C", '0', "E",
  ];
  return (
    <div className={classes.wagonEntry}>

      <div className={classes.wagonEntryLeft}>
        <div className={classes.wagonEntryLeftA}>
          <div className={classes.wagonEntryLeftAHeader}>
            <div>
              TYPE OF
            </div>
            <div>
              WAGON
            </div>
          </div>
          <div className={classes.wagonEntryLeftAContent}>
            <div className={classes.wagonEntryLeftAButton}>
              <img src={up_button} />
            </div>
            <div className={classes.wagonEntryLeftAOptions}>
              {wagontypes.map(x => {
                return (
                  <div className={classes.wagontypes}>{x.lable}</div>
                )
              })}
            </div>
            <div className={classes.wagonEntryLeftAButton}>
              <img src={down_button} />
            </div>
          </div>
        </div>
        <div className={classes.wagonEntryLeftB}>
          <div className={classes.wagonEntryLeftBHeader}>
            <div className={classes.inheader}>
              <div>
                WAGONS
              </div>
              <div>
                SELECTED
              </div>
            </div>
            <div className={classes.inheader}>
              <div>
                NO.OF
              </div>
              <div>
                WAGONS
              </div>
            </div>
          </div>
          <div className={classes.wagonEntryLeftBContent}>
            <div className={classes.wagonEntryLeftBContentHeader}>
              MASTER TO SLAVE - 1
            </div>
            <div className={classes.wagonEntryLeftBContentinnerc}>
              <div className={classes.wagonEntryLeftBContentinnercrow}>
                <div className={classes.wagontypes}>
                  BOBN
                </div>
                <div className={classes.wagontypes}>
                  50
                </div>
              </div>
              <div className={classes.wagonEntryLeftBContentinnercrow}>
                <div className={classes.wagontypes}>
                  BOXN
                </div>
                <div className={classes.wagontypes}>
                  5
                </div>
              </div>
            </div>
            <div className={classes.popup}>
              <div className={classes.popupHeader}>
                TRAIN HAS ONE MORE SLAVE?
              </div>
              <div className={classes.popupAction}>
                <div className={classes.popupButtons}>
                  NO
                </div>
                <div onClick={() => { handlepopUpOk() }} className={classes.popupButtons}>
                  YES
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.wagonEntryRight}>
        <div className={classes.wagonEntryRightHeader}>
          NO.OF WAGONS:<div className={classes.value}>55</div>
        </div>
        <div className={classes.wagonEntryRightSubHeader}>
          TRAIN LENGTH:<div className={classes.value}>610.5 M</div>
        </div>
        <div className={classes.paswordTable}>
          <div className={classes.passwordInnerTable}>
            {
              buttons.map((x, index) => {
                return (
                  <div
                    key={index}
                    className={classes.passwordButton}
                    onClick={() => handleButtonClick(x)}
                  >
                    {x === 'E' ? <img src={gp_enter_icon} /> : x}
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={classes.wagonEntryRightActions}>
          <div className={classes.actionDiv}>
            CANCEL
          </div>
          <div className={classes.actionDiv}>
            OK
          </div>
          <div className={classes.actionDiv}>
            ENTER
          </div>
        </div>
      </div>

    </div>
  )
}

const WagonConfirmation = ({ setcurrentDiv }) => {
  const handleOKAction = () => {
    setcurrentDiv('communicationCheking')
  }
  const cards = [
    {
      id: 1,
      from: 'MASTER',
      to: 'SLAVE - 1',
      fvalue: 55,
      tvalue: 650
    },
    {
      id: 1,
      from: 'SLAVE - 1',
      to: 'SLAVE - 2',
      fvalue: 57,
      tvalue: 620
    },
    {
      id: 1,
      from: 'SLAVE - 2',
      to: 'SLAVE - 3',
      fvalue: null,
      tvalue: null
    },
    {
      id: 1,
      from: 'SLAVE - 3',
      to: 'SLAVE - 4',
      fvalue: null,
      tvalue: null
    },
  ]
  return (
    <div className={classes.wagonConfirmation}>
      <div className={classes.wagonConfirmationHeader}>
        NO.OF WAGONS
      </div>


      <div className={classes.wgCards}>
        {
          cards.map(x => {
            return (
              <div className={classes.wgcard}>
                <div className={classes.cardcontent}>
                  {x.from}
                </div>
                <div className={classes.cardcontent}>
                  TO
                </div>
                <div className={classes.cardcontent}>
                  {x.to}
                </div>

              </div>
            )
          })
        }
      </div>


      <div className={classes.wgcardsData}>
        <div className={classes.carddatadiv}>
          {
            cards.map(x => {
              return (
                <div className={classes.cardInfo}>
                  <div className={classes.cardBox}>
                    {x.fvalue ? x.fvalue : '----'}
                  </div>
                  <div className={classes.cardBox}>
                    {x.tvalue ? x.tvalue : '----'}
                  </div>
                </div>
              )
            })
          }


        </div>


        <div className={classes.carddatadivinfo}>
          <div className={classes.topinfo}>
            BETWEEN EACH CONSIST
          </div>
          <div className={classes.bottominfo}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              TOTAL LENGTH
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              BETWEEN EACH CONSIST

            </div>
          </div>
        </div>


      </div>

      <div className={classes.wagonConfirmationActions}>
        <button onClick={() => { handleOKAction() }} className={classes.wgcactionButtons}>OK</button>
        <button className={classes.wgcactionButtons}> ENTER</button>
      </div>

    </div>
  )
}

const ComunicationChecking = ({ setcurrentDiv }) => {
  const handleCheck = () => {
    setcurrentDiv('comEstablishScreen')
  }
  return (
    <div className={classes.comChecking}>
      <div onClick={() => { handleCheck() }} className={classes.checkingScreen}>
        COMMUNICATION CHECK IN PROGRESS...
      </div>
    </div>
  )
}

const CommunicationEstablish = ({ setcurrentDiv }) => {
  const handleIntialaization = () => {
    setcurrentDiv('moniterVerification')
  }
  return (
    <div className={classes.comEstablish}>
      <div onClick={() => { handleIntialaization() }} className={classes.checkingScreen} style={{ background: 'white' }}>
        COMMUNICATION ESTABLISHED
      </div>
      <div className={classes.checkingScreen} style={{ color: 'white' }}>
        <div>
          INITIALISING
        </div>
        <div>
          ‘BP DROP CHECK’
        </div>
      </div>
    </div>
  )
}

const VerficationMoniter = ({ setcurrentDiv }) => {
  const handleContinuity = (x) => {
    setcurrentDiv(x)
  }
  const modesdata = [
    {
      id: 1,
      mode: 'MASTER BP',
      value: '3.5',
      status: true,
      message: 'BP CONTINUITY OK'
    },
    {
      id: 2,
      mode: 'SLAVE - 1',
      value: '3.4',
      status: true,
      message: 'BP CONTINUITY OK'
    }, {
      id: 3,
      mode: 'SLAVE - 2',
      value: '3.4',
      status: true,
      message: 'BP CONTINUITY OK'
    },
    {
      id: 4,
      mode: 'SLAVE - 3',
      value: '3.5',
      status: false,
      message: 'BP CONTINUITY FAILED'
    },
    {
      id: 5,
      mode: 'SLAVE - 4',
      value: '3.4',
      status: true,
      message: 'DROPPING BP FROM LAST SLAVE'
    }
  ]
  return (
    <div className={classes.verificationScreen}>
      <div className={classes.vmHeader} style={{ justifyContent: 'right' }}>
        <div className={classes.vmHeaderContent}>
          BP CONTINUNITY CHECK...
        </div>
      </div>
      <div className={classes.vmContent}>
        {
          modesdata.map(x => {
            return (
              <div className={classes.moniterRow}>
                <div className={classes.moniterRowleft}>
                  <div className={classes.vmmode}>
                    {x.mode}
                  </div>
                  <div className={classes.vmvalue} style={!x.status ? { background: 'rgba(40, 167, 69, 1)' } : {}}>
                    {x.value}
                  </div>
                </div>
                <div onClick={() => { handleContinuity(x.status ? 'inaugurationSuccess' : 'inaugurationFail') }} className={classes.moniterRowright}>
                  <div className={classes.vmStatus} style={!x.status ? { background: 'rgba(229, 57, 53, 1)' } : {}}>
                    {x.message}
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
      <div className={classes.vmFooter}>
        MONITER BP STATUS FOR VERIFICATION
      </div>
    </div>
  )
}

const InaugurationFail = ({ setcurrentDiv }) => {
  return (
    <div className={classes.insuccesorfail}>
      <div className={classes.insuccesorfailstatus}>
        BP CONTINUITY FAIL
      </div>
      <div className={classes.insuccesorfailResult}>
        <div>
          INAUGURATION
        </div>
        <div>
          FAIL
        </div>
      </div>
      <div className={classes.insuccesorfailinfo}>
        ONE OR MORE SLAVE SELECTED WRONGLY...
      </div>
      <div className={classes.insuccesorfailinfo}>
        PLEASE RE-ENTER THE SLAVE CORRECTLY AND RE-INAUGURATE
      </div>
    </div>
  )
}

const InaugurationSuccess = ({ setcurrentDiv }) => {
  const handleSuccess = () => {
    setcurrentDiv('inaugurationHome')
  }
  return (
    <div className={classes.insuccesorfail}>
      <div onClick={() => { handleSuccess() }} className={classes.insuccesorfailstatus} style={{ background: 'white', color: 'black', border: '0.4vh solid black' }}>
        BP CONTINUITY CHECKED
      </div>
      <div className={classes.insuccesorfailResult} style={{ background: 'rgba(40, 167, 69, 1)' }}>
        <div>
          INAUGURATION
        </div>
        <div>
          SUCCESSFULL
        </div>
      </div>
      <div className={classes.insuccesorfailinfo}>
      </div>
      <div className={classes.insuccesorfailinfo} style={{ fontWeight: 700, fontSize: '3vh' }}>
        LOCO “31284” IS IN “MASTER” MODE
      </div>
    </div>
  )
}

const InaugurationHome = ({ setcurrentDiv, setPage }) => {
  const { network_icon, enter_icon_a } = Icons.DDUIcons;
  const [currentButton, setCurrentButton] = useState('ENTER')
  const handleok = () => {
    setPage('inaugurationScreen')
  }
  const buttons = [
    {
      id: 1,
      lable: 'MODES'
    },
    {
      id: 2,
      lable: 'REBOOT'
    },
    {
      id: 3,
      lable: 'NEUTRAL SECTION'
    },
    {
      id: 4,
      lable: 'PANTO LOW'
    },
    {
      id: 5,
      lable: 'MENU'
    },
    {
      id: 6,
      lable: 'ENTER',
      icon: enter_icon_a
    }
  ]

  const headers = [
    {
      id: 1,
      lable: 'LOCONO'
    },
    {
      id: 2,
      lable: 'NODE'
    },
    {
      id: 3,
      lable: 'PANTO'
    },
    {
      id: 4,
      lable: 'VCB'
    },
    {
      id: 5,
      lable: 'TE/BE'
    },
    {
      id: 6,
      lable: 'SPEED'
    },
    {
      id: 7,
      lable: 'MR/FP'
    },
    {
      id: 8,
      lable: 'BP'
    },
    {
      id: 9,
      lable: 'BC1/BC2'
    },
    {
      id: 10,
      lable: 'PARKING B'
    },
    {
      id: 11,
      lable: 'AIRFLOW'
    }
  ]

  const masterSlavedata = [
    {
      id: 1,
      lable: 'MASTER',
      data: [
        {
          id: 1,
          lable: 'LOCONO',
          value: '31282'
        },
        {
          id: 2,
          lable: 'NODE',
          value: '596'
        },
        {
          id: 3,
          lable: 'PANTO',
          value: 'UP'
        },
        {
          id: 4,
          lable: 'VCB',
          value: 'ON'
        },
        {
          id: 5,
          lable: 'TE/BE',
          value: '25'
        },
        {
          id: 6,
          lable: 'SPEED',
          value: '5'
        },
        {
          id: 7,
          lable: 'MR/FP',
          value: '8.2/6'
        },
        {
          id: 8,
          lable: 'BP',
          value: '5.1',

        },
        {
          id: 9,
          lable: 'BC1/BC2',
          value: '0.0/0.0'
        },
        {
          id: 10,
          lable: 'PARKING B',
          value: '6.2'
        },
        {
          id: 11,
          lable: 'AIRFLOW',
          value: '6.0'
        }
      ]
    },
    {
      id: 2,
      lable: 'SLAVE-1',
      data: [
        {
          id: 1,
          lable: 'LOCONO',
          value: '31282'
        },
        {
          id: 2,
          lable: 'NODE',
          value: '596'
        },
        {
          id: 3,
          lable: 'PANTO',
          value: 'UP'
        },
        {
          id: 4,
          lable: 'VCB',
          value: 'ON'
        },
        {
          id: 5,
          lable: 'TE/BE',
          value: '25'
        },
        {
          id: 6,
          lable: 'SPEED',
          value: '5'
        },
        {
          id: 7,
          lable: 'MR/FP',
          value: '8.2/6'
        },
        {
          id: 8,
          lable: 'BP',
          value: '5.1',

        },
        {
          id: 9,
          lable: 'BC1/BC2',
          value: '0.0/0.0'
        },
        {
          id: 10,
          lable: 'PARKING B',
          value: '6.2'
        },
        {
          id: 11,
          lable: 'AIRFLOW',
          value: '6.0'
        }
      ]
    },
    {
      id: 3,
      lable: 'SLAVE-2',
      data: [
        {
          id: 1,
          lable: 'LOCONO',
          value: '31282'
        },
        {
          id: 2,
          lable: 'NODE',
          value: '596'
        },
        {
          id: 3,
          lable: 'PANTO',
          value: 'UP'
        },
        {
          id: 4,
          lable: 'VCB',
          value: 'ON'
        },
        {
          id: 5,
          lable: 'TE/BE',
          value: '25'
        },
        {
          id: 6,
          lable: 'SPEED',
          value: '5'
        },
        {
          id: 7,
          lable: 'MR/FP',
          value: '8.2/6'
        },
        {
          id: 8,
          lable: 'BP',
          value: '5.1',

        },
        {
          id: 9,
          lable: 'BC1/BC2',
          value: '0.0/0.0'
        },
        {
          id: 10,
          lable: 'PARKING B',
          value: '6.2'
        },
        {
          id: 11,
          lable: 'AIRFLOW',
          value: '6.0'
        }
      ]
    },
    {
      id: 4,
      lable: 'SLAVE-3',
      data: [

      ]
    },
    {
      id: 5,
      lable: 'SLAVE-4',
      data: [

      ]
    }
  ]

  return (
    <div className={classes.ih_layout}>
      <div className={classes.ih_layout_sectionA}>


        <div className={classes.sA_partA}>


          <div className={classes.sA_partA_columns}>
            <div className={classes.sA_partA_columns_header}>
              <div className={classes.syn}>
                SYN
              </div>
            </div>

            <div className={classes.sA_partA_columns_content}>

              {
                headers.map((x) => {
                  return (
                    <div className={classes.columns_contentkey}>
                      {x.lable}
                    </div>
                  )
                })
              }

            </div>
          </div>


        {
          masterSlavedata.map((x) => {
            return(
              <div className={classes.sA_partA_columns}>
              <div className={classes.sA_partA_columns_header}>
                <div className={classes.dataHeader}>
                  {x.lable}
                </div>
              </div>
  
              <div className={classes.dataContent}>
  
                {
                  x.data.map((x) => {
                    return (
                      <div className={classes.columns_contentkey} style={{ 'justify-content': 'center' }}>
                        {x.value}
                      </div>
                    )
                  })
                }
  
              </div>
            </div>
            )
          })
        }
        </div>


        <div className={classes.sA_partB}>
          <div className={classes.sA_partB_buttons}>
            {
              buttons.map((x) => {
                return (
                  <div onClick={() => { setCurrentButton(x.lable) }} style={currentButton === x.lable ? { background: 'rgba(229, 57, 53, 1)' } : {}} className={classes.sA_partB_button}>
                    {x.lable}
                    {x.icon ? <img src={x.icon} /> : null}
                  </div>
                )
              })
            }
          </div>
          <div className={classes.sA_partB_network}>
            <img src={network_icon} />
          </div>
        </div>
      </div>
      <div className={classes.ih_layout_sectionB}>
        <div className={classes.sB_part} style={{ width: '80%', justifyContent: 'left', paddingLeft: '2vh' }}>
          STATUS MESSAGE / FAULT MESSAGE OF SLAVES / SANDING VALUE STATUS
        </div>
        <div style={{ width: '1%' }}>

        </div>
        <div onClick={() => { handleok() }} className={classes.sB_part} style={{ width: '19%' }}>
          STATUS/FAULT
        </div>
        <div>

        </div>
      </div>
      <div className={classes.ih_layout_sectionC}>
        <CommissionDataContainer />
      </div>
    </div>
  )

}

const CommissionDataContainer = () => {
  const { opt_right_arrow, opt_top_button, opt_bottom_button, opt_home_button, opt_clr_button, opt_ent_button ,clr_a_icon} = Icons.DDUIcons;
  const options = [
    {
      id: 1,
      lable: '1:VEHICLE DIAGNOSTICS',
      selected: true
    },
    {
      id: 1,
      lable: '2:INFORMATION TRAIN BUSCS',
      selected: false
    },
    {
      id: 1,
      lable: '3:PROCESS INFORMATION',
      selected: false
    }
  ]
  const optionHandleButtons = [
    {
      id: 1,
      lable: '',
      icon: null
    },
    {
      id: 2,
      lable: '',
      icon: opt_top_button
    },
    {
      id: 3,
      lable: '',
      icon: ''
    },
    {
      id: 4,
      lable: '',
      icon: opt_home_button
    },
    {
      id: 5,
      lable: '',
      icon: clr_a_icon
    },
    {
      id: 6,
      lable: '',
      icon: opt_ent_button
    },
    {
      id: 7,
      lable: '',
      icon: ''
    },
    {
      id: 8,
      lable: '',
      icon: opt_bottom_button
    },
    {
      id: 9,
      lable: '',
      icon: ''
    },
  ]
  return (
    <div className={classes.comm_container}>
      <div className={classes.cm_c_a}>
        <div className={classes.cm_c_a_row}>
          <div className={classes.cm_c_a_row_img}>

          </div>
          <div className={classes.cm_c_a_row_content} style={{ fontWeight: 700 }}>
            COMMISSIONING DATA:
          </div>
        </div>
        {
          options.map((x) => {
            return (
              <div className={classes.cm_c_a_row}>
                <div className={classes.cm_c_a_row_img}>
                  {x.selected ? <img src={opt_right_arrow} /> : null}
                </div>
                <div className={classes.cm_c_a_row_content}>
                  {x.lable}
                </div>
              </div>
            )
          })
        }
      </div>
      <div className={classes.cm_c_b}>
        LOCO  31234
      </div>
      <div className={classes.cm_c_c}>
        <div className={classes.optionsbuttonscontainer}>
          {
            optionHandleButtons.map((x) => {
              return (
                <div className={classes.opt_button}>
                  {x.icon ? <img src={x.icon} /> : null}
                </div>
              )
            })

          }
        </div>
      </div>
    </div>
  )
}