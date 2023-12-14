import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
    return (
      <section className="footer">
        <div className='footer-msg'>
            <h2 className='footer-msg-text'>"Thank You Spending Time for Visit"</h2>
        </div>
        <div className='footer-section'>
            <div className='footer-msg footer-icon'>
                <span><FacebookIcon></FacebookIcon> </span>
                <span><InstagramIcon></InstagramIcon> </span>
                <span><TwitterIcon></TwitterIcon></span>
            </div>
            <p>&copy;copyright all rights reserved</p>
        </div>
      </section>
    );
  }
  
export default Footer;