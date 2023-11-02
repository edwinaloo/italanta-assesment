import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/social-impact">Social Impact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/invest">Invest</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
