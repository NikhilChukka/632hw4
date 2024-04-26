// Header.js

import React from 'react';

// or less ideally
import { Button } from 'react-bootstrap';

function Header() {
  
  return (
    <header>
    <nav className="ms-auto navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/" >Homework Grader</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li> */}          
          </ul>
        </div>
      </div>
    </nav>
  </header>
  );
}

export default Header;
