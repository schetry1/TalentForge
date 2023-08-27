import { flexbox } from "@mui/system";
import React, { useEffect,useState } from "react";
import { Button } from "@mui/material";
import ResponseCard from "./ResponseCard";
import axios from "axios";
import { useLocation } from "react-router-dom";


export default function ViewResponses() {

const location=useLocation();
const path=location.pathname.split('/')[2];

const[applicants,setApplicants]=useState([]);
useEffect(()=>{
 const fetchapplicants=async()=>{
   const res= await axios.get(`/jobs/${path}/response`);
   setApplicants(res.data);
 }
 fetchapplicants();
},[])

  return (
      <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
        
        <div style={{width:'80%',display:'flex',flexDirection:'column',margin:'0 auto',marginTop:'20px',marginBottom:'20px'}}>
          {applicants.length!=0 ?
           applicants.map((applicant)=>{
            return( <ResponseCard applicant={applicant}/>)
           }) : <h1>No Applicants</h1>
          }
          
        </div>
      </div>
  );
}