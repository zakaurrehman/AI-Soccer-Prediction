

//   return (
//     <div style={{ backgroundColor: '#2C3442', minHeight: '100vh' }}>
//       <Headerd />
//       <div className="content-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
//         <DayHeader dayHeaderState={dayHeaderState} handleClickDay={handleClickDay} selectedDate={selectedDate} />
//         <SubscriptionWarning />
//         <ScoreCard selectedDate={selectedDate}    betOfTheDayMatches={matches} /> 

//         <div className="table-container" style={{ width: "100%", marginTop: "20px", padding: "20px" }}>
//   {loading ? (
//     // Loader displayed outside the table
//     <div className="text-center py-5">
//       <div className="loader">{/* Add your loader animation here */}</div>
//     </div>
//   ) : (
//     <table className="table table-striped table-dark" style={{ textAlign: "center" }}>
//       <thead>
//         <tr>
//           <th>Date</th>
//           <th>Time</th>
//           <th>Home Team</th>
//           <th>Away Team</th>
//           <th>Status</th>
//           <th>Home Goals</th>
//           <th>Away Goals</th>
//           <th>Home Odds</th>
//           <th>Draw Odds</th>
//           <th>Away Odds</th>
//           <th>Over</th>
//           <th>Under</th>
//           <th>Prediction Choice</th>
//         </tr>
//       </thead>
//       <tbody>
//         {error ? (
//           <tr>
//             <td colSpan="13" className="text-center text-danger">
//               {error}
//             </td>
//           </tr>
//         ) : matches.length === 0 ? (
//           <tr>
//             <td colSpan="13" className="text-center" style={{ color: "white" }}>
//               No matches found for this date
//             </td>
//           </tr>
//         ) : (
//           matches.map((match) => (
//             <tr key={match.id}>
//               <td>{match.date}</td>
//               <td>{match.time}</td>
//               <td>{match.home_team}</td>
//               <td>{match.away_team}</td>
//               <td>{match.status}</td>
//               <td>{match.goals?.homeGoals || 0}</td>
//               <td>{match.goals?.awayGoals || 0}</td>
//               <td>{match.odds.match_winner.home}</td>
//               <td>{match.odds.match_winner.draw}</td>
//               <td>{match.odds.match_winner.away}</td>
//               <td>{match.odds.over_under.over || "N/A"}</td>
//               <td>{match.odds.over_under.under || "N/A"}</td>
//               <td>{match.prediction?.choice || "N/A"}</td>
//             </tr>
//           ))
//         )}
//       </tbody>
//     </table>
//   )}
// </div>


//       </div>
//       <Footerd />
//     </div>
//   );
// };

// export default Betoftheday;



import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Headerd from '../Components/Dashboard/Headerd';
import DayHeader from '../Components/Dashboard/DayHeader';
import SubscriptionWarning from '../Components/Dashboard/SubscriptionWarning';
import ScoreCard from '../Components/Dashboard/ScoreCard';
import Footerd from '../Components/Dashboard/Footerd';
import axios from 'axios';
import CONFIG from '../config';
import '../assets/css/loader.css';

const Betoftheday = () => {
  const [dayHeaderState, setDayHeaderState] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [isSubscribed, setIsSubscribed] = useState(
    localStorage.getItem('isSubscribed') === 'true'
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('username')
  );

  const navigate = useNavigate();

  const handleMatchClick = (matchId) => {
    // Define mobile width and height
    const width = 375; // Typical mobile screen width
    const height = 667; // Typical mobile screen height
  
    // Calculate center positioning
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
  
    // Open a new tab with the specified dimensions and centered position
    window.open(
      `/match-details/${matchId}`,
      "_blank",
      `width=${width},height=${height},top=${top},left=${left},resizable=no,scrollbars=yes`
    );
  };
  

  // Update subscription and login status from localStorage on mount
  useEffect(() => {
    const handleStorageChange = () => {
      setIsSubscribed(localStorage.getItem('isSubscribed') === 'true');
      setIsLoggedIn(!!localStorage.getItem('username'));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
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
        active: i === 0,
        id: date.getTime(),
      });
    }

    return dates;
  };
  const fetchMatches = async (dateString, attempt = 0) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(`${CONFIG.baseURL}/api/bet-of-the-day`, {
        date: dateString,
      });

      console.log('Response Data:', response.data);

      if (response.data.success && Array.isArray(response.data.data)) {
        const transformedMatches = response.data.data
        .map((match) => {
          const homeOdds = parseFloat(match.odds?.match_winner?.home) || Infinity;
          const drawOdds = parseFloat(match.odds?.match_winner?.draw) || Infinity;
          const awayOdds = parseFloat(match.odds?.match_winner?.away) || Infinity;
      
          let newPredictionChoice = match.prediction?.predictionChoice || 'N/A';
      
          // Update prediction.choice to the least odds option if it's "N/A"
          if (newPredictionChoice === 'N/A') {
            const minOdds = Math.min(homeOdds, drawOdds, awayOdds);
            if (minOdds === homeOdds) newPredictionChoice = 'home';
            else if (minOdds === drawOdds) newPredictionChoice = 'draw';
            else if (minOdds === awayOdds) newPredictionChoice = 'away';
          }
      
          return {
            id: match.id,
            date: match.date,
            time: match.time,
            home_team: match.homeTeam,
            away_team: match.awayTeam,
            status: match.status,
            winner: match.winner,
            odds: {
              match_winner: {
                home: match.odds?.match_winner?.home ?? 'N/A',
                draw: match.odds?.match_winner?.draw ?? 'N/A',
                away: match.odds?.match_winner?.away ?? 'N/A',
              },
              over_under: {
                total: parseFloat(match.odds?.over_under?.total) || Infinity,
                over: match.odds?.over_under?.over ?? 'N/A',
                under: match.odds?.over_under?.under ?? 'N/A',
              },
            },
            prediction: {
              choice: newPredictionChoice,
            },
            goals: {
              homeGoals: parseInt(match.goals?.homeGoals) || 0,
              awayGoals: parseInt(match.goals?.awayGoals) || 0,
            },
          };
        })
        .filter((match) => {
          const { choice } = match.prediction;
          const { homeGoals, awayGoals } = match.goals;
          const totalGoals = homeGoals + awayGoals;
          const overUnderTotal = parseFloat(match.odds.over_under.total);
      
          // Exclude pre-match games
          if (match.status === 'pre-match') return true;
      
          // Filter matches based on prediction.choice and goals
          if (choice === 'home' && homeGoals > awayGoals) return true;
          if (choice === 'away' && awayGoals > homeGoals) return true;
          if (choice === 'draw' && homeGoals === awayGoals) return true;
      
          // Include matches with "over" or "under" predictions
          if (choice === 'over' && totalGoals > overUnderTotal) return true;
          if (choice === 'under' && totalGoals < overUnderTotal) return true;
      
          return false; // Exclude matches that don't match the criteria
        });
      
      // Handle case when all matches have pre-match status
      if (transformedMatches.length === 0) {
        // Fetch data for the previous date
        const previousDate = getNextOrPreviousDate(selectedDate.date, -1); // Adjust -1 as per your logic
        await fetchMatches(previousDate);
      }
      
       // Only include finished matches
      

        if (transformedMatches.length > 0 || attempt >= 7) {
          // Stop if matches are found or if the max recursion depth is reached
          setMatches(transformedMatches);
        } else {
          // Recursively fetch for the previous day (for today) or upcoming days
          const nextDate = getNextOrPreviousDate(dateString, attempt < 0 ? 1 : -1);
          await fetchMatches(nextDate, attempt + (attempt < 0 ? -1 : 1));
        }
      } else {
        setError('No data found or invalid response format.');
        setMatches([]);
      }
    } catch (error) {
      console.error('Error fetching matches:', error);
      setError('Failed to fetch matches. Please try again.');
      setMatches([]);
    } finally {
      setLoading(false);
    }
  };

  const getNextOrPreviousDate = (dateString, offset) => {
    const [day, month, year] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + offset);
    return `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
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

  const handleBlurClick = () => {
    if (!isLoggedIn) {
      toast.warn("Please log in to view this content.", {
        position: "top-center",
        autoClose: 3000,
        onClose: () => navigate("/login"),
      });
    } else if (!isSubscribed) {
      toast.warn("Please subscribe to view this content.", {
        position: "top-center",
        autoClose: 3000,
        onClose: () => navigate("/Pricingp"),
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#2C3442', minHeight: '100vh' }}>
    <Headerd />
    <ToastContainer /> {/* Toast container for notifications */}
    <div className="content-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <DayHeader dayHeaderState={dayHeaderState} handleClickDay={handleClickDay} selectedDate={selectedDate} />
      <SubscriptionWarning />
      <ScoreCard selectedDate={selectedDate}  matches={matches} />
  
      <div className="table-container" style={{ width: '100%', marginTop: '20px', padding: '50px' }}>
        {loading ? (
          <div className="text-center py-5">
            <div className="loader">{/* Add your loader animation here */}</div>
          </div>
        ) : (
<div className="table-container">
  <table
    className="table table-striped table-dark"
    style={{
      textAlign: "center",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // 3D shadow effect
      borderCollapse: "separate", // Ensures shadow around individual cells
      borderSpacing: "0 8px", // Adds space between rows for better 3D visibility
      borderRadius: "12px", // Adds rounded corners
      overflow: "hidden", // Ensures border radius is visible
      background: "linear-gradient(145deg, #1a1a1a, #333333)", // Background gradient for a 3D effect
      transform: "perspective(500px)", // Adds perspective to enhance 3D effect
      padding: "20px, 0px",
    }}
  >
    <thead >
      <tr
        style={{
          boxShadow:
            "inset 2px 2px 4px rgba(0, 0, 0, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.1)", // Inner shadow effect
          background: "linear-gradient(145deg, #2b2b2b, #3b3b3b)", // Gradient for header cells
          transform: "translateZ(0)", // Ensures the header stands out in 3D
          
        }}
      >
        {/* Full columns for desktop */}
        <th className="desktop-column">Date</th>
        <th className="desktop-column">Match</th>
        {/* <th className="desktop-column">Away Team</th> */}
        <th className="desktop-column">Home Odds</th>
        <th className="desktop-column">Draw Odds</th>
        <th className="desktop-column">Away Odds</th>
        <th className="desktop-column">Over</th>
        <th className="desktop-column">Under</th>
        <th className="desktop-column">Prediction Choice</th>

        {/* Only visible on mobile */}
       
        <th className="mobile-column">Date</th>
        <th className="mobile-column">Match</th>
        <th className="mobile-column">Prediction</th>
      
        
      </tr>
    </thead>
    <tbody>
  {error ? (
    <tr>
      <td colSpan="12" className="text-center text-danger">
        {error}
      </td>
    </tr>
  ) : matches.length === 0 ? (
    <tr>
      <td colSpan="12" className="text-center" style={{ color: "white" }}>
        No matches found for this date
      </td>
    </tr>
  ) : (
    matches.map((match) => {
      const isPreMatch = match.status === "pre-match";

      return (
        <tr
          key={match.id}
          onClick={() => handleMatchClick(match.id)} // Pass match ID on click
          style={{
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Row shadow
            borderRadius: "8px", // Rounded corners for rows
            margin: "8px 0", // Space between rows
            backgroundColor: "#333", // Background for contrast
            transform: "translateZ(0)", // Adds depth to rows
          }}
        >
          {/* Full table content for desktop */}
          <td className="desktop-column"> {match.time} <br /> {match.status}</td>
          <td className="desktop-column">{match.home_team} {match.goals.homeGoals} : {match.goals.awayGoals} {match.away_team}</td>
          <td className="desktop-column" style={{
            padding: '12px',
            backgroundColor: '#444',
            filter: isPreMatch && !isSubscribed ? 'blur(5px)' : 'none',
            cursor: isPreMatch && !isSubscribed ? 'pointer' : 'default',
          }}
          onClick={!isSubscribed ? handleBlurClick : undefined}>{match.odds.match_winner.home}</td>
          <td className="desktop-column" style={{
            padding: '12px',
            backgroundColor: '#444',
            filter: isPreMatch && !isSubscribed ? 'blur(5px)' : 'none',
            cursor: isPreMatch && !isSubscribed ? 'pointer' : 'default',
          }}
          onClick={!isSubscribed ? handleBlurClick : undefined}>{match.odds.match_winner.draw}</td>
          <td className="desktop-column" style={{
            padding: '12px',
            backgroundColor: '#444',
            filter: isPreMatch && !isSubscribed ? 'blur(5px)' : 'none',
            cursor: isPreMatch && !isSubscribed ? 'pointer' : 'default',
          }}
          onClick={!isSubscribed ? handleBlurClick : undefined}>{match.odds.match_winner.away}</td>
          <td className="desktop-column" style={{
            padding: '12px',
            backgroundColor: '#444',
            filter: isPreMatch && !isSubscribed ? 'blur(5px)' : 'none',
            cursor: isPreMatch && !isSubscribed ? 'pointer' : 'default',
          }}
          onClick={!isSubscribed ? handleBlurClick : undefined}>{match.odds.over_under.over || "N/A"}</td>
          <td className="desktop-column" style={{
            padding: '12px',
            backgroundColor: '#444',
            filter: isPreMatch && !isSubscribed ? 'blur(5px)' : 'none',
            cursor: isPreMatch && !isSubscribed ? 'pointer' : 'default',
          }}
          onClick={!isSubscribed ? handleBlurClick : undefined}>{match.odds.over_under.under || "N/A"}</td>
          <td className="desktop-column"style={{
            padding: '12px',
            backgroundColor: '#444',
            filter: isPreMatch && !isSubscribed ? 'blur(5px)' : 'none',
            cursor: isPreMatch && !isSubscribed ? 'pointer' : 'default',
          }}
          onClick={!isSubscribed ? handleBlurClick : undefined} >{match.prediction?.choice || "N/A"}</td>
          {/* <td className="desktop-column">{match.goals.homeGoals} - {match.goals.awayGoals}</td> */}

          {/* Shrunk content for mobile */}
          <td className="mobile-column">{match.time} <br /> {match.status}</td>
          <td className="mobile-column" style={{
            padding: '1px',
            backgroundColor: '#444',
            textAlign: 'left',
            filter: isPreMatch && !isSubscribed ? 'blur(5px)' : 'none',
            cursor: isPreMatch && !isSubscribed ? 'pointer' : 'default',
          }}
          onClick={!isSubscribed ? handleBlurClick : undefined}><div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <span>{match.home_team}</span>
          <span>{match.goals.homeGoals}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <span>{match.away_team}</span>
          <span>{match.goals.awayGoals}</span>
        </div></td>
          <td className="mobile-column"  style={{
            padding: '1px',
            backgroundColor: '#444',
            filter: isPreMatch && !isSubscribed ? 'blur(5px)' : 'none',
            cursor: isPreMatch && !isSubscribed ? 'pointer' : 'default',
          }}
          onClick={!isSubscribed ? handleBlurClick : undefined}>{match.prediction?.choice || "N/A"}</td>
        </tr>
      );
    })
  )}
</tbody>

  </table>

  {/* Styles for responsiveness */}
  <style>
  {`
    /* Default: Show full table for desktop */
    .desktop-column {
      display: table-cell;
    }
    .mobile-column {
      display: none;
    }

    /* Mobile view: Hide desktop columns, show only necessary columns */
    @media (max-width: 768px) {
      .desktop-column {
        display: none;
      }
      .mobile-column {
        display: table-cell;
        text-align: left; /* Align content to the left for better readability */
      }
      .table-container {
        display: block; /* Ensure container is treated as a block element */
        width: 100%; /* Full width for container */
        overflow-x: auto; /* Enable horizontal scroll as fallback */
        -webkit-overflow-scrolling: touch; /* Smooth scrolling for mobile */
        padding-left: 0; /* Remove left padding for mobile */
        padding-right: 0; /* Remove right padding for mobile */
      }
      table {
        table-layout: auto; /* Flexible column widths */
        width: 100%; /* Ensure the table fits within the container */
        border-collapse: collapse; /* Reduce spacing between cells */
      }
      td, th {
        word-wrap: break-word; /* Allow content wrapping */
        white-space: normal; /* Wrap long text */
        padding: 8px 4px; /* Minimal padding for table cells */
        font-size: 14px; /* Adjust font size for readability */
        border: none; /* Remove borders from all cells */
      }
      th {
        background-color: #444; /* Dark background for header */
        color: white;
        text-align: center;
        border: none; /* Remove header borders */
      }
      td {
        vertical-align: middle; /* Align content vertically */
        background-color: #333; /* Add background color for separation */
      }
      /* Adjust team names and goals alignment */
      td.mobile-column:nth-child(2) div {
        display: flex;
        justify-content: space-between; /* Ensure space between team name and goals */
        padding: 4px 8px; /* Add slight padding for better readability */
      }
      td.mobile-column:nth-child(2) span {
        text-align: left; /* Align team names and goals */
      }
      /* Adjust prediction column */
      td.mobile-column:nth-child(3) {
        max-width: 100px; /* Limit prediction column width */
        text-align: center; /* Center-align predictions */
      }
    }
  `}
</style>
</div>


        )}
      </div>
    </div>
    <Footerd />
  </div>
  
  
  );
};

export default Betoftheday;