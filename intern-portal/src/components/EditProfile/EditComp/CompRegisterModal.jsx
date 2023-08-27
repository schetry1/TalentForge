import Grid from '@mui/material/Grid';
import Button from '../../Responsive/Button';
import TextField from '@mui/material/TextField';
import { Avatar, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useContext, useEffect, useState } from "react";
import logo from "../../images/iitglogo.png";
import "./compReg.css";
import axios from "axios";
import { useLocation } from 'react-router-dom'; 
import { CompanyContext } from "../../../context/CompanyContext";

const CompRegisterModal = ({ setState,changev }) => {
  const [company,setCompany]=useContext(CompanyContext);
  const location=useLocation();
  console.log("here it is="+company.userId)
  // const path=location.pathname.split('/')[2];

  // const [company,setCompany]=useState({})
  // useEffect(()=>{
  //   const getCompany=async()=>{
  //   const res=await axios.get('/company/'+path);
  //   setCompany(res.data);
  //   }
  // getCompany()
  // },[companyUser])




  // const getCompanyUserdetails = async () => {
  //   try {
  //     const res = await fetch("/auth/getuser", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application",
  //       },
  //     });
  //     const data = await res.json();
  //     setCompanyUser(data);
  //     console.log("yooo" + companyUser);
  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   getCompanyUserdetails();
  // }, []);


  const handleUpdate = async (e) => {
   e.preventDefault();
    const updatedData = {
      userId: company.userId,
      logo: company.logo,
      name: company.name,
      phone: company.phone,
      location: company.location,
      email: company.email,
      linkedin:company.linkedin,
      website: company.website,
      about: company.about,
      
    };
    try {
      await axios.put(`/company/${company._id}`, 
        updatedData,{
          headers: {
            'Content-Type': 'application/json'
            
        }
        }
      );
      console.log("Company updated successfully");
      changev(false)
      setState(false)
    } catch (err) {
      console.log(err);
    }
  };


  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCompany({...company,[name]: value });
  };

  return (

      <Grid container
        direction="column"
        spacing={3}>
        <Grid item>
          <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around"}}>
            <Avatar src={logo}  sx={{ width: 56, height: 56 }}/>
            <Button variant="contained" sx={{backgroundColor:'#3acbf7',margin:'0 auto'}}>Change Your Photo</Button>
        </div> 
        </Grid>
      <Grid item>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'20px',justifyContent:"space-around",width:'80%'}} >
          <Typography sx={{marginRight:'20px',width:'100px'}}>Name</Typography>
          <TextField name="name" variant="standard" value={company.name} autoFocus={true} onChange={handleInput} sx={{width:'80%'}} />
        </div> 
      </Grid>
      <Grid item>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around",width:'80%'}}>
          <Typography sx={{marginRight:'20px',width:'100px'}}>Phone Number</Typography>
          <TextField name="phone" variant="standard" value={company.phone} onChange={handleInput} sx={{width:'80%'}}  />
        </div> 
      </Grid>
      <Grid item>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around",width:'80%'}}>
          <Typography sx={{marginRight:'20px',width:'100px'}}>Location</Typography>
          <TextField name="location" variant="standard" value={company.location} onChange={handleInput} sx={{width:'80%'}} />
        </div> 
      </Grid>
      <Grid item>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around",width:'80%'}}>
          <Typography sx={{marginRight:'20px',width:'100px'}}>Domain</Typography>
          <TextField name="location" variant="standard" value={company.domain} onChange={handleInput} sx={{width:'80%'}} />
        </div> 
      </Grid>
      <Grid item>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around",width:'80%'}}>
          <Typography sx={{marginRight:'20px',width:'100px'}}>Year of Foundation</Typography>
          <TextField name="location" variant="standard" value={company.yearOfFoundation} onChange={handleInput} sx={{width:'80%'}} />
        </div> 
      </Grid>
      <Grid item>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around",width:'80%'}}>
          <Typography sx={{marginRight:'20px',width:'100px'}}>Email Id</Typography>
          <TextField name="email" variant="standard" value={company.email} onChange={handleInput} sx={{width:'80%'}} />
        </div>
      </Grid>
      <Grid item>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around",width:'80%'}}>
          <Typography sx={{marginRight:'20px',width:'100px'}}>LinkedIn Id</Typography>
          <TextField name="linkedin" variant="standard" value={company.linkedin} onChange={handleInput} sx={{width:'80%'}} />
        </div>
      </Grid>
      <Grid item>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around",width:'80%'}}>
          <Typography sx={{marginRight:'20px',width:'100px'}}>Website</Typography>
          <TextField name="website" variant="standard" value={company.website} onChange={handleInput} sx={{width:'80%'}} />
        </div>
      </Grid>

      <Grid item>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around",width:'80%'}}>
          <Typography sx={{marginRight:'20px',width:'100px'}}>About</Typography>
          <TextField name="about" variant="outlined" value={company.about} onChange={handleInput} multiline rows={8} sx={{width:'80%'}} />
        </div>
      </Grid>
      <Grid item style={{width:"100%",display:"flex",justifyContent:"space-evenly"}} >
            <Button onClick={handleUpdate} type="submit" variant="outlined">Update</Button>
            {/* <Button onClick={()=>{
              changev(false)
              setState(false)}} variant='outlined' color="danger">Close</Button> */}
          </Grid>
      </Grid> 
  );
};

export default CompRegisterModal;
