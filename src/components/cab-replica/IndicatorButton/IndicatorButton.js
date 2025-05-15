import React from "react";
import { Icons } from "#framework";
export const IndicatorBtn = ({ color, name, value = 0 }) => {
  const {
    Pressed_Button_Indicator_red,
    Button_Indicator_yellow2,
    Button_Indicator_yellow,
    Button_Indicator_red,
    blueIndicator,
    Button_Indicator_blue,
    Pressed_Button_Indicator_green,
    Button_Indicator_green,
  } = Icons.CRIcons;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {value === 1 || value === -1 ? (
        <img
          style={{ width: "100%" }}
          //  onClick={()=>{setActive(false)}}
          src={
            color === "red"
              ? Pressed_Button_Indicator_red
              : color === "yellow"
              ? Button_Indicator_yellow2
              : Pressed_Button_Indicator_green
          }
        />
      ) : (
        <img
          style={{ width: "100%" }}
          //  onClick={()=>{setActive(true)}}
          src={
            color === "red"
              ? Button_Indicator_red
              : color === "yellow"
              ? Button_Indicator_yellow
              : Button_Indicator_green
          }
        />
      )}
      <span style={{ color: "white", fontSize: "clamp(0.6rem, 1.3vh, 3vh)" }}>
        {name}
      </span>
    </div>
  );
};
