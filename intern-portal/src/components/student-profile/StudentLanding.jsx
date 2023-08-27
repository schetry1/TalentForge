import React from 'react';
import { Grid } from '@mui/material';
import sideimg from '../images/sideimg.jpg' 
import { Link } from 'react-router-dom';
import { Avatar, Button, Paper, TextField, Typography } from '@mui/material';
import { useState,useEffect } from 'react';

const StudentLanding = () => {
  const [user,setUser]=useState({});
  const getStudentUserdetails= async()=>{
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
getStudentUserdetails();
},[]);



  return  <Grid  container spacing={3}>
  <Grid className='center-ele flex' sx={{marginLeft:"3rem", flexDirection:'column', justifyContent:'center'}} item lg={5}>
 <Typography variant='h3' >
     Gear Up Your Carrier
 </Typography>
 <Typography variant='h6'>
     Find Right Internship For You
 </Typography>
 {
   user?.rollno?( <Link className='my-3' to={`/student/${user._id}`}>
   <Button variant='outlined'>View Profile
   </Button>
   </Link>):( <Link className='my-3' to={`/student/edit`}>
  <Button variant='outlined'>Update Profile
  </Button>
  </Link> )
 }

  
  </Grid>
  <Grid item lg={6}>
   <img className='temp-img' src={sideimg}></img>
  </Grid>

</Grid>;
};

export default StudentLanding;
