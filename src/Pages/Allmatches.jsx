import React, { useState, useEffect } from 'react';
import Headerd from '../Components/Dashboard/Headerd';
import DayHeader from '../Components/Dashboard/DayHeader';
import SubscriptionWarning from '../Components/Dashboard/SubscriptionWarning';
import ScoreCard from '../Components/Dashboard/ScoreCard';
import MatchList from '../Components/Dashboard/MatchList';
import Footerd from '../Components/Dashboard/Footerd';
import axios from 'axios';
import CONFIG from '../config';


const Allmatches = () => {
  const [dayHeaderState, setDayHeaderState] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  // Function to get an array of dates with today in the middle (3 days before and 3 days after)
  const getDateRange = () => {
    const today = new Date();
    const dates = [];

    for (let i = -3; i <= 3; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();

      dates.push({
        date: `${day}-${month}-${year}`,
        active: i === 0, // Mark today's date as active
        id: date.getTime(),
      });
    }

    return dates;
  };

  // Fetch matches from the API
  const fetchMatches = async (dateString) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(`${CONFIG.baseURL}/api/matches`, {
        date: dateString,
      });

      const transformedMatches = response.data.flatMap((country) =>
        country.matches.map((match) => {
          const odds = match.odds?.match_winner || {};
          const homeOdd = parseFloat(odds.home) || Infinity;
          const drawOdd = parseFloat(odds.draw) || Infinity;
          const awayOdd = parseFloat(odds.away) || Infinity;

          let predictionType = match.prediction?.predictionType || 'N/A';
          let predictionTotal = match.prediction?.predictionTotal || 'N/A';
          let predictionChoice = match.prediction?.predictionChoice || 'N/A';

          // Handle cases where prediction.choice is 'N/A'
          if (predictionChoice === 'N/A') {
            predictionType = 'match-winner'; // Set type to 'match-winner'
            const leastOdd = Math.min(homeOdd, drawOdd, awayOdd);
            predictionChoice =
              leastOdd === homeOdd ? 'home' : leastOdd === drawOdd ? 'draw' : 'away';
          }

          // Handle cases where prediction.choice is 'home', 'draw', or 'away'
          if (['home', 'draw', 'away'].includes(predictionChoice)) {
            const leastOdd = Math.min(homeOdd, drawOdd, awayOdd);
            predictionChoice =
              leastOdd === homeOdd ? 'home' : leastOdd === drawOdd ? 'draw' : 'away';
          }

          return {
            id: match.id,
            date: match.date,
            time: match.time,
            home_team: match.homeTeam,
            away_team: match.awayTeam,
            status: match.status,
            winner: match.winner,
            goals: match.goals, // Ensure goals are included here
            country: country.country,
            league: country.league,
            odds: {
              match_winner: {
                home: odds.home || 'N/A',
                draw: odds.draw || 'N/A',
                away: odds.away || 'N/A',
              },
              over_under: {
                total: match.odds?.over_under?.total || 'N/A',
                over: match.odds?.over_under?.over || 'N/A',
                under: match.odds?.over_under?.under || 'N/A',
              },
            },
            prediction: {
              type: predictionType,
              total: predictionTotal,
              choice: predictionChoice,
            },
          };
        })
      );

      setMatches(transformedMatches);
    } catch (error) {
      console.error('Error fetching matches:', error);
      setError('Failed to fetch matches. Please try again.');
      setMatches([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const dates = getDateRange();
    setDayHeaderState(dates);
    setSelectedDate(dates.find((d) => d.active));

    if (dates.length > 0) {
      fetchMatches(dates.find((d) => d.active)?.date);
    }
  }, []);

  const handleClickDay = async (day) => {
    setSelectedDate(day);
    await fetchMatches(day.date);
  };

  return (
    <div style={{ backgroundColor: '#2C3442', minHeight: '100vh' }}>
      <Headerd />
      <div className="content-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <DayHeader dayHeaderState={dayHeaderState} handleClickDay={handleClickDay} selectedDate={selectedDate} />
        <SubscriptionWarning />
        <ScoreCard selectedDate={selectedDate}  matches={matches} />
        
        <MatchList matches={matches} loading={loading} error={error} onRetry={() => selectedDate && fetchMatches(selectedDate.date)} />
        <Footerd />
      </div>
    </div>
  );
};

export default Allmatches;