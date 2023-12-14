import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Service from './component/Service/Service';
import Skill from './component/Skill/Skill';
import Footer from './component/Footer/Footer';
import { useRef } from 'react';

function App() {
  const sectionServiceRef = useRef(null);
  const sectionSkillRef = useRef(null)
  const scrollToSection = (option) =>{
    if(option==='sectionService'){
      if(sectionServiceRef.current){
        sectionServiceRef.current.scrollIntoView({behavior:'smooth'})
      }
    }
    if(option==='sectionSkill'){
      if(sectionSkillRef.current){
        sectionSkillRef.current.scrollIntoView({behavior:'smooth'})
      }
    }
  }
  return (
    <div>
       <div className='navbar'>
        <ul className='navbar-container'>
          <li className='navbar-link'>Home</li>
          <li className='navbar-link' onClick={()=> scrollToSection('sectionService')}>Service</li>
          <li className='navbar-link' onClick={()=> scrollToSection('sectionSkill')}>Skills</li>
          <li className='navbar-link'>About us</li>
        </ul>
      </div>
      <Hero></Hero>
      <Service data={sectionServiceRef}></Service>
      <Skill data={sectionSkillRef}></Skill>
      <Footer></Footer>
    </div>
  );
}

export default App;
