import { create } from "zustand";

export const useVIDStore=create(set=>({
     navPage:"",
     VIDTab:"machine room",
     setNavPage:(val)=>set(state=>({navPage:val})),
     setVIDTab:(val)=>set(state=>({VIDTab:val})),

}))