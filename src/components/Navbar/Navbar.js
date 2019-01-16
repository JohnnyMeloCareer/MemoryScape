// Import react from react
// Logic
// Import "./Navbar.css"
// State component that takes in props
// Navbar will take in props
// Either take in props from the card, or it going to have it own state

import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-md navbar-dark bg-color">
    <div className="navbar-collapse order-1 order-md-0 dia;-collapse2">
      <ul className="navbar-nav mr-auto">
        <li id="currentScore">
          <a className="nav-link" href="/">
            MemoryScape
          </a>
        </li>
      </ul>
    </div>
    <div className="mx-auto order-0">
      <span className="nav-item">
        <span className="nav-link" id="rw">
          {props.rightWrong}
        </span>
      </span>
    </div>
    <div className="navbar-collapse order-3 dual-collapse2">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <span className="nav-link" id="currentScore">
            Current Score: {props.score}
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link" id="topScore">
            Top Score: {props.topScore}
          </span>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;