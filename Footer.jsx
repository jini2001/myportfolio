import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'



import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

import Github from '@iconscout/react-unicons/icons/uil-github'



const Footer = () => {
  return (
    <div className='footer'>
    <img src={Wave} alt=''  style={{width:'100%'}}/>
    <div className='f-content'>
        <span>Email id :- saloniiird@gmail.com</span>
        <div className='f-icons'>
          
            <a href = 'https://www.linkedin.com/in/saloni-mittal-b04a371b3/'>
            <Linkedin color='white'  size='3rem'/>
            </a>

            <a href='https://github.com/jini2001'>
            <Github  color='white'  size='3rem'/>
            </a>
        </div>
    </div>
      
    </div>
  )
}

export default Footer
