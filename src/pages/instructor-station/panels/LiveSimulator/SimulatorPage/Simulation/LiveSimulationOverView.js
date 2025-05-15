import React, { useEffect, useState } from 'react'
import './LiveSimulationOverView.css'
import InputCard from '../../../../../../components/Instructor-station/UIComp/InputCard'
import TrackForm from '../../../../../../components/Instructor-station/UIComp/TrackForm'

import { Icons } from '#framework'
import { useSimulatorStore } from '../../simulator-store'
import websocket from '../../../../../../services/Websocket'
import CustomDropdown from '../../../../../../components/Instructor-station/UIComp/CustomDropDown'
export default function LiveSimulationOverview({ drag }) {
  const [overviewData, setoverviewData] = useState({})
  const { group_icon, train_select, bulb_icon, type_icon, titlesvg, docsvg, datesvg, candsvg } = Icons.ISIcons;
  const { tabs, activeId, updateTab, } = useSimulatorStore(state => state);
  const activedata = tabs?.find(x => x.id === activeId)

  useEffect(() => {
    websocket.send("sessionManagement_overview_by_id", "subscribe", { sessionId: activedata?.content?.sessionId });
    const callback = (event) => {

      if (event) {
        updateTab(activedata?.content?.sessionId, 'overview', event);
        setoverviewData(activedata?.content?.overview || event)
      }
    }
    websocket.subscribe("sessionManagement_overview_by_id", callback);
  }, [activedata])

  const inputcards = [
    {
      id: 1,
      lable: 'Session Code',
      placeholder: '1234',
      value: overviewData?.session_code,
      icon: docsvg
    },
    {
      id: 2,
      lable: 'Session Start Date/Time',
      placeholder: '00/00/0000 00:00:00',
      value: overviewData?.session_start,
      icon: datesvg
    },
    {
      id: 3,
      lable: 'Instructor',
      placeholder: 'Enter Name',
      value: overviewData?.instructor_name,
      icon: candsvg
    },
  ]

  const formcards1 = [
    {
      title: 'Locomotive',
      img: train_select,
      options: ['WAP 7', 'WAP 8'],
      inputSelect: overviewData?.loco_type
    },
    {
      title: 'Train Number',
      img: train_select,
      options: ['WAP 7', 'WAP 8'],
      inputSelect: overviewData?.train_no
    },
    {
      title: 'Trak Selection',
      img: bulb_icon,
      options: ['ABC Track', 'XYZ Track'],
      inputSelect: overviewData?.track_name
    },
    {
      title: 'Train Type',
      img: type_icon,
      options: ['Electric', 'Desel', 'Steam'],
      inputSelect: overviewData?.train_type
    },
    {
      title: 'Load',
      img: type_icon,
      options: ['Electric', 'Desel', 'Steam'],
      inputSelect: overviewData?.load
    },
    {
      title: 'Length',
      img: type_icon,
      options: ['Electric', 'Desel', 'Steam'],
      inputSelect: overviewData?.train_length
    }
  ]

  const formcards2 = [
    {
      title: 'Time of the Day',
      img: train_select,
      //  selector:'inputview',
      //  placeholder:'18:00:00 Hours',
      inputSelect: `${overviewData?.time} Hours`
    },
    {
      title: 'Season',
      img: bulb_icon,
      options: ['Summer', 'Winter', 'Rainy'],
      inputSelect: overviewData?.season
    },
    {
      title: 'Weather',
      img: type_icon,
      options: ['Cloudy', 'Sunny', 'Rain'],
      inputSelect: overviewData?.weather
    }
  ]
  return (
    <div className='over_view_div' style={drag ? { height: '73vh' } : {}}>
      <div className='over_view_content' style={drag ? { height: '73vh' } : {}}>
        <div className='content1' style={drag ? { height: '71vh' } : {}} >

          <div className='informationForm'>
            <img src={titlesvg} />
            <div className='titlesdivs'>
              <div className='headtitle'>
                {overviewData?.session_name}
              </div>
            </div>
          </div>
          {
            inputcards.map((x) => {
              return (
                <div className='informationForm' style={{ height: '9vh' }}>
                  <img src={x.icon} />
                  <div className='titledivs'>
                    <div className='titleOne'>
                      {x.lable}
                    </div>
                    <div className='titleTwo'>
                      {x.value}
                    </div>
                  </div>
                </div>
              )
            })
          }
          <div className="traineesDropdown">
            <div className='traineesDropdownHeader'>
              Trainees
            </div>
            <CustomDropdown options={overviewData?.trainees} />
          </div>
        </div>

        <div className='content2' style={drag ? { height: '71vh' } : {}}>
          <div className='content2_child1' style={drag ? { height: '45vh' } : { height: '50vh' }}>
            {formcards1.map((x) => { return <TrackForm inputSelect={x.inputSelect} title={x.title} img={x.img} options={x.options} formStyle={drag ? { "height": "7.5vh" } : { "height": "8.3vh" }} /> })}
          </div>
          <div className='content2_child2' style={drag ? { height: '22.5vh' } : { height: '26vh' }}>
            {formcards2.map((x) => { return <TrackForm inputSelect={x.inputSelect} title={x.title} img={x.img} options={x.options} formStyle={drag ? { height: '7.5vh' } : { "height": "8.6vh" }} selector={x.selector} placeholder={x.placeholder} /> })}
          </div>
        </div>
      </div>
    </div>
  )
}
