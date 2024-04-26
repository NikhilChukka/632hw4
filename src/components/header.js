// Header.js

import React from 'react';

// or less ideally
import { Button } from 'react-bootstrap';

function Header() {
  
  return (
    <header>
    <nav className="ms-auto navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
<<<<<<< HEAD
        <a className="navbar-brand" href="/">Homework Grader</a>
=======
        <a className="navbar-brand" href="/" >Homework Grader</a>
>>>>>>> ebb866d (commit)
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
<<<<<<< HEAD
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            
          
=======
            {/* <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li> */}          
>>>>>>> ebb866d (commit)
          </ul>
        </div>
      </div>
    </nav>
  </header>
  );
}

export default Header;
