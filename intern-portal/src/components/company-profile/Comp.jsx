import React, { useState, useEffect, useContext } from "react";
import CustomComponent from "./CustomComponent";
import About from "./About";
import OtherDetails from "./OtherDetails";
import JobPosted from "./JobPosted";
import TestjobCard from '../Jobs/TestjobCard'
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios"
import { useLocation } from 'react-router-dom'; 
import { CompanyContext } from "../../context/CompanyContext";

const Comp = () => {

const location=useLocation();
const path=location.pathname.split('/')[2];


// const[userjobs,setUserJobs]=useState([]);
const [company,setCompany]= useContext(CompanyContext)
const [updateMode,setupdateMode]=useState(false)

console.log(company._id)

useEffect(()=>{
  const getCompany=async()=>{
  const res=await axios.get('/company/'+path);
  setCompany(res.data);
  }
getCompany()
},[path])

// useEffect(()=>{
// const getCompJobs=async()=>{
// const res=await axios.get(`/jobs/find/${company._id}`)
// setUserJobs(res.data)
// }
// getCompJobs()  
// },[company])


  return (
    <>
    
      <CustomComponent setv={setupdateMode} company={company} />
      {
       !updateMode&&(<>
        <About company={company}/>
          <OtherDetails company={company}/>
          {/* <JobPosted userjobs={userjobs} company={company}/> */}
          {/* {userjobs.map(job=>(
          
          <TestjobCard job={job}/>
         
        ))} */}
          </>)
      }
      
    </>
  );
};

export default Comp;
