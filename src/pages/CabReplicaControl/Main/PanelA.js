import React, { useEffect, useState } from "react";
import { Icons } from "#framework";
import { useReplicaStore } from "../CabReplicate/store";
import { replicaKeys } from "../../../constant/cabReplica";
export const Indicator = ({ color, name, value, valueKey }) => {
  const { GlowRed, GlowYellow, redIndicator, yellowIndicator } = Icons.CRIcons;
  const { updateReplicaData } = useReplicaStore();
  const [active, setActive] = useState(false);
  const handleIndicatorValue = (key, value) => {
    if (!key) {
      return;
    }
    let obj = {};
    obj[key] = value;
    updateReplicaData(obj);
  };
  useEffect(() => {
    handleIndicatorValue(valueKey, active ? 1 : 0);
  }, [active]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {active ? (
        <img
          style={{ width: "7vmin" }}
          onClick={() => {
            setActive(false);
          }}
          tabIndex={0}
          className="focused-element"
          src={
            color === "red" ? GlowRed : color === "yellow" ? GlowYellow : null
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setActive(false);
            }
          }}
        />
      ) : (
        <img
          className="focused-element"
          tabIndex={0}
          style={{ width: "7vmin" }}
          onClick={() => {
            setActive(true);
          }}
          src={
            color === "red"
              ? redIndicator
              : color === "yellow"
              ? yellowIndicator
              : null
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setActive(true);
            }
          }}
        />
      )}
      <span style={{ color: "white", font: "0.8vw Graduate" }}>{name}</span>
    </div>
  );
};

export const IndicatorBtn = ({ color, name, valueKey }) => {
  const {
    Pressed_Button_Indicator_red,
    Button_Indicator_yellow2,
    Button_Indicator_yellow,
    Button_Indicator_red,
    Pressed_Button_Indicator_green,
    Button_Indicator_green,
  } = Icons.CRIcons;
  const [active, setActive] = useState(false);
  const { updateReplicaData, cabReplicaData } = useReplicaStore();
  const handleSwitchValue = (key, value) => {
    if (!key) {
      return;
    }
    let obj = {};
    obj[key] = value;
    updateReplicaData(obj);
  };
  useEffect(() => {
    handleSwitchValue(valueKey, active ? 1 : 0);
  }, [active]);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {active ? (
        <img
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setActive(false);
            }
          }}
          style={{ width: "7vmin" }}
          onClick={() => {
            setActive(false);
          }}
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
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setActive(true);
            }
          }}
          style={{ width: "7vmin" }}
          onClick={() => {
            setActive(true);
          }}
          src={
            color === "red"
              ? Button_Indicator_red
              : color === "yellow"
              ? Button_Indicator_yellow
              : Button_Indicator_green
          }
        />
      )}
      <span style={{ color: "white", font: "0.8vw Graduate" }}>{name}</span>
    </div>
  );
};

export default function PanelA({ data }) {
  const { bpfl_icon1, bpfl_icon2, Speaker, emergency_stop, emergency_stop2 } =
    Icons.CRIcons;
  const [bpflvalue, setbpflValue] = useState(false);
  const { updateReplicaData } = useReplicaStore();
  useEffect(() => {
    updateReplicaData({ bpfl: bpflvalue ? 1 : 0 });
  }, [bpflvalue]);
  const indicatorData = [
    {
      name: "LSDJ",
      color: "red",
      type: "indicator",
      value: data?.lsdj,
      key: replicaKeys.LSDJ,
    },
    {
      name: "LSCE",
      color: "yellow",
      type: "indicator",
      value: data?.lsce,
      key: replicaKeys.LSCE,
    },
    {
      name: "LSAF",
      color: "red",
      type: "indicator",
      value: data?.lsaf,
      key: replicaKeys.LSAF,
    },
    {
      name: "LSP",
      color: "yellow",
      type: "indicator",
      value: data?.lsp,
      key: replicaKeys.LSP,
    },
    {
      name: "LSHO",
      color: "yellow",
      type: "indicator",
      value: data?.lsho,
      key: replicaKeys.LSHO,
    },
    {
      name: "LSVW",
      color: "yellow",
      type: "indicator",
      value: data?.lsvw,
      key: replicaKeys.LSVW,
    },
  ];
  const indicatorBtnData = [
    {
      name: "BPCS",
      color: "blue",
      type: "button",
      value: data?.bpcs,
      key: replicaKeys.BPCS_LIGHT,
    },
    {
      name: "BPVR",
      color: "yellow",
      type: "button",
      value: data?.bpvr,
      key: replicaKeys.BPVR_LIGHT,
    },
    {
      name: "BPPB",
      color: "red",
      type: "button",
      value: data?.bppb,
      key: replicaKeys.BPPB_LIGHT,
    },
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        height: "50%",
      }}
    >
      {indicatorData?.map((item, index) => {
        return (
          <Indicator
            key={index}
            name={item.name}
            color={item.color}
            type={item.type}
            value={item.value}
            valueKey={item.key}
          />
        );
      })}
      {indicatorBtnData?.map((item, index) => {
        return (
          <IndicatorBtn
            key={index}
            name={item.name}
            color={item.color}
            type={item.type}
            value={item.value}
            valueKey={item.key}
          />
        );
      })}
      <div>
        <IndicatorBtn
          name={"BPVG"}
          color={"rgb(217, 222, 225)"}
          type={"button"}
          value={data?.bpvg}
          valueKey={replicaKeys.BPVG}
        />
      </div>
      <Indicator
        name="LSFI"
        color={"red"}
        value={data?.lsfi}
        valueKey={replicaKeys.LSFI}
      />
      <Indicator
        name="BPFA"
        color={"yellow"}
        value={data?.bpfi}
        valueKey={replicaKeys.BPFA_LIGHT}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // gap: "0.5vh",
        }}
      >
        <img
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setbpflValue((prev) => !prev);
            }
          }}
          onClick={() => {
            setbpflValue((prev) => !prev);
          }}
          src={bpflvalue ? bpfl_icon1 : bpfl_icon2}
          style={{ objectFit: "cover", width: "7vmin" }}
        />
        <span style={{ color: "#fff", fontSize: "0.8vw" }}>BPFL</span>
      </div>
    </div>
  );
}
