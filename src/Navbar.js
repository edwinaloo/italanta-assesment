import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/social-impact">Social Impact</Link></li>
        <li><Link to="/invest">Invest</Link></li>
        {/* <li><Link to="/news">News</Link></li> */}
        {/* <li><Link to="/contact">Contact</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
