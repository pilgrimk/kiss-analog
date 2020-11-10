import React from 'react';
import './App.css';
import Head from './Head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Home from './Home';
import CircuitDesign from './CircuitDesign';
import EquipmentReviews from './EquipmentReviews';
import KissU from './KissU';
import Channel from './Channel';
import Blog from './Blog';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Head />
        <Navigation />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/circuit-design">
            <CircuitDesign />
          </Route>
          <Route path="/equipment-reviews">
            <EquipmentReviews />
          </Route>
          <Route path="/kiss-u">
            <KissU />
          </Route>
          <Route path="/channel">
            <Channel />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>

        <Footer />
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
