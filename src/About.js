import React from 'react';
import './About.css'; // Make sure to create a corresponding CSS file

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
      </header>

      <div className="about-section">
        {/* add background image here */}
        <h2>HOW TO RECOGNIZE AN ELEWA MEMBER</h2>
        <p>
          Dependeble, Creative, Supportive, OpenMinded and Fun*

          *SERIOUS WHEN IT MATTERS
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
