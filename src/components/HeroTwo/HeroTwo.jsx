import React from 'react';
import '../../styles/HeroTwo.css';

const HeroTwo = ({ backgroundImage, title, description }) => {
  return (
    <div
      className="hero-2"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed', // Optional parallax effect
      }}
    >
      <div className="hero-2-overlay"></div> {/* Moved overlay to a separate div */}
      <div className="hero-2-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HeroTwo;
