import React from 'react';

import Footerd from '../Components/Dashboard/Footerd';
import Header from '../Components/Header';

const TermsOfUse = () => {
  return (
    <div>
        <Header/>
    <main className="main">
      <div id="starter-section" className="starter-section section">
        <div className="container" data-aos="fade-up">
          <h2>Terms of Use</h2>
          <ol>
            <li>
              <p>
                <strong>Introduction</strong><br />
                By accessing and using our website, <a href="http://www.aiprognoza.com" target="_new" rel="noopener noreferrer" style={{color:'red'}}>www.aiprognoza.com</a>, you agree to comply with the following terms of use, which, together with our privacy policy, govern the relationship between AI Prognoza and you regarding this website. Our website uses SSL certificates to enhance the security of your data.
              </p>
            </li>
            <li>
              <p>
                <strong>Intellectual Property</strong><br />
                The content, layout, design, data, databases, and graphics on this website are protected by intellectual property laws. Unless explicitly permitted in writing, you may not copy, distribute, display, or perform any content, design, or layout of the website, nor engage in any other activity concerning any content, design, or layout of the website.
              </p>
            </li>
            <li>
              <p>
                <strong>Your Use of the Site</strong><br />
                You agree to use this site only for lawful purposes and in a manner that does not infringe upon, restrict, or prevent anyone else’s use and enjoyment of the website.
              </p>
            </li>
            <li>
              <p>
                <strong>Warranties and Liability</strong><br />
                The website and its content are provided "as is." We make no warranties of any kind, either express or implied, including but not limited to warranties for a particular purpose.
              </p>
            </li>
            <li>
              <p>
                <strong>Changes to Terms</strong><br />
                These terms may be modified at any time at our discretion. If we update these terms, we will post the revised terms on the website.
              </p>
            </li>
            <li>
              <p>
                <strong>Contact Us</strong><br />
                For any questions or concerns regarding these terms, please contact us at <a href="mailto:admin@aiprognoza.com" style={{color:'red'}}>info@aiprognoza.com</a>.
              </p>
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

export default TermsOfUse;
