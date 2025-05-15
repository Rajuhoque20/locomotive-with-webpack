import React, { useEffect, useRef, useState } from "react";
import "./../main.css";
import PanelC from "./PanelC";
import PanelA from "./PanelA";
import ControlPanel from "./ControlPanel";
// import DDU from "../DDU/DDU";
import PanelB from "./PanelB";
import { useReplicaStore } from "../CabReplicate/store";
import websocket from "../../../services/Websocket";
import { topics } from "../../../constant/topic";
export default function CabReplicaControlMain({ mode }) {
  const { cabReplicaData, updateReplicaData } = useReplicaStore();
  const [isClick, setIsClick] = useState(false);
  const clickRef = useRef(null);

  let values = Object.values(cabReplicaData);
  useEffect(() => {
    if (values?.length > 0 && isClick) {
      websocket.publish(topics.CAB_REPLICATE, cabReplicaData);
    }
  }, [values, isClick]);

  useEffect(() => {
    const handleClick = (event) => {
      if (!isClick) {
        setIsClick(true);
      }
    };

    // Attach the click event listener
    clickRef.current.addEventListener("click", handleClick);

    // Cleanup the event listener
    return () => {
      clickRef.current.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div
      style={{ border: "1vh solid #454645", borderRadius: "0.8rem" }}
      className="cab-replica-control-container"
      ref={clickRef}
    >
      <div className="cab-control-grid-container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 0.5fr" }}>
            {/* <PanelC data={cabReplicaData} /> */}
          </div>
          <div>
            <ControlPanel data={cabReplicaData} mode={mode} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
          {/* <DDU data={cabReplicaData?.ddu} /> */}
          <PanelA data={cabReplicaData} />
          <PanelB />
        </div>
      </div>
    </div>
  );
}
