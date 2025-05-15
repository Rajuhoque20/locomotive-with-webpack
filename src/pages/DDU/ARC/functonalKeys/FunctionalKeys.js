import React from 'react'
import classes from './FunctionalKeys.module.css';
import { Icons } from '#framework';
import { useARCStore } from '../store';
import { min } from 'lodash';
export const FunctionalKey=({data})=>{
    const {handleScreen, pixyScreen, setBrightness, brightness, screenMenu, setScreenMenu, screen, ioScreenPointer, setIoScreenPointer, setIoSignalPage, ioSignalPage, setPixyScreenPointer, setPixyScreen, pixyScreenPointer}=useARCStore();
    const brightUp = () => {
        if (brightness < 100) setBrightness(brightness + 10); 
      };
      const brightDown = () => {
        if (brightness > 0) setBrightness(brightness - 10); 
      };
      const handleKeyUpEvent=()=>{
            if(screenMenu>1&&screen==="Menu")
            {
                setScreenMenu(screenMenu-2)
            }
            else if(screenMenu===1&&screen==="Menu")
                {
                    setScreenMenu(12)
                }
      }
      const handleKeyDownEvent=()=>{
        if(screenMenu<13&&screen==="Menu")
            {
                if(screenMenu===12)
                {
                    setScreenMenu(1)
                    return;
                }
                setScreenMenu(screenMenu+2)
            }
      }

      const ioKeyUpEvent=(min, max)=>{
        if(min===ioScreenPointer)
        {
            setIoScreenPointer(max);
        }
        else
        {
            setIoScreenPointer(ioScreenPointer-1);
        }
      }
      const ioKeyDownEvent=(min, max)=>{
        if(max===ioScreenPointer)
            {
                setIoScreenPointer(min);
            }
            else
            {
                setIoScreenPointer(ioScreenPointer+1);
            }
      }
      const pixyKeyUpEvent=(min, max)=>{
        if(min===pixyScreenPointer)
        {
            setPixyScreenPointer(max);
        }
        else
        {
            setPixyScreenPointer(pixyScreenPointer-1);
        }
      }
      const pixyKeyDownEvent=(min, max)=>{
        if(max===pixyScreenPointer)
            {
                setPixyScreenPointer(min);
            }
            else
            {
                setPixyScreenPointer(pixyScreenPointer+1);
            }
      }
      const handleESCEvent=()=>{
        if(typeof screen!=="string"&& screen<13)
        {
            handleScreen("Menu")
        }
        else
        {
            setIoSignalPage(IOScreenManager[`${ioSignalPage}`]?.prev);
        }
        setIoScreenPointer(0);
      }
      const handlePixyClear=()=>{
        setPixyScreen(pixyScreenManager[`${pixyScreen}`]?.prev);
        setPixyScreenPointer(0);
      }
     
      const IOScreenManager={
        0:{min:0, max:1, 0:1, 1:6, prev:0},
        1:{min:0, max:3, 0:2, 1:3, 2:4, 3:5, prev:0},
        2:{prev:1},
        3:{prev:1},
        4:{prev:1},
        5:{prev:1},
        6:{min:0, max:5, 0:7,1:12,2:17, 3:22, 4:27, 5:30, prev:0},
        7:{min:0, 0:8, 1:9, 2:10, 3:11, max:3, prev:6,},
        8:{prev:7},
        9:{prev:7},
        10:{prev:7},
        11:{prev:7},
        12:{min:0, 0:13, 1:14, 2:15, 3:16, max:3, prev:6,},
        13:{prev:12},
        14:{prev:12},
        15:{prev:12},
        16:{prev:12},
        17:{min:0, 0:18, 1:19, 2:20, 3:21, max:3, prev:6,},
        18:{prev:17},
        19:{prev:17},
        20:{prev:17},
        21:{prev:17},
        22:{min:0, 0:23, 1:24, 2:25, 3:26, max:3, prev:6,},
        23:{prev:22},
        24:{prev:22},
        25:{prev:22},
        26:{prev:22},
        27:{min:0, 0:28, 1:29, max:1, prev:6,},
        28:{prev:27},
        29:{prev:27},
        30:{min:0, 0:31, 1:32,  max:1, prev:6,},
        31:{prev:30},
        32:{prev:30},
     };
     const pixyScreenManager={
        0: { min:0, max:2, prev:0, 0:1, 1:5, 2:6 },
        1: { min:0, max:2, prev:0, 0:2, 1:2,2:3 },
        2: { min:0, max:1, prev:1, 0:4, 1:4},
        3: { prev:1},
        4: { prev: 2},
        5: { prev:0},
        6: { min:0, max:2, prev:0, 0:7,1:8,2:12},
        7:{prev:6},
        8: { min:0, max:2, prev:6, 0:9,1:10, 2:11},
        9:{prev:8},
        10:{prev:8},
        11:{prev:8},
        12:{ min:0, max:2, prev:6, 0:13, 1:14, 2:15},
        13: { prev: 12},
        14: { prev: 12},
        15: { prev: 12},
     };

     const keyFunctionMap={
        home: ()=>{ handleScreen("Home");},
        ESC:handleESCEvent,
        menu:()=>{handleScreen("Menu")},
        up_key:screen===13?()=>{ioKeyUpEvent(IOScreenManager[`${ioSignalPage}`]?.min, IOScreenManager[`${ioSignalPage}`]?.max)}:handleKeyUpEvent,
        down_key:screen===13?()=>{ioKeyDownEvent(IOScreenManager[`${ioSignalPage}`]?.min, IOScreenManager[`${ioSignalPage}`]?.max)}:handleKeyDownEvent,
        bright_down:brightDown,
        bright_up:brightUp,
        enter:screen===13?()=>{
            setIoSignalPage(IOScreenManager[`${ioSignalPage}`][`${ioScreenPointer}`]);
            setIoScreenPointer(0);
    }:()=>{handleScreen(screenMenu)},
        pixy_clear:handlePixyClear,
        pixy_home:()=>{setPixyScreen(0)},
        brightness_mode:()=>{},
        pixy_up_key:()=>pixyKeyUpEvent(pixyScreenManager[`${pixyScreen}`]?.min, pixyScreenManager[`${pixyScreen}`]?.max),
        pixy_down_key:()=>pixyKeyDownEvent(pixyScreenManager[`${pixyScreen}`]?.min, pixyScreenManager[`${pixyScreen}`]?.max),
        pixy_enter:()=>{
            setPixyScreen(pixyScreenManager[`${pixyScreen}`][`${pixyScreenPointer}`]);
            setPixyScreenPointer(0);
    },
     }
    
    return(
        <div className={classes.functionKey} onClick={()=>{
            keyFunctionMap[data?.screen]?.();
        }}>
            {data?.name?<span>{data?.name}</span>:<img src={data?.icon} style={{height:data?.height?data?.height:""}}/>}
        </div>
    )
}
export default function FunctionalKeys() {
  
    const { arc_key_icon1, arc_key_icon2, arc_key_icon3, arc_key_icon4, arc_key_icon5, arc_key_icon6, }=Icons.DDUIcons;
    const redKeys=[
        {
            name:"ESC",
            icon:null,
            screen:"ESC",
        },
        {
            name:"",
            icon:arc_key_icon1,
            screen:"up_key"
        },
        {
            name:"HOME",
            icon:null,
            screen:"home"
        },
        {
            name:"",
            icon:arc_key_icon2,
            screen:"down_key"
        },
        {
            name:"MENU",
            icon:null,
            screen:"menu"
        },
        {
            name:"",
            icon:arc_key_icon3,
            height:"4vh",
            screen:"enter"
        },
    ];
    const pixyScreenKeys=[
        {
            name:"CLEAR",
            icon:null,
            screen:"pixy_clear"

        },
        {
            name:"HOME",
            icon:null,
             screen:"pixy_home"
        },
        {
            name:"",
            icon:arc_key_icon4,
            height:"4vh",
             screen:"brightness_mode"
        },
        {
            name:"",
            icon:arc_key_icon1,
            screen:"pixy_up_key"
        },
        {
            name:"",
            icon:arc_key_icon5,
            height:"4vh",
            screen:"bright_up"
        },
        {
            name:"",
            icon:arc_key_icon2,
             screen:"pixy_down_key"
        },
        {
            name:"",
            icon:arc_key_icon6,
            height:"4vh",
            screen:"bright_down"
        },
        {
            name:"",
            icon:arc_key_icon3,
            height:"4vh",
             screen:"pixy_enter"
        },
    ]
  return (
    <div className={classes.container}>
        <div>
           <div className={classes.redKeys}>
                    {redKeys?.map((item,index)=>(<FunctionalKey key={index} data={item}/>))}
           </div>
           <div className={classes.whiteKeys}>
                    {pixyScreenKeys?.map((item,index)=>(<FunctionalKey key={index} data={item}/>))}
           </div>
        </div>
    </div>
  )
}
