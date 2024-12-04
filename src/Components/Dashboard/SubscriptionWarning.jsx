import React, { useState } from 'react';


import '../../assets/public/css/app.min.css'; // Ensure this path matches your project structure
import '../../assets/public/css/custom.css'; // Ensure this path matches your project structure
// Import the image correctly from the assets folder
import lightbulbImage from '../../assets/public/img/icon/lightbulb.png';




const SubscriptionWarning = () => {
  // State to handle the visibility of the warning
  const [isVisible, setIsVisible] = useState(true);

  // Function to close the warning
  const closeNotification = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // If the warning is closed, return nothing
  }

  return (
    <div className="container"  >
      <div
        id="subscription-warning"
        className="warning-box"
        style={{
          position: 'relative',
          backgroundColor: '#ffe8b3',
          borderRadius: '5px',
        }}
      >
        <button
          className="close-btn"
          onClick={closeNotification}
          style={{
            position: 'absolute',
            top: '0px',
            right: '3px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
          }}
        >
          ×
        </button>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '5px',
            marginRight: '5px',
          }}
        >
          {/* Use the imported image here */}
          <img
            src={lightbulbImage}
            alt="Lightbulb"
            style={{
              width: '28px',
              height: '28px',
              marginRight: '15px',
            }}
          />
          <p
            style={{
              margin: '0',
              fontSize: '14px',
              lineHeight: '1.5',
              color: '#333',
            }}
          >
            Tips are locked without a subscription, but{' '}
            <a
              href="/Pricingp"
              style={{
                color: 'inherit',
                fontWeight: '500',
                borderBottom: '1px solid rgba(51, 51, 51, 0.2)',
                textDecoration: 'none',
              }}
            >
              you can subscribe
            </a>{' '}
            when you are ready. Meanwhile, enjoy free tips for top national
            leagues!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionWarning;
