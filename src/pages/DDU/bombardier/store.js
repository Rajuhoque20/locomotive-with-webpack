import { create } from "zustand";

export const useDDUBTStore=create((set)=>({
    activateScreen:null,
    cabControlScreen:"activation",
    commonData:null,
    handleActivateScreen:(val)=>set(state=>({activateScreen:val})),
    handleCabControlScreen:(val)=>set(state=>({cabControlScreen:val})),
    setCommondata:(val)=>set(state=>({commonData:val})),
}))
