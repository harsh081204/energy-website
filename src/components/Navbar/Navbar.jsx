import React, { useState } from 'react';
import '../../styles/Navbar.css'; // Updated path to the CSS file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./images/logo.jpg" alt="Energy Club Logo" />
        EnergyClub
      </div>
      <div className={`nav-links-container ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>Home</li>
          {/* <li>Announcements</li> */}
          <li>About</li>
          <li>Gallery</li>
          {/* New Link for Mobile View */}
          <li className="upcoming-events-link">Upcoming Events</li>
        </ul>
      </div>
      <button className="register-button">
        <img src="./svg/ring.svg" alt="Register" />
        <p>Register Now For Upcoming Events</p>
      </button>
      <div className="burger-menu" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  );
};

export default Navbar;
