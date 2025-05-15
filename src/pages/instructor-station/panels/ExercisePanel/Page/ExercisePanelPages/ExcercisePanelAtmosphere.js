import React from 'react'
import './ExcercisePanelAtmosphere.css'
import ImageLabelCard from '../../../../../../components/Instructor-station/UIComp/ImageLabelCard'
import RangePicker from '../../../../../../components/Instructor-station/UIComp/RangePicker'
import InputSelect from '../../../../../../components/Instructor-station/UIComp/InputSelect'
import { CustomSwitch, SliderIcon } from '../../../LiveSimulator/SimulatorPage/Simulation/LiveSimulationManagement'

import { Icons } from '#framework'
const ExcercisePanelAtmosphere = () => {
    const {bright_setting_icon,time_icon,eye_icon,velocity_icon,direction_icon,rain_icon,
          sun_glare_icon,thunder_icon,summerpng,monsoonpng,winterpng,sunnypng,cloudypng,
          windpng,snowpng,rainypng} = Icons.ISIcons;
    const SessionData = [
        {
            id: 1,
            label: 'Summer',
            icon: summerpng,
        },
        {
            id: 2,
            label: 'Monsoon',
            icon: monsoonpng,
        },
        {
            id: 1,
            label: 'Winter',
            icon: winterpng,
        },
    ]
    const WeatherData = [
        {
            id: 1,
            label: 'Sunny',
            icon: sunnypng,
        },
        {
            id: 2,
            label: 'Rainy',
            icon: rainypng,
        },
        {
            id: 3,
            label: 'Windy',
            icon: windpng,
        },
        {
            id: 4,
            label: 'Cloudy',
            icon: cloudypng,
        },
        {
            id: 5,
            label: 'Snow',
            icon: snowpng,
        },
    ]
    const sampleData1 = [
        {
          id: 1,
          title: 'Sun Glare',
          subTitle: "Toggle on for brighter experience or off for more subdued",
          enable: true,
          icon: sun_glare_icon
        },
        {
          id: 2,
          title: 'Rain',
          subTitle: "Toggle on for a dynamic ambience or off for a clear",
          enable: false,
          icon: rain_icon
        },
        {
          id: 3,
          title: 'Lighting',
          subTitle: "Toggle on for a illuminated atmosphere or off for a softer",
          enable: true,
          icon: thunder_icon
        },
      ]
    return (
        <div className='atmosphere_main_div'>
            <div className='atmosphere_div'>


                <div className='season_weather_div'>
                    <div className='season_weather_header'>
                        <div className='sw_header_name'>
                            Season
                        </div>
                        <img src={bright_setting_icon} />
                        <div className='sw-header-bar'>
                        </div>
                    </div>
                    <div className='sw_lables_div'>
                        {SessionData?.map((item, id) => {
                            return (
                                <ImageLabelCard id={item.id} label={item.label} icon={item.icon} />

                            )
                        })}
                    </div>
                </div>
                <div className='season_weather_div'>
                    <div className='season_weather_header'>
                        <div className='sw_header_name'>
                            Weather
                        </div>
                        <img src={bright_setting_icon} />
                        <div className='sw-header-bar'>
                        </div>
                    </div>
                    <div className='sw_lables_div'>
                        {WeatherData?.map((item, id) => {
                            return (
                                <ImageLabelCard id={item.id} label={item.label} icon={item.icon} />

                            )
                        })}
                    </div>
                </div>

                <div className='season_weather_forms'>
                    {/* time of the day */}
                    <div className='sw_forms'>
                        <div className='left_div'>
                            <img src={time_icon} />
                            <div title='form_titles'>
                                <div className='sw_title'>
                                    Time of the Day
                                </div>
                                <div className='sw_subtitle'>
                                    Input your preferred hour
                                </div>
                            </div>
                        </div>
                        <div className='right_div'>
                            <input placeholder='00:00 Hours' className='sw_input' />
                        </div>
                    </div>

                    {/* visibility */}
                    <div className='sw_forms'>
                        <div className='left_div'>
                            <img src={eye_icon} />
                            <div title='form_titles'>
                                <div className='sw_title'>
                                    Visibility
                                </div>
                                <div className='sw_subtitle'>
                                    Set visibility levels
                                </div>
                            </div>
                        </div>
                        <div className='right_div'>
                            <div style={{ width: "13vw" }}>
                                <RangePicker minRange={0} maxRange={5} defaultValue={2} />
                            </div>
                            <div>
                                <div style={{ width: "7vw",height:"6vh"}}>
                                    <InputSelect />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* wind velocity */}
                    {/* <div className='sw_double_forms'>

                        <div style={{ width: "50%", height: "100%", borderRight: "0.1vh solid #ffffff24", display: 'flex', flexDirection: 'row' }}>
                            <div className='left_div'>
                                <img src={velocity_icon} />
                                <div title='form_titles'>
                                    <div className='sw_title'>
                                        Wind Velocity
                                    </div>
                                </div>
                            </div>
                            <div className='right_div' style={{ marginRight: "2vw" }}>
                                <div style={{ width: "8vw" }}>
                                    <InputSelect />
                                </div>
                            </div>
                        </div>


                        <div style={{ width: "50%", height: "100%", display: 'flex', flexDirection: 'row' }}>
                            <div className='left_div' >
                                <img src={direction_icon} style={{ marginLeft: '2vw' }} />
                                <div title='form_titles'>
                                    <div className='sw_title'>
                                        Wind Direction
                                    </div>
                                </div>
                            </div>
                            <div className='right_div'>
                                <div style={{height:'10vh' ,width:'10vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                <SliderIcon/>
                                </div>
                                <div style={{ width: "6vw" }}>
                                    <InputSelect />
                                </div>
                            </div>
                        </div>

                    </div> */}
                </div>

                <div className='season_weather_forms'>
                 {
                    sampleData1?.map(data => {
                        return(
                            <div className='sw_forms'>
                            <div className='left_div'>
                                <img src={data.icon} />
                                <div title='form_titles'>
                                    <div className='sw_title'>
                                        {data.title}
                                    </div>
                                    <div className='sw_subtitle'>
                                       {data.subTitle}
                                    </div>
                                </div>
                            </div>
                            <div className='right_div'>
                              {/* <div style={{color:' #ffffff81',fontSize:'var(--font-size-3)'}}> 
                               On 
                              </div> */}
                                <CustomSwitch defaultValue={data?.enable}/>
                            </div>
                        </div>
                        )
                    })
                 }

        
                </div>

            </div>
        </div>
    )
}

export default ExcercisePanelAtmosphere;

