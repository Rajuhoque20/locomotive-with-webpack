import React from "react";
import MR from "../CabReplicate/MR";
import Speedometer from "../CabReplicate/Speedometer";
import Af from "../CabReplicate/Af";
import BP from "../CabReplicate/BP";
import ParkingBreak from "../CabReplicate/ParkingBreak";
import BrakeCylinder from "../CabReplicate/BrakeCylinder";
import { replicaKeys } from "../../../constant/cabReplica";
const PanelC = ({ data }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        height: "100%",
      }}
    >
      <BrakeCylinder
        data={{
          ld: data?.[replicaKeys.BCP_BOGIE_1],
          rd: data?.[replicaKeys.BCP_BOGIE_2],
        }}
      />
      <MR
        data={{
          fp: data?.[replicaKeys.FEED_PIPE_PRESSURE],
          mr: data?.[replicaKeys.MAIN_RESERVOIR_PRESSURE],
        }}
      />
      <Speedometer data={data?.[replicaKeys.SPEED]} />
      <Af data={data?.[replicaKeys.AIR_FLOW_METER]} />
      <BP data={data?.[replicaKeys.BRAKE_PIPE_PRESSURE]} />
      <ParkingBreak data={data?.[replicaKeys.PARKING_BRAKE]} />
    </div>
  );
};
export default React.memo(PanelC);
