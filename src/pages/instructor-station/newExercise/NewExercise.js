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
import InputName from "../../components/Instructor-station/UIComp/InputName";
import ExerciseOverView from "./ExerciseOverView";
import TrainConfig from "./TrainConfig";
import Atmoshpere from "./Atmoshpere";
import ExerciseEvents from "./ExerciseEvents";
export default function NewExercise() {
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
      id: "trainConfiguration",
      label: "Train Configuration",
      icon:trainConfigIcon
    },
    {
      id: "atmosphere",
      label: "Atmosphere",
      icon:atmosphereIcon
    },
    {
      id: "events",
      label: "Events",
      icon:eventsIcon
    },
  ];
  const [tab, setTab] = useState(navData[0]);
  const [exerciseName,setExerciseName] = useState('');
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
          <InputName placeholder={'exercise name'} name={exerciseName} onChange={(e)=>{setExerciseName(e.target.value)}} />
          <ButtonComp title={"Save Exercise"} prefixIcon={exercise_button_icon} />
        </div>
      </div>

      {tab?.id==="overview"?<ExerciseOverView />:
        tab?.id==="trainConfiguration"?<TrainConfig />:
        tab?.id==="atmosphere"?<Atmoshpere />:
        tab?.id==="events"?<ExerciseEvents />:
        null
      }
    </div>
  );
}
