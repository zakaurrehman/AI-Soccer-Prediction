// import React from 'react';

// const MatchList = ({ matches = [], loading = false, error, onRetry }) => {
//   const renderMatchRow = (match, index) => (
//     <tr key={match.id || index} className="matchxd">
//       <td className="align-middle text-center td-data bod-group-1">
//         <p className="score-time mb-1">{match.date} {match.time}</p>
//         <div className={`badge badge-${match.status?.toLowerCase()}`} style={{ color: "white" }}>
//           {match.status}
//         </div>
//       </td>
//       <td className="align-middle text-center td-match bod-group-2">
//         <div>
//           <strong>{match.home_team}</strong> vs <strong>{match.away_team}</strong>
//         </div>
//         <div className="small text-muted">{match.country} - {match.league}</div>
//       </td>
//       <td className="align-middle text-center td-1 bod-group-3">{match.odds?.match_winner?.home || 'N/A'}</td>
//       <td className="align-middle text-center td-x bod-group-3">{match.odds?.match_winner?.draw || 'N/A'}</td>
//       <td className="align-middle text-center td-2 bod-group-3">{match.odds?.match_winner?.away || 'N/A'}</td>
//       <td className="align-middle text-center td-3 bod-group-4">{match.odds?.over_under?.total || 'N/A'}</td>
//       <td className="align-middle text-center td-4 bod-group-4">{match.odds?.over_under?.over || 'N/A'}</td>
//       <td className="align-middle text-center td-5 bod-group-4">{match.odds?.over_under?.under || 'N/A'}</td>

//       {/* Updated Prediction Columns */}
//       <td className="align-middle text-center td-8 bod-group-5">{match.prediction?.choice || 'N/A'}</td>
//     </tr>
//   );

//   if (loading) {
//     return <div className="text-center py-5" style={{ color: "white" }}>Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div className="text-center py-5" style={{ color: "white" }}>
//         <p className="text-danger">Error: {error}</p>
//         <button onClick={onRetry} className="btn btn-primary">Retry</button>
//       </div>
//     );
//   }

//   if (!matches.length || error) {
//     return (
//       <div className="text-center py-5" style={{ color: "white" }}>
//         <p>No matches found for this date</p>
//         <button onClick={onRetry} className="btn btn-primary">Retry</button>
//       </div>
//     );
//   }

//   return (
//     <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '20px', padding: '20px' }}>
//       {/* Left Form Section */}
//       <div
//         style={{
//           width: '300px',
//           padding: '20px',
//           marginLeft: '230px',
//           borderRadius: '10px',
//           color: 'white',
//           height: 'fit-content',
//         }}
//       >
//         <div style={{ marginBottom: '15px' }}>
//           <input
//             type="text"
//             id="search"
//             placeholder="Search"
//             style={{
//               width: '100%',
//               padding: '5px',
//               borderRadius: '5px',
//               border: '1px solid #ccc',
//             }}
//           />
//         </div>

//         <div style={{ marginBottom: '15px' }}>
//           <select
//             id="sort"
//             style={{
//               width: '100%',
//               padding: '5px',
//               borderRadius: '5px',
//               border: '1px solid #ccc',
//             }}
//           >
//             <option value="date">Date</option>
//             <option value="home">Home Team</option>
//             <option value="away">Away Team</option>
//             <option value="odds">Odds</option>
//           </select>
//         </div>

//         <div style={{ textAlign: 'center' }}>
//           <button
//             style={{
//               width: '100%',
//               padding: '10px',
//               borderRadius: '5px',
//               backgroundColor: '#1E90FF',
//               color: 'white',
//               border: 'none',
//             }}
//           >
//             Apply Filters
//           </button>
//         </div>
//       </div>

//       {/* Table Section */}
//       <div className="table-container" style={{ overflowX: 'auto', width: '930px', marginLeft: '5px' }}>
//         <table className="table table-dark">
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Match</th>
//               <th>Home</th>
//               <th>Draw</th>
//               <th>Away</th>
//               <th>Total</th>
//               <th>Over</th>
//               <th>Under</th>
//               {/* <th>Prediction Choice</th> */}
//             </tr>
//           </thead>
//           <tbody>
//             {matches.map(renderMatchRow)}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MatchList;
import React from 'react';

const MatchList = ({ matches = [], loading = false, error, onRetry }) => {
  const renderMatchRow = (match, index) => (
    <tr key={match.id || index} className="matchxd">
      <td className="align-middle text-center td-data bod-group-1">
        <p className="score-time mb-1">{match.date} {match.time}</p>
        <div className={`badge badge-${match.status?.toLowerCase()}`} style={{ color: "white" }}>
          {match.status}
        </div>
      </td>
      <td className="align-middle text-center td-match bod-group-2">
        <div>
          <strong>{match.home_team}</strong> vs <strong>{match.away_team}</strong>
        </div>
        <div className="small text-muted">{match.country} - {match.league}</div>
      </td>
      <td className="align-middle text-center td-1 bod-group-3">{match.odds?.match_winner?.home || 'N/A'}</td>
      <td className="align-middle text-center td-x bod-group-3">{match.odds?.match_winner?.draw || 'N/A'}</td>
      <td className="align-middle text-center td-2 bod-group-3">{match.odds?.match_winner?.away || 'N/A'}</td>
      <td className="align-middle text-center td-3 bod-group-4">{match.odds?.over_under?.total || 'N/A'}</td>
      <td className="align-middle text-center td-4 bod-group-4">{match.odds?.over_under?.over || 'N/A'}</td>
      <td className="align-middle text-center td-5 bod-group-4">{match.odds?.over_under?.under || 'N/A'}</td>

      {/* Updated Prediction Columns */}
      <td className="align-middle text-center td-8 bod-group-5">{match.prediction?.choice || 'N/A'}</td>
    </tr>
  );

  if (loading) {
    return <div className="text-center py-5" style={{ color: "white" }}>Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-5" style={{ color: "white" }}>
        <p className="text-danger">Error: {error}</p>
        <button onClick={onRetry} className="btn btn-primary">Retry</button>
      </div>
    );
  }

  if (!matches.length || error) {
    return (
      <div className="text-center py-5" style={{ color: "white" }}>
        <p>No matches found for this date</p>
        <button onClick={onRetry} className="btn btn-primary">Retry</button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-between px-6 py-6 gap-6">
      {/* Left Form Section */}
      <div
        className="w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 bg-gray-800 text-white p-4 rounded-md"
        style={{
          height: 'fit-content',
        }}
      >
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            id="search"
            placeholder="Search"
            className="w-full p-3 rounded-lg border border-gray-300 text-gray-700"
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <select
            id="sort"
            className="w-full p-3 rounded-lg border border-gray-300 text-gray-700"
          >
            <option value="date">Date</option>
            <option value="home">Home Team</option>
            <option value="away">Away Team</option>
            <option value="odds">Odds</option>
          </select>
        </div>

        <div className="text-center">
          <button
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold"
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-container w-full sm:w-2/3 lg:w-3/4 xl:w-3/4 overflow-x-auto">
        <table className="table table-dark w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Match</th>
              <th>Home</th>
              <th>Draw</th>
              <th>Away</th>
              <th>Total</th>
              <th>Over</th>
              <th>Under</th>
              {/* <th>Prediction Choice</th> */}
            </tr>
          </thead>
          <tbody>
            {matches.map(renderMatchRow)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchList;
