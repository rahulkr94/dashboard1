import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/login';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/dashboard/:id" component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
