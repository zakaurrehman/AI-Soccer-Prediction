import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import '../assets/css/main.css'

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio section">
      {/* Section Title */}
      <div className="container position-relative">
        <div className="row gy-5">
          <div className="content col-xl-8 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
            <h3 className="why-use-title" style={{color:'#d00102'}}>Bet Smarter with <br /> Our Daily Predictions</h3>
            <p>
              Unlock expert football insights with our Bet of the Day. Tailored by AI-driven analysis and real-time data, we bring you winning predictions that maximize your betting success. Stay ahead with our daily picks, designed to increase your chances of securing profitable bets. Don’t miss out—bet smarter, win bigger!
            </p>
            <a 
  href="Betoftheday" 
  className="about-btn align-self-center align-self-xl-start" 
  style={{ textDecoration: 'none' }} // Inline style to remove underline
>
  <span style={{ color: '#d00102' }}>Explore Bet of the Day</span> 
  <i className="bi bi-chevron-right" style={{ color: 'red' }}></i>
</a>

          </div>
        </div>
      </div>
      {/* End Section Title */}
    </section>
  );
};

export default PortfolioSection;
