import './skill.css'
function Skill() {
    return (
      <section className="skill">
          <h2 className="skill-header">SKILLS</h2>
          <div className='skill-grid-container'>
            <img src={process.env.PUBLIC_URL + '/assests/image/adobe1.png'} alt="Example"  />
            <img src={process.env.PUBLIC_URL + '/assests/image/adobe2.png'} alt="Example"  />
            <img src={process.env.PUBLIC_URL + '/assests/image/adobe3.png'} alt="Example"/>
            <img src={process.env.PUBLIC_URL + '/assests/image/adobe4.png'} alt="Example" />
            <img src={process.env.PUBLIC_URL + '/assests/image/f2.png'} alt="Example" />
            <img src={process.env.PUBLIC_URL + '/assests/image/fe4.png'} alt="Example" />
            {/* <img src={process.env.PUBLIC_URL + '/assests/image/f3.png'} alt="Example" /> */}
          </div>
      </section>
    );
  }
  
export default Skill;
  