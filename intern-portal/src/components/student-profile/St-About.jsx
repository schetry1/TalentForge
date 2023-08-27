import React from "react";
import "./St-about.css";

const Stabout = ({ student }) => {

        return(
            <div className="st-about-section">
                <div className="st-content" style={{margin: "5px"}}>
                   <h3>About</h3>
                   <p>{student.bio}</p> 
                </div>
            </div>
        )
}

export default Stabout;