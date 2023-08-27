import { Typography } from '@mui/material';
import React, {useState,useEffect}from 'react';
import CompRegisterModal from './CompRegisterModal';

const CompRegister = () => {
  return (
    <div style={{display:'flex', flexDirection:'column',alignItems:"center"}}>
      <div style={{marginTop:'30px',display:'flex', flexDirection:'column',alignItems:'center'}}><Typography variant="h4">Register Your Company</Typography></div>
      <div style={{display:'flex',flexDirection:'column', boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",padding:'20px',marginTop:'20px',width:"40%"}} >
        <div ><CompRegisterModal /></div>
      </div>
    </div>
  );
};

export default CompRegister;
