import React, {useState} from 'react'
import { Link } from "react-router-dom"
import MenuItems from "./MenuItems"
import Button from './Button'
import logo from "../images/Dark.png"
import "./nav.css"
import { FaWindows } from 'react-icons/fa'

const ResNavbar = ({user}) => {
 const [clicked , setClicked]= useState(false);
 
 function handleClick(){
     setClicked(!clicked);
 }

 const logout=()=>{
     window.open("http://localhost:5000/auth/logout", "_self");
 }

    return (
        <nav className='NavbarItems '>
            <Link to="/">
            <img style={{height:"64px"}} src={logo} alt="" srcset="" />
            </Link>
            <div className='menu-icon'onClick={handleClick}>
  <i className={clicked?"fas fa-times": 'fas fa-bars'}></i>
            </div>
            <ul className={clicked? 'nav-menu active':'nav-menu' }>
            {          
           user?.googleId&&<Link to={`/company/${user._id}`}><li className='nav-links' >Profile</li></Link>
          }
           {
              user?.outlookId&&<Link to={`/student/${user._id}`}><li className='nav-links' >Profile</li></Link>
          }
            {/* <Link to='/'><li className='nav-links' >Home</li></Link> */}
            <Link to='/jobs'><li className='nav-links' >Jobs</li></Link>
            {          
           user?.googleId&&<Link to={`/manage/${user._id}`}><li className='nav-links' >Manage Profile</li></Link>
          }
          {
              user?.outlookId&&<Link to={`/student/manage/${user._id}`}><li className='nav-links' >Manage Profile</li></Link>
          }
            </ul>
            <div className='flex btn-grp'>
           
                {user?(
                    <div className='nav-btn flex'>
                   
                     <Button  className='nav-btn' onClick={logout}>Log Out</Button>
                    </div>):
                    (
                        
                        
                        <Link className='nav-btn' to="login">
                        <Button >Log In</Button>
                        </Link>  
                       
                    )
                }
            
            </div>
        </nav>
    )
}

export default ResNavbar
