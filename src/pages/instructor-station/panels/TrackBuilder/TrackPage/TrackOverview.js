import React from "react";
import "./TrackOverview.css";
import BannerComponent from "../../../../../components/Instructor-station/UIComp/BannerComponent";
import OverViewHeaderComp from "../../../../../components/Instructor-station/UIComp/OverViewHeaderComp";
import ActionsCards from "../../../../../components/Instructor-station/UIComp/ActionsCards";
import { useTrackStore } from "../Track-store";
import {Icons} from '#framework';
import "./../../ExercisePanel/Page/ExerciseOverview.css";

function handleEdit() {}
function handleDropDown(item) {
    console.log("handleDropDown",item)
}

export default function TrackOverview() {
   const {track_preview} = Icons.ISIcons;

  const { addTab } = useTrackStore();
  function handleRun() {
    console.log("runnnn");
    addTab("New Simulation", "simulation", "/simulation");
  }
  const CardData = [
    {
      id: 1,
      title: "Howrah Junction to Sealdah",
      lastRunDate: "2024-10-07",
      icon: track_preview
    },
    {
      id: 2,
      title: "Howrah Junction to Sealdah",
      lastRunDate: "2024-10-03",
      icon: track_preview
    },
    {
      id: 3,
      title: "Howrah Junction to Sealdah",
      lastRunDate: "2024-10-07",
      icon: track_preview
    },
    {
      id: 4,
      title: "Howrah Junction to Sealdah",
      lastRunDate: "2024-10-03",
      icon: track_preview
    },
    {
      id: 5,
      title: "Howrah Junction to Sealdah",
      lastRunDate: "2024-10-07",
      icon: track_preview
    },
    {
      id: 6,
      title: "Howrah Junction to Sealdah",
      lastRunDate: "2024-10-03",
      icon: track_preview
    }
  ];
  return (
    <div className="Container">
      <div className="excercise-container">
        <div className="excercise-banner">
          <BannerComponent button={true} btntitle={'New Track'} title={'Welcome to the Track Builder'} subtitle={'Create tracks for dynamic simulation environments.'}/>
        </div>
        <div className="excercixe-header">
          <OverViewHeaderComp/>
        </div>
        <div className="excercise-cards">
         {CardData?.map(x => {
          return (
            <ActionsCards title={x.title} subtitle={x.lastRunDate} img={x.icon} cardtype={'track'}/>
          )
         })}
        </div>
      </div>

    </div>
  );
}
