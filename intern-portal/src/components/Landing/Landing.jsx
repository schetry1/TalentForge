import React from "react";
import "../Global/navbar.css"
import ImageSlider from "../Global/Carousel/ImageSlider";
import image1 from "../images/jj.png";
import image2 from "../images/ig.png"
import image3 from "../images/iu.png"
import image4 from "../images/kk.png";
import image5 from "../images/Quote Mark.png";
import Slide from "../Global/Carousel/Slide";
import "./landing.css";
import { SliderData } from "../Global/Carousel/SliderData";



const Landing = () => {
 
  return (
     
    <div>
    
   
      <div className="landing_header ">
        <div className="center_ele flex head_box">
          <h2 className="heading">IITG INTERN PORTAL</h2>
         
        </div>
        <div className="flex space_bet flex-column">
          <div className="txt_center">
            <img className="head_img" src={image1} alt="headimg" />
            <h4 className="sub_heading">Hire People</h4>
            <p>Find people from IITG </p>
             <p> communty to work with</p>
            <button className="btn">Post an Oppurtunity</button>
          </div>
          <div className="txt_center">
            <img className="head_img" src={image2} alt="headimg" />
            <h4 className="sub_heading">Find Job</h4>
            <p>Find people from IITG </p> 
             <p> community to work with</p>
            <button className="btn">Search Oppurtunities</button>
          </div>
        </div>
        <div className="flex center_ele ">
            <img className="res-img mg-top" src={image3} alt="s" />
        </div>
      </div>
      <Slide slides={SliderData}/>
 
     <div>
         <div className="flex center_ele ">
<img className="res-img mg-btm" src={image4} alt="" />
         </div>
         <div className="container client_sec">
<h2 className="sub_heading">
    Our Clients Speak
</h2>
<div className="flex client-cont">
<img src={image5} className="shift_img" alt="" />
<p >
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, esse. Qui, animi beatae veritatis quis assumenda corrupti dolorum corporis, sint, cum repudiandae consectetur in. Veritatis quo eaque corrupti cupiditate et?
    Quod numquam adipisci eius repudiandae inventore consequatur, non quisquam facilis voluptatibus reprehenderit quos, labore et ullam quis explicabo? Quisquam odio consectetur facere necessitatibus possimus doloribus voluptatem impedit hic eaque odit?
    Labore quas quia magni. Veniam architecto tempore similique error, cum nesciunt assumenda porro quam laboriosam necessitatibus sed temporibus quasi possimus dicta velit eveniet nulla eligendi totam, omnis placeat accusamus recusandae!
</p>
</div>
         </div>
     </div>
    </div>
  );
};

export default Landing;
