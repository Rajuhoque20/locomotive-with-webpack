import React, { useEffect, useState } from "react";
import classes from "./auxiliaryDisplay.module.css";
import { Icons } from "#framework";
import websocket from "../../../services/Websocket";
import { topics } from "../../../constant/topic";
  const { footer_icon3, footer_icon4 } =Icons.DADIcons;

const Footer = () => {
  const [footer, setFooter] = useState({
    LOCO_PILOT_STOP: false,
    LOCO_PILOT_ALLRIGHT: false,
    EXCHANGE_SIGNAL_STOP: false,
    EXCHANGE_SIGNAL_ALLRIGHT: false,
  });

  useEffect(() => {
    const callback = (event) => {
      setFooter({
        LOCO_PILOT_STOP: event.stop_left,
        LOCO_PILOT_ALLRIGHT: event.alright_left,
        EXCHANGE_SIGNAL_STOP: event.stop_right,
        EXCHANGE_SIGNAL_ALLRIGHT: event.alright_right,
      });
    };
    websocket.subscribe(topics.DAD_FOOTER, callback);
    return () => {
      websocket.unsubscribeTopic(topics.DAD_FOOTER);
    };
  }, []);
  const publishFooter = (data) => {
    websocket.publish(topics.DAD_FOOTER, data);
  };

  useEffect(() => {
    publishFooter({
      alright_left: footer.LOCO_PILOT_ALLRIGHT,
      stop_left: footer.LOCO_PILOT_STOP,
    });
  }, [footer.LOCO_PILOT_ALLRIGHT, footer.LOCO_PILOT_STOP]);
  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footerContent}>
        <div
          className={footer?.LOCO_PILOT_ALLRIGHT ? classes.activeAlright : ""}
          onClick={() => {
            publishFooter();
            setFooter((prev) => ({
              ...prev,
              LOCO_PILOT_ALLRIGHT: !prev.LOCO_PILOT_ALLRIGHT,
              LOCO_PILOT_STOP: prev.LOCO_PILOT_ALLRIGHT,
            }));
          }}
        >
          <img src={footer_icon4} />
          <span>All Right</span>
        </div>
        <div
          className={footer?.LOCO_PILOT_STOP ? classes.activeStop : ""}
          onClick={() =>
            setFooter((prev) => ({
              ...prev,
              LOCO_PILOT_STOP: !prev.LOCO_PILOT_STOP,
              LOCO_PILOT_ALLRIGHT: prev.LOCO_PILOT_STOP,
            }))
          }
        >
          <img src={footer_icon3} />
          <span>Stop</span>
        </div>
        <div
          className={
            footer?.EXCHANGE_SIGNAL_ALLRIGHT ? classes.activeAlright : ""
          }
        >
          <img src={footer_icon4} />
          <span>All Right</span>
        </div>
        <div
          className={footer?.EXCHANGE_SIGNAL_STOP ? classes.activeStop : ""}
        >
          <img src={footer_icon3} />
          <span>Stop</span>
        </div>
      </div>
      <div className={classes.descriptionBox1}>Loco Pilot</div>
      <div className={classes.descriptionBox2}>Exchange signal</div>
      <div className={classes.footerDiv}></div>
    </div>
  );
};
export default React.memo(Footer);
