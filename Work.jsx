import React from 'react'
import './Work.css'
import Python from '../../img/Python.png'
import C from '../../img/C++.png'
import reactjs from '../../img/reactjs.png'
import HTML from '../../img/html.png'
import CSS from '../../img/css.png'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';


const Work = () => {

    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='works' id = 'Work'>
    <div className='awesome'>
        <span style={{color:darkMode? 'white': ''}}>MY</span>
        <span>Skills</span>
        <span style={{color:darkMode? 'white': ''}}>MS-Excel-Advanced
        <br/>
        <br/>
       Python - Advanced
        <br/>
        <br/>
        HTML / CSS - Advanced 
        <br/>
        <br/>
       Java - Intermediate 
       <br/>
       <br/>
       C / C++ - Intermediate
       <br/>
       <br/>
       React - Basic
       <br/>
       <br/>
       PHP / Django - Basic
       <br/>
       <br/>
       Figma / UI - Basic 
       <br/>
       <br/>
       Flutter / Dart - Basic 
</span>



<div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>

    </div>

    {/* right side*/}

    <div className='w-right'>
        <motion.div 

        initial={{rotate:45}}
        whileInView={{rotate:0}}
        
        viewport={{margin:'-40px'}}
        transition={{duration:3.5, type:'spring'}}
        
        
        className='w-mainCircle'>
            <div className='w-secCircle'>
                <img src={Python} alt=''/>
            </div>

            <div className='w-secCircle'>
                <img src={C} alt=''/>
            </div>

            <div className='w-secCircle'>
                <img src={reactjs} alt=''/>
            </div>

            <div className='w-secCircle'>
                <img src={HTML} alt=''/>
            </div>

            <div className='w-secCircle'>
                <img src={CSS} alt=''/>
            </div>
        </motion.div>

        {/* Background Circle */}

        <div className='w-backCircle  blueCircle'></div>
        <div className='w-backCircle  yellow'></div>



    </div>

    </div>
  )
}

export default Work
