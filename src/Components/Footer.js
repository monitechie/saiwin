import React from 'react';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>A brief description about your company or organization.</p>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <address>
              Email: smonicse@gmail.com<br />
              Phone: +123456789<br />
              Address: Dindigul
            </address>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <p>&copy; 2024 SAIWIN. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
