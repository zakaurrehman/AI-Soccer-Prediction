

import React from 'react';
import '../../assets/public/css/app.min.css';
import '../../assets/public/css/custom.css';

const ScoreCard = ({ matches = [] }) => {
  // Total matches on a specific date
  const bankersCount = matches.length;

  // Matches with status "pre-match"
  const upcomingCount = matches.filter((match) => match.status === 'pre-match').length;

  // Finished matches with prediction.choice matching goals
  const wonMatches = matches.filter((match) => {
    if (match.status === 'finished') {
      const homeGoals = match.goals?.homeGoals || 0;
      const awayGoals = match.goals?.awayGoals || 0;
      const choice = match.prediction?.choice;

      // Validate prediction.choice against goals
      if (choice === 'home' && homeGoals > awayGoals) return true;
      if (choice === 'away' && awayGoals > homeGoals) return true;
      if (choice === 'draw' && homeGoals === awayGoals) return true;
    }
    return false; // Exclude non-matching or non-finished matches
  }).length;

  return (
    <div>
      <section className="nt-score-card nt-bank-count" style={{ backgroundColor: '#2C3442' }}>
        <div className="container">
          <div className="row no-gutter">
            {/* Bankers Count */}
            <div className="col-4">
              <div
                className="card-body"
                style={{
                  backgroundColor: '#242A37',
                  borderRadius: '15px',
                  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.4)', // 3D shadow effect
                  transform: 'scale(1.05)', // Slight zoom-in effect
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover

                }}
              // onMouseEnter={(e) => {
              //   e.currentTarget.style.transform = 'scale(1.1)';
              //   e.currentTarget.style.boxShadow = '0px 12px 25px rgba(0, 0, 0, 0.6)';
              // }}
              // onMouseLeave={(e) => {
              //   e.currentTarget.style.transform = 'scale(1.05)';
              //   e.currentTarget.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.4)';
              // }}
              >
                <p className="card-title" style={{ textAlign: 'center', color: 'white' }}>
                  Bankers
                </p>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: '100%', // Ensure the container spans the width of its parent
                    display: 'flex', // Enable flexbox for centering
                    justifyContent: 'center', // Horizontally center the circle
                    alignItems: 'center', // Vertically center the circle
                  }}
                >
                  <div

                    style={{
                      display: 'flex', // Center content inside the circle
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '50px', // Set the width of the circle
                      height: '50px', // Set the height of the circle
                      border: '2px solid red', // Add a red border
                      borderRadius: '50%', // Make it a circle
                      fontSize: '16px', // Adjust font size
                      fontWeight: 'bold', // Make the text bold
                      color: 'white', // Text color matches the border
                    }}
                  >
                    <span id="predicted_count">{bankersCount}</span>
                  </div>
                </div>


              </div>
            </div>

            {/* Upcoming Count */}
            <div className="col-4">
  <div
    className="card-body"
    style={{
      backgroundColor: '#242A37',
      borderRadius: '15px',
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.4)', // 3D shadow effect
      transform: 'scale(1.05)', // Slight zoom-in effect
      transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover
    }}
  >
    <p className="card-title" style={{ textAlign: 'center', color: 'white' }}>
      Upcoming
    </p>
    <div
      style={{
        display: 'flex', // Enable flexbox for centering
        justifyContent: 'center', // Horizontally center content
        alignItems: 'center', // Vertically center content
        width: '50px', // Set the width of the circle
        height: '50px', // Set the height of the circle
        border: '2px solid red', // Add a red border
        borderRadius: '50%', // Make it a circle
        fontSize: '16px', // Adjust font size
        fontWeight: 'bold', // Make the text bold
        color: 'white', // Text color matches the border
        margin: '0 auto', // Center the circle within its parent
      }}
    >
      <span id="notstarted_count">{upcomingCount}</span>
    </div>
  </div>
</div>


            {/* Won Matches */}
<div className="col-4">
  <div
    className="card-body"
    style={{
      backgroundColor: '#242A37',
      borderRadius: '15px',
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.4)', // 3D shadow effect
      transform: 'scale(1.05)', // Slight zoom-in effect
      transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover
    }}
  >
    <p className="card-title" style={{ textAlign: 'center', color: 'white' }}>
      Won Matches
    </p>
    <div
      style={{
        display: 'flex', // Enable flexbox for centering
        justifyContent: 'center', // Horizontally center content
        alignItems: 'center', // Vertically center content
        width: '50px', // Set the width of the circle
        height: '50px', // Set the height of the circle
        border: '2px solid red', // Add a red border
        borderRadius: '50%', // Make it a circle
        fontSize: '16px', // Adjust font size
        fontWeight: 'bold', // Make the text bold
        color: 'white', // Text color matches the border
        margin: '0 auto', // Center the circle within its parent
      }}
    >
      <span id="success_rate">{wonMatches}</span>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ScoreCard;

