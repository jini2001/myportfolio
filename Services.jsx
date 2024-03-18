import React from 'react'
import './Services.css'
import glassesemoji from '../../img/glassesimoji.png'
import Card from '../Card/Card'
import Resume from './Saloni Mittal_(Resume) (2) (1).pdf'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';


const Services = () => {

  const transition = {duration:1, type:'spring' }

  const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='services'  id='Services'>
    {/*left side*/}

    <div className='awesome'>
        <span style={{color:darkMode? 'white': ''}}>My Educational</span>
        <span>Background</span>
        <span>B.Tech in Computer Science and Engineering <br/>(from Government Engineering College , Jhalawar | 2018-2022)
        <br/>
        <br/>
        Got 8.2 Grade points out of 10.
        <br/>
        <br/>
        Intership - Machine Learning
        <br/>
Smartinternz Collaboration With IBM
<br/>


May 2020 - Jun 2020
<br/>
<br/>
Internship - Web Design <br/>
Intern Studio, Online <br/>
Jul 2020 - Aug 2020

<br/>
<br/>
Training - Machine Learning Internshala <br/>
from Internshala <br/>

May 2020 - Jun 2020
  <br/>
  <br/>
  
</span>
<a href={Resume} download >
<button className='button s-button'>Download CV</button>
</a>
<div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>

    </div>


    {/*Rigth side*/}


    <div className='cards'>
    <motion.div

    whileInView={{left:'14rem'}}
    initial={{left:'25rem'}}
    transition={transition}
    
    
     style={{right:'10rem'}}>
        <Card
        emoji = {glassesemoji}
        heading ={'Internship - IBM '}
        detail = {"Predicting Life Expectancy Using Machine Learning May 2020 -Jun 2020"}
    
    /></motion.div>

{/* second card*/}


<motion.div 

whileInView={{right:'14rem'}}
    initial={{right:'25rem'}}
    transition={transition}
    



style={{top:"12rem" , right:"-4rem"}}>
        <Card
        emoji = {glassesemoji}
        heading ={' Internship-SmartInternz'}
        detail = {"Good Demand Forcasting Using Machine Learning April 2020 -Jun 2020"}
    
    /></motion.div>




    <div className='blur s-blur2'  style={{background:"purple"
    }}></div>
    
    </div>
      
    </div>
  )
}

export default Services
