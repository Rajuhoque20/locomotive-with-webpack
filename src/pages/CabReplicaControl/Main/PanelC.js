import React from "react";
import MR from "../CabReplicate/MR";
import Speedometer from "../CabReplicate/Speedometer";
import Af from "../CabReplicate/Af";
import BP from "../CabReplicate/BP";
import ParkingBreak from "../CabReplicate/ParkingBreak";
import BrakeCylinder from "../CabReplicate/BrakeCylinder";
export default function PanelC({ data }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        height: "min-content",
      }}
    >
      <BrakeCylinder data={{ ld: data?.bcp_bogie_1, rd: data?.bcp_bogie_2 }} />
      <MR
        data={{
          fp: data?.feed_pipe_pressure,
          mr: data?.main_reservoir_pressure,
        }}
      />
      <Speedometer data={data?.speed} />
      <Af data={data?.air_flow_meter} />
      <BP data={data?.brake_pipe_pressure} />
      <ParkingBreak data={data?.parkingBrake} />
    </div>
  );
}
