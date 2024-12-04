import React from 'react';
import CountUp from 'react-countup';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure Bootstrap Icons is installed
import '../assets/css/main.css';

const Stats = () => {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
            <i className="bi bi-clipboard2-pulse-fill"></i>
            <div className="stats-item">
              <CountUp start={0} end={21} duration={2.5} />
              <p>Predicted Today</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
            <i className="bi bi-percent"></i>
            <div className="stats-item">
              <CountUp start={0} end={77} duration={2.5} />
              <p>Bankers Rate</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
            <i className="bi bi-trophy-fill"></i>
            <div className="stats-item">
              <CountUp start={0} end={9435} duration={2.5} />
              <p>Matches Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
