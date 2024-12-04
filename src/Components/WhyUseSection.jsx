import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import '../assets/css/main.css'

const WhyUseSection = () => {
  return (
    <section id="tabs" className="tabs section">
      <div className="container why-use-section">
        <h2 className="why-use-title" style={{color:'#d00102'}}>WHY TO USE AI PROGNOZA</h2>
        <p>AI PROGNOZA utilizes advanced algorithms built over years to deliver insightful predictions with ease.</p>

        <div className="row justify-content-center">
          {/* AI Prediction Icon */}
          <div className="col-md-4 icon-card">
            <div className="icon-circle icon-box">
              <i className="bi bi-robot"></i>
            </div>
            <div className="icon-text">AI Predictions</div>
            <div className="icon-desc">Our AI system generates precise, data-driven predictions for football matches.</div>
          </div>

          {/* Profitable Tips Icon */}
          <div className="col-md-4 icon-card">
            <div className="icon-circle icon-box">
              <i className="bi bi-graph-up"></i>
            </div>
            <div className="icon-text">Profitable Tips</div>
            <div className="icon-desc">Maximize your profits with tips that have a proven track record of success.</div>
          </div>

          {/* Risk-Free Icon */}
          <div className="col-md-4 icon-card">
            <div className="icon-circle icon-box">
              <i className="bi bi-shield-check"></i>
            </div>
            <div className="icon-text">Risk-Free</div>
            <div className="icon-desc">Your data is safe. We do not store any personal information or betting history.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUseSection;
