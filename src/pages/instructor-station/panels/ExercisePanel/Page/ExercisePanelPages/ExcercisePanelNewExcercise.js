import React, { useEffect, useState } from "react";
import {notification } from 'antd';
import { useParams } from "react-router-dom";
import NavTab from "../../../../../../components/Instructor-station/UIComp/NavTab";
import './ExcercisePanelNewExcercise.css'
import ButtonComp from "../../../../../../components/Instructor-station/UIComp/ButtonComp";
import { useExerciseStore } from '../../store';
import ExcercisePanelEvents from "./ExcercisePanelEvents";
import ExcercisePanelAtmosphere from "./ExcercisePanelAtmosphere";
import ExcercisePanelTrainConfig from "./ExcercisePanelTrainConfig";
import ExcercisePanelEvaluation from "./ExcercisePanelEvaluation";
import ExcercisePanelFault from "./ExcercisePanelFault";
import ExcercisePanelTrackSelection from "./ExcercisePanelTrackSelection";
import { Icons } from "#framework";
import { Excercises } from "../../../../../../assets/Instructor-station/SampleData/CardData";
import moment from "moment";
import { ExcercisePanelCautionOrders } from "./ExcercisePanelCautionOrders";
export default function ExercisePanelNewExercise() {
  const [api, contextHolder] = notification.useNotification();
  const {trainConfigIcon,eventsIcon,atmosphereIcon,new_exercise_button_icon,train_select_icon,caution_icon,assesment_icon,train1} = Icons.ISIcons;
  const activeId = useExerciseStore((store) => store.activeId);
   const tabs = useExerciseStore((store) => store.tabs);
  const {updateTab, activeTab}=useExerciseStore();
  const tabId = useParams();
  const [pageContent, setPageContent] = useState();
  const navData = [
    {
      id: "trainConfiguration",
      label: "Train Configuration",
      icon:trainConfigIcon
    },
    {
        id: "trackSelection",
        label: "Track Selection",
        icon:train_select_icon
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
    {
      id: "faults",
      label: "Faults",
      icon:caution_icon
    },
    {
      id: "cautionorders",
      label: "Caution Orders",
      icon:caution_icon
    },
    {
      id:'evaluation',
      label:'Evaluation',
      icon:assesment_icon
    }
  ];
  const [tab, setTab] = useState(navData[0]);
  const [exerciseName,setExerciseName] = useState('');
  const handleTabChange = (val) => {
    console.log("tab changed", val);
    setTab(val)
  };

  const handleSaveExcercise = () => {
    let obj = {
        id: Excercises.length+1,
        title:exerciseName,
        lastRunDate: moment(new Date()).format('YYYY/MM/DD'),
        icon: train1
    };
    const id=tabs?.filter(item=>item.path===activeTab)?.[0]?.id;
    
    if(!exerciseName){
      api.open({
        message: <div style={{color:'red'}}> ERROR</div>,
        description:<div style={{color:'rgba(255, 255, 255, 0.98)'}}>'Please Enter Excercise Name'</div>,
        duration: 0.1,
        style:{height:"15vh",width:"25vw",background:'var(--Windows-Glass, rgba(22, 18, 49, 0.98))'},

      });
    }else{
      updateTab(id, {title:exerciseName});
      Excercises.push(obj)
    }
   
  }
  useEffect(() => {
    console.log("getting id", activeId, "paramId", tabId, "tabs", tabs);
    let tabData = tabs.find((tab) => tab.id === activeId);
    setPageContent({ ...tabData, ...pageContent });
    console.log("tabData", tabData);
  }, [activeId, tabId]);

  return (
    <div style={{width:'100%'}}>
     
      <div  className='ep_nav_div'>

     
        <NavTab
          data={navData}
          onClick={handleTabChange}
          defaultView={tab}
        /> 
        <div style={{display:'flex',gap:'1vh',alignItems:'center'}}>
        {contextHolder}
          {/* <InputName placeholder={'exercise name'} name={exerciseName} onChange={(e)=>{setExerciseName(e.target.value)}} /> */}
          {/* <input  className="ep_nav_input" placeholder="Exercise Name" onChange={(e)=>{setExerciseName(e.target.value)}}/> */}
          <ButtonComp onClick={() => {handleSaveExcercise()}} bntStyle={{"width":"13vw","height":"6vh","border-radius":"1vh",'font-size':"var(--font-size-3)"}} title={"Save Exercise"} prefixIcon={new_exercise_button_icon}  />
        </div>
      </div>

      {
        tab?.id==="trainConfiguration"?<ExcercisePanelTrainConfig />:
        tab?.id==="faults"?<ExcercisePanelFault />:
        tab?.id==="atmosphere"?<ExcercisePanelAtmosphere />:
        tab?.id==="events"?<ExcercisePanelEvents />:
        tab?.id==="evaluation"?<ExcercisePanelEvaluation/>:
        tab?.id==='trackSelection'?<ExcercisePanelTrackSelection/>:
        tab?.id==='cautionorders'?<ExcercisePanelCautionOrders/>:

        null
      }
    </div>
  );
}
