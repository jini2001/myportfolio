import React from 'react'
import './Intro.css';
import Github from "../../img/github.png"
import Linkedin from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import girl from '../../img/girl.jpeg'
import thumbup from '../../img/thumbup.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion'




const Intro = () => {


    const transition = { duration : 2, type: 'spring'}


    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
    <div className='i-left'>
        <div className='i-name'>
            <span style={{color:darkMode? 'white': ''}}>Hy! My name is </span>
            <span>Saloni Mittal</span>
            <span>Currently, working as Domain Support Specialist  <b>@ Ericsson</b> in 4G  <br/> or  5G project that is based on cloud. <br/> <br/> Making projects and experimenting with evergrowing technology. <br/>I have knowledge of various technical skills like ReactJS, Python, Django, HTML, CSS </span>

        </div>

        <div className='i-icons'>
        <a href='https://github.com/jini2001'>
        <img src={Github} alt=''/>
        </a>

        <a href='https://www.linkedin.com/in/saloni-mittal-b04a371b3/'>
        <img src={Linkedin} alt=''/>

        </a>
        </div>
        
    </div>

    <div className='i-right'>
        <img src={Vector1} alt=''/>
        <img src={Vector2} alt=''/>
        <img src={girl} alt=''/>
        <motion.img 
        initial ={{left: "-36%"}}
        whileInView={{left : "-24%"}}
        transition={transition}
        src={glassesimoji} alt=''/>

        
    

    <motion.div 
    initial = {{top:'-4%',left:'74%'}}
    whileInView = {{left:'68%'}}
    transition={transition}
    
    
    style={{top:"-4%" , left:"68%"}}
    className='floating-div'
    >
        <FloatingDiv image={Crown} txt1='CSian' />

    </motion.div>

    <motion.div

    initial={{left:'9rem' , top:'18rem'}}
    whileInView={{left:'0rem'}}
    transition={transition}

    
    
     style={{top:"18rem" , left:"0rem"}}
     className='floating-div '
     >
        <FloatingDiv image={thumbup} />
    </motion.div>

  


    {/*blur*/}

    <div className='blur' style={{background: "rgb(238  210  255)"}}></div>

    <div className='blur' style={{
        background:'#C1F5FF',
        top:"17rem",
        width:"21rem",
        height:"15rem",
        left:"-9rem"
    }}
    ></div>
    </div>
    </div>
  )
}

export default Intro
