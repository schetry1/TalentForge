import React from "react";
import "./jobposted.css";
import iitglogo from "../images/iitglogo.png";
class JobPosted extends React.Component{
    render(){
        return(
            <div className="jobs">
                <h3>Jobs Posted</h3>
                <div className="jobs-list">
                    <button className="job-tile">
                        <div className="job-logo">
                            <img src={iitglogo} alt="" style={{width:'100px',height:'100px'}} />
                        </div>
                        <div className="job-title">
                            <div className="job-title-text">
                                <h4>Java Developer</h4>
                                <p>Full Time</p>
                                <p>Company: Stonks Fintech</p>
                            </div>
                        </div>
                    </button>
                    <button className="job-tile">
                        <div className="job-logo">
                            <img src={iitglogo} alt="" style={{width:'100px',height:'100px'}} />
                        </div>
                        <div className="job-title">
                            <div className="job-title-text">
                                <h4 className="job-text">Java Developer</h4>
                                <p className="job-text">Full Time</p>
                                <p className="job-text">Company: Stonks Fintech</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}

export default JobPosted;