import { useState } from 'react';
import './service.css'
function Service(props) {
    const [hovered, setHovered] = useState(false);

    return (
      <section className="service" ref={props.data}>
          <div className="service-head">
            <h3>Service</h3>
            <p>What we are good at</p>
          </div>
          <div className="service-content">
            <div className="image-service-wrap">
                <div className='img-one'>
                    <img src={process.env.PUBLIC_URL + '/assests/image/image4.jpg'} alt="Example" width="100%" height="100%"/>
                    <img src={process.env.PUBLIC_URL + '/assests/image/image5.png'} alt="Example" width="100%" height="100%"/>
                </div>
                <div className='img-two'>
                    <img src={process.env.PUBLIC_URL + '/assests/image/image3.jpg'} alt="Example" width="100%" height="100%" />
                </div>
            </div>
            <div className='image-service-container'>
                <div className='img-three'>
                    <img src={process.env.PUBLIC_URL + '/assests/image/image1.jpg'} alt="Example" width="100%" height="100%" 
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    />
                    <div className='overlay-img'><h2 className={hovered ? 'text visible' : 'text'}>Web Development</h2></div>
                </div>
                <div className='img-four'>
                    <img src={process.env.PUBLIC_URL + '/assests/image/image2.jpeg'} alt="Example" width="100%" height="100%" />
                    {/* <div className="overlay-img"><h2 className={hovered ? 'text visible' : 'text'}>Hover Me</h2></div> */}
                </div>
            </div>
          </div>
      </section>
    );
  }
  
export default Service;
  