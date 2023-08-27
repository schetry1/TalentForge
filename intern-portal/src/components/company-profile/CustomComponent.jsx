import React,{useState,useEffect, useContext} from "react";
import ReactRoundedImage from "react-rounded-image";
import "./customcomponent.css";
import logo from '../images/iitglogo.png';
import Button from "../Responsive/Button";
import { Avatar, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CompRegister from "../EditProfile/EditComp/CompRegister";
import { CompanyContext } from "../../context/CompanyContext";
import About from "./About";
import OtherDetails from "./OtherDetails";
import TestjobCard from "../Jobs/TestjobCard";




const CustomComponent = ({company,setv }) => {

  const [updateMode,setupdateMode]=useState(false)

  /////LATER WE WILL SET UP LOCAL STORAGE
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
 
  return  <div className="custom-component">
    {
      updateMode? (<CompRegister changev={setv} company={company} setState={updateMode=>setupdateMode(updateMode)}/>):
      (

     
  <div className="container-1" >
    
    <div className="secondary-container-1"> </div>
    <div className="tertiary-container-1" style={{color: "black"}}>
    <Avatar  sx={{ width: 156 , height: 156,backgroundColor:'white' }} className="circle"  src={logo} />
    <div className="col-flex mb-3">
      <div className="flex space-bet">
       <h3>{company.name}</h3>
       {
         company.userId==user?._id&&(<IconButton onClick={()=>{
          setupdateMode(true) 
          setv(true)
         }}  aria-label="Edit Profile" className="edtbtn">
         <EditIcon />              
         </IconButton>)
       }
      
       
       </div>
      <p style={{fontSize: "medium", color: "black", margin:'5px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div style={{display:"flex", flexDirection:"column"}}>
      <Button>Visit Website</Button>
      </div>
      </div>
    </div>
  </div>
  
  
   )
  }

</div>;
};

export default CustomComponent;









