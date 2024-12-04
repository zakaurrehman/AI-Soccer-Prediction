import React from 'react';
import '../../assets/public/css/app.min.css'; // Ensure this path matches your project structure
import '../../assets/public/css/custom.css'; // Ensure this path matches your project structure

// Import images
import logoImg from '../../assets/public/img/logo.png';
import facebookImg from '../../assets/public/img/icon/facebook.png';
import instagramImg from '../../assets/public/img/icon/instagram.png';
import twitterImg from '../../assets/public/img/icon/twitter.png';
import youtubeImg from '../../assets/public/img/icon/youtube.png';
import tiktokImg from '../../assets/public/img/icon/tiktok.png';

const Footerd = () => {
  const textColor = '#ffffff'; // Define the consistent text color here

  return (
    <footer className="nt-footer pt-5 pb-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="nt-footer-title"
              onClick={() => window.location.href = '/'}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={logoImg}
                alt="Logo"
                width="150px"
              />
            </div>
            <div className="nt-footer-content links">
              <a 
                href="TermsOfUse" 
                style={{ fontSize: '15px', color: textColor }} 
                onMouseEnter={(e) => e.target.style.color = 'red'}
                onMouseLeave={(e) => e.target.style.color = textColor}
              >
                Terms and Conditions
              </a>
              <a 
                href="PrivacyPolicy" 
                style={{ textDecoration: 'none', color: textColor }} 
                onMouseEnter={(e) => e.target.style.color = 'red'}
                onMouseLeave={(e) => e.target.style.color = textColor}
              >
                Privacy Policy
              </a>
              <a 
                href="ContactUs" 
                style={{ textDecoration: 'none', color: textColor }} 
                onMouseEnter={(e) => e.target.style.color = 'red'}
                onMouseLeave={(e) => e.target.style.color = textColor}
              >
                Contact
              </a>
            </div>

            <div className="nt-footer-content">
              <p style={{ color: textColor }}>Contact Us At:</p>
              <a href="mailto:info@aiprognoza.com" style={{ color: textColor }}>
                <p>Email: info@aiprognoza.com</p>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="nt-footer-title" style={{ color: textColor }}>FOLLOW US</div>
            <div className="nt-footer-content social">
              <a
                href="https://www.facebook.com/"
                className="media text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="align-self-center mr-3"
                  style={{ borderRadius: 3 }}
                  width={24}
                  height={24}
                  src={facebookImg}
                  alt="Facebook"
                />
                <div className="media-body align-self-center">
                  <p className="m-0" style={{ color: textColor }}>Facebook</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com"
                className="media text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="align-self-center mr-3"
                  width={24}
                  height={24}
                  src={instagramImg}
                  alt="Instagram"
                />
                <div className="media-body align-self-center">
                  <p className="m-0" style={{ color: textColor }}>Instagram</p>
                </div>
              </a>
              <a
                href="https://twitter.com"
                className="media text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="align-self-center mr-3"
                  width={24}
                  height={24}
                  src={twitterImg}
                  alt="Twitter"
                />
                <div className="media-body align-self-center">
                  <p className="m-0" style={{ color: textColor }}>Twitter</p>
                </div>
              </a>
              <a
                href="https://www.youtube.com"
                className="media text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="align-self-center mr-3"
                  width={24}
                  height={24}
                  src={youtubeImg}
                  alt="YouTube"
                />
                <div className="media-body align-self-center">
                  <p className="m-0" style={{ color: textColor }}>YouTube</p>
                </div>
              </a>
              <a
                href="https://www.tiktok.com"
                className="media text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="align-self-center mr-3"
                  width={24}
                  height={24}
                  src={tiktokImg}
                  alt="TikTok"
                />
                <div className="media-body align-self-center">
                  <p className="m-0" style={{ color: textColor }}>TikTok</p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-5 col-md-8">
            <div className="nt-footer-title" style={{ color: textColor }}>What WE DO?</div>
            <ul style={{ color: textColor, fontSize: '15.5px', opacity: '0.70' }}>
              <li>
                <strong>Daily AI Predictions:</strong>
                Receive daily football predictions powered by advanced algorithms and real-time data for
                accurate betting tips.
              </li>
              <li>
                <strong>Smart Betting:</strong>
                Make informed bets based on data analytics to maximize your success.
                football tips generated by AI.
              </li>
              <li>
                <strong>Increased Winnings:</strong>
                Leverage our tools and insights to enhance your betting strategies and increase profits.
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="nt-footer-copyright" style={{ textAlign: 'center', color: textColor }}>
              <p>Copyright © 2024 AI PROGNOZA.COM</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerd;
