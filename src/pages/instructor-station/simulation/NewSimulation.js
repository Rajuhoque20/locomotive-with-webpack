import React, { useEffect, useState } from "react";
import { useMainStore } from "../../store";
import { useParams } from "react-router-dom";
import NavTab from "../../components/Instructor-station/UIComp/NavTab";
import overViewIcon from "../../assets/Instructor-station/Icons/overViewIcon.svg";
import trainConfigIcon from "../../assets/Instructor-station/Icons/trainConfigIcon.svg";
import eventsIcon from "../../assets/Instructor-station/Icons/eventsIcon.svg";
import atmosphereIcon from "../../assets/Instructor-station/Icons/atmosphereIcon.svg";
import exercise_button_icon from '../../../assets/Instructor-station/Icons/new_exercise_button_icon.svg';

import ButtonComp from "../../components/Instructor-station/UIComp/ButtonComp";
import SimulationEvent from "./SimulationEvent";
import SimulationMimic from "./SimulationMimic";
import ScenarioControl from "./ScenarioControl";
import SimulationManagement from "./SimulationManagement";
import SimulationOverview from "./SimulationOverview";


export default function NewSimulation() {

  const activeId = useMainStore((store) => store.activeId);
  const tabs = useMainStore((store) => store.tabs);
  const tabId = useParams();
  const [pageContent, setPageContent] = useState();
  const navData = [
    {
      id: "overview",
      label: "Overview",
      icon:overViewIcon
    },
    {
      id: "mimicDiagram",
      label: "Mimic Diagram",
      icon:trainConfigIcon
    },
    {
      id: "scenarioControl",
      label: "Scenario Controls",
      icon:atmosphereIcon
    },
    {
      id: "management",
      label: "Management",
      icon:eventsIcon
    },
    {
      id: "eventLog",
      label: "Event Log",
      icon:eventsIcon
    }
  ];
  const [tab, setTab] = useState(navData[0]);
  const [exerciseName,setExerciseName] = useState('')
  const handleTabChange = (val) => {
    console.log("tab changed", val);
    setTab(val)
  };

  useEffect(() => {
    console.log("getting id", activeId, "paramId", tabId, "tabs", tabs);
    let tabData = tabs.find((tab) => tab.id === activeId);
    setPageContent({ ...tabData, ...pageContent });
    console.log("tabData", tabData);
  }, [activeId, tabId]);

  return (
    <div style={{width:'100%'}}>
     
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>

   
      <NavTab
        data={navData}
        onClick={handleTabChange}
        defaultView={tab}
      /> 
      <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
        <ButtonComp title={"Pre run"} prefixIcon={exercise_button_icon} />
      </div>
    </div>

    {tab?.id==="overview"?<SimulationOverview />:
      tab?.id==="mimicDiagram"?<SimulationMimic />:
      tab?.id==="scenarioControl"?<ScenarioControl />:
      tab?.id==="management"?<SimulationManagement />:
      tab?.id==="eventLog"?<SimulationEvent />:
      null
    }
  </div>
  )
}
