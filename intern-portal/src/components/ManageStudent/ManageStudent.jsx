import React,{useContext, useEffect, useState} from "react";
import "./managestudent.css"
import cStatIllustraiton from "../images/companyIllustration.png";
import statisticsIcon from '../images/statisticsIcon.png';
import StudentJobCard from "./StudentJobCard";
import Button from '@mui/material/Button';
import JobModal from "../CompanyProfile/JobModal";
import statsimg from "../images/stats.svg"
import { Icon } from '@mui/material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


export default function ManageJobs() {
    

    return(
        <div style={{width:'100%'}}>
            <div style={{width:'80%',display:'flex',flexDirection:'column',margin:'0 auto'}}>
            <div className="student-statistics-container">
                <div className="student-statistics-tile-list">
                    <h2>Vighnesh Deshpande</h2>
                    <div className="student-statistics-tile-content">
                    <Icon baseClassName="fas"className="fa-business-time stats-icon"sx={{ color: '#66DFD8',fontSize: 30 }}/>
                        <div className="student-statistics-tile-content-text">
                            <div style={{fontSize:'20px', marginLeft:'20px'}}>No. of jobs applied for</div>
                            <div style={{fontSize:'20px', marginLeft:'20px'}}>5</div>
                        </div>
                    </div>
                    <div className="student-statistics-tile-content">
                    <Icon baseClassName="fas"className="fa-users stats-icon"sx={{ color: '#66DFD8',fontSize: 30 }}/>
                        <div className="student-statistics-tile-content-text">
                            <div style={{fontSize:'20px', marginLeft:'20px'}}>Total No. of jobs shortlisted for</div>
                            <div style={{fontSize:'20px', marginLeft:'20px'}}>5</div>
                        </div>
                    </div>
                </div>
                <img src={statsimg} style={{width:'30%',height:'30%'}} alt="" />
            </div>
            <div className="jobsapplied">
                <div style={{margin:'0 auto'}}><h2>Jobs Applied For</h2></div>
                <div style={{dispay:'flex',flexDirection:'column'}}>
                <div className="job-posted-list">
                    <StudentJobCard/>
                    <StudentJobCard/>
                </div>
                    {/* <CompanyJobCard/>
                    <CompanyJobCard/> */}
                </div>
                <div style={{dispay:'flex',flexDirection:'column'}}>
                <div className="job-posted-list">
                    <StudentJobCard/>
                    <StudentJobCard/>
                </div>
                    {/* <CompanyJobCard/>
                    <CompanyJobCard/> */}
                </div>
                <div style={{dispay:'flex',flexDirection:'column'}}>
                <div className="job-posted-list">
                    <StudentJobCard/>
                    <StudentJobCard/>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}
