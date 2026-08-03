import React from 'react';
import './Footer.css';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-map-container">
        <iframe
          title="My Barbers Oxford Location Map"
          className="footer-map"
          src="https://maps.google.com/maps?q=169%20Cowley%20Rd,%20Oxford%20OX4%201UT&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
      <div className="container footer-grid">
        <div className="footer-col">
          <div style={{ marginBottom: '1.5rem', transform: 'scale(1.2)', transformOrigin: 'left' }}>
            <Logo />
          </div>
          <p className="footer-text">
            Premium grooming and a welcoming atmosphere in the heart of the Cowley Road community.
          </p>
        </div>
        
        <div className="footer-col">
          <h3 className="footer-title">Open Hours</h3>
          <ul className="footer-list">
            <li><span>Monday - Saturday:</span> 9:00 AM - 8:00 PM</li>
            <li><span>Sunday:</span> 9:00 AM - 7:00 PM</li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-list">
            <li>169 Cowley Rd, Oxford OX4 1UT, UK</li>
            <li><a href="tel:+441865682808">+44 1865 682808</a></li>
            <li className="walk-in-notice">Walk-ins only. No appointment needed.</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © {new Date().getFullYear()} mybarbersoxford.co.uk. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
