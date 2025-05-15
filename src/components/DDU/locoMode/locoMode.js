import React from "react";
import "./locoMode.css";
import { Icons } from "#framework";

export const LocoMode = ({
  type = "M",
  number = "",
  name = "WAP7",
  activeCab = 2,
  activeScreen = true,
  direction = "forward",
  screen,
  
}) => {
  const { loco_mode_icon, forward_direction_icon, locomode_arc_arrow } =
    Icons.DDUIcons;
  return (
    <>
    {screen === "ARC" ? (
        <div className="arc-locomode-wrapper">
          <img
          
            src={locomode_arc_arrow}
            style={{
              alignSelf: "flex-start",
              marginLeft: direction==="forward"?"auto":"20%",
              marginRight:direction==="forward"?"20%":"0",
              marginBottom: "0.2vh",
              transform:`rotate(${direction==="forward"?"180deg":"0"})`,
              
            }}
          />
          <div className="arc-loco1">
            <div>
              {direction!=="forward"&&<span className="arc-mode-indicator"></span>}
            </div>
            <div>
              <span
                className="fc-1 fs-5"
                style={{fontSize:"0.7rem"}}
             
              >
                1
              </span>
              <span
                className="fc-1 fs-5"
                style={{fontSize:"0.7rem"}}
              
              >
                2
              </span>
            </div>
            <div>
            {direction==="forward"&&<span className="arc-mode-indicator"></span>}
            </div>
          </div>
          <span
            className="fs-4 fc-1"
            style={{fontSize:"0.7rem"}}
        
          >
           {number}
          </span>
        </div>
      ) : (
        <div className={`loco-mode ${activeScreen ? "active-screen" : ""}`}>
          <div className="loco-content">
            <div>
              {direction === "forward" ? (
                <img src={forward_direction_icon} />
              ) : (
                <span></span>
              )}
              <label
                className={`${activeScreen ? "fc-3 fs-4" : "fc-1 fs-4"}`}
                style={{fontSize:"0.7rem"}}
               
              >
                {type}
              </label>
            </div>
            <label
              className={activeScreen ? "fc-3 fs-4" : "fc-1 fs-4"}
              style={{fontSize:"0.7rem"}}
            
            >
              {name}
            </label>
            <div className="cabs">
              <span className={`${activeCab === 1 ? "active-cab" : ""}`}></span>
              <span className={`${activeCab === 2 ? "active-cab" : ""}`}></span>
            </div>
            <div>
              <label
                className={activeScreen ? "fc-3 fs-4" : "fc-1 fs-4"}
                style={{fontSize:"0.7rem"}}
                
              >
                1
              </label>
              <label
                className={activeScreen ? "fc-3 fs-4" : "fc-1 fs-4"}
                style={{fontSize:"0.7rem"}}
               
              >
                2
              </label>
            </div>
            <span
              className={activeScreen ? "fc-3 fs-4" : "fc-1 fs-4"}
              style={{fontSize:"0.7rem"}}
             
            >
              {number}
            </span>
          </div>
          <div></div>
          <img src={loco_mode_icon} className="mode-border" />
        </div>
      )}
    </>
  );
};
