import { createContext, useState } from "react"



export const LoggedUserContext=createContext();


export const LoggedUserProvider=(props)=>{
    const [LoggedUser,setLoggedUser]=useState({});
    return(
        <LoggedUserContext.Provider value={[LoggedUser,setLoggedUser]}>
            {props.children}
        </LoggedUserContext.Provider>
    )
}