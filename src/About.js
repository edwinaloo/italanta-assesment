import React from 'react';
import './About.css'; // Make sure to create a corresponding CSS file

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
      </header>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Team</h2>
        <p>
          Meet our dedicated team of professionals who work tirelessly to achieve our mission.
        </p>
      </div>

      {/* Add more content sections as needed */}
    </div>
  );
};

export default About;
