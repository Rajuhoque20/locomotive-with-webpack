import React from "react";
import classes from "./footer.module.css";
import { useDDUBTStore } from "../store";
import { Icons } from "#framework";
import { getFontSize } from "../home/constant";
export const Brakes = ({ name, icon }) => {
  const { handleActivateScreen } = useDDUBTStore();
  return (
    <div
      className={classes.eachBrake}
      onClick={() => {
        if (name === "PARKING BRAKE") {
          handleActivateScreen({ type: "apply parking brake", data: null });
        } else if (name === "SANDING") {
          handleActivateScreen({ type: "activate sanding", data: null });
        }
      }}
    >
      <img
        src={icon}
        style={{
          height: "2.5rem",
          gap:"0.5rem",
        }}
      />
      <label
        className="fc-1"
        style={{
          fontSize: "0.8rem",
        }}
      >
        {name}
      </label>
    </div>
  );
};
export const BombarFooter = ({ rightContent, setRightContent, brakeData, data }) => {
  const {
    wheel_slip_icon,
    whilslip_inactive,
    sanding_inactive,
    sanding_icon,
    loco_brake_icon,
    loco_brake_released,
    parking_brake_icon,
    parking_brake_applied,
    emergance_brake_icon,
    emergance_brake_applied,
    vigilance_brake_icon,
    vigilance_brake_applied,
  } = Icons.DDUIcons;
  const brake_info = [
    {
      name: "WHEEL SLIP",
      icon:brakeData?.wheelSlip? wheel_slip_icon:whilslip_inactive,
    },
    {
      name: "SANDING",
      icon:brakeData?.sanding? sanding_icon:sanding_inactive,
    },
    {
      name: "LOCO BRAKE",
      icon:brakeData?.locoBrake?loco_brake_icon:loco_brake_released,
    },
    {
      name: "TRAIN BRAKE",
      icon:brakeData?.trainBrake?loco_brake_icon:loco_brake_released,
    },
    {
      name: "PARKING BRAKE",
      icon:brakeData?.parkingBrake?parking_brake_applied:parking_brake_icon,
    },
    {
      name: "EMERG. BRAKE",
      icon:brakeData?.emergencyBrake?emergance_brake_applied: emergance_brake_icon,
    },
    {
      name: "VIGILA. BRAKE",
      icon:brakeData?.vigilance?vigilance_brake_applied: vigilance_brake_icon,
    },
  ];
  return (
    <div className={classes.bombarFooter}>
      <div className={classes.section1}>
        <div className={classes.brakeDiv}>
          {brake_info?.map((item, index) => {
            return (
              <Brakes
                name={item.name}
                icon={item.icon}
              />
            );
          })}
        </div>
        <div className={classes.textDiv}>
          {rightContent === 3 && (
            <div
              className="d-flex flex-col align-center justify-center mx-1 fc-1 gap-1 flex-1"
              style={{
                fontSize:"0.8rem",
              }}
            >
              <span>MORE THAN ONE CAB ACTIVE.</span>
              <span>DEACTIVATE NON DRIVING CAB.</span>
              <span>OTHERWISE AFTER 10 MINUTES MCE SWITCHES OFF.</span>
            </div>
          )}
          {rightContent === 2 && (
            <span
              className="fs-4"
              style={{
                fontSize: "0.8rem",
              }}
            >
              LOCO XXX SS13 : CAB 1 DISTURBANCE IN PROCESSOR CE1MIO41CAB 1 MAY
              GET ISOLATED; DRIVE FROM CAB 2 REFER TO DRIVER'S MANUAL
            </span>
          )}
          {rightContent === 1 && (
            <div className={classes.rightContent1}>
              <span>SIMULATION STATUS: ON</span>
              <div>
                <div>
                  <span>FLG1: {data?.flg||0}</span>
                  <span>FLG2: {data?.flg||0}</span>
                </div>
                <div>
                  <span>SLG1: 500</span>
                  <span>SLG2: 500</span>
                </div>
                <div>
                  <span>SPIF1: 2710</span>
                  <span>SPIF2: 2710</span>
                </div>
              </div>
              <span>TE/BE DEMAND: {data?.te_be_bogie_1||0} kN</span>
            </div>
          )}
        </div>
      </div>
      {rightContent === 2 && (
        <div className={classes.ackButton} onClick={() => setRightContent(3)}>
          <div>
            <span className="fw-2" style={{fontSize:"1.4rem"}}>A</span>
            <span className="fw-2" style={{fontSize:"1.4rem"}}>C</span>
            <span className="fw-2" style={{fontSize:"1.4rem"}}>K</span>
          </div>
        </div>
      )}
    </div>
  );
};
