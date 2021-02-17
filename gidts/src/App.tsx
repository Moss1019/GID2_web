
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/general.css';
import './styles/pages.css';
import './styles/sections.css';
import './styles/controls.css';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ListsPage from './pages/listspage';
import SettingsPage from './pages/settingspage';
import NetworkPage from './pages/networkpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/settings" component={SettingsPage} />
        <Route path="/network" component={NetworkPage} />
        <Route path="/" exact component={ListsPage} />
      </Router>
    </div>
  );
}

export default App;
