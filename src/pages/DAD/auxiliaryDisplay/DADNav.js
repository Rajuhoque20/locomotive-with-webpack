import React from "react";
import { useDADStore } from "../store";
import classes from "./auxiliaryDisplay.module.css"

export const DADNav = () => {
    const { setScreen, screen } = useDADStore();
    return (
      <div className={classes.navigateAction}>
        <div
          style={{
            height: "100%",
            width: "2vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 40 40">
            <path
              d={`M10 10 L0 20 L10 30`}
              stroke="rgba(255, 255, 255, 0.5)"
              strokeWidth={2}
              fill="none"
            />
          </svg>
        </div>
        <div className={classes.navButtonDiv}>
          <span
            className={screen === "main" ? classes.navActive : ""}
            onClick={() => {
              setScreen("main");
            }}
          >
            DAD
          </span>
          <span
            className={screen === "EOTT" ? classes.navActive : ""}
            onClick={() => {
              setScreen("EOTT");
            }}
          >
            EOTT
          </span>
        </div>
        <div
          style={{
            height: "100%",
            width: "2vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 40 40">
            <path
              d="M10 10 L20 20 L10 30"
              stroke="rgba(255, 255, 255, 0.5)"
              strokeWidth={2}
              fill="none"
            />
          </svg>
        </div>
      </div>
    );
  };