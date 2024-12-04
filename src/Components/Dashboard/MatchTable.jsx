import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import team logo images (adjust paths as needed)
import BotosaniLogo from '../../assets/public/img/logos/2581.webp';
import UClujLogo from '../../assets/public/img/logos/2599.webp';
// ... other team logos

function MatchCard({ time, team1, team2, odds1, oddsX, odds2 }) {
  return (
    <div className="row match-card">
      <div className="col-2 text-center">{time}</div>
      <div className="col-3 text-center">
        <img src={team1.logo} alt={team1.name} className="team-logo" />
        <p>{team1.name}</p>
      </div>
      <div className="col-1 text-center">{odds1}</div>
      <div className="col-1 text-center">{oddsX}</div>
      <div className="col-1 text-center">{odds2}</div>
      <div className="col-3 text-center">
        <img src={team2.logo} alt={team2.name} className="team-logo" />
        <p>{team2.name}</p>
      </div>
    </div>
  );
}

function MatchTable() {
  const matches = [
    {
      time: '21:00',
      team1: { name: 'Botosani', logo: BotosaniLogo },
      team2: { name: 'U Cluj', logo: UClujLogo },
      odds1: '3.3',
      oddsX: '3.1',
      odds2: '2.25',
    },
    // ... other matches
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 bg-danger text-white">Today</div>
        <div className="col-6 bg-danger text-white">Slips</div>
      </div>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>MATCHES</th>
            <th>1</th>
            <th>X</th>
            <th>2</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, index) => (
            <tr key={index}>
              <MatchCard {...match} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MatchTable;