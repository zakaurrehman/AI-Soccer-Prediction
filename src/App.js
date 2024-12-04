

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsOfUse from './Pages/TermsOfUse';
import ContactUs from './Pages/ContactUs';
import Blog from './Pages/Blog';
import Login from './Pages/Login';
import Register from './Pages/Register';
import SuccessPage from './Pages/successpage';

import Betoftheday from './Pages/Betoftheday';
import Tutriol from './Pages/Tutriol';
import Allmatches from './Pages/Allmatches';
// import HitWin from './Pages/HitWin';
import Blog1 from './Pages/Blog1';
import Blog2 from './Pages/Blog2';
import Blog3 from './Pages/Blog3';
import Blog4 from './Pages/Blog4';
import Pricingp from './Pages/Pricingp';
import MyAccount from './Pages/MyAccount';
import MatchDetails from './Pages/Match-details';




// import Contact from './Pages/Contact'; // Example additional page


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsOfUse" element={<TermsOfUse />} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Betoftheday" element={<Betoftheday/>} />
          <Route path="/Tutriol" element={<Tutriol/>} />
          <Route path="/Allmatches" element={<Allmatches/>} />
          {/* <Route path="/HitWin" element={<HitWin/>} /> */}
          <Route path="/Blog1" element={<Blog1/>} />
          <Route path="/Blog2" element={<Blog2/>} />
          <Route path="/Blog3" element={<Blog3/>} />
          <Route path="/Blog4" element={<Blog4/>} />
          <Route path="/Pricingp" element={<Pricingp/>} />
          <Route path="/MyAccount" element={<MyAccount/>} />
          <Route path="/subscription-success" element={<SuccessPage/>} />
          <Route path="/match-details/:id" element={<MatchDetails/>} />
          
         
          
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
