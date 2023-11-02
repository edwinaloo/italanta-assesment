import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import SocialImpact from './SocialImpact';
import About from './About';
import Invest from './Invest';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/social-impact" component={SocialImpact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/invest" component={Invest} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
