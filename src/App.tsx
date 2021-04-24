import './styles/pages.css';
import './styles/general.css';
import './styles/sections.css';
import './styles/controls.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Lists from './pages/lists';
import Network from './pages/network';
import Settings from './pages/settings';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
