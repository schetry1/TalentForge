import React from "react";
import "./St-skills.css";
class Stskills extends React.Component{
    render(){
        return(
            <div className="skills">
                <div className="header">Skills</div>
                <div className="skill-points">
                    <ul className="flex">
                        <li><button type="button" className="btn btn-secondary" disabled>Node.js</button></li>
                        <li><button type="button" className="btn btn-secondary" disabled>Express.js</button></li>
                        <li><button type="button" className="btn btn-secondary" disabled>C/C++</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Stskills;