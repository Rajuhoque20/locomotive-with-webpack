// import React, { useEffect, useState } from "react";
// import "./SimulatorOverView.css";
// import BannerComponent from "../../../../../components/Instructor-station/UIComp/BannerComponent";
// import OverViewHeaderComp from "../../../../../components/Instructor-station/UIComp/OverViewHeaderComp";
// import ActionsCards from "../../../../../components/Instructor-station/UIComp/ActionsCards";
// import { useSimulatorStore } from "../simulator-store";
// import { Icons } from "#framework";
// import websocket from "../../../../../services/Websocket";


// export default function SimulatorOverView() {
//   const {train2} = Icons.ISIcons;
//   const [currentCards,setcurrentCards] = useState([])
//   const { addTab } = useSimulatorStore(state=>state);

//   function handleRun(x) {

//         addTab(x.session_name, "simulation", "/simulation",{sessionId:x.sessionid});

//   }


//   useEffect(()=>{
//     websocket.send("overview-list","subscribe",null);
//     const callback=(event)=>{
//       if(event)
//       {
//         setcurrentCards(event);
//       }
//     }
//     websocket.subscribe("overview-list",callback);
//     return ( () => {
//       websocket.unsubscribe('overview-list')
//     })
//   },[])

//   let CardData = currentCards || [];


//   return (
//     <div className="Container">
//       <div className="excercise-container">
//         <div className="excercise-banner">
//           <BannerComponent
//             title={"Welcome to the Live Simulator"}
//             subtitle={
//               "Real-time driver training with active monitoring and control"
//             }
//           />
//         </div>
//         <div className="excercixe-header">
//           <OverViewHeaderComp />
//         </div>
//         <>

//         {CardData?.length>0?<div className="excercise-cards">
//          {
//          CardData?.map(x => {
//           return (
//             <ActionsCards id={x.id} title={x.session_name} subtitle={x.session_end} img={train2} cardtype={'run'} handleRun={()=>{handleRun(x)}}/>
//           )
//          })
//         }
//         </div>:<h1 style={{color:'white',fontSize:'2vh'}}>Loading...</h1>}
//         </>

//       </div>
//     </div>
//   );
// }


// ----------------------------------------------------------------------------------------------------

import React, { useEffect, useState, useCallback } from "react";
import "./SimulatorOverView.css";
import "./../../ExercisePanel/Page/ExerciseOverview.css"
import BannerComponent from "../../../../../components/Instructor-station/UIComp/BannerComponent";
import OverViewHeaderComp from "../../../../../components/Instructor-station/UIComp/OverViewHeaderComp";
import ActionsCards from "../../../../../components/Instructor-station/UIComp/ActionsCards";
import { useSimulatorStore } from "../simulator-store";
import { Icons } from "#framework";
import websocket from "../../../../../services/Websocket";

const SimulatorOverView = () => {
  const { train2 } = Icons.ISIcons;
  const [currentCards, setCurrentCards] = useState([]);
  const { addTab } = useSimulatorStore(state => state);

  // Memoized function to handle the "Run" button click event
  const handleRun = useCallback((x) => {
    addTab(x.session_name, "simulation", "/simulation", { sessionId: x.sessionid });
  }, [addTab]);

  // WebSocket subscription with cleanup
  useEffect(() => {
    const callback = (event) => {
      if (event) {
        setCurrentCards(event);
      }
    };

    websocket.send("overview-list", "subscribe", null);
    websocket.subscribe("overview-list", callback);

    return () => {
      websocket.unsubscribe("overview-list");
    };
  }, []);

  // Render cards or loading message
  return (
    <div className="Container">
      <div className="excercise-container">
        <div className="excercise-banner">
          <BannerComponent
            title={"Welcome to the Live Simulator"}
            subtitle={"Real-time driver training with active monitoring and control"}
          />
        </div>
        <div className="excercixe-header">
          <OverViewHeaderComp />
        </div>

        {/* Render either the cards or a loading message */}
        {currentCards?.length > 0 ? (
          <div className="excercise-cards">
            {currentCards.map(x => (
              <ActionsCards
                key={x.id}
                id={x.id}
                title={x.session_name}
                subtitle={x.session_end}
                img={train2}
                cardtype={"run"}
                handleRun={() => handleRun(x)}
              />
            ))}
          </div>
        ) : (
          <h1 style={{ color: 'white', fontSize: '2vh' }}>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default SimulatorOverView;

