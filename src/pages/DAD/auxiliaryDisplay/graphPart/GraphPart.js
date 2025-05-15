import React, { useEffect, useMemo, useState } from "react";
import classes from "../auxiliaryDisplay.module.css";
import { Coaches } from "../utilityComp";
import Footer from "../footer";
import LineChart from "../../../../components/DAD/lineChart/LineChart";
import CoupChart from "../../../../components/DAD/coupChart/CoupChart";
import SelectComponent from "../../../../components/DAD/selectComponent/SelectCompo";
import websocket from "../../../../services/Websocket";
import { topics } from "../../../../constant/topic";
import { lineColors } from "../constant";
import { throttle } from "lodash";
import { useDADGraphStore } from "./store";
import { DADNav } from "../DADNav";

const GraphPart=()=> {
  const [dropDownList, setDropDownList] = useState([]);
  const [couple_max, setMax] = useState({ buffer: 0, draft: 0 });
  const [locoData, setLocoData] = useState();
  const { selectedOptions, setSelectedOptions, graphData, setGraphData } =
  useDADGraphStore();
  const [lineData, setLineData] = useState(
    Array.from({ length: 25 }, (_, i) => ({
      x: i,
      y: 10000,
    }))
  );
  useEffect(() => {
    const callback = (event) =>{
      throttle(setDropDownList(event?.dad_keys), 1000);
    }

    const locoCallback = (event) => throttle(setLocoData(event), 1000);
    websocket.subscribe(topics.DAD_SELECTION_LIST, callback);
    websocket.subscribe(topics.TRAIN_CONFIG, locoCallback);
    return () => {
      websocket.unsubscribeTopic(topics.DAD_SELECTION_LIST);
      websocket.unsubscribeTopic(topics.TRAIN_CONFIG);
    };
  }, []);

  // console.log("locoData", locoData)

  useEffect(() => {
    const callback = throttle((event) => {
      setGraphData(event, 0);
    }, 1000);
    websocket.subscribe(selectedOptions[0], callback);
    return () => {
      websocket.unsubscribeTopic(selectedOptions[0]);
    };
  }, [selectedOptions[0]]);
  useEffect(() => {
    const callback = throttle((event) => {
      setGraphData(event, 1);
    }, 1000);
    websocket.subscribe(selectedOptions[1], callback);
    return () => {
      websocket.unsubscribeTopic(selectedOptions[1]);
    };
  }, [selectedOptions[1]]);

  useEffect(() => {
    const callback = throttle((event) => {
      setGraphData(event, 2);
    }, 1000);
    websocket.subscribe(selectedOptions[2], callback);
    return () => {
      websocket.unsubscribeTopic(selectedOptions[2]);
    };
  }, [selectedOptions[2]]);

  useEffect(() => {
    const callback = throttle((event) => {
      setGraphData(event, 3);
    }, 1000);
    websocket.subscribe(selectedOptions[3], callback);
    return () => {
      websocket.unsubscribeTopic(selectedOptions[3]);
    };
  }, [selectedOptions[3]]);

  useEffect(() => {
    const callback = throttle((event) => {
      setMax((prev) => ({ ...prev, draft: event }));
    }, 1000);
    websocket.subscribe(topics.MAX_DRAFT_FORCE, callback);
    return () => {
      websocket.unsubscribeTopic(topics.MAX_DRAFT_FORCE);
    };
  }, []);

  useEffect(() => {
    const callback = throttle((event) => {
      setMax((prev) => ({ ...prev, buffer: event }));
    }, 1000);
    websocket.subscribe(topics.MAX_BUFF_FORCE, callback);
    return () => {
      websocket.unsubscribeTopic(topics.MAX_BUFF_FORCE);
    };
  }, []);

  const options = dropDownList?.map((item, index) => ({
    label: item.name,
    value: item.key,
  }));
  const yRangeData = useMemo(() => {
    const data = {};
    dropDownList?.forEach((item) => {
      data[item.key] = {
        min: item.min,
        max: item.max,
        unit: item.unit,
      };
    });
    return data;
  }, [dropDownList]);
  let max = yRangeData[`${selectedOptions?.[0]}`]?.max || 0;
  let min = yRangeData[`${selectedOptions?.[0]}`]?.min || 0;
  const yMin = Math.abs(min) > Math.abs(max) ? min : -max;
  const yMax = Math.abs(min) > Math.abs(max) ? -min : max;

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setLineData((prev) => {
  //       if (prev.length === 0) return prev; // Handle empty array case

  //       return [
  //         ...prev.slice(1), // Remove first element
  //         { x: prev[prev.length - 1].x + 1, y: 10000 }, // Add new point
  //       ];
  //     });
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className={classes.section2}>
      <Coaches data={locoData} />
      <div>
        {Array.from({ length: 4 }, (_, index) => index).map((item, index) => {
          const currentYMax = Math.max(
            ...graphData?.[index]?.map((item) => item.y)
          )?.toFixed(0);
          const currentYMin = Math.min(
            ...graphData?.[index]?.map((item) => item.y)
          )?.toFixed(0);

          let yMax=yRangeData[`${selectedOptions?.[index]}`]?.max||1;
          let yMin=yRangeData[`${selectedOptions?.[index]}`]?.min||0;
          let yMinForRange=currentYMin||0;
          let yMaxForRange=currentYMin||0;
          if(Math.abs(yMax-yMin)<80)
          {
            yMinForRange=yMin;
            yMaxForRange=yMax;
          }
          else
          {
            if(currentYMax===currentYMin)
            {
              yMinForRange=currentYMin;
              yMaxForRange=currentYMax+1;
            }
          }
          return (
            <>
              <div>
                <SelectComponent
                  options={options}
                  defaultValue={selectedOptions?.[index]}
                  onChange={(e) => {
                    setSelectedOptions(e, index);
                  }}
                />
              </div>

              <div>
                <div>
                  {selectedOptions?.[index] === "coupler_force" ? (
                    <CoupChart
                      data={graphData?.[index]}
                      width={941}
                      height={54}
                      lineColor="rgba(0, 34, 255, 1)"
                      max={yMax}
                      min={yMin }
                    />
                  ) : (
                     graphData?.[index]?.length>0&&
                    <LineChart
                        data={graphData?.[index]?.map((item=>({...item, y:item?.y||0})))}
                        // data={lineData}
                        max={yMax}
                      min={yMin}
                      lineColor={lineColors[index]}
                    />
                  )}
                </div>
                {selectedOptions?.[index] === "coupler_force" ? (
                  <div className={classes.yRange2}>
                    <span>{yMaxForRange}</span>
                    <span>0</span>
                    <span>{yMinForRange}</span>
                  </div>
                ) : (
                  <div className={classes.yRange2}>
                    <span>{yMaxForRange}</span>
                    {yMinForRange < 0 && (
                      <span>0</span>
                    )}
                    <span>{yMinForRange }</span>
                  </div>
                )}
              </div>
              {selectedOptions?.[index] === "coupler_force" ? (
                <div className={classes.desDiv}>
                  <span>Max Buff: {couple_max?.buffer?.toFixed(2)} kN</span>
                  <span> Max Draft: {couple_max?.draft?.toFixed(2)} kN</span>
                </div>
              ) : (
                <div className={classes.desDiv}>
                  <span>
                    {graphData?.[index][graphData?.[index]?.length - 1]?.y?.toFixed(2)||0}{" "}
                    {yRangeData[`${selectedOptions?.[index]}`]?.unit}
                  </span>
                </div>
              )}
            </>
          );
        })}
      </div>
      <Footer />
      <DADNav />
    </section>
  );
}
export default GraphPart;
