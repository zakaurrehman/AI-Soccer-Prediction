import React from 'react';
import Headerd from '../Components/Dashboard/Headerd';
import Subscription from '../Components/Dashboard/Subscription';
import Footerd from '../Components/Dashboard/Footerd';

// Corrected component definition with return statement on the same line
const Pricingp = () => {
  return (
    <div style={{ backgroundColor: '#12151B' }}>
      <Headerd />
      <Subscription />
      <Footerd />
    </div>
  );
};

// Correctly exporting the component
export default Pricingp;
