import React from "react";
import ReactRoundedImage from "react-rounded-image";
import "./St-customcomponent.css";
import photo from '../images/photo.png';
import Button from "../Responsive/Button";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import { Avatar, IconButton } from '@mui/material';
import { useState,useEffect } from "react";


const StCustomComponent = ({student}) => {

////later we will use local storage
// const [user,setUser]=useState({});
// const getdetails= async()=>{
//   try{
//       const res= await fetch('/auth/getuser',{
//           method: "GET",
//           headers:{
             
//               "Content-Type": "application"
//           },
//       });
//       const data = await res.json();
//       setUser(data);
  
//       if(!res.status ===200){
//       const error= new Error(res.error);
//       throw error;
//       }
//   } catch(err){
//       console.log(err)
//   }
// }


// useEffect(()=>{
// getdetails();

// },[]);
// ///





  return (<div>
     <div className="st-custom-component">
              <div className="st-container-1">
                <div className="st-circle"><ReactRoundedImage
                    image={photo}
                    roundedSize="0"/>
                </div>
                <div className="st-secondary-container-1">  
                </div>
                <div className="st-tertiary-container-1" style={{color: "black"}}>
                  <div className="flex " style={{justifyContent:"space-between"}}>
                  <p>{student.username}</p>
                  {
                   student.outlookId&&(<Link to="/student/edit">
                    <IconButton  aria-label="Edit Profile" className="edtbtn">
                    <EditIcon />              
                    </IconButton>
                    </Link>)
                  }
                   
                  
                  
         </div>
                  <p style={{fontSize: "medium", color: "black"}}>Student at IIT Guwahati | Mechanical Engineering | ML Enthusiast</p>
                  <div style={{display:"flex", flexDirection:"row"}}>
                    <Button>View Resume</Button>
                    <Button>View LinkedIn</Button>
                  </div>
                </div>
              </div>
            </div>
  </div>);
};

export default StCustomComponent;


