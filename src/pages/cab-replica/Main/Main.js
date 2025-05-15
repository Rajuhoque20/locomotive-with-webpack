import React, { useEffect } from "react";
import "./main.css";
import PanelC from "./PanelC";
import PanelA from "./PanelA";
import ControlPanel from "./ControlPanel";
import DDU from "../DDU/DDU";
import PanelB from "./PanelB";
import { useReplicaStore } from "../CabReplicate/store";
import websocket from "../../../services/Websocket";
import { BombarDierMain } from "../../DDU/bombardier/main";
import { topics } from "../../../constant/topic";
import { ARCMain } from "../../DDU/ARC/main";
// import ARCMain from "../../DDU/ARC/main";
const CabReplicaMain = ({ mode }) => {
  const { cabReplicaData, updateReplicaData } = useReplicaStore();
  const socketConnectionFn = () => {
    const callback = (event) => {
      updateReplicaData(event);
    };
    websocket.subscribe(topics.CAB_REPLICATE, callback);
  };
  useEffect(() => {
    socketConnectionFn();
  }, []);

  return (
    <div
      style={{ border: "1vh solid #454645", borderRadius: "0.8rem", background:"#1e2021",height: "100vh" , padding: "1vh"}}
    >
      <div className="cab-grid-container">
        <PanelC data={cabReplicaData} />
        <PanelA data={cabReplicaData} />
        {/* <DDU data={cabReplicaData?.flg} /> */}
        {/* <div>
        <BombarDierMain callScreen={"cab_replicate"} />
        </div> */}

        <div style={{border:"2px solid #fff", borderRadius:"0.5rem"}}>
        {/* <ARCMain callScreen={"cab_replicate"} DDUType={"ARC"}/> */}
        <BombarDierMain callScreen={"cab_replicate"} />
        </div>
       
        <ControlPanel data={cabReplicaData} mode={mode} />
        <PanelB data={cabReplicaData} />
      </div>
    </div>
  );
};
export default React.memo(CabReplicaMain);
