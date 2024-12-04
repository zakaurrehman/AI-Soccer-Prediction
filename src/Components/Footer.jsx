
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure Bootstrap Icons is installed
import logo from '../assets/img/logo.png'; // Adjust the path according to your structure
import '../assets/css/main.css'


const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background " style={{width:'Full'  }}>
      <div className="container footer-top ">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <img src={logo} alt="Logo" style={{ width: '120px' }} />
            </a>
            <p>
              AI Prognoza is a cutting-edge platform offering AI-powered football predictions. Our goal is to help bettors make informed decisions with data-driven insights and increase their chances of winning.
            </p>
            <div className="footer-contact pt-3">
              <p><strong>Email:</strong> <span>info@aiprognoza.com</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="https://x.com/"><i className="bi bi-twitter-x"></i></a>
              <a href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="ContactUs">Contact Us</a></li>
              <li><a href="PrivacyPolicy">Privacy Policy</a></li>
              <li><a href="TermsOfUse">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="col-lg-6 col-md-12 footer-newsletter">
            <h4>What We Do?</h4>
            <ul>
              <li><strong>Daily AI Predictions:</strong> Receive daily football predictions powered by advanced algorithms and real-time data for accurate betting tips.</li>
              <li><strong>Smart Betting:</strong> Make informed bets based on data analytics to maximize your success.</li>
              <li><strong>Increased Winnings:</strong> Leverage our tools and insights to enhance your betting strategies and increase profits.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4 mb-1">
  <p>© <span>Copyright</span> <strong className="px-1 sitename">AI PROGNOZA</strong> <span>All Rights Reserved</span></p>
</div>

    </footer>
  );
};

export default Footer;
