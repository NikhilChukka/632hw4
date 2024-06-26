import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Sidebar() {
  console.log(window.location.href)

  

  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style= {{width: "280px" , height:'100vh' , left:'0px',display:'flex'}} >
    {/* <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span class="fs-4">Sidebar</span>
    </a> */}

    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="/" id="home" class="nav-link text-white active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li>
        <a href="/Activitystream" id="Activitystream" class="nav-link text-white" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Activity Stream
        </a>
      </li>
      <li>
        <a href="/sendemail" id='sendemail'class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
          Send Email
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
          Organizations
        </a>
      </li>
  
    </ul>
     <hr></hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="#" alt="" width="32" height="32" class="rounded-circle me-2"></img>
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" >
        
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></hr></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
  
  );
  
}

export default Sidebar;

