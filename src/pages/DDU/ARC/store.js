import { create } from "zustand";
export const useARCStore=create((set)=>({
    screen:"Home",
    pixyScreen:0,
    screenMenu:0,
    brightness:100,
    ioSignalPage:0,
    ioScreenPointer:0,
    pixyScreenPointer:0,
    handleScreen:(val)=>set(state=>({screen:val})),
    setPixyScreen:(val)=>set(state=>({pixyScreen:val})),
    setPixyScreenPointer:(val)=>set(state=>({pixyScreenPointer: val})),
    setBrightness:(val)=>set(state=>({brightness:val})),
    setScreenMenu:(val)=>set(state=>({screenMenu:val})),
    setIoSignalPage:(val)=>set(state=>({ioSignalPage:val})),
    setIoScreenPointer:(val)=>set(state=>({ioScreenPointer:val})),
}))