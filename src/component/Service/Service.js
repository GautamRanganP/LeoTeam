import './service.css'
function Service() {
    return (
      <section className="service">
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
                    <img src={process.env.PUBLIC_URL + '/assests/image/image1.jpg'} alt="Example" width="100%" height="100%" />
                </div>
                <div className='img-four'>
                    <img src={process.env.PUBLIC_URL + '/assests/image/image2.jpeg'} alt="Example" width="100%" height="100%" />
                </div>
            </div>
{/* 
          <img src={process.env.PUBLIC_URL + '/assests/image/image3.jpg'} alt="Example" />
          <img src={process.env.PUBLIC_URL + '/assests/image/image4.jpg'} alt="Example" />
          <img src={process.env.PUBLIC_URL + '/assests/image/image5.jpg'} alt="Example" /> */}
          </div>
      </section>
    );
  }
  
export default Service;
  