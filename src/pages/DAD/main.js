import React from "react";
import { useDADStore } from "./store";
import AuxiliaryDisplay from "./auxiliaryDisplay/auxiliaryDisplay";
import CautionOrder from "./cautionOrder/cautionOrder";
import EOTT from "./EOTT/EOTT";

const DADmain = () => {
  const { screen } = useDADStore();
  return (
    <>
      {screen === "main" && <AuxiliaryDisplay />}
      {screen === "caution_order" && <CautionOrder />}
      {screen === "EOTT" && <EOTT />}
    </>
  );
};
export default DADmain;
