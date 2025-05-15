
import React, {  createContext } from "react";

export const ARCContext=createContext();

export const ARCContextProvider=(props)=>{
    return(
        <ARCContext.Provider value={props.value}>
            {props.children}
        </ARCContext.Provider>
    )
}