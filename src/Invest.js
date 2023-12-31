import React from 'react';
import './invest.css'; // Make sure to create a corresponding CSS file

const Invest = () => {
  return (
    <div className="invest-page">
      <header className="invest-header">
        <h1>Invest with Elewa</h1>
      </header>

      <div className="invest-section">
        <h5>Trade, not aid</h5>
        <p>
          Southern innovations addressing global problems
        </p>
      </div>

      <div className="invest-section">
        <h2>How we see it differently</h2>
        <p>
          The global South is rapidly catching up with the "developed" world. It's time for you to get to know the rapid development,<b>
          innovation, and drive going on in this part of the world (East-Africa, South Asia, and beyond).</b>
        </p>
      </div>

      <div className="invest-section">
        <h2>Key figures</h2>
        <p>
          {/* Add more info. */}
        </p>
      </div>

      <div className="invest-section">
        <h1>Elewa NV, a multi-stakeholder cooperation</h1>
        <h3>
          At the heart of Elewa lies the structure Elewa NV. Based in Brussels, Belgium, Elewa NV is a private holding company that controls the assets of all Elewa activities.

          Elewa NV is owned and controlled by Elewa's founder, a small community of investors who share the vision of Elewa, and Elewa employees based throughout the activities of the group.
        </h3>
      </div>

      <div className="invest-section">
        <h1>The Elewa Creative Hub</h1>
        <h3>
          Coming soon; The Elewa Creative Hub lies at the heart of our organization. A two-acre property at the center of Nairobi's creative district, the hub connects all Elewa's activities under a single banner.

          Through partnerships with the creative community, the Elewa Hub will organize vibrant activities that bring talents from different fields (tech, business, art, fashion) together to nurture continuous innovation.
        </h3>
      </div>

      <div className="invest-section">
        <h1>Investing in Elewa NV</h1>
        <h3>
          From time to time, we offer investment opportunities (private equity & debt) to our community of investors. Interested in taking part when this opportunity arrives?
        </h3>
        <button className="invest-button">Learn More</button>
      </div>

      <div className="invest-section">
        <h1>Become part of our mission. And start investing.</h1>
      </div>
    </div>
  );
};

export default Invest;
