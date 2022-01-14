//import from npm packages
import './App.css';
import { BrowserRouter as
  Router,
  Route,
  Switch } from 'react-router-dom';

//import path specific 
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
    <Router>
  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
