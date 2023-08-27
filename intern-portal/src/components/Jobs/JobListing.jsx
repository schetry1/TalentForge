import { Card,Button, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import JobCard from './JobCard';

const JobListing = () => {
const[jobs,setJobs]=useState([]);

useEffect(()=>{
    const fetchJobs=async()=>{
     const res=await axios.get('/jobs')
     setJobs(res.data)
     console.log(res.data)
    }
    fetchJobs();
},[]);

  return <div className="row" style={{ "white-space": "nowrap" }}>
      
      {jobs.map(job=>(
          
        <JobCard job={job}/>
       
      ))}
       
      
      
  </div>;
};

export default JobListing;
