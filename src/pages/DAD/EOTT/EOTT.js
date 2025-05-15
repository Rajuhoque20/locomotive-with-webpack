import React, { useEffect, useState } from "react";
import classes from "./EOTT.module.css";

import { Icons } from "#framework";
import { throttle } from "lodash";
import websocket from "../../../services/Websocket";
import { topics } from "../../../constant/topic";
import { DADNav } from "../auxiliaryDisplay/DADNav";
const EOTT = () => {
  const [eottData, setEottData]=useState();
  const { eott_icon, eott_speedometer_icon, eott_icon2, eott_icon3 } =
    Icons.DADIcons;

    useEffect(()=>{
    const callback=throttle((event)=>{
      setEottData(event);
    },1000);
    websocket.subscribe(topics.EOTT, callback);
    return()=>{
      websocket.unsubscribeTopic(topics.EOTT);
    }
    },[])
  return (
    <div className={classes.containerWrapper}>
      <div className={classes.container}>
        <div className={classes.eottWrapper}>
          <div className={classes.eott}>
            <div className={classes.armedPressure}>
              <h1>{eottData?.pressure}</h1>
              <div className="d-flex align-center justify-between">
                <span>ARMED</span>
                <span>Pressure Kpa</span>
              </div>
            </div>
            <span className="text-align-center fs-1 d-flex align-center justify-center">
              {eottData?.f?"F":""}
            </span>
            <div className={classes.trainOk}>
              <img src={eott_icon} />
              <span>{eottData?.condition}</span>
            </div>
            <span className="text-align-center fs-1 d-flex align-center justify-center">
            {eottData?.x?"s":"S"}
            </span>
            <div className={classes.spedoDiv}>
              <div className={classes.cuKm}>
                <span>CU</span>
                <span>km</span>
                <span>/h</span>
              </div>
              <div className={classes.speedometer}>
                <span>{eottData?.speed_of_train}</span>
                <img src={eott_speedometer_icon} />
                <span>{eottData?.speed_of_eott}</span>
              </div>
              <div className={classes.cuKm}>
                <span>RU</span>
                <span>km</span>
                <span>/h</span>
              </div>
            </div>
            <span className="text-align-center fs-1 d-flex align-center justify-center">
              {eottData?.x?"X":""}
            </span>
            <div className={classes.battery}>
              <img src={eott_icon2} />
              <span>CU</span>
              <h2>{eottData?.voltage}</h2>
              <small>v</small>
            </div>
            <div className={classes.battery}>
              <img src={eott_icon3} />
              <span>RU</span>
              <h2>{eottData?.battery_time}</h2>
              <small>h</small>
            </div>
            <div>
              <span>Distance</span>
              <h2>{eottData?.distance}m</h2>
            </div>
            <div>
              <span>ID : 39995</span>
              <h2>{eottData?.time}</h2>
            </div>
          </div>
        </div>
        <div style={{ margin: "auto auto 2vh auto" }}>
          <DADNav/>
        </div>
      </div>
    </div>
  );
};
export default EOTT;
