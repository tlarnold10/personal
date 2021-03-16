import React from 'react';
import { BrowserRouter, Link, NavLink, } from 'react-router-dom';

function Nav() {
  return (
    <div className="uk-container">
    <nav className="uk-navbar">
        <ul className="uk-navbar-nav">
            <li><img style={{ padding: "5px" }} 
                      src="./ArnoldTechnologies_logo.jpg" 
                      width="90" alt="arnold-tech-logo" uk-img/></li>
            <li><Link to="/" style={{ paddingBottom: "20px" }}>Home</Link></li>
            <li><Link to="/about" style={{ paddingBottom: "20px" }}>About</Link></li>
            <li><Link to="/experience" style={{ paddingBottom: "20px" }}>Experience</Link></li>
            <li><Link to="/projects" style={{ paddingBottom: "20px" }}>Projects</Link></li>
            <li><Link to="/business" style={{ paddingBottom: "20px" }}>Arnold Technologies</Link></li>
        </ul>
    </nav>
    </div>
  );
}

export default Nav;
