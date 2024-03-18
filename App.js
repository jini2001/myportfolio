
import { useContext } from 'react';
import './App.css';

import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';
import Work from './Components/Work/Work';
 import { themeContext } from './Context';
 

function App() {
  const theme = useContext(themeContext);
  
  const darkMode = theme.state.darkMode;

  return (
    <div className="App" 
    style={{
      background: darkMode? 'black':'',
      color : darkMode?  'white': ''
    }}>
      <Navbar/>
      <Intro/>
      <Services/>
      
      <Work/>
      <Portfolio/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;

