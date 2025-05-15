import React, { act, useState } from 'react';
import './footerActionStyles.css'
import ButtonComp from './ButtonComp'
import { Icons } from "#framework";
const { play_icon, stop_icon, angle_down, drag_icon, pause_icon, capture_icon, flagred, flaggreen, unflag, uncapture, unstop } = Icons.ISIcons;
const FooterAction = ({ actions, setActions, dragonClick }) => {
  // const [actions, setActions] = useState({
  //   green: true,
  //   red: true,
  //   snapshot: true,
  //   stop: true,
  //   isRunning: false
  // })

  const handleAction = (key) => {
    setActions((prevFlags) => {
      const updatedFlags = { ...prevFlags, [key]: !prevFlags[key] };

      // Logic to ensure red and green are mutually exclusive
      if (key === "red" && updatedFlags[key]) {
        updatedFlags["green"] = false;
      } else if (key === "green" && updatedFlags[key]) {
        updatedFlags["red"] = false;
      }

      return updatedFlags;
    });
  };
  return (
    <div className='footer_action'
    >
      <ButtonComp onClick={() => { handleAction('isRunning') }} title={actions.isRunning ? "Pause" : "Start"} bntStyle={{ "height": "5.7vh", "width": "7vw" }} prefixIcon={actions.isRunning ? pause_icon : play_icon} />
      <ButtonComp onClick={() => { handleAction('stop') }} title={'Stop'} bntStyle={{ "height": "5.7vh", "width": "7vw", "border-radius": "1vh", "background": "rgb(69 69 76)", "color": actions.stop ? "white" : "rgb(132, 132, 138)" }} prefixIcon={actions.stop ? stop_icon : unstop} />

      <div className='snap_div'>
        <div className='snap_button_div'>
          <ButtonComp onClick={() => { handleAction('snapshot') }} title={'Snapshot'} prefixIcon={actions.snapshot ? capture_icon : uncapture} bntStyle={{ "height": "5.7vh", "width": "100%", "border-radius": "0.5vh 0 0 0.5vh", "background": " rgba(96, 96, 103, 0.63)", "color": actions.snapshot ? "white" : "rgb(132, 132, 138)" }} />
        </div>
        {/* <div className='snap_button_arrow'>
          <ButtonComp prefixIcon={angle_down} bntStyle={{ "height": "5.7vh", "width": "100%", "border-radius": "0 0.5vh 0.5vh 0", "background": " rgb(99, 99, 102)", "color": "rgb(132, 132, 138)" }} />
        </div> */}
      </div>
      <div className='flag_action'>
        <div className='f_action_one' style={!actions.green ? { width: '3vw' } : {}}>
          <ButtonComp onClick={() => { handleAction('green') }} prefixIcon={flaggreen} title={actions.green ? 'All Right' : null} bntStyle={{ "height": "5.7vh", "width": "100%", "background": 'none', "color": actions.green ? "white" : "rgb(132, 132, 138)" }} />

        </div>
        <div className='f_action_two' style={actions.red ? { width: '11vw' } : {}}>
          <ButtonComp onClick={() => { handleAction('red') }} prefixIcon={flagred} title={actions.red ? 'Stop' : null} bntStyle={{ "height": "5.7vh", "width": "100%", background: 'none', color: 'white' }} />
        </div>
      </div>
      <div className='info4'>
        <ButtonComp prefixIcon={drag_icon} bntStyle={{ background: 'none', width: '5vh', height: '5vh', cursor: 'grab' }} onClick={dragonClick} />
      </div>
    </div>
  )
}

export default FooterAction;




// import React, { useState } from 'react';
// import './footerActionStyles.css';
// import ButtonComp from './ButtonComp';
// import play_icon from '../../../assets/Instructor-station/Icons/play_icon.svg';
// import stop_icon from '../../../assets/Instructor-station/Icons/stop_icon.svg';
// import angle_down from '../../../assets/Instructor-station/Icons/angle_down.svg';
// import drag_icon from '../../../assets/Instructor-station/Icons/drag_icon.svg';

// const FooterAction = () => {
//   const [position, setPosition] = useState({ x: 100, y: 100 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

//   const handleMouseDown = (e) => {
//     if (!e.target.closest('.drag_button')) return;
//     setIsDragging(true);
//     setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;

//     const newX = e.clientX - startPosition.x;
//     const newY = e.clientY - startPosition.y;

//     // Update position dynamically
//     setPosition({ x: newX, y: newY });
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   return (
//     <div
//       className="footer_action"
//       style={{
//         position: 'absolute',
//         left: `${position.x}px`,
//         top: `${position.y}px`,
//       }}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       onMouseLeave={handleMouseUp}
//     >
//       <div className="start_button_div">
//         <ButtonComp
//           title={'Start'}
//           bntStyle={{ height: '44px', width: '100%' }}
//           prefixIcon={play_icon}
//         />
//       </div>
//       <div className="stop_button_div">
//         <ButtonComp
//           title={'Stop'}
//           bntStyle={{
//             height: '44px',
//             width: '100%',
//             borderRadius: '0',
//             background: 'rgb(69 69 76)',
//             color: 'rgb(132, 132, 138)',
//           }}
//           prefixIcon={stop_icon}
//         />
//       </div>
//       <div className="snap_div">
//         <div className="snap_button_div">
//           <ButtonComp
//             title={'Snapshot'}
//             prefixIcon={stop_icon}
//             bntStyle={{
//               height: '44px',
//               width: '100%',
//               borderRadius: '12px 0 0 12px',
//               background: 'rgb(99, 99, 102)',
//               color: 'rgb(132, 132, 138)',
//             }}
//           />
//         </div>
//         <div className="snap_button_arrow">
//           <ButtonComp
//             prefixIcon={angle_down}
//             bntStyle={{
//               height: '44px',
//               width: '100%',
//               borderRadius: '0 12px 12px 0',
//               background: 'rgb(99, 99, 102)',
//               color: 'rgb(132, 132, 138)',
//             }}
//           />
//         </div>
//       </div>

//       <div className="info1">
//         <div className="info_a">Train Speed</div>
//         <div className="info_b">0 km/h</div>
//       </div>

//       <div className="info2">
//         <div className="info_a">Target Speed</div>
//         <div className="info_b">25 km/h</div>
//       </div>

//       <div className="info3">
//         <div className="info_a">Odometer</div>
//         <div className="info_b">0 km/h</div>
//       </div>

//       <div className="info4">
//         {/* Drag Button */}
//         <ButtonComp
//           className="drag_button"
//           prefixIcon={drag_icon}
//           bntStyle={{ background: 'none', width: '32px', height: '32px', cursor: 'grab' }}
//         />
//       </div>
//     </div>
//   );
// };

// export default FooterAction;


