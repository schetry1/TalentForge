import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Test = () => {

   /////////////////LATER WE WILL SET UP LOCAL STORAGE
   const [user,setUser]=useState({});
   const getCompanyUserdetails= async()=>{
     try{
         const res= await fetch('/auth/getuser',{
             method: "GET",
             headers:{
                
                 "Content-Type": "application"
             },
         });
         const data = await res.json();
         setUser(data);
         if(!res.status ===200){
         const error= new Error(res.error);
         throw error;
         }
     } catch(err){
         console.log(err)
     }
 }
 useEffect(()=>{
 getCompanyUserdetails();
 },[]);
 ////////////////////////////////
 
    const navigate = useNavigate();
    const location=useLocation();
    const path=location.pathname.split('/')[2];
    const[job,setJob]=useState({});
    useEffect(()=>{
        const getJob=async()=>{
            const res=await axios.get('/jobs/'+path);
            
           setJob(res.data);
        };
        getJob();
    },[path])

    const handleDelete=async()=>{
      try{
        await axios.delete("/jobs/"+path,{
          data:{userId:user._id}
        });
        navigate("/manage/"+user._id);
      }catch(err){
        console.log(err)
      }
      
 
    }
  return <div>
    <h1>{job.company}</h1> 
    {
      job.userId==user?._id&&<>
    <Button variant='filled'>Edit</Button>
    <Button variant='filled' onClick={handleDelete}>Delete</Button>
      </>
    } 
  
  </div>;
};

export default Test;

