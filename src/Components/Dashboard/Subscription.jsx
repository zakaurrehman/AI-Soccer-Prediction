// import React, { useState } from 'react';
// import '../../assets/public/css/app.min.css';
// import '../../assets/public/css/custom.css';
// import '../../assets/public/css/pricing.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Subscription = () => {
//   const [selectedPlan, setSelectedPlan] = useState(null);

//   // Handle plan selection
//   const selectOption = (months) => {
//     setSelectedPlan(months);
//     alert(`You selected the ${months} month(s) plan.`);
//   };

//   // // Handle Stripe payment
//   // const payWithStripe = () => {
//   //   alert('Redirecting to Stripe...');
//   //   // Add Stripe integration here
//   // };

//   const payWithStripe = async () => {
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
//           successUrl: `${CONFIG.baseURL}/successpage`,
//           cancelUrl: `${CONFIG.baseURL}/cancel`,
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

//   return (
//     <div style={{ backgroundColor: '#12151B', minHeight: '100vh', paddingBottom: '50px' }}>
//       {/* Mobile Header */}
//       <div className="header-space"></div>
//       <section className="mobile-header d-block d-lg-none" style={{ backgroundColor: '#12151B' }}>
//         <div className="container h-100">
//           <div className="row align-items-center h-100">
//             <div className="col-2">
//               <a className="go-back" href="#">
//                 <span className="icon-box icon-left"></span>
//               </a>
//             </div>
//             <div className="col-8">
//               <h2 className="text-center text-white">Subscription</h2>
//             </div>
//             <div className="col-2"></div>
//           </div>
//         </div>
//       </section>

//       <section className="nt-content mt-3" style={{backgroundColor: '#12151B'}}>
//         <div className="subscription-container text-center py-5" style={{backgroundColor: '#12151B'}}>
//           <h1 className="text-white mb-4">Choose Your Plan</h1>
//           <div className="subscription-options d-flex justify-content-center flex-wrap" style={{backgroundColor: '#12151B'}}>
//             {[{ months: 1, price: '$3.99', savings: '-' },
//               { months: 3, price: '$8.99', savings: 'Save $3' },
//               { months: 6, price: '$16.99', savings: 'Save $7' }].map((plan, index) => (
//                 <div
//                   key={index}
//                   className="subscription-option"
//                   onClick={() => selectOption(plan.months)}
//                   style={{
//                     width: '250px',
//                     padding: '20px',
//                     margin: '15px',
//                     borderRadius: '10px',
//                     background: '#CC0102',
//                     color: '#fff',
//                     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//                     cursor: 'pointer',
//                     transition: 'transform 0.3s ease, background-color 0.3s ease',
                    
                    
                    
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = '#D9232D';
//                     e.currentTarget.style.transform = 'scale(1.05)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = '#CC0102';
//                     e.currentTarget.style.transform = 'scale(1)';
//                   }}
//                 >
//                   <h3 style={{ color: '#FFFFFF' }}>{plan.months} Month{plan.months > 1 ? 's' : ''}</h3>
//                   <p style={{ fontSize: '1.5rem', color: '#FFFFFF', fontWeight: 'bold' }}>{plan.price}</p>
//                   <p style={{ fontSize: '0.9rem', color: '#FFFFFF' }}>{plan.savings}</p>
//                 </div>
//               ))}
//           </div>

//           {/* Subscription Details */}
//           <table className="subscription-details  mt-4 text-white" >
//             <thead >
//               <tr >
//                 <th style={{backgroundColor: '#12151B'}}>Feature</th>
//                 <th style={{backgroundColor: '#12151B'}}>1 Month</th>
//                 <th style={{backgroundColor: '#12151B'}}>3 Months</th>
//                 <th style={{backgroundColor: '#12151B'}}>6 Months</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Full Access</td>
//                 <td>✔️</td>
//                 <td>✔️</td>
//                 <td>✔️</td>
//               </tr>
//               <tr>
//                 <td>Win Rate</td>
//                 <td>75%</td>
//                 <td>75%</td>
//                 <td>75%</td>
//               </tr>
//               <tr>
//                 <td>Save</td>
//                 <td>-</td>
//                 <td>$3</td>
//                 <td>$7</td>
//               </tr>
//               <tr>
//                 <td>Technology</td>
//                 <td>NT 3.9</td>
//                 <td>NT 4.0</td>
//                 <td>NT 4.0</td>
//               </tr>
//             </tbody>
//           </table>

//           {/* Payment Button */}
//           <div className="mt-4">
//             <button
//               className="btn btn-primary"
//               onClick={payWithStripe}
//               style={{
//                 backgroundColor: 'red',
//                 border: 'none',
//                 padding: '15px 30px',
//                 borderRadius: '5px',
//                 color: '#fff',
//                 fontSize: '1.2rem',
//                 cursor: 'pointer',
//                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//                 transition: 'background 0.3s ease',
//               }}
//               onMouseOver={(e) => (e.target.style.backgroundColor = '#C70039')}
//               onMouseOut={(e) => (e.target.style.backgroundColor = 'red')}
//             >
//               Pay with Stripe
//             </button>
//           </div>

//           {/* Disclaimer */}
//           <div className="disclaimer mt-3">
//             <p className="text-white">3-Day Money-Back Guarantee</p>
//             <p className="text-white">Powered by Stripe</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Subscription;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/public/css/app.min.css';
import '../../assets/public/css/custom.css';
import '../../assets/public/css/pricing.css';
import CONFIG from '../../config'; // Ensure this file contains your baseURL and other necessary settings

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in by verifying localStorage entries
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');

    if (!username || !userId) {
      // If not logged in, redirect to login page
      toast.warn('Please log in to access the subscription page.', {
        position: 'top-center',
        autoClose: 3000,
        onClose: () => navigate('/login'),
      });
    }
  }, [navigate]);

  // Handle plan selection
  const selectOption = (months) => {
    setSelectedPlan(months);
    alert(`You selected the ${months} month(s) plan.`);
  };

  // Handle Stripe payment
  const payWithStripe = async () => {
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');

    if (!username || !userId) {
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
          userID: userId,
          priceId: 'price_1QM8QdH4JsYIDHEl2gGcKVty',
          successUrl: `${CONFIG.baseURL}/successpage`,
          cancelUrl: `${CONFIG.baseURL}/cancel`,
        },
        { withCredentials: true }
      );

      if (response.data && response.data.url) {
        window.location.href = response.data.url; // Redirect to Stripe Checkout
      } else {
        console.error('Stripe Response Error:', response.data);
        toast.error('Failed to start subscription. Check the console for details.');
      }
    } catch (error) {
      console.error('Stripe API Error:', error.response || error.message);
      toast.error('Failed to start subscription. Please try again.');
    }
  };

  return (
    <div style={{ backgroundColor: '#12151B', minHeight: '100vh', paddingBottom: '50px' }}>
      {/* Mobile Header */}
      <div className="header-space"></div>
      <section className="mobile-header d-block d-lg-none" style={{ backgroundColor: '#12151B' }}>
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-2">
              <a className="go-back" href="#">
                <span className="icon-box icon-left"></span>
              </a>
            </div>
            <div className="col-8">
              <h2 className="text-center text-white">Subscription</h2>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </section>

      <section className="nt-content mt-3" style={{ backgroundColor: '#12151B' }}>
        <div className="subscription-container text-center py-5" style={{ backgroundColor: '#12151B' }}>
          <h1 className="text-white mb-4">Choose Your Plan</h1>
          <div className="subscription-options d-flex justify-content-center flex-wrap" style={{ backgroundColor: '#12151B' }}>
            {[{ months: 1, price: '$3.99', savings: '-' },
            { months: 3, price: '$8.99', savings: 'Save $3' },
            { months: 6, price: '$16.99', savings: 'Save $7' }].map((plan, index) => (
              <div
                key={index}
                className="subscription-option"
                onClick={() => selectOption(plan.months)}
                style={{
                  width: '250px',
                  padding: '20px',
                  margin: '15px',
                  borderRadius: '10px',
                  background: '#CC0102',
                  color: '#fff',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#D9232D';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#CC0102';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <h3 style={{ color: '#FFFFFF' }}>{plan.months} Month{plan.months > 1 ? 's' : ''}</h3>
                <p style={{ fontSize: '1.5rem', color: '#FFFFFF', fontWeight: 'bold' }}>{plan.price}</p>
                <p style={{ fontSize: '0.9rem', color: '#FFFFFF' }}>{plan.savings}</p>
              </div>
            ))}
          </div>

          {/* Subscription Details */}
          <table className="subscription-details mt-4 text-white">
            <thead>
              <tr>
                <th style={{ backgroundColor: '#12151B' }}>Feature</th>
                <th style={{ backgroundColor: '#12151B' }}>1 Month</th>
                <th style={{ backgroundColor: '#12151B' }}>3 Months</th>
                <th style={{ backgroundColor: '#12151B' }}>6 Months</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Full Access</td>
                <td>✔️</td>
                <td>✔️</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>Win Rate</td>
                <td>75%</td>
                <td>75%</td>
                <td>75%</td>
              </tr>
              <tr>
                <td>Save</td>
                <td>-</td>
                <td>$3</td>
                <td>$7</td>
              </tr>
              <tr>
                <td>Technology</td>
                <td>NT 3.9</td>
                <td>NT 4.0</td>
                <td>NT 4.0</td>
              </tr>
            </tbody>
          </table>

          {/* Payment Button */}
          <div className="mt-4">
            <button
              className="btn btn-primary"
              onClick={payWithStripe}
              style={{
                backgroundColor: 'red',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '5px',
                color: '#fff',
                fontSize: '1.2rem',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'background 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#C70039')}
              onMouseOut={(e) => (e.target.style.backgroundColor = 'red')}
            >
              Pay with Stripe
            </button>
          </div>

          {/* Disclaimer */}
          <div className="disclaimer mt-3">
            <p className="text-white">3-Day Money-Back Guarantee</p>
            <p className="text-white">Powered by Stripe</p>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Subscription;
