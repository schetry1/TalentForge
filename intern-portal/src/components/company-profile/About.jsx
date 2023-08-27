import React from "react";
import "./About.css";

const About = ({company}) => {
    console.log(company)
    return(<div className="profile-pad">
            <div className="about-section">
                <div className="content" style={{margin: "5px"}}>
                   <h3>About</h3>
                   <p >{company.about}</p> 
                </div>
            </div>
            </div>
    )
}

export default About;