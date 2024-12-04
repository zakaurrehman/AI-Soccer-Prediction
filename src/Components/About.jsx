
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import { Link } from 'react-router-dom';
import '../assets/css/main.css'

const About = () => {
  return (
    <section id="about" className="about section section-bg dark-background">
      <div className="container position-relative">
        <div className="row gy-5">

          <div className="content col-xl-5 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
            <h3>WELCOME TO <br /> AI PROGNOZA</h3>
            <p>
              <strong> AI PROGNOZA </strong> is a cutting-edge platform providing AI-driven predictions and insights for live sports betting, helping users make informed decisions with real-time updates and accurate forecasting.
            </p>
            <a href="Tutriol" className="about-btn align-self-center align-self-xl-start">
              <span>About us</span> <i className="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="col-xl-7" data-aos="fade-up" data-aos-delay="200">
            <div className="row gy-4">

              <div className="col-md-6 icon-box position-relative">
                <i className="bi bi-filetype-ai"></i>
                <h4>AI-Powered Predictions:</h4>
                <p>Leverage advanced algorithms to get precise predictions for football matches and other sports events.</p>
              </div>

              <div className="col-md-6 icon-box position-relative">
                <i className="bi bi-broadcast"></i>
                 
  <h4 className="stretched-link">Real-Time Updates:</h4>

                <p>Stay informed with live updates on odds, match results, and team stats for accurate betting choices.</p>
              </div>

              <div className="col-md-6 icon-box position-relative">
                <i className="bi bi-ticket-detailed"></i>
                <h4 className="stretched-link"> Comprehensive Match Insights:</h4>
                <p>Analyze detailed match breakdowns, including team form, player performance, and game statistics for better forecasting.</p>
              </div>

              <div className="col-md-6 icon-box position-relative">
                <i className="bi bi-easel"></i>
                <h4 className="stretched-link">  User-Friendly Interface:</h4>
                <p>Enjoy an easy-to-use platform designed for both novice and experienced sports bettors seeking AI-backed predictions.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
