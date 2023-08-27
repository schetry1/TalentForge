import { createContext, useState } from "react"



export const UserJobContext=createContext();


export const UserJobProvider=(props)=>{
    const [userJobs,setUserJobs]=useState({});
    return(
        <UserJobContext.Provider value={[userJobs,setUserJobs]}>
            {props.children}
        </UserJobContext.Provider>
    )
}