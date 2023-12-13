import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Service from './component/Service/Service';
import Skill from './component/Skill/Skill';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Service></Service>
      <Skill></Skill>
    </div>
  );
}

export default App;
