// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import CONFIG from "../config";

// const MatchDetails = () => {
//   const { id } = useParams(); // Extract match ID from the URL
//   const [matchData, setMatchData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeSections, setActiveSections] = useState({
//     overview: true,
//     goals: true,
//     events: false,
//     odds: false,
//     lineups: false,
//   });

//   // Fetch match details from the backend
//   useEffect(() => {
//     const fetchMatchDetails = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await axios.post(`${CONFIG.baseURL}/api/match`, {
//           match_id: id,
//         });
//         setMatchData(response.data);
//       } catch (err) {
//         console.error("Error fetching match details:", err.message);
//         setError("Failed to fetch match details. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMatchDetails();
//   }, [id]);

//   if (loading) return <div>Loading match details...</div>;
//   if (error) return <div>{error}</div>;

//   const {
//     teams,
//     goals,
//     events,
//     odds,
//     stadium,
//     date,
//     time,
//     league,
//     stage,
//     lineups,
//   } = matchData;

//   // Toggle section visibility
//   const toggleSection = (section) => {
//     setActiveSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   // Styles for dark theme with 3D effects
//   const containerStyle = {
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "#2C3442",
//     color: "#ffffff",
//     padding: "20px",
//     minHeight: "100vh",
//   };

//   const headerStyle = {
//     textAlign: "center",
//     marginTop: "150px",
//     fontSize: "26px",
//     color: "white",
//     marginBottom: "20px",
//     textTransform: "uppercase",
//   };

//   const sectionStyle = {
//     backgroundColor: "#2C3034",
//     padding: "20px",
//     borderRadius: "10px",
//     marginBottom: "20px",
//     boxShadow: "0 8px 12px rgba(0, 0, 0, 0.3)", // 3D effect
//     cursor: "pointer",
//     transition: "transform 0.3s ease",
//   };

//   const activeSectionStyle = {
//     ...sectionStyle,
//     transform: "translateY(-5px)", // Lifted section for active look
//   };

//   const titleStyle = {
//     color: "#6b0204",
    
//     marginBottom: "10px",
//     fontSize: "20px",
//     fontWeight: "bold",
//     cursor: "pointer",
//   };

//   const tableStyle = {
//     width: "100%",
//     borderCollapse: "collapse",
//     marginTop: "10px",
//   };

//   const tableHeaderStyle = {
//     backgroundColor: "#444",
//     color: "#fff",
//     textAlign: "left",
//     padding: "10px",
//     border: "1px solid #555",
//   };

//   const tableCellStyle = {
//     padding: "10px",
//     borderBottom: "1px solid #444",
//     color: "#fff",
//   };

//   return (
//     <div style={containerStyle}>
//       <h1 style={headerStyle}>
//         {teams.home.name} <br /> vs  <br />{teams.away.name}
//       </h1>
//       <h3 style={{ textAlign: "center", color: "#D00102" }}> 
//       {goals.home_ft_goals} : {goals.away_ft_goals}
//       </h3 >
//       <p style={{ textAlign: "center" }}>
//         {date} at {time} <br /> In {stadium.name}, {stadium.city}
//       </p>

//       {/* Match Overview */}
//       <div
//         style={activeSections.overview ? activeSectionStyle : sectionStyle}
//         onClick={() => toggleSection("overview")}
//       >
//         <h2 style={titleStyle}>Match Overview</h2>
//         {activeSections.overview && (
//           <div>
//             <p>
//               <strong style={{  color: "#D00102" }}>League:</strong> {league.name}
//             </p>
//             <p>
//               <strong style={{  color: "#D00102" }}>Stage:</strong> {stage.name}
//             </p>
//             <p>
//               <strong style={{  color: "#D00102" }}>Status:</strong> {matchData.status}
//             </p>
//             <p>
//               <strong style={{  color: "#D00102" }}>Winner:</strong>{" "}
//               {matchData.winner === "home"
//                 ? teams.home.name
//                 : matchData.winner === "away"
//                 ? teams.away.name
//                 : "Draw"}
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Goals */}
//       <div
//         style={activeSections.goals ? activeSectionStyle : sectionStyle}
//         onClick={() => toggleSection("goals")}
//       >
//         <h2 style={titleStyle}>Goals</h2>
//         {activeSections.goals && (
//           <div>
//             <p>
//               <strong>{teams.home.name}:</strong> {goals.home_ft_goals}
//             </p>
//             <p>
//               <strong>{teams.away.name}:</strong> {goals.away_ft_goals}
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Events */}
//       <div
//         style={activeSections.events ? activeSectionStyle : sectionStyle}
//         onClick={() => toggleSection("events")}
//       >
//         <h2 style={titleStyle}>Match Events</h2>
//         {activeSections.events && (
//           <table style={tableStyle}>
//             <thead>
//               <tr>
//                 <th style={tableHeaderStyle}>Minute</th>
//                 <th style={tableHeaderStyle}>Team</th>
//                 <th style={tableHeaderStyle}>Event</th>
//                 <th style={tableHeaderStyle}>Player(s)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {events.map((event, index) => (
//                 <tr key={index}>
//                   <td style={tableCellStyle}>{event.event_minute}'</td>
//                   <td style={tableCellStyle}>
//                     {event.team === "home"
//                       ? teams.home.name
//                       : teams.away.name}
//                   </td>
//                   <td style={tableCellStyle}>{event.event_type}</td>
//                   <td style={tableCellStyle}>
//                     {event.player?.name}
//                     {event.assist_player
//                       ? ` (Assist: ${event.assist_player.name})`
//                       : ""}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {/* Odds */}
//       <div
//         style={activeSections.odds ? activeSectionStyle : sectionStyle}
//         onClick={() => toggleSection("odds")}
//       >
//         <h2 style={titleStyle}>Odds</h2>
//         {activeSections.odds && (
//           <div>
//             <p>
//               <strong>Home:</strong> {odds.match_winner.home}
//             </p>
//             <p>
//               <strong>Draw:</strong> {odds.match_winner.draw}
//             </p>
//             <p>
//               <strong>Away:</strong> {odds.match_winner.away}
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Lineups */}
//       <div
//         style={activeSections.lineups ? activeSectionStyle : sectionStyle}
//         onClick={() => toggleSection("lineups")}
//       >
//         <h2 style={titleStyle}>Lineups</h2>
//         {activeSections.lineups && (
//           <div>
//             <h3>{teams.home.name}</h3>
//             <ul>
//               {lineups.lineups.home.map((player, index) => (
//                 <li key={index}>
//                   {player.player.name} ({player.position})
//                 </li>
//               ))}
//             </ul>
//             <h3>{teams.away.name}</h3>
//             <ul>
//               {lineups.lineups.away.map((player, index) => (
//                 <li key={index}>
//                   {player.player.name} ({player.position})
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MatchDetails;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CONFIG from "../config";

const MatchDetails = () => {
  const { id } = useParams(); // Extract match ID from the URL
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  // Fetch match details from the backend
  useEffect(() => {
    const fetchMatchDetails = async () => {
      setLoading(true);
      setError(null);
      try {
         const response = await axios.post(`${CONFIG.baseURL}/api/match`,
          { match_id: id },
          { withCredentials: true } // Ensure cookies or auth headers are sent
      );
      setMatchData(response.data);
      } catch (err) {
        console.error("Error fetching match details:", err.message);
        setError("Failed to fetch match details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMatchDetails();
  }, [id]);

  if (loading) return <div>Loading match details...</div>;
  if (error) return <div>{error}</div>;

  const {
    teams,
    goals,
    events,
    odds,
    stadium,
    date,
    time,
    league,
    lineups,
    stage,
  } = matchData;

  // Styles for the page
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#1f1f2f",
      color: "#ffffff",
      padding: "20px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#2C3442",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)", // 3D effect
      width: "100%",
      maxWidth: "600px",
    },
    team: {
      textAlign: "center",
      flex: "1",
    },
    teamName: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#D00102",
    },
    score: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "#D00102",
    },
    nav: {
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "#2C3034",
      padding: "10px",
      borderRadius: "10px",
      marginBottom: "20px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)", // 3D effect
      width: "100%",
      maxWidth: "600px",
    },
    navItem: (isActive) => ({
      color: isActive ? "#D00102" : "#ffffff",
      fontWeight: isActive ? "bold" : "normal",
      cursor: "pointer",
      padding: "10px",
      textAlign: "center",
      borderBottom: isActive ? "2px solid #D00102" : "none",
    }),
    section: {
      backgroundColor: "#2C3034",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)", // 3D effect
      width: "100%",
      maxWidth: "600px",
      textAlign: "center",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "10px",
    },
    tableHeader: {
      backgroundColor: "#333",
      color: "#fff",
      textAlign: "left",
      padding: "8px",
      borderBottom: "1px solid #555",
    },
    tableCell: {
      padding: "8px",
      fontSize: "12px",
      borderBottom: "1px solid #444",
      color: "#fff",
      textAlign: "left",
    },
  };

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div style={styles.section}>
            <h3>Overview</h3>
            <p>
              <strong>League:</strong> {league.name}
            </p>
            <p>
              <strong>Date:</strong> {date} at {time}
            </p>
            <p>
              <strong>Stadium:</strong> {stadium.name}, {stadium.city}
            </p>
            <p>
              <strong>Winner:</strong> {matchData.winner === "home"
                ? teams.home.name
                : matchData.winner === "away"
                ? teams.away.name
                : "Draw"}
            </p>
          </div>
        );
      case "events":
        return (
          <div style={styles.section}>
            <h3>Events</h3>
            {events.length > 0 ? (
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.tableHeader}>Minute</th>
                    <th style={styles.tableHeader}>Team</th>
                    <th style={styles.tableHeader}>Event</th>
                    <th style={styles.tableHeader}>Players</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event, index) => (
                    <tr key={index}>
                      <td style={styles.tableCell}>{event.event_minute}'</td>
                      <td style={styles.tableCell}>{event.team === "home"
                      ? teams.home.name
                      : teams.away.name}</td>
                      <td style={styles.tableCell}>{event.event_type}</td>
                      <td style={styles.tableCell}>
                      {event.player?.name}
                          {event.assist_player
                           ? ` (Assist: ${event.assist_player.name})`
                    : ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No event data available.</p>
            )}
          </div>
        );
      case "odds":
        return (
          <div style={styles.section}>
            <h3>Odds</h3>
            <p>
              <strong>Home:</strong> {odds.match_winner.home}
            </p>
            <p>
              <strong>Draw:</strong> {odds.match_winner.draw}
            </p>
            <p>
              <strong>Away:</strong> {odds.match_winner.away}
            </p>
          </div>
        );
      case "lineups":
        return (
          <div style={styles.section}>
            <h3>Lineups</h3>
            <p>
              <strong>{teams.home.name}:</strong>
            </p>
            <ul>
              {lineups.lineups.home.map((player, index) => (
                <li key={index}>
                  {player.player.name} ({player.position})
                </li>
              ))}
            </ul>
            <p>
              <strong>{teams.away.name}:</strong>
            </p>
            <ul>
              {lineups.lineups.away.map((player, index) => (
                <li key={index}>
                  {player.player.name} ({player.position})
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.team}>
          <p style={styles.teamName}>{teams.home.name}</p>
        </div>
        <div style={styles.score}>
          {goals.home_ft_goals} : {goals.away_ft_goals}
        </div>
        <div style={styles.team}>
          <p style={styles.teamName}>{teams.away.name}</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={styles.nav}>
  <div
    style={styles.navItem(activeTab === "overview")}
    onClick={() => setActiveTab("overview")}
  >
    Overview
  </div>
  {matchData.events && matchData.events.length > 0 && (
    <div
      style={styles.navItem(activeTab === "events")}
      onClick={() => setActiveTab("events")}
    >
      Events
    </div>
  )}
  <div
    style={styles.navItem(activeTab === "odds")}
    onClick={() => setActiveTab("odds")}
  >
    Odds
  </div>
  <div
    style={styles.navItem(activeTab === "lineups")}
    onClick={() => setActiveTab("lineups")}
  >
    Lineups
  </div>
</div>
      {/* Content Section */}
      {renderContent()}
    </div>
  );
};

export default MatchDetails;
