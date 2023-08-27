import React from "react";
import "./St-otherdetails.css";
import branch_icon from '../images/branch_icon.png';
import email_icon from '../images/email_icon.png';
import location_icon from '../images/location_icon.png';
import year_of_graduation_icon from '../images/year_of_graduation_icon.png';

const StotherDetails = ({ student}) => {
        return(
            <div className="st-other-details">
                <div className="header">Other Details</div>
                <div className="list flex">
                    <div className="list-1">
                        <ul>
                            <li>
                                <div className="mini-icon"><img src={location_icon} alt="" /></div>
                                <p>Location: {student.location}</p>
                            </li>
                            <li>
                                <div className="mini-icon"><img src={branch_icon} alt="" /></div>
                                <p>Branch: {student.branch}</p>
                            </li>
                            <li>
                                <div className="mini-icon"><img src={year_of_graduation_icon} alt="" /></div>
                                <p>Year of Graduation: {student.graduation}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="list-2">
                        <ul>
                            <li>
                                <div className="mini-icon"><img src={email_icon} alt="" /></div>
                                <p>Email ID: {student.email}</p>
                            </li>
                            <li>
                                <div className="mini-icon"><img src={year_of_graduation_icon} alt="" /></div>
                                <p>Degree:{student.degree}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    

}

export default StotherDetails;