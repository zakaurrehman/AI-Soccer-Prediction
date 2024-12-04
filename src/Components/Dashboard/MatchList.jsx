

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import '../../assets/css/loader.css';



const MatchList = ({ matches = [], loading = false, error, onRetry }) => {
  const [expandedCountries, setExpandedCountries] = useState([]);
  const [filteredMatches, setFilteredMatches] = useState(matches);
  const [isSubscribed, setIsSubscribed] = useState(
    localStorage.getItem("isSubscribed") === "true"
  );
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("username"));
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedBy, setSortedBy] = useState("date"); // Sorting criteria: date, country, league
  const navigate = useNavigate();

  useEffect(() => {
    setIsSubscribed(localStorage.getItem("isSubscribed") === "true");
    setIsLoggedIn(!!localStorage.getItem("username"));
    setFilteredMatches(matches);
  }, [matches]);

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
  const handleSearchChange = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchTerm(search);
    if (search) {
      const filtered = matches.filter((match) =>
        match.country.toLowerCase().includes(search) ||
        match.home_team.toLowerCase().includes(search) ||
        match.away_team.toLowerCase().includes(search)
      );
      setFilteredMatches(filtered);
    } else {
      setFilteredMatches(matches);
    }
  };

  const handleToggleCountry = (country) => {
    setExpandedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c !== country)
        : [...prev, country]
    );
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

  const capitalizeCountryName = (country) => {
    return country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
  };

  // Function to sort matches
  const sortMatches = (matches) => {
    if (sortedBy === "date") {
      return matches.sort((a, b) => {
        const dateA = new Date(`${a.date} ${a.time}`);
        const dateB = new Date(`${b.date} ${b.time}`);
        return dateA - dateB;
      });
    } else if (sortedBy === "country") {
      return matches.sort((a, b) => a.country.localeCompare(b.country));
    } else if (sortedBy === "league") {
      return matches.sort((a, b) => a.league.localeCompare(b.league));
    }
    return matches;
  };

  // Grouping matches by country and league
  const groupedMatches = sortMatches(filteredMatches).reduce((groups, match) => {
    const countryAndLeague =
      `${capitalizeCountryName(match.country)} - ${match.league}` || "Unknown Country - Unknown League";
    if (!groups[countryAndLeague]) {
      groups[countryAndLeague] = [];
    }
    groups[countryAndLeague].push(match);
    return groups;
  }, {});

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-5">
        <p className="text-danger">Error: {error}</p>
        <button onClick={onRetry} className="btn btn-primary" style={{backgroundColor:'red'}}>
          Retry
        </button>
      </div>
    );
  }

  if (!matches.length) {
    return (
      <div className="text-center py-5">
        <p>No matches found</p>
        <button onClick={onRetry} className="btn btn-primary">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="match-list-container  justify-center px-8 py-6">
    
    <div
  className="search-section"
  style={{
    display: 'flex',
    justifyContent: 'center', // Centers items horizontally
    alignItems: 'center', // Centers items vertically
  }}
>
  <div className="search-section w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 px-4 py-6">
    <input
      type="text"
      className="p-3 w-full rounded-lg border border-gray-300 text-black mb-4" // Changed text color to black
      placeholder="Search by Country or Team"
      value={searchTerm}
      onChange={handleSearchChange}
      style={{
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        color: "black", // Explicit inline style for text color
      }}
    />
  </div>

  <div className="sort-by-section w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 px-4 py-6">
    <select
      value={sortedBy}
      onChange={(e) => setSortedBy(e.target.value)}
      className="p-3 w-full rounded-lg border border-gray-300 text-black mb-4" // Changed text color to black
      style={{
        color: "black", // Explicit inline style for text color
      }}
    >
      <option value="country">Sort by Country</option>
      <option value="league">Sort by League</option>
    </select>
  </div>
</div>


      {/* Matches List Section */}
      <div className="matches-list w-full sm:w-full lg:w-3/4 xl:w-3/4 px-4 py-6 ml-[250px] sm:ml-0">
        {/* Matches content here */}


        <ToastContainer />
        {Object.keys(groupedMatches).map((countryAndLeague) => (
          <div key={countryAndLeague} className="country-section mb-3">
            <div
              className="country-header cursor-pointer flex justify-between items-center px-6 py-3 shadow-lg"
              onClick={() => handleToggleCountry(countryAndLeague)}
              style={{
                fontSize: "14px",
                background: "linear-gradient(145deg, #1a1a1a, #333333)",
                boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.1)",
                border: "2px solid #444",
                borderRadius: "12px", // Rounded corners
                fontFamily: "'Poppins', sans-serif", // Changed font
              }}
            >
              <span
                className="font-bold text-sm"
                style={{ marginLeft: '10px', color: "#f1f1f1" }} // Adjusted font size and color
              >
                {countryAndLeague}
              </span>
              <span
                className="arrow"
                style={{ marginLeft: '7px', color: "#f1f1f1" }} // Match the color of the arrow
              >
                {expandedCountries.includes(countryAndLeague) ? (
                  <FaChevronUp size={14} />
                ) : (
                  <FaChevronDown size={14} />
                )}
              </span>
            </div>



{expandedCountries.includes(countryAndLeague) && (
  <>
    {/* Desktop Table */}
    <div className="desktop-table">
      <table
        className="table table-striped table-dark mt-4 border-collapse w-full rounded-lg overflow-hidden shadow-lg"
        style={{
          boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.1)",
          background: "linear-gradient(145deg, #1a1a1a, #333333)",
        }}
      >
        <thead>
          <tr
            className="bg-gray-200 text-center"
            style={{
              boxShadow: "inset 2px 2px 4px rgba(0, 0, 0, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.1)",
            }}
          >
            <th className="p-2">Date & Time</th>
            <th className="p-2">Teams</th>
            <th className="p-2">Home Odds</th>
            <th className="p-2">Draw Odds</th>
            <th className="p-2">Away Odds</th>
            <th className="p-2">Total Odds</th>
            <th className="p-2">Over Odds</th>
            <th className="p-2">Under Odds</th>
            <th className="p-2">Prediction Type</th>
            <th className="p-2">Prediction Total</th>
            <th className="p-2">Prediction Choice</th>
          </tr>
        </thead>
        <tbody>
          {groupedMatches[countryAndLeague].map((match, index) => {
          const blurredStatuses = ["pre-match", "halftime", "live"];
          const isBlurredStatus = blurredStatuses.includes(match.status);
            const homeTeam = match.home_team || "N/A";
            const awayTeam = match.away_team || "N/A";
            const homeGoals = match.goals?.homeGoals || 0;
            const awayGoals = match.goals?.awayGoals || 0;

            return (
              <tr
                key={match.id}
                onClick={() => handleMatchClick(match.id)} // Pass match ID on click
              
                className="text-center"
                style={{
                  background: "linear-gradient(145deg, #2b2b2b, #3b3b3b)",
                  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5), -1px -1px 3px rgba(255, 255, 255, 0.1)",
                  cursor: "pointer"
                }}
              >
                <td className="p-2">
                  <div> {match.time} <br /> {match.status}</div>
                </td>
                <td className="p-2">
                  {homeTeam} {homeGoals} : {awayGoals} {awayTeam}
                </td>
                {["home", "draw", "away"].map((key, idx) => (
                  <td key={idx} className="p-2">
                    <div
                      className="border-2 border-gray-300 p-1 rounded-lg"
                      style={{
                        filter: isBlurredStatus  && !isSubscribed ? "blur(5px)" : "none",
                        userSelect: "none",
                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5), -1px -1px 3px rgba(255, 255, 255, 0.1)",
                        background: "linear-gradient(145deg, #1e1e1e, #2e2e2e)",
                      }}
                      onClick={!isSubscribed ? handleBlurClick : undefined}
                    >
                      {match.odds?.match_winner?.[key] || "N/A"}
                    </div>
                  </td>
                ))}
                {["total", "over", "under"].map((key, idx) => (
                  <td key={idx} className="p-2">
                    <div
                      className="border-2 border-gray-300 p-1 rounded-lg"
                      style={{
                        filter: isBlurredStatus  && !isSubscribed ? "blur(5px)" : "none",
                        userSelect: "none",
                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5), -1px -1px 3px rgba(255, 255, 255, 0.1)",
                        background: "linear-gradient(145deg, #1e1e1e, #2e2e2e)",
                      }}
                      onClick={!isSubscribed ? handleBlurClick : undefined}
                    >
                      {match.odds?.over_under?.[key] || "N/A"}
                    </div>
                  </td>
                ))}
                {["type", "total", "choice"].map((key, idx) => (
                  <td key={idx} className="p-2">
                    <div
                      className="border-2 border-gray-300 p-1 rounded-lg"
                      style={{
                        filter: isBlurredStatus  && !isSubscribed ? "blur(5px)" : "none",
                        userSelect: "none",
                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5), -1px -1px 3px rgba(255, 255, 255, 0.1)",
                        background: "linear-gradient(145deg, #1e1e1e, #2e2e2e)",
                      }}
                      onClick={!isSubscribed ? handleBlurClick : undefined}
                    >
                      {match.prediction?.[key] || "N/A"}
                    </div>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

{/* Mobile Table */}
<div className="mobile-table">
  <table
    className="table mt-4 border-collapse w-3/4 mx-auto rounded-lg overflow-hidden shadow-lg"
    style={{
      background: "linear-gradient(145deg, #1a1a1a, #333333)", // Consistent dark background
      margin: "0 auto", // Center the table horizontally
    }}
  >
    <thead>
      <tr
        className="text-white text-center"
        style={{
          background: "linear-gradient(145deg, #3b3b3b, #555555)", // Dark header
          color: "#fff", // White text for the header
        }}
      >
        <th className="p-3">Date</th>
        <th className="p-3">Teams</th>
        <th className="p-3">Prediction Type</th>
        <th className="p-3">Prediction Choice</th>
      </tr>
    </thead>
    <tbody>
      {groupedMatches[countryAndLeague].map((match, index) => {
        const homeTeam = match.home_team || "N/A";
        const awayTeam = match.away_team || "N/A";
        const homeGoals = match.goals?.homeGoals || 0;
        const awayGoals = match.goals?.awayGoals || 0;
        const blurredStatuses = ["pre-match", "halftime", "live"];
          const isBlurredStatus = blurredStatuses.includes(match.status);
        

        return (
          <tr
            key={match.id}
            onClick={() => handleMatchClick(match.id)}
            className="text-center"
            style={{
              background: "linear-gradient(145deg, #2b2b2b, #3b3b3b)", // Darker row background
              filter:isBlurredStatus  && !isSubscribed ? "blur(5px)" : "none",
            }}
          >
            <td className="p-3 text-white">{match.time} <br /> {match.status}</td>
            <td className="p-3 text-white">
              {homeTeam} <br /> {homeGoals}: {awayGoals} <br /> {awayTeam}
            </td>
            <td className="p-3 text-white">{match.prediction?.type || "N/A"}</td>
            <td className="p-3 text-white">{match.prediction?.choice || "N/A"}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

  </>
)}

{/* CSS for table responsiveness */}
<style>
  {`
    /* Default: Show Desktop Table */
    .desktop-table {
      display: block;
    }
    .mobile-table {
      display: none;
    }

    /* Mobile View: Show Mobile Table */
    @media (max-width: 768px) {
      .desktop-table {
        display: none;
      }
      .mobile-table {
        display: block;
      }
    }

    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      padding: 12px;
      font-size: 14px;
      text-align: center;
      word-wrap: break-word; /* Ensures long words break to the next line */
      white-space: normal; /* Allows text to wrap onto multiple lines */
      overflow: hidden; /* Prevents text overflow */
    }
    th {
      background: linear-gradient(145deg, #3b3b3b, #555555); /* Darker header */
      color: #fff; /* White text for header */
    }
    td {
      background: linear-gradient(145deg, #2b2b2b, #3b3b3b); /* Matching row background */
      color: #fff; /* Light text for rows */
    }

    /* Adjust font size dynamically based on screen width */
    @media (max-width: 480px) {
      th, td {
        font-size: 12px; /* Reduce font size for smaller screens */
      }
    }

    /* Further font adjustments for very narrow screens */
    @media (max-width: 360px) {
      th, td {
        font-size: 10px; /* Further reduce font size */
      }
    }

    /* Add ellipsis for extremely long text */
    td {
      text-overflow: ellipsis; /* Adds '...' for long text */
    }
  `}
</style>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchList;
