import React from "react";
import "./otherdetails.css";
import branch_icon from '../images/branch_icon.png';
import email_icon from '../images/email_icon.png';
import location_icon from '../images/location_icon.png';
import phone_icon from '../images/phoneicon.png';
import internet_icon from '../images/interneticon.png';
import year_of_graduation_icon from '../images/year_of_graduation_icon.png';
const OtherDetails = ({ company }) => {
        return(
            <div className="profile-pad">
            <div className="other-details">
                <h3>Other Details</h3>
                <div className="list flex">
                    <div className="list-1">
                        <ul>
                            <li>
                                <div className="mini-icon"><img src={location_icon} alt="" /></div>
                                <p>Location: {company.location}</p>
                            </li>
                            <li>
                                <div className="mini-icon" ><img src={internet_icon} style={{width:'30px',height:'30px'}} alt="" /></div>
                                <p>Domain: {company.domain}</p>
                            </li>
                            <li>
                                <div className="mini-icon"><img src={year_of_graduation_icon} alt="" /></div>
                                <p>Year of Foundation: {company.yearOfFoundation}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="list-2">
                        <ul>
                            <li>
                                <div className="mini-icon"><img src={email_icon} alt="" /></div>
                                <p>Email ID: {company.email}</p>
                            </li>
                            <li>
                                <div className="mini-icon"><img src={phone_icon} alt="" /></div>
                                <p>Phone Number: {company.phone}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        )

}

export default OtherDetails;