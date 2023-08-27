import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import JobModal from "./JobModal";
import JobCard from '../Jobs/JobCard';


const CompanyProfile = () => {
const location=useLocation();
const path=location.pathname.split('/')[2];
const [company,setCompany]=useState({})
const[userjobs,setUserJobs]=useState([]);


useEffect(()=>{
const getCompany=async()=>{
    const res=await axios.get('/company/'+path);
    setCompany(res.data);
    
}

getCompany()
},[path])



useEffect(()=>{
  const getCompJobs=async()=>{
    const res=await axios.get(`/jobs/find/${company._id}`)
    setUserJobs(res.data)
    // console.log(res.data)
  }
  getCompJobs()
  
},[company])




  return( <>
 
    {/* <h1>{company.about}</h1>
    <p>{company.location}</p>
    <p>{company.phone}</p> */}
    <JobModal compId={company._id}/>
    {userjobs.map(job=>(
          
          <JobCard job={job}/>
         
        ))}
        
  </>);
};

export default CompanyProfile;
