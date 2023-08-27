import React, {useContext, useEffect, useState} from "react";
import Stcustomcomponent from "./StCustomComponent";
import Stabout from "./St-About";
import StotherDetails from "./St-OtherDetails";
import Stskills from "./St-Skills";
import { LoggedUserContext } from "../../context/LoggedUserContext";



const StudentProfile = () => {
    const [studentDetails,setStudentDetails]= useState({});

    const getStudetails= async()=>{
        try{
            const res= await fetch('/auth/getuser',{
                method: "GET",
                headers:{
                   
                    "Content-Type": "application"
                },
            });
            const data = await res.json();
            console.log(data);
            setStudentDetails(data);

            if(!res.status ===200){
            const error= new Error(res.error);
            throw error;
            }
        } catch(err){
            console.log(err)
        }
    }


useEffect(()=>{
    getStudetails();
},[]);

  return <>
  <Stcustomcomponent student={studentDetails}/>
  <Stabout student={studentDetails}/>
  <StotherDetails student={studentDetails}/>
  <Stskills student={studentDetails}/>
  </>;
};

export default StudentProfile;




