import {
  Link
} from "react-router-dom";
import React from 'react'

const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <Link to="/" className="navbar-brand">Home</Link>
        <Link to="/tasks" className="navbar-brand">Tasks</Link>
        <Link to="/events" className="navbar-brand">Events</Link>
        <Link to="/about-us" className="navbar-brand">About us</Link>
        <Link to="/posts" className="navbar-brand">Posts</Link>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>

  )
}

export default Header
