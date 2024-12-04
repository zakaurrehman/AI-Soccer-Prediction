import React from 'react';

import Header from '../Components/Header';
import Footerd from '../Components/Dashboard/Footerd';

const PrivacyPolicy = () => {
  return (
    <div>
    <Header/>
    <main className="main">
      <div id="starter-section" className="starter-section section">
        <div className="container" data-aos="fade-up">
          <h2>Privacy Policy</h2>
          <ol>
            <li>
              <p><strong>Introduction</strong><br />Welcome to AI Prognoza. We are committed to protecting your privacy. This Privacy Policy describes our practices regarding the collection, use, and disclosure of your information when you use our website, which employs SSL technology to ensure secure data transmission.</p>
            </li>
            <li>
              <p><strong>Information Collection</strong><br />We collect information you provide directly, such as when creating an account, subscribing to our newsletter, or interacting with our customer service. This may include personal information like your name, email address, phone number, and other details you choose to share with us.</p>
            </li>
            <li>
              <p><strong>Use of Information</strong><br />We use the information we collect to provide, maintain, and improve our services, communicate with you, monitor service usage, and address issues related to service, security, and customer support.</p>
            </li>
            <li>
              <p><strong>Information Sharing</strong><br />We do not share personal information with third parties except as necessary to provide our services or as required by law. We may share non-personal, aggregated data with our partners or for research purposes.</p>
            </li>
            <li>
              <p><strong>Cookies</strong><br />Our website uses cookies to enhance your experience. Cookies are small files stored on your device that help us improve our services and your user experience.</p>
            </li>
            <li>
              <p><strong>Data Security</strong><br />We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. We use SSL certificates to encrypt data transmitted between your device and our website, enhancing the security of your personal information.</p>
            </li>
            <li>
              <p><strong>Changes to this Privacy Policy</strong><br />We may periodically update our Privacy Policy. We will notify you of any changes by posting the updated Privacy Policy on this page.</p>
            </li>
            <li>
              <p><strong>Contact Us</strong><br />If you have any questions about this Privacy Policy, please contact us at <a rel="noopener" href="mailto:info@aiprognoza.com" style={{color:'red'}}>info@aiprognoza.com</a>.</p>
            </li>
          </ol>
        </div>
        <div className="container" data-aos="fade-up">
          {/* Additional content can go here if needed */}
        </div>
      </div>
    </main>
    <Footerd/>

    </div>
  );
};

export default PrivacyPolicy;
