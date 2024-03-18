import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Glamour from '../../img/glamour.png'
import Profile from '../../img/Portfolio.png'
import Button from '../../img/ContButton.png'
import Travel from '../../img/Travel.png'
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Portfolio = () => {

  
  const theme =useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio'  id='Portfolio'>


        {/* Heading*/}

        <span style={{color:darkMode? 'white': ''}}>Featured</span>
        <span>Project</span>


{/* Sliding*/}

<Swiper

spaceBetween={10}
slidesPerView={3}
grabCursor={true}
className='portfolio-slider'>
  <SwiperSlide>
  <a href='https://reactwebsite-2qb.pages.dev/'>
    <img src={Glamour} alt=''/>
    </a>
  </SwiperSlide>

  <SwiperSlide>
    <img src={Profile} alt=''/>
  </SwiperSlide>

  <SwiperSlide>
  <a href = 'https://codepen.io/Mittal_Saloni/full/GRmLrVG'>
    <img src={Button} alt=''/>
    </a>
  </SwiperSlide>

  <SwiperSlide>
  <a href ='https://codepen.io/Mittal_Saloni/full/vYmwqOO'>
    <img src={Travel} alt=''/>
    </a>
  </SwiperSlide>

</Swiper>
       
       <br/>
       <br/>
        <br/>
        <br/>
        <br/>
       <a href='https://docs.google.com/document/d/1tkPQXaYxfuqb2qg4XBD3x9GB6EvSIKXROV9qWWqWKb0/edit?usp=sharing'>
        <button className=' button s-button'>See all Project</button>

        </a>






    </div>
  )
}

export default Portfolio
