
import './App.css';
import Details from './Components/Details';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Nav from './Components/Nav';
import Home from './Components/Home';
import Counter from './Components/Counter';
import Users from './Components/Users';
import Dropdown from './Components/Dropdown';

function App() {
  return (
    <div className="container">
      <Router>
        <Nav/>
        <Switch>
        <Route path="/home" exact component={Home}/>
        <Route path="/details" exact component={Details}/>
        <Route path="/counter" exact component={Counter}/>
        <Route path="/users" exact component={Users}/>
        <Route path="/dropdown" exact component={Dropdown}/>
        
        </Switch>
      </Router>
     
     
    </div>
  );
}

export default App;
