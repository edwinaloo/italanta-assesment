import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import SocialImpact from './SocialImpact';
import About from './About';
import Invest from './Invest';
import Home from './home';

function App() {
  return (
    <Router>      
      <div>      
      {/* <Header />  */}
        <Routes>
          <Route path="/social-impact" element={<SocialImpact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/invest" element={<Invest />} />
        </Routes>
        <Header />
      </div>
    </Router>
  );
}

export default App;
