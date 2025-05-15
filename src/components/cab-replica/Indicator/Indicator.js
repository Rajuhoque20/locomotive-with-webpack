import React from "react";
import classes from "./Indicator.module.css";

import GlowRed from '@/assets//cab-replica/icons/GlowRed.svg';
import GlowYellow from '@/assets//cab-replica/icons/GlowYellow.svg';
import redIndicator from '@/assets//cab-replica/icons/redIndicator.svg';
import yellowIndicator from '@/assets//cab-replica/icons/yellowIndicator.svg';

export const Indicator = ({ color, name, value }) => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      {value === 1 || value === 2 ? (
        <img
          style={{ width: "100%" }}
          className={value === 2 ? classes.glowIndicator : ""}
          // onClick={()=>{setActive(false)}}
          src={
            color === "red" ? GlowRed : color === "yellow" ? GlowYellow : null
          }
        />
      ) : (
        <img
          style={{ width: "100%" }}
          // onClick={()=>{setActive(true)}}
          src={
            color === "red"
              ? redIndicator
              : color === "yellow"
              ? yellowIndicator
              : null
          }
        />
      )}
      <span style={{ color: "white", fontSize: "clamp(0.6rem, 1.3vh, 3vh)" }}>
        {name}
      </span>
    </div>
  );
};
