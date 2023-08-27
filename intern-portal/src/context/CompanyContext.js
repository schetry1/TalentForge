import { createContext, useState } from "react"



export const CompanyContext=createContext();


export const CompanyProvider=(props)=>{
    const [company,setCompany]=useState({});
    return(
        <CompanyContext.Provider value={[company,setCompany]}>
            {props.children}
        </CompanyContext.Provider>
    )
}