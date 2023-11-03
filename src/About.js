import React from 'react';
import './About.css'; // Make sure to create a corresponding CSS file

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
      </header>

      <div className="about-section">
        <h2>HOW TO RECOGNIZE AN ELEWA MEMBER</h2>
        <p>
          Dependable, Creative, Supportive, Open-Minded, and Fun*<br />
          *SERIOUS WHEN IT MATTERS
        </p>
      </div>

      <div className="about-section">
        <h2>We care</h2>
        <p>
          Elewa is a mission-driven organization. We make use of our cooperative and shared culture to drive the needle for the development of people and the environment. We care about our growth, but also care deeply about the context surrounding us.
        </p>
        <p>
          Our investments are, therefore, not limited to internal ones but contribute heavily to our community and environment. From training the next scout leaders on sustainable practices to bridging the employment gap for junior software developers.
        </p>
      </div>

      <div className="about-section">
        <h2>Holistic solutions</h2>
        <p>
          We go beyond a simple patch-up but develop lasting solutions through holistic design.
        </p>
      </div>

      <div className="about-section">
        <h2>Impact</h2>
        <p>
          Impact as a direct or indirect result. All our respective organizations have underlying theories of change.
        </p>
      </div>

      <div className="about-section">
        <h2>Open data</h2>
        <p>
          Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects.
        </p>
      </div>

      <div className="about-section">
        <h1>Team | Management</h1>
        <div>
          {/* Add images */}
        </div>
      </div>

      <div className="about-section">
        <h1>Our culture & Values</h1>
        <p>
          Our culture, CODE-(T), defines us. It protects and guides us to success. It keeps our team and management accountable to itself, its objective, and our long-term mission.
        </p>
      </div>

      <div className="about-section">
        <h1>Cooperative</h1>
        <p>
          One for all, all for one! We have a cooperative and open mindset. If one of us grows, all will follow.
        </p>
      </div>

      <div className="about-section">
        <h1>Ownership</h1>
        <p>
          We are dependable and honor our commitments. When things don't go as planned, as they sometimes do, we communicate early to avoid catastrophe.
        </p>
      </div>

      <div className="about-section">
        <h1>Detail</h1>
        <p>
          We are a "Centre of Excellence" as per global standards. We only compete with ourselves, but find in the global standard our only worthy rival.
        </p>
      </div>

      <div className="about-section">
        <h1>Empathy</h1>
        <p>
          We are nothing without people, and people have different contexts and needs. Our organization acts as a safe haven and shield for those in need.
        </p>
      </div>

      <div className="about-section">
        <h1>Transparency</h1>
        <p>
          Transparency, an open mind, and an open heart hold our organization together. We commit to and promote full transparency to ourselves, our stakeholders, and our beneficiaries. We furthermore invest heavily in open-source and open-data projects, as true potential lies everywhere. Not just within.
        </p>
      </div>

      <div className="about-section">
        <h2>How to get there</h2>
        <p>
          Based in the heart of Westlands, Nairobi, Kenya, we are easily accessible from all parts of the city. Not in town? Teams, Meets, or Zoom are our second name. Book an appointment today via contact@elewa.ke!
        </p>
        {/* Add Google Map directions */}
        {/* Add a button */}
      </div>

      <div className="about-section">
        <h1>Our history</h1>
        {/* Add complex UI */}
      </div>

      <div className="about-section">
        <h2>Learn more about <b><h1><strong>Elewa's social impact</strong></h1></b></h2>
      </div>
    </div>
  );
};

export default About;
