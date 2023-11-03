import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/social-impact">Social Impact</Link></li>
        <li><Link to="/invest">Invest</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
