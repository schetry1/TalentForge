import React, { useContext } from "react";
import "./OpportunityDetails.css";
import { GrLocation, GrPersonalComputer } from "react-icons/gr";
import { BsCalendar2Check } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import Button from "../Responsive/Button"
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditJobModal from './EditJobModal'
import { UserJobContext } from "../../context/UserJobsContext";

const OpportunityDetails = () => {

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
 const[job,setJob]=useContext(UserJobContext);
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
console.log(user)
console.log(job)
const[applied,setApplied]=useState(false);
useEffect(()=>{
  setApplied(user.jobsApplied?.includes(job?._id))
},[user,job._id]);

const applyHandler=()=>{
  try{
    if(applied){
      axios.put("/jobs/"+job._id+"/undo",{userId:user._id});
    }
    else{
      axios.put("/jobs/"+job._id+"/apply",{userId:user._id});
    }
  }catch(err){
    console.log(err)
  }
  setApplied(true)
}

  return (
    <>
      <div className="opportunitypage">
        <div className="detail-border">
        <div className="opportunityheading">
          <div className="flex " style={{justifyContent:"space-between"}}>
          <h1>{job.profile}</h1>
          {
         job.userId==user?._id&&(<div style={{display:"flex",marginTop:"15px",alignItems:'center'}}>
             {/* <IconButton  onClick={() => setupdateMode(true)}  aria-label="Edit Profile" className="edtbtn">
            <EditIcon />
        </IconButton> */}
        <EditJobModal />
         <IconButton onClick={handleDelete}>
           <DeleteIcon />
         </IconButton>
         </div>)
       }
      
       </div>
          <h3>{job.company}</h3>
         
        </div>
        <div className="list flex">
                    <div className="list-1">
                        <ul>
                            <li>
                              <div className="info">
                                <div className="info-icon">
                                  <IconContext.Provider value={{ className: "react-icon" }}>
                                    <GrLocation />
                                  </IconContext.Provider>
                                </div>
                                <div className="info-heading">
                                    <h4>Location:</h4>
                                    <p style={{fontSize:'18px'}}>{job.location}</p>
                                  </div>
                              </div>
                            </li>
                            <li>
                              <div className="info">
                                <div className="info-icon">
                                  <IconContext.Provider value={{ className: "react-icon" }}>
                                    <BsCalendar2Check />
                                  </IconContext.Provider>
                                </div>
                                <div className="info-heading">
                                  <h4>Duration:</h4>
                                  <p style={{fontSize:'18px'}}>{job.duration}</p>
                                </div>
                              </div>
                            </li>
                           
                        </ul>
                    </div>
                    <div className="list-2">
                        <ul>
                            <li>
                            <div className="info">
                              <div className="info-icon">
                                <IconContext.Provider value={{ className: "react-icon" }}>
                                  <BsClockHistory />
                                </IconContext.Provider>
                              </div>
                              <div className="info-heading">
                                <h4>Apply By:</h4>
                                <p style={{fontSize:'18px'}}>{job.applyBy}</p>
                              </div>
                            </div>
                            </li>
                            <li>
                              <div className="info">
                                <div className="info-icon">
                                  <IconContext.Provider value={{ className: "react-icon" }}>
                                    <MdAttachMoney />
                                  </IconContext.Provider>
                                </div>
                                <div className="info-heading">
                                  <h4>Stipend:</h4>
                                  <p style={{fontSize:'18px'}}>{job.stipend}</p>
                                </div>
                              </div>
                            </li>
                        </ul>
                    </div>
                    <div className="list-3">
                        <ul>
                        <li>
                              <div className="info">
                                <div className="info-icon">
                                  <IconContext.Provider value={{ className: "react-icon" }}>
                                    <AiOutlineClockCircle />
                                  </IconContext.Provider>
                                </div>
                                <div className="info-heading">
                                  <h4>Type</h4>
                                  <p style={{fontSize:'18px'}}>{job.type}</p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="info">
                                <div className="info-icon">
                                  <IconContext.Provider value={{ className: "react-icon" }}>
                                    <GrPersonalComputer />
                                  </IconContext.Provider>
                                </div>
                                <div className="info-heading">
                                  <h4>Mode</h4>
                                  <p style={{fontSize:'18px'}}>{job.mode}</p>
                                </div>
                              </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                </div>
                <div>
        <div className="aboutrole border-bottom">
          <h4>About Role</h4>
          <p style={{fontSize:'18px',marginLeft:'1vmax'}}>
            {job.aboutjob}
          </p>
        </div>
        </div>
        <div className="border-bottom">
         <div className="requirements">
          <h4>Requirements</h4>
          <div>
            <p style={{fontSize:'18px',marginLeft:'1vmax'}}>Only those candidates can apply who:</p>
            <ol style={{marginLeft:'1vmax'}} className="requirementspoints">
              <li className="requirements-lst">Are Available to work from home</li>
              <li className="requirements-lst">Should be proefficient in backend Development</li>
              <li className="requirements-lst">Prior experience in software development is preferable</li>
              <li className="requirements-lst">Student must be from computer science and related fields</li>
            </ol>
          </div>
        </div>
        </div>
        <div className="border-bottom">
        <div style={{marginTop:'20px'}}>
            <h3>Perks</h3>
              <ol style={{marginLeft:'1vmax'}} className="requirementspoints">
                <li style={{fontSize:'18px'}}>LOR will be available</li>
                <li style={{fontSize:'18px'}}>Certificate</li>
                <li style={{fontSize:'18px'}}>Goodies</li>
              </ol>
        </div>
        <div style={{marginTop:'20px'}}>
            <h3>No. of Openings: {job.noofopening}</h3>
        </div>
        </div>
        <div className="tags">
          <h3>Tags</h3>
          <div className="tags-data">
            <h4>Web Development</h4>
            <h4>Node.js</h4>
            <h4>React.js</h4>
            <h4>React Native</h4>
            <h4>MongoDB</h4>
          </div>
          <div className="flex center_ele" style={{margin:"1rem"}}>
          {
         job.userId!=user?._id&&(<Button onClick={applyHandler}>{
          applied?
          "Undo Apply":"Apply Now"}</Button>)
       }
       </div>
        </div>
      </div>
    </>
  );
};

export default OpportunityDetails;
