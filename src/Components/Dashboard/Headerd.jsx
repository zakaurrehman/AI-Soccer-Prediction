

// import React, { useState, useEffect, useRef } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import logoImage from '../../assets/img/logo.png';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import '../../assets/css/main.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import CONFIG from '../../config';

// const Headerd = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const location = useLocation();
//   const currentPath = location.pathname;
//   const menuRef = useRef(null); // Create a reference for the menu container
//   const iconRef = useRef(null); // Create a reference for the arrow icon

//   const isLoggedIn = !!localStorage.getItem('username'); // Replace 'username' with the correct key if needed

//   // Close menu if clicking outside the menu container or on the icon
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         menuRef.current && !menuRef.current.contains(event.target) && 
//         iconRef.current && !iconRef.current.contains(event.target)
//       ) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

//   const handleSubscriptionClick = async () => {
//     const username = localStorage.getItem('username');
//     if (!username) {
//       toast.warn('Please log in to access the subscription page.', {
//         position: 'top-center',
//         autoClose: 3000,
//         onClose: () => navigate('/login'),
//       });
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${CONFIG.baseURL}/api/create-subscription`,
//         {
//           userID: localStorage.getItem('userId'),
//           priceId: 'price_1QM8QdH4JsYIDHEl2gGcKVty',
//         //   successUrl: 'http://localhost:3000/successpage',
//         //   cancelUrl: 'http://localhost:3000/cancel',
//         },
//         { withCredentials: true }
//       );

//       if (response.data && response.data.url) {
//         window.location.href = response.data.url;
//       } else {
//         toast.error('Failed to start subscription. Check the console for details.');
//       }
//     } catch (error) {
//       toast.error('Failed to start subscription. Please try again.');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('username');
//     localStorage.removeItem('isSubscribed');
//     localStorage.removeItem('userId');
//     toast.success('You have been logged out.', { autoClose: 3000 });
//     navigate('/login');
//   };

//   const getNavLinkStyle = (link) => ({
//     color: currentPath === link ? 'red' : 'white',
//     textDecoration: 'none',
//     border: 'none',
//   });

//   const headerStyle = {
//     position: 'fixed',
//     top: '0',
//     left: '0',
//     right: '0',
//     zIndex: '9999',
//     width: '100%',
//     height: '120px',
//     boxShadow: '0 4px 2px -2px gray',
//     paddingTop: '20px',
//   };

//   const bodyStyle = {
//     paddingTop: '120px',
//   };

//   const username = localStorage.getItem('username');

//   return (
//     <div style={bodyStyle}>
//       <header id="header" className="header d-flex align-items-center sticky-top" style={headerStyle}>
//         <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
//           <a href="/" className="logo d-flex align-items-center me-auto">
//             <img src={logoImage} alt="Logo" style={{ width: '150px' }} />
//           </a>

//           {/* Mobile Menu Toggle */}
//           <div
//             className={`mobile-nav-toggle d-lg-none bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}
//             onClick={toggleMobileMenu}
//           ></div>

//           {/* Desktop Navbar */}
//           <nav id="navmenu" className="navmenu d-none d-lg-block">
//             <ul>
//               <li><a href="/" style={getNavLinkStyle('/')}>HOME</a></li>
//               <li><a href="/Betoftheday" style={getNavLinkStyle('/Betoftheday')}>BET OF THE DAY</a></li>
//               <li><a href="/Allmatches" style={getNavLinkStyle('/Allmatches')}>CHECK PREDICTIONS</a></li>
//               <li><a href="/HitWin" style={getNavLinkStyle('/HitWin')}>HIT&WIN</a></li>
//               <li><a href="/Tutriol" style={getNavLinkStyle('/Tutriol')}>TUTORIAL</a></li>
//               <li><a href="/Blog" style={getNavLinkStyle('/Blog')}>FOOTBALL NEWS</a></li>
//               <li>
//                 <button
//                   onClick={handleSubscriptionClick}
//                   style={{ backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}
//                 >
//                   SUBSCRIPTION
//                 </button>
//               </li>
//               {username && (
//                 <li>
//                   <div onClick={toggleDropdown} style={{ cursor: 'pointer', color: 'white' }}>
//                     <i className="bi bi-person-circle" style={{ marginRight: '5px', fontSize: '20px' }}></i>
//                     {isDropdownOpen && (
//                       <div
//                         style={{
//                           position: 'absolute',
//                           top: '40px',
//                           right: '0',
//                           backgroundColor: 'rgba(0, 0, 0, 0.8)',
//                           padding: '10px',
//                           borderRadius: '5px',
//                         }}
//                       >
//                         <button
//                           onClick={handleLogout}
//                           style={{
//                             backgroundColor: 'transparent',
//                             border: 'none',
//                             color: 'white',
//                             cursor: 'pointer',
//                           }}
//                         >
//                           Logout
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </li>
//               )}
//             </ul>
//           </nav>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <nav className="mobile-menu d-lg-none" style={{backgroundColor:'black',marginRight:'900px',marginTop:'500px',width:'800px'}}>
//               <ul style={{width:'600px'}}>
//                 <li><a href="/" style={getNavLinkStyle('/')}>HOME</a></li>
//                 <li><a href="/Betoftheday" style={getNavLinkStyle('/Betoftheday')}>BET OF THE DAY</a></li>
//                 <li><a href="/Allmatches" style={getNavLinkStyle('/Allmatches')}>CHECK PREDICTIONS</a></li>
//                 <li><a href="/HitWin" style={getNavLinkStyle('/HitWin')}>HIT&WIN</a></li>
//                 <li><a href="/Tutriol" style={getNavLinkStyle('/Tutriol')}>TUTORIAL</a></li>
//                 <li><a href="/Blog" style={getNavLinkStyle('/Blog')}>FOOTBALL NEWS</a></li>
//                 <li>
//                   <button
//                     onClick={handleSubscriptionClick}
//                     style={{ backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}
//                   >
//                     SUBSCRIPTION
//                   </button>
//                 </li>
//                 {username && (
//                   <li>
//                     <button
//                       onClick={handleLogout}
//                       style={{
//                         backgroundColor: 'transparent',
//                         border: 'none',
//                         color: 'white',
//                         cursor: 'pointer',
//                       }}
//                     >
//                       Logout
//                     </button>
//                   </li>
//                 )}
//               </ul>
//             </nav>
//           )}
//         </div>
//       </header>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Headerd;


import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logoImage from '../../assets/img/logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../assets/css/main.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CONFIG from '../../config';

const Headerd = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const menuRef = useRef(null); // Reference for the mobile menu
  const toggleRef = useRef(null); // Reference for the toggle button

  const username = localStorage.getItem('username');

  // Close the menu if clicking outside the menu or toggle button
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSubscriptionClick = async () => {
        const username = localStorage.getItem('username');
        if (!username) {
          toast.warn('Please log in to access the subscription page.', {
            position: 'top-center',
            autoClose: 3000,
            onClose: () => navigate('/login'),
          });
          return;
        }
    
        try {
          const response = await axios.post(
            `${CONFIG.baseURL}/api/create-subscription`,
            {
              userID: localStorage.getItem('userId'),
              priceId: 'price_1QM8QdH4JsYIDHEl2gGcKVty',
              successUrl: 'http://localhost:3000/successpage',
              cancelUrl: 'http://localhost:3000/cancel',
            },
            { withCredentials: true }
          );
    
          if (response.data && response.data.url) {
            window.location.href = response.data.url;
          } else {
            toast.error('Failed to start subscription. Check the console for details.');
          }
        } catch (error) {
          toast.error('Failed to start subscription. Please try again.');
        }
      };

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('isSubscribed');
    localStorage.removeItem('userId');
    toast.success('You have been logged out.', { autoClose: 3000 });
    navigate('/login');
  };

  const getNavLinkStyle = (link) => ({
    color: currentPath === link ? 'red' : 'white',
    textDecoration: 'none',
    border: 'none',
  });

  return (
    <div style={{ paddingTop: '120px' }}>
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          zIndex: '9999',
          width: '100%',
          height: '120px',
          boxShadow: '0 4px 2px -2px gray',
          paddingTop: '20px',
        }}
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center me-auto">
            <img src={logoImage} alt="Logo" style={{ width: '150px' }} />
          </a>

          {/* Mobile Menu Toggle */}
          <div
            ref={toggleRef}
            className={`mobile-nav-toggle d-lg-none bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileMenu}
          ></div>

          {/* Desktop Navbar */}
          <nav id="navmenu" className="navmenu d-none d-lg-block">
            <ul>
              <li><a href="/" style={getNavLinkStyle('/')}>HOME</a></li>
              <li><a href="/Betoftheday" style={getNavLinkStyle('/Betoftheday')}>BET OF THE DAY</a></li>
              <li><a href="/Allmatches" style={getNavLinkStyle('/Allmatches')}>CHECK PREDICTIONS</a></li>
              {/* <li><a href="/HitWin" style={getNavLinkStyle('/HitWin')}>HIT&WIN</a></li> */}
              <li><a href="/Tutriol" style={getNavLinkStyle('/Tutriol')}>TUTORIAL</a></li>
              <li><a href="/Blog" style={getNavLinkStyle('/Blog')}>FOOTBALL NEWS</a></li>
              <li > 
                <button
                  onClick={handleSubscriptionClick}
                  style={{ backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}
                >
                  SUBSCRIPTION
                </button>
              </li>
              {username && (
                <li>
                  <div onClick={toggleDropdown} style={{ cursor: 'pointer', color: 'white' }}>
                    <i className="bi bi-person-circle" style={{ marginRight: '5px', fontSize: '20px' }}></i>
                    {isDropdownOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '40px',
                          right: '0',
                          backgroundColor: 'rgba(0, 0, 0, 0.8)',
                          padding: '10px',
                          borderRadius: '5px',
                        }}
                      >
                        <button
                          onClick={handleLogout}
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                          }}
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              )}
            </ul>
          </nav>

          {/* Mobile Menu */}
         {/* Mobile Menu */}
         {isMenuOpen && (
  <nav
    ref={menuRef}
    className="mobile-menu d-lg-none"
    style={{
      backgroundColor: 'black',
      position: 'absolute',
      top: '60px',
      right: '0',
      width: '100%',
      padding: '15px 20px', // Adjusted padding for better layout
      borderRadius: '10px',
    }}
  >
    <ul
      style={{
        listStyle: 'none',
        padding: '0', // Remove default padding
        margin: '0', // Remove default margin
        textAlign: 'left', // Align text to the left
      }}
    >
      <li style={{ padding: '10px 0' }}> {/* Add padding for spacing */}
        <a href="/" style={getNavLinkStyle('/')}>HOME</a>
      </li>
      <li style={{ padding: '10px 0' }}>
        <a href="/Betoftheday" style={getNavLinkStyle('/Betoftheday')}>BET OF THE DAY</a>
      </li>
      <li style={{ padding: '10px 0' }}>
        <a href="/Allmatches" style={getNavLinkStyle('/Allmatches')}>CHECK PREDICTIONS</a>
      </li>
      {/* <li style={{ padding: '10px 0' }}>
        <a href="/HitWin" style={getNavLinkStyle('/HitWin')}>HIT&WIN</a>
      </li> */}
      <li style={{ padding: '10px 0' }}>
        <a href="/Tutriol" style={getNavLinkStyle('/Tutriol')}>TUTORIAL</a>
      </li>
      <li style={{ padding: '10px 0' }}>
        <a href="/Blog" style={getNavLinkStyle('/Blog')}>FOOTBALL NEWS</a>
      </li>
      <li style={{ padding: '10px 0' }}>
        <button onClick={handleSubscriptionClick}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          fontSize: '18px',
          padding: '10px 0', // Ensure spacing is consistent
          marginLeft:'22px'
        }}>SUBSCRIPTION</button>
      </li>
      {username && (
        <li style={{ padding: '10px 0' }}>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </li>
      )}
    </ul>
  </nav>
)}


        </div>
      </header>
      <ToastContainer />
    </div>
  );
};

export default Headerd;











// onClick={handleSubscriptionClick}
//         style={{
//           backgroundColor: 'transparent',
//           border: 'none',
//           color: 'white',
//           cursor: 'pointer',
//           fontSize: '18px',
//           padding: '10px 0', // Ensure spacing is consistent
//         }}