import './Hero.css'
function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={process.env.PUBLIC_URL + '/assests/image/content.webp'} alt="Example" />
        <div class="overlay"></div>
      </div>
      <div className='hero-content'>
        <h3>Introduction</h3>
        <p>Hello World</p>
        <h3>Learn More</h3>
      </div>
    </section>
  );
}

export default Hero;
