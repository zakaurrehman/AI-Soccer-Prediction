import React from 'react';

// Import custom CSS if needed
import '../../assets/public/css/app.min.css'; // Ensure this path matches your project structure
import '../../assets/public/css/custom.css'; // Ensure this path matches your project structure

const SlipCountCard = () => {
  return (
   <section className="nt-score-card nt-slip-count" style={{marginTop: 10}}>
  <div className="container">
    <div className="row no-gutter">
      {/* Score Card Item */}
      <div className="col-4">
        <div className="card">
          <div className="card-body">
            <p className="card-title">Matches</p>
            <div className="score-circle"><span id="slip_predicted_count">3</span>
            </div>
          </div>
        </div>
      </div> {/*/ Score Card Item */}
      {/* Score Card Item */}
      <div className="col-4">
        <div className="card">
          <div className="card-body">
            <p className="card-title">Upcoming</p>
            <div className="score-circle"><span id="slip_notstarted_count">2</span>
            </div>
          </div>
        </div>
      </div> {/*/ Score Card Item */}
      {/* Score Card Item */}
      <div className="col-4">
        <div className="card">
          <div className="card-body">
            <p className="card-title">Odd</p>
            <div className="score-circle"><span id="slip_success_rate">2.1</span>
            </div>
          </div>
        </div>
      </div> {/*/ Score Card Item */}
    </div>
  </div>
</section>

  );
};

export default SlipCountCard;
