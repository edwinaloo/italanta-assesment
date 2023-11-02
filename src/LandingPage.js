import React from 'react';
import './landingpage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to Elewa</h1>
        <p>Your source for social impact and investment.</p>
      </header>
      <section className="features">
        <div className="feature">
          <i className="fas fa-handshake"></i>
          <h2>Social Impact</h2>
          <p>Discover our social impact initiatives.</p>
        </div>
        <div className="feature">
          <i className="fas fa-chart-line"></i>
          <h2>Invest</h2>
          <p>Explore investment opportunities with us.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
