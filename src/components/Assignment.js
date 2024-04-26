import React, { useRef } from 'react';
import Header from './header';
import Sidebar from './Sidebar'
import FilePreview from './FilePreview'
import { Link } from 'react-router-dom';

function Assignment(){
  //const inputFile = useRef('AC12.pdf')
  const handleonclick = () => {
    alert('test')
  }
    return(
        <div>
         
        <Header />
        <br></br>
        <h5 align='center'>Assignment 1</h5>
        &nbsp;&nbsp;&nbsp; <Link to='/posthw' className="btn btn-outline-info" >Post a New Homework </Link> &nbsp;
<<<<<<< HEAD
        &nbsp;&nbsp;&nbsp; <Link to='/GPACalculator' className="btn btn-outline-info" >Calculate Final Grade </Link> &nbsp;
=======
        &nbsp;&nbsp;&nbsp; <Link to='/GPACalculator' className="btn btn-outline-info" >Calculate Score </Link> &nbsp;
>>>>>>> ebb866d (commit)

        <table class="table">
  <thead>
    <tr>
      <th scope="col">#Gnumber</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Grade Homework</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">G0123</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><a href="/grading" >Assignment1</a></td>
      <td>100</td>
    </tr>
    <tr>
      <th scope="row">G0134</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><a href="/grading" >Assignment1</a></td>
      <td>99</td>
    </tr>
    <tr>
      <th scope="row">G0198</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td><a href="/grading" >Assignment1</a> </td>
      <td>100</td>
    </tr>
  </tbody>
</table>

<h5 align='center'>Assignment 2</h5>
     

        <table class="table">
  <thead>
    <tr>
      <th scope="col">#Gnumber</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Grade Homework</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">G0123</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><a href="/grading" >Assignment1</a></td>
      <td>100</td>
    </tr>
    <tr>
      <th scope="row">G0134</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><a href="/grading" >Assignment1</a></td>
      <td>99</td>
    </tr>
    <tr>
      <th scope="row">G0198</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td><a href="/grading" >Assignment1</a> </td>
      <td>100</td>
    </tr>
  </tbody>
</table>

<h5 align='center'>Assignment 3</h5>
       
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#Gnumber</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Grade Homework</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">G0123</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><a href="/grading" >Assignment1</a></td>
      <td>100</td>
    </tr>
    <tr>
      <th scope="row">G0134</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><a href="/grading" >Assignment1</a></td>
      <td>99</td>
    </tr>
    <tr>
      <th scope="row">G0198</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td><a href="/grading" >Assignment1</a> </td>
      <td>100</td>
    </tr>
  </tbody>
</table>

       
       
        
        </div>

    );
}
export default Assignment;