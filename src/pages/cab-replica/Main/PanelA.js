import React, { useEffect, useRef, useState } from "react";
import U from "../CabReplicate/U";
import Bogie1 from "../CabReplicate/Bogie1";
import Bogie2 from "../CabReplicate/Bogie2";
import UBA from "../CabReplicate/UBA";
import { replicaKeys } from "../../../constant/cabReplica";
import { getIndicatorBtnData, getIndicatorData } from "./utilityMethod";
import { Indicator } from "../../../components/cab-replica/Indicator/Indicator";
import { IndicatorBtn } from "../../../components/cab-replica/IndicatorButton/IndicatorButton";
const PanelA = ({ data }) => {
  const indicatorData = getIndicatorData(data);
  const indicatorBtnData = getIndicatorBtnData(data);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const heightRef = useRef(null);
  useEffect(() => {
    const calculateDimension = () => {
      const { offsetHeight, offsetWidth } = heightRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    };
    if (heightRef.current) {
      const resizeObserver = new ResizeObserver(calculateDimension);
      resizeObserver.observe(heightRef.current);
      // Cleanup observer on component unmount
      return () => resizeObserver.disconnect();
    }
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr 1.3fr",
        height: "100%",
      }}
      ref={heightRef}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        <U data={data?.[replicaKeys.U_CANTERNARY]} dimensions={dimensions} />
        <Bogie1
          data={data?.[replicaKeys.BOGGIE_1_TEBE_METER]}
          dimensions={dimensions}
        />
        <Bogie2
          data={data?.[replicaKeys.BOGGIE_2_TEBE_METER]}
          dimensions={dimensions}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <UBA data={data?.[replicaKeys.UBA_BATTERY]} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "33% 33% 33%",
            gridTemplateRows: "33% 33% 33%",
          }}
        >
          {indicatorData?.map((item, index) => {
            return (
              <Indicator
                key={index}
                name={item.name}
                color={item.color}
                type={item.type}
                value={item.value}
              />
            );
          })}
          {indicatorBtnData?.map((item, index) => {
            return (
              <IndicatorBtn
                key={index}
                name={item.name}
                color={item.color}
                type={item.type}
                value={item.value}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default React.memo(PanelA);
