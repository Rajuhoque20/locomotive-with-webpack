import React from "react";
import { Icons } from "#framework";
import { useDADStore } from "../store";
import classes from "./auxiliaryDisplay.module.css";
import { trainConfigIcons } from "./constant";
export const Coaches = ({ data }) => {
  const { coach1, coach2 } = Icons.DADIcons;
 
  return (
    <div className={classes.coaches}>
      <div>Train</div>
      <div>
        {data?.map((item, index) => {
          let icon = item?.loco_type
            ? trainConfigIcons[item?.loco_type]
            : item?.coach_type
            ? trainConfigIcons[item?.coach_type]
            : null;
          return <img src={icon} />;
        })}
      </div>
    </div>
  );
};
export const Boxes = () => {
  return (
    <>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </>
  );
};
export const Distance = ({ pathRange }) => {
  return (
    <div className={classes.distance}>
      <span></span>
      <div className={classes.disComp}>
        <div style={{ color: "#fff", fontSize: "1.7vh" }}>-1.0</div>
        {Array.from({ length: pathRange + 1 }, (_, index) => index)?.map(
          (item, index) => {
            return (
              <>
                <Boxes />
                <div style={{ color: "#fff", fontSize: "1.7vh" }}>
                  {item.toFixed(1)}
                </div>
              </>
            );
          }
        )}
      </div>
    </div>
  );
};
export const TrainInfo = ({ data }) => {
  return (
    <div className={classes.description}>
      <span></span>
      <div>
        <span>Length: {data?.train_length || 0} m</span>
        <span>Load: {data?.load || 0} ton</span>
        <span>Current Speed: {data?.current_speed || 0} km/h</span>
        <span>Odo: {data?.odo || 0} km</span>
        <span>Time: {data?.time || 0} min</span>
        <span>Limit: {data?.speed_limit || 0} km/h</span>
      </div>
    </div>
  );
};
export const Actions = ({ pathRange, setPathRange }) => {
  const { print_icon, plus_icon, minus_icon } = Icons.DADIcons;
  const { setScreen } = useDADStore();
  return (
    <div className={classes.actions}>
      <span></span>
      <div>
        <img
          src={plus_icon}
          className={classes.actionButton}
          onClick={() => {
            if (pathRange > 1) {
              setPathRange((prev) => prev - 1);
            }
          }}
        />
        <img
          src={minus_icon}
          className={classes.actionButton}
          onClick={() => {
            if (pathRange < 2) {
              setPathRange((prev) => prev + 1);
            }
          }}
        />
        <button
          className={classes.cautionOrder}
          onClick={() => {
            setScreen("caution_order");
          }}
        >
          Caution Order
        </button>
      </div>
    </div>
  );
};
