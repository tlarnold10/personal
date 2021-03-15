import React from 'react';

function Nav() {
  return (
    <div className="uk-container">
    <nav className="uk-navbar">
        <ul className="uk-navbar-nav">
            <li><img style={{ padding: "5px" }} 
                      src="./ArnoldTechnologies_logo.jpg" 
                      width="90" alt="arnold-tech-logo" uk-img/></li>
            <li className="uk-active"><a href="" style={{ paddingBottom: "20px" }}>Home</a></li>
            <li><a href="" style={{ paddingBottom: "20px" }}>About</a></li>
            <li><a href="" style={{ paddingBottom: "20px" }}>Experience</a></li>
            <li><a href="" style={{ paddingBottom: "20px" }}>Projects</a></li>
            <li><a href="" style={{ paddingBottom: "20px" }}>Arnold Technologies</a></li>
        </ul>
    </nav>
    </div>
  );
}

export default Nav;
