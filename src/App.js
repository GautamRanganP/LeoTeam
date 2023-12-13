import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Service from './component/Service/Service';
import Skill from './component/Skill/Skill';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Service></Service>
      <Skill></Skill>
      <Footer></Footer>
    </div>
  );
}

export default App;
