import { Select } from "antd";
import React from "react";
import "./SelectCompo.css";
const SelectComponent = ({ options, onChange, defaultValue }) => {
  return (
    <Select
      placeholder="Select"
      className="custom-select"
      variant={false}
      style={{ color: "#fff" }}
      size="large"
      dropdownStyle={{ backgroundColor: " grey" }}
      options={options}
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
};
export default SelectComponent;
