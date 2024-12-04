import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import { Link } from 'react-router-dom';
import '../assets/css/main.css'

const PricingSection = () => {
  return (
    <div className='section-bg dark-background'>


       {/* Section Title */}
       <div  className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p style={{color:'white'}}>
          Explore our flexible Pricing Plans designed to fit every bettor's needs, from beginners to professionals. Unlock premium features today!
        </p>
      </div>
      {/* End Section Title */}
   
    <section id="pricing" className="pricing section ">
     

      <div className="container">
        <div className="row g-4 g-lg-0">
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="pricing-item">
              <h3>Basic Plan</h3>
              <h3><sup>$</sup>3.99<span> 1 month</span></h3>
              <ul>
                <li><i className="bi bi-check"></i> <span>Full Access</span></li>
                <li><i className="bi bi-check"></i> <span>75% Hit Rate</span></li>
                <li><i className="bi bi-check"></i> <span>Tips For Over 160 leagues</span></li>
                <li><i className="bi bi-check"></i> <span>1x2 Tips</span></li>
                <li><i className="bi bi-check"></i> <span>Goal Tips</span></li>
                <li><i className="bi bi-check"></i> <span>NT 4.0</span></li>
                <li><i className="bi bi-check"></i> <span>Premium Stats</span></li>
              </ul>
              <div className="text-center"><Link to="Pricingp" className="buy-btn">Buy Now</Link></div>
            </div>
          </div>
          {/* End Pricing Item */}

          <div className="col-lg-4 featured" data-aos="zoom-in" data-aos-delay="200">
            <div className="pricing-item">
              <h3>Standard Plan</h3>
              <h3><sup>$</sup>8.99<span> 3 month</span></h3>
              <ul>
                <li><i className="bi bi-check"></i> <span>Full Access</span></li>
                <li><i className="bi bi-check"></i> <span>75% Hit Rate</span></li>
                <li><i className="bi bi-check"></i> <span>Tips For Over 160 leagues</span></li>
                <li><i className="bi bi-check"></i> <span>1x2 Tips</span></li>
                <li><i className="bi bi-check"></i> <span>Goal Tips</span></li>
                <li><i className="bi bi-check"></i> <span>NT 4.0</span></li>
                <li><i className="bi bi-check"></i> <span>Premium Stats</span></li>
              </ul>
              <div className="text-center"><Link to="Pricingp" className="buy-btn">Buy Now</Link></div>
            </div>
          </div>
          {/* End Pricing Item */}

          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="pricing-item">
              <h3>Premium Plan</h3>
              <h3><sup>$</sup>16.99<span> 6 month</span></h3>
              <ul>
                <li><i className="bi bi-check"></i> <span>Full Access</span></li>
                <li><i className="bi bi-check"></i> <span>75% Hit Rate</span></li>
                <li><i className="bi bi-check"></i> <span>Tips For Over 160 leagues</span></li>
                <li><i className="bi bi-check"></i> <span>1x2 Tips</span></li>
                <li><i className="bi bi-check"></i> <span>Goal Tips</span></li>
                <li><i className="bi bi-check"></i> <span>NT 4.0</span></li>
                <li><i className="bi bi-check"></i> <span>Premium Stats</span></li>
              </ul>
              <div className="text-center"><Link to="Pricingp" className="buy-btn">Buy Now</Link></div>
            </div>
          </div>
          {/* End Pricing Item */}
        </div>
      </div>
    </section>
    </div>
  );
};

export default PricingSection;
