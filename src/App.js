import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';

import Nav from './containers/Nav';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route path="/" component={Landing}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
