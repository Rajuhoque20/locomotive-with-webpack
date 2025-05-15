import React, { useEffect, useRef, useState } from "react";
import classes from "./main.module.css";
import { ScreenTab } from "../../../components/DDU/ScreenTab/screenTab";
import SubSystem from "../../../components/DDU/subSystem/subSystem";
import { BombarFooter } from "./footer/footer";
import { BombarHome } from "./home/home";
import { Operations } from "./operations/operation";
import DynamicContent from "./operations/dynamicContent/dynamicContent";
import Driver from "./driver/driver";
import Maintenance from "./maintenance/maintenance";
import { useDDUBTStore } from "./store";
import ActivateScreen from "./activateScreen/activateScreen";
import CabControl from "./cabControl/cabControl";
import { Icons } from "#framework";
import websocket from "../../../services/Websocket";
import { topics } from "../../../constant/topic";
export const BombarDierMain = ({ callScreen }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [screen, setScreen] = useState("Home");
  const [rightContent, setRightContent] = useState(1);
 
  const [brightnessVal, setBrightnessVal]=useState(100);
  const { activateScreen, handleActivateScreen, cabControlScreen, setCommondata, commonData } =
    useDDUBTStore();
  const { brightness_icon } = Icons.DDUIcons;

  const heightRef = useRef(null);
  const scaleUI = () => {
    const wrapper = heightRef.current;
    if (wrapper&&callScreen !== "cab_replicate") {
      const scaleX =window.innerWidth / 800;
      const scaleY = window.innerHeight / 600;
      const scale = Math.min(scaleX, scaleY);
       wrapper.style.transform = `scale(${scale})`;
    }
    else if(callScreen === "cab_replicate")
    {
      const scaleX =window.innerWidth/ 1200;
      const scaleY =window.innerHeight/1100;
      const scale = Math.min(scaleX, scaleY);
       wrapper.style.transform = `scale(${scale})`;
    }
  };

  useEffect(() => {
    scaleUI();
    window.addEventListener("resize", scaleUI);
    return () => window.removeEventListener("resize", scaleUI);
  }, []);

  const screenTabs = [
    {
      name: "Home",
    },
    {
      name: "Operations",
    },
    {
      name: "Maintenance",
    },
    {
      name: "Driver",
    },
    {
      name: "decrease brightness",
      icon: brightness_icon,
      iconHeight: "2vh",
    },
    {
      name: "increase brightness",
      active: false,
      icon: brightness_icon,
      iconHeight: "2.5vh",
    },
  ];
  const handleTabClick = (item, index) => {
    // setScreen(item?.name ? item?.name : "Home");
    if(item?.name==="increase brightness")
    {
      setBrightnessVal(prev=>prev<100?prev+10:prev);
    }
   else if(item?.name==="decrease brightness")
      {
        setBrightnessVal(prev=>prev>10?prev-10:prev);
      }

      else
      {
        setActiveTab(index);
        setScreen(item?.name);
      }
    if (index === 1) {
      setRightContent(1);
    }
  };
  const subSystems = [
    {
      name: "MAIN",
      number: "SS01",
      operative: commonData?.SS01,
    },
    {
      name: "Bogie 1",
      number: "SS02",
      operative: commonData?.SS02,
    },
    {
      name: "Bogie 2",
      number: "SS03",
      // isolated: true,
      operative: commonData?.SS03,
    },
    {
      name: "MAIN",
      number: "SS04",
      // isolated: true,
      operative: commonData?.SS04,
    },
    {
      name: "MAIN",
      number: "SS05",
      operative: commonData?.SS05,
    },
    {
      name: "MAIN",
      number: "SS06",
      operative: commonData?.SS06,
    },
    {
      name: "MAIN",
      number: "SS07",
      operative: commonData?.SS07,
    },
    {
      name: "MAIN",
      number: "SS08",
      operative: commonData?.SS08,
    },
    {
      name: "MAIN",
      number: "SS09",
      operative: commonData?.SS09,
    },
    {
      name: "MAIN",
      number: "SS10",
      operative: commonData?.SS10,
    },
    {
      name: "MAIN",
      number: "SS11",
      operative: commonData?.SS11,
    },
    {
      name: "MAIN",
      number: "SS12",
      operative: commonData?.SS12,
    },
    {
      name: "MAIN",
      number: "SS13",
      operative: commonData?.SS13,
    },
    {
      name: "MAIN",
      number: "SS14",
      operative: commonData?.SS14,
    },
    {
      name: "MAIN",
      number: "SS15",
      operative: commonData?.SS15,
    },
    {
      name: "MAIN",
      number: "SS16",
      operative: commonData?.SS16,
    },
    {
      name: "MAIN",
      number: "SS17",
      operative: commonData?.SS17,
    },
    {
      name: "MAIN",
      number: "SS18",
      operative: commonData?.SS18,
    },
    {
      name: "MAIN",
      number: "SS19",
      operative: commonData?.SS19,
    },
  ];
  const cabControlTabs = [
    {
      name: null,
      icon: brightness_icon,
      iconHeight: "2vh",
    },
    {
      name: null,
      active: false,
      icon: brightness_icon,
      iconHeight: "2.5vh",
    },
  ];



  useEffect(()=>{
    const callback=(event)=>{
      setCommondata(event);
    }
    websocket.subscribe(topics.BOMBARDIER_COMMON,callback);
    return()=>{
      websocket.unsubscribeTopic(topics.BOMBARDIER_COMMON);
    }
  },[]);

  const brakeData={
    "wheelSlip":commonData?.wheelSlip|| 0,
  "sanding":commonData?.sanding|| 0,
  "locoBrake": commonData?.locoBrake||0,
  "parkingBrake":commonData?.parkingBrake||0,
  "emergencyBrake":commonData?.emergencyBrake|| 0,
  "vigilance":commonData?.vigilance|| 0,
  trainBrake:commonData?.trainBrake||0,
  };

  return (
   
    <div
      className={classes.bombardierMain}
      style={{ gap:'0.5rem', padding:"1rem", filter:`brightness(${brightnessVal}%)`, }}
      ref={heightRef}
    >
      {cabControlScreen !== "activation screen" &&
         (
          <div className={classes.header}>
            {screenTabs?.map((item, index) => {
              return (
                <ScreenTab
                  key={index}
                  isActive={activeTab === index}
                  name={item?.name}
                  icon={item?.icon}
                  iconHeight={item?.iconHeight}
                  onClick={() => handleTabClick(item, index)}
                />
              );
            })}
            <div className={classes.dateTime}>
              <label className="fc-1 fw-2">29-Feb-2020</label>
              <label className="fc-1 fw-2">11:11:25</label>
            </div>
          </div>
        )}
      <div className={classes.subSystems}>
        {(cabControlScreen === "activation screen" ? subSystems.slice(0, 11)
          : subSystems
        )?.map((item, index) => {
          return (
            <SubSystem
              key={index}
              name={item?.name}
              number={item?.number}
              isOperative={item?.operative}
              isIsolated={item?.isolated}
              onClick={() =>
                handleActivateScreen({ type: "isolate SS", data: item })
              }
            />
          );
        })}
        {cabControlScreen === "activation screen" && (
          <>
            {cabControlTabs?.map((item, index) => {
              return (
                <ScreenTab
                  key={index}
                  isActive={activeTab === index}
                  name={item?.name}
                  icon={item?.icon}
                  iconHeight={item?.iconHeight}
                  onClick={() => handleTabClick(item, index)}
                />
              );
            })}
            <div className={classes.dateTime}>
              <label className="fc-1 fw-2 fs-2">29-Feb-2020</label>
              <label className="fc-1 fw-2 fs-2">11:11:25</label>
            </div>
          </>
        )}
      </div>
      {activateScreen ? (
        <ActivateScreen />
      ) : cabControlScreen === "activation screen" ? (
        <CabControl />
      ) : (
        <>
          {screen === "Home" && <BombarHome/>}
          {screen === "Operations" && (
            <Operations >
              <DynamicContent inchingSpeed={commonData?.speed}/>
            </Operations>
          )}
          {screen === "Driver" && (
            <Operations>
              <Driver />
            </Operations>
          )}
          {screen === "Maintenance" && <Maintenance />}
        </>
      )}
      <BombarFooter
        rightContent={rightContent}
        setRightContent={setRightContent}
        brakeData={brakeData}
        data={{flg:commonData?.flg, speed:commonData?.speed,}}
      />
    </div>
   
  );
};
