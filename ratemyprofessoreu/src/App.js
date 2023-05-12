import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/Login';
import Register from './pages/Register';
// Import other page components as needed


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* Add more routes for other pages */}
      </Switch>
    </Router>
  );
};

export default App;

