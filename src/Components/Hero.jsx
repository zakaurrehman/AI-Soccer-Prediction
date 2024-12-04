// src/Hero.js

import React from 'react';
import heroImage from '../assets/img/header-bg.jpg'; // Adjust the path as needed
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import { Link } from 'react-router-dom';
import '../assets/css/main.css'

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <img src={heroImage} alt="" data-aos="fade-in" />

      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>

          <div className="col-lg-6">
          <h2 data-aos="fade-up" data-aos-delay="100">Unlock the Power of AI for Smarter Predictions</h2>
<p data-aos="fade-up" data-aos-delay="200">AI Prognoza leverages advanced machine learning algorithms to provide accurate forecasts and insights for your business.</p>

            <div style={{alignItems:'center',justifyContent: 'center'}} className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
              <a href="Tutriol" className="btn-get-started" >Get Started</a>
              {/* <Link href="" className="glightbox btn-watch-video d-flex align-items-center">
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </Link> */}
            </div>
          </div>

          <div className="col-lg-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
