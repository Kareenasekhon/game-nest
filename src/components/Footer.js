import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>GameNest is your ultimate gaming destination, offering endless fun through curated games and community.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@gamenest.com</p>
          <p>Phone: 9786543210</p>
          <p>Hours: 24/7 Support</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="privacy">Privacy Policy</a></li>
            <li><a href="terms">Terms of Service</a></li>
            <li><a href="cookies">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="bottom-footer">
        <p>&copy; 2024 GameNest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
