// CardComponent.js

import React from 'react';
import { Link } from 'react-router-dom';
import Carditerator from './Carditerator';



function Cardcomponent({ title, description, imageUrl,id}) {
    const value1 = `/assignments/${id}`
    const value2 = `/quizs/${id}`
    const handleButtonClick = () => {
        alert('Hello'+id);
        //window.open('https://www.google.com/?client=safari')
        //window.open('./components/next.html')
       

      };
  return (
    <div className="card" id={id } style={{width : " 20rem" }} >
       <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
         <Link to={value1} className="btn btn-primary" >Homework </Link> &nbsp;
         
      </div>
    </div>

    
 );
}


export default Cardcomponent;
