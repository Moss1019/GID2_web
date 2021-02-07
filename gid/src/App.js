import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './pages/register';
import List from './pages/list';
import Settings from './pages/settings';
import Login from './pages/login.jsx';
import Network from './pages/network';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/register" component={Register} />
        <Route path="/settings" component={Settings} />
        <Route path="/network" component={Network} />
        <Route path="/" exact component={List} />
      </Router>
    </div>
  );
}

export default App;
