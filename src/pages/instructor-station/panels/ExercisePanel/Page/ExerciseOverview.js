import React from "react";
import "./ExerciseOverview.css";
// import "./recentCards/recentCards.css";
import { useExerciseStore } from '../store';
import BannerComponent from "../../../../../components/Instructor-station/UIComp/BannerComponent";
import OverViewHeaderComp from "../../../../../components/Instructor-station/UIComp/OverViewHeaderComp";
import ActionsCards from "../../../../../components/Instructor-station/UIComp/ActionsCards";
import { useNavigate } from 'react-router-dom';
import { Icons } from "#framework";
import {Excercises} from '../../../../../assets/Instructor-station/SampleData/CardData'
// function handleEdit() {}

// function handleDropDown(item) {
//     console.log("handleDropDown",item)
// }



export default function ExcerciseOverview() {
  const {train1,train2} = Icons.ISIcons;
  const naviage=useNavigate()
  const { addTab,activeTab,getNewPath ,setActiveTab} = useExerciseStore(state=>state);
  function handleNewExcercise(){
    // // console.log('data',extendedTabs)
    // let path = getNewPath("exercise-panel","/new-exercise")
    addTab('New Untitled Exercise',"exercise-panel","/new-exercise")
    // naviage(path)
    // setActiveTab(path)
}
  const CardData = [
    {
      id: 1,
      title: "WAP varanasi toughalsarai",
      lastRunDate: "2024-10-07",
      icon: train1
    },
    {
      id: 2,
      title: "WAP kanpur mirzapur",
      lastRunDate: "2024-10-03",
      icon: train2
    },
    {
      id: 3,
      title: "WAP delhi prayagraj",
      lastRunDate: "2024-10-03",
      icon: train2
    },
    {
      id: 4,
      title: "WAP delhi prayagraj",
      lastRunDate: "2024-10-03",
      icon: train1
    },
  ];
  return (
    <div className="Container">
      <div className="excercise-container">
        <div className="excercise-banner">
          <BannerComponent button={true} onClick={() => {handleNewExcercise()}}/>
        </div>
        <div className="excercixe-header">
          <OverViewHeaderComp/>
        </div>
        <div className="excercise-cards">
         {Excercises?.map(x => {
          return (
            <ActionsCards title={x.title} subtitle={x.lastRunDate} img={x.icon}/>
          )
         })}
        </div>
      </div>

    </div>
  );
}
