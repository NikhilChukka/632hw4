import React from "react";
import Header from "./header";
import Sidebar from "./Sidebar";

function Activitystream(){
    let storage = {}
    let keys = Object.keys(sessionStorage)
    const update_class = () =>{
      let loc = window.location.href
  let ele;
  let home;
  if(keys.length == 0){
    return(
      <div className="container">
        <h2>Recent Activity</h2>
        <h4>Recent Homework added</h4>
        <h4>No recent homework posted</h4>

      </div>
    )
  }
  if(loc.includes('Activitystream')){
    ele = document.getElementById('Activitystream')
    home = document.getElementById('home')
    console.log(ele.classList)
    ele.classList.add('active')
    home.classList.remove('active')
    //ele.className = "nav-link text-white active";
    //home.className = "nav-link text-white"
  }
    }
     console.log(keys)

    
   return(
    <div>
        <Header/>
       
    <div className="container">
    <h2>Recent Activity</h2>
    <h4>Recent Homework added</h4>
    {Object.keys(sessionStorage).map((keyName, i) => (
    <li className="travelcompany-input" key={i}>
        <span className="input-label"> {i+1} Question: {sessionStorage[keyName]}</span>
    </li>
))}


<h4 class="text-muted">Recently Created New Class SWE 632</h4>
&ensp;
<h5>Recently added John</h5>
<h5>Recently added Ash</h5>
<h5>Recently added Harry</h5>
<h5>Recently added Peter</h5>
</div>
  </div>
  );

}

export default Activitystream;