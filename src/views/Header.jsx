import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react'
import Tasks from './Tasks'
import Events from '../components/Events'
import AboutUs from "./AboutUs";

const Header = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <Link to="/" className="navbar-brand">Home</Link>
        <Link to="/tasks" className="navbar-brand">Tasks</Link>
        <Link to="/events" className="navbar-brand">Events</Link>
        <Link to="/about-us" className="navbar-brand">About us</Link>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>

      <Switch>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          
        </Switch>

    </Router>
  )
}

export default Header
