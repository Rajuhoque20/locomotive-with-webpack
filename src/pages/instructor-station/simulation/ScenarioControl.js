import React from 'react'
import './scenarioStyles.css'
import FooterAction from '../../components/Instructor-station/UIComp/FooterAction'
import ButtonComp from '../../components/Instructor-station/UIComp/ButtonComp'
import new_exercise_button_icon from '../../../assets/Instructor-station/Icons/new_exercise_button_icon.svg';
import cancel_icon from '../../../assets/Instructor-station/Icons/cancel_icon.svg';
import enable_icon from "../../assets/Instructor-station/Icons/enable_icon.svg"
import disable_icon from "../../assets/Instructor-station/Icons/disable_icon.svg"
import ScenarioTableComponent from './ScenarioTable';

export default function ScenarioControl() {
  const columns = [
    {
     id:1,
     title:"Name",
     key:"name"
    },
    {
      id:2,
      title:"Trigger",
      key:"trigger"
     },
     {
      id:3,
      title:"Type",
      key:"type"
     },
     {
      id:4,
      title:"Status",
      key:"status"
     },
     {
      id:5,
      title:"Location",
      key:"location"
     }
  ]

  const dummydata = [
    {
      name:"All right signals from Loco of TN",
      trigger:"CD is on BPA 1581 at 572.0 m (Active when the Condition becomes met)",
      type:"Scenario",
      status:"Done",
      location:"1250 M"
    }
  ]
  return (
    <div className='scenario_div'>

      <div className='scenario_header_div'>
        <div className='scenario_header_content'>
          Scenario Controls
        </div>
      </div>

      <div className='header_actions'>
        <div className='left_actions'>
          <ButtonComp title={'Add'} prefixIcon={new_exercise_button_icon} bntStyle={{ "width": "108px", "height": "44px" }} />
          <ButtonComp title={'Delete'} prefixIcon={cancel_icon} bntStyle={{
            "width": "129px", "height": "44px", "background": "none", "color": "rgb(132, 132, 138)",
            "backdrop-filter": "blur(100px)"
          }} />

        </div>
        <div className='right_actions'>
          <div className='twinbuttons'>
            <ButtonComp title={'Enabled'} prefixIcon={enable_icon} bntStyle={{
              "width": "160px", "height": "36px", "background": "none", "color": "#817f7f", "fontFamily": "'SF Pro', sans-serif",
              "fontSize": "15px",
              "fontWeight": "590",
              "lineHeight": "20px",
              "textAlign": "center"
            }} />
            <ButtonComp title={'Disabled'} prefixIcon={disable_icon} bntStyle={{
              "width": "160px", "height": "36px", "background": "none", "color": "#817f7f", "fontFamily": "'SF Pro', sans-serif",
              "fontSize": "15px",
              "fontWeight": "590",
              "lineHeight": "20px",
              "textAlign": "center"
            }} />
          </div>
        </div>
      </div>


      <div className='scenario_content'>
       <ScenarioTableComponent/>
      </div>

      <div className='scenario_footer'>
        <FooterAction />
      </div>
    </div>
  )
}
