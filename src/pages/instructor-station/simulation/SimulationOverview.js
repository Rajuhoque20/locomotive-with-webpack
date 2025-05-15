import React from 'react'
import './overViewStyles.css'
import InputCard from '../../components/Instructor-station/UIComp/InputCard'
import group_icon from '../../../assets/Instructor-station/Icons/group_icon.svg'
import TrackForm from '../../components/Instructor-station/UIComp/TrackForm'
import train_select from '../../../assets/Instructor-station/Icons/train_select.svg'
import bulb_icon from '../../../assets/Instructor-station/Icons/bulb_icon.svg'
import type_icon from '../../../assets/Instructor-station/Icons/type_icon.svg'
import FooterAction from '../../components/Instructor-station/UIComp/FooterAction'
 export default function SimulationOverview() {
  const inputcards = [
    {
      id: 1,
      lable: 'Instructor',
      placeholder: 'Enter Name'
    },
    {
      id: 2,
      lable: 'Trainees',
      placeholder: 'Enter Name',
      button: true,
      buttonTitle: 'Add Trainees',
      buttonIcon: group_icon
    },
    {
      id: 3,
      lable: 'Session Code',
      placeholder: '1234'
    },
    {
      id: 4,
      lable: 'Sumulated Date/Time',
      placeholder: '00/00/0000 00:00:00'
    }
  ]

  const formcards1 = [
    {
     title:'Train Selection',
     img:train_select,
     options:['WAP 7','WAP 8']
    },
    {
      title:'Trak Selection',
      img:bulb_icon,
      options:['ABC Track','XYZ Track']
     },
     {
      title:'Train Type',
      img:type_icon,
      options:['Electric','Desel','Steam']
     }
  ]

  const formcards2 = [
    {
     title:'Time of the Day',
     img:train_select,
     selector:'inputview',
     placeholder:'18:00:00 Hours'
    },
    {
      title:'Season',
      img:bulb_icon,
      options:['Summer','Winter','Rainy']
     },
     {
      title:'Weather',
      img:type_icon,
      options:['Cloudy','Sunny','Rain']
     }
  ]
  return (
    <div className='over_view_div'>
      <div className='header_div'>
        <div className='header_text'>
          Overview
        </div>
      </div>
      <div className='over_view_content'>

        <div className='content1'>
          <div className='content1_child'>
            <div className='child1'>
              <div className='child1_contents'>
                <div className='child1_content1'>
                  {'Howrah Junction to Sealdah'}
                </div>
                <div className='child1_content2'>
                  {'Kolkata Corridor'}
                </div>
              </div>
            </div>
            {inputcards.map((x) => { return <InputCard lable={x.lable} button={x.button} buttonTitle={x.buttonTitle} buttonIcon={x.buttonIcon} placeholder={x.placeholder} /> })}

          </div>
        </div>

        <div className='content2'>
        <div className='content2_child1'>
         {formcards1.map((x) => {return <TrackForm title={x.title} img={x.img}  options={x.options} formStyle={{"height":"100%"}}/>})}
        </div>
        <div className='content2_child2'>
        {formcards2.map((x) => {return <TrackForm title={x.title} img={x.img}  options={x.options} formStyle={{"height":"100%"}} selector={x.selector} placeholder={x.placeholder}/>})}
        </div>
        </div>
      </div>
      <div className='footer_div'>
        {/* <div className='footer_action'>
          <div className='start_button_div'>
           <ButtonComp title={'Start'} bntStyle={{"height":"44px","width":"100%"}} prefixIcon={play_icon}/>
          </div>
          <div className='stop_button_div'>
           <ButtonComp title={'Stop'} bntStyle={{"height":"44px","width":"100%","border-radius":"0","background":"rgb(69 69 76)","color":" rgb(132, 132, 138)"}} prefixIcon={stop_icon}/>
          </div>
          <div className='snap_div'>
           <div className='snap_button_div'>
           <ButtonComp title={'Snapshot'} prefixIcon={stop_icon} bntStyle={{"height":"44px","width":"100%","border-radius":"12px 0 0 12px","background":" rgb(99, 99, 102)","color":"rgb(132, 132, 138)"}}/>
           </div>
           <div className='snap_button_arrow'>
           <ButtonComp prefixIcon={angle_down} bntStyle={{"height":"44px","width":"100%","border-radius":"0 12px 12px 0","background":" rgb(99, 99, 102)","color":"rgb(132, 132, 138)"}}/>
           </div>
          </div>

          <div className='info1'>
            <div className='info_a'>
            Train Speed
            </div>
            <div className='info_b'>
             0 km/h
            </div >
          </div>

          <div className='info2'>
          <div className='info_a'>
            Target Speed
            </div>
            <div className='info_b'>
             25 km/h
            </div >
          </div>

          <div className='info3' >
          <div className='info_a'>
            Odometer
            </div>
            <div className='info_b'>
             0 km/h
            </div >
         </div>

        </div> */}
        <FooterAction/>
      </div>
    </div>
  )
}
