import React from 'react';
import '../../styles/Footer.css'; // Footer-specific styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
        <p>&copy; {new Date().getFullYear()} Energy Club. All Rights Reserved.</p>
        </div>
        <div className="footer-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.linkedin.com/company/energy-club-a2a187339/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="" />
          </a>
          <a href="https://www.instagram.com/energyclub_psit/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
