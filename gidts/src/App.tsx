
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/general.css';
import './styles/pages.css';
import './styles/sections.css';
import './styles/controls.css';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Lists from './pages/lists';
import Settings from './pages/settings';
import Network from './pages/network';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Lists}/>
        <Route path="/settings" exact component={Settings}/>
        <Route path="/network" exact component={Network}/>
      </Router>
    </div>
  );
}

export default App;
