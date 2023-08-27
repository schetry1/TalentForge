import { Button, Card } from '@material-ui/core';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const JobCard = ({job}) => {

  // const [companyUser,setCompanyUser]= useState({});

  // const getCompanyUserdetails= async()=>{
  //     try{
  //         const res= await fetch('/auth/getuser',{
  //             method: "GET",
  //             headers:{
                 
  //                 "Content-Type": "application"
  //             },
  //         });
  //         const data = await res.json();
  //         setCompanyUser(data);
  //       console.log("yooo"+companyUser)
  //         if(!res.status ===200){
  //         const error= new Error(res.error);
  //         throw error;
  //         }
  //     } catch(err){
  //         console.log(err)
  //     }
  // }


// useEffect(()=>{
//   getCompanyUserdetails();
// },[]);

const location=useLocation();
const path=location.pathname.split('/')[2];

const handleDelete=async(req,res)=>{
  try{
    await axios.delete(`/jobs/${job._id}`);
    console.log('deleted')
    window.location.reload();
  }catch(err){
  console.log(err);
  }
  
}
const handleEdit=async(req,res)=>{
  try{

  }catch(err){
    
  }
}
  return(
     <Card  >
       <div >
    <h1>{job.company}</h1>
    <p>{job.profile}</p>
    <p>{job.about}</p>
   <Button color='primary'   variant="contained">Know more</Button>
  
    </div>
  </Card>)
};

export default JobCard;
