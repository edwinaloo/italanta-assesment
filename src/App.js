import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import SocialImpact from './SocialImpact';
import About from './About';
import Invest from './Invest';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/social-impact" element={<SocialImpact />} />
          <Route path="/about" element={<About />} />
          <Route path="/invest" element={<Invest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
