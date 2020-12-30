import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './Components/Head';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import CircuitDesign from './Components/CircuitDesign';
import EquipmentReviews from './Components/EquipmentReviews';
import KissU from './Components/KissU';
import Blog from './Components/Blog';
import BottomCards from './Components/BottomCards';
import Footer from './Components/Footer';
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
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>

        <BottomCards />
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
