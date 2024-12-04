import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.png'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/main.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const menuRef = useRef(null); // Create a reference for the menu container
  const iconRef = useRef(null); // Create a reference for the arrow icon

  const isLoggedIn = !!localStorage.getItem('username'); // Replace 'username' with the correct key if needed

  // Close menu if clicking outside the menu container or on the icon
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) && 
        iconRef.current && !iconRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const headerStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '9999',
    width: '100%',
    boxShadow: '0 4px 2px -2px gray',
    paddingTop: '20px',
  };

  const bodyStyle = {
    paddingTop: '40px',
  };

  const getNavLinkStyle = (link) => ({
    color: currentPath === link ? 'red' : 'white',
    textDecoration: 'none',
  });

  // Toggle menu when clicking on the arrow icon or the hamburger icon
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div style={bodyStyle}>
      <header id="header" className="header d-flex align-items-center sticky-top" style={headerStyle}>
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center me-auto">
            <img src={logo} alt="Logo" style={{ width: '150px' }} />
          </a>

          <div 
            ref={iconRef}  // Attach the reference to the arrow icon
            className={`mobile-nav-toggle d-lg-none bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`} 
            onClick={toggleMenu}  // Toggling the menu on arrow or hamburger icon click
          ></div>

          <nav  id="navmenu" className="navmenu d-none d-lg-block">
            <ul>
              <li><a href="/" style={getNavLinkStyle('/')}>HOME</a></li>
              <li><a href="/Betoftheday" style={getNavLinkStyle('/Betoftheday')}>BET OF THE DAY</a></li>
              <li><a href="/Allmatches" style={getNavLinkStyle('/Allmatches')}>CHECK FOOTBALL PREDICTIONS</a></li>
              <li><a href="/Tutriol" style={getNavLinkStyle('/Tutriol')}>TUTORIAL</a></li>
              <li><a href="/Blog" style={getNavLinkStyle('/Blog')}>FOOTBALL NEWS</a></li>
              {!isLoggedIn && (
                <div className="d-flex">
                     <a 
                  href="/Login" 
                  className="btn btn-login me-2"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #d00102 0, #6b0204 100%)',
                    padding: '.5rem 1rem',
                    borderRadius: '0.963rem',
                    color: '#fefefe',
                    border: '.125rem solid #d00102',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'black'} 
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'linear-gradient(90deg, #d00102 0, #6b0204 100%)'}
                >
                  LOGIN
                </a>
                  <a 
                  href="/Register" 
                  className="btn btn-register"
                  style={{
                    backgroundColor: '#3a3f47', // Gray color
                    color: '#ffffff',
                    borderRadius: '50px',
                    border: 'none',
                    padding: '8px 16px',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#d00102'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#3a3f47'}
                >
                  REGISTER
                </a>
                </div>
              )}
            </ul>
          </nav>

          <div style={{marginTop:'20px'}}
            ref={menuRef} // Attach the reference to this div
            className={`mobile-menu-container d-lg-none ${isMenuOpen ? 'd-block' : 'd-none'}`}
          >
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
              <ul>
                <li><a href="/" style={getNavLinkStyle('/')}>Home</a></li>
                <li><a href="/Betoftheday" style={getNavLinkStyle('/Betoftheday')}>BET OF THE DAY</a></li>
                <li><a href="/Allmatches" style={getNavLinkStyle('/Allmatches')}>CHECK FOOTBALL PREDICTIONS</a></li>
                <li><a href="/Tutriol" style={getNavLinkStyle('/Tutriol')}>TUTORIAL</a></li>
                <li><a href="/Blog" style={getNavLinkStyle('/Blog')}>FOOTBALL NEWS</a></li>
                {!isLoggedIn && (
                  <>
                    <li><a href="/Login" style={getNavLinkStyle('/Login')}>LOGIN</a></li>
                    <li><a href="/Register" style={getNavLinkStyle('/Register')}>REGISTER</a></li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
