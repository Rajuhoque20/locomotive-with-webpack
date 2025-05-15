import React, { useEffect, useState } from 'react'
import './LiveSimTrackLayout.css'
import MimicTrack from './../MimicTrackComponents/mimicnewTrack';
import { useSimulatorStore } from '../../simulator-store';
import websocket from '../../../../../../services/Websocket';
import { AddTePopupView } from '../MimicTrackComponents/mimicPopup';
export default function LiveSimTrackLayout({ drag }) {
  const { tabs, activeId, updateTab, } = useSimulatorStore(state => state);
  const activedata = tabs?.find(x => x.id === activeId)
  const [trackData, setTrackData] = useState([]);
  const [addTePopUp,setAddTePopUp] = useState(null)
  useEffect(() => {
    if (activedata?.content?.trackLayout) {
      setTrackData(activedata.content.trackLayout);
    }
  }, [activedata]); // Runs whenever `activedata` changes
  useEffect(() => {
    const callback = (event) => {
      setTimeout(() => {
        setTrackData(event);
      }, 1000);
    };

    websocket.subscribe('track_layout', callback);
    return () => {
      websocket.unsubscribeTopic('track_layout')

    }
  }, [trackData.length === 0])

  return (
    <div className='mimic_div' style={drag ? { height: '73vh' } : {}}>

      <div className='mimic_content' style={drag ? { height: '70vh',position:'relative',overflow:'hidden' } : {}}>
        {
          trackData.length === 0 ? <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LoadingAnimation /></div> : <MimicTrack trackdata={trackData} addTePopUp = {addTePopUp} setAddTePopUp ={setAddTePopUp}/>
        }
        {
          addTePopUp && 
          <div style={{height:'100%',width:'40%',left:'0%',top:'0%',position:'absolute',zIndex:'10000'}}>
            <AddTePopupView addTePopUp={addTePopUp} setAddTePopUp={setAddTePopUp} />
          </div>
        }
      </div>
    </div>
  )
}


const LoadingAnimation = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', font: '2.5vh', color: 'white', fontWeight: '700' }}>
      <svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="10vh" width="10vh"
        viewBox="0 0 100 100" enable-background="new 0 0 100 100" >
        <path fill="#fff" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
          <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50"
            to="360 50 50" repeatCount="indefinite" />
        </path>
        <path fill="#fff" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
          <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50"
            to="-360 50 50" repeatCount="indefinite" />
        </path>
        <path fill="#fff" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z">
          <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50"
            to="360 50 50" repeatCount="indefinite" />
        </path>
      </svg>
      Loading...
    </div>
  )
}











