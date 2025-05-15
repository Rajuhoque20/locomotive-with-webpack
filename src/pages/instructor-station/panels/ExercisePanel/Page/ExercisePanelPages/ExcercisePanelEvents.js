// import React, { useState } from 'react'
// import './ExcercisePanelEvents.css'
// import { Checkbox } from 'antd';
// const ExcercisePanelEvents = () => {
//     const data = [
//         {
//           text:'All right signals from Guard of TN at BPA',
//           select:true,
//           location:'Location'
//         },
//         {
//             text:'All right signals from Loco of TN',
//             select:true,
//             location:'Location'
//         },
//         {
//             text:'ASAF M/L starter Danger',
//             select:true,
//             location:'Location'
//         },
//         {
//             text:'All right signals from Guard of TN at BPA',
//             select:true,
//             location:'Location'
//         },
//         {
//             text:'Auto Hand brake Release On',
//             select:true,
//             location:'Location'
//         },
//         {
//             text:'BPA Home late Taken Off to proceed',
//             select:true,
//             location:'Location'
//         },
//         {
//             text:'All right signals from Guard of TN at BPA',
//             select:true,
//             location:'Location'
//         },
//         {
//             text:'BPA Inner Dist at Caution',
//             select:true,
//             location:'Location'
//         },
//         {
//             text:'Brake Quick Charge',
//             select:true,
//             location:'Location'
//         },
//         {
//             text:'BPA Inner Dist at Caution',
//             select:true,
//             location:'Location'
//         },
//         {
//             text:'DN EXP EXCH AP GD',
//             select:true,
//             location:'Location'
//         },
//         {
//             text:'IB cum BPA dist attention bet MMZ-BPA',
//             select:true,
//             location:'Location'
//         },
//         {
//             text:'All right signals from Guard of TN at BPA',
//             select:true,
//             location:'Location'
//         },
//         {
//             text:'All right signals from Guard of TN at BPA',
//             select:true,
//             location:'Location'
//         },
//         {
//             text:'All right signals from Guard of TN at BPA',
//             select:true,
//             location:'Location'
//         },
//         {
//             text:'All right signals from Guard of TN at BPA',
//             select:true,
//             location:'Location'
//         },
//     ]
//     const [eactiveclass,setEActiveClass] = useState('Anomalies')
//     const handleEventActiveClass = (aClass) =>{
//         setEActiveClass(aClass)
//     }
//     return (
//         <div className='ep_events_div'>
//             <div className='ep_events_table'>
//               <div className='ep_nav_events_div'>
//               <button className = {eactiveclass === 'Anomalies' ? 'ep_event_activebutton' : 'ep_event_deactivebutton'}  onClick={() => handleEventActiveClass('Anomalies')}>Anomalies</button>
//               <button className = {eactiveclass === 'Scenario' ? 'ep_event_activebutton' : 'ep_event_deactivebutton'} onClick={() => handleEventActiveClass('Scenario')}>Scenario</button>
//               </div>
//               <div className='ep_nav_table_div'>
//               {
//                 data?.map((x) => {
//                     return <EventRowComponent text={x.text} location={x.location} select={x.select}/>
//                 })
//               }
//               </div>
//             </div>
//         </div>
//     )
// }

// export default ExcercisePanelEvents;

// const EventRowComponent = ({text,select,location}) => {
//   return(
//     <div className='ep_events_rows_div'>
//     <Checkbox />
//     <div className='ep_events_rows_text'>
//     {text}
//     </div>
//     <div className='ep_events_rows_inputview'>
//      {location}
//     </div>
//     </div>
//   )
// }




import React from 'react'
import './ExcercisePanelEvents.css'
import ButtonComp from '../../../../../../components/Instructor-station/UIComp/ButtonComp';
import EventTableComponent from '../../../LiveSimulator/SimulatorPage/Simulation/EventTable';
import { useNavigate,useParams } from 'react-router-dom';
import { Icons } from '#framework';
const ExcercisePanelEvents = () => {
  const {new_exercise_button_icon,cancel_icon} = Icons.ISIcons;
  const navigate=useNavigate();
  const {id}=useParams();
  const handleNavigate = () =>{
      navigate('/excerciseaddEvent',{state:{redirect:`/new-exercise/${id}`}}) 
  }
    return (
        <div className='ep_scenario_div'>
        <div className='ep_header_actions'>
            <ButtonComp onClick={handleNavigate} title={'Add'} prefixIcon={new_exercise_button_icon} bntStyle={{ "width": "7.9vw", "height": "6vh", fontSize: 'var(--font-size-4)' }} />
            <ButtonComp title={'Delete'} prefixIcon={cancel_icon} bntStyle={{
              "width": "9.4vw", "height": "6vh", "background": "none", "color": " rgb(204, 204, 210)", fontSize: 'var(--font-size-4)',
              "backdrop-filter": "blur(100px)"
            }} />
            <ButtonComp title={'Edit'} prefixIcon={cancel_icon} bntStyle={{
              "width": "9.4vw", "height": "6vh", "background": "none", "color": " rgb(204, 204, 210)", fontSize: 'var(--font-size-4)',
              "backdrop-filter": "blur(100px)"
            }} /> 
          </div>
        <EventTableComponent />
      </div>
    )
}

export default ExcercisePanelEvents;
