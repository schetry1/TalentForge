import React from 'react'
import "./carousel.css"
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import { useState } from 'react/cjs/react.development';
import { SliderData } from './SliderData'


const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.SliderData.length;
    
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
      console.log(current);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
  
  
    return (
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='travel image' className='image' />
              )}
            </div>
          );
        })}
      </section>
    );
  };

export default ImageSlider;
