import React from 'react'
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import {Link} from 'react-scroll'


const Navbar = () => {
  return (
    <div className='n-wrapper'>
    <div className='n-left'>
        <div className='n-name'>
            Saloni 
        </div>
        <Toggle/>
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul style={{listStyleType:'none'}}>
                <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <li>Home</li>
                    </Link>

                    <Link spy={true} to='Services' smooth={true} >
                    <li>Education</li>
                    </Link>


                    <Link spy={true} to='Work' smooth={true} >
                    <li>Skills</li>
                    </Link>


                    <Link spy={true} to='Portfolio' smooth={true} >
                    <li>Project</li>
                    </Link>


                    <Link spy={true} to='Testimonials' smooth={true} >
                    <li>Certificate</li>
                    </Link>

                </ul>
                
                
            </div>
            
        </div>
    </div>
      
    
  )
}

export default Navbar
