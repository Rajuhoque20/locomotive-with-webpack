import React, { useState } from 'react'
import './ExcercisePanelTrainConfig.css'
import ButtonComp from '../../../../../../components/Instructor-station/UIComp/ButtonComp';
import ImageLabelCard from '../../../../../../components/Instructor-station/UIComp/ImageLabelCard'
import InputSelect from '../../../../../../components/Instructor-station/UIComp/InputSelect';
import Dropdown from '../../../../../../components/Instructor-station/UIComp/DropDownMenu'
import RangePicker from '../../../../../../components/Instructor-station/UIComp/RangePicker'
import { Icons } from '#framework'
import { CustomSwitch } from '../../../LiveSimulator/SimulatorPage/Simulation/LiveSimulationManagement';
import { useExerciseStore } from '../../store';
import classes from './excercisepage.module.css'
const ExcercisePanelTrainConfig = () => {
  const { loco_icon, loco_type_icon, loco_add_icon, loco_setting_icon, bell_icon,
    rake_icon, left_arrow, settings_icon, train1, train2, train3, passangerTrack,
    goodsTrack, loco_png, coach_png, locoHead_icon, locoCoach_icon, dds_icon, wiper_icon,
    playb2,
    bulb_icon, trainendicon
  } = Icons.ISIcons
  const [activeAction, setActiveAction] = useState('')
  const handleAction = (activeAction) => {
    setActiveAction(activeAction)
  }
  const handleBacksettings = () => {
    setActiveAction('')
  }
  const locohead = [
    {
      id: 1,
      label: 'WAP 7',
      icon: train1,
    },
    {
      id: 2,
      label: 'WAP 8',
      icon: train2,
    },
    {
      id: 3,
      label: 'WAG 9',
      icon: train3,
    }
  ]
  const trainType = [
    {
      id: 1,
      label: 'Passanger',
      icon: passangerTrack,
    },
    {
      id: 2,
      label: 'Goods',
      icon: goodsTrack,
    }


  ]
  const actions = [
    {
      title: 'Head Locomotive',
      icon: loco_icon
    },
    {
      title: 'Train Type',
      icon: loco_type_icon
    },
    {
      title: 'Add Composition',
      icon: loco_add_icon
    },
    {
      title: 'Locomotive Settings',
      icon: loco_setting_icon
    },
  ]
  const compostionformsData = [
    {
      title: 'Coach Type',
      rightcompdivs: [
        {
          type: 'dropdown',
          height: '5vh',
          width: '12vw'
        }
      ]
    },
    {
      title: 'Load',
      rightcompdivs: [
        {
          type: 'rangepicker',
          height: '4vh',
          width: '13vw'
        },
        {
          type: 'inputselect',
          height: '6vh',
          width: '7vw'
        }
      ]
    },
    {
      title: 'Quantity',
      rightcompdivs: [
        {
          type: 'rangepicker',
          height: '4vh',
          width: '13vw'
        },
        {
          type: 'inputselect',
          height: '6vh',
          width: '7vw'
        }
      ]
    }
  ]
  const locosettingForms = [
    {
      icon: loco_setting_icon,
      title: 'Track Adhesion Controls',
      subtitle: 'Optimize traction',
      rightcompdivs: [
        {
          type: 'rangepicker',
          height: '4vh',
          width: '13vw'
        },
        {
          type: 'inputselect',
          height: '6vh',
          width: '7vw'
        }
      ]
    },
    {
      icon: loco_setting_icon,
      title: 'Hauling Power',
      subtitle: 'Adjust for terrain and cargo weight',
      rightcompdivs: [
        {
          type: 'rangepicker',
          height: '4vh',
          width: '13vw'
        },
        {
          type: 'inputselect',
          height: '6vh',
          width: '7vw'
        }
      ]
    },
    {
      icon: loco_setting_icon,
      title: 'Rate of BP',
      subtitle: 'Balance brake force with train weight',
      rightcompdivs: [
        {
          type: 'rangepicker',
          height: '4vh',
          width: '13vw'
        },
        {
          type: 'inputselect',
          height: '6vh',
          width: '7vw'
        }
      ]
    },
    {
      icon: loco_setting_icon,
      title: 'Rate of MR',
      subtitle: 'Efficient energy use',
      rightcompdivs: [
        {
          type: 'rangepicker',
          height: '4vh',
          width: '13vw'
        },
        {
          type: 'inputselect',
          height: '6vh',
          width: '7vw'
        }
      ]
    },
    {
      icon: loco_setting_icon,
      title: 'Rate of BP',
      subtitle: 'Balance brake force with train weight',
      rightcompdivs: [
        {
          type: 'rangepicker',
          height: '4vh',
          width: '13vw'
        },
        {
          type: 'inputselect',
          height: '6vh',
          width: '7vw'
        }
      ]
    }

  ]

  const locosettingSwitchForms = [
    {
      icon: loco_setting_icon,
      title: 'Broken Window',
      subtitle: 'Damaged front wondow of the locomotive',
      rightcompdivs: [
        {
          type: 'switch',
          height: '4vh',
          width: '3vw'
        }
      ]
    },
    {
      icon: bulb_icon,
      title: 'Headlight',
      subtitle: 'Manage the operation of your headlight',
      rightcompdivs: [
        {
          type: 'switch',
          height: '4vh',
          width: '3vw'
        }
      ]
    },
    {
      icon: wiper_icon,
      title: 'Wiper',
      subtitle: 'Operate and adjust the wipers to maintain clear visibility',
      rightcompdivs: [
        {
          type: 'switch',
          height: '4vh',
          width: '3vw'
        }
      ]
    }

  ]
  const trainCompo = [
    {
      label: 'Loco',
      icon: loco_png
    },
    {
      label: 'Coach',
      icon: coach_png
    },
    {
      label: 'Train End',
      icon: trainendicon
    }
  ]
  const trainandtrack = [

  ]

 const trainEndData = [
  {
    title: 'Train End Moitering Mode',
    subtitle:'Choose the interface for control and monitoring.',
    icon:playb2,
    rightcompdivs: [
      {
        type: 'dropdown',
        height: '5vh',
        width: '12vw'
      }
    ]
  },
 ]



  const [headLoco, setHeadLooco] = useState();
  const [coach, setCoach] = useState()
  const [saveCoach, setSaveCoach] = useState(false)
  const [trainCoach, setTrainCoach] = useState([])
  const [compositionType, setcompositionType] = useState('Loco')
  const [trainConfigPayload, settrainConfigPayload] = useState({
    actions: actions,
    headLocoData: {
      loco: null
    },
    trainTypeData: {
      trainType: null
    }
  });
  console.log("headLoco", headLoco)
  const headLocomotivesavechange = (type) => {
    if (headLoco && type === 'train') {
      setTrainCoach([...trainCoach, {
        id: headLoco.id,
        type: type,
        label: headLoco.label,
        icon: headLoco.icon
      }])
      settrainConfigPayload((prevState) => ({
        ...prevState,
        headLocoData: {
          ...prevState.headLocoData,
          loco: headLoco
        }
      }));
      console.log('pushed')
    }
    if (coach && type === 'coach') {
      setTrainCoach([...trainCoach, {
        id: coach.id,
        type: type,
        label: coach.label,
        icon: coach.icon
      }])
    }
    setHeadLooco(null)
  }

  // const coach
  const selectTrain = (x) => {
    console.log('train selected')
    setHeadLooco(x)
    trainConfigPayload['actions'].find(x => x.title === 'Head Locomotive')['icon'] = x.icon;
    settrainConfigPayload((prev) => ({ ...prev, actions: trainConfigPayload['actions'] }));
  }
  const selectCoach = (x) => {
    console.log('coach selected')
    trainConfigPayload['actions'].find(x => x.title === 'Train Type')['icon'] = x.icon;
    settrainConfigPayload((prev) => ({ ...prev, actions: trainConfigPayload['actions'] }))
    setCoach(x)
  }
  const handlwsaveCoach = (x) => {
    console.log('coach saved')
    setSaveCoach(x)
    settrainConfigPayload((prevState) => ({
      ...prevState,
      trainTypeData: {
        ...prevState.trainTypeData,
        trainType: coach
      }
    }));
  }
  const selectComposition = (x) => {
    setcompositionType(x)
  }
  console.log('trainConfigPayload', trainConfigPayload)

  const length = ['0m', '50m', '100m', '150m', '200m', '250m', '350m', '400m', '450m']
  return (
    <div className='ep_tc_main_div'>
      <div className='train_sttings_div'>
        <div className={activeAction === '' ? 'setting_div' : 'normal_setting_div'}>
          {
            activeAction === '' ? trainConfigPayload.actions?.map(x => {
              return (
                <div className='setting_actions' onClick={() => { handleAction(x.title) }}>
                  <div className='action_img_div'> <img src={x.icon} /> </div>
                  <div className='action_title_div'> {x.title} </div>
                </div>
              )
            }) : ''
          }
          {
            activeAction === 'Head Locomotive' ?
              <div className='h_l_div'>

                <div className='h_l_header'>
                  <ButtonComp onClick={() => { handleBacksettings() }} prefixIcon={left_arrow} title={'Back'} bntStyle={{ width: "6vw", height: "5.7vh", color: "white", background: 'rgba(255, 255, 255, 0.512)', 'font-size': 'var(--font-size-3)', 'border-radius': '1vh' }} ></ButtonComp>
                  <div className='head_text'>Head Locomotive</div>
                  <img src={settings_icon} />
                  <div style={{ width: "100%", border: "0.1vh solid rgba(255, 255, 255, 0.512)", height: '0.1vh' }}> </div>
                </div>

                <div className='h_l_content'>
                  {
                    locohead?.map(x => {
                      return (
                        <ImageLabelCard handleClick={() => { selectTrain(x) }} id={x.id} label={x.label} icon={x.icon} selected={(headLoco && x.id === headLoco.id) || (trainConfigPayload?.headLocoData?.loco?.id === x.id) ? true : false} />
                      )
                    })
                  }
                </div>
                <div className='h_l_footer'>
                  {/* <ButtonComp onClick={() => { headLocomotivesavechange('train') }} title={'Save Changes'} bntStyle={{ width: "11vw", height: "6vh", "border-radius": "1vh", "color": "white", background: "rgba(255, 255, 255, 0.512)", 'font-size': 'var(--font-size-3)' }} /> */}
                  <button onClick={() => { headLocomotivesavechange('train') }} className={`${classes.saveChanges} ${trainConfigPayload?.headLocoData?.loco ? `${classes.saveChangesActive}` : ''}`}>Save Changes</button>
                  <ButtonComp onClick={() => { handleBacksettings() }} title={'Cancel'} bntStyle={{ width: "7vw", height: "6vh", "border-radius": "1vh", "color": "white", background: "rgba(255, 255, 255, 0.512)", 'font-size': 'var(--font-size-3)' }} />
                </div>
              </div>
              : ''
          }
          {
            activeAction === 'Train Type' ?
              <div className='h_l_div'>
                <div className='h_l_header'>
                  <ButtonComp onClick={() => { handleBacksettings() }} prefixIcon={left_arrow} title={'Back'} bntStyle={{ width: "6vw", height: "5.7vh", color: "white", background: 'rgba(255, 255, 255, 0.512)' }}></ButtonComp>
                  <div className='head_text'>Select Train Type</div>
                  <img src={settings_icon} />
                  <div style={{ width: "100%", border: "1px solid rgba(255, 255, 255, 0.512)" }}> </div>
                </div>
                <div className='h_l_content'>
                  {
                    trainType?.map(x => {
                      return (
                        <ImageLabelCard handleClick={() => { selectCoach(x) }} id={x.id} label={x.label} icon={x.icon} selected={coach && x.id === coach.id ? true : false} />
                      )
                    })
                  }
                </div>
                <div className='h_l_footer'>
                  {/* <ButtonComp onClick={() => { handlwsaveCoach(true) }} title={'Save Changes'} bntStyle={{ width: "11vw", height: "6vh", "border-radius": "1vh", "color": "white", background: "rgba(255, 255, 255, 0.512)", 'font-size': 'var(--font-size-3)' }} /> */}
                  <button onClick={() => { handlwsaveCoach(true) }} className={`${classes.saveChanges} ${saveCoach ? `${classes.saveChangesActive}` : ''}`}>Save Changes</button>
                  <ButtonComp onClick={() => { handleBacksettings() }} title={'Cancel'} bntStyle={{ width: "7vw", height: "6vh", "border-radius": "1vh", "color": "white", background: "rgba(255, 255, 255, 0.512)", 'font-size': 'var(--font-size-3)' }} />

                </div>
              </div> : ''
          }
          {
            activeAction === 'Add Composition' ?
              <div className='h_l_div'>
                <div className='h_l_header'>
                  <ButtonComp onClick={() => { handleBacksettings() }} prefixIcon={left_arrow} title={'Back'} bntStyle={{ width: "6vw", height: "5.7vh", color: "white", background: 'rgba(255, 255, 255, 0.512)' }}></ButtonComp>
                  <div className='head_text'>Add Composition</div>
                  <img src={settings_icon} />
                  <div style={{ width: "100%", border: "1px solid rgba(255, 255, 255, 0.512)" }}> </div>
                </div>


                <div className='normal_h_l_content'>
                  <div className='compos_lable'>
                    {
                      trainCompo?.map(x => {
                        return (
                          <SmallImageLableComp selected={compositionType === x.label ? true : false} label={x.label} icon={x.icon} handleClick={() => { selectComposition(x.label) }} />
                        )
                      })
                    }
                  </div>
                  {
                  <div className={compositionType === 'Loco' ? 'compos_formsdisabled' : 'compos_forms'}>
                      {
                       (compositionType === 'Loco' ||  compositionType === 'Coach')  && compostionformsData?.map(x => {
                          return (
                            <TrainSettingForms title={x.title} rightcompdivs={x.rightcompdivs} />
                          )
                        })
                      }
                      {
                       compositionType === 'Train End' && trainEndData.map(x => {
                          return (
                            <TrainSettingForms title={x.title} subtitle={x.subtitle} icon={x.icon}  rightcompdivs={x.rightcompdivs} />
                          )
                        })
                      }
                    </div>
                  }

                </div>


                <div className='h_l_footer'>
                  <ButtonComp onClick={() => { headLocomotivesavechange('coach') }} title={'Add'} bntStyle={{ width: "5vw", height: "5.7vh", "border-radius": "1vh", "color": "white", background: "rgba(255, 255, 255, 0.512)" }} />
                  <ButtonComp onClick={() => { handleBacksettings() }} title={'Cancel'} bntStyle={{ width: "7vw", height: "5.7vh", "border-radius": "1vh", "color": "white", background: "rgba(255, 255, 255, 0.512)" }} />
                </div>
              </div> : ''
          }

          {
            activeAction === 'Locomotive Settings' ?
              <div className='h_l_div'>
                <div className='h_l_header' >
                  <ButtonComp onClick={() => { handleBacksettings() }} prefixIcon={left_arrow} title={'Back'} bntStyle={{ width: "6vw", height: "5.7vh", color: "white", background: 'rgba(255, 255, 255, 0.512)' }}></ButtonComp>
                  <div className='head_text'>Locomotive Settings</div>
                  <img src={settings_icon} />
                  <div style={{ width: "100%", border: "0.1vh solid rgba(255, 255, 255, 0.512)" }}> </div>
                </div>


                <div className='normal_h_l_content'>

                  <div className='loco_setting_forms'>

                    <div style={{ height: 'auto', width: 'auto' }}>
                      <TrainSettingForms icon={dds_icon} subtitle={'Choose the interface for control and monitoring.'} title={'DDS Type'} rightcompdivs={[{
                        type: 'dropdown',
                        height: '6vh',
                        width: '10vw'
                      }]} />
                    </div>


                    <div style={{ height: 'auto', width: 'auto' }}>
                      {
                        locosettingForms?.map(x => {
                          return (
                            <TrainSettingForms icon={x.icon} title={x.title} subtitle={x.subtitle} rightcompdivs={x.rightcompdivs} />
                          )
                        })
                      }
                    </div>

                    <div style={{ height: 'auto', width: 'auto' }}>
                      {
                        locosettingSwitchForms?.map(x => {
                          return (
                            <TrainSettingForms icon={x.icon} title={x.title} subtitle={x.subtitle} rightcompdivs={x.rightcompdivs} />
                          )
                        })
                      }
                    </div>

                  </div>
                </div>


                <div className='h_l_footer'>
                  <ButtonComp title={'Save Changes'} bntStyle={{ width: "11vw", height: "6vh", "border-radius": "1vh", "color": "white", background: "rgba(255, 255, 255, 0.512)", 'font-size': 'var(--font-size-3)' }} />
                  <ButtonComp onClick={() => { handleBacksettings() }} title={'Cancel'} bntStyle={{ width: "7vw", height: "6vh", "border-radius": "1vh", "color": "white", background: "rgba(255, 255, 255, 0.512)", 'font-size': 'var(--font-size-3)' }} />

                </div>
              </div> : ''
          }
        </div>
        <div className='setting_info_div'>

          <div className='setting_info_table'>
            <SettingTableComp />
          </div>

          <div className='si_footer'>
            <div className='si_footer_left'>
              <div className='si_footer_left_info'>
                <img src={bell_icon} />
                Load
              </div>
            </div>
            <div className='si_footer_right'>
              <div className='si_footer_right_info'>
                0 Tonnes
              </div>
            </div>
          </div>


          <div className='si_footer'>
            <div className='si_footer_left'>
              <div className='si_footer_left_info'>
                <img src={rake_icon} />
                Rake
              </div>
            </div>
            <div className='si_footer_right'>
              <div className='si_footer_right_info'>
                0 Coaches
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='trainconfig_footer'>
        <div className='trainView'>
          <div style={{ height: "1vh" }}>

          </div>
          <div className='trackview' >
            <div className='meterdiv'>

              {length?.map((item, index) => {
                return (
                  <>
                    <label>{item}</label>
                    <BoxComp />
                  </>
                )
              })}

            </div>
            <div className='traindiv'>
              {/* <img src={locoHead} />
              <img src={locoCoach} /> */}
              {
                trainCoach.map((x) => {
                  return (
                    <div>
                      {x.type === 'train' ? <img src={locoHead_icon} /> : <img src={locoCoach_icon} />}
                    </div>
                  )

                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExcercisePanelTrainConfig;


const SettingTableComp = (data) => {
  const { add_icon } = Icons.ISIcons;
  data = [
    {
      rc1: 'Head',
      rc2: 'WAP 7',
      rc3: 'Full',
      rc4: ''
    }
  ]
  return (
    <div className='si_table_view'>
      <div className='si_table_view_head'>
        <TableRowview rc1={'Position'} rc2={'Name'} rc3={'Load'} rc4={<ButtonComp prefixIcon={add_icon} bntStyle={{ height: "3.79vh", width: "3.79vh", background: "none" }} />} />
      </div>
      <div className='si_table_view_row_div'>
        {data?.map(x => {
          return (
            <div className='row_view'>
              <TableRowview rc1={x.rc1} rc2={x.rc2} rc3={x.rc3} rc4={x.rc4} />
            </div>
          )
        })}

      </div>
    </div>
  )
}

const TableRowview = ({ rc1, rc2, rc3, rc4 }) => {
  return (
    <div className='si_row'>
      <div className='rc1'>
        {rc1}
      </div>
      <div className='rc2'>
        {rc2}
      </div>
      <div className='rc3'>
        {rc3}
      </div>
      <div className='rc4'>
        {rc4}
      </div>
    </div>
  )
}


const BoxComp = () => {
  return (
    <>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </>
  )
}

const SmallImageLableComp = ({ label, icon, handleClick = () => { }, selected }) => {
  return (
    <div onClick={handleClick} style={selected ? { border: '0.15vh solid rgb(255, 255, 255)' } : {}} className='s_img_div'>
      <img src={icon} />
      <div className='s_img_lable'>
        {label}
      </div>
    </div>
  )
}

const TrainSettingForms = ({ title, subtitle, icon, leftcomp, rightcompdivs }) => {
  return (
    <div className='t_s_f'>
      <div className='t_s_f_left'>
        {
          icon ? <img src={icon} /> : ''
        }
        <div className='t_s_f_titles'>
          <div className='t_s_f_title'>
            {title ? title : 'Title'}
          </div>
          <div className='t_s_f_subtitle'>
            {subtitle ? subtitle : ''}
          </div>
        </div>
      </div>
      <div className='t_s_f_right'>
        {
          rightcompdivs?.map(x => {
            return (
              <div style={{ height: `${x.height}`, width: `${x.width}`, display: 'flex', alignItems: 'center', display: 'flex', justifyContent: 'right' }}>
                {
                  x.type === 'dropdown' ? <Dropdown options={['Passenger', 'Goods']} dropdownStyle={{ width: `${x.width}` }} /> :
                    x.type === 'inputselect' ? <InputSelect /> :
                      x.type === 'rangepicker' ? <RangePicker /> :
                        x.type === 'switch' ? <CustomSwitch /> : null
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}



