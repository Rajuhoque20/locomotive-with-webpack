


import React, { act, useEffect } from "react";
import { useState } from "react";
import RangePicker from "../../../../../../components/Instructor-station/UIComp/RangePicker";
import InputSelect from "../../../../../../components/Instructor-station/UIComp/InputSelect";
import classes from "./simulation.module.css";
// import { SwitchCard } from "../../../../pages/newExercise/TrainConfig";
import { SwitchCard } from '../../../../newExercise/TrainConfig';
import './LiveSimulationManagement.css'
import { Icons } from "#framework";
import { useSimulatorStore } from "../../simulator-store";
import websocket from "../../../../../../services/Websocket";
import ButtonComp from "../../../../../../components/Instructor-station/UIComp/ButtonComp";
export default function LiveSimulationManagement({ drag }) {


  const { tabs, activeTab } = useSimulatorStore(state => state);
  const activedata = tabs?.find(x => x.path === activeTab);
  const [updateTrigger, setUpdateTrigger] = useState(false)
  const [sosData, setSOSData] = useState({
    stationary: false,
    loco: false
  })
  const [trigger, setTrigger] = useState()
  const mdata = activedata?.content?.management;
  // console.log('mdata', mdata)
  const [managementProps, setManagementProps] = useState({
    sunGlare: false,
    rain: 0,
    lighting: false,
    brokenWindow: false,
    headLight: false,
    wiper: false,
    fogLevel: 0,
    adhesion: 0,
    hauling: 0,
    bp: 0,
    mr: 0,
    breakPower: 0,
    pressureBp: false,
    pressureMr: false,
    windDirection: 0,
    windVelocity: 0,
    pressure: false,
    sectionalSpeed: 0

  })

  // "sun_Glare": false,
  // "rain": 0,
  // "fog_level": 0,
  // "lightning": false,
  // "broken_glass": false,
  // "headlight": false,
  // "wiper": false,
  // "track_adhesion": 0,
  // "hauling_power": 0,
  // "rate_of_bp": 0,
  // "rate_of_mr": 0,
  // "brake_power": 0,
  // "bp_pressure_buildup": false,
  // "mr_pressure_buildup": false,
  // "sectional_speed_limt": 80

  useEffect(() => {
    setManagementProps({
      sunGlare: mdata?.sun_Glare,
      rain: mdata?.rain,
      lighting: mdata?.lightning,
      brokenWindow: mdata?.broken_glass,
      headLight: mdata?.headlight,
      wiper: mdata?.wiper,
      fogLevel: mdata?.fog_level,
      sectionalSpeed: mdata?.sectional_speed_limit,
      adhesion: mdata?.track_adhesion,
      hauling: mdata?.hauling_power,
      bp: mdata?.rate_of_bp,
      mr: mdata?.rate_of_mr,
      breakPower: mdata?.brake_power,
      pressureBp: mdata?.bp_pressure_buildup,
      pressureMr: mdata?.mr_pressure_buildup,
    })
  }, [mdata])
  console.log('newm'.mdata)

  const updateSos = (sos) => {
    setSOSData(prev => {
      const isAlreadyTrue = prev[sos];

      if (isAlreadyTrue) {
        return { stationary: false, loco: false };
      }
      return {
        stationary: sos === 'stationary',
        loco: sos === 'loco'
      };
    });
  };


  const sendToSocket = () => {
    websocket.send('sessionManagement_management_by_id', "subscribe", {
      sessionId: activedata?.content?.sessionId, management: {
        sun_Glare: managementProps.sunGlare,
        rain: managementProps.rain,
        fog_level: managementProps.fogLevel,
        lightning: managementProps.lighting,
        broken_glass: managementProps.brokenWindow,
        headlight: managementProps.headLight,
        wiper: managementProps.wiper,
        track_adhesion: managementProps.adhesion,
        hauling_power: managementProps.hauling,
        rate_of_bp: managementProps.bp,
        rate_of_mr: managementProps.mr,
        brake_power: managementProps.breakPower,
        bp_pressure_buildup: managementProps.pressureBp,
        mr_pressure_buildup: managementProps.pressureMr,
        sectional_speed_limit: managementProps.sectionalSpeed

      }
    });
    setUpdateTrigger(false)
  }


  useEffect(() => {

    if (updateTrigger) {
      sendToSocket()
    }


  }, [updateTrigger])




  const { rain_icon, sun_glare_icon, thunder_icon, damage_icon, light_icon, wiper_icon, arrow_str_icon, eye_icon, direction_icon, velocity_icon ,tachometer_icon, fogsvg, emergencyIcon, selected_radio_icon, unselected_radio_icon,greencheck,ClearIcon } = Icons.ISIcons;
  const ControlData = [
    {
      id: 1,
      title: "Track Adhesion Control",
      subTitle: "Optimize traction",
      minRange: 0,
      maxRange: 5,
      stepLength: 1,
      defaultValue: 3,
      icon: ''
    },
    {
      id: 2,
      title: "Hauling Power",
      subTitle: "Adjust for terrain and cargoeight",
      minRange: 0,
      maxRange: 15,
      stepLength: 1,
      defaultValue: 9,
      icon: ''
    },
    {
      id: 1,
      title: "Rate of BP",
      subTitle: "Balance brake force with trainweight",
      minRange: 0,
      maxRange: 25,
      stepLength: 1,
      defaultValue: 5,
      icon: ''
    },
  ];
  const sampleData1 = [
    {
      id: 1,
      title: 'Sun Glare',
      subTitle: "Toggle on for brighter experience or off for more subdued",
      enable: managementProps.sunGlare,
      icon: sun_glare_icon,
      key: 'sunGlare'
    },
    {
      id: 2,
      title: 'Rain',
      subTitle: "Set  Rain Intensity",
      enable: managementProps.rain,
      icon: rain_icon,
      key: 'rain',
      components: [
        {
          type: 'range',
          function: ''
        },
        {
          type: 'inputselect',
          function: '',
          guage: '%'
        }
      ]
    },
    {
      id: 3,
      title: 'Fog',
      subTitle: "Set Fog Levels",
      enable: managementProps.fogLevel,
      icon: fogsvg,
      key: 'fogLevel',
      components: [
        {
          type: 'range',
          function: ''
        },
        {
          type: 'inputselect',
          function: '',
          guage: '%'
        }
      ]
    },
    {
      id: 4,
      title: 'Lighting',
      subTitle: "Toggle on for a illuminated atmosphere or off for a softer",
      enable: managementProps.lighting,
      icon: thunder_icon,
      key: 'lighting'
    },
  ]
  const sampleData2 = [
    {
      id: 1,
      title: 'Broken Window',
      subTitle: "Damaged front window of locomotivd",
      enable: managementProps.brokenWindow,
      icon: damage_icon,
      key: 'brokenWindow'
    },
    {
      id: 2,
      title: 'Headlight',
      subTitle: "Manage the operation of headlight ",
      enable: managementProps.headLight,
      icon: light_icon,
      key: 'headLight'
    },
    {
      id: 3,
      title: 'Wiper',
      subTitle: "operate and  adjust wiper",
      enable: managementProps.wiper,
      icon: wiper_icon,
      key: 'wiper'
    },
  ]

  const rightsidecards = [
    {
      id: 1,
      title: 'Track Adhesion Controls',
      subTitle: "Optimize traction",
      enable: managementProps.adhesion,
      icon: fogsvg,
      key: 'adhesion',
      components: [
        {
          type: 'range',
          function: ''
        },
        {
          type: 'inputselect',
          function: '',
          guage: '%'
        }
      ]
    },
    {
      id: 2,
      title: 'Hauling Power',
      subTitle: 'Adjust for terrain and cargo weight',
      enable: managementProps.hauling,
      key: 'hauling',
      components: [
        {
          type: 'range',
          function: ''
        },
        {
          type: 'inputselect',
          function: '',
          guage: '%'
        }
      ]
    },
    {
      id: 3,
      title: 'Rate of BP',
      subTitle: "Balance brake force with train weight",
      enable: managementProps.bp,
      icon: fogsvg,
      key: 'bp',
      components: [
        {
          type: 'range',
          function: ''
        },
        {
          type: 'inputselect',
          function: '',
          guage: '%'
        }
      ]
    },
    {
      id: 4,
      title: 'Rate of MR',
      subTitle: 'Adjust for terrain and cargo weight',
      enable: managementProps.mr,
      key: 'mr',
      components: [
        {
          type: 'range',
          function: ''
        },
        {
          type: 'inputselect',
          function: '',
          guage: '%'
        }
      ]
    },
    {
      id: 5,
      title: 'Brake Power',
      subTitle: 'Fine-tune the brake strength',
      enable: managementProps.breakPower,
      key: 'breakPower',
      components: [
        {
          type: 'range',
          function: ''
        },
        {
          type: 'inputselect',
          function: '',
          guage: '%'
        }
      ]
    },
    {
      id: 6,
      title: 'Pressure build-up in BP',
      subTitle: "Accelerate the time of pressure build-up in the BP",
      enable: managementProps.pressureBp,
      icon: sun_glare_icon,
      key: 'pressureBp'
    },
    {
      id: 7,
      title: 'Pressure build-up in MR',
      subTitle: "Accelerate the time of pressure build-up in the MR",
      enable: managementProps.pressureMr,
      icon: sun_glare_icon,
      key: 'pressureMr'
    },
  ]


  useEffect(() => {
    console.log("managementProps", managementProps)

  }, [managementProps])
  const triggerFunction = () => {
    if(sosData.stationary){
      setTrigger('From Stationary')
    }
    if(sosData.loco){
      setTrigger('From other loco')
    }
    
  }
  return (
    <div className="live-sim-div" style={drag ? { height: '73vh' } : {}}>
      <div style={{ position: 'relative' }} className="live-sim-cards-container" >
        <div style={{ position: 'relative', gap: '1.5%' }} className="live-sim-left-cards">
          <div className='live-sim-left-cards-container' style={{ height: '33vh' }}>
            {sampleData1?.map((item, id) => {

              return (
                <SwitchCard style={{ height: '7.5vh' }} data={item} managementProps={managementProps} onChange={(key, value) => {
                  setManagementProps({
                    ...managementProps,
                    [item?.key]: value
                  })
                  setUpdateTrigger(true)
                }} img={item.icon} />
              )
            })}
          </div>
          <div className='live-sim-left-cards-container' style={{ height: '24vh' }}>
            {sampleData2?.map((item, id) => {

              return (
                <SwitchCard style={{ height: '7.3vh' }} data={item} onChange={(key, value) => {
                  setManagementProps({
                    ...managementProps,
                    [item?.key]: value

                  })
                  setUpdateTrigger(true)
                }} img={item.icon} />
              )
            })}
          </div>

          <div className="liveKavachAction">
            <div className="lkaIcon">
              <img src={emergencyIcon} />
            </div>
            <div className="lkamidaction">
              <div style={{ height: '50%', width: '100%', textAlign: 'left' }}>
                Kavach SOS
              </div>
              <div style={{ height: '50%', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'left' }}>
                <ButtonComp onClick={() => updateSos('stationary')} prefixIcon={sosData.stationary ? selected_radio_icon : unselected_radio_icon} title={'From Stationary'} bntStyle={{ width: '9vw', height: '4vh', background: 'none', color: 'rgba(255, 255, 255, 0.322)', fontSize: '1.7vh' }} imgstyle={{ height: '60%' }} />
                <ButtonComp onClick={() => updateSos('loco')} prefixIcon={sosData.loco ? selected_radio_icon : unselected_radio_icon} title={'From other loco'} bntStyle={{ width: '10vw', height: '4vh', background: 'none', color: 'rgba(255, 255, 255, 0.322)', fontSize: '1.7vh' }} imgstyle={{ height: '60%' }} />
              </div>
            </div>
            <div className="kavachTriggeraction">
              <ButtonComp onClick={() => triggerFunction()} title={'Trigger'} bntStyle={{ width: '6vw', height: '4.5vh', fontSize: '1.7vh' }} />
            </div>
          </div>

        </div>



        <div className="live-sim-right-cards">
          <div style={{ height: '86%' }} className="live-sim-right-cards_conatiner">
            {
              rightsidecards?.map((item, id) => {

                return (
                  <SwitchCard style={{ height: '7.5vh' }} data={item} managementProps={managementProps} onChange={(key, value) => {
                    setManagementProps({
                      ...managementProps,
                      [item?.key]: value
                    })
                    setUpdateTrigger(true)
                  }} img={item.icon} />
                )
              })
            }
            {
              <div className="cardForm" style={{ border: '0.1vh solid #c5deee2e', height: '7.5vh' }}>
                <div className="cardFormleft" style={{ width: "80%" }}>
                  <div className="cardForm_icon">
                    <img src={tachometer_icon} />
                  </div>
                  <div className="cardForm_titles" style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                    <div className="cardFormTitle">
                      Sectional Speed
                    </div>
                  </div>
                </div>
                <div className="cardFormright" style={{ width: '20%' }}>


                  <div style={{ width: "7.02vw" }}>
                    <InputSelect

                      guage={'km/h'}
                      propValue={managementProps?.sectionalSpeed}
                      handleValue={(val) => {
                        setManagementProps({
                          ...managementProps,
                          'sectionalSpeed': val
                        })
                        setUpdateTrigger(true)

                      }}
                    />
                  </div>
                </div>
              </div>
            }
          </div>
          {
            trigger &&
            <div className="triggerView">
                <div style={{height:'100%',width:'20%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <img style={{height:'80%',width:'100%'}} src={greencheck}/>
                </div>  
                <div className='triggerViewinfo'>
                    <div style={{width:'100%',height:'50%',color:'white',fontSize:'1.9vh',fontWeight:'500',display:'flex',alignItems:'center',justifyContent:'left',paddingLeft:'4%'}}>
                      SOS triggered
                    </div>
                    <div style={{width:'100%',height:'50%',color:'rgba(197, 222, 238, 0.43)',fontSize:'1.5vh',fontWeight:'500',display:'flex',justifyContent:'left',paddingLeft:'4%'}}>
                     
                      {
                        trigger
                      }
                    </div>
                </div>
                <div onClick={() => setTrigger(null) } style={{height:'100%',width:'20%',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}>
                    <img style={{height:'70%',width:'100%'}} src={ClearIcon}/>
                </div>  

            </div>
          }
          {/* <div className='live-sim-rightTop-cards-container'>
            <div className="cardForm">
              <div className="cardFormleft">
                <div className="cardForm_icon">
                  <img src={eye_icon} />
                </div>
                <div className="cardForm_titles" style={{ "width": "23.71vw" }}>
                  <div className="cardFormTitle">
                    Fog
                  </div>
                  <div className="cardFormSubTitle">
                    Set Fog levels </div>
                </div>
              </div>
              <div className="cardFormright">
                <div style={{ width: "13.25vw", marginLeft: "7.32vw" }}>
                  <RangePicker minRange={0} maxRange={100} defaultValue={2}
                    value={managementProps?.fogLevel}
                    onChange={(val) => {
                      setManagementProps({
                        ...managementProps,
                        'fogLevel': val
                      })
                      setUpdateTrigger(true)

                    }}
                  />
                </div>
                <div style={{ width: "7.02vw", marginLeft: "0.87vw" }}>
                  <InputSelect
                    guage={'%'}
                    propValue={managementProps?.fogLevel}
                    handleValue={(val) => {
                      setManagementProps({
                        ...managementProps,
                        'fogLevel': val
                      })
                      setUpdateTrigger(true)

                    }}


                  />
                </div>
              </div>
            </div>



            <div className="cardForm">
              <div className="cardFormleft">
                <div className="cardForm_icon">
                  <img src={direction_icon} />
                </div>
                <div className="cardFormTitle2">
                  Wind Direction
                </div>
              </div>
              <div className="cardFormright">
                <div style={{ height: "8vh", width: "3.33vw", display: 'flex', alignItems: 'center' }} >
                  <SliderIcon initialAngle={managementProps.windDirection}
                    onAngleChange={(val) => {
                      setManagementProps({
                        ...managementProps,
                        'windDirection': val
                      })
                      setUpdateTrigger(true)

                    }} />
                </div>
                <div style={{ width: "7.02vw" }}>
                  <InputSelect

                    guage={'°'}
                    propValue={managementProps?.windDirection}
                    handleValue={(val) => {
                      setManagementProps({
                        ...managementProps,
                        'windDirection': val
                      })
                      setUpdateTrigger(true)

                    }}

                  />
                </div>
              </div>
            </div>



            <div className="cardForm">
              <div className="cardFormleft">
                <div className="cardForm_icon">
                  <img src={velocity_icon} />
                </div>
                <div className="cardFormTitle2">
                  Wind Velocity
                </div>
              </div>
              <div className="cardFormright">
                <div style={{ width: "7.02vw" }}>
                  <InputSelect
                    guage={'km/h'}
                    propValue={managementProps?.windVelocity}
                    handleValue={(val) => {
                      setManagementProps({
                        ...managementProps,
                        'windVelocity': val
                      })
                      setUpdateTrigger(true)

                    }}

                  />
                </div>
              </div>


            </div>

          </div> */}

          {/* <div className='live-sim-rightBottom-cards-container'>


            <div className="cardForm" style={{ 'background-color': '#c5deee2e', borderRadius: '1.5vh', border: '0.1vh solid #c5deee2e' }}>
              <div className="cardFormleft" style={{ width: "80%" }}>
                <div className="cardForm_icon">
                  <img src={arrow_str_icon} />
                </div>
                <div className="cardForm_titles">
                  <div className="cardFormTitle">
                    Pressure build-up
                  </div>
                  <div className="cardFormSubTitle">
                    Accelerate the time of pressure build-up in the brake system
                  </div>
                </div>
              </div>
              <div className="cardFormright" style={{ width: '20%' }}>


                <CustomSwitch
                  checked={managementProps.pressure}
                  onChange={(val) => {
                    setManagementProps({
                      ...managementProps,
                      'pressure': val
                    })
                    setUpdateTrigger(true)

                  }} />

              </div>
            </div>

            <div className="cardForm" style={{ 'background-color': '#c5deee2e', borderRadius: '1.5vh', border: '0.1vh solid #c5deee2e' }}>
              <div className="cardFormleft" style={{ width: "80%" }}>
                <div className="cardForm_icon">
                  <img src={tachometer_icon} />
                </div>
                <div className="cardForm_titles" style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                  <div className="cardFormTitle">
                    Sectional Speed
                  </div>
                </div>
              </div>
              <div className="cardFormright" style={{ width: '20%' }}>


                <div style={{ width: "7.02vw" }}>
                  <InputSelect

                    guage={'km/h'}
                    propValue={managementProps?.sectionalSpeed}
                    handleValue={(val) => {
                      setManagementProps({
                        ...managementProps,
                        'sectionalSpeed': val
                      })
                      setUpdateTrigger(true)

                    }}
                  />
                </div>
              </div>
            </div>

          </div> */}

        </div>


      </div>
    </div>



  );
}

export const ControlCard = ({ data }) => {
  return (
    <div className={classes.ControlCard}>
      <div className={classes.cardTitle}>
        <div>{data?.title}</div>
        <div>{data?.subTitle}</div>
      </div>

      <RangePicker
        minRange={data?.minRange}
        maxRange={data?.maxRange}
        defaultValue={data?.defaultValue}
      />
      <InputSelect />
    </div>
  );
};





export const SliderIcon = ({ initialAngle = 0, onAngleChange }) => {
  const [angle, setAngle] = useState(initialAngle);
  const [isDragging, setIsDragging] = useState(false);
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const radian = Math.atan2(mouseY - centerY, mouseX - centerX);
    const degree = Math.round((radian * 180) / Math.PI);
    setAngle(degree);

    if (onAngleChange) onAngleChange(degree);
  };

  const rotationStyle = {
    transform: `rotate(${angle}deg)`,
    transformOrigin: "center",
  };

  return (
    <svg
      width="7vh"
      height="13vh"
      viewBox="0 0 50 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // To stop dragging when the mouse leaves the SVG
    >
      <g filter="url(#filter0_iiii_5008_10415)">
        <rect
          x="3"
          y="0.5"
          width="44"
          height="44"
          rx="24"
          fill="var(--Windows-Glass, rgba(17, 13, 43, 0.418))"
          fillOpacity="1"
          style={{ mixBlendMode: "color-burn" }}
        />
        <rect
          x="3"
          y="0.5"
          width="44"
          height="44"
          rx="24"
          fill="white"
          fillOpacity="1"
          style={{ mixBlendMode: "luminosity" }}

        />
      </g>
      <g filter="none" onMouseDown={handleMouseDown}>
        <path
          d="M21 18C21 13.3056 24.8056 9.5 29.5 9.5C34.1944 9.5 38 13.3056 38 18C38 22.6944 34.1944 26.5 29.5 26.5C24.8056 26.5 21 22.6944 21 18Z"
          fill="#D0D0D0"
          fillOpacity="0.5"
          style={{ mixBlendMode: "color-burn", ...rotationStyle }}
        />
        <path
          d="M21 18C21 13.3056 24.8056 9.5 29.5 9.5C34.1944 9.5 38 13.3056 38 18C38 22.6944 34.1944 26.5 29.5 26.5C24.8056 26.5 21 22.6944 21 18Z"
          fill="black"
          fillOpacity="0.3"
          style={{ mixBlendMode: "luminosity", ...rotationStyle }}
        />
      </g>
      <defs>
        <filter id="filter0_iiii_5008_10415" x="3" y="0" width="45" height="46" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="1" dy="1.5" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_5008_10415" />
        </filter>
        <filter id="filter2_iiii_5008_10415" x="16" y="7" width="24" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_5008_10415" />
        </filter>
      </defs>
    </svg>
  );
};


export const CustomSwitch = ({ checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };
  useEffect(() => {
    setIsChecked(checked)
  }, [checked])
  return (
    <div style={{ display: 'flex', flexDirection: 'row', color: 'rgba(255, 255, 255, 0.43)', fontSize: '2vh', gap: '1vh' }}>
      <div>
        {isChecked ? 'On' : 'Off'}
      </div>
      <div
        className={`custom-switch ${isChecked ? "checked" : ""}`}
        onClick={handleClick}
      >
        <div className="switch-handle"></div>
      </div>
    </div>
  );
};

