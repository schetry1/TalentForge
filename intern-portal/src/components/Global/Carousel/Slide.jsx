import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

const Slide = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  console.log(slides[0].image);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slide-bg flex center_ele">
     
      <ArrowBackIosOutlinedIcon className="left-arrow" onClick={prevSlide}/>
      <ArrowForwardIosOutlinedIcon className="right-arrow" onClick={nextSlide}/>
      {slides.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? "show "
                : "hide "
            }
          >
            {index === current && (
              <div className="slide-container flex">
                <img
                  src={slide.image}
                  alt=""
                  srcset=""
                  className="slide-img "
                />
                <div className="slide-content">
                  <h4 className="sub_heading mob-sub">{slide.profile}</h4>
                  <p className="para mob-para">Find job as {slide.profile}</p>
                  <span className="color-span">Get Started </span>
                  <i class="fas  fa-long-arrow-alt-right"></i>
                </div>
                </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slide;
