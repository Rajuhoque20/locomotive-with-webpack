import React, { act, useCallback, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import NavTab from "../../../../../../components/Instructor-station/UIComp/NavTab";
import LiveSimulationOverview from "./LiveSimulationOverView";
import LiveSimulatorEvents from "./LiveSimulatorEvents";
import LiveSimulationManagement from "./LiveSimulationManagement";
import { useSimulatorStore } from "../../simulator-store";
import SimulationEventLog from "./SimulationEventLog";
import LiveSimTrackLayout from "./LiveSimTrackLayout";
import LiveSimFaults from "./LiveSimFaults";
import FooterAction from "../../../../../../components/Instructor-station/UIComp/FooterAction";
import './NewSimulationLive.css'
import ButtonComp from "../../../../../../components/Instructor-station/UIComp/ButtonComp";
import { Icons } from "#framework";
import BankingControl from "./BankingControl";
import websocket from "../../../../../../services/Websocket";
import LiveSimulatorTrains from "./LiveSimulatorTrains";
export default function NewSimulationLive() {
  const { overViewIcon, track_event_icon, track_layout_icon, eventsIcon, track_manage_icon, faults_icon, dragable_icon, drag_frame, pause_button, drag_stop_button, drag_snap_button, flagred, flaggreen, play_icon, pause_icon, stop_icon, unstop, capture_icon, uncapture, whiteFlag, blackFlag, unflag, unexclamation, clockIcon, trainopng } = Icons.ISIcons;
  const activeId = useSimulatorStore((store) => store.activeId);
  const tabId = useParams();
  const [pageContent, setPageContent] = useState();
  const { tabs, activeTab, updateTab } = useSimulatorStore(state => state);
  const [actions, setActions] = useState({
    green: true,
    red: false,
    snapshot: true,
    stop: true,
    isRunning: false
  })
  const handleActiondrag = (key) => {
    setActions((prevFlags) => {
      if (key === "red") {
        return { ...prevFlags, red: true, green: false }; // Red is true, Green must be false
      } else if (key === "green") {
        return { ...prevFlags, red: false, green: true }; // Green is true, Red must be false
      }
      return prevFlags;
    });
  };
  useEffect(() => {

    console.log('published', actions);
    websocket.publish('dad_footer', {
      "alright_left": false,
      "stop_left": true,
      "alright_right": actions.green,
      "stop_right": actions.red
    });
  }, [actions.red, actions.green])
  // function datacall(x,topic,type){  
  //       websocket.send(topic,"subscribe",x);
  //       const callback=(event)=>{
  //         updateTab(x.sessionId,type,event);
  //       }
  //       websocket.subscribe(topic,callback);
  //       const allTopics=["sessionManagement_overview_by_id","sessionManagement_management_by_id","logs"];
  //       allTopics?.forEach(item=>{
  //        if(item !== topic){
  //         console.log('unsubscribeitem',item)
  //         websocket.unsubscribeTopic(item);
  //        }
  //       })

  // }

  const datacall = useCallback((payload, topic, type) => {
    websocket.send(topic, "subscribe", payload);
    const callback = (event) => {
      updateTab(payload.sessionId, type, event);
    };

    websocket.subscribe(topic, callback);

    // Unsubscribe from other topics
    const allTopics = ["sessionManagement_overview_by_id", "sessionManagement_management_by_id", "logs"];
    allTopics.forEach(item => {
      if (item !== topic) websocket.unsubscribeTopic(item);
    });

    return () => websocket.unsubscribe(topic);
  }, [updateTab]);

  useEffect(() => {
    const callback = (event) => {
      console.log('alright', event)
      setActions((prev) => ({
        ...prev,
        green: event.alright_right,
        red: event.stop_right,
      }));

      websocket.unsubscribeTopic('dad_footer', callback);
    };

    websocket.subscribe('dad_footer', callback);

    return () => websocket.unsubscribeTopic('dad_footer', callback);
  }, []);



  const navData = [
    {
      id: "overview",
      label: "Overview",
      icon: overViewIcon
    },
    {
      id: "trackLayout",
      label: "Track Layout",
      icon: track_layout_icon
    },
    {
      id: "events",
      label: "Events",
      icon: track_event_icon
    },
    {
      id: "trains",
      label: "Trains",
      icon: trainopng
    },
    {
      id: "faults",
      label: "Faults",
      icon: unexclamation
    },
    {
      id: "management",
      label: "Management",
      icon: track_manage_icon
    },
    // {
    //   id: "bankingcontrol",
    //   label: "Banking Controls",
    //   icon: eventsIcon
    // },
    {
      id: "eventLog",
      label: "Logs",
      icon: eventsIcon
    }
  ];
  const [tab, setTab] = useState(navData[0]);
  // const [exerciseName,setExerciseName] = useState('')
  const [position, setPosition] = useState({ x: 900, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const { state } = useLocation();

  useEffect(() => {
    if (state?.activeTab == 'events')
      handleTabChange({
        id: "events",
        label: "Events",
        icon: track_event_icon
      });

    if (state?.activeTab == 'faults')
      handleTabChange({
        id: "faults",
        label: "Faults",
        icon: faults_icon
      },);
  }, [state?.activeTab])

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newX = e.clientX - startPosition.x;
    const newY = e.clientY - startPosition.y;

    // Update position based on mouse movement
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);

    // Snap to bottom if close to the bottom edge
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    if (e.clientY >= screenHeight - 100) {
      const snapX = Math.max(0, Math.min(screenWidth - 100, position.x));
      setPosition({ x: snapX, y: screenHeight - 100 });
    }
  };

  const [drag, setDrag] = useState(false)
  const handleDrag = (dragtrue, dragfalse) => {
    if (dragtrue) {
      setDrag(true)
    }
    if (dragfalse) {
      setDrag(false)
    }
  }
  const handleTabChange = (val) => {
    setTab(val)
    const activedata = tabs?.find(x => x.id === activeId)
    if (val.id === "overview") {
      datacall({ sessionId: activedata?.content?.sessionId }, 'sessionManagement_overview_by_id', "overview")
    }
    if (val.id === "management") {
      datacall({ sessionId: activedata?.content?.sessionId }, 'sessionManagement_management_by_id', "management")
    }
    if (val.id === "eventLog") {
      datacall({ sessionId: activedata?.content?.sessionId }, 'logs', "eventLog")
    }
    if (val.id === 'trackLayout') {
      datacall({ sessionId: activedata?.content?.sessionId }, 'track_layout', "trackLayout")
    }
    // if (val.id === 'events') {
    //   datacall({ sessionId: activedata?.content?.sessionId }, 'BE/FE/EVENT/EVENTLIST', "events")
    // }


  };
  useEffect(() => {
    let tabData = tabs?.find((tab) => tab?.id === activeId);
    setPageContent({ ...tabData, ...pageContent });
  }, [activeId, tabId]);

  return (
    <div style={{ width: '100%', paddingBottom: '1vh', height: '92.5vh' }}>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        height: "8vh",
        "background-blend-mode": "luminosity",
        "background-color": "initial",
        background: "var(--Windows-Glass, rgba(19, 17, 39, 0.36))",
        "backdrop-filter": " blur(100%)",
        color: "inherit",
        outline: "none",
        padding: "1.57vh",
      }}>

        <div style={{
          height: '8vh',
          width: '10%',
          position: 'fixed',
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          padding: '0.5vh',
          gap: '1vh',
          color: 'white',
          fontSize: '2vh',
          fontWeight: '700',
        }}>
          <div>
            Session Running
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1vh', color: 'rgba(255, 255, 255, 0.57)' }}>
            <img
              style={{ height: '2.5vh', width: '2.5vh' }}
              src={clockIcon} /> 01:00:00
          </div>
        </div>

        <NavTab
          data={navData}
          onClick={handleTabChange}
          defaultView={tab}
          tabContainerStyle={{ 'gap': '1.46vw' }}
        />
        {/* <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
        <ButtonComp title={"Pre run"} prefixIcon={exercise_button_icon} />
      </div> */}
      </div>

      {tab?.id === "overview" ? <LiveSimulationOverview drag={!drag ? true : false} /> :
        tab?.id === "trackLayout" ? <LiveSimTrackLayout drag={!drag ? true : false} tab={tab?.id} /> :
          tab?.id === "events" ? <LiveSimulatorEvents drag={!drag ? true : false} /> :
            tab?.id === "management" ? <LiveSimulationManagement drag={!drag ? true : false} /> :
              tab?.id === "eventLog" ? <SimulationEventLog drag={!drag ? true : false} /> :
                tab?.id === "faults" ? <LiveSimFaults drag={!drag ? true : false} /> :
                  tab?.id === "bankingcontrol" ? <BankingControl drag={!drag ? true : false} /> :
                    tab?.id === "trains" ? <LiveSimulatorTrains drag={!drag ? true : false} /> :
                      null
      }
      {
        !drag ?
          <div className="live-sim-footer">
            <FooterAction actions={actions} setActions={setActions} dragonClick={() => { handleDrag(true, false) }} />
          </div> :
          <div
            className="dragable_div"
            style={{
              position: 'absolute',
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
          >
            <div className="dragable_action">
              {/* <ButtonComp prefixIcon={pause_button} bntStyle={{ background: 'none', width: '6vh', height: '6vh' }} />
              <ButtonComp prefixIcon={drag_stop_button} bntStyle={{ background: 'none', width: '6vh', height: '6vh' }} />
              <ButtonComp prefixIcon={drag_snap_button} bntStyle={{ background: 'none', width: '6vh', height: '6vh' }} /> */}
              <div className="dragable_actionA">
                <ButtonComp onClick={() => { handleActiondrag('isRunning') }} suffixIcon={actions.isRunning ? pause_icon : play_icon} bntStyle={{ width: '6vh', height: '6vh', borderRadius: '50%' }} />
                <ButtonComp onClick={() => { handleActiondrag('stop') }} suffixIcon={actions.stop ? stop_icon : unstop} bntStyle={{ width: '6vh', height: '6vh', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.261)', 'backdrop-filter': 'blur(100px)' }} />
                <ButtonComp onClick={() => { handleActiondrag('snapshot') }} suffixIcon={actions.snapshot ? capture_icon : uncapture} bntStyle={{ width: '6vh', height: '6vh', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.261)', 'backdrop-filter': 'blur(100px)' }} />

              </div>
              <div className="dragable_actionB">
                <div className="dragable_actionB_inner">
                  <ButtonComp onClick={() => { handleActiondrag('green') }} prefixIcon={actions.green ? blackFlag : whiteFlag} title={actions.green ? 'All Right' : null} bntStyle={{ background: actions.green ? 'rgb(32, 253, 12)' : 'rgba(255, 255, 255, 0.261)', width: actions.green ? '14vh' : '6vh', height: '5.5vh', color: actions.green ? 'black' : 'rgba(255, 255, 255, 0.261)' }} />
                  <ButtonComp onClick={() => { handleActiondrag('red') }} prefixIcon={actions.red ? blackFlag : whiteFlag} title={actions.red ? 'Stop' : null} bntStyle={{ background: 'rgba(255, 255, 255, 0.26)', width: actions.red ? '14vh' : '6vh', height: '5.5vh', color: 'black', background: actions.red ? 'rgb(253, 12, 12)' : 'rgba(255, 255, 255, 0.261)' }} />
                </div>
              </div>
            </div>
            <div className="dragoutin">
              <ButtonComp prefixIcon={dragable_icon} bntStyle={{ background: 'none', width: '6vh', height: '6vh' }} onClick={() => { handleDrag(false, true) }} />
            </div>
            <div
              className="dragmovediv"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <img src={drag_frame} />
            </div>

          </div>
      }
    </div>
  )
}
