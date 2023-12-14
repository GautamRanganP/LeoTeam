import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Service from './component/Service/Service';
import Skill from './component/Skill/Skill';
import Footer from './component/Footer/Footer';
import { useRef } from 'react';

function App() {
  const sectionRef = useRef(null);
  const scrollToSection = () =>{
    if(sectionRef.current){
      sectionRef.current.scrollIntoView({behavior:'smooth'})
    }
  }
  return (
    <div>
       <div className='navbar'>
        <ul className='navbar-container'>
          <li className='navbar-link'>Home</li>
          <li className='navbar-link' onClick={scrollToSection}>Service</li>
          <li className='navbar-link'>Contact</li>
          <li className='navbar-link'>About us</li>
        </ul>
      </div>
      <Hero></Hero>
      <Service data={sectionRef}></Service>
      <Skill></Skill>
      <Footer></Footer>
    </div>
  );
}

export default App;
