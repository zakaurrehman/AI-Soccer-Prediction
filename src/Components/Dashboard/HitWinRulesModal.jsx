
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify'; // Importing Toastify
// import CONFIG from '../../config';
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify

// const HitWinRulesModal = () => {
//     const [matches, setMatches] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [userSelections, setUserSelections] = useState({});
//     const [submittedMatchIds, setSubmittedMatchIds] = useState([]);
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [showSlips, setShowSlips] = useState(false);
//     const [userSlips, setUserSlips] = useState([]);
//     const [slipStatuses, setSlipStatuses] = useState([]);
//     const [statusMessage, setStatusMessage] = useState('');
//     const [correctSelectionsCount, setCorrectSelectionsCount] = useState(null);

//     const userId = localStorage.getItem('userId'); // Get the unique user ID from localStorage

//     // Generate a unique key for the current user to store in localStorage
//     const getUserLocalStorageKey = (key) => `${userId}_${key}`;

//     // Fetch match data from the API
//     const fetchMatches = async () => {
//         try {
//             setLoading(true);
//             setError(null);

//             const response = await axios.get(`${CONFIG.baseURL}/api/hitandwinmatches`);
//             if (!Array.isArray(response.data)) {
//                 throw new Error('Invalid API response format');
//             }

//             setMatches(response.data);
//             setIsSubmitted(false); // Reset submission state on new matches load
//         } catch (error) {
//             console.error('Error fetching matches:', error);
//             setError('Failed to load match data. Please try again later.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Load submitted match IDs and slips from localStorage
//     useEffect(() => {
//         const storedSubmittedIds = JSON.parse(localStorage.getItem(getUserLocalStorageKey('submittedMatchIds'))) || [];
//         setSubmittedMatchIds(storedSubmittedIds);

//         const storedSlips = JSON.parse(localStorage.getItem(getUserLocalStorageKey('userSlips'))) || [];
//         setUserSlips(storedSlips);
//     }, []);

//     // Handle odd selection
//     const handleSelection = (matchId, type) => {
//         setUserSelections((prevSelections) => ({
//             ...prevSelections,
//             [matchId]: type,
//         }));
//     };

//     // Check if an odd is selected
//     const isSelected = (matchId, type) => {
//         return userSelections[matchId] === type;
//     };

//     // Check if all current matches are new (not submitted before)
//     const areAllMatchesNew = () => {
//         return matches.every((match) => !submittedMatchIds.includes(match.id));
//     };

//     // Handle form submission
//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         // Check if 10 selections have been made
//         if (Object.keys(userSelections).length < 10) {
//             // Show toast notification if less than 10 predictions are selected
//             toast.warn('Please select 10 predictions before submitting your slip.', {
//                 position: 'top-center',
//                 autoClose: 5000,
//             });
//             return;  // Prevent form submission
//         }

//         const selections = Object.entries(userSelections).map(([matchId, choice]) => {
//             const match = matches.find((m) => m.id === parseInt(matchId));
//             return {
//                 match_name: `${match.homeTeam} vs ${match.awayTeam}`, // Match name
//                 match_id: parseInt(matchId),
//                 user_selection: choice,
//             };
//         });

//         if (selections.length === 0) {
//             alert('No selections made. Please choose at least one option.');
//             return;
//         }

//         try {
//             const response = await axios.post(`${CONFIG.baseURL}/api/save-selection`, {
//                 userID: userId,
//                 selections: selections,
//             });

//             if (response.status === 201) {
//                 alert('Your selections have been saved successfully!');
//                 setUserSelections({});
//                 setIsSubmitted(true);

//                 // Store submitted match IDs in localStorage
//                 const newSubmittedIds = [...submittedMatchIds, ...selections.map((s) => s.match_id)];
//                 setSubmittedMatchIds(newSubmittedIds);
//                 localStorage.setItem(getUserLocalStorageKey('submittedMatchIds'), JSON.stringify(newSubmittedIds));

//                 // Store user slips in localStorage
//                 const newUserSlips = [...userSlips, ...selections];
//                 setUserSlips(newUserSlips);
//                 localStorage.setItem(getUserLocalStorageKey('userSlips'), JSON.stringify(newUserSlips));
//             } else {
//                 alert('Failed to save your selections. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error saving selections:', error);
//             alert('Failed to save your selections. Please try again.');
//         }
//     };

//     // Fetch slip statuses and correct selection count from the backend
//     const fetchSlipStatuses = async () => {
//         try {
//             const response = await axios.post(`${CONFIG.baseURL}/api/status-selection`, {
//                 userID: userId,
//             });

//             if (response.status === 200) {
//                 setSlipStatuses(response.data.statuses || []);
//                 setStatusMessage(response.data.message || 'Status updated successfully!');
//                 setCorrectSelectionsCount(response.data.correctSelectionsCount || 0); // Correct selection count
//             } else {
//                 setStatusMessage('Failed to fetch statuses. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error fetching slip statuses:', error);
//             setStatusMessage('Failed to fetch slip statuses. Please try again.');
//         }
//     };

//     // Automatically update slip statuses every 5 minutes
//     useEffect(() => {
//         const interval = setInterval(() => {
//             fetchSlipStatuses();
//         }, 60000); // 5 minutes in milliseconds

//         return () => clearInterval(interval); // Cleanup interval on component unmount
//     }, []);

//     const renderTodayTable = () => (
//         <form onSubmit={handleSubmit}>
//             <div className="table-container" style={{ overflowX: 'auto' }}>
//                 <table className="table table-dark">
//                     <thead>
//                         <tr>
//                             <th>Date</th>
//                             <th>Match</th>
//                             <th>1</th>
//                             <th>X</th>
//                             <th>2</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {matches.map((match) => (
//                             <tr key={match.id}>
//                                 <td>{match.date}</td>
//                                 <td>
//                                     <strong>{match.homeTeam}</strong> vs <strong>{match.awayTeam}</strong>
//                                 </td>
//                                 {['home', 'draw', 'away'].map((type) => (
//                                     <td
//                                         key={type}
//                                         className={`odd-cell ${isSelected(match.id, type) ? 'selected' : ''}`}
//                                         onClick={() => handleSelection(match.id, type)}
//                                         style={{
//                                             cursor: 'pointer',
//                                             padding: '10px',
//                                             borderRadius: '5px',
//                                             backgroundColor: isSelected(match.id, type) ? '#b71c1c' : '#3C4555',
//                                             color: 'white',
//                                         }}
//                                     >
//                                         {match.odds.match_winner[type]}
//                                     </td>
//                                 ))}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <div className="nt-list-submit text-center">
//                 <button
//                     className="btn btn-danger"
//                     type="submit"
//                     disabled={isSubmitted || Object.keys(userSelections).length < 10}
//                 >
//                     {isSubmitted ? 'Submitted' : 'Submit'}
//                 </button>
//                 <p className="text-white" style={{ opacity: '0.5', fontSize: '11px' }}>
//                     By submitting your slip, you agree to our{' '}
//                     <a href="TermsOfUse" className="text-white">
//                         Terms and Conditions
//                     </a>
//                     .
//                 </p>
//             </div>
//         </form>
//     );

//     const renderSlipsTable = () => (
//         <div className="table-container" style={{ overflowX: 'auto' }}>
//             <table className="table table-dark">
//                 <thead>
//                     <tr>
//                         <th>Match Name</th>
//                         <th>User Selection</th>
//                         {/* <th>Status</th> */}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {userSlips.map((slip, index) => (
//                         <tr key={index}>
//                             <td>{slip.match_name}</td>
//                             <td>{slip.user_selection}</td>
//                             {/* <td>{slipStatuses[index]?.status || 'Pending'}</td> */}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <div className="text-center mt-3">
//                 <button style={{backgroundColor:'red',color:'white'}} className="btn btn-info" onClick={fetchSlipStatuses}>
//                     Check Status
//                 </button>
//             </div>
//             {statusMessage && <p className="text-center text-info mt-3">{statusMessage}</p>}
//             {correctSelectionsCount !== null && (
//                 <p className="text-center text-success mt-3">
//                     {correctSelectionsCount}/10 selections are correct.
//                 </p>
//             )}
//         </div>
//     );

//     useEffect(() => {
//         fetchMatches();
//     }, []);

//     return (
//         <div style={{ backgroundColor: '#2C3442', minHeight: '100vh', marginTop: '50px' }}>
//             <section className="nt-content mt-3" style={{ backgroundColor: '#2C3442', color: 'white' }}>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-3 d-flex flex-column align-items-start" style={{ paddingRight: '80px' }}>
//                             <div className="card mb-5" style={{ backgroundColor: '#3C4555', color: 'white', padding: '30px' }}>
//                                 <h5>Step 1</h5>
//                                 <p>Place your predictions for today’s matches.</p>
//                             </div>
//                             <div className="card mb-5" style={{ backgroundColor: '#3C4555', color: 'white', padding: '30px' }}>
//                                 <h5>Step 2</h5>
//                                 <p>Hit all 10 predictions to win amazing rewards.</p>
//                             </div>
//                         </div>

//                         <div className="col-lg-9">
//                             <ul className="nav nav-pills nav-justified mb-3 nt-hitandwin-tabs-nav">
//                                 <li className="nav-item">
//                                     <button
//                                         className={`nav-link ${!showSlips ? 'active' : ''}`}
//                                         type="button"
//                                         style={{ backgroundColor: !showSlips ? 'red' : 'transparent' }}
//                                         onClick={() => setShowSlips(false)}
//                                     >
//                                         Today
//                                     </button>
//                                 </li>
//                                 <li className="nav-item">
//                                     <button
//                                         className={`nav-link ${showSlips ? 'active' : ''}`}
//                                         type="button"
//                                         style={{ backgroundColor: showSlips ? 'red' : 'transparent' }}
//                                         onClick={() => setShowSlips(true)}
//                                     >
//                                         Slips
//                                     </button>
//                                 </li>
//                             </ul>
//                             <div className="tab-content">
//                                 <div className="tab-pane fade show active">
//                                     {loading ? (
//                                         <p className="text-center text-white">Loading matches...</p>
//                                     ) : error ? (
//                                         <p className="text-center text-danger">{error}</p>
//                                     ) : showSlips ? (
//                                         renderSlipsTable()
//                                     ) : (
//                                         renderTodayTable()
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <ToastContainer />  {/* Include ToastContainer for react-toastify */}
//         </div>
//     );
// };

// export default HitWinRulesModal;









import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // Importing Toastify
import CONFIG from '../../config';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify

const HitWinRulesModal = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userSelections, setUserSelections] = useState({});
    const [submittedMatchIds, setSubmittedMatchIds] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showSlips, setShowSlips] = useState(false);
    const [userSlips, setUserSlips] = useState([]);
    const [slipStatuses, setSlipStatuses] = useState([]);
    const [statusMessage, setStatusMessage] = useState('');
    const [correctSelectionsCount, setCorrectSelectionsCount] = useState(null);

    const navigate = useNavigate(); // For navigation
    const userId = localStorage.getItem('userId'); // Get the unique user ID from localStorage

    // Generate a unique key for the current user to store in localStorage
    const getUserLocalStorageKey = (key) => `${userId}_${key}`;

    // Fetch match data from the API
    const fetchMatches = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get(`${CONFIG.baseURL}/api/hitandwinmatches`);
            if (!Array.isArray(response.data)) {
                throw new Error('Invalid API response format');
            }

            setMatches(response.data);
            setIsSubmitted(false); // Reset submission state on new matches load
        } catch (error) {
            console.error('Error fetching matches:', error);
            setError('Failed to load match data. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Load submitted match IDs and slips from localStorage
    useEffect(() => {
        const storedSubmittedIds = JSON.parse(localStorage.getItem(getUserLocalStorageKey('submittedMatchIds'))) || [];
        setSubmittedMatchIds(storedSubmittedIds);

        const storedSlips = JSON.parse(localStorage.getItem(getUserLocalStorageKey('userSlips'))) || [];
        setUserSlips(storedSlips);
    }, []);

    // Handle odd selection
    const handleSelection = (matchId, type) => {
        setUserSelections((prevSelections) => ({
            ...prevSelections,
            [matchId]: type,
        }));
    };

    // Check if an odd is selected
    const isSelected = (matchId, type) => {
        return userSelections[matchId] === type;
    };

    // Check if all current matches are new (not submitted before)
    const areAllMatchesNew = () => {
        return matches.every((match) => !submittedMatchIds.includes(match.id));
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if the user is logged in
        if (!userId) {
            toast.warn('Please log in to submit your predictions.', {
                position: 'top-center',
                autoClose: 3000,
                onClose: () => navigate('/login'), // Redirect to login page
            });
            return; // Prevent form submission
        }

        // Check if 10 selections have been made
        if (Object.keys(userSelections).length < 10) {
            toast.warn('Please select 10 predictions before submitting your slip.', {
                position: 'top-center',
                autoClose: 5000,
            });
            return; // Prevent form submission
        }

        const selections = Object.entries(userSelections).map(([matchId, choice]) => {
            const match = matches.find((m) => m.id === parseInt(matchId));
            return {
                match_name: `${match.homeTeam} vs ${match.awayTeam}`, // Match name
                match_id: parseInt(matchId),
                user_selection: choice,
            };
        });

        if (selections.length === 0) {
            alert('No selections made. Please choose at least one option.');
            return;
        }

        try {
            const response = await axios.post(`${CONFIG.baseURL}/api/save-selection`, {
                userID: userId,
                selections: selections,
            });

            if (response.status === 201) {
                toast.success('Your selections have been saved successfully!', {
                    position: 'top-center',
                    autoClose: 3000,
                });
                setUserSelections({});
                setIsSubmitted(true);

                // Store submitted match IDs in localStorage
                const newSubmittedIds = [...submittedMatchIds, ...selections.map((s) => s.match_id)];
                setSubmittedMatchIds(newSubmittedIds);
                localStorage.setItem(getUserLocalStorageKey('submittedMatchIds'), JSON.stringify(newSubmittedIds));

                // Store user slips in localStorage
                const newUserSlips = [...userSlips, ...selections];
                setUserSlips(newUserSlips);
                localStorage.setItem(getUserLocalStorageKey('userSlips'), JSON.stringify(newUserSlips));
            } else {
                toast.error('Failed to save your selections. Please try again.', {
                    position: 'top-center',
                    autoClose: 3000,
                });
            }
        } catch (error) {
            console.error('Error saving selections:', error);
            toast.error('Failed to save your selections. Please try again.', {
                position: 'top-center',
                autoClose: 3000,
            });
        }
    };

    // Fetch slip statuses and correct selection count from the backend
    const fetchSlipStatuses = async () => {
        try {
            const response = await axios.post(`${CONFIG.baseURL}/api/status-selection`, {
                userID: userId,
            });

            if (response.status === 200) {
                setSlipStatuses(response.data.statuses || []);
                setStatusMessage(response.data.message || 'Status updated successfully!');
                setCorrectSelectionsCount(response.data.correctSelectionsCount || 0); // Correct selection count
            } else {
                setStatusMessage('Failed to fetch statuses. Please try again.');
            }
        } catch (error) {
            console.error('Error fetching slip statuses:', error);
            setStatusMessage('Failed to fetch slip statuses. Please try again.');
        }
    };

    // Automatically update slip statuses every 5 minutes
    useEffect(() => {
        const interval = setInterval(() => {
            fetchSlipStatuses();
        }, 60000); // 5 minutes in milliseconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const renderTodayTable = () => (
        <form onSubmit={handleSubmit}>
            <div className="table-container" style={{ overflowX: 'auto' }}>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Match</th>
                            <th>1</th>
                            <th>X</th>
                            <th>2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matches.map((match) => (
                            <tr key={match.id}>
                                <td>{match.date}</td>
                                <td>
                                    <strong>{match.homeTeam}</strong> vs <strong>{match.awayTeam}</strong>
                                </td>
                                {['home', 'draw', 'away'].map((type) => (
                                    <td
                                        key={type}
                                        className={`odd-cell ${isSelected(match.id, type) ? 'selected' : ''}`}
                                        onClick={() => handleSelection(match.id, type)}
                                        style={{
                                            cursor: 'pointer',
                                            padding: '10px',
                                            borderRadius: '5px',
                                            backgroundColor: isSelected(match.id, type) ? '#b71c1c' : '#3C4555',
                                            color: 'white',
                                        }}
                                    >
                                        {match.odds.match_winner[type]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="nt-list-submit text-center">
                <button
                    className="btn btn-danger"
                    type="submit"
                    disabled={isSubmitted || Object.keys(userSelections).length < 10}
                >
                    {isSubmitted ? 'Submitted' : 'Submit'}
                </button>
                <p className="text-white" style={{ opacity: '0.5', fontSize: '11px' }}>
                    By submitting your slip, you agree to our{' '}
                    <a href="TermsOfUse" className="text-white">
                        Terms and Conditions
                    </a>
                    .
                </p>
            </div>
        </form>
    );

    const renderSlipsTable = () => (
        <div className="table-container" style={{ overflowX: 'auto' }}>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Match Name</th>
                        <th>User Selection</th>
                    </tr>
                </thead>
                <tbody>
                    {userSlips.map((slip, index) => (
                        <tr key={index}>
                            <td>{slip.match_name}</td>
                            <td>{slip.user_selection}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-center mt-3">
                <button
                    style={{ backgroundColor: 'red', color: 'white' }}
                    className="btn btn-info"
                    onClick={fetchSlipStatuses}
                >
                    Check Status
                </button>
            </div>
            {statusMessage && <p className="text-center text-info mt-3">{statusMessage}</p>}
            {correctSelectionsCount !== null && (
                <p className="text-center text-success mt-3">
                    {correctSelectionsCount}/10 selections are correct.
                </p>
            )}
        </div>
    );

    useEffect(() => {
        fetchMatches();
    }, []);

    return (
        <div style={{ backgroundColor: '#2C3442', minHeight: '100vh', marginTop: '50px' }}>
            <section className="nt-content mt-3" style={{ backgroundColor: '#2C3442', color: 'white' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 d-flex flex-column align-items-start" style={{ paddingRight: '80px' }}>
                            <div className="card mb-5" style={{ backgroundColor: '#3C4555', color: 'white', padding: '30px' }}>
                                <h5>Step 1</h5>
                                <p>Place your predictions for today’s matches.</p>
                            </div>
                            <div className="card mb-5" style={{ backgroundColor: '#3C4555', color: 'white', padding: '30px' }}>
                                <h5>Step 2</h5>
                                <p>Hit all 10 predictions to win amazing rewards.</p>
                            </div>
                        </div>

                        <div className="col-lg-9">
                            <ul className="nav nav-pills nav-justified mb-3 nt-hitandwin-tabs-nav">
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${!showSlips ? 'active' : ''}`}
                                        type="button"
                                        style={{ backgroundColor: !showSlips ? 'red' : 'transparent' }}
                                        onClick={() => setShowSlips(false)}
                                    >
                                        Today
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${showSlips ? 'active' : ''}`}
                                        type="button"
                                        style={{ backgroundColor: showSlips ? 'red' : 'transparent' }}
                                        onClick={() => setShowSlips(true)}
                                    >
                                        Slips
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active">
                                    {loading ? (
                                        <p className="text-center text-white">Loading matches...</p>
                                    ) : error ? (
                                        <p className="text-center text-danger">{error}</p>
                                    ) : showSlips ? (
                                        renderSlipsTable()
                                    ) : (
                                        renderTodayTable()
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />  {/* Include ToastContainer for react-toastify */}
        </div>
    );
};

export default HitWinRulesModal;
