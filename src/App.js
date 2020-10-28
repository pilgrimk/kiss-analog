import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Home from './Home';
import CircuitDesign from './CircuitDesign';
import EquipmentReviews from './EquipmentReviews';
import KissU from './KissU';
import Channel from './Channel';
import Blog from './Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div classname="App">
        <Navigation />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/circuit-design">
            <CircuitDesign />
          </Route>
          <Route exact path="/equipment-reviews">
            <EquipmentReviews />
          </Route>
          <Route exact path="/kiss-u">
            <KissU />
          </Route>
          <Route exact path="/channel">
            <Channel />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function NoMatch(){
  return(
    <div>
      <h1>404 Page Not Found</h1>
    </div>
  )
}

export default App;
