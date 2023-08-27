import React from "react";
import logo from "../images/Dark.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav flex">
     <div className="nav_logo flex center_ele">
       <img src={logo} alt="logo" /> 
       <div>
        <ul className="nav_list flex">
          <li className="nav_item">
            <a href="#home" className="nav_link active">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About Us
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              Contact Us
            </a>
          </li>
        </ul>
        </div>
      </div>
      <div className="nav_btn_div flex">
         
        
            <button className="nav_btn_light">Log In</button>
            <button className="nav_btn_dark">Sign Up</button>
     
      </div>
    </div>
  );
};

export default Navbar;
