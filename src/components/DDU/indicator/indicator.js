import React from "react";
import "./indicator.css";
import { getFontSize } from "../../../pages/DDU/bombardier/home/constant";
export const Indicator = ({ label, status, styles }) => {
  return (
    <div className="indicator-wrapper">
      <div className="indicator" style={styles ? styles : null}>
        <label
          className="fs-2"
          style={{
            fontSize: '1rem',
          }}
        >
          {label}
        </label>
        <span
          className={`status fw-1 ${status === "active" ? "bg-4" : "inactive"}`}
        ></span>
      </div>
    </div>
  );
};
